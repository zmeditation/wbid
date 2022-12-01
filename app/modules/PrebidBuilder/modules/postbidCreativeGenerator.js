const {escapeChar} = require("./escapeChar");
const {pbjsConfigGen} = require("./configHelpers/pbjsConfigGen");
const {postbidAdaptersSettingsGen} = require("./configHelpers/postbidAdaptersSettingsGen");
const {postbidAnalyticsSettingsGen} = require('./configHelpers/postbidAnalyticsSettingsGen');
const {getFullPostbidConfig} = require('./configHelpers/getFullPostbidConfig');
const {getShortPostBidTag} = require('./configHelpers/getShortPostBidTag');
const {biddersConfigGen} = require('./configHelpers/BiddersConfigGen');
const {analyticsHelper} = require('./configHelpers/analyticsHelper');
const {LogoInserter} = require('./configHelpers/LogoInserter');
const {protectedMediaGenerator} = require('./configHelpers/protectedMediaCodeGenerator');

module.exports.postbidCreativeGenerator = async (
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
) => {

    const pbtag = await escapeChar(passbacktag);
    const sizes = [width, height];
    const adUnitId = `${configname}_${width}x${height}`;
    const {pbjsConfig, mailRuFunc} = pbjsConfigGen(CMP, domain, currency, supplyChain, USP, adUnitId);
    const {bids, bidPrices} = postbidAdaptersSettingsGen(settings);
    const {analyticsTemplate} = postbidAnalyticsSettingsGen(analyticsEnable, analytics, analyticsOptions);
    const {bidderSpecificConfig} = biddersConfigGen(settings);
    const sendAnalyticsHelper = analyticsHelper(sizes, adUnitId, PREBID_TIMEOUT, domain, dashboardId);
    const adLogo = LogoInserter((shortTag === 'true' ? `wmg-script-${adUnitId}` : adUnitId), logo === 'true');
    const protectedMediaCode = protectedMediaGenerator(domain, adUnitId, dashboardId, sizes.join('x'));

    try {
        return shortTag !== 'true'
            ? await getFullPostbidConfig(pbtag, cdnpath, width, height, sizes, floorPrice, PREBID_TIMEOUT,
                adUnitId, bids, bidPrices, pbjsConfig, mailRuFunc, analyticsTemplate, bidderSpecificConfig, sendAnalyticsHelper, adLogo, protectedMediaCode)
            : await getShortPostBidTag(pbtag, width, height, sizes, floorPrice, PREBID_TIMEOUT,
                adUnitId, bids, bidPrices, pbjsConfig, mailRuFunc, analyticsTemplate, sendAnalyticsHelper, adLogo, protectedMediaCode);
    } catch (e) {
        console.log(e);
    }
};
