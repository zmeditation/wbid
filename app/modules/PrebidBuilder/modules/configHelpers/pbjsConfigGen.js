module.exports.pbjsConfigGen = (CMP, domain, currency, supplyChain, USP, adUnitId) => {
    try {
        let currencyObject, schainObject;
        if (currency && currency !== 'undefined') { // config for currency module
            currency = JSON.parse(currency);
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
            currencyObject = `currency: {
        adServerCurrency: "${defaultCurrency}",
        granularityMultiplier: ${granularityMultiplier},
        conversionRateFile: "${rateFileUrl}"
  },`
        } else {
            currencyObject = '';
        }

/*        if (server && server !== "undefined") { // config for prebid server module
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
        }*/

        if (supplyChain) {
            schainObject = `"schain": {
              "validation": "strict",
              "config": {
                  "ver": "${supplyChain['ver']}",
                  "complete": ${supplyChain['complete']},
                  "nodes": ${supplyChain['nodes']}
              }
          },`
        } else schainObject = '';

        let pbjsConfig, mailRuFunc;
        if (CMP && CMP.type === 'custom') {
            pbjsConfig = `pbjs.setConfig({
        consentManagement: {
            gdpr: {
                cmpApi: "static",
                consentData: {
                    getTCData: {
                        tcString: cmp,
                        gdprApplies: true
                    }
                }
            }
        },
        ${currencyObject}
        ${schainObject}
        
        publisherDomain: "${domain}",
        userSync: {
                  filterSettings: {
                      iframe: {
                           bidders: '*',     
                           filter: 'include'
                        }
                      }
                    }
    });`;
            mailRuFunc = `var cmp; var codeCallCount = 0;
    (function testGetConsentDataInIframe() {
                        const tcData = {
                    cmpId: 28,
                    cmpStatus: "loaded",
                    cmpVersion: 1,
                    eventStatus: "tcloaded",
                    gdprApplies: true,
                    isServiceSpecific: true,
                    listenerId: 1,
                    outOfBand: {
                        allowedVendors: {},
                        disclosedVendors: {}
                    },
                    publisher: {
                        consents: {},
                        customPurpose: {
                            consents: {},
                            legitimateInterests: {}
                        },
                        legitimateInterests: {},
                        restrictions: {}
                    },
                    publisherCC: "US",
                    purpose: {
                        consents: {
                            1: true,
                            2: true,
                            3: true,
                            4: true,
                            5: true,
                            6: true,
                            7: true,
                            8: true,
                            9: true,
                            10: true
                        },
                        legitimateInterests: {
                            1: false,
                            2: true,
                            3: true,
                            4: true,
                            5: true,
                            6: true,
                            7: true,
                            8: true,
                            9: true,
                            10: true
                        }
                    },

                    purposeOneTreatment: false,
                    specialFeatureOptins: {
                        1: true,
                        2: true
                    },
                    tcString: "",
                    tcfPolicyVersion: 2,
                    useNonStandardStacks: false,
                    vendor: {
                        consents: {
                            1: true,
                            2: true,
                            3: true,
                            4: true,
                            5: true,
                            6: true,
                            7: true,
                            8: true,
                            9: true,
                            10: true
                        },
                        legitimateInterests: {
                            1: false,
                            2: true,
                            3: true,
                            4: true,
                            5: true,
                            6: true,
                            7: true,
                            8: true,
                            9: true,
                            10: true
                        }
                    }
                }
      window.addEventListener("message", function(f) {
        if (f.data && typeof f.data === "object" && f.data.__cmpReturn) {
          cmp = f.data['__cmpReturn'].returnValue['consentstring'];
          if (cmp) {
            startPrebidAuction();
          } else if (codeCallCount === 0) {
            showPassback();
          } else {}

          codeCallCount++;
        }
      });
      window.top.postMessage(
        {
          __cmpCall: {
            command: "getCMPData",
            parameter: null,
            callId: null
          }
        },
        "*"
      );
      window.__tcfapi = function (command, version, callback) {
        if (command === 'getTCData') {
           tcData.tcString = cmp;    
           callback(tcData, true);
        }
      }
    })();`
        } else if (CMP && CMP.type === 'basic' && !USP) {
            pbjsConfig = `pbjs.setConfig({
        consentManagement: {
            gdpr: {
                cmpApi: 'iab',
                timeout: ${CMP.timeout},
                defaultGdprScope: true,
           } 
        },
        ${currencyObject}
        ${schainObject}
        publisherDomain: "${domain}",
        userSync: {
                  filterSettings: {
                      iframe: {
                           bidders: '*',
                           filter: 'include'
                        }
                      }
                    }
    });`
        } else if (CMP && CMP.type === 'basic' && USP) {
            pbjsConfig = `pbjs.setConfig({
        consentManagement: {
            gdpr: {
                cmpApi: 'iab',
                timeout: ${CMP.timeout},
                defaultGdprScope: true,
                // allowAuctionWithoutConsent: ${CMP.allowAuctionWithoutConsent}
           },
           usp: {
                timeout: ${USP.timeout}
           }
        },
        ${currencyObject}
        ${schainObject}
        publisherDomain: "${domain}",
        userSync: {
                  filterSettings: {
                      iframe: {
                           bidders: '*',
                           filter: 'include'
                        }
                      }
                    }
  });`
        } else {
            pbjsConfig = `pbjs.setConfig({
     ${currencyObject}
     ${schainObject}
     publisherDomain: "${domain}",
     userSync: {
                filterSettings: {
                   iframe: {
                        bidders: '*',
                        filter: 'include'
                      }
                    }
                  }
  });`
        }

        return {pbjsConfig, mailRuFunc};
    } catch (e) {
        console.log(e);
        return false;
    }
};
