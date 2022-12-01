const {ConfigsDB} = require("../../../../database/controllers/config");
const {Controller} = require("../../../../controllers");
const controller = new Controller();
const {saveLogs} = require("./saveLogs");
const {Socket} = require("../../../socket");
const {UserDB} = require("../../../../database/controllers/user");
const {SiteDB} = require("../../../../database/controllers/site");
const io = new Socket();

module.exports = async (req, res) => {
    let {id, socketId, configName, siteId} = req.body;
    if (!id) {
        return res.status(400).send("Incorrect request: no config ID found");
    }
    if (req.body.additional && req.body.additional['wbidUserId']) {
        const user = await UserDB.getUser(req.body.additional['wbidUserId'])
        const {Configs} = user['dataValues'];
        const configIds = Configs.map(config => config['dataValues'].id);
        if (configIds.includes(id) === false) {
            io.push('NO_PERMISSION', true, socketId, 'error');
            return res.status(403).send('No permission for this action');
        }
    }
    try {
        const config = await ConfigsDB.get(id);
        let updateSiteIfNeeded;
        config.dataValues.typeOfConfig === 'prebid'
            ? await controller.DeletePrebid(config, socketId)
            : await controller.DeletePostBid(config, socketId);

        if (config.dataValues.typeOfConfig === 'prebid') {
            const site = await SiteDB.getSite(siteId);
            if (site['dataValues']['Configs'] && site['dataValues']['Configs'].length === 1) {  // last config should be deleted
                updateSiteIfNeeded = SiteDB.update(siteId, undefined, []);
            }
        }

        if (updateSiteIfNeeded === undefined) {
            updateSiteIfNeeded = new Promise((resolve, reject) => resolve());
        }

        await Promise.all([
            await ConfigsDB.delete(id),
            await saveLogs(req.body, 'delete', id, configName),
            await updateSiteIfNeeded
        ]);
        io.push('CONFIG_REMOVED', true, socketId, 'success');
        res.send(`Config ID ${id} successfully deleted from DB`);
    } catch (e) {
        io.push(e.message, true, socketId, 'error');
        console.error(e.message || e);
        res.status(500).send(e.message);
    }
};
