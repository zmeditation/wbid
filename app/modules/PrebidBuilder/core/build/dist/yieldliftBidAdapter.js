pbjsChunk([84],{845:function(e,t,n){e.exports=n(846)},846:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return a}));var r=n(0),i=n(1),s=n(2),a={code:"yieldlift",aliases:["yl"],supportedMediaTypes:[s.b],isBidRequestValid:function(e){return!!e.params.unitId&&"string"==typeof e.params.unitId||!!e.params.networkId&&"string"==typeof e.params.networkId||!!e.params.publisherId&&"string"==typeof e.params.publisherId},buildRequests:function(e,t){if(e&&t){var n=e[0].params.publisherId,i=e[0].params.networkId,s=e.map((function(e){return{id:e.bidId,banner:{format:e.mediaTypes.banner.sizes.map((function(e){return{w:e[0],h:e[1]}}))},ext:{exchange:{unitId:e.params.unitId}}}})),a={id:t.auctionId,imp:s,site:{domain:window.location.hostname,page:window.location.href,ref:t.refererInfo&&t.refererInfo.referer||null},ext:{exchange:{publisherId:n,networkId:i}}};return e[0].schain&&Object(r.deepSetValue)(a,"source.ext.schain",e[0].schain),t.gdprConsent&&(Object(r.deepSetValue)(a,"user.ext.consent",t.gdprConsent.consentString),Object(r.deepSetValue)(a,"regs.ext.gdpr",t.gdprConsent.gdprApplies?1:0)),t.uspConsent&&Object(r.deepSetValue)(a,"regs.ext.us_privacy",t.uspConsent),{method:"POST",url:"https://x.yieldlift.com/auction",data:JSON.stringify(a)}}},interpretResponse:function(e){var t=[],n=(e||{}).body;return n&&n.seatbid&&1===n.seatbid.length&&n.seatbid[0].bid&&n.seatbid[0].bid.length?n.seatbid[0].bid.forEach((function(e){t.push({requestId:e.impid,cpm:e.price,width:e.w,height:e.h,ad:e.adm,ttl:30,creativeId:e.crid,netRevenue:true,currency:"USD",meta:{adomain:e.adomain}})})):Object(r.logInfo)("yieldlift.interpretResponse :: no valid responses to interpret"),t},getUserSyncs:function(e,t){Object(r.logInfo)("yieldlift.getUserSyncs","syncOptions",e,"serverResponses",t);var n=[];return e.iframeEnabled||e.pixelEnabled?(t.forEach((function(t){var i=Object(r.deepAccess)(t,"body.ext.usersync");if(i){var s=[];Object.keys(i).forEach((function(e){var t=i[e];t.syncs&&t.syncs.length&&(s=s.concat(t.syncs))})),s.forEach((function(e){n.push({type:"iframe"===e.type?"iframe":"image",url:e.url})})),e.iframeEnabled||(n=n.filter((function(e){return"iframe"!==e.type}))),e.pixelEnabled||(n=n.filter((function(e){return"image"!==e.type})))}})),Object(r.logInfo)("yieldlift.getUserSyncs result=%o",n),n):n}};Object(i.registerBidder)(a),window.pbjs.installedModules.push("yieldliftBidAdapter")}},[845]);