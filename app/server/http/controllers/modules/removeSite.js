const {SiteDB} = require("../../../../database/controllers/site");
const {UserDB} = require("../../../../database/controllers/user");
const {Socket} = require("../../../socket");
const {Controller} = require("../../../../controllers");
const controller = new Controller();
const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();
const {saveLogs} = require("./saveLogs");
const io = new Socket();

module.exports = async (req, res) => {
    let {siteId, socketId} = req.body;
    if (!siteId) {
        return res.status(400).send('Incorrect request: no site ID found');
    }
    if (req.body.additional && req.body.additional['wbidUserId']) {
        const user = await UserDB.getUser(req.body.additional['wbidUserId'])
        const {Sites} = user['dataValues'];
        const siteIds = Sites.map(site => site['dataValues'].id);
        if (siteIds.includes(siteId) === false) {
            io.push('NO_PERMISSION', true, socketId, 'error');
            return res.status(403).send('No permission for this action');
        }
    }
    try {
        const site = await SiteDB.getSite(siteId);
        const configs = site.dataValues['Configs'];
        if (configs && configs.length) {
            for (config of configs) {
                await saveLogs(req.body, 'delete', config.dataValues.id, config.dataValues.config.configname)
            }
        }
        await controller.DeletePublisher(site, socketId);
        await controllers_db.deleteSiteAndConfigs(siteId);
        io.push('SITE_REMOVED', true, socketId, 'success');
        res.type("json").send(`Site and all configs was successfully deleted from DB`);
    } catch (e) {
        io.push(e.message, true, socketId, 'error');
        console.error(e.message || e);
        res.status(500).send(e.message);
    }
};
