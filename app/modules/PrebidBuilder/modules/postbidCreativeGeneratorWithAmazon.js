const {amazonHelper} = require("./configHelpers/amazonHelper");
const {escapeChar} = require("./escapeChar");
const {pbjsConfigGen} = require("./configHelpers/pbjsConfigGen");
const {postbidAdaptersSettingsGen} = require("./configHelpers/postbidAdaptersSettingsGen");
const {postbidAnalyticsSettingsGen} = require('./configHelpers/postbidAnalyticsSettingsGen');
const {getFullPostbidAmazonConfig} = require('./configHelpers/getFullPostbidAmazonConfig');
const {getShortPostbidAmazonConfig} = require('./configHelpers/getShortPostbidAmazonConfig');
const {biddersConfigGen} = require('./configHelpers/BiddersConfigGen');
const {analyticsHelper} = require('./configHelpers/analyticsHelper');
const {LogoInserter} = require('./configHelpers/LogoInserter');
const {protectedMediaGenerator} = require('./configHelpers/protectedMediaCodeGenerator');

module.exports.postbidCreativeGeneratorWithAmazon = async (
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
) => {
    const pbtag = escapeChar(passbacktag);
    const sizes = [width, height];
    const adUnitId = `${configname}_${width}x${height}`;
    const {pbjsConfig, mailRuFunc} = pbjsConfigGen(CMP, domain, currency, supplyChain, USP, adUnitId);
    const {bids, bidPrices} = postbidAdaptersSettingsGen(settings);
    const {analyticsTemplate} = postbidAnalyticsSettingsGen(analyticsEnable, analytics, analyticsOptions);
    const {bidderSpecificConfig} = biddersConfigGen(settings);
    const {timeout, hash, slotName} = amazonHelper(CMP, amazonAdUnitCode);
    const sendAnalyticsHelper = analyticsHelper(sizes, adUnitId, PREBID_TIMEOUT, domain, dashboardId);
    const adLogo = LogoInserter((shortTag === 'true' ? `wmg-script-${adUnitId}` : adUnitId), logo === 'true');
    const protectedMediaCode = protectedMediaGenerator(domain, adUnitId, dashboardId, sizes.join('x'));

    return shortTag !== 'true' && shortTag !== true
    ? await getFullPostbidAmazonConfig(
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
        bidderSpecificConfig,
        sendAnalyticsHelper,
        adLogo,
        protectedMediaCode
    )
    : await getShortPostbidAmazonConfig(
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
            sendAnalyticsHelper,
            adLogo,
            protectedMediaCode
        )
};
