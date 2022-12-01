const fse = require("fs-extra");
const path = require("path");
module.exports = async (req, res) => {
    try {
        let id = req.params;
        let filepath = path.join(__dirname, '../../../../modules/AdsTxtGetter/data/results.json');
        let data = await fse.readFile(
            filepath,
            "utf-8"
        );
        let {results} = JSON.parse(data);
        let arr = [];
        results.map(el => {
            return el.domains.forEach(e => {
                arr.push(e);
            });
        });
        res.status(200).send(
            arr.filter(el => {
                return el.configid.toString() === id.id.toString();
            })
        );
    } catch (e) {
        console.log(e);
    }
};
