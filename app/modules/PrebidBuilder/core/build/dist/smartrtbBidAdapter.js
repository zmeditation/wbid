pbjsChunk([121],{792:function(e,r,n){e.exports=n(793)},793:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return i});var o=n(0),u=n(3),t=n(1);var i={code:"smartrtb",supportedMediaTypes:["banner","video"],aliases:["smrtb"],isBidRequestValid:function(e){return null!==e.params.pubId&&null!==e.params.medId&&null!==e.params.zoneId},buildRequests:function(e,r){var n=r.refererInfo&&r.refererInfo.stack?r.refererInfo:[],t=u.b.getConfig("userSync")&&u.b.getConfig("userSync").syncsPerBidder?u.b.getConfig("userSync").syncsPerBidder:5,i={start_time:o.timestamp(),language:window.navigator.userLanguage||window.navigator.language,site:{domain:function(){if(!o.inIframe())return window.location.hostname;var e=window.document.location.ancestorOrigins;return e&&0<e.length?e[e.length-1]:void 0}(),iframe:!r.refererInfo.reachedTop,url:n&&0<n.length?[n.length-1]:null,https:"https:"===window.location.protocol,referrer:r.refererInfo.referer},imps:[],user_ids:e[0].userId,sync_limit:t};r&&r.gdprConsent&&(i.gdpr={applies:r.gdprConsent.gdprApplies,consent:r.gdprConsent.consentString});for(var s=0;s<e.length;s++){var d=e[s];i.imps.push({zone_id:d.params.zoneId,bid_id:d.bidId,imp_id:d.transactionId,sizes:d.sizes,force_bid:d.params.forceBid,media_types:o.deepAccess(d,"mediaTypes"),has_renderer:void 0!==d.renderer})}var a=e[0].params;return{method:"POST",url:a.endpoint?a.endpoint:"https://market-global.smrtb.com/json/publisher/prebid",data:JSON.stringify(i)}},interpretResponse:function(e){var r=[];if(!e||!e.body)return r;var n=e.body;if(!n.bids||!n.bids.length)return[];for(var t=0;t<e.body.bids.length;t++){var i=e.body.bids[t];r.push({requestId:i.bid_id,cpm:i.cpm,width:i.w,height:i.h,ad:i.html,vastUrl:i.vast_url,vastXml:i.vast_xml,mediaType:i.html?"banner":"video",ttl:120,creativeId:i.crid,dealId:i.deal_id,netRevenue:!0,currency:"USD"})}return r},getUserSyncs:function(e,r){var n=[];if(!r.length||!r[0].body)return n;var t=r[0].body.pixels;if(!t||!t.length)return n;for(var i=0;i<t.length;i++){var s=t[i];("iframe"===s.type&&e.iframeEnabled||"image"===s.type&&e.pixelEnabled)&&n.push(s)}return n}};Object(t.registerBidder)(i)}},[792]);