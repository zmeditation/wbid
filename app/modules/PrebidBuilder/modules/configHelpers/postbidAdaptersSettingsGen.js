const {getDataType} = require("../getDataType");

module.exports.postbidAdaptersSettingsGen = (settings) => {
    settings = JSON.parse(settings);
    const modules = Object.keys(settings);
    const bids = [];
    const bidPrices = [];
    for (let i = 0; i < modules.length; i++) {
        let bidder = modules[i];
        if (bidder === 'WMG Marketplace') {
            continue;
        }
        let coef;
        switch (bidder) {
            case 'rubicon':
                coef = `bidCpm = bidCpm * 0.80;`;
                break;
            case 'aol':
                coef = `bidCpm = bidCpm * 0.80;`;
                break;
            case 'pubmatic':
                coef = `bidCpm = bidCpm * 0.77;`;
                break;
            case 'smartadserver':
                coef = `bidCpm = bidCpm * 0.82;`;
                break;
            default:
                coef = '';
        }
        let params = [];
        let setArr = Object.keys(settings[modules[i]]);
        if (settings[modules[i]].disabled && settings[modules[i]].disabled.data === true) {
            continue;
        }
        for (let k of setArr) {
            let val = settings[modules[i]][k].data;
            if (k === "cpmAdjustment" && val && val !== '0' && !!parseFloat(val)) {
                console.log(`Set custom CPM adjustment for ${bidder}: ${(1 - parseFloat(val)).toFixed(2)}`);
                coef = `bidCpm = bidCpm * (1 - ${val});`;
            }
        }
        for (let key of setArr) {
            let type = getDataType(settings[modules[i]][key].type);
            let value = settings[modules[i]][key].data;
            if (key === "cpmAdjustment") {
                continue;
            }
            if (key === "floorPrice") {
                let floorPriceTemplate;
                if (parseInt(bidder)) {
                    floorPriceTemplate = `
    '${bidder}': {
        bidCpmAdjustment: function(bidCpm) {
            ${coef}
            if (bidCpm < ${value}) return 0;
            else return bidCpm;
            }
        },
    `;
                } else {
                    floorPriceTemplate = `
    ${bidder}: {
        bidCpmAdjustment: function(bidCpm) {
            ${coef}
            if (bidCpm < ${value}) return 0;
            else return bidCpm;
            }
        },
    `;
                }
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
