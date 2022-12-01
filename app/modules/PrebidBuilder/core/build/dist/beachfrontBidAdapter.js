pbjsChunk([348],{187:function(e,r,t){e.exports=t(188)},188:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"VIDEO_ENDPOINT",(function(){return j})),t.d(r,"BANNER_ENDPOINT",(function(){return w})),t.d(r,"OUTSTREAM_SRC",(function(){return I})),t.d(r,"VIDEO_TARGETING",(function(){return P})),t.d(r,"DEFAULT_MIMES",(function(){return T})),t.d(r,"SUPPORTED_USER_IDS",(function(){return S})),t.d(r,"spec",(function(){return C}));var n=t(0),i=t(3),o=t(1),a=t(13),c=t(2),d=t(11),s=t.n(d),u=t(12),p=t.n(u);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){b(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function g(){return(g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var y="1.19",h="BFIO_PREBID",O="USD",j="https://reachms.bfmio.com/bid.json?exchange_id=",w="https://display.bfmio.com/prebid_display",I="https://player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js",P=["mimes","playbackmethod","maxduration","placement","skip","skipmin","skipafter"],T=["video/mp4","application/javascript"],S=[{key:"tdid",source:"adserver.org",rtiPartner:"TDID",queryParam:"tdid"},{key:"idl_env",source:"liveramp.com",rtiPartner:"idl",queryParam:"idl"},{key:"uid2.id",source:"uidapi.com",rtiPartner:"UID2",queryParam:"uid2"},{key:"haloId",source:"audigent.com",atype:1,queryParam:"haloid"}],A="",C={code:"beachfront",supportedMediaTypes:[c.d,c.b],isBidRequestValid:function(e){if(_(e)){if(!M(e,"appId"))return Object(n.logWarn)("Beachfront: appId param is required for video bids."),!1;if(!M(e,"bidfloor"))return Object(n.logWarn)("Beachfront: bidfloor param is required for video bids."),!1}if(q(e)){if(!R(e,"appId"))return Object(n.logWarn)("Beachfront: appId param is required for banner bids."),!1;if(!R(e,"bidfloor"))return Object(n.logWarn)("Beachfront: bidfloor param is required for banner bids."),!1}return!0},buildRequests:function(e,r){var t=[],n=e.filter((function(e){return function(e){return _(e)&&M(e,"appId")&&M(e,"bidfloor")}(e)})),i=e.filter((function(e){return function(e){return q(e)&&R(e,"appId")&&R(e,"bidfloor")}(e)}));return n.forEach((function(e){A=M(e,"appId"),t.push({method:"POST",url:j+A,data:X(e,r),bidRequest:e})})),i.length&&(A=R(i[0],"appId"),t.push({method:"POST",url:w,data:G(i,r),bidRequest:i})),t},interpretResponse:function(e,r){var t=r.bidRequest;if(e=e.body,_(t)){if(!e||!e.bidPrice)return Object(n.logWarn)("No valid video bids from ".concat(C.code," bidder")),[];var i=N(E(t)),o=Object(n.deepAccess)(t,"mediaTypes.video.context"),a=M(t,"responseType")||"both",d=g({mediaType:c.d,advertiserDomains:[]},e.meta),u={requestId:t.bidId,bidderCode:C.code,cpm:e.bidPrice,width:i.w,height:i.h,creativeId:e.crid||e.cmpId,meta:d,renderer:"outstream"===o?W(t):null,mediaType:c.d,currency:O,netRevenue:!0,ttl:300};return"nurl"!==a&&"both"!==a||(u.vastUrl=e.url),"adm"!==a&&"both"!==a||(u.vastXml=e.vast),u}return e&&e.length?e.filter((function(e){return e.adm})).map((function(e){var r=s()(t,(function(r){return r.adUnitCode===e.slot})),n=g({mediaType:c.b,advertiserDomains:[]},e.meta);return{requestId:r.bidId,bidderCode:C.code,ad:e.adm,creativeId:e.crid,cpm:e.price,width:e.w,height:e.h,meta:n,mediaType:c.b,currency:O,netRevenue:!0,ttl:300}})):(Object(n.logWarn)("No valid banner bids from ".concat(C.code," bidder")),[])},getUserSyncs:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=[],a=t.gdprApplies,c=t.consentString,d=void 0===c?"":c,u=s()(r,(function(e){return Object(n.isArray)(e.body)}));return u?e.iframeEnabled&&u.body.filter((function(e){return e.sync})).forEach((function(e){o.push({type:"iframe",url:e.sync})})):e.iframeEnabled?o.push({type:"iframe",url:"https://sync.bfmio.com/sync_iframe?ifg=1&id=".concat(A,"&gdpr=").concat(a?1:0,"&gc=").concat(d,"&gce=1&us_privacy=").concat(i)}):e.pixelEnabled&&o.push({type:"image",url:"https://sync.bfmio.com/syncb?pid=144&id=".concat(A,"&gdpr=").concat(a?1:0,"&gc=").concat(d,"&gce=1&us_privacy=").concat(i)}),o}};function W(e){var r=a.a.install({id:e.bidId,url:I,loaded:!1});return r.setRender((function(r){r.renderer.push((function(){window.Beachfront.Player(r.adUnitCode,{adTagUrl:r.vastUrl,width:r.width,height:r.height,expandInView:B(e,"expandInView",!1),collapseOnComplete:B(e,"collapseOnComplete",!0),progressColor:B(e,"progressColor"),adPosterColor:B(e,"adPosterColor")})}))})),r}function N(e){return e&&e.length?e[0]:{w:void 0,h:void 0}}function k(e){return Object(n.parseSizesInput)(e).map((function(e){var r=m(e.split("x"),2),t=r[0],n=r[1];return{w:parseInt(t,10)||void 0,h:parseInt(n,10)||void 0}}))}function E(e){return k(Object(n.deepAccess)(e,"mediaTypes.video.playerSize")||e.sizes)}function x(e){return k(Object(n.deepAccess)(e,"mediaTypes.banner.sizes")||e.sizes)}function D(){return/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)}function U(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNoTrack||"yes"===navigator.doNotTrack}function _(e){return Object(n.deepAccess)(e,"mediaTypes.video")}function q(e){return Object(n.deepAccess)(e,"mediaTypes.banner")||!_(e)}function M(e,r){return Object(n.deepAccess)(e,"params.video."+r)||Object(n.deepAccess)(e,"params."+r)}function R(e,r){return Object(n.deepAccess)(e,"params.banner."+r)||Object(n.deepAccess)(e,"params."+r)}function B(e,r,t){var i=Object(n.deepAccess)(e,"params.player."+r);return void 0===i?t:i}function V(e){return(Object(n.isFn)(e.getFloor)?e.getFloor({currency:O,mediaType:"banner",size:"*"}):{}).floor||R(e,"bidfloor")}function z(e){var r=e&&e.refererInfo&&e.refererInfo.referer;return Object(n.parseUrl)(i.b.getConfig("pageUrl")||r,{decodeSearchAsString:!0})}function F(e){return S.map(function(e){return function(r){var t=r.key,i=r.source,o=r.rtiPartner,a=r.atype,c=Object(n.deepAccess)(e,"userId.".concat(t));return c?function(e,r,t,n){var i={id:e};t&&(i.ext={rtiPartner:t});n&&(i.atype=n);return{source:r,uids:[i]}}(c,i,o,a):null}}(e)).filter((function(e){return e}))}function X(e,r){var t=N(E(e)),o=function(e){var r={},t=["playerSize","context","w","h"];return Object.keys(Object(e.mediaTypes.video)).filter((function(e){return!p()(t,e)})).forEach((function(t){r[t]=e.mediaTypes.video[t]})),Object.keys(Object(e.params.video)).filter((function(e){return p()(P,e)})).forEach((function(t){r[t]=e.params.video[t]})),r}(e),a=M(e,"appId"),c=function(e){return(Object(n.isFn)(e.getFloor)?e.getFloor({currency:O,mediaType:"video",size:"*"}):{}).floor||M(e,"bidfloor")}(e),d=M(e,"tagid"),s=z(r),u=F(e),f=Object(n.deepClone)(i.b.getConfig("ortb2")),b={isPrebid:!0,appId:a,domain:document.location.hostname,id:Object(n.getUniqueIdentifierStr)(),imp:[{video:g({w:t.w,h:t.h,mimes:T},o),bidfloor:c,tagid:d,secure:0===s.protocol.indexOf("https")?1:0,displaymanager:h,displaymanagerver:y}],site:l(l({},Object(n.deepAccess)(f,"site",{})),{},{page:s.href,domain:s.hostname}),device:{ua:navigator.userAgent,language:navigator.language,devicetype:D()?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2,dnt:U()?1:0,js:1,geo:{}},app:Object(n.deepAccess)(f,"app"),user:Object(n.deepAccess)(f,"user"),cur:[O]};if(r&&r.uspConsent&&Object(n.deepSetValue)(b,"regs.ext.us_privacy",r.uspConsent),r&&r.gdprConsent){var m=r.gdprConsent,v=m.gdprApplies,j=m.consentString;Object(n.deepSetValue)(b,"regs.ext.gdpr",v?1:0),Object(n.deepSetValue)(b,"user.ext.consent",j)}e.schain&&Object(n.deepSetValue)(b,"source.ext.schain",e.schain),u.length>0&&Object(n.deepSetValue)(b,"user.ext.eids",u);var w=navigator.connection||navigator.webkitConnection;return w&&w.effectiveType&&Object(n.deepSetValue)(b,"device.connectiontype",w.effectiveType),b}function G(e,r){var t,o=z(r),a=function(){try{return window.top.document.referrer}catch(e){return""}}(),c={slots:e.map((function(e){return{slot:e.adUnitCode,id:R(e,"appId"),bidfloor:V(e),tagid:R(e,"tagid"),sizes:x(e)}})),ortb2:Object(n.deepClone)(i.b.getConfig("ortb2")),page:o.href,domain:o.hostname,search:o.search,secure:0===o.protocol.indexOf("https")?1:0,referrer:a,ua:navigator.userAgent,deviceOs:(t=s()([{s:"Android",r:/Android/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"Linux",r:/(Linux|X11)/},{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"UNIX",r:/UNIX/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}],(function(e){return e.r.test(navigator.userAgent)})),t?t.s:"unknown"),isMobile:D()?1:0,dnt:U()?1:0,adapterVersion:y,adapterName:h};if(r&&r.uspConsent&&(c.usPrivacy=r.uspConsent),r&&r.gdprConsent){var d=r.gdprConsent,u=d.gdprApplies,p=d.consentString;c.gdpr=u?1:0,c.gdprConsent=p}return e[0]&&e[0].schain&&(c.schain=e[0].schain),S.forEach((function(r){var t=r.key,i=r.queryParam,o=Object(n.deepAccess)(e,"0.userId.".concat(t));o&&(c[i]=o)})),c}Object(o.registerBidder)(C),window.pbjs.installedModules.push("beachfrontBidAdapter")}},[187]);