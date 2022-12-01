const {allSizes} = require("../../../../modules/PrebidBuilder/modules/allSizes");

exports.Sanitizer = class {
    constructor() {
    }

    isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    async sanitize(req) {
        if (!req.body || typeof req.body != "object")
            return new Error("Incorrect request!");
        let keys = Object.keys(req.body);
        let values = Object.values(req.body);
        let response = {};
        for (let i = 0; i < keys.length; i++) {
            Object.defineProperty(response, keys[i], {
                configurable: false,
                enumerable: true,
                writable: false,
                value: values[i]
            });
        }
        return response;
    }

    async validate(req) {
        return !(!req.body || !req.body['adaptersList']);
    }

    async checkBoolean(req) {
        const {cmp, amazon, analyticsEnable, marketplace, prebidServer, serverTest, shortTag} = req.body;
        const booleanVars = [cmp, amazon, analyticsEnable, marketplace, prebidServer, serverTest, shortTag];
        for (const bVar of booleanVars) {
            if (bVar !== 'true' && bVar !== "false" && bVar !== "" && bVar !== undefined && bVar !== "undefined") {
                return new Error('Incorrect request. All boolean values should be boolean');
            }
        }
        return true;
    }

    checkReqParams(payload) {
        if (!allSizes(`${payload.width}x${payload.height}`)) {
            return {status: 400, valid: false, message: 'Incorrect or non-supported placement size'};
        }
        if (payload.sizes && `${payload.width}x${payload.height}` !== `${payload.sizes}`) {
            return {status: 400, valid: false, message: 'Incorrect request: sizes'};
        }
        if (payload['floorPrice'] && isNaN(parseFloat(payload['floorPrice']))) {
            return {status: 400, valid: false, message: 'Incorrect request: floor price'};
        }
        if (payload['PREBID_TIMEOUT'] && isNaN(parseFloat(payload['PREBID_TIMEOUT']))) {
            return {status: 400, valid: false, message: 'Incorrect request: timeout'};
        }

        if (payload['currency'] && this.isJson(payload['currency']) === false) {
            return {status: 400, valid: false, message: 'Incorrect request: currency'};
        }

        return {valid: true};
    }
};
