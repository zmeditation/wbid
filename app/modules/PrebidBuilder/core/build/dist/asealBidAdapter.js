pbjsChunk([354],{173:function(e,t,r){e.exports=r(174)},174:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"BIDDER_CODE",(function(){return a})),r.d(t,"API_ENDPOINT",(function(){return d})),r.d(t,"HEADER_AOTTER_VERSION",(function(){return u})),r.d(t,"spec",(function(){return p}));var n=r(1),i=r(2),s=r(3),a="aseal",o=[i.b],d="https://tkprebid.aotter.net/prebid/adapter",u="prebid_0.0.1",p={code:a,aliases:["aotter","trek"],supportedMediaTypes:o,isBidRequestValid:function(e){return!!e.params.placeUid&&"string"==typeof e.params.placeUid},buildRequests:function(e,t){if(0===e.length)return[];var r=s.b.getConfig("aseal.clientId")||"",n={bids:e,refererInfo:t.refererInfo};return[{method:"POST",url:d,data:n,options:{contentType:"application/json",withCredentials:!0,customHeaders:{"x-aotter-clientid":r,"x-aotter-version":u}}}]},interpretResponse:function(e,t){return Array.isArray(e.body)?e.body:[]}};Object(n.registerBidder)(p),window.pbjs.installedModules.push("asealBidAdapter")}},[173]);