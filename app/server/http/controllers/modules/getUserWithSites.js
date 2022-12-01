const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();
const {to} = require("await-to-js");

module.exports = async (req, res) => {
    let err, user;
    let id = req.params.id;
    [err, user] = await to(controllers_db.getUserWithSites(id));
    err ? res.status(500).send(err.message) : res.type("json").send({user});
};

