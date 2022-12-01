const {UserDB} = require("./user");
const {ConfigsDB} = require("./config");
const {SiteDB} = require("./site");
const {LogDB} = require("./log");

exports.controllerDB = class {
    constructor() {
    }

    async getLogsById(config_id) {
        try {
            const logs = LogDB.get(config_id);
            return logs.map(el => {
                return el
            })
        } catch (e) {
            console.error(e);
            return e.message || e;
        }
    }

    async getUsersAndAmountOfConfigs() {
        try {
            let user = await UserDB.get();
            return user.map(el => {
                return {
                    userData: {
                        id: el.dataValues.id,
                        name: el.dataValues.name
                    },
                    configsLength: el.Configs.length
                };
            });
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async getUsersListWithSites() {
        try {
            let user = await UserDB.get();
            return user.map(el => {
                return {
                    userData: {
                        id: el.dataValues.id,
                        name: el.dataValues.name,
                        type: el.dataValues.wbidType
                    },
                    sites: el.Sites.length,
                    domains: el.Sites.map(site => site.domain)
                };
            });
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async getUserByDashboardId(dashboardId) {
        try {
            let users;
            if (dashboardId.length > 0) {
                users = await UserDB.getUserByDashboardId(dashboardId);
            } else {
                users = await UserDB.get();
            }
            let result = users.map(el => {
                const domains = el['Sites'].map(site => {
                    return {
                        domain: site.domain
                    }
                });
                return {
                    name: el.name,
                    id: el.dashboardId,
                    domains
                }
            });

            for (let el of result) {
                for (let domain of el.domains) {
                    let site = await SiteDB.getConfigsBySiteDomain(domain.domain);
                    let {Configs} = site;
                    domain.configs = {prebid: [], postbid: []};
                    Configs.map(config => {
                        if (config.typeOfConfig === 'postbid') {
                            domain.configs.postbid.push(`${config.configname}_${config.sizes}`)
                        }

                        if (config.typeOfConfig === 'prebid') {
                            domain.configs.prebid.push(`${config.configname}_${config.sizes}`)
                        }
                    });
                }
            }
            return result.sort((u1, u2) => {
                return (u1.name.toLowerCase() > u2.name.toLowerCase()) ? 1 : -1;
            });
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async deleteUserAndConfigs(id) {
        try {
            const user = await UserDB.getUser(id);
            const configs = user.Configs;
            if (!user.Configs) {
                return await UserDB.delete(id);
            }
            for (let config of configs) {
                await ConfigsDB.delete(config.dataValues.id);
            }
            await UserDB.delete(id);
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async deleteUserAndSitesAndConfigs(id) {
        try {
            const user = await UserDB.getUser(id);
            const configs = user.Configs;
            const sites = user.Sites;
            if (!user.Configs || !user.Configs.length) {
                return await UserDB.delete(id);
            }
            for (let config of configs) {
                await ConfigsDB.delete(config.dataValues.id);
            }
            for (let site of sites) {
                await SiteDB.delete(site.dataValues.id);
            }
            await UserDB.delete(id);
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async deleteSiteAndConfigs(id) {
        try {
            const site = await SiteDB.getSite(id);
            const configs = site.Configs;
            if (!site.Configs || !site.Configs.length) {
                return await SiteDB.delete(id);
            }
            for (let config of configs) {
                await ConfigsDB.delete(config.dataValues.id);
            }
            await SiteDB.delete(id);
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async getUserWithSites(userId) {
        try {
            const user = await UserDB.getUser(userId);
            if (!user || !user.dataValues) {
                return `No user with ID ${userId} found`
            }
            let {id, name, Sites, wbidType, HBSetupStatus, dashboardId, status, trialFrom, successAdsTxtCheck} = user.dataValues;
            return {
                id,
                name,
                wbidType,
                HBSetupStatus,
                dashboardId,
                status,
                trialFrom,
                successAdsTxtCheck,
                sites: await Promise.all(Sites.map(async (site) => {
                    let {Configs} = await SiteDB.getSite(site.dataValues.id);
                    return {
                        domain: site.dataValues.domain,
                        id: site.dataValues.id,
                        disabled: site.disabled,
                        configs: Configs.length
                    }
                }))
                    .catch(e => {
                        console.error(e.message);
                        return e.message;
                    })
            }
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async getUserAndConfigs(userId) {
        try {
            const user = await UserDB.getUser(userId);
            let {id, name, Configs} = user.dataValues;
            const filterAdapters = adapters => {
                return Object.keys(adapters);
            };
            return {
                id,
                name,
                configs: Configs.map(el => {
                    return {
                        configid: el.dataValues.id,
                        configname: el.dataValues.configname,
                        type: el.dataValues.typeOfConfig,
                        sizes: el.dataValues.sizes,
                        adapters: filterAdapters(JSON.parse(el.dataValues.config.settings)),
                        amazon: el.dataValues.config.amazon,
                        cmp: el.dataValues.config.cmp
                    };
                })
            };
        } catch (e) {
            console.error(e.message);
            throw new Error(e.message || e);
        }
    }

    async getSiteAndConfigs(siteId) {
        const site = await SiteDB.getSite(siteId);
        if (site === null) {
            throw new Error(`No site with ID ${siteId} found`);
        }
        const {id, domain, Configs} = site['dataValues'];
        const filterAdapters = adapters => {
            return Object.keys(adapters);
        };

        return {
            id,
            domain,
            configs: Configs.map(el => {
                return {
                    configid: el.dataValues.id,
                    configname: el.dataValues.configname,
                    type: el.dataValues.typeOfConfig,
                    sizes: el.dataValues.sizes,
                    adapters: filterAdapters(JSON.parse(el.dataValues.config.settings)),
                    amazon: el.dataValues.config.amazon,
                    cmp: el.dataValues.config.cmp,
                    currency: el.dataValues.config.currency,
                    server: el.dataValues.config.server,
                    marketplace: el.dataValues.config.marketplace,
                    marketplaceSettings: el.dataValues.config.marketplaceSettings,
                    analytics: el.dataValues.config.analytics &&
                        (
                            el.dataValues.config.analytics.includes('wbid') ||
                            el.dataValues.config.analytics.includes('adWMG')
                        ),
                    shortTag: el.dataValues.config.shortTag,
                    schain: el.dataValues.config.schain,
                    dev: el.dataValues.config.dev
                };
            })
        };
    }

    async getConfig(id) {
        try {
            return await ConfigsDB.get(id);
        } catch (e) {
            console.error(e);
            return e.message || e;
        }
    }

    async getTags(id) {
        try {
            let config = await ConfigsDB.get(id);
            return config.dataValues.tags;
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async getDataForAdsTxt() {
        try {
            return await UserDB.get();
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }

    async getAllUsersConfigs(userId) {
        try {
            const user = await UserDB.getUser(userId);
            const {Configs} = user['dataValues'];
            return {
                configs: Configs.map((config) => {
                    if (config['dataValues'] && config['dataValues'].id) {
                        return config['dataValues'].id
                    }
                }),
                success: true
            }
        } catch (e) {
            console.error(e.message || e);
            return {
                success: false,
                error: e.message || e
            }
        }
    }

    async getAllSiteConfigs(id) {
        try {
            const site = await SiteDB.getSite(id);
            if (site) {
                const {Configs} = site['dataValues'];
                return {
                    disabled: site.disabled,
                    configs: Configs.map((config) => {
                        if (config['dataValues'] && config['dataValues'].id) {
                            return config['dataValues'].id
                        }
                    }),
                    success: true
                }
            } else return undefined;
        } catch (e) {
            console.error(e.message || e);
            return {
                success: false,
                error: e.message || e
            }
        }
    }

    async getAllTrialUsers(status = 'trial') {
        try {
            let users = await UserDB.getUsersByStatus(status);
            return users ?
                users.map(el => {
                    return {
                        userData: {
                            id: el.dataValues.id,
                            dashboardId: el.dataValues.dashboardId,
                            name: el.dataValues.name,
                            type: el.dataValues.wbidType,
                            trialFrom: el.dataValues.trialFrom,
                            successAdsTxtCheck: el.dataValues.successAdsTxtCheck
                        },
                        domains: el['Sites'].map(site => {
                            return {
                                id: site.id, domain: site.domain, adapters: site.adapters
                            }
                        })
                    };
                })
                : null
        } catch (e) {
            console.error(e.message);
            return e.message || e;
        }
    }
};
