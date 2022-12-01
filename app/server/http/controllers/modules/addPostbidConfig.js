const {Sanitizer} = require("../sanitizer");
const sanitizer = new Sanitizer();
const {Controller} = require("../../../../controllers");
const controller = new Controller();
const {ConfigsDB} = require("../../../../database/controllers/config");
const {SiteDB} = require("../../../../database/controllers/site");
const {Socket} = require("../../../socket");
const {checkExist} = require("../../../../modules/PrebidBuilder/modules/checkExist");
const {saveLogs} = require("./saveLogs");
const io = new Socket();
require("colors");

module.exports = async (req, res) => {
    const payload = await sanitizer.sanitize(req);
    try {
        const allBoolean = await sanitizer.checkBoolean(req);
        if (allBoolean !== true) {
            console.log('boolean');
            console.log(allBoolean['message']);
            return res.status(400).send(allBoolean['message']);
        }

        const isValid = sanitizer.checkReqParams(payload); //check if all needed params set correctly
        if (isValid.valid === false) {
            console.log(isValid);
            return res.status(isValid.status).send(isValid.message);
        }

        const exist = await checkExist(payload);
        if (exist.value) throw new Error(exist.errorMessage);

        const {typeOfConfig} = payload;

        let user, site;
        const {
            tags,
            inventory,
            config,
            configname
        } = await controller.MakePostBid(payload);
        user = {id: payload.userId};
        site = payload.siteId
            ? {id: payload.siteId}
            : await SiteDB.create(payload.domain, payload.userId);
        config.createdBy = payload['additional'].name ? payload['additional'].name : undefined;
        const result = await ConfigsDB.create({tags, inventory, config, user, configname, site, typeOfConfig});
        await saveLogs(payload, 'create', result.dataValues.id, result.dataValues.configname);
        io.push('CONFIG_SAVED', true, payload.socketId, 'success');
        res.status(200).send({tags, id: result.dataValues.id});
    } catch (e) {
        console.error(e);
        if (e.message === 'Cannot destructure property \'tags\' of \'(intermediate value)\' as it is undefined.') {
            res.status(400).send('Incorrect request. Try to check config settings');
            return io.push('INCORRECT_REQUEST', true, payload.socketId, 'error');
        }
        io.push(e.message, true, payload.socketId, 'error');
        res.status(500).send(e.message);
    }
};
