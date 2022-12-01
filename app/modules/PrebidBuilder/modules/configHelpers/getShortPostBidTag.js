module.exports.getShortPostBidTag = async (
    pbtag,
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
    sendAnalyticsHelper,
    logo,
    protectedMediaCode
) => {
    console.log('short tag');
    const searchRegExp = /[^a-zA-Z\d\s]/g;
    try {
        let unique = Math.random().toString(36).substr(2, 6);
        return `var main_func_${unique} = function (event) {
        ${sendAnalyticsHelper}
        sendAnalytics("call");
        var {pbjs} = event.currentTarget;
        var sizes = [${sizes}];
        var bidderWon_${adUnitId.replace(searchRegExp, '_')} = false;
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
            if (iframeDoc && iframeDoc.body && iframeDoc.innerHTML && iframeDoc.innerHTML.length > 0) return; // check if passback already rendered
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
        pbjs.addAdUnits(adUnits);
        pbjs.requestBids({
            timeout: PREBID_TIMEOUT,
            bidsBackHandler: function() {
                var iframe = document.getElementById('${adUnitId}');
                if (iframe !== null) {
                    showAd(iframe);
                } else {
                    var interval = setInterval(() => {
                        var iframe = document.getElementById('${adUnitId}');
                        if (iframe !== null) {
                            clearInterval(interval);
                        } else return;
                        showAd(iframe);
                    }, 50)
                }
            }
        });
    });
${mailRuFunc ? '}' : ''}
    var passbackTagHtml = \`${pbtag}\`;
    
    function showAd(iframe) {
        var iframeDoc = iframe.contentWindow.document;
        var adServerTargeting = pbjs.getAdserverTargetingForAdUnitCode('${adUnitId}');
        if (adServerTargeting && adServerTargeting['hb_adid']) {
            clearPassback();
            pbjs.renderAd(iframeDoc, adServerTargeting['hb_adid']);
            bidderWon_${adUnitId.replace(searchRegExp, '_')} = true;
            var monitor = setInterval(function () {
                var elem = document.activeElement;
                if (elem && elem.tagName === 'IFRAME' && elem.id === '${adUnitId}') {
                    sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}'));
                    clearInterval(monitor);
                }
            }, 100);
        } else { 
            showPassback();
        }
    }
       
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
    
    function showOnScroll_${unique} (event) {
        let el = document.getElementById('${adUnitId}');
        if (isVisible(el) === true && bidderWon_${adUnitId.replace(searchRegExp, '_')} === true && window.sessionStorage.getItem('bidWonData_${adUnitId}') !== null) {
            sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}').replace('click', 'show'));
            window.removeEventListener('unload', showOnUnload_${unique});
            document.removeEventListener('scroll', showOnScroll_${unique});
        }
    };

    function showOnUnload_${unique} (event) {
        let el = document.getElementById('${adUnitId}');
        if (isVisible(el) === true && bidderWon_${adUnitId.replace(searchRegExp, '_')} === true && window.sessionStorage.getItem('bidWonData_${adUnitId}') !== null) {
            sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}').replace('click', 'show'));
        }
    };

    if (!document.body) {
        try {
            var body = document.createElement('body');
            document.appendChild(body);
        } catch (e) {}
    }

    var el = document.getElementById('wmg-script-${adUnitId}');
    var adframe = document.createElement("iframe");
    adframe.id = adUnits[0].code;
    adframe.style.width = "${sizes[0]}px";
    adframe.style.height = "${sizes[1]}px";
    adframe.style.border = "none";
    adframe.frameborder = "0";
    adframe.scrolling = "no";
    adframe.marginheight = "0";
    adframe.marginwidth = "0";
    adframe.topmargin = "0";
    adframe.leftmargin = "0";
    adframe.allowtransparency = "true";
    adframe.tabindex="-1";
    adframe.onload = function() {
        let frameContent = adframe.contentWindow.document;
        frameContent.head.innerHTML = frameContent.head.innerHTML + '<style>html, body{margin: 0}</style>';
    };

    if (document.head.querySelector('#wmg-script-${adUnitId
            .replace(/\./g, '\\\\.')
            .replace(/\(/g, '\\\\(')
            .replace(/\)/g, '\\\\)')}') !== null) {
        let scriptLocation = document.getElementById('wmg-script-${adUnitId}');
        if (scriptLocation && scriptLocation.dataset && scriptLocation.dataset.divId) {
            setTimeout(() => {
                let targetDiv = document.getElementById(scriptLocation.dataset.divId);
                targetDiv.append(adframe);
            }, 1000);
        } else {
            document.body
            ? document.body.append(adframe)
            : setTimeout(() => {document.body.append(adframe)}, 1000);
        }

    } else {
        el.parentNode.append(adframe);
    }
    setInterval(() => {
        let iframe = document.getElementById('${adUnitId}');
        let body = iframe.contentWindow.document.body;
        body.style.margin = "0";
    }, 1000)
    window.removeEventListener('load', main_func_${unique});
    document.addEventListener('scroll', showOnScroll_${unique});
    window.addEventListener('unload', showOnUnload_${unique});
    ${logo}

    window.addEventListener("message", (e) => {
        if (e.data && e.data.wmg && e.data.ad === true && e.data.id) {
            if (adframe && adframe.contentWindow.document.getElementById(e.data.id)) {
                adframe.style.display = "none";
            }
        }
    })
}
window.addEventListener('load', main_func_${unique});`;
    } catch (e) {
        console.log(e);
    }
};
