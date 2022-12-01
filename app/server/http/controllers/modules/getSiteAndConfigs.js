const {to} = require("await-to-js");
const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();


module.exports = async (req, res) => {
    let err, site;
    let {id} = req.params;
    [err, site] = await to(controllers_db.getSiteAndConfigs(id));
    if (err) {
        console.log(err.message);
        return res.status(
            err.message.includes('No site with ID') ? 404 : 500
        ).send(err.message);
    }
    res.json(site);
};
