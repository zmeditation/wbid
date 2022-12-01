const {Sanitizer} = require("../sanitizer");
const sanitizer = new Sanitizer();
const {Controller} = require("../../../../controllers");
const controller = new Controller();
const {ConfigsDB} = require("../../../../database/controllers/config");
const {SiteDB} = require("../../../../database/controllers/site");
const {Socket} = require("../../../socket");
const {checkExist} = require("../../../../modules/PrebidBuilder/modules/checkExist");
const {allSizes} = require("../../../../modules/PrebidBuilder/modules/allSizes");
const {saveLogs} = require("./saveLogs");
const io = new Socket();

module.exports = async (req, res) => {
    const payload = await sanitizer.sanitize(req);
    try {
        if (!allSizes(`${payload.width}x${payload.height}`)) {
            console.log('Incorrect or non-supported placement size');
            return res.status(400).send('Incorrect or non-supported placement size');
        }
        if (payload.sizes && `${payload.width}x${payload.height}` !== `${payload.sizes}`) {
            console.log('Incorrect request: sizes');
            return res.status(400).send('Incorrect request: sizes');
        }
        const allBoolean = await sanitizer.checkBoolean(req);
        if (allBoolean !== true) {
            console.log(allBoolean['message']);
            return res.status(400).send(allBoolean['message']);
        }
        if (payload['floorPrice'] && isNaN(parseFloat(payload['floorPrice']))) {
            console.log('Incorrect request: floor price');
            return res.status(400).send('Incorrect request: floor price');
        }
        if (payload['PREBID_TIMEOUT'] && isNaN(parseFloat(payload['PREBID_TIMEOUT']))) {
            console.log('Incorrect request: timeout');
            return res.status(400).send('Incorrect request: timeout');
        }
        const exist = await checkExist(payload);
        const {typeOfConfig} = payload;
        if (exist.value) throw new Error(exist.errorMessage);
        let user, site;
        const {
            tags, configname, config
        } = await controller.GetShortPostbid(payload);
        user = {id: payload.userId};
        site = payload.siteId
            ? {id: payload.siteId}
            : await SiteDB.create(payload.domain, payload.userId);
        config.createdBy = payload['additional'].name;
        config.shortTag = true;
        const result = await ConfigsDB.create({tags, inventory: '', config, user, configname, site, typeOfConfig});
        await saveLogs(payload, 'create', result.dataValues.id, result.dataValues.configname);
        io.push('CONFIG_SAVED', true, payload.socketId, 'success');
        res.status(200).send({tags, id: result.dataValues.id});
    } catch (e) {
        console.error(e.message || e);
        io.push(e.message, true, payload.socketId, 'error');
        res.status(500).send(e.message);
    }
};
