const {SiteDB} = require("../../../../database/controllers/site");
const {UserDB} = require("../../../../database/controllers/user");
const {Socket} = require("../../../socket");
const io = new Socket();
const {controllerDB} = require("../../../../database/controllers/index");
const db = new controllerDB();
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    let {siteId, domain, adapters, socketId} = req.body;
    if (!siteId) {
        return res.status(400).send('Incorrect request: no site ID found');
    }
    if (!domain || !domain.trim().length) {
        return res.status(400).send('Incorrect request: no new domain value found or incorrect domain');
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
    const updateConfigs = async (siteId, domain) => {
        const userConfigs = await db.getAllSiteConfigs(siteId);
        if (userConfigs === undefined || !userConfigs.configs.length) {
            return {success: false, result: 'No configs or site not found'};
        }
        let toEdit = [];
        if (userConfigs.success === true && userConfigs['configs'].length > 0) {
            for (let config of userConfigs['configs']) {
                const cfg = await db.getConfig(config);
                let {creative, passbacktag, floorPrice, customCode, cmpType, ...body} = cfg.config;
                let {inventory} = cfg;
                if (cfg.typeOfConfig === 'postbid' && inventory && inventory.cr) {
                    body.crid = inventory.cr[0].id;
                }
                body.additional = {};
                body.additional.name = 'WBID Bot';
                body.width = body.size.width;
                body.height = body.size.height;
                body.domain = domain;
                body.configid = cfg.id.toString();
                body.typeOfConfig = cfg.typeOfConfig;
                body.PREBID_TIMEOUT = cfg.PREBID_TIMEOUT || '1500';
                body.siteId = siteId;
                body.shortTag = cfg.shortTag;
                body.adaptersList = JSON.stringify(Object.keys(JSON.parse(cfg['config'].settings)));
                if (cfg.typeOfConfig === 'prebid') {
                    toEdit.push(fetch('http://localhost:9999/editPrebidConfig', {
                        method: 'post',
                        body: JSON.stringify(body),
                        headers: {'Content-Type': 'application/json'},
                    }));
                } else if (cfg.typeOfConfig === 'postbid' && (cfg.shortTag === true || cfg.shortTag === 'true')) {
                    toEdit.push(fetch('http://localhost:9999/editShortTag', {
                        method: 'post',
                        body: JSON.stringify(body),
                        headers: {'Content-Type': 'application/json'},
                    }));
                } else {
                    toEdit.push(fetch('http://localhost:9999/editPostbidConfig', {
                        method: 'post',
                        body: JSON.stringify(body),
                        headers: {'Content-Type': 'application/json'},
                    }));
                }
            }
            let R = {};
            Promise.allSettled(toEdit)
                .then((result) => {
                    let counter = 0;
                    for (let r of result) {
                        if (r.status !== 'fulfilled' || r.value.status !== 200) {
                            console.log(r);
                            counter++;
                        }
                    }
                    if (counter === 0) {
                        R = {success: true, result: 'All placements updated'}
                    } else R = {success: false, result: 'Some errors occurred during placements update'};
                })
                .catch(e => {
                    console.log(e);
                    R = {success: false, result: e.message}
                });
            return R;
        } else if (userConfigs.success === false) {
            return {success: false, result: userConfigs.error};
        } else return {success: false, result: 'Internal Server Error'};
    };
    try {
        const updateResult = await updateConfigs(siteId, domain);
        if (updateResult.success !== true) {
            console.log(updateResult);
        } else {
            console.log(updateResult.result);
        }
        const site = await SiteDB.update(siteId, domain, adapters);
        adapters && adapters.length
            ? console.log('Update marketplace adapters list')
            : io.push('DOMAIN_UPDATED', true, socketId, 'success');
        res.send({message: `Site successfully updated`, site: site[1][0]});
    } catch (e) {
        io.push(e.message, true, socketId, 'error');
        console.log(e.message || e);
        res.status(500).send(e.message);
    }
};
