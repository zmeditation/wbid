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
        if (!payload['PREBID_TIMEOUT'] || isNaN(parseFloat(payload['PREBID_TIMEOUT'])) || payload['PREBID_TIMEOUT'] === "") {
            return res.status(400).send('Incorrect request: timeout');
        }
        const {configid} = payload;
        const config = await ConfigsDB.get(configid);
        const {inventory} = config.dataValues;
        const {result, tags} = await controller.EditPostBid(payload, inventory);
        result.updatedBy = payload['additional'].name;
        await Promise.all([
            await ConfigsDB.update(payload.configid, result, `${payload.width}x${payload.height}`, tags),
            await saveLogs(payload, 'update', undefined, undefined)
        ]); // config_id and config_name gets from payload
        res.type("json").send(result);
    } catch (e) {
        io.push(e.message, true, socketId, 'error');
        res.status(500).send(e.message);
    }
};
