pbjsChunk([400],{52:function(e,t,i){e.exports=i(53)},53:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"spec",(function(){return a}));var n=i(0),r=i(3),d=i(1),o=i(2),a={code:"ablida",supportedMediaTypes:[o.b,o.c,o.d],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,t){return 0===e.length?[]:e.map((function(e){var i=[];e.mediaTypes&&e.mediaTypes[o.b]&&e.mediaTypes[o.b].sizes?i=e.mediaTypes[o.b].sizes:e.mediaTypes[o.d]&&e.mediaTypes[o.d].playerSize&&(i=e.mediaTypes[o.d].playerSize);var n="atob"in window&&"currentScript"in document,r=function(){var e=navigator.userAgent,t=window.top;if(/(ipad|xoom|sch-i800|playbook|silk|tablet|kindle)|(android(?!.*mobi))/i.test(e))return"tablet";if(/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(e))return"connectedtv";if(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Windows\sCE|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(e))return"smartphone";if((t.innerWidth||t.document.documentElement.clientWidth||t.document.body.clientWidth)>320)return"desktop";return"other"}();return{method:"POST",url:"https://bidder.ablida.net/prebid",data:{placementId:e.params.placementId,sizes:i,bidId:e.bidId,categories:e.params.categories,referer:t.refererInfo.referer,jaySupported:n,device:r,adapterVersion:5,mediaTypes:e.mediaTypes,gdprConsent:t.gdprConsent}}}))},interpretResponse:function(e,t){var i=[];return e.body.forEach((function(e){e.ttl=r.b.getConfig("_bidderTimeout"),i.push(e)})),i},onBidWon:function(e){e.nurl&&Object(n.triggerPixel)(e.nurl)}};Object(d.registerBidder)(a),window.pbjs.installedModules.push("ablidaBidAdapter")}},[52]);