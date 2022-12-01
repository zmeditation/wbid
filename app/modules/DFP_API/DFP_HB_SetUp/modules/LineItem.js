const {AccessOverOAuth2} = require("../../services/Auth/access");
const {ErrorHandler} = require("../handlers/error-handler");
const Dfp = require("node-google-dfp");
exports.LineItem = class extends ErrorHandler {
    constructor() {
        super();
    }

    async getCurrency(currency) {
        try {
            console.log('Get current currency exchange rates...');
            const axios = require('axios');
            const fse = require('fs-extra');
            const path = require('path');
            const {data} = await axios.get('https://api.exchangeratesapi.io/latest?base=USD');
            const {rates} = data;
            await fse.outputJson(path.join(__dirname, '../../../../modules/PrebidBuilder/dist/rates.json'), rates);
            console.log(`Coefficient for ${currency} to USD is ${rates[currency]}`);
            return rates[currency];
        } catch (e) {
            const rates = JSON.parse(await fse.readFile(
                path.join(__dirname, '../../../../modules/PrebidBuilder/dist/rates.json'), 'utf-8'
            ));
            console.log(`Coefficient for ${currency} to USD is ${rates[currency]}`);
            return rates[currency];
        }
    };

    async init() {
        const service = new AccessOverOAuth2();
        this.LineItemService = await service.getService("LineItemService");
    }

    async checkIfLineItemsExist(orderid) {
        try {
            await this.init();
            this.statement = new Dfp.Statement(`WHERE OrderId = ${orderid}`);
            let [{rval}] = await this.LineItemService.getLineItemsByStatementAsync(
                this.statement
            );
            return {size: rval.totalResultSetSize, data: rval.results};
        } catch (e) {
            await this.handle(e);
        }
    }

    async parseLineItems() {
        await this.init();
    }

    async createLineItems(
        orderId,
        sizes,
        price = 10000,
        granuality = 10000,
        amount,
        adUnitId,
        currencyCode = 'USD'
    ) {
        try {
            await this.init();
            let LineItems = [];
            if (currencyCode === "UAH") {
                let coef = await this.getCurrency('CZK');
                coef = parseFloat(coef).toFixed(2); // JUST FOR TEST!!!
                price = price * coef;
                granuality = granuality * coef;
            }

            if (currencyCode !== 'USD' && currencyCode !== 'UAH') {
                const coef = await this.getCurrency(currencyCode);
                price = price * coef;
                granuality = granuality * coef;
            }

            for (let i = 1; i <= amount; i++) {
                LineItems.push(
                    Object.assign(
                        {},
                        {
                            orderId: orderId,
                            name: `lineItem_${price / 1000000}$_${Math.random()
                                .toString(36)
                                .substr(2, 9)}`,
                            startDateTimeType: "IMMEDIATELY",
                            unlimitedEndDateTime: true,
                            creativeRotationType: "EVEN",
                            lineItemType: "PRICE_PRIORITY",
                            costPerUnit: {
                                currencyCode: `${currencyCode}`,
                                microAmount: price
                            },
                            costType: "CPM",
                            creativePlaceholders: sizes,
                            primaryGoal: {
                                goalType: "NONE",
                                unitType: "IMPRESSIONS"
                            },
                            targeting: [
                                {
                                    inventoryTargeting: {
                                        targetedAdUnits: [{adUnitId, includeDescendants: true}]
                                    }
                                }
                            ]
                        }
                    )
                );
                price = price + granuality;
            }
            const lines = {
                lineItems: LineItems
            };
            const [{rval}] = await this.LineItemService.createLineItemsAsync(lines);
            return rval;
        } catch (e) {
            await this.handle(e);
        }
    }

    async getLineItems(orderid) {
        try {
            await this.init();
            this.statement = new Dfp.Statement(`WHERE OrderId = ${orderid}`);
            let [{rval}] = await this.LineItemService.getLineItemsByStatementAsync(
                this.statement
            );
            return rval.results.filter(line => {
                return line.isArchived === false;
            });
        } catch (e) {
            await this.handle(e);
        }
    }

    async updateLineItemTargeting(lines, target) {
        try {
            await this.init();
            const chunk = chunkArray(lines, 50);
            for (let lines of chunk) {
                let lineItems = [];
                for (let line of lines) {
                    for (let t of target) {
                        if (line.costPerUnit.microAmount / 1000000 === parseFloat(t.name)) {
                            lineItems.push(
                                Object.assign(line, {
                                    targeting: {
                                        inventoryTargeting: line.targeting.inventoryTargeting,
                                        customTargeting: {
                                            attributes: {"xsi:type": "CustomCriteriaSet"},
                                            logicalOperator: "OR",
                                            children: [
                                                {
                                                    attributes: {"xsi:type": "CustomCriteria"},
                                                    keyId: t.keyid,
                                                    valueIds: [t.id],
                                                    operator: "IS"
                                                }
                                            ]
                                        }
                                    }
                                })
                            );
                        }
                    }
                }
                await this.LineItemService.updateLineItemsAsync({
                    lineItems
                });
                console.log(`Line Items updated`);
            }
        } catch (e) {
            await this.handle(e);
        }
    }
};

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
