const fs = require("fs").promises;
const {postbidCreativeGeneratorWithAmazon} = require("./postbidCreativeGeneratorWithAmazon");
const {postbidCreativeGenerator} = require("./postbidCreativeGenerator");
const {prebidCreativeGenerator} = require('./prebidCreativeGenerator');

module.exports.postbidGen = async (
    payload,
    cdnpath,
    amazonID,
    amazonAdUnitCode
) => {
    let {
        name,
        width,
        height,
        PREBID_TIMEOUT,
        configname,
        passbacktag,
        settings,
        floorPrice,
        amazon,
        cmp,
        cmpTimeout,
        usp,
        uspTimeout,
        domain,
        userId,
        siteId,
        cmpType,
        customCode,
        typeOfConfig,
        adUnitCode,
        createdBy,
        updatedBy,
        analytics,
        analyticsEnable,
        analyticsOptions,
        currency,
        // server,
        marketplace,
        marketplaceSettings,
        mainAdapters,
        mainSettings,
        shortTag,
        schain,
        schainObject,
        dashboardId,
        logo,
        thirdPartyCMP
    } = payload;

    let creative;
    if (typeOfConfig === 'prebid') {
        creative = await prebidCreativeGenerator(width, height, adUnitCode, cdnpath);
    } else {
        const CMP =
            cmp === "true"
                ? {
                    timeout: cmpTimeout,
                    type: cmpType,
                    customCode: customCode
                }
                : undefined;

        const USP =
            usp === "true"
                ? {
                    timeout: uspTimeout
                }
                : undefined;

        const supplyChain =
            schain === 'true'
                ? {
                    complete: JSON.parse(schainObject)['complete'],
                    ver: JSON.parse(schainObject)['ver'],
                    nodes: JSON.parse(schainObject)['nodes']
                }
                : undefined;

        creative = amazon === 'true'
            ? await postbidCreativeGeneratorWithAmazon(
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
                    logo,
                    thirdPartyCMP
                }
            )
            : await postbidCreativeGenerator(
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
                    logo,
                    thirdPartyCMP
                }
            );
    }

    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        await fs.writeFile(
            "./app/modules/PrebidBuilder/dist/creative.txt",
            creative,
            "utf-8"
        );
    }

    return {
        cdnpath,
        name,
        configname,
        size: {
            width,
            height
        },
        domain,
        passbacktag,
        creative,
        PREBID_TIMEOUT,
        settings,
        floorPrice,
        amazon,
        amazonID,
        amazonAdUnitCode,
        cmp,
        cmpTimeout,
        cmpType,
        customCode,
        usp,
        uspTimeout,
        userId,
        siteId,
        createdBy,
        updatedBy,
        analytics,
        analyticsEnable,
        analyticsOptions,
        currency,
        // server,
        marketplace,
        marketplaceSettings,
        mainAdapters,
        mainSettings,
        schain,
        schainObject,
        dashboardId,
        logo,
        thirdPartyCMP
    };
};
