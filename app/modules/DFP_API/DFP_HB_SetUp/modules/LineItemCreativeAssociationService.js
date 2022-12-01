const {AccessOverOAuth2} = require("../../services/Auth/access");
const {ErrorHandler} = require("../handlers/error-handler");
const Dfp = require("node-google-dfp");
const fs = require("fs-extra");

class LineItemCreativeAssociation extends ErrorHandler {
    constructor() {
        super();
        this.LineItemCreativeAssociationService;
    }

    async init() {
        const service = new AccessOverOAuth2();
        this.LineItemCreativeAssociationService = await service.getService(
            "LineItemCreativeAssociationService"
        );
    }

    async checkIfLineItemsAndCreativesConnected(creativesData, lineItemBucket) {
        await this.init();
        let dataRval = [];
        for (let cr of creativesData) {
            for (let line of lineItemBucket) {
                this.statement = new Dfp.Statement(
                    `WHERE creativeId = ${cr.id} AND lineItemId = ${line.id}`
                );
                console.log(creativesData.length, lineItemBucket.length);
                let [
                    {rval}
                ] = await this.LineItemCreativeAssociationService.getLineItemCreativeAssociationsByStatementAsync(
                    this.statement
                );
                dataRval.push(rval);
                console.log(rval);
            }
        }
        return dataRval.some(val => {
            return val.totalResultSetSize === 1;
        });
    }

    async connectLineItemAndCreative(creatives, lines, size) {
        try {
            await this.init();
            const sizes = size.map(s => {
                return {width: s.size.width, height: s.size.height};
            });
            let connect = [];
            await fs.writeFile(__dirname + '/data/sizes.json', JSON.stringify(sizes));
            for (let cr of creatives) {
                for (let line of lines) {
                    connect.push(
                        Object.assign(
                            {},
                            {
                                lineItemId: line.id,
                                creativeId: cr.id,
                                sizes
                            }
                        )
                    );
                }
            }
            fs.writeFile(__dirname + '/data/connect.json', JSON.stringify(connect))//store all connects to JSON file
                .then(() => console.log('Connects was saved'))
                .catch(e => console.log(e));
            const connectChunk = chunkArray(connect, 360);
            console.log('connectChunk length:', connectChunk.length);
            let forOneChunk = 84 / connectChunk.length;
            let currentPercentage = 16;
            for (connect of connectChunk) {
                await wait(15000);
                let currentChunk = await this.LineItemCreativeAssociationService.createLineItemCreativeAssociationsAsync(
                    {lineItemCreativeAssociations: connect}
                );
                console.log("chunk generated");
                process.send({type: 'progress', status: 'success', value: (currentPercentage + forOneChunk)});
                currentPercentage += forOneChunk;
                await fs.writeFile(__dirname + '/data/progress.json', JSON.stringify({currentPercentage}));
                await wait(15000);
            }
        } catch (e) {
            fs.writeFile(__dirname + '/data/error.json', JSON.stringify(e.cause.root["Envelope"]["Body"]["Fault"]["detail"]["ApiExceptionFault"]["errors"]));
            if (e.message && e.message.includes('CONCURRENT_MODIFICATION')) {
                console.log('Concurrent Modification error occurred! Trying to restart...');
                let res = await this.checkConnectionLineItemAndCreative();
                await this.connectRestOfLineItemsAndCreatives(res);
            } else if (e.cause.root["Envelope"]["Body"]["Fault"]["detail"]["ApiExceptionFault"]["errors"][0].reason === "ALREADY_EXISTS") {
                await this.updateConnectLineItemAndCreative(creatives, lines, size);
            } else {
                await this.handle(e);
            }

        }
    }

    async updateConnectLineItemAndCreative(creatives, lines, size) {
        try {
            await this.init();
            const sizes = size.map(s => {
                return {width: s.size.width, height: s.size.height};
            });
            let connect = [];
            await fs.writeFile(__dirname + '/data/sizes.json', JSON.stringify(sizes));
            for (let cr of creatives) {
                for (let line of lines) {
                    connect.push(
                        Object.assign(
                            {},
                            {
                                lineItemId: line.id,
                                creativeId: cr.id,
                                sizes
                            }
                        )
                    );
                }
            }
            // fs.writeFile(__dirname + '/data/connect.json', JSON.stringify(connect))//store all connects to JSON file
            //     .then(() => console.log('Connects was saved'))
            //     .catch(e => console.log(e));
            const connectChunk = chunkArray(connect, 360);
            console.log('connectChunk length:', connectChunk.length);
            let forOneChunk = 84 / connectChunk.length;
            let currentPercentage = 16;
            for (connect of connectChunk) {
                await wait(15000);
                let currentChunk = await this.LineItemCreativeAssociationService.updateLineItemCreativeAssociationsAsync(
                    {lineItemCreativeAssociations: connect}
                );
                console.log("chunk updated");
                process.send({type: 'progress', status: 'success', value: (currentPercentage + forOneChunk)});
                currentPercentage += forOneChunk;
                await fs.writeFile(__dirname + '/data/progress.json', JSON.stringify({currentPercentage}));
                await wait(15000);
            }
        } catch (e) {
            if ((e.message && e.message.includes('CONCURRENT_MODIFICATION')) || 
                e.cause.root["Envelope"]["Body"]["Fault"]["detail"]["ApiExceptionFault"]["errors"][0].reason === "NOT_FOUND") {
                console.log('Concurrent Modification error occurred! Trying to restart...');
                let res = await this.checkConnectionLineItemAndCreative();
                await this.connectRestOfLineItemsAndCreatives(res);
            } else {
                await this.handle(e);
            }
        }
    }

    async connectRestOfLineItemsAndCreatives({creativeId, lineItemId}) {
        try {
            await this.init();
            let {creatives, lines} = JSON.parse(await fs.readFile(__dirname + '/data/connect-data.json', 'utf-8'));
            let restOfLineItems;
            if (!lineItemId) {
                restOfLineItems = lines;
            } else {
                restOfLineItems = lines.splice(lines.indexOf(lineItemId), lines.length);
            }
            let restOfCreatives = creatives.splice(creatives.indexOf(creativeId), creatives.length);

            let sizes = JSON.parse(await fs.readFile(__dirname + '/data/sizes.json', 'utf-8'));
            let connect = [];
            for (let cr of restOfCreatives) {
                for (let line of restOfLineItems) {
                    connect.push(
                        Object.assign(
                            {},
                            {
                                lineItemId: line,
                                creativeId: cr,
                                sizes
                            }
                        )
                    );
                }
            }
            const connectChunk = chunkArray(connect, 360);
            console.log('Number of chunks:', connectChunk.length);
            let {currentPercentage} = JSON.parse(await fs.readFile(__dirname + '/data/progress.json', 'utf-8'));
            let forOneChunk = (100 - currentPercentage) / connectChunk.length;
            for (connect of connectChunk) {
                await wait(15000);
                await this.LineItemCreativeAssociationService.createLineItemCreativeAssociationsAsync(
                    {lineItemCreativeAssociations: connect}
                );
                console.log("chunk generated");
                process.send({type: 'progress', status: 'success', value: (currentPercentage + forOneChunk)});
                currentPercentage += forOneChunk;
                await fs.writeFile(__dirname + '/data/progress.json', JSON.stringify({percent: currentPercentage}));
                await wait(15000);
            }

        } catch (e) {
            if (e.message && e.message.includes('CONCURRENT_MODIFICATION')) {
                console.log(e.message);
                let result = await this.checkConnectionLineItemAndCreative();
                await this.connectRestOfLineItemsAndCreatives(result);
            } else {
                await this.handle(e);
            }
        }
    }

    async makeConnect() {
        try {
            await this.init();
            const files = fs.readdirSync("connect/");
            for (let file of files) {
                console.log("timeout start");
                await wait(10000);
                console.log(file);
                let data = fs.readFileSync(`connect/${file}`, "utf-8");
                await this.LineItemCreativeAssociationService.createLineItemCreativeAssociationsAsync(
                    {lineItemCreativeAssociations: JSON.parse(data)}
                );
                console.log("timeout end");
                await wait(10000);
            }
        } catch (e) {
            console.log(e);
        }
    }


    async checkConnectionLineItemAndCreative() {
        try {
            console.log('Check started!');
            await getData();
            await this.init();
            let {creatives, lines} = JSON.parse(await fs.readFile(__dirname + '/data/connect-data.json', 'utf-8'));
            for (let cr of creatives) {
                console.log('Check creative', cr);
                let statement = new Dfp.Statement(
                    `WHERE creativeId = ${cr} AND lineItemId IN (${lines.join(',')})`
                );
                let [{rval}] = await this.LineItemCreativeAssociationService.getLineItemCreativeAssociationsByStatementAsync(
                    statement
                );

                if (rval.results) {
                    for (let res of rval.results) {
                        if (res.status !== 'ACTIVE') {
                            console.log('Creative with broken connection found: ', cr);
                            let successCount = 0;
                            for (let line of lines) {
                                console.log('Check Line Item', line);
                                let st = new Dfp.Statement(
                                    `WHERE creativeId = ${cr} AND lineItemId = ${line}`
                                );
                                let [{rval}] = await this.LineItemCreativeAssociationService.getLineItemCreativeAssociationsByStatementAsync(
                                    st
                                );
                                if (rval.results) {
                                    if (rval.results.status === 'ACTIVE') {
                                        successCount++
                                    } else {
                                        return {creativeId: cr, lineItemId: line}
                                    }
                                }
                            }
                            if (successCount === 0) return {creativeId: cr}
                        }
                    }
                } else {
                    console.log('Creative with broken connection found: ', cr);
                    let successCount = 0;
                    for (let line of lines) {
                        console.log('Check Line Item', line);
                        let st = new Dfp.Statement(
                            `WHERE creativeId = ${cr} AND lineItemId = ${line}`
                        );
                        let [{rval}] = await this.LineItemCreativeAssociationService.getLineItemCreativeAssociationsByStatementAsync(
                            st
                        );
                        if (rval.results) {
                            if (rval.results.status === 'ACTIVE') {
                                successCount++
                            } else {
                                return {creativeId: cr, lineItemId: line}
                            }
                        }
                    }
                    if (successCount === 0) return {creativeId: cr}
                }
            }
        } catch (e) {
            await this.handle(e);
        }
    }
}

module.exports.LineItemCreativeAssociation = LineItemCreativeAssociation;


async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


function chunkArray(myArray, chunk_size) {
    let index = 0;
    const arrayLength = myArray.length;
    const tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }
    return tempArray;
}

async function getData() {
    const creatives = [];
    const lines = [];
    const dataArr = JSON.parse(await fs.readFile(__dirname + '/data/connect.json', 'utf-8'));
    dataArr.forEach(el => {
        creatives.push(el.creativeId);
        lines.push(el.lineItemId);
    });
    return await fs.writeFile(__dirname + '/data/connect-data.json',
        JSON.stringify({creatives: [...new Set(creatives)], lines: [...new Set(lines)]}
    ));
}

