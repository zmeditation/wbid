const request = require('request-promise-native');
const {UserDB} = require('../../../../database/controllers/user');
const {SiteDB} = require('../../../../database/controllers/site');
const {Socket} = require("../../../../../app/server/socket");
const io = new Socket();

module.exports = async (req, res) => {
    const {id, socketId} = req.body;
    try {
        let user = await UserDB.getUser(id);
        if (user) {
            user = {
                userData: {
                    id: user.dataValues.id,
                    name: user.dataValues.name,
                    type: user.dataValues.wbidType,
                    trialFrom: user.dataValues.trialFrom,
                    successAdsTxtCheck: user.dataValues.successAdsTxtCheck
                },
                domains: user['Sites'].map(site => {
                    return {
                        id: site.id, domain: site.domain, adapters: site.adapters
                    }
                })
            }
        } else {
            res.status(404).send('No such user found');
        }
        console.log(`Publisher ${user.userData.name} checking...`);
        if (+new Date() <= +new Date(+user.userData.trialFrom + 6.048e+8)) {
            return res.status(200).json(
                {
                    success: true,
                    result: 'This user has not yet ended their trial period',
                    error: undefined
                }
            );
        }
        let sitesToCheck = [];
        for (const domain of user.domains) {
            io.push(`Site ${domain.domain} checked`, false, socketId, 'info');
            if (domain.adapters === null) continue;
            sitesToCheck.push({domain: domain.domain, adapters: domain.adapters, id: domain.id})
        }
        let options = {
            method: 'POST',
            uri: 'http://199.247.0.74:4444/trial', // in production change to ads.txt checker IP - 199.247.0.74, in dev - localhost
            body: {
                sites: sitesToCheck
            },
            json: true
        }
        let response = sitesToCheck.length ? await request(options) : undefined;
        let ads = true;
        if (response && response.length) {
            for (const res of response) {
                if (res.success === false) {
                    ads = false; // флаг что не все строки в файле присутствуют
                    let opt = {
                        method: 'POST',
                        uri: 'http://localhost:9999/disableUserConfigs',
                        body: {
                            id: res.id, socketId: undefined
                        },
                        json: true
                    }
                    await request(opt);
                    await SiteDB.update(res.id, undefined, undefined, true)
                } else if (res.success === true) { // проверка прошла успешно
                    let opt = {
                        method: 'POST',
                        uri: 'http://localhost:9999/enableUserConfigs',
                        body: {
                            id: res.id, socketId: undefined
                        },
                        json: true
                    }
                    await request(opt);
                    await SiteDB.update(res.id, undefined, undefined, false)
                } else {
                    ads = false;
                }
            }
        }
        ads === false
            ? await UserDB.update(id, undefined, undefined, undefined, undefined,
            undefined, undefined, false)

            : await UserDB.update(id, undefined, undefined, undefined, undefined,
            undefined, undefined, true);

        io.push('Checking finished', true, socketId, 'success');
        res.status(200).json(
            {
                success: true,
                isAdsTxtValid: ads,
                result: (response ? response : []),
                error: false
            }
        )
    } catch (e) {
        console.error(e.message || e);
        io.push(`Error occurred during check process: ${e.message || e}`, true, socketId, 'error')
        res.status(500).json(
            {
                success: false,
                result: 'Error occurred during check process',
                error: e.message || e
            }
        )
    }
}
