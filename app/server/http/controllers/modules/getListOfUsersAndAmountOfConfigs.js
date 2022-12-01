const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();
const {to} = require("await-to-js");
module.exports = async (req, res) => {
    let err, users;
    [err, users] = await to(controllers_db.getUsersAndAmountOfConfigs());
    err ? res.status(500).send(err.message) : res.json({users});
};
