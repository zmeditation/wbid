const beautify = require('js-beautify').html;

module.exports.getFullPostbidAmazonConfigDev = async (
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
    bidderSpecificConfig
) => {
    console.log('long amazon tag');
    try {
        let width = sizes[0], height = sizes[1];
        let config = `<head>
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
            iframeDoc.write('<head></head><body>' + passbackTagHtml + '</body>');
        }

        function clearPassback() {
            var iframe = document.getElementById('${adUnitId}');
            var iframeDoc = iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write("");
            iframeDoc.close();
        }    
            ${mailRuFunc ? mailRuFunc : ''}
            ${mailRuFunc ? 'startPrebidAuction = function () {' : ''}
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
                                    let queryString = window.sessionStorage.getItem('bidWonData_${adUnitId}');
                                    let xhr = new XMLHttpRequest();
                                    xhr.open('POST', 'https://analytics.wmgroup.us/analytic/collection');
                                    xhr.send(queryString);
                                    clearInterval(monitor);
                                }
                            }, 100);
                            window.onscroll();
                        } else {

                                }
                            }
                        });
                    });
            ${mailRuFunc ? '}' : ''}
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
var passbackTagHtml = \`${pbtag}\`;

function isVisible(el) {
    if (el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        return (elemTop >= 0) && (elemBottom <= window.innerHeight);
    } else return false;
}

window.onload = () => {
    let el = document.getElementById('${adUnitId}');
    if (isVisible(el) === true && bidderWon === true) {
        let queryString = window.sessionStorage.getItem('bidWonData_${adUnitId}');
        queryString = queryString.replace('click', 'show');
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://analytics.wmgroup.us/analytic/collection');
        xhr.send(queryString);
        window.onscroll = undefined;
    }
}

window.onscroll = () => {
    let el = document.getElementById('${adUnitId}');
    if (isVisible(el) === true && bidderWon === true) {
        let queryString = window.sessionStorage.getItem('bidWonData_${adUnitId}');
        queryString = queryString.replace('click', 'show');
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://analytics.wmgroup.us/analytic/collection');
        xhr.send(queryString);
        window.onscroll = undefined;
        window.onload = undefined;
    }
}

</script>

<iframe  id='${adUnitId}'
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
</body>`;
        return beautify(config, {"preserve_newlines": false});
    } catch (e) {
        console.log(e);
    }
};
