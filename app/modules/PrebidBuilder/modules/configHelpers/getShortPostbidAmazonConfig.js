module.exports.getShortPostbidAmazonConfig = async (
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
    sendAnalyticsHelper,
    logo,
    protectedMediaCode
) => {
    console.log('short amazon tag');
    const searchRegExp = /[^a-zA-Z\d\s]/g;
    try {
        let unique = Math.random().toString(36).substr(2, 6);
        return `var main_func_${unique} = function (event) {
        ${sendAnalyticsHelper}
        sendAnalytics("call");
        ${mailRuFunc ? mailRuFunc : ''}
        var {pbjs} = event.currentTarget;
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
        
var bidTimeout = ${PREBID_TIMEOUT};

var apstagSlots = [{
    slotID: '${hash}',
    sizes: [[${sizes[0]}, ${sizes[1]}]],
    slotName: '${slotName}'
}];

var sizes = [${sizes[0]}, ${sizes[1]}];
var floor = ${floorPrice};
var bidderWon_${adUnitId.replace(searchRegExp, '_')} = false;
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

function showPassback() {
    var iframe = document.getElementById('${adUnitId}');
    var iframeDoc = iframe.contentWindow.document;
    if (iframeDoc && iframeDoc.body && iframeDoc.body.length) {
        clearPassback();
    }
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

${mailRuFunc ? 'var startPrebidAuction = function () {' : ''}
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
                pbjs.que.push(function() {
                ${analyticsTemplate}
                ${pbjsConfig}
                pbjs.addAdUnits(adUnits);
                pbjs.requestBids({
                    timeout: bidTimeout,
                    bidsBackHandler: function() {
                        var iframe = document.getElementById('${adUnitId}');
                        if (iframe !== null) {
                            showAd(iframe);
                        } else {
                            var interval = setInterval(() => {
                            var iframe = document.getElementById('${adUnitId}');
                            if (iframe !== null) {
                                showAd(iframe);
                                clearInterval(interval);
                            } else return;
                        }, 50)
                    }
                        }
                    });
                });
            } else {
                var iframe = document.getElementById('${adUnitId}');
                if(iframe && iframe.parentNode) {
                    iframe.parentNode.removeChild(iframe);
                }
                    googletag.cmd.push(function() {
                    googletag.defineSlot('${slotName}', [[${sizes[0]}, ${sizes[1]}]], '${hash}').addService(googletag.pubads());
                    googletag.pubads().disableInitialLoad();
                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                    });
            }
        });
    }
    var showAd = function (iframe) {
        var iframeDoc = iframe.contentWindow.document;
        var adServerTargeting = pbjs.getAdserverTargetingForAdUnitCode('${adUnitId}');
        if (adServerTargeting && adServerTargeting['hb_adid']) {  // HB WINS!
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
        
    requestBids(apstagSlots, adUnits, bidTimeout);
    window.setTimeout(function() {
        sendAdserverRequest();
    }, bidTimeout);
};
fetchHeaderBids(apstagSlots, adUnits, bidTimeout);
${mailRuFunc ? '}' : ''}

var passbackTagHtml = \`${pbtag}\`;

if(!document.body) {
    try {
        var body = document.createElement('body');
        document.appendChild(body);
    } catch (e) {}
}

var el = document.getElementById('wmg-script-${adUnitId}');
var adframe = document.createElement("iframe");
adframe.id = "${adUnitId}";
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
    let frameContent, setFrameStyle;
    if (adframe.contentWindow && adframe.contentWindow.document) {
        frameContent = adframe.contentWindow.document; 
        frameContent.head.innerHTML = frameContent.head.innerHTML + '<style>html, body{margin: 0}</style>';
    } else {
        setFrameStyle = setInterval(() => {
                if (adframe.contentWindow && adframe.contentWindow.document) {
                    frameContent = adframe.contentWindow.document;
                    frameContent.head.innerHTML = frameContent.head.innerHTML + '<style>html, body{margin: 0}</style>';
                    clearInterval(setFrameStyle);
                } else return;
        }, 50)
    }
};
var adblock = document.createElement("div");
adblock.id = '${hash}';
adblock.style.width = "${sizes[0]}px";
adblock.style.height = "${sizes[1]}px";
adblock.style.margin = "0";
adblock.style.display = "none";
adblock.innerHTML = "<script>googletag.cmd.push(function() { googletag.display('${hash}'); });</script>";
    if (document.head.querySelector('#wmg-script-${adUnitId.replace(/\./g, '\\\\.')}') !== null) {
        let scriptLocation = document.getElementById('wmg-script-${adUnitId}');
        if (scriptLocation && scriptLocation.dataset && scriptLocation.dataset.divId) {
            setTimeout(() => {
                let targetDiv = document.getElementById(scriptLocation.dataset.divId);
                targetDiv.append(adframe);
                targetDiv.append(adblock);
            }, 1000);
        } else {
            document.body
            ? setTimeout(() => {document.body.append(adframe); document.body.append(adblock);}, 0)
            : setTimeout(() => {document.body.append(adframe); document.body.append(adblock);}, 1000);
        }
    } else {
        el.parentNode.append(adframe);
        el.parentNode.append(adblock);
    }
    function isVisible(el) {
        if (el) {
            const rect = el.getBoundingClientRect();
            const elemTop = rect.top;
            const elemBottom = rect.bottom;
            return (elemTop >= 0) && (elemBottom <= window.innerHeight);
        } else return false;
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
            console.log(window.sessionStorage.getItem('bidWonData_${adUnitId}'))
            sendAnalytics("show", window.sessionStorage.getItem('bidWonData_${adUnitId}').replace('click', 'show'));
        }
    };
    setInterval(() => {
        let iframe = document.getElementById('${adUnitId}');
        if (iframe) {
            let body = iframe.contentWindow.document.body;
            body.style.margin = "0";
        }
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
