const {UserDB} = require("../../../database/controllers/user");

module.exports.checkExist = async (payload) => {
    if (payload.userId) {
        const user = await UserDB.getUser(payload.userId);
        const configs = user.dataValues['Configs'];
        for (const config of configs) {
            if (config.dataValues.configname === payload.configname) {
                return {
                    value: true,
                    errorMessage: `Config with name ${payload.configname} is already exists in DB!`
                };
            }
        }
    } else {
        const Users = await UserDB.get();
        for (const user of Users) {
            if (user.dataValues.name === payload.name) {
                return {
                    value: true,
                    errorMessage: `Publisher with name ${payload.name} is already exists in DB!`
                };
            }
        }
    }
    return false;
};
