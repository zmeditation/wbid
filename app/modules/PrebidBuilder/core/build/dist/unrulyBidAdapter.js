pbjsChunk([108],{790:function(e,r,n){e.exports=n(791)},791:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"adapter",(function(){return j}));var t=n(0),i=n(13),o=n(1),d=n(2),u=["bids","bidderRequestId","auctionId","bidderCode"];function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=function(e,r,n){n.bids,n.bidderRequestId,n.auctionId,n.bidderCode;var i=f(n,u),o=n.bids.length-r.length,d={};r.forEach((function(e){var r=e.params.siteId;!function(e){Object.keys(e.mediaTypes).forEach((function(r){var n;n="function"==typeof e.getFloor?e.getFloor({currency:"USD",mediaType:r,size:"*"}).floor||0:e.params.floor||0,e.mediaTypes[r].floor=n}))}(e),function(e){var r=Object(t.deepAccess)(e,"mediaTypes.banner");if(r){var n={},i=[];r.sizes.forEach((function(e){n[e.toString()]||(n[e.toString()]=!0,i.push(e))})),r.sizes=i}}(e),d[r]=d[r]||[],d[r].push(e)}));var a=[];return Object.keys(d).forEach((function(r){var n={bidderRequest:p({},s({bids:d[r],invalidBidsCount:o},i))};a.push(p({},s({data:n},e)))})),a},b=function(e){var r=[];return e.forEach((function(e){var n,i=Object(t.deepAccess)(e,"meta.mediaType");if(i&&"banner"===i.toLowerCase())e.mediaType=d.b,n=y(e);else if(i&&"video"===i.toLowerCase()){var o=Object(t.deepAccess)(e,"meta.videoContext");e.mediaType=d.d,"instream"===o?n=v(e):"outstream"===o&&(n=O(e))}n&&r.push(n)})),r},y=function(e){if(e.ad)return e;Object(t.logError)(new Error("UnrulyBidAdapter: Missing ad config."))},v=function(e){if(e.vastUrl||e.vastXml)return e;Object(t.logError)(new Error("UnrulyBidAdapter: Missing vastUrl or vastXml config."))},O=function(e){var r=!!Object(t.deepAccess)(e,"ext.renderer.config"),n=!!Object(t.deepAccess)(e,"ext.renderer.config.siteId");if(r){if(n){var o=Object(t.deepAccess)(e,"ext.renderer");!function(e,r){if(!e.config)throw new Error("UnrulyBidAdapter: Missing renderer config.");if(!e.config.siteId)throw new Error("UnrulyBidAdapter: Missing renderer siteId.");parent.window.unruly=parent.window.unruly||{},parent.window.unruly.native=parent.window.unruly.native||{},parent.window.unruly.native.siteId=parent.window.unruly.native.siteId||e.config.siteId,parent.window.unruly.native.adSlotId=r,parent.window.unruly.native.supplyMode="prebid"}(o,e.requestId),parent.window.unruly.native.prebid=parent.window.unruly.native.prebid||{},parent.window.unruly.native.prebid.uq=parent.window.unruly.native.prebid.uq||[];var d=i.a.install(p({},o)),u=p({},e,{renderer:d,adUnitCode:Object(t.deepAccess)(e,"ext.adUnitCode")});return d.setRender((function(){var e;e=u,parent.window.unruly.native.prebid.uq.push(["render",e])})),e.renderer=e.renderer||d,e}Object(t.logError)(new Error("UnrulyBidAdapter: Missing renderer siteId."))}else Object(t.logError)(new Error("UnrulyBidAdapter: Missing renderer config."))},w=function(e){if(!e.context)return!1;return-1!==["outstream","instream"].indexOf(e.context)},g=function(e){return e.sizes},j={code:"unruly",supportedMediaTypes:[d.d,d.b],isBidRequestValid:function(e){return!!(Object(t.deepAccess)(e,"params.siteId")&&function(e){var r=Object(t.deepAccess)(e,"mediaTypes.video"),n=Object(t.deepAccess)(e,"mediaTypes.banner"),i=!(!r&&!n);return i&&r&&(i=w(r)),i&&n&&(i=g(n)),i}(e))},buildRequests:function(e,r){var n="https://targeting.unrulymedia.com/unruly_prebid";e[0]&&(n=Object(t.deepAccess)(e[0],"params.endpoint")||n);return l({url:n,method:"POST",options:{contentType:"application/json"}},e,r)},interpretResponse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.body,n=[],t=!r||!r.bids;return t?n:b(r.bids)}};Object(o.registerBidder)(j),window.pbjs.installedModules.push("unrulyBidAdapter")}},[790]);