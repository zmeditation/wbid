const {controllerDB} = require("../../../../database/controllers/index");
const db = new controllerDB();
const {SiteDB} = require("../../../../database/controllers/site");
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const {id, socketId} = req.body;
    let userConfigs = await db.getAllSiteConfigs(id);
    if (userConfigs === undefined || !userConfigs.configs.length) {
        return res.status(200).send('This user has no configs or another error occurred');
    }
    if (userConfigs.disabled === false) {
        console.log('This site already enabled');
        return res.status(200).send('This site already enabled');
    }
    let toEnable = [];
    if (userConfigs.success === true && userConfigs['configs'].length > 0) {
        for (let config of userConfigs['configs']) {
            const cfg = await db.getConfig(config);
            let {creative, passbacktag, floorPrice, customCode, cmpType, ...body} = cfg.config;
            body.additional = {};
            body.additional.name = 'WBID Bot';
            body.width = body.size.width;
            body.height = body.size.height;
            body.configid = cfg.id.toString();
            body.socketId = socketId;
            body.typeOfConfig = cfg.typeOfConfig;
            body.PREBID_TIMEOUT = '1500';
            body.siteId = id;
            body.adaptersList = JSON.stringify(Object.keys(JSON.parse(cfg['config'].settings)));
            let settings = JSON.parse(cfg['config'].settings);
            for (let adapter of JSON.parse(body.adaptersList)) {
                if (settings[adapter]['disabled']) {
                    settings[adapter]['disabled'] = {data: !settings[adapter]['disabled'].data, type: ""};
                } else {
                    settings[adapter]['disabled'] = {data: false, type: ""};
                }
            }
            body.settings = JSON.stringify(settings);
            toEnable.push(fetch('http://localhost:9999/editPrebidConfig', {
                method: 'post',
                body: JSON.stringify(body),
                headers: {'Content-Type': 'application/json'},
            }));
        }
        Promise.allSettled(toEnable)
            .then((result) => {
                let counter = 0;
                for (let r of result) {
                    if (r.status !== 'fulfilled' || r.value.status !== 200) {
                        console.log(r);
                        counter++;
                    }
                }
                if (counter === 0) {
                    SiteDB.update(id, undefined, undefined, false);
                    res.status(200).send('All configs was enabled');
                } else (res.status(500).send('Some errors occurred during request'));

            })
            .catch(e => res.status(500).send(e.message || e));
    } else if (userConfigs.success === false) {
        res.status(500).send(userConfigs.error);
    } else res.status(500).send("Internal Server Error");
};
