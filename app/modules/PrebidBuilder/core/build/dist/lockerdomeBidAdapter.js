pbjsChunk([225],{481:function(e,n,r){e.exports=r(482)},482:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"spec",(function(){return s}));var t=r(0),d=r(2),i=r(1),s={code:"lockerdome",supportedMediaTypes:[d.b],isBidRequestValid:function(e){return!!e.params.adUnitId},buildRequests:function(e,n){var r,d=e.map((function(e){return e.schain&&(r=r||e.schain),{requestId:e.bidId,adUnitCode:e.adUnitCode,adUnitId:Object(t.getBidIdParameter)("adUnitId",e.params),sizes:e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes}})),i=n&&n.refererInfo&&n.refererInfo.canonicalUrl||"",s=n&&n.refererInfo&&n.refererInfo.referer||"",o={bidRequests:d,url:encodeURIComponent(i),referrer:encodeURIComponent(s)};return r&&(o.schain=r),n&&(n.gdprConsent&&(o.gdpr={applies:n.gdprConsent.gdprApplies,consent:n.gdprConsent.consentString}),n.uspConsent&&(o.us_privacy={consent:n.uspConsent})),{method:"POST",url:"https://lockerdome.com/ladbid/prebid",data:JSON.stringify(o)}},interpretResponse:function(e,n){return e&&e.body&&e.body.bids?e.body.bids.map((function(e){return{requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:e.netRevenue,ad:e.ad,ttl:e.ttl,meta:{advertiserDomains:e.adomain&&Array.isArray(e.adomain)?e.adomain:[]}}})):[]}};Object(i.registerBidder)(s),window.pbjs.installedModules.push("lockerdomeBidAdapter")}},[481]);