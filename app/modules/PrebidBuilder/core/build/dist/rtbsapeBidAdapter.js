pbjsChunk([151],{672:function(e,r,t){e.exports=t(673)},673:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return o}));var n=t(0),s=t(1),a=t(2),d=t(17),i=t(13),o={code:"rtbsape",aliases:["sape"],supportedMediaTypes:[a.b,a.d],isBidRequestValid:function(e){return!!(e&&e.mediaTypes&&(e.mediaTypes.banner||e.mediaTypes.video)&&e.params&&e.params.placeId)},buildRequests:function(e,r){var t=(new Date).getTimezoneOffset(),n=function(e){return e<10?"0"+e:""+e};return{url:"https://ssp-rtb.sape.ru/prebid",method:"POST",data:{auctionId:r.auctionId,requestId:r.bidderRequestId,bids:e,timezone:(t>0?"-":"+")+n(Math.floor(Math.abs(t)/60))+":"+n(Math.abs(t)%60),refererInfo:r.refererInfo}}},interpretResponse:function(e,r){if(!e.body||!Array.isArray(e.body.bids))return[];var t={};return r.data.bids.forEach((function(e){return t[e.bidId]=e})),e.body.bids.filter((function(e){return void 0!==(e.meta||{}).advertiserDomains})).map((function(e){var r=t[e.requestId];if(Object(n.deepAccess)(r,"mediaTypes.video.context")===d.b&&(e.vastUrl||e.vastXml)){var s=i.a.install({id:e.requestId,url:"https://cdn-rtb.sape.ru/js/player.js",loaded:!1}),a=Object(n.deepAccess)(r,"params.video.playerMuted");void 0===a&&(a=!0),e.playerMuted=a,e.renderer=s,s.setRender(u)}return e}))},getUserSyncs:function(e){var r=[];return e.iframeEnabled&&r.push({type:"iframe",url:"https://www.acint.net/mc/?dp=141"}),r},onBidWon:function(e){e.nurl&&Object(n.triggerPixel)(e.nurl)}};function u(e){var r={};e.vastUrl&&(r.url=e.vastUrl),e.vastXml&&(r.xml=e.vastXml),e.renderer.push((function(){var t=window.sapeRtbPlayerHandler(e.adUnitCode,e.width,e.height,e.playerMuted,{singleton:!0});r.onComplete=function(){return t.destroy()},r.onError=function(){return t.destroy()},t.addSlot(r)}))}Object(s.registerBidder)(o),window.pbjs.installedModules.push("rtbsapeBidAdapter")}},[672]);