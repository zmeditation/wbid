pbjsChunk([224],{483:function(e,t,r){e.exports=r(484)},484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return g}));var n=r(0),a=r(1),i=r(2),o=r(3);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p="https://USeast2.logan.ai/pbjs";function l(e){if(!(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency&&e.meta))return!1;switch(e.mediaType){case i.b:return Boolean(e.width&&e.height&&e.ad);case i.d:return Boolean(e.vastXml||e.vastUrl);case i.c:return Boolean(e.native&&e.native.impressionTrackers);default:return!1}}function u(e){if(!Object(n.isFn)(e.getFloor))return Object(n.deepAccess)(e,"params.bidfloor",0);try{return e.getFloor({currency:"USD",mediaType:"*",size:"*"}).floor}catch(e){return 0}}var g={code:"logan",supportedMediaTypes:[i.b,i.d,i.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&e.params.placementId)},buildRequests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=Object(n.getWindowTop)(),a=r.location,o=[],c={deviceWidth:r.screen.width,deviceHeight:r.screen.height,language:navigator&&navigator.language?navigator.language.split("-")[0]:"",secure:1,host:a.host,page:a.pathname,placements:o};t&&(t.uspConsent&&(c.ccpa=t.uspConsent),t.gdprConsent&&(c.gdpr=t.gdprConsent));for(var s=e.length,d=0;d<s;d++){var l=e[d],g={placementId:l.params.placementId,bidId:l.bidId,schain:l.schain||{},bidfloor:u(l)},b=l.mediaTypes;b&&b[i.b]&&b[i.b].sizes?(g.sizes=b[i.b].sizes,g.adFormat=i.b):b&&b[i.d]&&b[i.d].playerSize?(g.wPlayer=b[i.d].playerSize[0],g.hPlayer=b[i.d].playerSize[1],g.minduration=b[i.d].minduration,g.maxduration=b[i.d].maxduration,g.mimes=b[i.d].mimes,g.protocols=b[i.d].protocols,g.startdelay=b[i.d].startdelay,g.placement=b[i.d].placement,g.skip=b[i.d].skip,g.skipafter=b[i.d].skipafter,g.minbitrate=b[i.d].minbitrate,g.maxbitrate=b[i.d].maxbitrate,g.delivery=b[i.d].delivery,g.playbackmethod=b[i.d].playbackmethod,g.api=b[i.d].api,g.linearity=b[i.d].linearity,g.adFormat=i.d):b&&b[i.c]&&(g.native=b[i.c],g.adFormat=i.c),o.push(g)}return{method:"POST",url:p,data:c}},interpretResponse:function(e){for(var t=[],r=0;r<e.body.length;r++){var n=e.body[r];if(l(n)){var a=n.adomain&&n.adomain.length?n.adomain:[];n.meta=s(s({},n.meta),{},{advertiserDomains:a}),t.push(n)}}return t},getUserSyncs:function(e,t,r,n){var a=e.iframeEnabled?"iframe":"image",i="https://ssp-cookie.logan.ai"+"/".concat(a,"?pbjs=1");r&&r.consentString&&("boolean"==typeof r.gdprApplies?i+="&gdpr=".concat(Number(r.gdprApplies),"&gdpr_consent=").concat(r.consentString):i+="&gdpr=0&gdpr_consent=".concat(r.consentString)),n&&n.consentString&&(i+="&ccpa_consent=".concat(n.consentString));var c=o.b.getConfig("coppa")?1:0;return[{type:a,url:i+="&coppa=".concat(c)}]}};Object(a.registerBidder)(g),window.pbjs.installedModules.push("loganBidAdapter")}},[483]);