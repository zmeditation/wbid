pbjsChunk([374],{170:function(e,r,a){e.exports=a(171)},171:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.resetUserSync=function(){d=!1},a.d(r,"spec",function(){return h}),r.hasValidSupplyChainParams=t;var l=a(0),n=a(1),d=!1;var h={code:"aardvark",gvlid:52,aliases:["adsparc","safereach"],isBidRequestValid:function(e){return"string"==typeof e.params.ai&&!!e.params.ai.length&&"string"==typeof e.params.sc&&!!e.params.sc.length},buildRequests:function(e,a){var n,t=[],s=[],i={},o=a.refererInfo.referer,d=[],p="",c=window.innerWidth,u=window.innerHeight;try{var r=l.getWindowTop();r.rtkcategories&&Array.isArray(r.rtkcategories)&&(d=r.rtkcategories),c=r.innerWidth,u=r.innerHeight}catch(e){}return l.isStr(l.deepAccess(e,"0.userId.tdid"))&&(p=e[0].userId.tdid),n=h.serializeSupplyChain(l.deepAccess(e,"0.schain")),l._each(e,function(e){var r=i[e.params.ai];r||(r={shortCodes:[],payload:{version:1,jsonp:!1,rtkreferer:o,w:c,h:u},endpoint:"bidder.rtk.io"},p&&(r.payload.tdid=p),n&&(r.payload.schain=n),d&&d.length&&(r.payload.categories=d.slice(0)),e.params.categories&&e.params.categories.length&&(r.payload.categories=r.payload.categories||[],l._each(e.params.categories,function(e){r.payload.categories.push(e)})),a.gdprConsent&&(r.payload.gdpr=!1,"boolean"==typeof a.gdprConsent.gdprApplies&&(r.payload.gdpr=a.gdprConsent.gdprApplies),r.payload.gdpr&&(r.payload.consent=a.gdprConsent.consentString)),i[e.params.ai]=r,t.push(e.params.ai)),a.uspConsent&&(r.payload.us_privacy=a.uspConsent),r.shortCodes.push(e.params.sc),r.payload[e.params.sc]=e.bidId,"string"==typeof e.params.host&&e.params.host.length&&e.params.host!==r.endpoint&&(r.endpoint=e.params.host)}),l._each(t,function(e){var r=i[e];s.push({method:"GET",url:"https://".concat(r.endpoint,"/").concat(e,"/").concat(r.shortCodes.join("_"),"/aardvark"),data:r.payload,bidderRequest:a})}),s},interpretResponse:function(e){var n=[];return Array.isArray(e.body)||(e.body=[e.body]),l._each(e.body,function(e){var r=+(e.cpm||0);if(r){var a={requestId:e.cid,cpm:r,width:e.width||0,height:e.height||0,currency:e.currency?e.currency:"USD",netRevenue:!e.netRevenue||e.netRevenue,ttl:e.ttl?e.ttl:300,creativeId:e.creativeId||0};switch(e.hasOwnProperty("dealId")&&(a.dealId=e.dealId),e.hasOwnProperty("ex")&&(a.ex=e.ex),e.media){case"banner":a.ad=e.adm+l.createTrackPixelHtml(decodeURIComponent(e.nurl));break;default:return l.logError("bad Aardvark response (media)",e)}n.push(a)}}),n},getUserSyncs:function(e,r,a,n){var t=[],s=[],i=!1;if(a&&"boolean"==typeof a.gdprApplies&&(i=a.gdprApplies),!e.iframeEnabled)return l.logWarn("Aardvark: Please enable iframe based user sync."),t;if(d)return t;d=!0,i&&(s.push(["g","1"]),s.push(["c",a.consentString])),n&&s.push(["us_privacy",n]);var o="";return s.length&&(o="?"+s.map(function(e){return e[0]+"="+encodeURIComponent(e[1])}).join("&")),t.push({type:"iframe",url:"https://".concat("sync.rtk.io","/cs").concat(o)}),t},serializeSupplyChain:function(e){return t(e)?"".concat(e.ver,",").concat(e.complete,"!").concat(h.serializeSupplyChainNodes(e.nodes)):""},serializeSupplyChainNodes:function(e){var a=["asi","sid","hp","rid","name","domain"];return e.map(function(r){return a.map(function(e){return encodeURIComponent(r[e]||"")}).join(",")}).join("!")}};function t(e){if(!e||!e.nodes)return!1;var a=["asi","sid","hp"],r=e.nodes.reduce(function(e,r){return e?a.every(function(e){return r[e]}):e},!0);return r||l.logError("Aardvark: required schain params missing"),r}Object(n.registerBidder)(h)}},[170]);