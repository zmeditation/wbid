pbjsChunk([90],{833:function(e,t,r){e.exports=r(834)},834:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return c}));var n=r(0),i=r(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={code:"welect",aliases:["wlt"],gvlid:282,supportedMediaTypes:["video"],isBidRequestValid:function(e){return"instream"===Object(n.deepAccess)(e,"mediaTypes.video.context")&&!!e.params.placementId},buildRequests:function(e){return e.map((function(e){var t=(Object(n.deepAccess)(e,"mediaTypes.video.playerSize")||e.sizes)[0],r=e.params.domain||"www.welect.de",i="https://".concat(r,"/api/v2/preflight/").concat(e.params.placementId),o=null;return e&&e.gdprConsent&&(o={gdpr_consent:{gdprApplies:e.gdprConsent.gdprApplies,tcString:e.gdprConsent.gdprConsent}}),{method:"POST",url:i,data:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:t[0],height:t[1],bid_id:e.bidId},o),options:{contentType:"application/json",withCredentials:!1,crossOrigin:!0}}}))},interpretResponse:function(e,t){var r=e.body;if("object"!==o(r)||!0!==r.available)return[];var n=[],i={requestId:r.bidResponse.requestId,cpm:r.bidResponse.cpm,width:r.bidResponse.width,height:r.bidResponse.height,creativeId:r.bidResponse.creativeId,currency:r.bidResponse.currency,netRevenue:r.bidResponse.netRevenue,ttl:r.bidResponse.ttl,ad:r.bidResponse.ad,vastUrl:r.bidResponse.vastUrl,meta:{advertiserDomains:r.bidResponse.meta.advertiserDomains}};return n.push(i),n}};Object(i.registerBidder)(c),window.pbjs.installedModules.push("welectBidAdapter")}},[833]);