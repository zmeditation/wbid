const {amazonHelper} = require("./configHelpers/amazonHelper");
const {escapeChar} = require("./escapeChar");
const {pbjsConfigGen} = require("./configHelpers/pbjsConfigGen");
const {postbidAdaptersSettingsGen} = require("./configHelpers/postbidAdaptersSettingsGen");
const {postbidAnalyticsSettingsGen} = require('./configHelpers/postbidAnalyticsSettingsGen');
const {getFullPostbidAmazonConfigDev} = require('./configHelpers/getFullPostbidAmazonConfigDev');
const {getShortPostbidAmazonConfigDev} = require('./configHelpers/getShortPostbidAmazonConfigDev');
const {biddersConfigGen} = require('./configHelpers/BiddersConfigGen');
const {googleTagInit} = require('./configHelpers/googleTagInitGen');

module.exports.postbidCreativeGeneratorWithAmazonDev = async (
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
    const {timeout, hash, slotName} = await amazonHelper(CMP, amazonAdUnitCode);
    const {googleTag} = await googleTagInit(adUnitId, floorPrice, sizes, domain, adExId);

    const creative = shortTag !== 'true' && shortTag !== true
        ? await getFullPostbidAmazonConfigDev(
            cdnpath,
            pbtag,
            sizes,
            bidPrices,
            timeout,
            PREBID_TIMEOUT,
            hash,
            slotName,
            floorPrice,
            adUnitId,
            bids,
            mailRuFunc,
            pbjsConfig,
            analyticsTemplate,
            bidderSpecificConfig
        )
        : await getShortPostbidAmazonConfigDev(
            cdnpath,
            pbtag,
            sizes,
            bidPrices,
            timeout,
            PREBID_TIMEOUT,
            hash,
            slotName,
            floorPrice,
            adUnitId,
            bids,
            mailRuFunc,
            pbjsConfig,
            analyticsTemplate
        )

    return {creative, googleTag};
};
