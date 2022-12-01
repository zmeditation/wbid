const {controllerDB} = require('../../database/controllers');
const c = new controllerDB();
const request = require('request-promise-native');
const {UserDB} = require('../../database/controllers/user');
const {SiteDB} = require('../../database/controllers/site');
require("colors");

module.exports.trialAdsTxtCheck = async (status) => {
    const environment = process.env.NODE_ENV || 'test';
    const users = await c.getAllTrialUsers(status);
    if (users) {
        for (const user of users) {
            console.log(`Publisher ${user.userData.name} checking...`.green);
            if (+new Date() <= +new Date(+user.userData.trialFrom + 6.048e+8)) continue;
            let isValid = true;
            let sitesToCheck = [];
            for (const domain of user.domains) {
                if (domain.adapters === null) continue;
                sitesToCheck.push({domain: domain.domain, adapters: domain.adapters, id: domain.id})
            }
            let options = {
                method: 'POST',
                uri: 'http://199.247.0.74:4444/trial', // in production change to ads.txt checker IP
                body: {
                    sites: sitesToCheck
                },
                json: true
            }
            let response = sitesToCheck.length ? await request(options) : undefined;
            if (response && response.length) {
                for (const res of response) {
                    if (res.success === false) {
                        // проверка прошла неудачно - нет файла ads.txt или не все строки присутствуют
                        let opt = {
                            method: 'POST',
                            uri: 'http://localhost:9999/disableUserConfigs',
                            body: {
                                id: res.id, socketId: undefined
                            },
                            json: true
                        }
                        const disabledMessage = await request(opt);
                        await SiteDB.update(res.id, undefined, undefined, true)
                        console.log(`${disabledMessage}`.black.bgRed);
                        isValid = false;
                    } else if (res.success === true) { // проверка сайта успешна
                        let opt = {
                            method: 'POST',
                            uri: 'http://localhost:9999/enableUserConfigs',
                            body: {
                                id: res.id, socketId: undefined
                            },
                            json: true
                        }
                        const enabledMessage = await request(opt);
                        await SiteDB.update(res.id, undefined, undefined, false)
                        console.log(`${enabledMessage}`.bgGreen);
                    }
                }
            }
            // permissions add or remove
            const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDk1ZmUwNGYtY2Q3NC00NDg1LTk1NGItZDE3MjQ4YmE3OTRhIn0sImlhdCI6MTU4OTE5MjE3NSwiZXhwIjozMTcxMzM2MzQ1NzV9.rXHUpvUiINXpb9k4XGgo1ua7PzqDiUm8JY1tVzoxYqI';
            const testToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiZDkzNTEwM2MtZDQ5Yi00NjM4LWFjZjQtZWIyNWFhNjFiNGRkIn0sImlhdCI6MTU4OTIwMzMxNSwiZXhwIjoxNTg5NjM1MzE1fQ.AfsUgKsZPnFbi9GN9SS5iUEeAeL5X9GNQ3-299OJlMs';
            const prebidPermissions = [
                'canSeeWBidChartsPage',
                'canSeeWBidTablesPage',
                'canCreateWBidPlacements',
                'canEditWBidPlacements',
                'canDeleteWBidPlacements',
                'canDeleteWBidSites',
                'canEditWBidSites',
                'canSeeWBidActions',
                'canSeeWBidMarketplace',
                'canReadOwnWBidReports'
            ];
            let uri;
            switch (environment) {
                case 'development':
                    uri = 'https://staging.dashboard.wmgroup.us/api/users/edit-permissions';
                    break;
                case 'test':
                    uri = 'http://localhost:4845/api/users/edit-permissions';
                    break;
                case 'production':
                    uri = 'https://dashboard.wmgroup.us/api/users/edit-permissions';
            }

            let permOptions = {
                method: 'POST',
                uri: uri,
                headers: {
                    'Authorization': environment === 'test' ? testToken : token
                },
                body: {
                    query: {
                        id: user.userData.dashboardId,
                        permissions: prebidPermissions,
                        typeOfAction: isValid ? 'ADDING_FOR_ONE' : 'DELETION_FOR_ONE'
                    },
                    additional: {
                        id: "5dee5431db996e537c8ebf46",
                        wbidUserId: null,
                        permission: "canEditAllUsers",
                        permissions: ["canSeeDashboardPage", "canAddAllUsers", "canSeeUsersPage", "canSeePermissionManager", "canReadAllUsers", "canEditAllUsers", "canDeleteAllUsers", "canToggleUsers", "canReadAllReports", "canSeeCodesPage", "canSeeReportsPage", "canSeeOwnProfilePage", "canUploadAvatar", "canAddReports", "canReadOwnAccountInfo", "canSeeReportManagementPage", "canSeeSettingsPage", "canReadPermissions", "canReadPreviouslyUploadedReports", "canDeletePreviouslyUploadedReports", "canEditCommission", "canDownloadReports", "canSeeAPIManagementPage", "canDeleteReports", "canSeeWBidPage", "canDeleteWBidPlacements", "canSeeAnalyticsPage", "3091857", "canSeeWBidChartsPage", "canSeeWBidTablesPage", "canCreateWBidPlacements", "canEditWBidPlacements", "canDeleteWBidSites", "canEditWBidSites", "canSeeWBidAmazonSettings", "canSeeWBidSchainSettings", "canSeeWBidPrebidServerSettings", "canSeeWBidMarketplace", "canSetWBidShortTag", "canSeeWBidPlacementHistory", "canSeeWBidActions", "canSetWBidMarketplace", "canSeeAllWBidUsers", "canSeeWBidStatusAdsTxt", "canReadAllWBidReports", "canSeeOwnWBidSettings"],
                        name: "WBID Bot"
                    }
                },
                json: true
            }
            if (isValid === false) {
                try {
                    await request(permOptions);
                } catch (e) {
                    console.log(e.message || e);
                }
                await UserDB.update(user.userData.id, undefined, undefined, undefined, undefined, undefined, undefined, false);
            } else {
                await UserDB.update(user.userData.id, undefined, undefined, undefined, undefined, undefined, undefined, true);
            }
        }
    }
}
