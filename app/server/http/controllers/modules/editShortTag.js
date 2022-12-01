const {Sanitizer} = require("../sanitizer");
const sanitizer = new Sanitizer();
const {Controller} = require("../../../../controllers");
const controller = new Controller();
const {ConfigsDB} = require("../../../../database/controllers/config");
const {saveLogs} = require("./saveLogs");
const {Socket} = require("../../../../../app/server/socket");
const {UserDB} = require("../../../../database/controllers/user");
const io = new Socket();

module.exports = async (req, res) => {
    const {socketId} = req.body;
    if (req.body.additional && req.body.additional['wbidUserId']) {
        const user = await UserDB.getUser(req.body.additional['wbidUserId'])
        const {Configs} = user['dataValues'];
        const configIds = Configs.map(config => config['dataValues'].id);
        if (req.body.configid && configIds.includes(req.body.configid) === false) {
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
        const {config, tags} = await controller.editShortPostBid(payload);
        config.shortTag = true;
        await Promise.all([
            await ConfigsDB.updatePB(payload.configid, config, tags, `${payload.width}x${payload.height}`),
            await saveLogs(payload, 'update', undefined, undefined)
        ]);
        io.push('CONFIG_UPDATED', true, socketId, 'success');
        res.type("json").send(config);
    } catch (e) {
        console.error(e.message || e);
        io.push(e.message, true, socketId, 'error');
        res.status(500).send(e.message);
    }
};
