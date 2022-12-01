const {LogDB} = require("../../../../database/controllers/log");

module.exports = async (req, res) => {
    try {
        let {config_id} = req.body;
        if (!config_id) {
            return res.status(400).send();
        }
        const logRecord = await LogDB.get(config_id);
        res.send({logRecord});
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
    }
};
