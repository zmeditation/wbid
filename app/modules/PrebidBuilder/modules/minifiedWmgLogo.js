const fse = require("fs-extra");
const UglifyJS = require("uglify-es");

module.exports.WMGLogo = async () => {
    const file = await fse.readFile('./app/modules/PrebidBuilder/dist/wmg-logo-wbid.js', 'utf-8');
    return UglifyJS.minify(file, {keep_fnames: true}).code;
}
