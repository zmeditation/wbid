pbjsChunk([106],{799:function(e,i,t){e.exports=t(800)},800:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),t.d(i,"spec",(function(){return a}));var r=t(0),d=t(3),n=t(1),o=t(2),a={code:"vdoai",supportedMediaTypes:[o.b,o.d],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,i){return 0===e.length?[]:e.map((function(e){var t=Object(r.getAdUnitSizes)(e),d={placementId:e.params.placementId,sizes:t,bidId:e.bidId,referer:i.refererInfo.referer,id:e.auctionId,mediaType:e.mediaTypes.video?"video":"banner"};return e.params.bidFloor&&(d.bidFloor=e.params.bidFloor),{method:"POST",url:"https://prebid.vdo.ai/auction",data:d}}))},interpretResponse:function(e,i){var t=[],r=e.body,n=r.adid||0,o=r.width,a=r.height,u=r.price||0;r.rWidth=o,r.rHeight=a;var s=r.vdoCreative;if(0!==o&&0!==a&&0!==u&&0!==n){var c=r.cur||"USD",p={requestId:r.bidId,cpm:u,width:o,height:a,creativeId:n,currency:c,netRevenue:!0,ttl:d.b.getConfig("_bidderTimeout"),mediaType:r.mediaType};"video"==r.mediaType?p.vastXml=s:p.ad=s,r.adDomain&&(p.meta={advertiserDomains:r.adDomain}),t.push(p)}return t},getUserSyncs:function(e,i){var t=i[0]&&i[0].body&&i[0].body.cookiesync&&i[0].body.cookiesync.bidder_status;return e.iframeEnabled&&t&&t.length>0?t.map((function(e){return{url:e.usersync.url,type:"iframe"}})):[]},onTImeout:function(e){},onBidWon:function(e){},onSetTargeting:function(e){}};Object(n.registerBidder)(a),window.pbjs.installedModules.push("vdoaiBidAdapter")}},[799]);