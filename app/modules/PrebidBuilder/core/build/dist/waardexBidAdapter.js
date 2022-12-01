pbjsChunk([92],{829:function(e,r,t){e.exports=t(830)},830:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return x}));var a=t(0),i=t(1),n=t(2),d=t(3),o=t(11),s=t.n(o);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l="waardex",b=function(e){var r={ua:navigator.userAgent||"",language:navigator.language&&-1!==navigator.language.indexOf("-")?navigator.language.split("-")[0]:""};return e&&e.refererInfo&&(r.referer=encodeURIComponent(e.refererInfo.referer)),e&&e.uspConsent&&(r.us_privacy=e.uspConsent),e&&e.gdprConsent&&(r.gdpr_consent={consent_string:e.gdprConsent.consentString,consent_required:e.gdprConsent.gdprApplies}),r.coppa=!!d.b.getConfig("coppa"),r},m=function(e){return e.map(y)},y=function(e){var r={bidId:e.bidId,bidfloor:0,position:parseInt(e.params.position)||1,instl:parseInt(e.params.instl)||0};return e.mediaTypes[n.b]&&(r[n.b]=f(e.mediaTypes[n.b])),e.mediaTypes[n.d]&&(r[n.d]=v(e.mediaTypes[n.d],e.params)),r},f=function(e){return{sizes:g(e.sizes)}},g=function(e){var r=[];return Array.isArray(e)&&!Array.isArray(e[0])?r[0]={width:parseInt(e[0],10)||0,height:parseInt(e[1],10)||0}:Array.isArray(e)&&Array.isArray(e[0])&&(r=e.map((function(e){return{width:parseInt(e[0],10)||0,height:parseInt(e[1],10)||0}}))),r},v=function(e,r){return{w:Object(a.deepAccess)(e,"playerSize")[0][0],h:Object(a.deepAccess)(e,"playerSize")[0][1],mimes:Object(a.getBidIdParameter)("mimes",r)||["application/javascript","video/mp4","video/webm"],minduration:Object(a.getBidIdParameter)("minduration",r)||0,maxduration:Object(a.getBidIdParameter)("maxduration",r)||500,protocols:Object(a.getBidIdParameter)("protocols",r)||[2,3,5,6],startdelay:Object(a.getBidIdParameter)("startdelay",r)||0,placement:Object(a.getBidIdParameter)("placement",r)||"outstream"===e.context?3:1,skip:Object(a.getBidIdParameter)("skip",r)||1,skipafter:Object(a.getBidIdParameter)("skipafter",r)||0,minbitrate:Object(a.getBidIdParameter)("minbitrate",r)||0,maxbitrate:Object(a.getBidIdParameter)("maxbitrate",r)||3500,delivery:Object(a.getBidIdParameter)("delivery",r)||[2],playbackmethod:Object(a.getBidIdParameter)("playbackmethod",r)||[1,2,3,4],api:Object(a.getBidIdParameter)("api",r)||[2],linearity:Object(a.getBidIdParameter)("linearity",r)||1}},I=function(e,r){return s()(r.bidRequests,(function(r){return r.bidId===e.impid}))},O=function(e){return e.banner?n.b:e.video?n.d:null},j=function(e,r,t){var a=null;return r===n.b&&(a=h(e,t)),r===n.d&&(a=w(e,t)),T(a)?a:null},h=function(e,r){return{mediaType:n.b,requestId:r.bidId,cpm:e.price,currency:"USD",width:e.w,height:e.h,creativeId:e.crid,netRevenue:!0,ttl:3e3,ad:e.adm,dealId:e.dealid,meta:{cid:e.cid,adomain:e.adomain,mediaType:e.ext&&e.ext.mediaType}}},w=function(e,r){return{mediaType:n.d,requestId:r.bidId,cpm:e.price,currency:"USD",width:r.video.w,height:r.video.h,ad:e.adm,ttl:3e3,creativeId:e.crid,netRevenue:!0,vastUrl:P(e),vastXml:e.adm,dealId:e.dealid,meta:{cid:e.cid,adomain:e.adomain,networkId:null,networkName:null,agencyId:null,agencyName:null,advertiserId:null,advertiserName:null,advertiserDomains:null,brandId:null,brandName:null,primaryCatId:null,secondaryCatIds:null,mediaType:"video"}}},P=function(e){var r=(e.adm||"").trim();return r.startsWith("http")?r:null},T=function(e){return!!(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency)&&Boolean(e.width&&e.height&&e.ad)},x={code:l,supportedMediaTypes:[n.b,n.d],isBidRequestValid:function(e){if(!e.bidId)return Object(a.logError)("waardex: bid.bidId should be non-empty"),!1;if(!e.params)return Object(a.logError)("waardex: bid.params should be non-empty"),!1;if(!+e.params.zoneId)return Object(a.logError)("waardex: bid.params.zoneId should be non-empty Number"),!1;if(e.mediaTypes&&e.mediaTypes.video){if(!e.mediaTypes.video.playerSize)return Object(a.logError)("waardex: bid.mediaTypes.video.playerSize should be non-empty"),!1;if(!Object(a.isArray)(e.mediaTypes.video.playerSize))return Object(a.logError)("waardex: bid.mediaTypes.video.playerSize should be an Array"),!1;if(!e.mediaTypes.video.playerSize[0])return Object(a.logError)("waardex: bid.mediaTypes.video.playerSize should be non-empty"),!1;if(!Object(a.isArray)(e.mediaTypes.video.playerSize[0]))return Object(a.logError)("waardex: bid.mediaTypes.video.playerSize should be non-empty Array"),!1}return!0},buildRequests:function(e,r){var t=u(u({},b(r)),{},{bidRequests:m(e)}),a="";return e[0]&&e[0].params&&+e[0].params.zoneId&&(a=+e[0].params.zoneId),{method:"POST",url:"".concat("https://hb.justbidit.xyz:8843/prebid","?pubId=").concat(a),data:t}},interpretResponse:function(e,r){try{var t=e.body;return t.seatbid&&t.seatbid[0]?t.seatbid[0].bid.map((function(e){var t=I(e,r.data);if(t){var a=O(t);if(a)return j(e,a,t)}})).filter((function(e){return e})):[]}catch(e){return[]}}};Object(i.registerBidder)(x),window.pbjs.installedModules.push("waardexBidAdapter")}},[829]);