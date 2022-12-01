const {Prebid} = require("../../../../modules/PrebidBuilder/modules");
const pb = new Prebid();
const {to} = require("await-to-js");

module.exports = async (req, res) => {
    const payload = req.body;
    let err, response;
    [err, response] = await to(pb.getAnalyticsSettings(payload));
    err ? res.status(400).send(err.message) : res.type("json").send(response);
};
