pbjsChunk([111],{784:function(e,n,t){e.exports=t(785)},785:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"spec",(function(){return d}));var r=t(0),a=t(1),i=t(2);function c(e){if(!e)return null;var n=e.gdprApplies?"1":"0",t=e.consentString?e.consentString:"";return"gdpr=".concat(n,"&gdprstr=").concat(t)}function s(e){var n=document.getElementById(e),t=-1,r=-1;if(n){t=n.offsetLeft,r=n.offsetTop;var a=n.offsetParent;return a&&(t+=a.offsetLeft,r+=a.offsetTop),[t,r]}return null}var d={code:"undertone",supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){if(e&&e.params&&e.params.publisherId)return e.params.publisherId=parseInt(e.params.publisherId),!0},buildRequests:function(e,n){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),a=Math.max(document.documentElement.clientHeight,window.innerHeight||0),d=0==t||0==a?null:[t,a],o={adapterVersion:"6.10.0-pre",uids:e[0].userId,pageSize:d};e[0].schain&&(o.schain=e[0].schain);var u={"x-ut-hb-params":[],commons:o},p=n.refererInfo.referer,l=function(){try{var e=window.top.document.querySelector("link[rel='canonical']");if(null!==e)return e.href}catch(e){}return null}();p&&(o.referrer=p),l&&(o.canonicalUrl=l);var m=function(e){var n=null;try{var t=/[-\w]+\.([-\w]+|[-\w]{3,}|[-\w]{1,3}\.[-\w]{2})$/i.exec(e);if(null!=t&&t.length>0){n=t[0];for(var r=1;r<t.length;r++)t[r].length>n.length&&(n=t[r])}}catch(e){n=null}return n}(Object(r.parseUrl)(p).hostname),h=l||p,f=e[0].params.publisherId,b="".concat("https://hb.undertone.com/hb","?pid=").concat(f,"&domain=").concat(m),y=c(n.gdprConsent);return y&&(b+="&".concat(y)),n.uspConsent&&(b+="&ccpa=".concat(n.uspConsent)),e.map((function(e){var n={bidRequestId:e.bidId,coordinates:s(e.adUnitCode),hbadaptor:"prebid",url:h,domain:m,placementId:null!=e.params.placementId?e.params.placementId:null,publisherId:e.params.publisherId,sizes:e.sizes,params:e.params},t=Object(r.deepAccess)(e,"mediaTypes.video"),a=t?i.d:i.b;n.mediaType=a,n.bidfloor=function(e,n){if("function"!=typeof e.getFloor)return 0;var t=e.getFloor({currency:"USD",mediaType:n,size:"*"});return t&&"USD"===t.currency&&t.floor||0}(e,a),t&&(n.video={playerSize:Object(r.deepAccess)(e,"mediaTypes.video.playerSize")||null,streamType:Object(r.deepAccess)(e,"mediaTypes.video.context")||null,playbackMethod:Object(r.deepAccess)(e,"params.video.playbackMethod")||null,maxDuration:Object(r.deepAccess)(e,"params.video.maxDuration")||null,skippable:Object(r.deepAccess)(e,"params.video.skippable")||null}),u["x-ut-hb-params"].push(n)})),{method:"POST",url:b,withCredentials:!0,data:JSON.stringify(u)}},interpretResponse:function(e,n){var t=[],r=e.body;return r&&Array.isArray(r)&&r.length>0&&r.forEach((function(e){if(e.ad&&e.cpm>0){var n={requestId:e.bidRequestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.adId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl||360,meta:{advertiserDomains:e.adomain?e.adomain:[]}};e.mediaType&&"video"===e.mediaType?(n.vastXml=e.ad,n.mediaType=e.mediaType):n.ad=e.ad,t.push(n)}})),t},getUserSyncs:function(e,n,t,r){var a=[],i=c(t),s="",d="";return i&&(s+="?".concat(i),d+="&".concat(i)),r&&(s+=""!=s?"&":"?",s+="ccpa=".concat(r),d+="&ccpa=".concat(r)),e.iframeEnabled?a.push({type:"iframe",url:"https://cdn.undertone.com/js/usersync.html"+s}):e.pixelEnabled&&a.push({type:"image",url:"https://usr.undertone.com/userPixel/syncOne?id=1&of=2"+d},{type:"image",url:"https://usr.undertone.com/userPixel/syncOne?id=2&of=2"+d}),a}};Object(a.registerBidder)(d),window.pbjs.installedModules.push("undertoneBidAdapter")}},[784]);