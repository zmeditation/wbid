const {UserDB} = require("../../../../database/controllers/user");
const {Controller} = require("../../../../controllers");
const controller = new Controller();
const {controllerDB} = require("../../../../database/controllers");
const controllers_db = new controllerDB();

module.exports = async (req, res) => {
    try {
        let {id} = req.body;
        if (!id) {
            return res.status(400).send(`Incorrect request: no User ID found`);
        }
        const user = await UserDB.getUser(id);
        if (user) {
            await controller.DeletePublisher(user);
            await controllers_db.deleteUserAndSitesAndConfigs(id);
            res.type("json").send(`User ${user.dataValues.name} and all configs was successfully deleted from DB`);
        } else {
            res.status(404).send(`No user with ID ${id} found`);
        }
    } catch (e) {
        console.log(e.message || e);
        res.status(500).send(e.message);
    }
};
