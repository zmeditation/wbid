const {Sanitizer} = require("../sanitizer");
const sanitizer = new Sanitizer();
const {checkExist} = require("../../../../modules/PrebidBuilder/modules/checkExist");
const {allSizes} = require("../../../../modules/PrebidBuilder/modules/allSizes");
const {Controller} = require("../../../../controllers");
const controller = new Controller();
const {ConfigsDB} = require("../../../../database/controllers/config");
const {SiteDB} = require("../../../../database/controllers/site");
const {Socket} = require("../../../socket");
const {saveLogs} = require("./saveLogs");
const io = new Socket();
require("colors");

module.exports = async (req, res) => {
    const payload = await sanitizer.sanitize(req);
    try {
        if (!allSizes(`${payload.width}x${payload.height}`)) {
            return res.status(400).send('Incorrect or non-supported placement size');
        }
        if (payload.sizes && `${payload.width}x${payload.height}` !== `${payload.sizes}`) {
            return res.status(400).send('Incorrect request: sizes');
        }
        const allBoolean = await sanitizer.checkBoolean(req);
        if (allBoolean !== true) {
            return res.status(400).send(allBoolean['message']);
        }
        const nameFormat = /[\wа-я.,\-_()\/0-9]{1,50}/;
        if (!payload['domain'] || !nameFormat.test(payload['domain']) || payload['domain'].length > 50) {
            return res.status(400).send("Incorrect request: domain");
        }
        if (!payload['configname'] || payload['configname'].length > 35 || payload['configname'].trim() === "") {
            return res.status(400).send('Incorrect request: config name');
        }
        const exist = await checkExist(payload);
        if (exist.value) throw new Error(exist.errorMessage);
        const {creative, config} = await controller.MakePrebid(payload);
        const user = {id: payload.userId};
        let site = payload.siteId
            ? {id: payload.siteId}
            : await SiteDB.create(payload.domain, payload.userId);
        if (payload.marketplaceSettings && payload.marketplaceSettings.length) {
            const pubSite = await SiteDB.getSite(site.id);
            const existAdapters = pubSite['dataValues'].adapters;
            const marketplace = JSON.parse(payload.marketplaceSettings);
            let {adapters} = marketplace;
            if (adapters.length && existAdapters && existAdapters.length) {
                adapters = adapters.concat(existAdapters);
            }
            adapters = Array.from(new Set(adapters)); // only unique values should be save in DB
            await SiteDB.update(site.id, payload['domain'], adapters)
        }
        const result = await ConfigsDB.create({
            tags: {fulltag: creative},
            inventory: JSON.stringify(''),
            config,
            user,
            configname: payload.configname,
            site,
            typeOfConfig: payload.typeOfConfig || 'not set'
        });
        await saveLogs(payload, 'create', result.dataValues.id, result.dataValues.configname);
        io.push('CONFIG_SAVED', true, payload.socketId, 'success');
        res.json({tags: {fulltag: creative}});
    } catch (e) {
        io.push(e.message, true, payload.socketId, 'error');
        res.status(500).send(e.message);
    }
};
