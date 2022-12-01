const {getDataType} = require("../getDataType");

module.exports.prebidAdaptersSettingsGen = async(settings) => {
    settings = JSON.parse(settings);
    const modules = Object.keys(settings);
    const bids = [];
    const bidPrices = [];
    for (let i = 0; i < modules.length; i++) {
        let bidder = modules[i];
        let params = [];
        if (settings[modules[i]].disabled && settings[modules[i]].disabled.data === true) {
            continue;
        }
        let setArr = Object.keys(settings[modules[i]]);
        for (let key of setArr) {
            let type = getDataType(settings[modules[i]][key].type);
            let value = settings[modules[i]][key].data;
            if (key === "cpmAdjustment") {
                let floorPriceTemplate = `
    '${bidder}': {
        bidCpmAdjustment: function(bidCpm) {
            if (${value} !== 0) {
                return bidCpm * ${value};
            } else {
                return bidCpm;
            }
        }
    },`;
                bidPrices.push(floorPriceTemplate);
                continue;
            }
            if (type === "string" || value === '') {
                value = `'${settings[modules[i]][key].data}'`;
            } else {
                value = settings[modules[i]][key].data;
            }
            key = key.replace(/\*/g, "");
            params.push(`
                    ${key}: ${value}`);
        }
        let bidTemplate = `
            {
                bidder: '${bidder}',
                params: {${params.join(",")}
                }
            }`;
        bids.push(bidTemplate);
    }

    return {bids, bidPrices};

};
