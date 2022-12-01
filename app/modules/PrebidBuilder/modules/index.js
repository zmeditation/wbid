const {setPrebidConfig} = require("./setPrebidConfig");
const {prebidCreativeGenerator} = require("./prebidCreativeGenerator");
const {getAdaptersList} = require("./getAdaptersList");
const {getAllAdapters} = require("./getAllAdapters");
const {getSettings} = require("./getSettings");
const {getFileName} = require("./getFileName");
const {getAdaptersSettings} = require("./getAdaptersSettings");
const {getBundle} = require("./getBundle");
const {postbidGen} = require("./postbidGen");
const {getDataType} = require("./getDataType");
const {postbidCreativeGenerator} = require("./postbidCreativeGenerator");
const {postbidCreativeGeneratorWithAmazon} = require("./postbidCreativeGeneratorWithAmazon");
const {postbidCreativeGeneratorDev} = require("./postbidCreativeGeneratorDev");
const {postbidCreativeGeneratorWithAmazonDev} = require("./postbidCreativeGeneratorWithAmazonDev");
const {checkAdaptersList} = require("./checkAdaptersList");
const {escapeChar} = require("./escapeChar");
const {checkExist} = require("./checkExist");
const {getAnalyticsList} = require('./getAnalyticsList');
const {getAnalyticsSettings} = require('./getAnalyticsSettings');
const {WMGLogo} = require('./minifiedWmgLogo');

exports.Prebid = class {
    constructor() {
    }

    async getAllAdapters() {
        return await getAllAdapters();
    }

    async getAnalyticsList() {
        return await getAnalyticsList();
    }

    async getSettings() {
        return await getSettings();
    }

    async getFileName(name, width, height) {
        return getFileName(name, width, height);
    }

    async getAdaptersSettings(payload) {
        return getAdaptersSettings(payload);
    }

    async getAnalyticsSettings(payload) {
        return getAnalyticsSettings(payload);
    }

    async getBundle(modules, name, width, height, cmp, socketId, typeOfConfig, payload, isEdit) {
        return getBundle(modules, name, width, height, cmp, socketId, typeOfConfig, payload, isEdit);
    }

    async postbidGen(payload, cdnpath, amazonID, amazonAdUnitCode) {
        return postbidGen(payload, cdnpath, amazonID, amazonAdUnitCode);
    }

    async prebidCreativeGenerator(width, height, adUnitCode, CdnUrl) {
        return prebidCreativeGenerator(width, height, adUnitCode, CdnUrl)
    }

    async postbidCreativeGenerator(
        {
            width,
            height,
            cdnpath,
            PREBID_TIMEOUT,
            settings,
            passbacktag,
            floorPrice,
            CMP,
            domain,
            analytics,
            analyticsEnable,
            analyticsOptions,
            configname,
            currency,
            // server,
            shortTag,
            supplyChain,
            USP,
            dashboardId,
            logo
        }
    ) {
        return postbidCreativeGenerator(
            {
                width,
                height,
                cdnpath,
                PREBID_TIMEOUT,
                settings,
                passbacktag,
                floorPrice,
                CMP,
                domain,
                analytics,
                analyticsEnable,
                analyticsOptions,
                configname,
                currency,
                // server,
                shortTag,
                supplyChain,
                USP,
                dashboardId,
                logo
            }
        );
    }

    async postbidCreativeGeneratorWithAmazon(
        {
            width,
            height,
            cdnpath,
            PREBID_TIMEOUT,
            settings,
            passbacktag,
            floorPrice,
            amazonAdUnitCode,
            CMP,
            domain,
            analytics,
            analyticsEnable,
            analyticsOptions,
            configname,
            currency,
            // server,
            shortTag,
            supplyChain,
            USP,
            dashboardId,
            logo
        }
    ) {
        return postbidCreativeGeneratorWithAmazon(
            {
                width,
                height,
                cdnpath,
                PREBID_TIMEOUT,
                settings,
                passbacktag,
                floorPrice,
                amazonAdUnitCode,
                CMP,
                domain,
                analytics,
                analyticsEnable,
                analyticsOptions,
                configname,
                currency,
                // server,
                shortTag,
                supplyChain,
                USP,
                dashboardId,
                logo
            }
        );
    }
// DEV CREATIVE GENERATORS
    async postbidCreativeGeneratorWithAmazonDev(
        {
            width,
            height,
            cdnpath,
            PREBID_TIMEOUT,
            settings,
            passbacktag,
            floorPrice,
            amazonAdUnitCode,
            CMP,
            domain,
            analytics,
            analyticsEnable,
            analyticsOptions,
            configname,
            currency,
            // server,
            shortTag,
            supplyChain,
            USP,
            adExId
        }
    ) {
        return postbidCreativeGeneratorWithAmazonDev(
            {
                width,
                height,
                cdnpath,
                PREBID_TIMEOUT,
                settings,
                passbacktag,
                floorPrice,
                amazonAdUnitCode,
                CMP,
                domain,
                analytics,
                analyticsEnable,
                analyticsOptions,
                configname,
                currency,
                // server,
                shortTag,
                supplyChain,
                USP,
                adExId
            }
        );
    }

    async postbidCreativeGeneratorDev(
        {
            width,
            height,
            cdnpath,
            PREBID_TIMEOUT,
            settings,
            passbacktag,
            floorPrice,
            CMP,
            domain,
            analytics,
            analyticsEnable,
            analyticsOptions,
            configname,
            currency,
            // server,
            shortTag,
            supplyChain,
            USP,
            adExId
        }
    ) {
        return postbidCreativeGeneratorDev(
            {
                width,
                height,
                cdnpath,
                PREBID_TIMEOUT,
                settings,
                passbacktag,
                floorPrice,
                CMP,
                domain,
                analytics,
                analyticsEnable,
                analyticsOptions,
                configname,
                currency,
                // server,
                shortTag,
                supplyChain,
                USP,
                adExId
            }
        );
    }

    async checkAdaptersList(adaptersList) {
        return checkAdaptersList(adaptersList);
    }

    async getAdaptersList() {
        return await getAdaptersList();
    }

    escapeChar(string) {
        return escapeChar(string);
    }

    getDataType(data) {
        return getDataType(data);
    }

    async checkExist(username) {
        return await checkExist(username);
    }

    async setPrebidConfig(payload, cdnpath, creative, amazonData) {
        return await setPrebidConfig(payload, cdnpath, creative, amazonData)
    }

    async WMGLogo() {
        return await WMGLogo();
    }
};
