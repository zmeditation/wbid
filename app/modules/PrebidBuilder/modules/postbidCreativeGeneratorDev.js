const {escapeChar} = require("./escapeChar");
const {pbjsConfigGen} = require("./configHelpers/pbjsConfigGen");
const {postbidAdaptersSettingsGen} = require("./configHelpers/postbidAdaptersSettingsGen");
const {postbidAnalyticsSettingsGen} = require('./configHelpers/postbidAnalyticsSettingsGen');
const {getFullPostbidConfigDev} = require('./configHelpers/getFullPostbidConfigDev');
const {getShortPostBidTagDev} = require('./configHelpers/getShortPostBidTagDev');
const {biddersConfigGen} = require('./configHelpers/BiddersConfigGen');
const {googleTagInit} = require('./configHelpers/googleTagInitGen');

module.exports.postbidCreativeGeneratorDev = async (
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
        server,
        shortTag,
        supplyChain,
        USP,
        adExId
    }
) => {

    const pbtag = await escapeChar(passbacktag);
    const sizes = [width, height];
    const adUnitId = `${configname}_${width}x${height}`;
    const {pbjsConfig, mailRuFunc} = await pbjsConfigGen(CMP, domain, currency, server, supplyChain, USP, adUnitId);
    const {bids, bidPrices} = await postbidAdaptersSettingsGen(settings);
    const {analyticsTemplate} = await postbidAnalyticsSettingsGen(analyticsEnable, analytics, analyticsOptions);
    const {bidderSpecificConfig} = await biddersConfigGen(settings);
    const {googleTag, divId} = await googleTagInit(adUnitId, floorPrice, sizes, domain, adExId);

    try {
        const creative = shortTag !== 'true' && shortTag !== true
            ? await getFullPostbidConfigDev(pbtag, cdnpath, width, height, sizes, floorPrice, PREBID_TIMEOUT,
                adUnitId, bids, bidPrices, pbjsConfig, mailRuFunc, analyticsTemplate, bidderSpecificConfig)
            : await getShortPostBidTagDev(pbtag, width, height, sizes, floorPrice, PREBID_TIMEOUT,
                adUnitId, bids, bidPrices, pbjsConfig, mailRuFunc, analyticsTemplate, divId, adExId);

        return {creative, googleTag};

    } catch (e) {
        console.log(e);
    }
};
