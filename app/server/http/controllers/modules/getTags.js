const { to } = require("await-to-js");
const { controllerDB } = require("../../../../database/controllers");
const controllers_db = new controllerDB();
module.exports = async (req, res) => {
  let err, tags;
  let { id } = req.params;
  [err, tags] = await to(controllers_db.getTags(id));
  if (err) {
    console.error(err);
  }
  if (!tags) {
    return res.status(404).send(`No user with ID ${id} found`);
  }
  err ? res.status(500).send(err) : res.send(JSON.stringify(tags));
};
