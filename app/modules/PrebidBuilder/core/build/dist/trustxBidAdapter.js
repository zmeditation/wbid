pbjsChunk([115],{774:function(e,t,r){e.exports=r(775)},775:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return S}));var n=r(0),i=r(1),o=r(13),a=r(2),s=r(3);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f="Bid from response has no auid parameter - ",m="Bid from response has no adm parameter - ",b="Array of bid objects is empty",y="Seatbid array from response has empty item",g="Response is empty",v="Response has empty seatbid array",h="Seatbid from response has no array of bid objects - ",S={code:"trustx",supportedMediaTypes:[a.b,a.d],isBidRequestValid:function(e){return!!e.params.uid},buildRequests:function(e,t){if(!e.length)return null;var r=null,i=null,o=null,c=null,p=null,f=null,m=null,b=null,y=null,g=t||{},v=g.bidderRequestId,h=g.auctionId,S=g.gdprConsent,j=g.uspConsent,x=g.timeout,w=g.refererInfo,O=w?encodeURIComponent(w.referer):"",I=[],E={};e.forEach((function(e){v||(v=e.bidderRequestId),h||(h=e.auctionId),p||(p=e.schain),f||(f=e.userId),m||(m=e.userIdAsEids);var t=e.params,s=t.uid,l=t.keywords,b=e.mediaTypes,y=e.bidId,g=e.adUnitCode,S=e.rtd,j=e.ortb2Imp;E[y]=e;var x=function(e,t){var r=e.video?"video":"banner",n=t.params.bidFloor||0;if("function"==typeof t.getFloor){var i=t.getFloor({currency:"USD",mediaType:r,size:t.sizes.map((function(e){var t=d(e,2);return{w:t[0],h:t[1]}}))});"object"!==u(i)||"USD"!==i.currency||isNaN(parseFloat(i.floor))||(n=Math.max(n,parseFloat(i.floor)))}return n}(b||{},e);if(S){var w=S.jwplayer&&S.jwplayer.targeting;w&&(!i&&w.segments&&(i=w.segments),!c&&w.content&&(c=w.content));var A=S.p_standard&&S.p_standard.targeting;!o&&A&&A.segments&&(o=A.segments)}var O={id:y&&y.toString(),tagid:s.toString(),ext:{divid:g&&g.toString()}};if(j&&j.ext&&j.ext.data&&(O.ext.data=j.ext.data,O.ext.data.adserver&&O.ext.data.adserver.adslot?O.ext.gpid=O.ext.data.adserver.adslot.toString():O.ext.gpid=j.ext.data.pbadslot&&j.ext.data.pbadslot.toString()),Object(n.isEmpty)(l)||(r||(r=l),O.ext.bidder={keywords:l}),x&&(O.bidfloor=x),!b||b[a.b]){var R=function(e,t){var r=t.sizes||e.sizes;if(!r||!r.length)return;var i=r.map((function(e){return Object(n.parseGPTSingleSizeArrayToRtbSize)(e)})),o=Object(n.parseGPTSingleSizeArrayToRtbSize)(r[0]);i.length&&(o.format=i);return o}(e,b?b[a.b]:{});R&&(O.banner=R)}if(b&&b[a.d]){var T=function(e,t){var r=t.playerSize,i=t.mimes,o=t.durationRangeSec,a=t.protocols,s=(r||e.sizes||[])[0];if(!s)return;var d=Object(n.parseGPTSingleSizeArrayToRtbSize)(s);i&&(d.mimes=i);o&&2===o.length&&(d.minduration=o[0],d.maxduration=o[1]);a&&a.length&&(d.protocols=a);return d}(e,b[a.d]);T&&(O.video=T)}(O.banner||O.video)&&I.push(O)}));var R={tid:h&&h.toString(),ext:{wrapper:"Prebid_js",wrapper_version:"6.10.0-pre"}};p&&(R.ext.schain=p);var T=s.b.getConfig("bidderTimeout")||x,k=x?Math.min(T,x):T,_={id:v&&v.toString(),site:{page:O},tmax:k,source:R,imp:I};c&&(_.site.content=c);var z=[];A("iow_labs_pub_data","jwpseg",i,z),A("permutive","p_standard",o,z,"permutive.com"),z.length&&(b={data:z}),S&&S.consentString&&(y={consent:S.consentString}),m&&m.length&&((y=y||{}).eids=l(m)),y&&Object.keys(y).length&&((b=b||{}).ext=y),b&&(_.user=b);var C=Object(n.deepAccess)(s.b.getConfig("ortb2.user"),"keywords")||null,N=Object(n.deepAccess)(s.b.getConfig("ortb2.site"),"keywords")||null;return C&&((r=r||{}).user=r.user||{},r.user.ortb2=[{name:"keywords",keywords:C.split(",")}]),N&&((r=r||{}).site=r.site||{},r.site.ortb2=[{name:"keywords",keywords:N.split(",")}]),r&&(r=function(e){var t={};return Object.keys(e).forEach((function(r){var n=e[r];if(n)if("site"===r||"user"===r){var i={};Object.keys(n).forEach((function(e){if(Array.isArray(n[e])){var t=[];n[e].forEach((function(e){if("object"===u(e)&&e.name){var r={name:e.name,segments:[]};Object.keys(e).forEach((function(t){Array.isArray(e[t])&&e[t].forEach((function(e){e&&("string"==typeof e?r.segments.push({name:t,value:e}):"segments"===t&&"string"==typeof e.name&&"string"==typeof e.value&&r.segments.push(e))}))})),r.segments.length&&t.push(r)}})),t.length&&(i[e]=t)}})),t[r]=i}else t[r]=n})),Object.keys(t).length&&t}(r))&&(_.ext={keywords:r}),S&&S.gdprApplies&&(_.regs={ext:{gdpr:S.gdprApplies?1:0}}),j&&(_.regs||(_.regs={ext:{}}),_.regs.ext.us_privacy=j),{method:"POST",url:"https://grid.bidswitch.net/hbjson?sp=trustx",data:JSON.stringify(_),bidsMap:E}},interpretResponse:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.a;e=e&&e.body;var i,a=[];return e?e.seatbid&&!e.seatbid.length&&(i=v):i=g,!i&&e.seatbid&&e.seatbid.forEach((function(e){x(j(e),t,a,r)})),i&&Object(n.logError)(i),a},getUserSyncs:function(e,t,r,n){if(e.pixelEnabled){var i=[];return r&&("boolean"==typeof r.gdprApplies&&i.push("gdpr=".concat(Number(r.gdprApplies))),"string"==typeof r.consentString&&i.push("gdpr_consent=".concat(r.consentString))),n&&i.push("us_privacy=".concat(n)),{type:"image",url:"https://x.bidswitch.net/sync?ssp=themediagrid"+i.join("&")}}}};function j(e){return e?e.bid?e.bid[0]||Object(n.logError)(b):Object(n.logError)(h+JSON.stringify(e)):Object(n.logError)(y),e&&e.bid&&e.bid[0]}function x(e,t,r,i){if(e){var o;if(e.auid||(o=f+JSON.stringify(e)),e.adm||e.nurl){var s=t.bidsMap[e.impid];if(!o&&s){var d={requestId:s.bidId,cpm:e.price,width:e.w,height:e.h,creativeId:e.auid,currency:"USD",netRevenue:!1,ttl:360,dealId:e.dealid,meta:{advertiserDomains:e.adomain?e.adomain:[]}};"video"===e.content_type?(e.adm?(d.vastXml=e.adm,d.adResponse={content:d.vastXml}):e.nurl&&(d.vastUrl=e.nurl),d.mediaType=a.d,s.renderer||s.mediaTypes&&s.mediaTypes.video&&"outstream"!==s.mediaTypes.video.context||(d.renderer=function(e,t,r){var i=r.install({id:t.id,url:t.url,loaded:!1});try{i.setRender(w)}catch(e){Object(n.logWarn)("Prebid Error calling setRender on renderer",e)}return i}(0,{id:s.bidId,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"},i))):(d.ad=e.adm,d.mediaType=a.b),r.push(d)}}else o=m+JSON.stringify(e);o&&Object(n.logError)(o)}}function w(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({targetId:e.adUnitCode,adResponse:e.adResponse})}))}function A(e,t,r,n,i){if(r&&r.length)n.push({name:e,segment:r.map((function(e){return e&&(e.id||e)})).filter((function(e){return e&&("string"==typeof e||"number"==typeof e)})).map((function(e){return{name:t,value:e.toString()}}))});else if(i){var o=s.b.getConfig("ortb2.user.data"),a=null;o&&o.some((function(e){var t=e.name,r=e.segment;if(t===i)return a=r,!0})),a&&a.length&&n.push({name:e,segment:a.map((function(e){return e&&(e.id||e)})).filter((function(e){return e&&("string"==typeof e||"number"==typeof e)})).map((function(e){return{name:t,value:e.toString()}}))})}}Object(i.registerBidder)(S),window.pbjs.installedModules.push("trustxBidAdapter")}},[774]);