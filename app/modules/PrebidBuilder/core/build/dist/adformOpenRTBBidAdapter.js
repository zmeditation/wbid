pbjsChunk([368],{186:function(e,r,t){e.exports=t(187)},187:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return s});var n=t(1),p=t(2),y=t(0),v=t(3);function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var m="adformOpenRTB",f={0:"title",2:"icon",3:"image",5:"sponsoredBy",4:"body",1:"cta"},g={title:{id:0,name:"title"},icon:{id:2,type:1,name:"img"},image:{id:3,type:3,name:"img"},sponsoredBy:{id:5,name:"data",type:1},body:{id:4,name:"data",type:2},cta:{id:1,type:12,name:"data"}},s={code:m,gvlid:50,supportedMediaTypes:[p.c],isBidRequestValid:function(e){return!!e.params.mid},buildRequests:function(e,r){var t=r.refererInfo.referer,n=b(e,"params.adxDomain")||"adx.adform.net",i=navigator.userAgent,a=b(e,"params.pt")||b(e,"params.priceType")||"net",s=e[0].transactionId,o=b(e,"params.test"),d=b(e,"params.publisher"),u=b(e,"params.siteId"),c=v.b.getConfig("currency.adServerCurrency"),p=c&&[c],m=b(e,"userIdAsEids"),f=e.map(function(e,r){e.netRevenue=a;var t=y._map(e.nativeParams,function(e,r){var t,n,i=g[r],a={required:1&e.required};if(i){a.id=i.id;var s,o,d,u=e.aspect_ratios;return u&&u[0]&&(t=(u=u[0]).min_width||0,n=u.ratio_height*t/u.ratio_width|0),e.sizes&&(o=(s=h(e.sizes))[0],d=s[1]),a[i.name]={len:e.len,type:i.type,wmin:t,hmin:n,w:o,h:d},a}}).filter(Boolean);return{id:r+1,tagid:e.params.mid,native:{request:{assets:t}}}}),l={id:r.auctionId,site:{id:u,page:t,publisher:d},device:{ua:i},source:{tid:s,fd:1},ext:{pt:a},cur:p,imp:f};return o&&(l.is_debug=!!o,l.test=1),void 0!==y.deepAccess(r,"gdprConsent.gdprApplies")&&(l.user={ext:{consent:r.gdprConsent.consentString}},l.regs={ext:{gdpr:1&r.gdprConsent.gdprApplies}}),r.uspConsent&&y.deepSetValue(l,"regs.ext.us_privacy",r.uspConsent),m&&y.deepSetValue(l,"user.ext.eids",m),{method:"POST",url:"https://"+n+"/adx/openrtb",data:JSON.stringify(l),options:{contentType:"application/json"},bids:e}},interpretResponse:function(e,r){var t=r.bids;if(e.body){var n=e.body,i=n.seatbid,u=n.cur,c=h(i.map(function(e){return e.bid})).reduce(function(e,r){return e[r.impid-1]=r,e},[]);return t.map(function(e,r){var t,n,i,a,s,o,d=c[r];if(d)return{requestId:e.bidId,cpm:d.price,creativeId:d.crid,ttl:360,netRevenue:"net"===e.netRevenue,currency:u,mediaType:p.c,bidderCode:m,native:(t=d.native,n=t.assets,i=t.link,a=t.imptrackers,s=t.jstracker,o={clickUrl:i.url,clickTrackers:i.clicktrackers||void 0,impressionTrackers:a||void 0,javascriptTrackers:s?[s]:void 0},n.forEach(function(e){var r=f[e.id],t=r&&e[g[r].name];t&&(o[r]=t.text||t.value||{url:t.url,width:t.w,height:t.h})}),o)}}).filter(Boolean)}}};function b(e,r){for(var t,n=0;n<e.length;n++)if(t=y.deepAccess(e[n],r))return t}function h(e){var r;return(r=[]).concat.apply(r,i(e))}Object(n.registerBidder)(s)}},[186]);