module.exports.analyticsHelper = (sizes, adUnitId, PREBID_TIMEOUT, domain, dashboardId) => {
    return `
            function parseUserAgent(ua) {
                function detectDevice(ua) {
                    if (/ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua.toLowerCase())) {
                        return 'tablet';
                    }
                    if (/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua.toLowerCase())) {
                        return 'mobile';
                    }
                    return 'desktop';
                }
                let device = detectDevice(ua);

                function detectOsAndBrowser(ua) {
                    var module = {
                        options: [],
                        dataos: [{
                                name: 'Windows Phone',
                                value: 'Windows Phone',
                                version: 'OS'
                            },
                            {
                                name: 'Windows',
                                value: 'Win',
                                version: 'NT'
                            },
                            {
                                name: 'iOS',
                                value: 'iPhone',
                                version: 'OS'
                            },
                            {
                                name: 'iOS',
                                value: 'iPad',
                                version: 'OS'
                            },
                            {
                                name: 'Kindle',
                                value: 'Silk',
                                version: 'Silk'
                            },
                            {
                                name: 'Android',
                                value: 'Android',
                                version: 'Android'
                            },
                            {
                                name: 'PlayBook',
                                value: 'PlayBook',
                                version: 'OS'
                            },
                            {
                                name: 'BlackBerry',
                                value: 'BlackBerry',
                                version: '/'
                            },
                            {
                                name: 'Macintosh',
                                value: 'Mac',
                                version: 'OS X'
                            },
                            {
                                name: 'Linux',
                                value: 'Linux',
                                version: 'rv'
                            },
                            {
                                name: 'Palm',
                                value: 'Palm',
                                version: 'PalmOS'
                            }
                        ],
                        databrowser: [{
                                name: 'Yandex Browser',
                                value: 'YaBrowser',
                                version: 'YaBrowser'
                            },
                            {
                                name: 'Opera Mini',
                                value: 'Opera Mini',
                                version: 'Opera Mini'
                            },
                            {
                                name: 'Amigo',
                                value: 'Amigo',
                                version: 'Amigo'
                            },
                            {
                                name: 'Atom',
                                value: 'Atom',
                                version: 'Atom'
                            },
                            {
                                name: 'Opera',
                                value: 'OPR',
                                version: 'OPR'
                            },
                            {
                                name: 'Edge',
                                value: 'Edge',
                                version: 'Edge'
                            },
                            {
                                name: 'Edge',
                                value: 'Edg',
                                version: 'Edg'
                            },
                            {
                                name: 'Internet Explorer',
                                value: 'Trident',
                                version: 'rv'
                            },
                            {
                                name: 'Chrome',
                                value: 'Chrome',
                                version: 'Chrome'
                            },
                            {
                                name: 'Firefox',
                                value: 'Firefox',
                                version: 'Firefox'
                            },
                            {
                                name: 'Safari',
                                value: 'Safari',
                                version: 'Version'
                            },
                            {
                                name: 'Internet Explorer',
                                value: 'MSIE',
                                version: 'MSIE'
                            },
                            {
                                name: 'Opera',
                                value: 'Opera',
                                version: 'Opera'
                            },
                            {
                                name: 'BlackBerry',
                                value: 'CLDC',
                                version: 'CLDC'
                            },
                            {
                                name: 'Mozilla',
                                value: 'Mozilla',
                                version: 'Mozilla'
                            }
                        ],
                        init: function () {
                            var os = this.matchItem(ua, this.dataos);
                            var browser = this.matchItem(ua, this.databrowser);

                            return {
                                os: os,
                                browser: browser
                            };
                        },

                        getVersion: function (name, version) {
                            if (name === 'Windows') {
                                switch (parseFloat(version).toFixed(1)) {
                                    case '5.0':
                                        return '2000';
                                    case '5.1':
                                        return 'XP';
                                    case '5.2':
                                        return 'Server 2003';
                                    case '6.0':
                                        return 'Vista';
                                    case '6.1':
                                        return '7';
                                    case '6.2':
                                        return '8';
                                    case '6.3':
                                        return '8.1';
                                    default:
                                        return parseInt(version) || 'other';
                                }
                            } else return parseInt(version) || 'other';
                        },

                        matchItem: function (string, data) {
                            var i = 0;
                            var j = 0;
                            var regex, regexv, match, matches, version;

                            for (i = 0; i < data.length; i += 1) {
                                regex = new RegExp(data[i].value, 'i');
                                match = regex.test(string);
                                if (match) {
                                    regexv = new RegExp(data[i].version + '[- /:;]([\\\\d._]+)', 'i');
                                    matches = string.match(regexv);
                                    version = '';
                                    if (matches) {
                                        if (matches[1]) {
                                            matches = matches[1];
                                        }
                                    }
                                    if (matches) {
                                        matches = matches.split(/[._]+/);
                                        for (j = 0; j < matches.length; j += 1) {
                                            if (j === 0) {
                                                version += matches[j] + '.';
                                            } else {
                                                version += matches[j];
                                            }
                                        }
                                    } else {
                                        version = 'other';
                                    }
                                    return {
                                        name: data[i].name,
                                        version: this.getVersion(data[i].name, version)
                                    };
                                }
                            }
                            return {
                                name: 'unknown',
                                version: 'other'
                            };
                        }
                    };

                    var e = module.init();

                    var result = {};
                    result.os = e.os.name + ' ' + e.os.version;
                    result.browser = e.browser.name + ' ' + e.browser.version;
                    return result;
                }

                let {
                    os,
                    browser
                } = detectOsAndBrowser(ua);

                return {
                    device: device,
                    os: os,
                    browser: browser
                    }
            }
            
         function sendData(queryString) {
            if (navigator.sendBeacon) {
               navigator.sendBeacon('https://analytics.wmgroup.us/analytic/collection', queryString);
            } else {
               let xhr = new XMLHttpRequest();
               xhr.open('POST', 'https://analytics.wmgroup.us/analytic/collection');
               xhr.send(queryString);
            }
         }
         
         function sendAnalytics(event, data) {
            if (event === "call") {
               let queryString = JSON.stringify({
                  "publisher_id": "${dashboardId}",
                  "site": "${domain.replace(/https?:/gi, '').replace(/\//gi, '')}",
                  "ad_unit_size": ["${sizes.join()}"],
                  "ad_unit_type": ["banner"],
                  "device": parseUserAgent(window.navigator.userAgent).device,
                  "os": parseUserAgent(window.navigator.userAgent).os,
                  "browser": parseUserAgent(window.navigator.userAgent).browser,
                  "c_timeout": ${PREBID_TIMEOUT},
                  "events": [{
                  "status": "call",
                  "bids": [{
                     "bidder": "",
                     "auction_id": "",
                     "ad_unit_code": "${adUnitId}",
                     "transaction_id": "",
                     "bid_size": ["${sizes.join()}"],
                     "bid_type": ["banner"],
                     "time_ms": 0,
                     "cur": "USD",
                     "price": "",
                     "cur_native": "USD",
                     "price_native": ""
                  }]
              }]
               });
                return sendData(queryString);
            } else if (event === "show" || event === "click") {
                return sendData(data);
            }    
         }`;
};
