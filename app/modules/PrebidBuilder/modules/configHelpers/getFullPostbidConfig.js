const beautify = require('js-beautify').html;

module.exports.getFullPostbidConfig = async (
    pbtag,
    cdnpath,
    width,
    height,
    sizes,
    floorPrice,
    PREBID_TIMEOUT,
    adUnitId,
    bids,
    bidPrices,
    pbjsConfig,
    mailRuFunc,
    analyticsTemplate,
    bidderSpecificConfig,
    sendAnalyticsHelper,
    logo,
    protectedMediaCode
) => {
    console.log('long tag');
    return beautify(`<!doctype html><html lang="en-us">
<head>
    <meta charset="utf-8" />
    <script async src="https://d3f4nuq5dskrej.cloudfront.net/js/wmg-logo-wbid.js"></script>
    <script async src="${cdnpath}"></script>
</head>

<body style="margin:0;padding:0">

<script>
    ${sendAnalyticsHelper}
    sendAnalytics("call");
    var bidderWon = false;
    var sizes = [${sizes}];
    var floor = ${floorPrice};
    var PREBID_TIMEOUT = ${PREBID_TIMEOUT};
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
${mailRuFunc ? 'var startPrebidAuction = function () {' : ''}
pbjs.que.push(function() {
    ${analyticsTemplate}
    ${pbjsConfig}
    ${bidderSpecificConfig}
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
        timeout: PREBID_TIMEOUT,
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
                window.onload();
            } else {
                showPassback();
            }
        }
    });
});
${mailRuFunc ? '}' : ''}

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
        sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}').replace('click', 'show'));
        window.onscroll = undefined;
    }
}

window.onscroll = () => {
    let el = document.getElementById('${adUnitId}');
    if (isVisible(el) === true && bidderWon === true) {
        sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}').replace('click', 'show'));
        window.onscroll = undefined;
        window.onload = undefined;
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

</body>

</html>`, {"preserve_newlines": false});
};
