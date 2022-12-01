const fse = require('fs-extra');

module.exports.makeConfig = async (payload) => {

    let settings = payload;
    let PREBID_TIMEOUT = settings.PREBID_TIMEOUT;
    let FAILSAFE_TIMEOUT = settings.FAILSAFE_TIMEOUT;
    let adUnits = JSON.parse(settings.adUnits);

    if (!Array.isArray(adUnits)) {
        adUnits = [];
        adUnits.push(settings.adUnits)
    }

    let units = [];

    for (let unit of adUnits) {
        let tag = unit.tag;
        let mediaType = unit.mediaTypes;
        let bidder = unit.bidder;
        let params = unit.params;
        let sizes = unit.sizes;

        let templateAdUnit = `
        {
    code: '${tag}',
    mediaTypes: {
        ${mediaType}: {
            sizes: [${sizes}]
            }
        },
    bids: [{
        bidder: '${bidder}',
        params: {
            ${params}
        }
    }]
}`;
        units.push(templateAdUnit);
    }

    let slots = [];

    for (let slot of adUnits) {
        let tag = slot.tag;
        let sizes = slot.sizes;
        let templateSlots = `
googletag.cmd.push(function() {
googletag.defineSlot('${tag}', ${sizes}, 'div-${(adUnits.indexOf(slot)) + 1}').addService(googletag.pubads());
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});
`;
        slots.push(templateSlots);
    }

    let template = `
var PREBID_TIMEOUT = ${PREBID_TIMEOUT};
var FAILSAFE_TIMEOUT = ${FAILSAFE_TIMEOUT};

var adUnits = [${units}];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});

function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.que.push(function() {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh();
        });
    });
}
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);
${slots.join("")}
`;
    await fse.writeFile('./settings.js', template, 'utf-8');
    return template;
};
