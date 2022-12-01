const User = require("../models").User;
const Configs = require("../models").Configs;
const Site = require("../models").Site;

exports.SiteDB = class {
    constructor() {}

    static create(domain, UserId, adapters, disabled=null) {
        return Site.create({
            domain,
            UserId,
            adapters,
            disabled
        });
    }

    static get() {
        return Site.findAll({
            include: [
                {
                    model: Configs
                }
            ]
        });
    }

    static update(id, domain, adapters, disabled) {
        return Site.update({ domain, adapters, disabled }, { returning: true, where: { id } });
    }

    static getSite(id) {
        return Site.findOne({ where: { id } , include: [{ model: Configs }]});
    }

    static getConfigsBySiteDomain(domain) {
        return Site.findOne({ where: { domain } , include: [{ model: Configs }]});
    }

    static delete(id) {
        return Site.destroy({
            where: { id }
        });
    }
};
