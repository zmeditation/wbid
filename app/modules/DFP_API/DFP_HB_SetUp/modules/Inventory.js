const {AccessOverOAuth2} = require("../../services/Auth/access");
const Dfp = require("node-google-dfp");
exports.Inventory = class {
    constructor() {
        this.statementSizes = new Dfp.Statement("WHERE targetPlatform = ANY");
    }

    async init() {
        const service = new AccessOverOAuth2();
        this.InventoryService = await service.getService("InventoryService");
    }

    async getSizes() {

        return [
            {size: {width: 300, height: 250, isAspectRatio: false}},
            {size: {width: 728, height: 90, isAspectRatio: false}},
            {size: {width: 160, height: 600, isAspectRatio: false}},
            {size: {width: 300, height: 600, isAspectRatio: false}},
            {size: {width: 970, height: 250, isAspectRatio: false}},
            {size: {width: 970, height: 90, isAspectRatio: false}},
            {size: {width: 200, height: 200, isAspectRatio: false}},
            {size: {width: 320, height: 50, isAspectRatio: false}},
            {size: {width: 320, height: 320, isAspectRatio: false}},
            {size: {width: 320, height: 100, isAspectRatio: false}},
            {size: {width: 250, height: 250, isAspectRatio: false}},
            {size: {width: 240, height: 400, isAspectRatio: false}}
        ];
    }
};
