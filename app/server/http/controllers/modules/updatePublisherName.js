const { UserDB } = require("../../../../database/controllers/user");
const { to } = require("await-to-js");
module.exports = async (req, res) => {
  let err;
  const { id, name } = req.query;
  [err] = await to(UserDB.update(id, name));
  err
    ? res.status(500).send(err.message)
    : res.json(`Name of publisher ID ${id} successfully changed to ${name}`);
};
