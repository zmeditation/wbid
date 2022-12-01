module.exports.getFullPrebidConfig = async (PREBID_TIMEOUT, adUnitCode, bids, bidPrices, analyticsTemplate, config, width, height, floorPrice) => {
    return `
var PREBID_TIMEOUT = ${PREBID_TIMEOUT};
var FAILSAFE_TIMEOUT = 3000;
var floor = ${floorPrice};

var adUnits = [
    {
        code: '${adUnitCode}',
        mediaTypes: {
            banner: {
                sizes: [${width}, ${height}]
            }
        },
        bids: [${bids}
        ]
    }
];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.bidderSettings = {
    standard: {
        bidCpmAdjustment: function(bidCpm) {
            if (bidCpm < floor) return 0;
            else return bidCpm;
            }
        },
    ${bidPrices.join("")}
  };

pbjs.que.push(function() {
  ${analyticsTemplate}
  ${config}
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
// in case PBJS doesn't load
setTimeout(function() {
  initAdserver();
}, FAILSAFE_TIMEOUT);
    `
};
