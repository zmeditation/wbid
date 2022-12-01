const {Prebid} = require("../../../../modules/PrebidBuilder/modules");
const pb = new Prebid();
const {to} = require("await-to-js");
module.exports = async (req, res) => {
    try {
        let err, adapters;
        [err, adapters] = await to(pb.getAdaptersList());
        err ? res.status(500).send(err.message) : res.type("json").send(adapters);
    } catch (e) {
        console.log(e.message);
    }
};
