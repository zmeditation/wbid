const {AccessOverOAuth2} = require("../../services/Auth/access");
const Dfp = require("node-google-dfp");
const {ErrorHandler} = require("../handlers/error-handler");
exports.CustomTargeting = class extends ErrorHandler {
    constructor() {
        super();
    }

    async init() {
        const service = new AccessOverOAuth2();
        this.CustomTargetingService = await service.getService(
            "CustomTargetingService"
        );
    }

    async createCustomTargetKey(name) {
        try {
            await this.init();
            const key = {
                keys: [
                    {
                        name,
                        displayName: "hb_pb",
                        type: "PREDEFINED"
                    }
                ]
            };
            const [
                {rval}
            ] = await this.CustomTargetingService.createCustomTargetingKeysAsync(key);
            return rval;
        } catch (e) {
            this.handle(e);
        }
    }

    async getCustomTargetingKey() {
        await this.init();
        this.statement = new Dfp.Statement(`WHERE name = hb_pb`);
        const [
            {rval}
        ] = await this.CustomTargetingService.getCustomTargetingKeysByStatementAsync(
            this.statement
        );
        return rval;
    }

    addNull(number) {
        if (number.toString().length === 3) {
            return number.toString() + "0";
        } else if (number.toString().length === 1) {
            return number.toString() + ".00";
        } else {
            return number.toString();
        }
    }

    async findExistingCustomTargetingKey(key) {
        try {
            await this.init();
            this.statement = {
                filterStatement: {
                    query: `WHERE name = \'${key}\' OR displayName = \'${key}\'`
                }
            };
            let [
                {rval}
            ] = await this.CustomTargetingService.getCustomTargetingKeysByStatementAsync(
                this.statement
            );
            console.log('totalResultSetSize', rval["totalResultSetSize"]);
            if (rval["totalResultSetSize"] !== 0) {
                let res = rval.results[0];
                let targetValueData = await this.getCustomTargeting(res.id);
                let sortTargetValueData = targetValueData.sort((a, b) => {
                    if (+a.name < +b.name) {
                        return -1;
                    }
                    if (+a.name > +b.name) {
                        return 1;
                    }
                    return 0;
                });
                // const lastValue = sortTargetValueData[targetValueData.length - 1].name;
                console.log('targetValueData', sortTargetValueData.length);
                let updateVal = [];
                let createVal = [];
                const keyid = targetValueData[0].keyid
                for (let i = 1; i <= 800; i++) {
                    if (i <= sortTargetValueData.length) {
                        updateVal.push(
                            Object.assign(
                                {},
                                {
                                    customTargetingKeyId: targetValueData[i-1].keyid,
                                    id: targetValueData[i-1].id,
                                    name: this.addNull(i / 100),
                                    displayName: key,
                                    matchType: "EXACT",
                                    status: "ACTIVE"
                                }
                            )
                        );
                    }
                    if (i > sortTargetValueData.length) {
                        createVal.push(
                            Object.assign(
                                {},
                                {
                                    customTargetingKeyId: keyid,
                                    name: this.addNull(i / 100),
                                    displayName: key,
                                    matchType: "EXACT",
                                    status: "ACTIVE"
                                }
                            )
                        );
                    }
                }
                // targetValueData.forEach((v, index) => {
                //     if (index !== 0 && +this.addNull(index / 100) <= +lastValue) {
                //         updateVal.push(
                //             {
                //                 customTargetingKeyId: v.keyid,
                //                 id: v.id,
                //                 name: this.addNull(index / 100),
                //                 displayName: key,
                //                 matchType: "EXACT",
                //                 status: "ACTIVE"
                //             }
                //         )
                //     }
                //     if (+this.addNull(index / 100) > +lastValue) {
                //         createVal.push(
                //             {
                //                 customTargetingKeyId: v.keyid,
                //                 id: v.id,
                //                 name: this.addNull(index / 100),
                //                 displayName: key,
                //                 matchType: "EXACT",
                //                 status: "ACTIVE"
                //             }
                //         )
                //     }
                // });
                const updateValue = { values: updateVal };
                const createValue = { values: createVal };
                let returnedUpdVal = await this.CustomTargetingService.updateCustomTargetingValuesAsync(
                    updateValue
                );
                console.log('returnedUpdVal', returnedUpdVal[0]['rval'].length);
                let targetBucket = returnedUpdVal[0]['rval'].map(t => {
                    return {
                        id: t.id,
                        name: t.name,
                        keyid: t.customTargetingKeyId
                    };
                });
                if (createVal.length) {
                    let returnedCreateVal = await this.CustomTargetingService.createCustomTargetingValuesAsync(
                        createValue
                    );
                    console.log('returnedCreateVal', returnedCreateVal[0]['rval'].length);
                    returnedCreateVal[0]['rval'].forEach(el => {
                        targetBucket.push(
                            {
                                id: el.id,
                                name: el.name,
                                keyid: el.customTargetingKeyId
                            }
                        )
                    })
                }

                return {targetBucket, customTargetingDataKey: [{id: res.id}]};
            } else {
                return {
                    customTargetingDataKey: null,
                    targetKeyID: null
                };
            }
        } catch (e) {
            this.handle(e);
        }
    }

    async createCustomTargetValue(customTargetingKeyId) {
        try {
            await this.init();
            let val = [];
            for (let i = 1; i <= 800; i++) {
                val.push(
                    Object.assign(
                        {},
                        {
                            customTargetingKeyId,
                            name: this.addNull(i / 100),
                            matchType: "EXACT"
                        }
                    )
                );
            }
            const value = {values: val};
            const [{rval}] = await this.CustomTargetingService.createCustomTargetingValuesAsync(value);
            return rval;
        } catch (e) {
            this.handle(e);
        }
    }

    async getCustomTargeting(id) {
        try {
            await this.init();
            this.statement = new Dfp.Statement(`WHERE customTargetingKeyId = ${id}`);
            let [
                {rval}
            ] = await this.CustomTargetingService.getCustomTargetingValuesByStatementAsync(
                this.statement
            );
            return rval.results.map(t => {
                return {
                    id: t.id,
                    name: t.name,
                    keyid: t.customTargetingKeyId
                };
            });
        } catch (e) {
            this.handle(e);
        }
    }
};
