const {to} = require("await-to-js");
const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();
module.exports = async (req, res) => {
    let err, user;
    let {id} = req.params;
    [err, user] = await to(controllers_db.getUserAndConfigs(id));
    if (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).send(`No user with ID ${id} found`);
    }
    err ? res.status(500).send(err) : res.send(JSON.stringify(user));
};
