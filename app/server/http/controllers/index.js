exports.HTTPController = class {
    constructor() {
    }

    static updatePublisherName(req, res) {
        require("./modules/updatePublisherName")(req, res);
    }

    static getAllAdapters(req, res) {
        require("./modules/getAllAdapters")(req, res);
    }

    static getListOfUsersAndAmountOfConfigs(req, res) {
        require("./modules/getListOfUsersAndAmountOfConfigs")(req, res);
    }

    static getUsersListWithSites(req, res) {
        require("./modules/getUsersListWithSites")(req, res);
    }

    static getUserWithSites(req, res) {
        require("./modules/getUserWithSites")(req, res);
    }

    static getPublisherById(req, res) {
        require("./modules/getPublisherById")(req, res);
    }

    static getSiteAndConfigs(req, res) {
        require("./modules/getSiteAndConfigs")(req, res);
    }

    static getConfigById(req, res) {
        require("./modules/getConfigById")(req, res);
    }

    static getAdsTxt(req, res) {
        require("./modules/getAdsTxtSettings")(req, res);
    }

    static getTags(req, res) {
        require("./modules/getTags")(req, res);
    }

    static getSettingsForAdapter(req, res) {
        require("./modules/getSettingsForAdapter")(req, res);
    }

    static getAdaptersSettings(req, res) {
        require("./modules/getAdaptersSettings")(req, res);
    }

    static addPostbidConfig(req, res) {
        require("./modules/addPostbidConfig")(req, res);
    }

    static newBuild(req, res) {
        require("./modules/newBuild")(req, res);
    }

    static editPostbidConfig(req, res) {
        require("./modules/editPostbidConfig")(req, res);
    }

    static deleteConfig(req, res) {
        require("./modules/removeConfig")(req, res);
    }

    static createUser(req, res) {
        require("./modules/createUser")(req, res);
    }

    static updateUser(req, res) {
        require("./modules/updateUser")(req, res);
    }

    static deleteUser(req, res) {
        require("./modules/deleteUser")(req, res);
    }

    static editSite(req, res) {
        require("./modules/editSite")(req, res);
    }

    static removeSite(req, res) {
        require("./modules/removeSite")(req, res);
    }

    static dfpSetup(req, res) {
        require("./modules/dfpSetup")(req, res);
    }

    static addPrebidConfig(req, res) {
        require("./modules/addPrebidConfig")(req, res)
    }

    static editPrebidConfig(req, res) {
        require("./modules/editPrebidConfig")(req, res)
    }

    static getAnalyticsList(req, res) {
        require("./modules/getAnalyticsList")(req, res)
    }

    static getAnalyticsSettings(req, res) {
        require("./modules/getAnalyticsSettings")(req, res)
    }

    static getAllWbidUsers(req, res) {
        require("./modules/getAllWbidUsers")(req, res)
    }

    static addLog(req, res) {
        require("./modules/addLog")(req, res)
    }

    static getLog(req, res) {
        require("./modules/getLog")(req, res)
    }

    static getAllSizes(req, res) {
        require("./modules/getAllSizes")(req, res)
    }

    static getBidders(req, res) {
        require("./modules/getBidders")(req, res)
    }

    static getSupportedServerBidders(req, res) {
        require("./modules/getSupportedServerBidders")(req, res)
    }

    static getShortTag(req, res) {
        require("./modules/getShortTag")(req, res)
    }

    static editShortTag(req, res) {
        require("./modules/editShortTag")(req, res)
    }

    static disableUserConfigs(req, res) {
        require("./modules/disableUserConfigs")(req, res)
    }

    static enableUserConfigs(req, res) {
        require("./modules/enableUserConfigs")(req, res)
    }

    static forceCheckAdsTxt(req, res) {
        require('./modules/forceCheckAdsTxt')(req, res);
    }

    static prebidEndPoint (req, res) {
        require("./modules/tests/prebidEndPoint")(req, res)
    }

    static test(req, res) {
        require("./modules/test")(req, res);
    }

};
