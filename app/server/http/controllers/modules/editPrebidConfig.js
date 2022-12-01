const {Sanitizer} = require("../sanitizer");
const sanitizer = new Sanitizer();
const {Controller} = require("../../../../controllers");
const controller = new Controller();
const {ConfigsDB} = require("../../../../database/controllers/config");
const {saveLogs} = require("./saveLogs");
const {Socket} = require("../../../../../app/server/socket");
const {SiteDB} = require("../../../../database/controllers/site");
const {UserDB} = require("../../../../database/controllers/user");
const io = new Socket();

module.exports = async (req, res) => {
    const {socketId} = req.body;
    if (req.body.additional && req.body.additional['wbidUserId']) {
        const user = await UserDB.getUser(req.body.additional['wbidUserId']);
        const {Configs} = user['dataValues'];
        const configIds = Configs.map(config => config['dataValues'].id);
        if (req.body.configid && configIds.includes(parseInt(req.body.configid)) === false) {
            io.push('NO_PERMISSION', true, socketId, 'error');
            return res.status(403).send('No permission for this action');
        }
    }

    try {
        const payload = await sanitizer.sanitize(req);
        const allBoolean = await sanitizer.checkBoolean(req);
        if (allBoolean !== true) {
            return res.status(400).send(allBoolean['message']);
        }
        const {config, creative} = await controller.EditPrebid(payload);
        const tags = {fulltag: creative};
        if (payload.marketplaceSettings && payload.marketplaceSettings.length) {
            const pubSite = await SiteDB.getSite(payload['siteId']);
            const existAdapters = pubSite['dataValues'].adapters;
            const marketplace = JSON.parse(payload.marketplaceSettings);
            let {adapters} = marketplace;
            if (adapters.length && existAdapters && existAdapters.length) {
                adapters = adapters.concat(existAdapters);
            }
            adapters = Array.from(new Set(adapters)); // only unique values should be save in DB
            await SiteDB.update(payload['siteId'], undefined, adapters);
        }
        await Promise.all([
            await ConfigsDB.updatePB(payload.configid, config, tags, `${payload.width}x${payload.height}`),
            await saveLogs(payload, 'update', undefined, undefined)
        ]);
        io.push('CONFIG_SAVED', true, socketId, 'success');
        res.type("json").send(config);
    } catch (e) {
        io.push(e.message, true, socketId, 'error');
        console.log(e.message);
        res.status(500).send(e.message);
    }
};
