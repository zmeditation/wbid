const {Prebid} = require("../../../../modules/PrebidBuilder/modules");
const pb = new Prebid();
const {Sanitizer} = require("../sanitizer");
const sanitizer = new Sanitizer();
const {to} = require("await-to-js");

module.exports = async (req, res) => {
    let err, payload, response;
    if (!(await sanitizer.validate(req))) {
        return res.status(400).send();
    }
    [err, payload] = await to(sanitizer.sanitize(req));
    if (err) {
        res.status(400).send(err.message);
    }
    [err, response] = await to(pb.getAdaptersSettings(payload));
    if (!response.length) {
        res.status(501).send("No bidders found");
        return;
    }
    err ? res.status(400).send(err.message) : res.type("json").send(response);
};
