module.exports.getShortPostBidTagDev = async (
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
    divId,
    adExId
) => {
    console.log('dev short tag');
    const searchRegExp = /[^a-zA-Z\d\s]/g;
    try {
        let unique = Math.random().toString(36).substr(2, 6);
        return `var main_func_${unique} = function (event) {
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
            console.log('Passback loaded'); 
            var iframe = document.getElementById('${adUnitId}');
            var iframeDoc = iframe.contentWindow.document;
            iframe.width = sizes[0];
            iframe.height = sizes[1];
            if (iframeDoc && iframeDoc.body && iframeDoc.body.innerHTML && iframeDoc.body.innerHTML.length > 0) {
                clearPassback();
            }; 
            iframe.onload = function() {
                let frameContent = iframe.contentWindow.document;
                frameContent.head.innerHTML = frameContent.head.innerHTML + '<style>html, body{margin: 0}</style>';
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
        showPassback();
        var iframeDoc = iframe.contentWindow.document;
        var adServerTargeting = pbjs.getAdserverTargetingForAdUnitCode('${adUnitId}');
        function isEmpty (ev) { return !ev.isEmpty };
        function callAdx () {
            console.log('Object of results auction', adServerTargeting);
            // console.log(googletag);
            
    }
            var listenerAdx = function(event) {
            console.log(event);
            console.log('Slot has been rendered:');
            console.log('is adx? -', isEmpty(event));
            console.log('Targeting', event.slot.getTargetingMap());
            console.log('Ad unit', event.slot.getSlotId().getAdUnitPath());
            if (!isEmpty(event)) {
                showPassback();
            } else {
            var br = document.getElementById('${adUnitId}');
            br !== null ? br.remove() : '';
            }
        };
         googletag.cmd.push(function() {
         console.log('code updated 05.02.2021 17:06');
         googletag.pubads().addEventListener('slotOnload', function(event) {
            var slot = event.slot;
            console.log('Creative iframe for slot', slot.getSlotElementId(), 'has loaded.');
            showPassback();
        });
                googletag.pubads().addEventListener('slotRenderEnded', listenerAdx);
                googletag.pubads().refresh();
                console.log('/112081842/${adExId}', [${sizes}], '${divId}');
               // googletag.pubads().display('/112081842/${adExId}', [${sizes}], '${divId}');
        });
            if (adServerTargeting && adServerTargeting['hb_adid']) {
            clearPassback();
            console.log('Prebid.js loaded');
            pbjs.renderAd(iframeDoc, adServerTargeting['hb_adid']);
            bidderWon_${adUnitId.replace(searchRegExp, '_')} = true;
            var monitor = setInterval(function () {
                var elem = document.activeElement;
                if (elem && elem.tagName === 'IFRAME' && elem.id === '${adUnitId}') {
                    let queryString = window.sessionStorage.getItem('bidWonData_${adUnitId}');
                    if (navigator.sendBeacon) {
                        navigator.sendBeacon('https://analytics.wmgroup.us/analytic/collection', queryString);
                    } else {
                        let xhr = new XMLHttpRequest();
                        xhr.open('POST', 'https://analytics.wmgroup.us/analytic/collection');
                        xhr.send(queryString);
                    }
                    clearInterval(monitor);
                }
            }, 100);
        } else { 
            console.log('No HB winner, start ADX')
            callAdx();
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
        if (isVisible(el) === true && bidderWon_${adUnitId.replace(searchRegExp, '_')} === true) {
            let queryString = window.sessionStorage.getItem('bidWonData_${adUnitId}');
            queryString = queryString.replace('click', 'show');
            if (navigator.sendBeacon) {
                let result = navigator.sendBeacon('https://analytics.wmgroup.us/analytic/collection', queryString);
            } else {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://analytics.wmgroup.us/analytic/collection');
                xhr.send(queryString);
            }
            window.removeEventListener('unload', showOnUnload_${unique});
            document.removeEventListener('scroll', showOnScroll_${unique});
        }
    };
     
    function showOnUnload_${unique} (event) {
        let el = document.getElementById('${adUnitId}');
        if (isVisible(el) === true && bidderWon_${adUnitId.replace(searchRegExp, '_')} === true) {
            let queryString = window.sessionStorage.getItem('bidWonData_${adUnitId}');
            queryString = queryString.replace('click', 'show');
            if (navigator.sendBeacon) {
                navigator.sendBeacon('https://analytics.wmgroup.us/analytic/collection', queryString);
            } else {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://analytics.wmgroup.us/analytic/collection');
                xhr.send(queryString);
            }
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
        console.log('iframe loaded');
        let frameContent = adframe.contentWindow.document;
        console.log(frameContent);
        // let adframe_body = frameContent.getElementByTagName('body');
        // console.log(adframe_body);
        // adframe_body.style.margin = '0';
        frameContent.head.innerHTML = frameContent.head.innerHTML + '<style>html, body{margin: 0}</style>';
        frameContent.body.style.margin = '0';
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
    window.removeEventListener('load', main_func_${unique});
    document.addEventListener('scroll', showOnScroll_${unique});
    window.addEventListener('unload', showOnUnload_${unique});
}
window.addEventListener('load', main_func_${unique});`;
    } catch (e) {
        console.log(e);
    }
};
