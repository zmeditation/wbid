const {CDN} = require("./index");
const cdn = new CDN();
const {Socket} = require("../../../../app/server/socket");
const io = new Socket();
require("colors");

module.exports.deleteFromCDN = async (filename, socketId) => {
    try {
        await cdn.delete(filename.substring(filename.lastIndexOf("/") + 1));
        io.push('CDN.REMOVE', false, socketId, 'info');
        console.log(
            "Old file".green,
            `${filename}`.red,
            "was removed from CDN.".green
        );
        return 'Success';
    } catch (e) {
        console.log(e.message || e);
    }
};
