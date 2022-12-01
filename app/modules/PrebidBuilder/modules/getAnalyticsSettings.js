const fs = require("fs-extra");
const path = require('path');

module.exports.getAnalyticsSettings = async payload => {
    try {
        let {analytics} = payload;
        if (!Array.isArray(analytics)) {
            analytics = [analytics];
        }

        let list = JSON.parse(
            await fs.readFile(path.join(__dirname, '../dist/analytics-settings.json'), "utf-8")
        );
        let response = [];

        analytics.forEach(item => {
            for (let key in list) {
                if (list.hasOwnProperty(key)) {
                    if (key === item) {
                        response.push(list[key])
                    }
                }
            }
        });
        return response.length > 0 ? response : "No such analytic modules founded";
    } catch (e) {
        console.error(e);
        return e.message;
    }
};
