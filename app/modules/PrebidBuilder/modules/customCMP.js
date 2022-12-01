const fse = require("fs-extra");

module.exports.customCMP = async () => {
    return await fse.readFile('./app/modules/PrebidBuilder/dist/customCMPCode.js', 'utf-8');
}
