const { Prebid } = require("../../../../modules/PrebidBuilder/modules");
const pb = new Prebid();
const { to } = require("await-to-js");
module.exports = async (req, res) => {
  let err, response;
  [err, response] = await to(pb.getSettings());
  err ? res.status(400).send(err.message) : res.type("json").send(response);
};
