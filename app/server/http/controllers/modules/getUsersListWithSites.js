const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();
const {to} = require("await-to-js");
module.exports = async (req, res) => {
    let err, users;
    [err, users] = await to(controllers_db.getUsersListWithSites());
    if(typeof users === 'string' && users.includes('connect ETIMEDOUT')) {
        err = users;
    }
    err ? res.status(500).send(err.message) : res.type("json").send({users});
};
