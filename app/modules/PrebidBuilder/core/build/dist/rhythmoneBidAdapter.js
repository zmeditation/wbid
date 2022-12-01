pbjsChunk([155],{660:function(e,r,t){e.exports=t(661)},661:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return n}));var a=t(0),i=t(1),s=t(2);var n=new function(){this.code="rhythmone",this.supportedMediaTypes=[s.d,s.b];var e=[2,3,5,6],r=["video/mp4"],t=[1,2,3,4],i=[1],n=[1,2,5],d={},p=this;function c(e,r){var t,i=[],s=0;if(r&&r.refererInfo&&r.refererInfo.stack.length){var n=document.createElement("a");n.href=r.refererInfo.stack[0],s="https:"==n.protocol?1:0}for(var p=0;p<e.length;p++){d[e[p].adUnitCode]=e[p];var c={};if(c.id=e[p].adUnitCode,c.bidfloor=0,c.secure=s,Object(a.deepAccess)(e[p],"mediaTypes.banner")||"banner"===Object(a.deepAccess)(e[p],"mediaType")){var o=v(e[p]);o&&(c.banner=o)}(Object(a.deepAccess)(e[p],"mediaTypes.video")||"video"===Object(a.deepAccess)(e[p],"mediaType"))&&(c.video=u(e[p])),(c.banner||c.video)&&(c.ext={bidder:{placementId:(t=e[p]).params.placementId,zone:t.params&&t.params.zone?t.params.zone:"1r",path:t.params&&t.params.path?t.params.path:"mvo"}},i.push(c))}return i}function o(e){var r={domain:"",page:"",ref:""};if(e&&e.refererInfo){var t=e.refererInfo;if(r.ref=t.referer,t.stack.length){r.page=t.stack[t.stack.length-1];var a=document.createElement("a");a.href=t.stack[0],r.domain=a.hostname}}return r}function m(e){var r=parseInt(e[0]),t=parseInt(e[1]);return r==r&&t==t&&[r,t]}function v(e){var r=e.sizes;e.mediaTypes&&e.mediaTypes.banner&&(r=e.mediaTypes.banner.sizes);var t=Object(a.parseSizesInput)(r),i=[];return t.forEach((function(e){if(e){var r=m(e.split("x"));r&&i.push({w:r[0],h:r[1]})}})),!!i.length&&{format:i}}function u(s){var d=[];if(Object(a.deepAccess)(s,"mediaTypes.video.playerSize")){var p=s.mediaTypes.video.playerSize;Object(a.isArray)(s.mediaTypes.video.playerSize[0])&&(p=s.mediaTypes.video.playerSize[0]);var c=m(p);c&&(d=c)}return{mimes:Object(a.deepAccess)(s,"mediaTypes.video.mimes")||r,protocols:Object(a.deepAccess)(s,"mediaTypes.video.protocols")||e,w:d[0],h:d[1],startdelay:Object(a.deepAccess)(s,"mediaTypes.video.startdelay")||0,skip:Object(a.deepAccess)(s,"mediaTypes.video.skip")||0,playbackmethod:Object(a.deepAccess)(s,"mediaTypes.video.playbackmethod")||t,delivery:Object(a.deepAccess)(s,"mediaTypes.video.delivery")||i,api:Object(a.deepAccess)(s,"mediaTypes.video.api")||n}}function l(e,r){for(var t=0;t<r.length;t++)if(r[t].params&&r[t].params[e])return r[t].params[e]}this.isBidRequestValid=function(e){return!(!e.params||!e.params.placementId)},this.getUserSyncs=function(e,r,t){return[]},this.buildRequests=function(e,r){var t=l("placementId",e);if(void 0===t||e.length<1)return[];var i=l("endpoint",e)||"https://tag.1rx.io/rmp/{placementId}/0/{path}?z={zone}",s=l("zone",e)||"1r",n=l("path",e)||"mvo";i=(i=(i=i.replace(/\{placementId\}/i,t)).replace(/\{zone\}/i,s)).replace(/\{path\}/i,n);var d=/(^v|(\.0)+$)/gi;i+="&hbv="+"6.10.0-pre".replace(d,"")+","+"2.1".replace(d,"");var p=function(e,r){var t={id:e[0].bidderRequestId,imp:c(e,r),site:o(r),device:{ua:navigator.userAgent,ip:"",dnt:Object(a.getDNT)()?1:0},user:{ext:{consent:Object(a.deepAccess)(r,"gdprConsent.gdprApplies")?r.gdprConsent.consentString:""}},at:1,tmax:1e3,regs:{ext:{gdpr:!!Object(a.deepAccess)(r,"gdprConsent.gdprApplies")&&Boolean(1&r.gdprConsent.gdprApplies)}}};return e[0].schain&&(t.source={ext:{schain:e[0].schain}}),t}(e,r);return p.imp.length?{method:"POST",url:i,data:JSON.stringify(p)}:{}},this.interpretResponse=function(e){var r=e.body||[],t=[],a=0;if(r.seatbid){var i=[];for(a=0;a<r.seatbid.length;a++)for(var s=0;s<r.seatbid[a].bid.length;s++)i.push(r.seatbid[a].bid[s]);r=i}for(a=0;a<r.length;a++){var n=r[a],c=d[n.impid],o={requestId:c.bidId,bidderCode:p.code,cpm:parseFloat(n.price),width:n.w,height:n.h,meta:{advertiserDomains:n.adomain},creativeId:n.crid,currency:"USD",netRevenue:!0,ttl:350};c.mediaTypes&&c.mediaTypes.video?(o.vastUrl=n.nurl,o.mediaType="video",o.ttl=600):o.ad=n.adm,t.push(o)}return t}};Object(i.registerBidder)(n),window.pbjs.installedModules.push("rhythmoneBidAdapter")}},[660]);