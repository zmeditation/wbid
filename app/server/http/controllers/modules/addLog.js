const {LogDB} = require("../../../../database/controllers/log");

module.exports = async (req, res) => {
    try {
        let {config_id, event, user, bidders, settings, addons} = req.body;
        if (!config_id || !event || !user) {
            return res.status(400).send('Incorrect request');
        }
        const logRecord = await LogDB.create({config_id, event, user, bidders, settings, addons});
        res.send({logRecord});
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
