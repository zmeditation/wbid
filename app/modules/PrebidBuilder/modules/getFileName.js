const dateFormat = require("dateformat");
const md5 = require("md5");

module.exports.getFileName = (name, width, height) => {
  return `${md5(new Date())
    .toString()
    .slice(0, 6)}_${name}_${width}x${height}_${dateFormat(
    new Date(),
    "dd.mm.yyyy"
  )}.js`;
};
