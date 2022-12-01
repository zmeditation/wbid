const {DFP_CALL_API} = require("../modules/DFP_API/index");
const {TagGenerator} = require("../modules/tagGenerator");
const {Prebid} = require("../../app/modules/PrebidBuilder/modules/");
const {CDN} = require("../../app/modules/CDN/modules/controller");
const {Socket} = require("../../app/server/socket");
const child_process = require("child_process");
const UglifyJS = require("uglify-es");

const io = new Socket();
const pb = new Prebid();
const cdn = new CDN();
const dfp = new DFP_CALL_API();

exports.Controller = class {
    constructor() {
    }

    async MakePostBid(payload) {
        const {
            width,
            height,
            adaptersList,
            configname,
            cmp,
            amazon,
            socketId,
            typeOfConfig,
            domain,
            dev
        } = payload;
        try {
            let amazonID, amazonAdUnitCode;
            if (amazon === "true" || amazon === true) {
                let config = {size: {width, height}, configname};
                const amazonInventory = await dfp.createAmazonInventory(
                    config,
                    socketId
                );
                amazonID = amazonInventory.unit[0].id;
                amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
            }
            const adapters = await pb.checkAdaptersList(adaptersList);
            let filepath;
            if (dev !== 'true') {
                filepath = await pb.getBundle(
                    adapters,
                    configname,
                    width,
                    height,
                    cmp,
                    socketId,
                    typeOfConfig,
                    payload
                );
            } else {
                // here was code for dev build
            }
            const cdnpath = await cdn.uploadToCDN(filepath, socketId);
            let config;
            if (dev !== 'true') {
                config = await pb.postbidGen(
                    payload,
                    cdnpath,
                    amazonID,
                    amazonAdUnitCode
                );
            } else {
                // here was code for dev build
            }

            const inventory = await dfp.createPostBidInventory(config, socketId);
            const tags = TagGenerator.generateTag(inventory, domain);
            return {tags, inventory, config, configname};
        } catch (e) {
            io.push(e.message, true, socketId, "error");
        }
    }

    async EditPostBid(payload, inventory) {
        let {
            configname,
            width,
            height,
            crid,
            cdnpath,
            amazonID,
            amazon,
            amazonAdUnitCode,
            cmp,
            socketId,
            typeOfConfig,
            domain,
            dev,
            logo
        } = payload;
        try {
            const adapters = await pb.checkAdaptersList(payload['adaptersList']);
            let filepath;
            if (dev !== 'true') {
                filepath = await pb.getBundle(
                    adapters,
                    configname,
                    width,
                    height,
                    cmp,
                    socketId,
                    typeOfConfig,
                    payload,
                    true
                );
            } else {
                // here was code for dev build
            }
            let public_id = cdnpath.substring(cdnpath.lastIndexOf("/") + 1);
            await cdn.deleteFromCDN(public_id, socketId);
            const newCdnPath = await cdn.uploadToCDN(filepath, socketId);
            if (amazon === "true" && amazonID === "undefined") {
                const config = {size: {width, height}, configname};
                const amazonInventory = await dfp.createAmazonInventory(
                    config,
                    socketId
                );
                amazonID = amazonInventory.unit[0].id;
                amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
            } else if (amazon === "false" && amazonID !== "undefined") {
                amazonID === undefined ? amazonID = "undefined" : await dfp.deleteAmazonInventory(amazonID, socketId);
                amazonID = "undefined";
            } else if (amazon === "true" && amazonAdUnitCode === "undefined") {
                await dfp.deleteAmazonInventory(amazonID, socketId);
                const config = {size: {width, height}, configname};
                const amazonInventory = await dfp.createAmazonInventory(
                    config,
                    socketId
                );
                amazonID = amazonInventory.unit[0].id;
                amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
            }
            let result;
            if (dev !== 'true') {
                result = await pb.postbidGen(
                    payload,
                    newCdnPath,
                    amazonID,
                    amazonAdUnitCode
                )
            } else {
                // here was code for dev build
            }

            await dfp.updatePostBidInventory(
                configname,
                crid,
                result.creative,
                width,
                height,
                socketId
            );
            const tags = TagGenerator.generateTag(inventory, domain);
            return {result, tags};
        } catch (e) {
            io.push(e.message, true, socketId, "error");
        }
    }

    async DeletePostBid(payload, socketId) {
        try {
            const {cdnpath, amazon, amazonID, shortTag} = payload.config;
            if (amazon === "true" || amazon === true) {
                await dfp.deleteAmazonInventory(amazonID, socketId);
            }
            const public_id = cdnpath.substring(cdnpath.lastIndexOf("/") + 1);
            const res = await cdn.deleteFromCDN(public_id, socketId);
            if (shortTag === "true" || shortTag === true) {
            } else {
                await dfp.deletePostBidInventory(payload, socketId);
            }
            return res;
        } catch (e) {
            io.push(e.message, true, socketId, "error");
        }
    }

    async DeletePrebid(payload, socketId) {
        try {
            const {cdnpath} = payload.config;
            const public_id = cdnpath.substring(cdnpath.lastIndexOf("/") + 1);
            return await cdn.deleteFromCDN(public_id, socketId);
        } catch (e) {
            io.push(e.message, true, socketId, "error");
        }
    }

    async DeletePublisher(user, socketId) {
        try {
            let toDelete = [];
            if (!user['Configs']) {
                return new Error("This user has no configs");
            }
            let configs = user['Configs'];

            for (let config of configs) {
                const {typeOfConfig} = config;
                const {cdnpath, amazon, amazonID, shortTag} = config.config;
                if (shortTag !== true && shortTag !== 'true' && typeOfConfig === 'postbid') {
                    await dfp.deletePostBidInventory(config, socketId);
                }
                if (amazon === "true") {
                    await dfp.deleteAmazonInventory(amazonID, socketId);
                }
                const public_id = cdnpath.substring(cdnpath.lastIndexOf("/") + 1);
                toDelete.push(cdn.deleteFromCDN(public_id, socketId));
            }
            return Promise.all(toDelete)
                .then(result => console.log(result))
                .catch(e => console.error(e.message || e));
        } catch (e) {
            console.error(e.message || e);
            io.push(e.message, true, socketId, "error");
        }
    }

    async MakePrebid(payload) {
        const {
            width,
            height,
            adaptersList,
            adUnitCode,
            socketId,
            configname,
            cmp,
            typeOfConfig,
            amazon
        } = payload;
        let amazonID, amazonAdUnitCode;
        if (amazon === "true" || amazon === true) {
            let config = {size: {width, height}, configname};
            const amazonInventory = await dfp.createAmazonInventory(
                config,
                socketId
            );
            amazonID = amazonInventory.unit[0].id;
            amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
        } else {
            amazonID = 'undefined';
            amazonAdUnitCode = 'undefined';
        }
        const adapters = await pb.checkAdaptersList(adaptersList);
        const filepath = await pb.getBundle(
            adapters,
            configname,
            width,
            height,
            cmp,
            socketId,
            typeOfConfig,
            payload
        );
        const cdnpath = await cdn.uploadToCDN(filepath, socketId);
        const creative = await pb.prebidCreativeGenerator(
            width,
            height,
            adUnitCode,
            cdnpath
        );
        const config = await pb.setPrebidConfig(payload, cdnpath, creative, {amazon, amazonID, amazonAdUnitCode});
        if (payload['additional'] && !config.createdBy) {
            config.createdBy = payload['additional'].name;
        } else if (payload['additional'] && config.createdBy && payload['additional'].name !== config.createdBy) {
            config.createdBy = payload['additional'].name;
        }
        return {creative, config};
    }

    async GetShortPostbid(payload) {
        const {
            width,
            height,
            domain,
            adaptersList,
            configname,
            cmp,
            settings,
            amazon,
            socketId,
            typeOfConfig,
            floorPrice,
            PREBID_TIMEOUT,
            passbacktag,
            // allowAuctionWithoutConsent,
            cmpTimeout,
            cmpType,
            customCode,
            analytics,
            analyticsEnable,
            analyticsOptions,
            currency,
            // server,
            shortTag,
            usp,
            uspTimeout,
            schain,
            schainObject,
            dev,
            adExId,
            dashboardId,
            logo
        } = payload;
        const cdnpath = undefined;
        let amazonID, amazonAdUnitCode;
        if (amazon === "true" || amazon === true) {
            let config = {size: {width, height}, configname};
            const amazonInventory = await dfp.createAmazonInventory(
                config,
                socketId
            );
            amazonID = amazonInventory.unit[0].id;
            amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
        } else {
            amazonID = 'undefined';
            amazonAdUnitCode = 'undefined';
        }

        const adapters = await pb.checkAdaptersList(adaptersList);
        const CMP =
            cmp === "true"
                ? {
                    timeout: cmpTimeout,
                    // allowAuctionWithoutConsent: allowAuctionWithoutConsent,
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

        let creative;
        if (dev !== "true") {
            creative = amazon === 'true'
                ? await pb.postbidCreativeGeneratorWithAmazon(
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
                )
                : await pb.postbidCreativeGenerator(
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
        } else {
            // here was code for dev build
            let creativeResult = amazon === 'true'
                ? await pb.postbidCreativeGeneratorWithAmazonDev(
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
                )
                : await pb.postbidCreativeGeneratorDev(
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

            creative = creativeResult['creative'];
            const {googleTag} = creativeResult;
            payload.googleTag = googleTag;
        }
        if (dev !== "true") {
            let uglyOptions = {keep_fnames: true};
            let uglifiedCreative = UglifyJS.minify(creative, uglyOptions);
            if (uglifiedCreative['error'] === undefined) {
                payload.creative = uglifiedCreative['code'];
            } else {
                console.error(uglifiedCreative['error']);
                payload.creative = creative;
            }
        } else {
            payload.creative = creative;
        }

        const filepath = await pb.getBundle(
            adapters,
            configname,
            width,
            height,
            cmp,
            socketId,
            typeOfConfig,
            payload
        );

        const linkToCdn = await cdn.uploadToCDN(filepath, socketId);
        const config = await pb.setPrebidConfig(payload, linkToCdn, creative, {amazon, amazonID, amazonAdUnitCode});
        const adUnitId = `${configname}_${width}x${height}`;
        if (payload['additional'] && !config.createdBy) {
            config.createdBy = payload['additional'].name;
        } else if (payload['additional'] && config.createdBy && payload['additional'].name !== config.createdBy) {
            config.createdBy = payload['additional'].name;
        }
        const tag = `<script id='wmg-script-${adUnitId}' async src="${linkToCdn}"></script>`;
        return {tags: {fulltag: tag}, creative, configname, config};
    }

    async editShortPostBid(payload) {
        let {
            width,
            height,
            domain,
            cdnpath,
            adaptersList,
            configname,
            cmp,
            settings,
            amazon,
            amazonID,
            amazonAdUnitCode,
            socketId,
            typeOfConfig,
            floorPrice,
            PREBID_TIMEOUT,
            passbacktag,
            // allowAuctionWithoutConsent,
            cmpTimeout,
            cmpType,
            customCode,
            analytics,
            analyticsEnable,
            analyticsOptions,
            currency,
            // server,
            shortTag,
            usp,
            uspTimeout,
            schain,
            schainObject,
            dev,
            adExId,
            dashboardId,
            logo
        } = payload;
        if (amazon === "true" && amazonID === "undefined") {
            const config = {size: {width, height}, configname};
            const amazonInventory = await dfp.createAmazonInventory(
                config,
                socketId
            );
            amazonID = amazonInventory.unit[0].id;
            amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
        } else if (amazon === "false" && (amazonID !== "undefined" && amazonID !== undefined)) {
            await dfp.deleteAmazonInventory(amazonID, socketId);
            amazonID = "undefined";
        } else if (amazon === "true" && amazonAdUnitCode === "undefined") {
            await dfp.deleteAmazonInventory(amazonID, socketId);
            const config = {size: {width, height}, configname};
            const amazonInventory = await dfp.createAmazonInventory(
                config,
                socketId
            );
            amazonID = amazonInventory.unit[0].id;
            amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
        }
        const CMP =
            cmp === "true"
                ? {
                    timeout: cmpTimeout,
                    // allowAuctionWithoutConsent: allowAuctionWithoutConsent,
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

        const adapters = await pb.checkAdaptersList(adaptersList);

        let creative;
        if (dev !== "true") {
            creative = amazon === 'true'
                ? await pb.postbidCreativeGeneratorWithAmazon(
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
                )
                : await pb.postbidCreativeGenerator(
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
        } else {
            // code for dev build
            let creativeResult = amazon === 'true'
                ? await pb.postbidCreativeGeneratorWithAmazonDev(
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
                )
                : await pb.postbidCreativeGeneratorDev(
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

            creative = creativeResult['creative'];
            const {googleTag} = creativeResult;
            payload.googleTag = googleTag;
        }
        if (dev !== "true") { //hotfix
            let uglyOptions = {keep_fnames: true};
            let uglifiedCreative = UglifyJS.minify(creative, uglyOptions);
            if (uglifiedCreative['error'] === undefined) {
                payload.creative = uglifiedCreative['code'];
            } else {
                console.error(uglifiedCreative['error']);
                payload.creative = creative;
            }
        } else {
            payload.creative = creative;
        }

        const filepath = await pb.getBundle(
            adapters,
            configname,
            width,
            height,
            cmp,
            socketId,
            typeOfConfig,
            payload,
            true
        );
        let public_id = cdnpath.substring(cdnpath.lastIndexOf("/") + 1);
        await cdn.deleteFromCDN(public_id, socketId);
        const linkToCdn = await cdn.uploadToCDN(filepath, socketId);
        const config = await pb.setPrebidConfig(payload, linkToCdn, creative, {amazon, amazonID, amazonAdUnitCode});
        const adUnitId = `${configname}_${width}x${height}`;
        config.updatedBy = payload['additional'] ? payload['additional'].name : undefined;
        const tag = `<script id='wmg-script-${adUnitId}' async src="${linkToCdn}"></script>`;
        return {tags: {fulltag: tag}, creative, configname, config};
    }

    async EditPrebid(payload) {
        let {
            width,
            height,
            adaptersList,
            adUnitCode,
            socketId,
            configname,
            cmp,
            typeOfConfig,
            cdnpath,
            amazon,
            amazonID,
            amazonAdUnitCode
        } = payload;
        if (amazon === "true" && amazonID === "undefined") {
            const config = {size: {width, height}, configname};
            const amazonInventory = await dfp.createAmazonInventory(
                config,
                socketId
            );
            amazonID = amazonInventory.unit[0].id;
            amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
        } else if (amazon === "false" && amazonID !== "undefined") {
            await dfp.deleteAmazonInventory(amazonID, socketId);
            amazonID = "undefined";
        } else if (amazon === "true" && amazonAdUnitCode === "undefined") {
            await dfp.deleteAmazonInventory(amazonID, socketId);
            const config = {size: {width, height}, configname};
            const amazonInventory = await dfp.createAmazonInventory(
                config,
                socketId
            );
            amazonID = amazonInventory.unit[0].id;
            amazonAdUnitCode = amazonInventory.unit[0].adUnitCode;
        }
        const adapters = await pb.checkAdaptersList(adaptersList);
        const filepath = await pb.getBundle(
            adapters,
            configname,
            width,
            height,
            cmp,
            socketId,
            typeOfConfig,
            payload,
            true
        );
        let public_id = cdnpath.substring(cdnpath.lastIndexOf("/") + 1);
        await cdn.deleteFromCDN(public_id, socketId);
        let newCdnPath = await cdn.uploadToCDN(filepath, socketId);
        const creative = await pb.prebidCreativeGenerator(
            width,
            height,
            adUnitCode,
            newCdnPath
        );
        const config = await pb.setPrebidConfig(payload, newCdnPath, creative, {amazon, amazonID, amazonAdUnitCode});
        config.updatedBy = payload['additional'] ? payload['additional'].name : undefined;
        return {creative, config};
    }

    async FirstHBSetup() {
        return child_process.fork("./app/modules/DFP_API/DFP_HB_SetUp/index.js");
    }
};
