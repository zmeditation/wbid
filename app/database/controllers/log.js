const {Logs} = require("../models");

exports.LogDB = class {
    constructor() {}

    static create({ config_id, event, user, bidders, settings, addons, config_name}) {
        return Logs.create({
            config_id,
            date: Date.now(),
            event,
            user,
            bidders,
            settings,
            addons,
            config_name
        });
    };

    static get(config_id) {
        return Logs.findAll({
            where: {
                config_id
            }
        });
    }
};
