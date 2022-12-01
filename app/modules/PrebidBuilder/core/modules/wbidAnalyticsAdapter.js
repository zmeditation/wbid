import adapter from '../src/AnalyticsAdapter';
import adapterManager from '../src/adapterManager';
import CONSTANTS from '../src/constants';

const analyticsType = 'endpoint';
const url = 'https://analytics.wmgroup.us/analytic/collection';
const {
    EVENTS: {
        AUCTION_INIT,
        AUCTION_END,
        BID_REQUESTED,
        BID_WON,
        BID_TIMEOUT,
        NO_BID,
        BIDDER_DONE,
        BID_RESPONSE
    }
} = CONSTANTS;

let timestampInit = null;

let noBidArray = [];
let noBidObject = {};

let isBidArray = [];
let isBidObject = {};

let bidTimeOutArray = [];
let bidTimeOutObject = {};

let bidWonArray = [];
let bidWonObject = {};

let initOptions = {};

function postAjax(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
}

function handleInitSizes(adUnits) {
    return adUnits.map(function (adUnit) {
        return adUnit.sizes.toString()
    })
}

function handleInitTypes(adUnits) {
    return adUnits.map(function (adUnit) {
        return Object.keys(adUnit.mediaTypes).toString();
    })
}

function detectDevice() {
    if (
        /ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
            navigator.userAgent.toLowerCase()
        )
    ) {
        return 'tablet';
    }
    if (
        /iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(
            navigator.userAgent.toLowerCase()
        )
    ) {
        return 'mobile';
    }
    return 'desktop';
}

function detectOsAndBrowser() {

    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            {name: 'Windows Phone', value: 'Windows Phone', version: 'OS'},
            {name: 'Windows', value: 'Win', version: 'NT'},
            {name: 'iOS', value: 'iPhone', version: 'OS'},
            {name: 'iOS', value: 'iPad', version: 'OS'},
            {name: 'Kindle', value: 'Silk', version: 'Silk'},
            {name: 'Android', value: 'Android', version: 'Android'},
            {name: 'PlayBook', value: 'PlayBook', version: 'OS'},
            {name: 'BlackBerry', value: 'BlackBerry', version: '/'},
            {name: 'Macintosh', value: 'Mac', version: 'OS X'},
            {name: 'Linux', value: 'Linux', version: 'rv'},
            {name: 'Palm', value: 'Palm', version: 'PalmOS'}
        ],
        databrowser: [
            {name: 'Yandex Browser', value: 'YaBrowser', version: 'YaBrowser'},
            {name: 'Opera Mini', value: 'Opera Mini', version: 'Opera Mini'},
            {name: 'Amigo', value: 'Amigo', version: 'Amigo'},
            {name: 'Atom', value: 'Atom', version: 'Atom'},
            {name: 'Opera', value: 'OPR', version: 'OPR'},
            {name: 'Edge', value: 'Edge', version: 'Edge'},
            {name: 'Internet Explorer', value: 'Trident', version: 'rv'},
            {name: 'Chrome', value: 'Chrome', version: 'Chrome'},
            {name: 'Firefox', value: 'Firefox', version: 'Firefox'},
            {name: 'Safari', value: 'Safari', version: 'Version'},
            {name: 'Internet Explorer', value: 'MSIE', version: 'MSIE'},
            {name: 'Opera', value: 'Opera', version: 'Opera'},
            {name: 'BlackBerry', value: 'CLDC', version: 'CLDC'},
            {name: 'Mozilla', value: 'Mozilla', version: 'Mozilla'}
        ],
        init: function () {
            var agent = this.header.join(' ');
            var os = this.matchItem(agent, this.dataos);
            var browser = this.matchItem(agent, this.databrowser);

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
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
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

function handleAuctionInit(eventType, args) {
    initOptions.c_timeout = args.timeout;
    initOptions.ad_unit_size = handleInitSizes(args.adUnits);
    initOptions.ad_unit_type = handleInitTypes(args.adUnits);
    initOptions.device = detectDevice();
    initOptions.os = detectOsAndBrowser().os;
    initOptions.browser = detectOsAndBrowser().browser;
    timestampInit = args.timestamp;
}

function handleOtherEvents(eventType, args) {
}

function parseBidType(mediaTypes, mediaType) {
    if (!mediaTypes) {
        return [mediaType] || [''];
    } else {
        return Object.keys(mediaTypes) || [''];
    }
}

function parseSizes(sizes, width, height) {
    if (sizes !== undefined) {
        return sizes.map(s => {
            return s.toString();
        });
    } else {
        return [`${width},${height}`];
    }
}

function currencyExchange(sum, currency) {
    var url = 'https://api.exchangeratesapi.io/latest?base=USD';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    var rates;
    if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        rates = response.rates;
        return rates[currency] ? (sum / rates[currency]).toString().substring(0, 4) : '';
    } else {
        rates = {
            'CAD': 1.3072159397,
            'HKD': 7.7715849937,
            'ISK': 122.5991742955,
            'PHP': 50.7278765033,
            'DKK': 6.7067851373,
            'HUF': 298.8152934841,
            'CZK': 22.5668641178,
            'GBP': 0.7690091546,
            'RON': 4.2903428469,
            'SEK': 9.4767546222,
            'IDR': 13697.9895889427,
            'INR': 70.7974331359,
            'BRL': 4.1599353796,
            'RUB': 61.4239813319,
            'HRK': 6.6812959971,
            'JPY': 109.8815293484,
            'THB': 30.239633818,
            'CHF': 0.964907557,
            'EUR': 0.8975049363,
            'MYR': 4.0754801651,
            'BGN': 1.7553401544,
            'TRY': 5.8858373721,
            'CNY': 6.887991384,
            'NOK': 8.8691437803,
            'NZD': 1.5172320948,
            'ZAR': 14.379644588,
            'USD': 1.0,
            'MXN': 18.8064979357,
            'SGD': 1.3472446598,
            'AUD': 1.4528809908,
            'ILS': 3.4608687848,
            'KRW': 1157.0813139472,
            'PLN': 3.7933046132
        };

        return rates[currency] ? (sum / rates[currency]).toString().substring(0, 4) : '';
    }
}

function mapObject({
                       bidder,
                       adUnitCode,
                       auctionId,
                       transactionId,
                       sizes,
                       size,
                       mediaTypes,
                       mediaType,
                       cpm,
                       currency,
                       originalCpm,
                       originalCurrency,
                       height,
                       width
                   }) {
    return {
        bidder: bidder,
        auction_id: auctionId,
        ad_unit_code: adUnitCode,
        transaction_id: transactionId || '',
        bid_size: size || sizes || (width && height !== undefined)
            ? parseSizes(sizes, width, height)
            : [''],
        bid_type: mediaType || mediaTypes ? parseBidType(mediaTypes, mediaType) : [''],
        time_ms: Date.now() - timestampInit,
        cur: currency || '',
        price: (function () {
            if (cpm !== undefined && currency === 'USD') {
                return cpm.toString().substring(0, 4);
            } else if (cpm !== undefined && currency !== undefined && currency !== 'USD') {
                return currencyExchange(cpm, currency);
            } else {
                return '';
            }
        })(),
        cur_native: originalCurrency || '',
        price_native: originalCpm !== undefined ? originalCpm.toString().substring(0, 4) : ''
    };
}

function mapUpLevelObject(object, eventType, array) {
    Object.assign(object, {
        status: eventType || '',
        bids: array || []
    });

}

function handleEvent(array, object, eventType, args) {
    array.push(mapObject(args));
    mapUpLevelObject(object, eventType, array);
}

function handleNoBid(eventType, args) {
    handleEvent(noBidArray, noBidObject, eventType, args);
}

function handleBidResponse(eventType, args) {
    handleEvent(isBidArray, isBidObject, eventType, args);
}

function handleBidTimeout(eventType, args) {
    args.forEach(bid => {
        {
            bidTimeOutArray.push(mapObject(bid));
        }
    });
    mapUpLevelObject(bidTimeOutObject, eventType, bidTimeOutArray);
}

function handleBidWon(eventType, args) {
    handleEvent(bidWonArray, bidWonObject, eventType, args);
    sendRequest(bidWonObject);
}

function handleBidRequested(args) {
}

function sendRequest(...objects) {
    let obj = {
        publisher_id: initOptions.publisher_id.toString() || '',
        site: initOptions.site || '',
        ad_unit_size: initOptions.ad_unit_size || [''],
        ad_unit_type: initOptions.ad_unit_type || [''],
        device: initOptions.device || '',
        os: initOptions.os || '',
        browser: initOptions.browser || '',
        c_timeout: initOptions.c_timeout || 0,
        events: objects || []
    };
    postAjax(url, JSON.stringify(obj));
}

function handleAuctionEnd() {
    sendRequest(noBidObject, isBidObject, bidTimeOutObject);
}

let wbidAdapter = Object.assign(adapter({
    url,
    analyticsType
}), {
    track({
              eventType,
              args
          }) {
        switch (eventType) {
            case AUCTION_INIT:
                handleAuctionInit(eventType, args);
                break;
            case BID_REQUESTED:
                handleBidRequested(args);
                break;
            case BID_RESPONSE:
                handleBidResponse(eventType, args);
                break;
            case NO_BID:
                handleNoBid(eventType, args);
                break;
            case BID_TIMEOUT:
                handleBidTimeout(eventType, args);
                break;
            case BID_WON:
                handleBidWon(eventType, args);
                break;
            case AUCTION_END:
                handleAuctionEnd(args);
                break;
            default:
                handleOtherEvents(eventType, args);
                break;
        }
    }
});


// save the base class function
wbidAdapter.originEnableAnalytics = wbidAdapter.enableAnalytics;

// override enableAnalytics so we can get access to the config passed in from the page
wbidAdapter.enableAnalytics = function (config) {
    initOptions = config.options;
    wbidAdapter.originEnableAnalytics(config); // call the base class function
};
adapterManager.registerAnalyticsAdapter({
    adapter: wbidAdapter,
    code: 'wbid'
});
export default wbidAdapter;
