pbjsChunk([212],{565:function(e,t,n){e.exports=n(566)},566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return o});var i=n(0),r=n(1),d=n(2),a=n(11);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o={code:"loopme",supportedMediaTypes:[d.b,d.d],isBidRequestValid:function(e){return"object"===c(e.params)&&!!e.params.ak},buildRequests:function(e,o){return e.map(function(e){e.startTime=(new Date).getTime();var t=e.params;o&&o.gdprConsent&&(t.user_consent=o.gdprConsent.consentString);var n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push([n,e[n]]);return t}(t).map(function(e){return"".concat(e[0],"=").concat(encodeURI(e[1]))}).join("&"),r="&sizes="+(e.mediaTypes[d.b]?i.getAdUnitSizes(e):i.deepAccess(e.mediaTypes,"video.playerSize")).map(function(e){return"".concat(e[0],"x").concat(e[1])}).join("&sizes="),n="".concat(n).concat(r).concat(e.mediaTypes[d.d]?"&media_type=video":"");return{method:"GET",url:"".concat("https://loopme.me/api/hb"),options:{withCredentials:!1},bidId:e.bidId,data:n}})},interpretResponse:function(e,t){var n=1<arguments.length?t:void 0,r=(0<arguments.length&&void 0!==e?e:{}).body;if(null===r||"object"!==c(r))return[];if(!r.hasOwnProperty("ad")&&!r.hasOwnProperty("vastUrl"))return[];if(r.vastUrl){var o=a.a.install({id:n.bidId,url:"https://i.loopme.me/html/vast/loopme_flex.js",loaded:!1});return o.setRender(function(n){o.push(function(){var e=[{type:"VAST",url:n.vastUrl,autoClose:-1}],t={containerId:n.adUnitCode,vastTimeout:250,ads:e,user_consent:"%%USER_CONSENT%%"};window.L.flex.loader.load(t)})}),[{requestId:n.bidId,cpm:r.cpm,width:r.width,height:r.height,ttl:r.ttl,currency:r.currency,creativeId:r.creativeId,dealId:r.dealId,netRevenue:r.netRevenue,vastUrl:r.vastUrl,mediaType:d.d,renderer:o}]}return[{requestId:n.bidId,cpm:r.cpm,width:r.width,height:r.height,ad:r.ad,ttl:r.ttl,currency:r.currency,creativeId:r.creativeId,dealId:r.dealId,netRevenue:r.netRevenue,mediaType:d.b}]}};Object(r.registerBidder)(o)}},[565]);