pbjsChunk([213],{509:function(e,t,r){e.exports=r(510)},510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return m}));var n=r(0),a=r(1),o=r(2),i=r(3);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p="https://endpoint2.mathilde-ads.com/pbjs";function l(e){if(!(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency&&e.meta))return!1;switch(e.mediaType){case o.b:return Boolean(e.width&&e.height&&e.ad);case o.d:return Boolean(e.vastUrl||e.vastXml);case o.c:return Boolean(e.native&&e.native.impressionTrackers&&e.native.impressionTrackers.length);default:return!1}}function u(e){var t=e.params,r=e.bidId,a=e.mediaTypes,i=e.schain||{},c={placementId:t.placementId,bidId:r,schain:i,bidfloor:function(e){if(!Object(n.isFn)(e.getFloor))return Object(n.deepAccess)(e,"params.bidfloor",0);try{return e.getFloor({currency:"USD",mediaType:"*",size:"*"}).floor}catch(e){return 0}}(e)};return a[o.b]&&(c.adFormat=o.b,c.sizes=a[o.b].sizes),a[o.d]&&(c.adFormat=o.d,c.playerSize=a[o.d].playerSize,c.minduration=a[o.d].minduration,c.maxduration=a[o.d].maxduration,c.mimes=a[o.d].mimes,c.protocols=a[o.d].protocols,c.startdelay=a[o.d].startdelay,c.placement=a[o.d].placement,c.skip=a[o.d].skip,c.skipafter=a[o.d].skipafter,c.minbitrate=a[o.d].minbitrate,c.maxbitrate=a[o.d].maxbitrate,c.delivery=a[o.d].delivery,c.playbackmethod=a[o.d].playbackmethod,c.api=a[o.d].api,c.linearity=a[o.d].linearity),a[o.c]&&(c.adFormat=o.c,c.native=a[o.c]),c}var m={code:"mathildeads",supportedMediaTypes:[o.b,o.d,o.c],isBidRequestValid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.params,r=e.bidId,n=e.mediaTypes,a=Boolean(r&&t&&t.placementId);return n[o.b]&&(a=a&&Boolean(n[o.b]&&n[o.b].sizes)),n[o.d]&&(a=a&&Boolean(n[o.d]&&n[o.d].playerSize)),n[o.c]&&(a=a&&Boolean(n[o.c])),a},buildRequests:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=0,o=0;try{var c=window.top;a=c.screen.width,o=c.screen.height,e=c.location}catch(t){Object(n.logMessage)(t),e=window.location}var d,s=r.refererInfo&&r.refererInfo.referer;try{d=s&&new URL(s)}catch(e){Object(n.logMessage)(e)}for(var l=d||e,m=navigator&&navigator.language?navigator.language.split("-")[0]:"",b=l.host,g=l.pathname,f="https:"===l.protocol?1:0,h=[],v={deviceWidth:a,deviceHeight:o,language:m,secure:f,host:b,page:g,placements:h,coppa:!0===i.b.getConfig("coppa")?1:0,ccpa:r.uspConsent||void 0,gdpr:r.gdprConsent||void 0,tmax:i.b.getConfig("bidderTimeout")},y=t.length,O=0;O<y;O++){var j=t[O];h.push(u(j))}return{method:"POST",url:p,data:v}},interpretResponse:function(e){for(var t=[],r=0;r<e.body.length;r++){var n=e.body[r];if(l(n)){var a=n.adomain&&n.adomain.length?n.adomain:[];n.meta=d(d({},n.meta),{},{advertiserDomains:a}),t.push(n)}}return t},getUserSyncs:function(e,t,r,n){var a=e.iframeEnabled?"iframe":"image",o="https://cs2.mathilde-ads.com"+"/".concat(a,"?pbjs=1");r&&r.consentString&&("boolean"==typeof r.gdprApplies?o+="&gdpr=".concat(Number(r.gdprApplies),"&gdpr_consent=").concat(r.consentString):o+="&gdpr=0&gdpr_consent=".concat(r.consentString)),n&&n.consentString&&(o+="&ccpa_consent=".concat(n.consentString));var c=i.b.getConfig("coppa")?1:0;return[{type:a,url:o+="&coppa=".concat(c)}]}};Object(a.registerBidder)(m),window.pbjs.installedModules.push("mathildeadsBidAdapter")}},[509]);