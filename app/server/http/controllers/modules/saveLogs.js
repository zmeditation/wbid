const {LogDB} = require("../../../../database/controllers/log");

module.exports.saveLogs = async (payload, event, config_id, config_name) => {
    try {
        if (event === 'create') { //config created
            const {cmp, amazon, adaptersList, server, currency, marketplace, settings} = payload;
            const addons = [];

            if (cmp === true || cmp === 'true') {
                addons.push('CMP');
            }

            if (amazon === true || amazon === 'true') {
                addons.push('Amazon');
            }

            if (server && server.length > 1) {
                addons.push('PBS');
            }

            if (currency && currency !== '') {
                addons.push('Currency');
            }

            if (marketplace === 'true' || marketplace === true) {
                addons.push('Marketplace');
            }
            await LogDB.create({
                config_id,
                event,
                user: (payload['additional'] && payload['additional'].name) ? payload['additional'].name : "",
                bidders: JSON.parse(adaptersList),
                settings,
                addons,
                config_name
            })
        } else if (event === 'update') { //config updated
            const {configid, cmp, amazon, adaptersList, server, currency, marketplace, settings, configname} = payload;
            const addons = [];
            if (cmp === true || cmp === 'true') {
                addons.push('CMP');
            }

            if (amazon === true || amazon === 'true') {
                addons.push('Amazon');
            }

            if (server && server.length > 1) {
                addons.push('PBS');
            }

            if (currency && currency !== '') {
                addons.push('Currency');
            }

            if (marketplace === 'true' || marketplace === true) {
                addons.push('Marketplace');
            }
            await LogDB.create({
                config_id: configid,
                event,
                user: (payload['additional'] && payload['additional'].name) ? payload['additional'].name : "",
                bidders: JSON.parse(adaptersList),
                settings,
                addons,
                config_name: configname
            })
        } else if (event === 'delete') { //config deleted
            await LogDB.create({
                config_id,
                event,
                user: (payload['additional'] && payload['additional'].name) ? payload['additional'].name : "",
                bidders: [],
                settings: '{}',
                addons: [],
                config_name
            });
        }
    } catch (e) {
        console.error(e.message || e);
        return false;
    }
    return false;
};
