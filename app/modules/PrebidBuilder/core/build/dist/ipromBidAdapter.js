pbjsChunk([239],{439:function(e,r,t){e.exports=t(440)},440:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return o}));var i=t(0),n=t(1),o={code:"iprom",isBidRequestValid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.bidder,t=e.params,n=void 0===t?{}:t;return n.id?"string"!=typeof n.id?(Object(i.logError)("".concat(r,": Parameter 'id' needs to be a string")),!1):n.dimension?"string"==typeof n.dimension||(Object(i.logError)("".concat(r,": Parameter 'dimension' needs to be a string")),!1):(Object(i.logError)("".concat(r,": Required parameter 'dimension' missing")),!1):(Object(i.logError)("".concat(r,": Parameter 'id' missing")),!1)},buildRequests:function(e,r){var t={bids:e,referer:r.refererInfo,version:"v1.0.2"};return{method:"POST",url:"https://core.iprom.net/programmatic",data:JSON.stringify(t)}},interpretResponse:function(e,r){var t=e.body,i=[];return t.forEach((function(e){var r={ad:e.ad,requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency||"EUR",netRevenue:e.netRevenue||true,ttl:e.ttl||360,meta:{}};e.aDomains&&e.aDomains.length&&(r.meta.advertiserDomains=e.aDomains),i.push(r)})),i}};Object(n.registerBidder)(o),window.pbjs.installedModules.push("ipromBidAdapter")}},[439]);