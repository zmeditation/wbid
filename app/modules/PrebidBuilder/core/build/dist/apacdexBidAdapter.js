pbjsChunk([358],{161:function(e,r,t){e.exports=t(162)},162:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return p})),r.getDomain=l,r.validateGeoObject=f;var a=t(0),n=t(3),i=t(1),s="apacdex",c={apacdex:{ENDPOINT:"https://useast.quantumdex.io/auction/apacdex",USERSYNC:"https://sync.quantumdex.io/usersync/apacdex"},quantumdex:{ENDPOINT:"https://useast.quantumdex.io/auction/quantumdex",USERSYNC:"https://sync.quantumdex.io/usersync/quantumdex"},valueimpression:{ENDPOINT:"https://useast.quantumdex.io/auction/adapter",USERSYNC:"https://sync.quantumdex.io/usersync/adapter"}},o=c.apacdex,d={},u={},p={code:s,supportedMediaTypes:["banner","video"],aliases:["quantumdex","valueimpression"],isBidRequestValid:function(e){if(!e.params)return!1;if(!e.params.siteId&&!e.params.placementId)return!1;if(!Object(a.deepAccess)(e,"mediaTypes.banner")&&!Object(a.deepAccess)(e,"mediaTypes.video"))return!1;if(Object(a.deepAccess)(e,"mediaTypes.banner")){if(!Object(a.deepAccess)(e,"mediaTypes.banner.sizes"))return!1}else if(Object(a.deepAccess)(e,"mediaTypes.video")&&!Object(a.deepAccess)(e,"mediaTypes.video.playerSize"))return!1;return!0},buildRequests:function(e,r){var t,i,s,p,m=[];o=c[e[0].bidder],p=n.b.getConfig("debug"),e.forEach((function(e){e.schain&&(t=t||e.schain),e.userIdAsEids&&(i=i||e.userIdAsEids),e.params&&e.params.geo&&f(e.params.geo)&&(s=e.params.geo);var r=0;if(null!=d[e.adUnitCode])r=d[e.adUnitCode];else{var n=function(e){if(e.length<=0)return!1;for(var r=0,t=0,a=0;a<e.length;a++){var n=e[a][0]*e[a][1];n>=r&&(r=n,t=a)}return e[t][0]+"x"+e[t][1]}(e.sizes);n&&(null!=u[n]?(u[n]++,r=u[n]):(u[n]=0,r=0))}d[e.adUnitCode]=r,e.targetKey=r;var c=function(e){if(!Object(a.isFn)(e.getFloor))return e.params.floorPrice?e.params.floorPrice:null;var r=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if(Object(a.isPlainObject)(r)&&!isNaN(r.floor)&&"USD"===r.currency)return r.floor;return null}(e);c&&(e.bidFloor=c),m.push(JSON.parse(JSON.stringify(e)))}));var g={};g.tmax=r.timeout,p&&(g.test=1),g.device={},g.device.ua=navigator.userAgent,g.device.height=window.screen.width,g.device.width=window.screen.height,g.device.dnt=function(){try{if(window.top.doNotTrack&&"1"==window.top.doNotTrack)return 1}catch(e){}try{if(navigator.doNotTrack&&("yes"==navigator.doNotTrack||"1"==navigator.doNotTrack))return 1}catch(e){}try{if(navigator.msDoNotTrack&&"1"==navigator.msDoNotTrack)return 1}catch(e){}return 0}(),g.device.language=navigator.language;var b=function(e){if(n.b.getConfig("pageUrl"))return n.b.getConfig("pageUrl");if(Object(a.deepAccess)(e,"refererInfo.referer"))return e.refererInfo.referer;try{return window.top.location.href}catch(e){return window.location.href}}(r);return g.site={},g.site.page=b,g.site.referrer=function(e){if(e&&Object(a.deepAccess)(e,"refererInfo.referer"))return e.refererInfo.referer;try{return window.top.document.referrer}catch(e){return window.document.referrer}}(r),g.site.hostname=l(b),r&&r.gdprConsent&&(g.gdpr={},g.gdpr.gdprApplies=!!r.gdprConsent.gdprApplies,r.gdprConsent.consentString&&(g.gdpr.consentString=r.gdprConsent.consentString)),r&&r.uspConsent&&(g.us_privacy=r.uspConsent),t&&(g.schain=t),i&&(g.eids=i),s&&(g.geo=s),g.bids=m.map((function(e){return{params:e.params,mediaTypes:e.mediaTypes,transactionId:e.transactionId,sizes:e.sizes,bidId:e.bidId,bidFloor:e.bidFloor}})),{method:"POST",url:o.ENDPOINT,data:g,withCredentials:!0,bidderRequests:m}},interpretResponse:function(e,r){var t=e.body;if(!t||!Object(a.isPlainObject)(t))return[];var n=t.bids;if(!n||!Object(a.isArray)(n))return[];var i=[];return n.forEach((function(e){var r=e.dealId||"",t={requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,mediaType:e.mediaType};r.length>0&&(t.dealId=r),e.vastXml?t.vastXml=Object(a.replaceAuctionPrice)(e.vastXml,e.cpm):t.ad=Object(a.replaceAuctionPrice)(e.ad,e.cpm),t.meta={},e.meta&&e.meta.advertiserDomains&&Object(a.isArray)(e.meta.advertiserDomains)&&(t.meta.advertiserDomains=e.meta.advertiserDomains),i.push(t)})),i},getUserSyncs:function(e,r){var t=[];try{e.iframeEnabled&&t.push({type:"iframe",url:o.USERSYNC}),r.length>0&&r[0].body&&r[0].body.pixel&&r[0].body.pixel.forEach((function(r){"image"===r.type&&e.pixelEnabled&&t.push({type:"image",url:r.url}),"iframe"===r.type&&e.iframeEnabled&&t.push({type:"iframe",url:r.url})}))}catch(e){}return t}};function l(e){return n.b.getConfig("publisherDomain")?n.b.getConfig("publisherDomain").replace("http://","").replace("https://","").replace("www.","").split(/[/?#:]/)[0]:e?e.replace("http://","").replace("https://","").replace("www.","").split(/[/?#:]/)[0]:e}function f(e){return!!Object(a.isPlainObject)(e)&&(!!e.lat&&(!!e.lon&&!!e.accuracy))}Object(i.registerBidder)(p),window.pbjs.installedModules.push("apacdexBidAdapter")}},[161]);