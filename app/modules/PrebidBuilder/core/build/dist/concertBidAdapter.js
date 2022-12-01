pbjsChunk([319],{256:function(e,t,n){e.exports=n(257)},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return i}));var r=n(0),o=n(1),s=n(7);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={code:"concert",isBidRequestValid:function(e){return!!e.params.partnerId||(Object(r.logWarn)("Missing partnerId bid parameter"),!1)},buildRequests:function(e,t){Object(r.logMessage)(e),Object(r.logMessage)(t);var n={meta:{prebidVersion:"6.10.0-pre",pageUrl:t.refererInfo.referer,screen:[window.screen.width,window.screen.height].join("x"),debug:Object(r.debugTurnedOn)(),uid:d(t),optedOut:u(),adapterVersion:"1.1.1",uspConsent:t.uspConsent,gdprConsent:t.gdprConsent}};return n.slots=e.map((function(e){return{name:e.adUnitCode,bidId:e.bidId,transactionId:e.transactionId,sizes:e.params.sizes||e.sizes,partnerId:e.params.partnerId,slotType:e.params.slotType,adSlot:e.params.slot||e.adUnitCode,placementId:e.params.placementId||"",site:e.params.site||t.refererInfo.referer}})),Object(r.logMessage)(n),{method:"POST",url:"".concat("https://bids.concert.io","/bids/prebid"),data:JSON.stringify(n)}},interpretResponse:function(e,t){Object(r.logMessage)(e),Object(r.logMessage)(t);var n=e.body;if(!n||"object"!==a(n))return[];var o;return o=n.bids.map((function(e){return{requestId:e.bidId,cpm:e.cpm,width:e.width,height:e.height,ad:e.ad,ttl:e.ttl,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]},creativeId:e.creativeId,netRevenue:e.netRevenue,currency:e.currency}})),Object(r.debugTurnedOn)()&&n.debug&&Object(r.logMessage)("CONCERT",n.debug),Object(r.logMessage)(o),o},getUserSyncs:function(e,t,n,r){var o=[];if(e.iframeEnabled&&!u()){var s=[];n&&"boolean"==typeof n.gdprApplies&&s.push("gdpr_applies=".concat(n.gdprApplies?"1":"0")),n&&"string"==typeof n.consentString&&s.push("gdpr_consent=".concat(n.consentString)),r&&"string"==typeof r&&s.push("usp_consent=".concat(r)),o.push({type:"iframe",url:"https://cdn.concert.io/lib/bids/sync.html"+(s.length>0?"?".concat(s.join("&")):"")})}return o},onTimeout:function(e){Object(r.logMessage)("concert bidder timed out"),Object(r.logMessage)(e)},onBidWon:function(e){Object(r.logMessage)("concert bidder won bid"),Object(r.logMessage)(e)}};Object(o.registerBidder)(i);var c=Object(s.b)();function d(e){if(u()||!function(e){return!("string"===e.uspConsent&&"1YY"===e.uspConsent.toUpperCase().substring(0,2))}(e))return!1;var t="c_uid",n=c.getDataFromLocalStorage(t);return n||(n=Object(r.generateUUID)(),c.setDataInLocalStorage(t,n)),n}function u(){return"true"===c.getDataFromLocalStorage("c_nap")}window.pbjs.installedModules.push("concertBidAdapter")}},[256]);