pbjsChunk([222],{487:function(e,r,t){e.exports=t(488)},488:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return o}));var i=t(3),n=t(1),d=t(2),o={code:"loglylift",supportedMediaTypes:[d.c],isBidRequestValid:function(e){return!(!e.params||!e.params.adspotId)},buildRequests:function(e,r){for(var t=[],i=0,n=e.length;i<n;i++){var d={method:"POST",url:"https://bid.logly.co.jp/prebid/client/v1?adspot_id="+e[i].params.adspotId,data:JSON.stringify(s(e[i],r)),options:{},bidderRequest:r};t.push(d)}return t},interpretResponse:function(e,r){r.bidderRequest;e=e.body;var t=[];return!e||e.error||e.bids.forEach((function(e){t.push(e)})),t},getUserSyncs:function(e,r){var t=[];return e.iframeEnabled&&r.length>0&&t.push({type:"iframe",url:"https://sync.logly.co.jp/sync/sync.html"}),t}};function s(e,r){var t=i.b.getConfig("currency"),n=t&&t.adServerCurrency||"USD";return{auctionId:e.auctionId,bidderRequestId:e.bidderRequestId,transactionId:e.transactionId,adUnitCode:e.adUnitCode,bidId:e.bidId,mediaTypes:e.mediaTypes,params:e.params,prebidJsVersion:"6.10.0-pre",url:window.location.href,domain:i.b.getConfig("publisherDomain"),referer:r.refererInfo.referer,auctionStartTime:r.auctionStart,currency:n,timeout:i.b.getConfig("bidderTimeout")}}Object(n.registerBidder)(o),window.pbjs.installedModules.push("loglyliftBidAdapter")}},[487]);