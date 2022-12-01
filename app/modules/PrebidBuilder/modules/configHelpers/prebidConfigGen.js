module.exports.prebidConfigGen = async (cmp, cmpTimeout, setDomain, domain, currency, server) => {
    try {
        if (currency) {
            currency = JSON.parse(currency);
        }
        const CMP = cmp === 'true'
            ? `consentManagement: {
                  gdpr: {
                      cmpApi: 'iab',
                      timeout: ${cmpTimeout},
                      defaultGdprScope: true,
                      }
                },`
            : '';
        const pubDomain = setDomain === 'true'
            ? `        publisherDomain: '${domain}',`
            : '';

//currency start
        const rateFileUrl = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json";
        let granularityMultiplier, defaultCurrency;
        defaultCurrency = currency.defaultCurrency || 'USD'; // If currency not set, use dollars

        switch (defaultCurrency) {
            case 'RUB':
                granularityMultiplier = 58;
                break;
            case 'JPY':
                granularityMultiplier = 108;
                break;
            case 'UAH':
                granularityMultiplier = 25;
                break;
            case 'CNY':
                granularityMultiplier = 6;
                break;
            case 'INR':
                granularityMultiplier = 70;
                break;
            default:
                granularityMultiplier = 1;
        }
        const currencyConfig = currency ? `currency: {
          adServerCurrency: "${defaultCurrency}",
          granularityMultiplier: ${granularityMultiplier},
          conversionRateFile: "${rateFileUrl}"
    },` : '';
        // currency end

        //s2s config start
        let pbObject = '';
        if (server && server !== "undefined") { // config for prebid server module
            server = JSON.parse(server);
            let controlledBidders = [];
            JSON.parse(server.bidders).forEach(bidder => {
                controlledBidders.push(`"${bidder}": {
             bidSource: {server:10, client:90},
             includeSourceKvp: true
         }`)
            });
            pbObject = `s2sConfig: {
                accountId: '${server.accountId || 1}',
                bidders: ${server.bidders},
                adapter: 'prebidServer',
                enabled: true,
                testing: ${server.test},
                testServerOnly: false,
                bidderControl: {${server.test ? controlledBidders.join() : ''}},
                timeout: ${server.timeout || 1500},
                endpoint: 'https://pbs.wmgroup.us/openrtb2/auction',
                syncEndpoint: 'https://pbs.wmgroup.us/cookie_sync'
    },`
        } else {
            pbObject = '';
        }
        //s2s config end

        return `
        pbjs.setConfig({
        ${pbObject}
        ${currencyConfig}
        ${CMP}
        ${pubDomain}
        userSync: {
                  filterSettings: {
                      iframe: {
                           bidders: '*',
                           filter: 'include'
                        }
                      }
                    }
    });
    `;
    } catch (e) {
        console.log(e.message);
    }
};
