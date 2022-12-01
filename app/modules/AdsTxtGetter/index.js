const { controllerDB } = require("../../database/controllers");
const fse = require("fs-extra");
const axios = require("axios");
const controllers_db = new controllerDB();

exports.AdsTxt = class {
    constructor() {}
    static get() {
        (async () => {
            try {
                let db = {};
                let data = await controllers_db.getDataForAdsTxt();
                db.results = data.map(el => {
                    return {
                        id: el.dataValues.id,
                        name: el.dataValues.name,
                        domains: el.Configs.map(c => {
                            return {
                                domain: c.config.domain,
                                configid: c.id,
                                origins: Object.keys(JSON.parse(c.config.settings))
                            };
                        })
                    };
                });
                const results = await axios.post(
                    "http://199.247.0.74:4444/checkDomains",
                    JSON.stringify(db),
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
                await fse.writeFile(__dirname + "/data/results.json", JSON.stringify(results.data), err => console.error(err.message || err));

            } catch (e) {
                console.error(e.message || e);
            }
        })();
    }
};