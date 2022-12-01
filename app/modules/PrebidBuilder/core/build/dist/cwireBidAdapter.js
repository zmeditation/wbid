pbjsChunk([308],{282:function(e,t,r){e.exports=r(283)},283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"ENDPOINT_URL",(function(){return j})),r.d(t,"RENDERER_URL",(function(){return f})),r.d(t,"CW_PAGE_VIEW_ID",(function(){return I})),t.getSlotSizes=v,t.getAllMediaSizes=y,r.d(t,"mapSlotsData",(function(){return w})),r.d(t,"spec",(function(){return E}));var a=r(1),n=r(18),d=r(7),i=r(2),c=r(17),s=r(0),o=r(13),u=r(11),p=r.n(u);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O="cwire",j="https://embed.cwi.re/delivery/prebid",f="https://cdn.cwi.re/prebid/renderer/LATEST/renderer.min.js",I=Object(s.generateUUID)(),g=Object(d.b)();function v(e){return Object(s.parseSizesInput)(y(e))}function y(e){var t=Object(s.deepAccess)(e,"mediaTypes.video.playerSize"),r=Object(s.deepAccess)(e,"mediaTypes.video.sizes"),a=Object(s.deepAccess)(e,"mediaTypes.banner.sizes"),n=[];return Object(s.isArray)(t)&&t.forEach((function(e){n.push(e)})),Object(s.isArray)(r)&&r.forEach((function(e){n.push(e)})),Object(s.isArray)(a)&&a.forEach((function(e){n.push(e)})),n}var h=function(e){var t=Object(s.getParameterByName)(e);return""===t&&(t=null),t},w=function(e){var t=[];return e.forEach((function(e){var r={},a=Object(s.getValue)(e.params,"placementId"),n=Object(s.getValue)(e.params,"pageId"),d=Object(s.getValue)(e.params,"adUnitElementId");r.auctionId=Object(s.getBidIdParameter)("auctionId",e),r.adUnitCode=Object(s.getBidIdParameter)("adUnitCode",e),r.adUnitElementId=d,r.bidId=Object(s.getBidIdParameter)("bidId",e),r.bidderRequestId=Object(s.getBidIdParameter)("bidderRequestId",e),r.placementId=a,r.pageId=n,r.mediaTypes=Object(s.getBidIdParameter)("mediaTypes",e),r.transactionId=Object(s.getBidIdParameter)("transactionId",e),r.sizes=v(e),t.push(r)})),t},E={code:O,supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){return e.params=e.params||{},e.params.adUnitElementId||(e.params.adUnitElementId=e.code),e.params.placementId&&Object(s.isNumber)(e.params.placementId)?!(!e.params.pageId||!Object(s.isNumber)(e.params.pageId))||(Object(s.logError)("pageId not provided"),!1):(Object(s.logError)("placementId not provided or invalid"),!1)},buildRequests:function(e,t){var r,a=[];try{r=Object(n.a)().referer,a=w(e)}catch(e){Object(s.logWarn)(e)}var d=[],i=h("cwcreative"),c=h("cwgroups");null!==c&&(d=c.split(","));var o=g.localStorageIsEnabled()?g.getDataFromLocalStorage("cw_cwid"):null;return{method:"POST",url:j,data:{cwid:o,refgroups:d,cwcreative:i,slots:a,httpRef:r||"",pageViewId:I}}},interpretResponse:function(e,t){var r=[];try{"string"==typeof t.data&&(t.data=JSON.parse(t.data)),e.body.bids.forEach((function(e){var a=p()(t.data.slots,(function(t){return t.bidId===e.requestId})),n=i.b,d={requestId:e.requestId,cpm:e.cpm,bidderCode:O,width:e.dimensions[0],height:e.dimensions[1],creativeId:e.creativeId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,meta:{advertiserDomains:e.adomains?e.advertiserDomains:[]}};if((Object(s.deepAccess)(a,"mediaTypes.banner")&&(d.ad=e.html),Object(s.deepAccess)(a,"mediaTypes.video"))&&(n=i.d,d.vastXml=e.vastXml,d.videoScript=e.html,Object(s.deepAccess)(a,"mediaTypes.video.context")===c.b)){var u=o.a.install({id:d.requestId,adUnitCode:a.adUnitCode,url:f,loaded:!1,config:l(l({},Object(s.deepAccess)(a,"mediaTypes.video")),Object(s.deepAccess)(e,"outstream",{}))});try{d.renderer=u,d.renderer.setRender((function(e){window.CWIRE&&window.CWIRE.outstream&&window.CWIRE.outstream.renderAd(e)}))}catch(e){Object(s.logWarn)("Prebid Error calling setRender on newRenderer",e)}}d.mediaType=n,r.push(d)}))}catch(e){Object(s.logWarn)(e)}return r}};Object(a.registerBidder)(E),window.pbjs.installedModules.push("cwireBidAdapter")}},[282]);