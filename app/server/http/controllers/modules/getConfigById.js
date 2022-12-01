const {to} = require("await-to-js");
const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();
module.exports = async (req, res) => {
    let err, config;
    let id = req.params.id ? req.params.id : req.query.id;
    [err, config] = await to(controllers_db.getConfig(id));
    if (err) {
        console.error(err.message);
    }
    if (!config) {
        return res.status(404).send(`No config with ID ${id} found`);
    }
    err ? res.status(500).send(err) : res.json(config);
};
