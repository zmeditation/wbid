pbjsChunk([245],{425:function(e,r,t){e.exports=t(426)},426:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return d})),r.getBidFloor=p;var a=t(0),n=t(1),s=t(7),i=t(2),o=Object(s.b)(),d={code:"integr8",supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){return!!(e.params&&e.params.propertyId&&e.params.placementId)},buildRequests:function(e,r){var t=o.localStorageIsEnabled()&&o.getDataFromLocalStorage("bisko-sid")||"",n=o.localStorageIsEnabled()&&o.getDataFromLocalStorage("biskoId")||"",s=o.localStorageIsEnabled()&&JSON.parse(o.getDataFromLocalStorage("biskoSegments"))||[],i="",d="",c="",l="",u=[],m={};r&&(c=r.bidderRequestId,r.refererInfo&&(l=r.refererInfo.referer));var g=e.map((function(e){return i||(i=e.params.propertyId),d||(d=e.params.pageViewGuid||""),!u.length&&e.params.contents&&e.params.contents.length&&(u=e.params.contents),!Object.keys(m).length&&e.params.data&&Object.keys(e.params.data).length&&(m=e.params.data),{sizes:(r=e.sizes,r.map((function(e){return e.join("x")})).join(";")),adUnitId:e.adUnitCode,placementId:e.params.placementId,bidid:e.bidId,count:e.params.count,skipTime:Object(a.deepAccess)(e,"mediaTypes.video.skipafter",e.params.skipTime),floor:p(e)};var r}));return[{method:"POST",url:"https://integr8.central.gjirafa.tech/bid",data:{propertyId:i,pageViewGuid:d,storageId:t,biskoId:n,segments:s,url:l,requestid:c,placements:g,contents:u,data:m}}]},interpretResponse:function(e){for(var r=e.body,t=[],a=0;a<r.length;a++){var n={requestId:r[a].BidId,cpm:r[a].CPM,width:r[a].Width,height:r[a].Height,creativeId:r[a].CreativeId,currency:r[a].Currency,netRevenue:r[a].NetRevenue,ttl:r[a].TTL,referrer:r[a].Referrer,ad:r[a].Ad,vastUrl:r[a].VastUrl,mediaType:r[a].MediaType,meta:{advertiserDomains:Array.isArray(r[a].ADomain)?r[a].ADomain:[]}};t.push(n)}return t}};function p(e){if(!Object(a.isFn)(e.getFloor))return null;var r=e.getFloor({currency:"EUR",mediaType:"*",size:"*"});return Object(a.isPlainObject)(r)&&!isNaN(r.floor)&&"EUR"===r.currency?r.floor:null}Object(n.registerBidder)(d),window.pbjs.installedModules.push("integr8BidAdapter")}},[425]);