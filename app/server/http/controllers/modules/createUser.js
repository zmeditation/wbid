const {UserDB} = require("../../../../database/controllers/user");

module.exports = async (req, res) => {
    try {
        let {name, wbidType, dashboardId, status, trialFrom} = req.body;
        const nameFormat = /[\wа-я.,\-_()\/0-9]{1,50}/;
        if (!name || !wbidType || !nameFormat.test(name) || name.length > 254) {
            return res.status(400).send("Incorrect request. Check publisher's name and WBID usage type");
        }
        const user = await UserDB.create(name, wbidType, false, dashboardId, status, trialFrom);
        res.send({user});
    } catch (e) {
        if (e.message === 'Validation error') {
            e.message = e.errors[0].message;
            console.log(e.message);
            res.status(500).send(`Validation error: ${e.message}`);
        } else {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
};
