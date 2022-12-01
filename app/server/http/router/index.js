/* eslint-disable prettier/prettier */
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const JsonParser = bodyParser.json();
const {HTTPController} = require("../controllers");

class Router {
    constructor() {
    }

    static routing() {
        return [
            router.get("/getList", HTTPController.getListOfUsersAndAmountOfConfigs),
            router.get("/getUsersList", HTTPController.getUsersListWithSites), // list of all users with their sites
            router.get("/getSettings", HTTPController.getSettingsForAdapter),
            router.get("/getconfig/:id", HTTPController.getConfigById),
            router.get("/getSite/:id", HTTPController.getSiteAndConfigs),
            router.get("/getUser/:id", HTTPController.getUserWithSites), // new
            router.get("/getTags/:id", HTTPController.getTags),
            router.get("/getAllAdapters", HTTPController.getAllAdapters),
            router.get("/getadstxt/:id", HTTPController.getAdsTxt),
            router.get("/getAnalyticsList", HTTPController.getAnalyticsList), // list of analytic modules
            router.get("/sizes", HTTPController.getAllSizes),
            router.get("/bidders", HTTPController.getBidders),
            router.get("/getSupportedServerBidders", HTTPController.getSupportedServerBidders),
            router.post("/deleteUser", JsonParser, HTTPController.deleteUser),
            router.post("/deleteConfig", JsonParser, HTTPController.deleteConfig),
            router.post("/createUser", JsonParser, HTTPController.createUser), //new
            router.post("/updateUser", JsonParser, HTTPController.updateUser), //new
            router.post("/editSite", JsonParser, HTTPController.editSite), //new
            router.post("/deleteSite", JsonParser, HTTPController.removeSite), //new
            router.post("/addConfigToUser", JsonParser, HTTPController.addPostbidConfig),
            router.post("/getAdaptersSettings", JsonParser, HTTPController.getAdaptersSettings),
            router.post("/getAnalyticsSettings", JsonParser, HTTPController.getAnalyticsSettings),
            router.post("/editPostbidConfig", JsonParser, HTTPController.editPostbidConfig),
            router.post("/dfpSetup", JsonParser, HTTPController.dfpSetup),
            router.post('/addPrebidConfig', JsonParser, HTTPController.addPrebidConfig),
            router.post('/editPrebidConfig', JsonParser, HTTPController.editPrebidConfig),
            router.post('/getWbidUsersById', JsonParser, HTTPController.getAllWbidUsers),
            router.post('/addLog', JsonParser, HTTPController.addLog),
            router.post('/getLog', JsonParser, HTTPController.getLog),
            router.post('/getShortTag', JsonParser, HTTPController.getShortTag),
            router.post('/editShortTag', JsonParser, HTTPController.editShortTag),
            router.post('/disableUserConfigs', JsonParser, HTTPController.disableUserConfigs),
            router.post('/enableUserConfigs', JsonParser, HTTPController.enableUserConfigs),
            router.post('/forceAdsTxtCheck', JsonParser, HTTPController.forceCheckAdsTxt),
            router.post('/prebid', JsonParser, HTTPController.prebidEndPoint)
        ];
    }
}

module.exports = Router.routing();
