pbjsChunk([126],{750:function(e,r,t){e.exports=t(751)},751:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return p}));var i=t(11),a=t.n(i),n=t(0),s=t(2),d=t(1);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var u="https://ib.adnxs.com/ut/v3/prebid",p={code:"targetVideo",supportedMediaTypes:[s.b],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.placementId)},buildRequests:function(e,r){return function(e,r){var t={withCredentials:!0};return{method:"POST",url:u,data:JSON.stringify(e),bidderRequest:r,options:t}}({tags:e.map(l),sdk:{source:"pbjs",version:"6.10.0-pre"},schain:e[0].schain},r)},interpretResponse:function(e,r){var t=r.bidderRequest;e=e.body;var i=[];return e.tags&&e.tags.forEach((function(e){var r,d=(r=e)&&r.ads&&r.ads.length&&a()(r.ads,(function(e){return e.rtb}));d&&0!==d.cpm&&d.ad_type==s.d&&i.push(function(e,r,t){var i=Object(n.getBidRequest)(e.uuid,[t]),a=c(i),s={requestId:e.uuid,cpm:1.35*r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,width:a[0][0],height:a[0][1],ttl:300,adUnitCode:i.adUnitCode,appnexus:{buyerMemberId:r.buyer_member_id,dealPriority:r.deal_priority,dealCode:r.deal_code}};r.rtb.video&&o(s,{vastImpUrl:r.notify_url,ad:y(r.notify_url+"&redir="+encodeURIComponent(r.rtb.video.asset_url)),ttl:3600});return s}(e,d,t))})),i}};function c(e){var r=e.sizes;return!r&&e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes&&(r=e.mediaTypes.banner.sizes),Array.isArray(r)&&!Array.isArray(r[0])&&(r=[r[0],r[1]]),Array.isArray(r)&&Array.isArray(r[0])||(r=[[0,0]]),r}function l(e){var r={};return r.id=parseInt(e.params.placementId,10),r.gpid="targetVideo",r.sizes=c(e),r.primary_size=r.sizes[0],r.ad_types=[s.d],r.uuid=e.bidId,r.allow_smaller_sizes=!1,r.use_pmt_rule=!1,r.prebid=!0,r.disable_psa=!0,r.hb_source=1,r.require_asset_url=!0,r.video={playback_method:2,skippable:!0},r}function y(e){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <title></title>\n      <style>html, body {width: 100%; height: 100%; margin: 0;}</style>\n    </head>\n    <body>\n      <div id="targetVideoPlayer"></div>\n      <script src="https://player.target-video.com/custom/targetvideo-banner.js"><\/script>\n      <script>initPlayer("'.concat(e,'");<\/script>\n    </body>\n  </html>')}Object(d.registerBidder)(p),window.pbjs.installedModules.push("targetVideoBidAdapter")}},[750]);