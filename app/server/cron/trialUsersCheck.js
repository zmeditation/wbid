const CronJob = require('cron').CronJob;
const {trialAdsTxtCheck} = require('../../modules/AdsTxtGetter/trialAdsTxtCheck')
const job = new CronJob('0 0 1 * *', function() { // '0 0 1 * *' - every month for testings, '0 */12 * * *' - every 12 hours for prod
    trialAdsTxtCheck('trial').catch(e=>console.log(e));
}, null, true, 'America/Los_Angeles');

module.exports.CronAdsTxtChecker = job;
