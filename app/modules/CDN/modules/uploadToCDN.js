const {CDN} = require("./index");
const cdn = new CDN();
const fse = require("fs-extra");
const {Socket} = require("../../../../app/server/socket");
const io = new Socket();
require("colors");

module.exports.uploadToCDN = async (file, socketId) => {
    let result = await cdn.upload(file);
    // await fse.remove(file);
    io.push('CDN.ADD', false, socketId, 'info');
    console.log(
        "File".green,
        `${result}`.red,
        "was uploaded to CDN.".green
    );
    return result;
};
