pbjsChunk([264],{376:function(e,t,r){e.exports=r(377)},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return R})),t.resetUserSync=function(){g=!1},t.getSyncUrl=function(){return y};var n=r(0),i=r(1),o=r(13),a=r(2),s=r(3),d=["mind","maxd","size"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y="https://x.bidswitch.net/sync?ssp=themediagrid",g=!1,v="Bid from response has no adm parameter - ",h="Bid from response has no price parameter - ",S="Bid from response has wrong content_type parameter - ",j="Array of bid objects is empty",O="Seatbid array from response has empty item",x="Response is empty",w="Response has empty seatbid array",I="Seatbid from response has no array of bid objects - ",A=["mimes","protocols","startdelay","placement","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype"],R={code:"gridNM",supportedMediaTypes:[a.d],isBidRequestValid:function(e){var t=!(e.params.source&&Object(n.isStr)(e.params.source)&&e.params.secid&&Object(n.isStr)(e.params.secid)&&e.params.pubid&&Object(n.isStr)(e.params.pubid)),r=Object(n.deepAccess)(e,"mediaTypes.video")||{},i=Object(n.deepAccess)(e,"params.video")||{},o=i.protocols,a=void 0===o?r.protocols:o,s=i.mimes,d=void 0===s?r.mimes:s;return t||(t=!a||!d),t||(t=!Object(n.isArray)(d)||!d.length||d.filter((function(e){return!(e&&Object(n.isStr)(e))})).length)||(t=!Object(n.isArray)(a)||!a.length||a.filter((function(e){return!(Object(n.isNumber)(e)&&e>0&&!(e%1))})).length),!t},buildRequests:function(e,t){var r=e||[],i=[],o=t||{},a=o.bidderRequestId,d=o.auctionId,p=o.gdprConsent,c=o.uspConsent,b=o.timeout,f=o.refererInfo,y=f?encodeURIComponent(f.referer):"";return r.forEach((function(e){var t,r,o=e.schain,f=e.userIdAsEids;a||(a=e.bidderRequestId),d||(d=e.auctionId);var g=e.params,v=g.floorcpm,h=g.pubdata,S=g.source,j=g.secid,O=g.pubid,x=g.content,w=g.video,I=e.mediaTypes,A=e.bidId,R=e.adUnitCode,_=e.rtd,E=e.ortb2Imp,N=e.sizes,U=function(e,t,r){var n=e.video?"video":"banner";if("function"==typeof t.getFloor){var i=t.getFloor({currency:"USD",mediaType:n,size:t.sizes.map((function(e){var t=l(e,2);return{w:t[0],h:t[1]}}))});"object"!==u(i)||"USD"!==i.currency||isNaN(parseFloat(i.floor))||(r=Math.max(r,parseFloat(i.floor)))}return r}(I||{},e,Object(n.isNumber)(v)&&v),z=_&&_.jwplayer&&_.jwplayer.targeting,C=h&&h.jwpseg||z&&z.segments,k=x||z&&z.content,M={id:A.toString(),tagid:j.toString(),video:T(w,N,I&&I.video),ext:{divid:R.toString()}};E&&E.ext&&E.ext.data&&(M.ext.data=E.ext.data,M.ext.data.adserver&&M.ext.data.adserver.adslot?M.ext.gpid=M.ext.data.adserver.adslot.toString():M.ext.gpid=E.ext.data.pbadslot&&E.ext.data.pbadslot.toString()),U&&(M.bidfloor=U);var P=[M],q={tid:d&&d.toString(),ext:{wrapper:"Prebid_js",wrapper_version:"6.10.0-pre"}};o&&(q.ext.schain=o);var B=s.b.getConfig("bidderTimeout")||b,D=b?Math.min(B,b):B,F={id:a&&a.toString(),site:{page:y,publisher:{id:O}},source:q,tmax:D,imp:P};k&&(F.site.content=k),C&&C.length&&(t={data:[{name:"iow_labs_pub_data",segment:C.map((function(e){return{name:"jwpseg",value:e}}))}]}),p&&p.consentString&&(r={consent:p.consentString}),f&&f.length&&((r=r||{}).eids=m(f)),r&&Object.keys(r).length&&((t=t||{}).ext=r),t&&(F.user=t),p&&p.gdprApplies&&(F.regs={ext:{gdpr:p.gdprApplies?1:0}}),c&&(F.regs||(F.regs={ext:{}}),F.regs.ext.us_privacy=c),!0===s.b.getConfig("coppa")&&(F.regs||(F.regs={}),F.regs.coppa=1),i.push({method:"POST",url:"https://grid.bidswitch.net/hbjson?no_mapping=1&sp="+S,bid:e,data:F})})),i},interpretResponse:function(e,t){var r,i=[];if((e=e&&e.body)?e.seatbid&&!e.seatbid.length&&(r=w):r=x,!r&&e.seatbid){var s=function(e){e?e.bid?e.bid[0]||Object(n.logError)(j):Object(n.logError)(I+JSON.stringify(e)):Object(n.logError)(O);return e&&e.bid&&e.bid[0]}(e.seatbid[0]);if(s&&(s.adm||s.nurl?s.price?"video"!==s.content_type&&(r=S+s.content_type):r=h+JSON.stringify(s):r=v+JSON.stringify(s),!r)){var d=t.bid,p={requestId:d.bidId,cpm:s.price,width:s.w,height:s.h,creativeId:s.auid||d.bidderRequestId,currency:"USD",netRevenue:!0,ttl:360,dealId:s.dealid,mediaType:a.d,meta:{advertiserDomains:s.adomain?s.adomain:[]}};s.adm?(p.vastXml=s.adm,p.adResponse={content:p.vastXml}):s.nurl&&(p.vastUrl=s.nurl),d.renderer||d.mediaTypes&&d.mediaTypes.video&&"outstream"!==d.mediaTypes.video.context||(p.renderer=function(e,t){var r=o.a.install({id:t.id,url:t.url,loaded:!1});try{r.setRender(_)}catch(e){Object(n.logWarn)("Prebid Error calling setRender on renderer",e)}return r}(0,{id:d.bidId,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"})),i.push(p)}}return r&&Object(n.logError)(r),i},getUserSyncs:function(e,t,r,n){if(!g&&e.pixelEnabled){var i="";return r&&"string"==typeof r.consentString&&("boolean"==typeof r.gdprApplies?i+="&gdpr=".concat(Number(r.gdprApplies),"&gdpr_consent=").concat(r.consentString):i+="&gdpr_consent=".concat(r.consentString)),n&&(i+="&us_privacy=".concat(n)),g=!0,{type:"image",url:y+i}}}};function _(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({targetId:e.adUnitCode,adResponse:e.adResponse})}))}function T(e,t){var r=e.mind,i=e.maxd,o=e.size,a=c(e,d),s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(A.forEach((function(e){!(e in a)&&e in s&&(a[e]=s[e])})),o&&Object(n.isStr)(o)){var u=o.split("x");2===u.length&&parseInt(u[0])&&parseInt(u[1])&&(a.w=parseInt(u[0]),a.h=parseInt(u[1]))}if(!a.w||!a.h){var l=s.playerSize&&2===s.playerSize.length?s.playerSize:t;if(l){var m=l[0];m&&p(a,Object(n.parseGPTSingleSizeArrayToRtbSize)(m))}}var b=s.durationRangeSec||[],f=r||b[0]||s.minduration,y=i||b[1]||s.maxduration;return f&&(a.minduration=f),y&&(a.maxduration=y),a}Object(i.registerBidder)(R),window.pbjs.installedModules.push("gridNMBidAdapter")}},[376]);