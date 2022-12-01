const fse = require("fs-extra");

module.exports.getAdaptersList = async () => {
    try {
        return await fse.readFile("./app/modules/PrebidBuilder/dist/adapters.json", 'UTF-8');
    } catch (e) {
        console.log(e.message || e);
    }
};
