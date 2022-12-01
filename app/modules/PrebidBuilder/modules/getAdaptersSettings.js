const fse = require("fs-extra");

module.exports.getAdaptersSettings = async payload => {
    try {
        let adaptersList = payload.adaptersList;
        if (!Array.isArray(adaptersList)) {
            // if only one adapter in request
            adaptersList = [payload.adaptersList];
        }

        let list = JSON.parse(
            await fse.readFile("./app/modules/PrebidBuilder/dist/bidders.json", "utf-8")
        );
        const adapters = list.map(adapter => adapter.code);
        console.log('all adapters', adapters.length);
        let response = [];
        adaptersList.forEach(item => {
            if (adapters.includes(item)) {
                for (let adapter of list) {
                    if (adapter.code === item) {
                        response.push(adapter);
                    }
                }
            } else {
                // push empty settings object if this adapter not implemented yet - for compatibility
                response.push({
                    "name": item,
                    "code": item,
                    "options": []
                })
            }
        });
        return response;
    } catch (e) {
        console.log(e);
        return [{
            "name": 'item',
            "code": 'item',
            "options": []
        }]
    }
};
