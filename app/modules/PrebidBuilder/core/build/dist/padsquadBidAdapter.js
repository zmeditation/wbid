pbjsChunk([180],{587:function(e,n,t){e.exports=t(588)},588:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"spec",(function(){return a}));var r=t(0),i=t(1),s=t(2),a={code:"padsquad",supportedMediaTypes:[s.b],isBidRequestValid:function(e){return!!e.params.unitId&&"string"==typeof e.params.unitId||!!e.params.networkId&&"string"==typeof e.params.networkId||!!e.params.publisherId&&"string"==typeof e.params.publisherId},buildRequests:function(e,n){if(e&&n){var t=e[0].params.publisherId,r=e[0].params.networkId,i=e.map((function(e){return{id:e.bidId,banner:{format:e.sizes.map((function(e){return{w:e[0],h:e[1]}}))},ext:{exchange:{unitId:e.params.unitId}}}})),s={id:n.auctionId,imp:i,site:{domain:window.location.hostname,page:window.location.href,ref:n.refererInfo&&n.refererInfo.referer||null},ext:{exchange:{publisherId:t,networkId:r}}};return n.gdprConsent&&(s.regs={ext:{gdpr:n.gdprConsent.gdprApplies?1:0}},s.user={ext:{consent:n.gdprConsent.consentString}}),{method:"POST",url:"https://x.padsquad.com/auction",data:JSON.stringify(s)}}},interpretResponse:function(e,n){var t=[],i=(e||{}).body;return i&&i.seatbid&&1===i.seatbid.length&&i.seatbid[0].bid&&i.seatbid[0].bid.length?i.seatbid[0].bid.forEach((function(e){t.push({requestId:e.impid,cpm:e.price,width:e.w,height:e.h,ad:e.adm,ttl:30,creativeId:e.crid,meta:{advertiserDomains:e.adomain},netRevenue:true,currency:"USD"})})):Object(r.logInfo)("padsquad.interpretResponse :: no valid responses to interpret"),t},getUserSyncs:function(e,n){Object(r.logInfo)("padsquad.getUserSyncs","syncOptions",e,"serverResponses",n);var t=[];return e.iframeEnabled||e.pixelEnabled?(n.forEach((function(n){var i=Object(r.deepAccess)(n,"body.ext.usersync");if(i){var s=[];Object.keys(i).forEach((function(e){var n=i[e];n.syncs&&n.syncs.length&&(s=s.concat(n.syncs))})),s.forEach((function(e){t.push({type:"iframe"===e.type?"iframe":"image",url:e.url})})),e.iframeEnabled||(t=t.filter((function(e){return"iframe"!==e.type}))),e.pixelEnabled||(t=t.filter((function(e){return"image"!==e.type})))}})),t):t}};Object(i.registerBidder)(a),window.pbjs.installedModules.push("padsquadBidAdapter")}},[587]);