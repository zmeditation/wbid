const request = require("request-promise-native");
const URL = "http://pbs.wmgroup.us/info/bidders";

module.exports = async (req, res) => {
    try {
        const supportedBiddersList = JSON.parse(await request(URL));
        supportedBiddersList.push('districtm', 'appnexus-video');
        res.json(supportedBiddersList.sort());
    } catch (e) {
        res.status(500).send(e.message || e);
    }
};
