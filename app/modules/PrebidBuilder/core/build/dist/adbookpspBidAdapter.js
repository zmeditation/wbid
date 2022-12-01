pbjsChunk([398],{58:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"VERSION",(function(){return y})),n.d(t,"DEFAULT_BIDDER_CONFIG",(function(){return S})),n.d(t,"spec",(function(){return x})),n.d(t,"storage",(function(){return B})),n.d(t,"common",(function(){return Q}));var r=n(12),i=n.n(r),o=n(11),a=n.n(o),c=n(3),d=n(2),u=n(7),s=n(0),p=n(1);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y="1.0.0",O="adbookpsp",h="hb_adbookpsp_uid",j=2592e6,I=[d.b,d.d],w=["mimes","minduration","maxduration","protocols","w","h","startdelay","placement","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype","ext"],A=",",S={bidTTL:300,defaultCurrency:"USD",exchangeUrl:"https://ex.fattail.com/openrtb2",winTrackingEnabled:!0,winTrackingUrl:"https://ev.fattail.com/wins",orgId:null};c.b.setDefaults({adbookpsp:S});var x={code:O,supportedMediaTypes:I,buildRequests:function(e,t){var n=[];e.length>0&&n.push({method:"POST",url:X("exchangeUrl"),options:{contentType:"application/json",withCredentials:!0},data:k(e,t)});return n},getUserSyncs:function(e,t,n,r){return t.map((function(e){return Object(s.deepAccess)(e,"body.ext.sync")})).filter(s.isArray).reduce(s.flatten,[]).filter(L(e)).map(z(n,r))},interpretResponse:function(e,t){var n=J(t.data);if(Object(s.deepAccess)(n,"id")!=Object(s.deepAccess)(e,"body.id"))return Object(s.logError)("".concat(O,": Bid response id does not match bidder request id")),[];var r=Object(s.deepAccess)(n,"site.ref",""),i=Object(s.deepAccess)(e,"body.seatbid",[]).filter((function(e){return Object(s.isArray)(e.bid)})).reduce((function(e,t){return e.concat(t.bid)}),[]).filter(function(e){return function(t){var n=H(t.adm),r=G(e,t),i=R;n===d.b&&(i=[].concat(R,V));var o=i.every((function(e){return e(t,r)}));return o||Object(s.logWarn)("".concat(O,": Invalid bid"),t),o}}(n)),o=function(e){var t=e.map((function(e){return e.impid})).filter(s.uniques).reduce((function(e,t){return e[t]={lineItemIds:[],orderIds:[],dealIds:[],adIds:[],adAndOrderIndexes:[]},e}),{});e.forEach((function(e,n){var r=e.impid;t[r].lineItemIds.push(e.ext.liid),t[r].dealIds.push(e.dealid),t[r].adIds.push(e.adid),Object(s.deepAccess)(e,"ext.ordid")&&(t[r].orderIds.push(e.ext.ordid),e.ext.ordid.split(A).forEach((function(n,i){var o=t[r].adIds.indexOf(e.adid);t[r].adAndOrderIndexes.push(o+"_"+i)})))}));var n={};return e.forEach((function(e,r){var i=e.impid;n[r]={hb_liid_adbookpsp:t[i].lineItemIds.join(A),hb_deal_adbookpsp:t[i].dealIds.join(A),hb_ad_ord_adbookpsp:t[i].adAndOrderIndexes.join(A),hb_adid_c_adbookpsp:t[i].adIds.join(A),hb_ordid_adbookpsp:t[i].orderIds.join(A)}})),n}(i);return function(e,t,n,r,i){return e.map(P(t,n,r,i)).filter((function(e){return null!==e}))}(i,n,e.body.cur,r,o)},isBidRequestValid:function(e){return function(e){var t=null!=Object(s.deepAccess)(e,"params.placementId")||null!=Object(s.deepAccess)(e,"params.orgId")||null!=X("orgId");t||Object(s.logError)("".concat(O,": missing orgId and placementId parameter"));return t}(e)&&(function(e){return q(Object(s.deepAccess)(e,"mediaTypes.banner.sizes",[]))}(e)||function(e){return Object(s.isArray)(Object(s.deepAccess)(e,"mediaTypes.video.mimes"))&&function(e){var t=Object(s.deepAccess)(e,"mediaTypes.video",{}),n=t.w,r=t.h;return q(Object(s.deepAccess)(e,"mediaTypes.video.playerSize"))||Object(s.isNumber)(n)&&Object(s.isNumber)(r)}(e)}(e))},onBidWon:function(e){if(!X("winTrackingEnabled"))return;var t=function(e){try{var t=K(X("winTrackingUrl"));return t.set("impId",e.requestId),t.set("reqId",e.bidderRequestId),t.set("bidId",e.bidId),t.toString()}catch(e){return Object(s.logError)("".concat(O,": Could not build win tracking URL with %s"),X("winTrackingUrl")),null}}(e);null!==t&&Object(s.triggerPixel)(t);Object(s.isStr)(e.nurl)&&Object(s.triggerPixel)(e.nurl)}};function k(e,t){var n={id:t.bidderRequestId,tmax:t.timeout,site:{domain:window.location.hostname,page:window.location.href,ref:t.refererInfo.referer},source:E(e,t),device:C(),regs:T(t),user:_(t),imp:e.map(D),ext:{adbook:{config:X(),version:{prebid:"6.10.0-pre",adapter:y}}}};return JSON.stringify(n)}function C(){var e=Q.getWindowDimensions(),t={w:e.innerWidth,h:e.innerHeight,js:!0,ua:navigator.userAgent,dnt:"yes"===navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0},n=Q.getConfig("device");return Object(s.isPlainObject)(n)?m(m({},t),n):t}function T(e){var t={coppa:!0===Q.getConfig("coppa")?1:0};return e.gdprConsent&&(Object(s.deepSetValue)(t,"ext.gdpr",e.gdprConsent.gdprApplies?1:0),Object(s.deepSetValue)(t,"ext.gdprConsentString",e.gdprConsent.consentString||"")),e.uspConsent&&Object(s.deepSetValue)(t,"ext.us_privacy",e.uspConsent),t}function E(e,t){var n={fd:1,tid:t.auctionId},r=Object(s.deepAccess)(e,"0.schain");return r&&Object(s.deepSetValue)(n,"ext.schain",r),n}function _(e){var t={id:M()};return e.gdprConsent&&(t.gdprConsentString=e.gdprConsent.consentString||""),t}function D(e){var t={id:e.bidId,tagid:e.adUnitCode,ext:U(e)};return Object.keys(e.mediaTypes).filter((function(e){return i()(I,e)})).reduce((function(t,n){return m(m({},t),{},v({},n,function(e,t){switch(e){case d.b:return function(e){var t=e.mediaTypes.banner.sizes.map((function(e){var t=l(e,2);return{w:t[0],h:t[1]}})),n=t[0],r=n.w,i=n.h;return{pos:0,topframe:Object(s.inIframe)()?0:1,format:t,w:r,h:i}}(t);case d.d:return function(e){var t,n=function(e){var t=Object(s.deepAccess)(e,"mediaTypes.video.playerSize",[[]]),n=Object(s.deepAccess)(e,"mediaTypes.video",{}),r=n.w,i=n.h;if(Object(s.isNumber)(r)&&Object(s.isNumber)(i))return{w:r,h:i};return{w:t[0][0],h:t[0][1]}}(e),r=n.w,i=n.h,o={w:r,h:i},a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}(w);try{for(a.s();!(t=a.n()).done;){var c=t.value,d=Object(s.deepAccess)(e,"params.video.".concat(c)),u=Object(s.deepAccess)(e,"mediaTypes.video.".concat(c));(d||u)&&(o[c]=d||u)}}catch(e){a.e(e)}finally{a.f()}return o}(t);default:Object(s.logWarn)("".concat(O,": Unsupported media type ").concat(e,"!"))}}(n,e)))}),t)}function U(e){var t=X("orgId"),n=e.params||{},r=n.orgId,i=n.placementId,o=r||t,a={};return i&&Object(s.deepSetValue)(a,"adbook.placementId",i),o&&Object(s.deepSetValue)(a,"adbook.orgId",o),a}Object(p.registerBidder)(x);var P=function(e,t,n,r){return function(i,o){try{var a=G(e,i);if(!a)return Object(s.logError)("".concat(O,": Could not match bid to bid request")),null;var c=Object(s.deepAccess)(i,"cat",[]),u=H(i.adm),p={ad:i.adm,adId:i.adid,adserverTargeting:r[o],adUnitCode:a.tagid,bidderRequestId:e.id,bidId:i.id,cpm:i.price,creativeId:i.crid||i.id,currency:t||X("defaultCurrency"),height:i.h,lineItemId:Object(s.deepAccess)(i,"ext.liid"),mediaType:u,meta:{advertiserDomains:i.adomain,mediaType:u,primaryCatId:c[0],secondaryCatIds:c.slice(1)},netRevenue:!0,nurl:i.nurl,referrer:n,requestId:i.impid,ttl:X("bidTTL"),width:i.w};return u===d.d&&(p=m(m({},p),function(e,t){return{height:t.h||e.video.h,vastXml:t.adm,width:t.w||e.video.w}}(a,i))),!0===Object(s.deepAccess)(i,"ext.pa_win")&&(p.auctionWinner=!0),p}catch(e){return Object(s.logError)("".concat(O,": Error while building bid"),e),null}}};function N(e){return Object(s.isArray)(e)&&2===e.length&&e.every(s.isNumber)}function q(e){return Object(s.isArray)(e)&&e.length>0&&e.every(N)}var R=[function(e){return Object(s.isPlainObject)(e)},function(e){return $(e.adid)},function(e){return $(e.adm)},function(e){return $(e.id)},function(e){return $(e.impid)},function(e){return $(Object(s.deepAccess)(e,"ext.liid"))},function(e){return Object(s.isNumber)(e.price)}],V=[W("w"),W("h")];function W(e){return function(t,n){return null==t[e]?function(e){return 1===Object(s.deepAccess)(e,"banner.format",[]).length}(n):Object(s.isNumber)(t[e])}}var B=Object(u.b)();var L=function(e){return function(t){return("image"===t.type&&e.pixelEnabled||"iframe"===t.type&&e.iframeEnabled)&&t.url}},z=function(e,t){return function(n){var r=K(n.url);return e&&(r.set("gdpr",e.gdprApplies?1:0),r.set("consentString",e.consentString||"")),t&&r.set("us_privacy",encodeURIComponent(t)),!0===Q.getConfig("coppa")&&r.set("coppa",1),m(m({},n),{},{url:r.toString()})}};function M(){var e=function(){var e=B.localStorageIsEnabled()?B.getDataFromLocalStorage(h):B.getCookie(h);if(t=e,!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t))return;var t;return e}()||Q.generateUUID();return function(e){B.localStorageIsEnabled()&&B.setDataInLocalStorage(h,e);if(B.cookiesAreEnabled()){var t=new Date(Date.now()+j).toISOString();B.setCookie(h,e,t)}}(e),e}var F=/VAST\s+version/;function H(e){if(new RegExp(F).test(e))return d.d;var t=J(e.replace(/\\/g,""));return t&&Object(s.isPlainObject)(t.native)?d.c:d.b}function J(){try{return JSON.parse.apply(JSON,arguments)}catch(e){return}}function $(e){return Object(s.isStr)(e)&&!Object(s.isEmptyStr)(e)}function G(e,t){return a()(e.imp,(function(e){return e.id===t.impid}))}function X(e){return e?Q.getConfig("".concat(O,".").concat(e)):Q.getConfig("".concat(O))}var K=function(e){var t=function(e){var t=e.split("#")[1];if(t)return"#"+t}(e),n=function(e){return e.split("?")[0]}(e),r=function(e){var t=e.split("?")[1];if(t)return"?"+t.split("#")[0]}(e),i=[];function o(){if(!i.length)return e;var o=i.map((function(e){return e.join("=")})).join("&");return r?n+r+"&"+o+(t||""):n+"?"+o+(t||"")}return{set:function e(t,n){return i.push([t,n]),{set:e,toString:o}},toString:o}},Q={generateUUID:function(){return Object(s.generateUUID)()},getConfig:function(e){return c.b.getConfig(e)},getWindowDimensions:function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight}}};window.pbjs.installedModules.push("adbookpspBidAdapter")}},[58]);