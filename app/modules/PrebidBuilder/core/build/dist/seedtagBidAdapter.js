pbjsChunk([145],{690:function(e,t,n){e.exports=n(691)},691:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeoutUrl=h,n.d(t,"spec",(function(){return I}));var r,i=n(0),a=n(1),d=n(2);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={inImage:!0,inScreen:!0,inArticle:!0,banner:!0,video:!0},u=(o(r={},d.b,"display"),o(r,d.d,"video"),r),c="fixed",p="mobile",l="unknown",m=function(){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection||{};switch(e.type||e.effectiveType){case"wifi":case"ethernet":return c;case"cellular":case"wimax":return p;default:return/iPad|iPhone|iPod/.test(navigator.userAgent)||/android/i.test(navigator.userAgent)?l:c}};function b(e){return!!e.mediaTypes&&!!e.mediaTypes.video||!!e.params&&!!e.params.video}function v(e){return!!(e.publisherId&&e.adUnitId&&e.placement&&s[e.placement])}function f(e){var t=e.params,n=Object(i._map)(Object.keys(e.mediaTypes),(function(e){return u[e]})),r={id:e.bidId,transactionId:e.transactionId,sizes:e.sizes,supplyTypes:n,adUnitId:t.adUnitId,adUnitCode:e.adUnitCode,placement:t.placement,requestCount:e.bidderRequestsCount||1};return t.adPosition&&(r.adPosition=t.adPosition),b(e)&&(r.videoParams=y(e)),r}function y(e){var t=e.mediaTypes.video||{};t.playerSize&&(t.w=t.playerSize[0][0],t.h=t.playerSize[0][1]);var n=e.params&&e.params.video||{};return Object.keys(n).forEach((function(n){t[n]=e.params.video[n]})),t}function g(e){var t,n="display"===(t=e.mediaType)?d.b:"video"===t?d.d:t,r={requestId:e.bidId,cpm:e.price,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:!0,mediaType:n,ttl:e.ttl,nurl:e.nurl,meta:{advertiserDomains:e&&e.adomain&&e.adomain.length>0?e.adomain:[]}};return n===d.d?r.vastXml=e.content:r.ad=e.content,r}function h(e){var t="";if(Object(i.isArray)(e)&&e[0]&&Object(i.isArray)(e[0].params)&&e[0].params[0]){var n=e[0].params[0];t="?publisherToken="+n.publisherId+"&adUnitId="+n.adUnitId}return"https://s.seedtag.com/se/hb/timeout"+t}var I={code:"seedtag",gvlid:157,aliases:["st"],supportedMediaTypes:[d.b,d.d],isBidRequestValid:function(e){return b(e)?v(e.params)&&function(e){var t=y(e);return b(e)&&!!t.playerSize&&Object(i.isArray)(t.playerSize)&&t.playerSize.length>0}(e):v(e.params)},buildRequests:function(e,t){var n={url:t.refererInfo.referer,publisherToken:e[0].params.publisherId,cmp:!!t.gdprConsent,timeout:t.timeout,version:"6.10.0-pre",connectionType:m(),bidRequests:Object(i._map)(e,f)};if(n.cmp){var r=t.gdprConsent.gdprApplies;void 0!==r&&(n.ga=r),n.cd=t.gdprConsent.consentString}return{method:"POST",url:"https://s.seedtag.com/c/hb/bid",data:JSON.stringify(n)}},interpretResponse:function(e){var t=e.body;return t&&t.bids&&Object(i.isArray)(t.bids)?Object(i._map)(t.bids,(function(e){return g(e)})):[]},getUserSyncs:function(e,t){var n=t[0];if(e.iframeEnabled&&n){var r=n.body.cookieSync;return r?[{type:"iframe",url:r}]:[]}return[]},onTimeout:function(e){var t=h(e);Object(i.triggerPixel)(t)},onBidWon:function(e){e&&e.nurl&&Object(i.triggerPixel)(e.nurl)}};Object(a.registerBidder)(I),window.pbjs.installedModules.push("seedtagBidAdapter")}},[690]);