pbjsChunk([219],{493:function(e,r,t){e.exports=t(494)},494:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return x})),r.hasValidSupplyChainParams=y,r.resetUserSync=function(){g=!1},r.masSizeOrdering=m;var i=t(0),n=t(1),s=t(3),a=t(2),o=t(4);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var i,n,s=[],a=!0,o=!1;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(s.push(i.value),!r||s.length!==r);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==t.return||t.return()}finally{if(o)throw n}}return s}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}var b={PREBID_SERVER:{id:"id",keyv:"keyv"}},f={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",548:"500x1000",550:"980x480",552:"300x200",558:"640x640"};Object(i._each)(f,(function(e,r){return f[e]=r}));var x={code:"luponmedia",supportedMediaTypes:[a.b],isBidRequestValid:function(e){return!!(e.params&&e.params.siteId&&e.params.keyId)},buildRequests:function(e,r){for(var t={method:"POST",url:"https://rtb.adxpremium.services/openrtb2/auction",data:null,options:{},bidderRequest:r},i=[],n=0,s=e.length;n<s;n++){var a=v(e[n],r,i);i=a.imp,t.data=JSON.stringify(a)}return t},interpretResponse:function(e,r){var t=[],n="USD",s=JSON.parse(r.data),a=s.site&&s.site.ref?s.site.ref:"";try{e.body&&e.body.seatbid&&Object(i.isArray)(e.body.seatbid)&&(n=e.body.cur||n,e.body.seatbid.forEach((function(e){e.bid&&Object(i.isArray)(e.bid)&&e.bid.forEach((function(e){var r={requestId:e.impid,cpm:(parseFloat(e.price)||0).toFixed(2),width:e.w,height:e.h,creativeId:e.crid||e.id,dealId:e.dealid,currency:n,netRevenue:!1,ttl:300,referrer:a,ad:e.adm};t.push(r)}))})))}catch(e){Object(i.logError)(e)}return t},getUserSyncs:function(e,r,t,n){var s=[];return g||!e.iframeEnabled&&!e.pixelEnabled?Object(i.logWarn)("Luponmedia: Please enable iframe/pixel based user sync."):r.forEach((function(r){if(r.body&&r.body.ext&&r.body.ext.usersyncs)try{var t=r.body.ext.usersyncs.bidder_status;for(var n in t){var a=t[n];if(a.no_cookie){var o=a.usersync.url,u=a.usersync.type;o?"image"!==u&&"redirect"!==u||!e.pixelEnabled?"iframe"==u&&e.iframeEnabled?(Object(i.logMessage)("Invoking iframe user sync for luponmedia"),s.push({type:"iframe",url:o})):Object(i.logError)('User sync type "'.concat(u,'" not supported for luponmedia')):(Object(i.logMessage)("Invoking image pixel user sync for luponmedia"),s.push({type:"image",url:o})):Object(i.logError)("No sync url for bidder luponmedia.")}}}catch(e){Object(i.logError)(e)}})),g=!0,s},onBidWon:function(e){var r=JSON.stringify(e);x.sendWinningsToServer(r)},sendWinningsToServer:function(e){var r='mutation {createWin(input: {win: {eventData: "'.concat(window.btoa(e),'"}}) {win {createTime } } }'),t=JSON.stringify({query:r});Object(o.a)("https://analytics.adxpremium.services/graphql",null,t,{contentType:"application/json",method:"POST"})}};function y(e){var r=!1,t=["asi","sid","hp"];return e.nodes?((r=e.nodes.reduce((function(e,r){return e?t.every((function(e){return r[e]})):e}),!0))||Object(i.logError)("LuponMedia: required schain params missing"),r):r}var g=!1;function m(e){var r=[15,2,9];return e.sort((function(e,t){var i=r.indexOf(e),n=r.indexOf(t);return i>-1||n>-1?-1===i?1:-1===n?-1:i-n:e-t}))}function v(e,r,t){e.startTime=(new Date).getTime();var n=Object(i.deepAccess)(e,"mediaTypes.banner"),a=[];n&&n.sizes&&(a=Object(i.parseSizesInput)(n.sizes).map((function(e){var r=p(e.split("x"),2),t=r[0],i=r[1];return{w:parseInt(t,10),h:parseInt(i,10)}})));var o,l={id:e.transactionId,test:s.b.getConfig("debug")?1:0,source:{tid:e.transactionId},tmax:s.b.getConfig("timeout")||1500,imp:t.concat([{id:e.bidId,secure:1,ext:c({},e.bidder,e.params),banner:{format:a}}]),ext:{prebid:{targeting:{includewinners:!0,includebidderkeys:!1}}},user:{}};if(Object(i.isFn)(e.getFloor)&&!s.b.getConfig("disableFloors")){var f;try{f=e.getFloor({currency:"USD",mediaType:"video",size:j(e,"video")})}catch(e){Object(i.logError)("LuponMedia: getFloor threw an error: ",e)}o="object"!==d(f)||"USD"!==f.currency||isNaN(parseInt(f.floor))?void 0:parseFloat(f.floor)}else o=parseFloat(Object(i.deepAccess)(e,"params.floor"));isNaN(o)||(l.imp[0].bidfloor=o),function(e,r,t){if(!e)return;"object"===d(s.b.getConfig("app"))?e.app=s.b.getConfig("app"):e.site={page:h(r,t)};"object"===d(s.b.getConfig("device"))&&(e.device=s.b.getConfig("device"))}(l,e,r);var x,g=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(!t||!b[t])return null;var n=b[t];function a(){var e=Object(i.deepAccess)(r,"userId.digitrustid.data");if(e)return e;var t=window.DigiTrust&&(s.b.getConfig("digiTrustId")||window.DigiTrust.getUser({member:"T9QSFKPDN9"}));return t&&t.success&&t.identity||null}var o=a();if(!o||o.privacy&&o.privacy.optout)return null;var u=(c(e={},n.id,o.id),c(e,n.keyv,o.keyv),e);n.pref&&(u[n.pref]=0);return u}(e,"PREBID_SERVER");(g&&Object(i.deepSetValue)(l,"user.ext.digitrust",g),r.gdprConsent)&&("boolean"==typeof r.gdprConsent.gdprApplies&&(x=r.gdprConsent.gdprApplies?1:0),Object(i.deepSetValue)(l,"regs.ext.gdpr",x),Object(i.deepSetValue)(l,"user.ext.consent",r.gdprConsent.consentString));r.uspConsent&&Object(i.deepSetValue)(l,"regs.ext.us_privacy",r.uspConsent),Object(i.deepSetValue)(l,"user.id",Object(i.generateUUID)()),e.crumbs&&e.crumbs.pubcid?Object(i.deepSetValue)(l,"user.buyeruid",e.crumbs.pubcid):Object(i.deepSetValue)(l,"user.buyeruid",Object(i.generateUUID)()),e.userId&&"object"===d(e.userId)&&(e.userId.tdid||e.userId.pubcid||e.userId.lipb||e.userId.idl_env)&&(Object(i.deepSetValue)(l,"user.ext.eids",[]),e.userId.tdid&&l.user.ext.eids.push({source:"adserver.org",uids:[{id:e.userId.tdid,ext:{rtiPartner:"TDID"}}]}),e.userId.pubcid&&l.user.ext.eids.push({source:"pubcommon",uids:[{id:e.userId.pubcid}]}),e.userId.lipb&&e.userId.lipb.lipbid&&(l.user.ext.eids.push({source:"liveintent.com",uids:[{id:e.userId.lipb.lipbid}]}),l.user.ext.tpid={source:"liveintent.com",uid:e.userId.lipb.lipbid},Array.isArray(e.userId.lipb.segments)&&e.userId.lipb.segments.length&&Object(i.deepSetValue)(l,"rp.target.LIseg",e.userId.lipb.segments)),e.userId.idl_env&&l.user.ext.eids.push({source:"liveramp.com",uids:[{id:e.userId.idl_env}]})),!0===s.b.getConfig("coppa")&&Object(i.deepSetValue)(l,"regs.coppa",1),e.schain&&y(e.schain)&&Object(i.deepSetValue)(l,"source.ext.schain",e.schain);var m=u({},e.params.inventory,s.b.getConfig("fpd.context")),v=u({},e.params.visitor,s.b.getConfig("fpd.user"));if(!Object(i.isEmpty)(m)||!Object(i.isEmpty)(v)){var O={bidders:[r.bidderCode],config:{fpd:{}}};Object(i.isEmpty)(m)||(O.config.fpd.site=m),Object(i.isEmpty)(v)||(O.config.fpd.user=v),Object(i.deepSetValue)(l,"ext.prebid.bidderconfig.0",O)}var S=Object(i.deepAccess)(e,"fpd.context.pbAdSlot");return"string"==typeof S&&S&&Object(i.deepSetValue)(l.imp[0].ext,"context.data.adslot",S),l}function h(e,r){var t=s.b.getConfig("pageUrl");return e.params.referrer?t=e.params.referrer:t||(t=r.refererInfo.referer),e.params.secure?t.replace(/^http:/i,"https:"):t}function O(e){return Object(i.parseSizesInput)(e).reduce((function(e,r){var t=parseInt(f[r],10);return t&&e.push(t),e}),[])}function j(e,r){var t=e.params;if("video"===r){var n=[];return t.video&&t.video.playerWidth&&t.video.playerHeight?n=[t.video.playerWidth,t.video.playerHeight]:Array.isArray(Object(i.deepAccess)(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?n=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(n=e.sizes[0]),n}var s=[];return Array.isArray(t.sizes)?s=t.sizes:void 0!==Object(i.deepAccess)(e,"mediaTypes.banner.sizes")?s=O(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&e.sizes.length>0?s=O(e.sizes):Object(i.logWarn)("LuponMedia: no sizes are setup or found"),m(s)}Object(n.registerBidder)(x),window.pbjs.installedModules.push("luponmediaBidAdapter")}},[493]);