pbjsChunk([182],{583:function(e,r,t){e.exports=t(584)},584:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return l}));var n=t(1),i=t(2),a=t(0),s=t(4),o=t(3);function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var d={0:"title",2:"icon",3:"image",5:"sponsoredBy",4:"body",1:"cta"},p={title:{id:0,name:"title"},icon:{id:2,type:1,name:"img"},image:{id:3,type:3,name:"img"},sponsoredBy:{id:5,name:"data",type:1},body:{id:4,name:"data",type:2},cta:{id:1,type:12,name:"data"}},l={code:"outbrain",gvlid:164,supportedMediaTypes:[i.c,i.b],isBidRequestValid:function(e){return!(!o.b.getConfig("outbrain.bidderUrl")||!Object(a.deepAccess)(e,"params.publisher.id")||!e.nativeParams&&!e.sizes)},buildRequests:function(e,r){var t=r.refererInfo.referer,n=navigator.userAgent,i=m(e,"params.test"),s=m(e,"params.publisher"),c=m(e,"params.bcat"),u=m(e,"params.badv"),d=m(e,"userIdAsEids"),p=o.b.getConfig("outbrain.bidderUrl"),l=r.timeout,b=e.map((function(e,r){e.netRevenue="net";var t={id:r+1+""};return e.params.tagid&&(t.tagid=e.params.tagid),e.nativeParams?t.native={request:JSON.stringify({assets:f(e)})}:t.banner={format:g(e.sizes)},t})),v={id:r.auctionId,site:{page:t,publisher:s},device:{ua:n},source:{fd:1},cur:["USD"],tmax:l,imp:b,bcat:c,badv:u,ext:{prebid:{channel:{name:"pbjs",version:"6.10.0-pre"}}}};return i&&(v.is_debug=!!i,v.test=1),Object(a.deepAccess)(r,"gdprConsent.gdprApplies")&&(Object(a.deepSetValue)(v,"user.ext.consent",r.gdprConsent.consentString),Object(a.deepSetValue)(v,"regs.ext.gdpr",1&r.gdprConsent.gdprApplies)),r.uspConsent&&Object(a.deepSetValue)(v,"regs.ext.us_privacy",r.uspConsent),!0===o.b.getConfig("coppa")&&Object(a.deepSetValue)(v,"regs.coppa",1&o.b.getConfig("coppa")),d&&Object(a.deepSetValue)(v,"user.ext.eids",d),{method:"POST",url:p,data:JSON.stringify(v),bids:e}},interpretResponse:function(e,r){var t=r.bids;if(!e.body)return[];var n=e.body,a=n.seatbid,s=n.cur,o=b(a.map((function(e){return e.bid}))).reduce((function(e,r){return e[r.impid-1]=r,e}),[]);return t.map((function(e,r){var t=o[r];if(t){var n=e.nativeParams?i.c:i.b,a={requestId:e.bidId,cpm:t.price,creativeId:t.crid,ttl:360,netRevenue:"net"===e.netRevenue,currency:s,mediaType:n,nurl:t.nurl};return n===i.c?a.native=function(e){var r=JSON.parse(e.adm),t=r.assets,n=r.link,i=r.eventtrackers,a={clickUrl:n.url,clickTrackers:n.clicktrackers||void 0};t.forEach((function(e){var r=d[e.id],t=r&&e[p[r].name];t&&(a[r]=t.text||t.value||{url:t.url,width:t.w,height:t.h})})),i&&(a.impressionTrackers=[],i.forEach((function(e){if(1===e.event)switch(e.method){case 1:a.impressionTrackers.push(e.url);break;case 2:a.javascriptTrackers='<script src="'.concat(e.url,'"><\/script>')}})));return a}(t):(a.ad=t.adm,a.width=t.w,a.height=t.h),a.meta={},t.adomain&&t.adomain.length>0&&(a.meta.advertiserDomains=t.adomain),a}})).filter(Boolean)},getUserSyncs:function(e,r,t,n){var i=[],a=o.b.getConfig("outbrain.usersyncUrl"),s=[];return e.pixelEnabled&&a&&(t&&(s.push("gdpr="+(1&t.gdprApplies)),s.push("gdpr_consent="+encodeURIComponent(t.consentString||""))),n&&s.push("us_privacy="+encodeURIComponent(n)),i.push({type:"image",url:a+(s.length?"?"+s.join("&"):"")})),i},onBidWon:function(e){e.nurl&&Object(s.a)(Object(a.replaceAuctionPrice)(e.nurl,e.originalCpm))}};function m(e,r){for(var t,n=0;n<e.length;n++)if(t=Object(a.deepAccess)(e[n],r))return t}function b(e){var r;return(r=[]).concat.apply(r,c(e))}function f(e){return Object(a._map)(e.nativeParams,(function(e,r){var t=p[r],n={required:1&e.required};if(t){var i,a,s,o;n.id=t.id;var c=e.aspect_ratios;if(c&&c[0]&&(i=(c=c[0]).min_width||0,a=c.ratio_height*i/c.ratio_width|0),e.sizes){var u=b(e.sizes);s=u[0],o=u[1]}return n[t.name]={len:e.len,type:t.type,wmin:i,hmin:a,w:s,h:o},n}})).filter(Boolean)}function g(e){return Object(a.isArray)(e)?2!==e.length||Object(a.isArray)(e[0])?Object(a.isArray)(e[0])?e.map((function(e){return{w:parseInt(e[0],10),h:parseInt(e[1],10)}})):[]:[{w:parseInt(e[0],10),h:parseInt(e[1],10)}]:[]}Object(n.registerBidder)(l),window.pbjs.installedModules.push("outbrainBidAdapter")}},[583]);