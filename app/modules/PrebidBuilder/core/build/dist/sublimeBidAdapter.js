pbjsChunk([131],{740:function(e,t,n){e.exports=n(741)},741:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=m,n.d(t,"state",(function(){return b})),t.setState=f,t.sendEvent=I,n.d(t,"spec",(function(){return y}));var i=n(0),o=n(1),r=n(3);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var s="0.8.0";function u(){return(/(?:phone|windows\s+phone|ipod|blackberry|Galaxy Nexus|SM-G892A|(?:android|bbd+|meego|silk|googlebot) .+?mobile|palm|windows\s+ce|opera mini|avantgo|docomo)/i.test(navigator.userAgent)?"m":/(?:ipad|playbook|Tablet|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)&&"t")||"d"}var c=/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;function p(e){return c.test(e)}function m(e,t){Object(i.logInfo)("SublimeBidAdapter - "+e,t)}var b={zoneId:"",transactionId:"",notifyId:"",timeout:r.b.getConfig("bidderTimeout")};function f(e){a(b,e),m("State has been updated :",b)}function l(e){var t=window.sublime=window.sublime||{},n=e.notifyId||t.notifyId;return n||m("generating a notifyId",n=Object(i.generateUUID)()),t.notifyId||(t.notifyId=n),n}function I(e,t){var n=Date.now(),o={t:n,tse:n,z:b.zoneId,e:e,src:"pa",puid:b.transactionId||b.notifyId,notid:b.notifyId||"",pbav:s,pubtimeout:b.timeout,pubpbv:"6.10.0-pre",device:u()};"bidwon"===e&&(o.sspname=t||""),m("Sending pixel for event: "+e,o);var r=Object(i.formatQS)(o);Object(i.triggerPixel)("https://antenna.ayads.co/?"+r)}var y={code:"sublime",gvlid:114,aliases:[],isBidRequestValid:function(e){var t=l(e.params);return p(t)?t!==window.sublime.notifyId?(m("notifyId mismatch: params [".concat(e.params.notifyId,"] / sublime [").concat(window.sublime.notifyId,"]")),!1):!!Number(e.params.zoneId):(m('invalid notifyId format, got "'.concat(t,'"')),!1)},buildRequests:function(e,t){var n={pbav:s,prebidVersion:"6.10.0-pre",currencyCode:r.b.getConfig("currency.adServerCurrency")||"EUR",timeout:"object"===d(t)&&t?t.timeout:r.b.getConfig("bidderTimeout")};return f({timeout:n.timeout}),t&&t.refererInfo&&(n.referer=t.refererInfo.referer,n.numIframes=t.refererInfo.numIframes),t&&t.gdprConsent&&(n.gdprConsent=t.gdprConsent.consentString,n.gdpr=t.gdprConsent.gdprApplies),e.map((function(e){var t=e.params.bidHost||"pbjs.sskzlabs.com",i=e.params.protocol||"https",o=l(e.params);f({transactionId:e.transactionId,notifyId:o,zoneId:e.params.zoneId,debug:e.params.debug||!1});var r={adUnitCode:e.adUnitCode,auctionId:e.auctionId,bidder:e.bidder,bidderRequestId:e.bidderRequestId,bidRequestsCount:e.bidRequestsCount,requestId:e.bidId,sizes:e.sizes.map((function(e){return{w:e[0],h:e[1]}})),transactionId:e.transactionId,notifyId:o,zoneId:e.params.zoneId},d=a({},n,r);return{method:"POST",url:i+"://"+t+"/bid",data:JSON.stringify(d),options:{contentType:"text/plain",withCredentials:!1}}}))},interpretResponse:function(e,t){var n=[],i=e.body;if(i){if(i.timeout||!i.ad||/<!--\s+No\s+ad\s+-->/gim.test(i.ad))return n;var o={width:1800,height:1e3};t&&t.data&&1===t.data.w&&1===t.data.h&&(o={width:1,height:1});var r={requestId:i.requestId||"",cpm:i.cpm||0,width:i.width||o.width,height:i.height||o.height,creativeId:i.creativeId||1,dealId:i.dealId||1,currency:i.currency||"EUR",netRevenue:i.netRevenue||!0,ttl:i.ttl||600,ad:i.ad,pbav:s,sspname:i.sspname||null};i.advertiserDomains&&(r.meta=a({},r.meta,{advertiserDomains:[]})),n.push(r)}return n},onBidWon:function(e){m("Bid won",e),I("bidwon",e.sspname)},onTimeout:function(e){m("Timeout from adapter",e);var t=Object(i.deepAccess)(e,"0.timeout");t&&f({timeout:t}),I("bidtimeout")},sendEvent:I,setState:f,state:b,detectDevice:u,getNotifyId:l,isValidNotifyId:p};Object(o.registerBidder)(y),window.pbjs.installedModules.push("sublimeBidAdapter")}},[740]);