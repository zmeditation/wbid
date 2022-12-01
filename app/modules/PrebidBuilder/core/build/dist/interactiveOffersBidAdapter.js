pbjsChunk([243],{429:function(e,i,r){e.exports=r(430)},430:function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),r.d(i,"spec",(function(){return p}));var t=r(0),n=r(1),a=r(2),s=r(3),d={OpenRTBBidRequest:{},OpenRTBBidRequestSite:{},OpenRTBBidRequestSitePublisher:{},OpenRTBBidRequestSiteContent:{language:navigator.language},OpenRTBBidRequestSource:{},OpenRTBBidRequestDevice:{ua:navigator.userAgent,language:navigator.language},OpenRTBBidRequestUser:{},OpenRTBBidRequestImp:{},OpenRTBBidRequestImpBanner:{},PrebidBid:{currency:"USD",ttl:60,netRevenue:!1}},p={code:"interactiveOffers",supportedMediaTypes:[a.b],isBidRequestValid:function(e){var i=!0;return e&&e.params?(e.params.partnerId||(Object(t.logWarn)("partnerId must be a valid ID"),i=!1),e.params.tmax&&!Object(t.isNumber)(e.params.tmax)&&(Object(t.logWarn)("tmax must be a valid numeric ID"),i=!1)):(Object(t.logWarn)("invalid request"),i=!1),i},buildRequests:function(e,i){var r,t,n,a,p,u,o=(r=i,t={payload:{},partnerId:null},n=window.location.href,a=window.location.hostname,p="https:"==window.location.protocol?1:0,(u=JSON.parse(JSON.stringify(d.OpenRTBBidRequest))).id=r.auctionId,u.ext={refererInfo:r.refererInfo,auctionId:r.auctionId},u.site=JSON.parse(JSON.stringify(d.OpenRTBBidRequestSite)),u.site.id=a,u.site.name=a,u.site.domain=a,u.site.page=n,u.site.ref=r.refererInfo.referer,u.site.publisher=JSON.parse(JSON.stringify(d.OpenRTBBidRequestSitePublisher)),u.site.publisher.id=0,u.site.publisher.name=s.b.getConfig("publisherDomain"),u.site.publisher.domain=a,u.site.publisher.domain=a,u.site.content=JSON.parse(JSON.stringify(d.OpenRTBBidRequestSiteContent)),u.source=JSON.parse(JSON.stringify(d.OpenRTBBidRequestSource)),u.source.fd=0,u.source.tid=r.auctionId,u.source.pchain="",u.device=JSON.parse(JSON.stringify(d.OpenRTBBidRequestDevice)),u.user=JSON.parse(JSON.stringify(d.OpenRTBBidRequestUser)),u.imp=[],r.bids.forEach((function(e){t.partnerId||(t.partnerId=e.params.partnerId);var i=JSON.parse(JSON.stringify(d.OpenRTBBidRequestImp));i.id=e.bidId,i.secure=p,i.tagid=e.adUnitCode,i.ext={rawdata:e},u.site.publisher.id=u.site.publisher.id||0,u.tmax=u.tmax||e.params.tmax||0,Object.keys(e.mediaTypes).forEach((function(r){"banner"==r&&(i.banner=JSON.parse(JSON.stringify(d.OpenRTBBidRequestImpBanner)),i.banner.w=0,i.banner.h=0,i.banner.format=[],e.mediaTypes[r].sizes.forEach((function(e){i.banner.w||(i.banner.w=e[0],i.banner.h=e[1]),i.banner.format.push({w:e[0],h:e[1]})})))})),u.imp.push(i)})),t.payload=u,t),c=o.payload;return{method:"POST",url:"https://prebid.ioadx.com/bidRequest/?partnerId="+o.partnerId,data:JSON.stringify(c),bidderRequest:i}},interpretResponse:function(e,i){var r,t,n=[];return e.body&&(e.body.length||(e.body=[e.body]),r=e.body,t=[],r.forEach((function(e){e.seatbid&&e.seatbid.forEach&&e.seatbid.forEach((function(e){e.bid&&e.bid.forEach&&e.bid.forEach((function(e){var i=JSON.parse(JSON.stringify(d.PrebidBid));i.requestId=e.impid,i.ad=e.adm,i.creativeId=e.crid,i.cpm=e.price,i.width=e.w,i.height=e.h,i.mediaType="banner",i.meta={advertiserDomains:e.adomain,advertiserId:e.adid,mediaType:"banner",primaryCatId:e.cat[0]||"",secondaryCatIds:e.cat},t.push(i)}))}))})),n=t),n}};Object(n.registerBidder)(p),window.pbjs.installedModules.push("interactiveOffersBidAdapter")}},[429]);