pbjsChunk([390],{81:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"spec",(function(){return g}));var r=a(1),n=a(2),i=a(0),d=a(3);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p="https://pub.admanmedia.com/?c=o&m=multi";function u(e){if(!(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency))return!1;switch(e.mediaType){case n.b:return Boolean(e.width&&e.height&&e.ad);case n.d:return Boolean(e.vastUrl);case n.c:return Boolean(e.native&&e.native.title&&e.native.image&&e.native.impressionTrackers);default:return!1}}function m(e){if(!Object(i.isFn)(e.getFloor))return Object(i.deepAccess)(e,"params.bidfloor",0);try{return e.getFloor({currency:"USD",mediaType:"*",size:"*"}).floor}catch(e){return 0}}function l(e,t,a,r){if(t){var n={id:t};r&&(n.ext=r),e.push({source:a,uids:[n]})}}var g={code:"adman",supportedMediaTypes:[n.b,n.d,n.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.placementId))},buildRequests:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,r=window;try{e=new URL(a.refererInfo.referer),r=window.top}catch(t){e=r.location,Object(i.logMessage)(t)}var d=[],s={deviceWidth:r.screen.width,deviceHeight:r.screen.height,language:navigator&&navigator.language?navigator.language:"",secure:1,host:e.host,page:e.pathname,placements:d};-1!=s.language.indexOf("-")&&(s.language=s.language.split("-")[0]),a&&(a.uspConsent&&(s.ccpa=a.uspConsent),a.gdprConsent&&(s.gdpr=a.gdprConsent));for(var o=t.length,c=0;c<o;c++){var u=t[c],g=u.params.traffic||n.b,y={placementId:u.params.placementId,bidId:u.bidId,sizes:u.mediaTypes&&u.mediaTypes[g]&&u.mediaTypes[g].sizes?u.mediaTypes[g].sizes:[],traffic:g,eids:[],bidFloor:m(u)};u.schain&&(y.schain=u.schain),u.userId&&(l(y.eids,u.userId.uid2&&u.userId.uid2.id,"uidapi.com"),l(y.eids,u.userId.lotamePanoramaId,"lotame.com")),g===n.d&&(y.playerSize=u.mediaTypes[n.d].playerSize,y.minduration=u.mediaTypes[n.d].minduration,y.maxduration=u.mediaTypes[n.d].maxduration,y.mimes=u.mediaTypes[n.d].mimes,y.protocols=u.mediaTypes[n.d].protocols,y.startdelay=u.mediaTypes[n.d].startdelay,y.placement=u.mediaTypes[n.d].placement,y.skip=u.mediaTypes[n.d].skip,y.skipafter=u.mediaTypes[n.d].skipafter,y.minbitrate=u.mediaTypes[n.d].minbitrate,y.maxbitrate=u.mediaTypes[n.d].maxbitrate,y.delivery=u.mediaTypes[n.d].delivery,y.playbackmethod=u.mediaTypes[n.d].playbackmethod,y.api=u.mediaTypes[n.d].api,y.linearity=u.mediaTypes[n.d].linearity),d.push(y)}return{method:"POST",url:p,data:s}},interpretResponse:function(e){var t=[];e=e.body;for(var a=0;a<e.length;a++){var r=e[a];if(u(r)){var n=r.adomain&&r.adomain.length?r.adomain:[];r.meta=o(o({},r.meta),{},{advertiserDomains:n}),t.push(r)}}return t},getUserSyncs:function(e,t,a,r){var n=e.iframeEnabled?"iframe":"image",i="https://pub.admanmedia.com"+"/".concat(n,"?pbjs=1");a&&a.consentString&&("boolean"==typeof a.gdprApplies?i+="&gdpr=".concat(Number(a.gdprApplies),"&gdpr_consent=").concat(a.consentString):i+="&gdpr=0&gdpr_consent=".concat(a.consentString)),r&&r.consentString&&(i+="&ccpa_consent=".concat(r.consentString));var s=d.b.getConfig("coppa")?1:0;return[{type:n,url:i+="&coppa=".concat(s)}]}};Object(r.registerBidder)(g),window.pbjs.installedModules.push("admanBidAdapter")}},[81]);