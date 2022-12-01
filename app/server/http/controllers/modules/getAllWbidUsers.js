const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();
const {to} = require("await-to-js");

module.exports = async (req, res) => {
    const {id} = req.body;

    if (!id) {
        return res.status(400).send('Incorrect request!');
    }

    let err, users;
    [err, users] = await to(controllers_db.getUserByDashboardId(id));

    if (users.length === 0) {
        res.status(404).send('No users with such IDs found!');
    } else {
        err ? res.status(500).send(err.message || err) : res.json(users);
    }
};
