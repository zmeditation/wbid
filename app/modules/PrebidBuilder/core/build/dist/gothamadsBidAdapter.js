pbjsChunk([267],{370:function(e,t,r){e.exports=r(371)},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return v}));var a=r(0),i=r(1),n=r(2),o=r(3);function d(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=c(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){d=!0,n=e},f:function(){try{o||null==r.return||r.return()}finally{if(d)throw n}}}}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var l="[account_id]",p="https://us-e-node1.gothamads.com/bid?pass=".concat(l,"&integration=prebidjs"),m={0:"title",2:"icon",3:"image",5:"sponsoredBy",4:"body",1:"cta"},b={title:{id:0,name:"title"},icon:{id:2,type:1,name:"img"},image:{id:3,type:3,name:"img"},sponsoredBy:{id:5,name:"data",type:1},body:{id:4,name:"data",type:2},cta:{id:1,type:12,name:"data"}},v={code:"gothamads",supportedMediaTypes:[n.b,n.d,n.c],isBidRequestValid:function(e){return Boolean(e.params.accountId)&&Boolean(e.params.placementId)},buildRequests:function(e,t){if(e&&0===e.length)return[];var r,i=e[0].params.accountId,n=p.replace(l,i),d=window;try{r=new URL(t.refererInfo.referer),d=window.top}catch(e){r=d.location,Object(a.logMessage)(e)}var c,u=[],m=s(e);try{for(m.s();!(c=m.n()).done;){var b=c.value,v=g(b),y={id:b.bidId,test:o.b.getConfig("debug")?1:0,cur:["USD"],device:{w:d.screen.width,h:d.screen.height,language:navigator&&navigator.language?-1!=navigator.language.indexOf("-")?navigator.language.split("-")[0]:navigator.language:""},site:{page:r.pathname,host:r.host},source:{tid:b.transactionId},regs:{coppa:!0===o.b.getConfig("coppa")?1:0,ext:{}},tmax:b.timeout,imp:[v]};b.gdprConsent&&b.gdprConsent.gdprApplies&&(Object(a.deepSetValue)(y,"regs.ext.gdpr",b.gdprConsent.gdprApplies?1:0),Object(a.deepSetValue)(y,"user.ext.consent",b.gdprConsent.consentString)),void 0!==b.uspConsent&&Object(a.deepSetValue)(y,"regs.ext.us_privacy",b.uspConsent),u.push(y)}}catch(e){m.e(e)}finally{m.f()}return{method:"POST",url:n,data:u}},interpretResponse:function(e){if(!e||!e.body)return[];var t,r=[],a=s(e.body);try{for(a.s();!(t=a.n()).done;){var i=t.value,o=i.seatbid[0].bid[0].ext&&i.seatbid[0].bid[0].ext.mediaType?i.seatbid[0].bid[0].ext.mediaType:n.b,d={requestId:i.id,cpm:i.seatbid[0].bid[0].price,width:i.seatbid[0].bid[0].w,height:i.seatbid[0].bid[0].h,ttl:i.ttl||1200,currency:i.cur||"USD",netRevenue:!0,creativeId:i.seatbid[0].bid[0].crid,dealId:i.seatbid[0].bid[0].dealid,mediaType:o,meta:{}};switch(i.seatbid[0].bid[0].adomain&&i.seatbid[0].bid[0].adomain.length>0&&(d.meta.advertiserDomains=i.seatbid[0].bid[0].adomain),o){case n.d:d.vastXml=i.seatbid[0].bid[0].adm,d.vastUrl=i.seatbid[0].bid[0].ext.vastUrl;break;case n.c:d.native=f(i.seatbid[0].bid[0].adm);break;default:d.ad=i.seatbid[0].bid[0].adm}r.push(d)}}catch(e){a.e(e)}finally{a.f()}return r}},y=function(e,t){return void 0!==Object(a.deepAccess)(e,"mediaTypes.".concat(t))},f=function(e){var t=e.native,r=t.assets,a=t.link,i=t.imptrackers,n=t.jstracker,o={clickUrl:a.url,clickTrackers:a.clicktrackers||void 0,impressionTrackers:i||void 0,javascriptTrackers:n?[n]:void 0};return r.forEach((function(e){var t=m[e.id],r=t&&e[b[t].name];r&&(o[t]=r.text||r.value||{url:r.url,width:r.w,height:r.h})})),o},g=function(e){var t={id:e.transactionId,secure:1,ext:{placementId:e.params.placementId}};return y(e,n.b)&&(t.banner=w(e)),y(e,n.d)&&(t.video=j(e)),y(e,n.c)&&(t.native={ver:"1.2",request:h(e)}),t},h=function(e){var t={id:e.transactionId,ver:"1.2"},r=Object(a._map)(e.mediaTypes.native,(function(e,t){var r=b[t],a={required:1&e.required};if(r){var i,n;a.id=r.id;var o=e.aspect_ratios;if(o&&o[0]&&(i=(o=o[0]).min_width||0,n=o.ratio_height*i/o.ratio_width|0),e.sizes){var d=I(e.sizes);i=d[0],n=d[1]}return a[r.name]={},e.len&&(a[r.name].len=e.len),r.type&&(a[r.name].type=r.type),i&&(a[r.name].wmin=i),n&&(a[r.name].hmin=n),a}})).filter(Boolean);return t.assets=r,t},w=function(e){var t={},r=A(e,"banner");return t.w=r[0],t.h=r[1],t},A=function(e,t){var r=e.mediaTypes;if("video"===t){var i=[];return r.video&&r.video.w&&r.video.h?i=[r.video.w,r.video.h]:Array.isArray(Object(a.deepAccess)(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?i=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(i=e.sizes[0]),i}var n=[];return Array.isArray(r.banner.sizes)?n=r.banner.sizes[0]:Array.isArray(e.sizes)&&e.sizes.length>0?n=e.sizes:Object(a.logWarn)("no sizes are setup or found"),n},j=function(e){for(var t={},r=0,a=["mimes","minduration","maxduration","protocols","startdelay","placement","skip","skipafter","minbitrate","maxbitrate","delivery","playbackmethod","api","linearity"];r<a.length;r++){var i=a[r];void 0!==e.mediaTypes.video[i]&&(t[i]=e.mediaTypes.video[i])}var n=A(e,"video");return t.w=n[0],t.h=n[1],t},I=function(e){var t;return(t=[]).concat.apply(t,d(e))};Object(i.registerBidder)(v),window.pbjs.installedModules.push("gothamadsBidAdapter")}},[370]);