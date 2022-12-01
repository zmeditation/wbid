const escape = require('escape-quotes');

module.exports.escapeChar = (string) => {

    try {
        string = escape(string, '\'<>/"', '\\');

        if (string && string.includes('\\')) {
            string.replace(/\\/gm, '')
        }

        return string;
    } catch (e) {
        console.log(e);
        return e;
    }
};
