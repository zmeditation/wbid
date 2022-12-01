const User = require("../models").User;
const Configs = require("../models").Configs;
const Site = require("../models").Site;
const {Op} = require('sequelize');

exports.UserDB = class {
    constructor() {
    }

    static create(
        name,
        wbidType,
        HBSetupStatus = false,
        dashboardId,
        status = [],
        trialFrom = null,
        successAdsTxtCheck = null
    ) {
        return User.create({
            name,
            wbidType,
            HBSetupStatus,
            dashboardId,
            status,
            trialFrom,
            successAdsTxtCheck
        });
    }

    static get() {
        return User.findAll({
            include: [
                {
                    model: Configs
                },
                {
                    model: Site
                }
            ]
        });
    }

    static update(id, name, wbidType, HBSetupStatus, dashboardId, status, trialFrom, successAdsTxtCheck) {
        return User.update({name, wbidType, HBSetupStatus, dashboardId, status, trialFrom, successAdsTxtCheck}, {
            returning: true,
            where: {id}
        });
    }

    static getUser(id) {
        return User.findOne({where: {id}, include: [{model: Configs}, {model: Site}]});
    }

    static getUserByDashboardId(dashboardId) {
        return User.findAll({where: {dashboardId}, include: [{model: Configs}, {model: Site}]});
    }

    static getUsersByStatus(status) {
        return User.findAll({
            where: {
                status: {
                    [Op.contains]: [status]
                }
            }, include: [{model: Site}]
        });
    }

    static delete(id) {
        return User.destroy({
            where: {id}
        });
    }
};
