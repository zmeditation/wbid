pbjsChunk([392],{72:function(e,t,r){e.exports=r(73)},73:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return f}));var a=r(0),n=r(1),o=r(2),i=r(3);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=["video/mp4","video/webm","application/x-shockwave-flash","application/javascript"],d=[2,3,5,6],p=[1,2];function u(e){var t,r={id:e.bidId,tagid:e.adUnitCode},n=Object(a.deepAccess)(e,"mediaTypes.banner"),i=Object(a.deepAccess)(e,"mediaTypes.video");if(n){var u=m(n.sizes);r.banner={format:Object(a.parseSizesInput)(u)},t=o.b}else if(i){var l=m(i.playerSize)[0];r.video={w:l[0],h:l[1],mimes:i.mimes||s,protocols:i.protocols||d,api:i.api||p},t=o.d}var b=function(e,t,r){var a,n=1===r.length?r[0]:"*";if("function"==typeof e.getFloor){var o=e.getFloor({currency:"USD",mediaType:t,size:n});"object"!==c(o)||"USD"!==o.currency||isNaN(parseFloat(o.floor))||(a=parseFloat(o.floor))}return a}(e,t,"*");return b&&(r.bidfloor=b),r}function m(e){return 2!==e.length||Object(a.isArray)(e[0])?e:[e]}function l(e){var t=Object(a.parseUrl)(e.referer),r={page:"".concat(t.protocol,"://").concat(t.hostname).concat(t.pathname),secure:~~("https"===t.protocol)};self===top&&document.referrer&&(r.ref=document.referrer);var n=document.getElementsByTagName("meta").keywords;return n&&n.content&&(r.keywords=n.content),r}function b(e){var t={requestId:e.impid,bidderCode:f.code,cpm:e.bid,creativeId:e.crid,currency:"USD",ttl:720,netRevenue:!0};return e.w&&(t.width=e.w),e.h&&(t.height=e.h),e.tag?(t.ad=e.tag,t.mediaType=o.b):e.vast_url&&(t.vastUrl=e.vast_url,t.mediaType=o.d),function(e,t){Object(a.isStr)(t.agencyName)&&Object(a.deepSetValue)(e,"meta.agencyName",t.agencyName);Object(a.isNumber)(t.advertiserId)&&Object(a.deepSetValue)(e,"meta.advertiserId",t.advertiserId);Object(a.isStr)(t.advertiserName)&&Object(a.deepSetValue)(e,"meta.advertiserName",t.advertiserName);Object(a.isArray)(t.advertiserDomains)&&Object(a.deepSetValue)(e,"meta.advertiserDomains",t.advertiserDomains);Object(a.isStr)(t.primaryCatId)&&Object(a.deepSetValue)(e,"meta.primaryCatId",t.primaryCatId);Object(a.isArray)(t.secondaryCatIds)&&Object(a.deepSetValue)(e,"meta.secondaryCatIds",t.secondaryCatIds)}(t,e),t}var f={code:"adkernelAdn",gvlid:14,supportedMediaTypes:[o.b,o.d],aliases:["engagesimply"],isBidRequestValid:function(e){return"params"in e&&(void 0===e.params.host||"string"==typeof e.params.host)&&"number"==typeof e.params.pubId&&"mediaTypes"in e&&("banner"in e.mediaTypes||"video"in e.mediaTypes)},buildRequests:function(e,t){var r=e.map(u).reduce((function(t,r,a){var n=e[a],o=n.params.pubId,i=n.params.host||"tag.adkernel.com";return t[i]=t[i]||{},t[i][o]=t[i][o]||[],t[i][o].push(r),t}),{}),n=[];return Object.keys(r).forEach((function(e){Object.keys(r[e]).forEach((function(o){var c,s=function(e,t){var r=t.auctionId,n=t.gdprConsent,o=t.uspConsent,c={id:r,tid:t.transactionId,site:l(t.refererInfo),imp:e};return n&&(void 0!==n.gdprApplies&&Object(a.deepSetValue)(c,"user.gdpr",~~n.gdprApplies),void 0!==n.consentString&&Object(a.deepSetValue)(c,"user.consent",n.consentString)),o&&Object(a.deepSetValue)(c,"user.us_privacy",o),i.b.getConfig("coppa")&&Object(a.deepSetValue)(c,"user.coppa",1),c}(r[e][o],t);n.push({method:"POST",url:"https://".concat(e,"/tag?account=").concat(o,"&pb=1").concat((c=t.refererInfo,-1!==c.referer.indexOf("adk_debug=true")?"&debug=1":"")),data:JSON.stringify(s)})}))})),n},interpretResponse:function(e){var t=e.body;return t.tags?(t.debug&&Object(a.logInfo)("ADKERNEL DEBUG:\n".concat(t.debug)),t.tags.map(b)):[]},getUserSyncs:function(e,t){return t&&0!==t.length?e.iframeEnabled?y(t,"syncpages","iframe"):e.pixelEnabled?y(t,"syncpixels","image"):[]:[]}};function y(e,t,r){return e.filter((function(e){return e.body&&e.body[t]})).map((function(e){return e.body[t]})).reduce((function(e,t){return e.concat(t)}),[]).map((function(e){return{type:r,url:e}}))}Object(n.registerBidder)(f),window.pbjs.installedModules.push("adkernelAdnBidAdapter")}},[72]);