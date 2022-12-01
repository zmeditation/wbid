const beautify = require('js-beautify').html;

module.exports.getFullPostbidAmazonConfig = async (
    cdnpath,
    pbtag,
    sizes,
    bidPrices,
    timeout,
    PREBID_TIMEOUT,
    hash,
    slotName,
    floorPrice,
    adUnitId,
    bids,
    mailRuFunc,
    pbjsConfig,
    analyticsTemplate,
    bidderSpecificConfig,
    sendAnalyticsHelper,
    logo,
    protectedMediaCode
) => {
    console.log('long amazon tag');
    try {
        let width = sizes[0], height = sizes[1];
        let config = `<!doctype html><html>
        <head>
        <script async src="https://d3f4nuq5dskrej.cloudfront.net/js/wmg-logo-wbid.js"></script>
        <script async src="${cdnpath}"></script>
        <script>
        !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
        </script>
        <script>
                (function() {
                      var gads = document.createElement('script');
                      var useSSL = 'https:' === document.location.protocol;
                      gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
                      var node = document.getElementsByTagName('script')[0];
                      node.parentNode.insertBefore(gads, node);
                  })()
        
            var googletag = googletag || {};
            
            googletag.cmd = googletag.cmd || [];
        
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
            apstag.init({
                pubID: '20225d70-0d78-4b5e-9cb8-b69178e535c7',
                adServer: 'googletag'
        });
        </script>
</head>
<body>
<script>
${sendAnalyticsHelper}
sendAnalytics("call");
${mailRuFunc ? mailRuFunc : ''}
var bidTimeout = ${PREBID_TIMEOUT};

var apstagSlots = [{
    slotID: '${hash}',
    sizes: [[${sizes[0]}, ${sizes[1]}]],
    slotName: '${slotName}'
}];

var bidderWon = false;
var sizes = [${sizes[0]}, ${sizes[1]}];
var floor = ${floorPrice};
var adUnits = [{
    code: '${adUnitId}',
    mediaTypes: {
            banner: {
                sizes: sizes
            }
        },
        bids: [${bids}
        ]
}];

${mailRuFunc ? 'startPrebidAuction = function () {' : ''}
function fetchHeaderBids() {

    function sendAdserverRequest() {
        googletag.cmd.push(function() {
            apstag.setDisplayBids();
            googletag.pubads().refresh();
        });
    }
    function requestBids(apstagSlots, adUnits, bidTimeout) {
        apstag.fetchBids({
            slots: apstagSlots,
            timeout: bidTimeout
        }, function(bids) {
            if (bids[0].amznsz === '0x0') {
                googletag.cmd.push(function() {
                    googletag.destroySlots();
                });
        function showPassback() {
            var iframe = document.getElementById('${adUnitId}');
            var iframeDoc = iframe.contentWindow.document;
            iframe.width = sizes[0];
            iframe.height = sizes[1];
            if (iframeDoc && iframeDoc.body && iframeDoc.body.innerHTML && iframeDoc.body.innerHTML.length > 0) {
                clearPassback();
            }; 
            iframeDoc.write('<head></head><body>' + passbackTagHtml + '</body>');
        }

        function clearPassback() {
            var iframe = document.getElementById('${adUnitId}');
            var iframeDoc = iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write("");
            iframeDoc.close();
        }    
            pbjs.que.push(function() {
                ${analyticsTemplate}
                ${pbjsConfig}
                ${bidderSpecificConfig}
                pbjs.addAdUnits(adUnits);
                pbjs.requestBids({
                    timeout: bidTimeout,
                    bidsBackHandler: function() {
                        var iframe = document.getElementById('${adUnitId}');
                        var iframeDoc = iframe.contentWindow.document;
                        var adServerTargeting = pbjs.getAdserverTargetingForAdUnitCode('${adUnitId}');
                        if (adServerTargeting && adServerTargeting['hb_adid']) {
                            clearPassback();
                            pbjs.renderAd(iframeDoc, adServerTargeting['hb_adid']);
                            bidderWon = true;
                            var monitor = setInterval(function () {
                                var elem = document.activeElement;
                                if (elem && elem.tagName === 'IFRAME' && elem.id === '${adUnitId}') {
                                    sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}'));
                                    clearInterval(monitor);
                                }
                            }, 100);
                            window.onscroll();
                        } else {
                            showPassback();
                        }
                    }
                });
           });
            } else {
                var iframe = document.getElementById('${adUnitId}');
                iframe.parentNode.removeChild(iframe);
                    googletag.cmd.push(function() {
                    googletag.defineSlot('${slotName}', [[${sizes[0]}, ${
            sizes[1]
        }]], '${hash}').addService(googletag.pubads());
                    googletag.pubads().disableInitialLoad();
                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                    });
            }
        });
    }

    requestBids(apstagSlots, adUnits, bidTimeout)
    window.setTimeout(function() {
        sendAdserverRequest();
    }, bidTimeout);
};
fetchHeaderBids(apstagSlots, adUnits, bidTimeout);
${mailRuFunc ? '}' : ''}

var passbackTagHtml = \`${pbtag}\`;

function isVisible(el) {
    if (el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        return (elemTop >= 0) && (elemBottom <= window.innerHeight);
    } else {
        return false;
    }
}

window.onload = () => {
    let el = document.getElementById('${adUnitId}');
    if (isVisible(el) === true && bidderWon === true) {
        if (window.sessionStorage.getItem('bidWonData_${adUnitId}')) {
            sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}').replace('click', 'show'));
            window.onscroll = undefined;
        }
    }
}

window.onscroll = () => {
    let el = document.getElementById('${adUnitId}');
    if (isVisible(el) === true && bidderWon === true) {
        if (window.sessionStorage.getItem('bidWonData_${adUnitId}')) {
            sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}').replace('click', 'show'));
            window.onscroll = undefined;
            window.onload = undefined;
        }
    }
}

${logo}

</script>

<iframe id='${adUnitId}'
tabindex="-1"
frameborder="0"
scrolling="no"
marginheight="0"
marginwidth="0"
topmargin="0"
leftmargin="0"
allowtransparency="true"
width="${width}"
height="${height}"
>
</iframe>

<div id='${hash}' style='height:${sizes[1]}px; width:${sizes[0]}px; display: none'>
    <script>
    googletag.cmd.push(function() { googletag.display('${hash}'); });
    </script>
</div>
</body>
</html>`;
        return beautify(config, {"preserve_newlines": false});
    } catch (e) {
        console.log(e);
    }
};
