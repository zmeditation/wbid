const {getFullPrebidConfig} = require("./configHelpers/getFullPrebidConfig");
const {prebidConfigGen} = require("./configHelpers/prebidConfigGen");
const {prebidAdaptersSettingsGen} = require("./configHelpers/prebidAdaptersSettingsGen");
const {postbidAnalyticsSettingsGen} = require('./configHelpers/postbidAnalyticsSettingsGen');

module.exports.getPrebidConfig = async (payload) => {

    let {
        PREBID_TIMEOUT,
        width,
        height,
        adUnitCode,
        settings,
        domain,
        cmp,
        // allowAuctionWithoutConsent,
        cmpTimeout,
        setDomain,
        analyticsEnable,
        analytics,
        analyticsOptions,
        currency,
        server,
        floorPrice
    } = payload;

    const {analyticsTemplate} = await postbidAnalyticsSettingsGen(analyticsEnable, analytics, analyticsOptions);
    const {bids, bidPrices} = await prebidAdaptersSettingsGen(settings);
    const config = await prebidConfigGen(cmp, cmpTimeout, setDomain, domain, currency, server);
    return await getFullPrebidConfig(PREBID_TIMEOUT, adUnitCode, bids, bidPrices, analyticsTemplate, config, width, height, floorPrice);
};
