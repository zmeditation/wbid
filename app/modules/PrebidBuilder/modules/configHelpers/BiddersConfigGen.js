module.exports.biddersConfigGen = (settings) => {
    let bidderSpecificConfig;
    try {
        if (settings.includes('nodes')) {
            console.log('Specific settings generation...');
            settings = JSON.parse(settings);
            const bidderSettings = [];
            const biddersWithSettings = [];
            const modules = Object.keys(settings);
            for (let i = 0; i < modules.length; i++) {
                let bidder = modules[i];
                let setArr = Object.keys(settings[modules[i]]);
                if (setArr.includes('complete') && setArr.includes('nodes') && setArr.includes('ver')) {
                    biddersWithSettings.push(`'${bidder}'`);
                    bidderSettings.push(`
       ${bidder}: { 
           "schain": {
               "validation": "relaxed",
               "config": {
                   complete: ${settings[modules[i]]['complete'].data},
                   ver: "${settings[modules[i]]['ver'].data}",
                   nodes: ${settings[modules[i]]['nodes'].data},
                   ext: "${settings[modules[i]]['ext'].data || ""}"
               }
           }    
       }`)
                }
            }
            bidderSpecificConfig = `pbjs.setBidderConfig({
        bidders: [${biddersWithSettings.join()}],  
        config: {${bidderSettings.join()}
        }
    });`;
            return {bidderSpecificConfig};
        } else {
            bidderSpecificConfig = "";
            return {bidderSpecificConfig};
        }
    } catch (e) {
        console.log(e);
        bidderSpecificConfig = "";
        return {bidderSpecificConfig};
    }
};
