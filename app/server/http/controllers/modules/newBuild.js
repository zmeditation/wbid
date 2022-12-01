const { Prebid } = require("../../../../modules/PrebidBuilder/modules");
const pb = new Prebid();
const { Sanitizer } = require("../sanitizer");
const sanitizer = new Sanitizer();

module.exports = async (req, res) => {
  try {
    const payload = await sanitizer.sanitize(req);
    const modules = payload.adaptersList;
    const name = "default.publisher";
    const width = 300,
      height = 250;
    const cmp = "true";
    const response = await pb.getBundle(modules, name, width, height, cmp);
    res.status(200).send(response);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
};
