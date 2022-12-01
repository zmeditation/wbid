const {UserDB} = require("../../../../database/controllers/user");

module.exports = async (req, res) => {
    try {
        let {wbidUserId, name, wbidType, HBSetupStatus, dashboardId, status} = req.body;
        if (!wbidUserId) {
            return res.status(400).send('Incorrect request: no WBID User ID found');
        }
        const user = await UserDB.update(wbidUserId, name, wbidType, HBSetupStatus, dashboardId, status);
        if (!user[1][0]) {
            return res.status(404).send(`No user with id ${wbidUserId} found!`);
        }
        res.status(200).send(user[1][0]);
    } catch (e) {
        console.error(e.message || e);
        res.status(500).send(e.message || e);
    }
};
