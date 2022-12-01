const {LineItem} = require("./model/LineItem");
const {Inventory} = require("./model/Inventory");
const {Creative} = require("./model/Creative");
const {ConnectLineItemAndCreatives} = require("./model/ConnectLineItemAndCreatives");
const {to} = require("await-to-js");
require("colors");
const {Socket} = require("../../server/socket");
const io = new Socket();

const inventoryService = new Inventory();
const lineItemService = new LineItem();
const creativeService = new Creative();
const connectService = new ConnectLineItemAndCreatives();
const POST_BID_ORDER_ID = "2736771571";
const prefix = 'INVENTORY.';

exports.DFP_CALL_API = class {
    constructor() {
    }

    async createPostBidInventory(config, socketId) {

        let err, unit, placement, lineItem, cr, connect;
        let {configname, size, creative} = config;

        [err, unit] = await to(inventoryService.createAdUnit({configname, size}));
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            console.log(err.message || err);
            return;
        }
        if (unit) io.push(`${prefix}AD_UNIT_CREATED`, false, socketId, "info");
        console.log(
            "Create AD Unit".bgBlue.black
            // unit
        );
        [err, placement] = await to(inventoryService.addToPlacement(unit));
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            console.log(err.message || err);
        }
        if (placement) {
            io.push(`${prefix}ADD_TO_PLACEMENT`, false, socketId, "info");
            console.log(
                "Add to Placement".bgBlue.black
                // placement
            );
        }

        [err, lineItem] = await to(
            lineItemService.makeLineItem({
                configname,
                size,
                unit,
                POST_BID_ORDER_ID
            })
        );
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            console.log(err.message || err);
            return;
        }
        if (lineItem) io.push(`${prefix}LINE_ITEM_CREATED`, false, socketId, "info");
        console.log(
            "Create LineItem".bgBlue.black
            // lineItem
        );
        [err, cr] = await to(
            creativeService.createCreative({configname, size, creative})
        );
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            console.log(err.message || err);
            return;
        }
        if (cr) io.push(`${prefix}CREATIVE_CREATED`, false, socketId, "info");
        console.log(
            "Create Creative".bgBlue.black
            // cr
        );
        [err, connect] = await to(
            connectService.connectLineItemsAndCreatives(cr, lineItem)
        );
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            console.log(err.message || err);
            return;
        }
        if (connect) io.push(`${prefix}CONNECT_CREATED`, false, socketId, "info");
        console.log(
            "Create Connect".bgBlue.black
            // connect
        );
        return {unit, lineItem, cr, connect};
    }

    async createAmazonInventory({size, configname}, socketId) {
        let err, unit;
        configname = `Amazon_${configname}`;
        [err, unit] = await to(inventoryService.createAdUnit({configname, size}));
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            console.log(err.message || err);
            return;
        }
        if (unit) io.push(`${prefix}AMAZON_AD_UNIT_CREATED`, false, socketId, "info");
        console.log(
            "Create Amazon AD Unit".bgBlue.black
            // unit
        );
        return {unit};
    }

    async deleteAmazonInventory(id, socketId) {
        let err, adunit;
        [err, adunit] = await to(inventoryService.archiveAdUnit(id));
        if (err) {
            io.push(err.message, false, socketId, "error");
            console.log(err.message);
            return;
        }
        if (adunit) io.push(`${prefix}AMAZON_AD_UNIT_DELETED`, false, socketId, "info");
        console.log(
            "Archive Amazon Ad Unit".bgBlue.black
            // connect
        );
    }

    async updatePostBidInventory(
        configname,
        crid,
        creative,
        width,
        height,
        socketId
    ) {
        let cr, err;
        [err, cr] = await to(
            creativeService.updateCreative(configname, crid, creative, width, height)
        );
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            throw new Error(err.message || err);
        }
        if (cr) io.push(`${prefix}CREATIVE_UPDATED`, true, socketId, "success");
        console.log(
            "Update Creative".bgBlue.black
            // connect
        );
    }

    async deletePostBidInventory(payload, socketId) {
        let err, item, adunit, placement;
        let {unit, lineItem} = payload.dataValues.inventory;

        [err, item] = await to(lineItemService.archiveLineItem(lineItem[0].id));
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            console.log(err.message || err);
            return;
        }
        if (item) io.push(`${prefix}LINE_ITEM_DELETED`, false, socketId, "info");
        console.log(
            "Archive LineItem".bgBlue.black
            // connect
        );
        [err, adunit] = await to(inventoryService.archiveAdUnit(unit[0].id));
        if (err) {
            io.push(err.message || err, false, socketId, "error");
            console.log(err.message || err);
            return;
        }
        if (adunit) io.push(`${prefix}AD_UNIT_DELETED`, false, socketId, "info");
        console.log(
            "Archive Ad Unit".bgBlue.black
            // connect
        );
        [err, placement] = await to(
            inventoryService.removeFromPlacement(unit[0].id)
        );
        if (err) {
            console.log(err.message || err);
            io.push(err.message || err, false, socketId, "error");
        }
        if (placement)
            console.log(
                "Disconnect from Placement".bgBlue.black
                // connect
            );
        io.push(`${prefix}UNIT_DISCONNECTED`, false, socketId, "info");
    }
};

// const dfp = new DFP_API();
// dfp.createPostBidInventory();
