pbjsChunk([201],{537:function(e,t,r){e.exports=r(538)},538:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return s}));var i=r(0),n=r(3),d=r(1);function a(e){var t=e.bidId,r=e.params,i=r.placementId,n=r.position,d=r.response,a=r.bidfloor,o={placementId:i,id:t,position:n||0,response:d||0};return void 0!==a&&(o.bidfloor=a),o}function o(e){var t=n.b.getConfig("mytarget.sitename");if(!t){var r=document.createElement("a");r.href=decodeURIComponent(e),t=r.hostname}return t}var s={code:"mytarget",isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,t){var r="";return t&&t.refererInfo&&(r=t.refererInfo.referer),{method:"POST",url:"//ad.mail.ru/hbid_prebid/",data:{places:Object(i._map)(e,a),site:{sitename:o(r),page:r},settings:{currency:"RUB",windowSize:{width:window.screen.width,height:window.screen.height}}}}},interpretResponse:function(e,t){var r=e.body;return r.bids?Object(i._map)(r.bids,(function(e){var t={requestId:e.id,cpm:e.price,width:e.size.width,height:e.size.height,ttl:e.ttl||180,currency:e.currency||"RUB",creativeId:e.creativeId||Math.random().toString(16).substring(2),netRevenue:!0,meta:{advertiserDomains:e.adomain&&e.adomain.length>0?e.adomain:[]}};return e.adm?t.ad=e.adm:t.adUrl=e.displayUrl,t})):[]}};Object(d.registerBidder)(s),window.pbjs.installedModules.push("mytargetBidAdapter")}},[537]);