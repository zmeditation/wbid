pbjsChunk([180],{637:function(e,r,n){e.exports=n(638)},638:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return a});var i=n(11),d=n(4),s=n(0),t=n(1),o=n(2);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e}).apply(this,arguments)}var u=1,l=2,a={code:"open8",supportedMediaTypes:[o.d,o.b],isBidRequestValid:function(e){return!!e.params.slotKey},buildRequests:function(e){for(var r=[],n=0;n<e.length;n++){var d=e[n],t=s.getBidIdParameter("slotKey",d.params),a=s.tryAppendQueryString("","slot_key",t);a=s.tryAppendQueryString(a,"imp_id",function(){for(var e="abcdefghijklmnopqrstuvwsyz0123456789",r=e.length,n="",d=0;d<16;d++)n+=e[Math.floor(Math.random()*r)];return n}()),a+="bid_id="+d.bidId,r.push({method:"GET",url:"https://as.vt.open8.com/v1/control/prebid",data:a})}return r},interpretResponse:function(e){var r=e.body;if(!r.isAdReturn)return[];var n=r.ad,d={slotKey:r.slotKey,userId:r.userId,impId:r.impId,media:r.media,ds:n.ds,spd:n.spd,fa:n.fa,pr:n.pr,mr:n.mr,nurl:n.nurl,requestId:n.bidId,cpm:n.price,creativeId:n.creativeId,dealId:n.dealId,currency:n.currency||"JPY",netRevenue:!0,ttl:360};if(n.adType===u){var t=r.ad.video;p(d,{vastXml:t.vastXml,width:t.w,height:t.h,renderer:function(e){var r=i.a.install({id:e.ad.bidId,url:e.ad.video.purl,loaded:!1});try{r.setRender(c)}catch(e){s.logWarn("Prebid Error calling setRender on newRenderer",e)}return r}(r),adResponse:r,mediaType:o.d})}else if(n.adType===l){var a=r.ad.banner;if(p(d,{width:a.w,height:a.h,ad:a.adm,mediaType:o.b}),a.imps)try{a.imps.forEach(function(e){var r=s.createTrackPixelHtml(e);d.ad+=r})}catch(e){s.logError("Error appending imp tracking pixel",e)}}return[d]},getUserSyncs:function(e,r){var n,d,t=[];return e.iframeEnabled&&r.length&&((n=r[0].body.syncIFs)&&n.forEach(function(e){t.push({type:"iframe",url:e})})),e.pixelEnabled&&r.length&&((d=r[0].body.syncPixels)&&d.forEach(function(e){t.push({type:"image",url:e})})),t},onBidWon:function(e){var r;e.nurl&&(r=e.nurl.replace(/\$\{AUCTION_PRICE\}/,e.cpm),Object(d.a)(r,null))}};function c(e){e.renderer.push(function(){window.op8.renderPrebid({vastXml:e.vastXml,adUnitCode:e.adUnitCode,slotKey:e.slotKey,impId:e.impId,userId:e.userId,media:e.media,ds:e.ds,spd:e.spd,fa:e.fa,pr:e.pr,mr:e.mr,adResponse:e.adResponse,mediaType:e.mediaType})})}Object(t.registerBidder)(a)}},[637]);