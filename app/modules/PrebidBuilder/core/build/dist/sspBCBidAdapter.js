pbjsChunk([133],{734:function(e,t,r){e.exports=r(735)},735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return x}));var i=r(0),a=r(4),n=r(1),d=r(2),s=r(12),o=r.n(s);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m,v="sspBC",f=window,b=f.navigator,g={},h={},y={},w={},O=function(e){if(e){var t=Object(i.isArray)(e)?e:[e];if(t.length>0){var r={requestId:void 0,siteId:[],slotId:[],tagid:[]};return t.forEach((function(e){var t=Object(i.isArray)(e.params)?e.params[0]:e.params;if(t=t||{},g[e.requestId]&&(t.siteId=g[e.requestId][0],t.id=g[e.requestId][1]),t.siteId&&r.siteId.push(t.siteId),t.id&&r.slotId.push(t.id),e.cpm){var a=e.meta||{};r.cpm=e.cpm,r.creativeId=e.creativeId,r.adomain=a.advertiserDomains&&a.advertiserDomains[0],r.networkName=a.networkName}r.tagid.push(e.adUnitCode),r.requestId=e.auctionId||r.requestId,r.timeout=e.timeout||r.timeout})),r}}},j=function(e,t){return e.reduce((function(e,r){return e||Object(i.deepAccess)(r,t)}),!1)},I=function(e){Object(a.a)("https://ssp.wp.pl/bidder/notify",null,JSON.stringify(e),{contentType:"application/json",withCredentials:!1,method:"POST",crossOrigin:!0})},k=function(e){if("banner"===e.mediaType||Object(i.deepAccess)(e,"mediaTypes.banner")||!e.mediaType&&!e.mediaTypes)return{format:e.sizes.map((function(e){return{w:e[0],h:e[1]}})),id:e.bidId}},T=function(e){var t,r=Object(i.deepAccess)(e,"mediaTypes.native");if(r){var a=Object.keys(r);t=[],a.forEach((function(e){var i=function(e,t){var r;switch(e){case"title":r={id:0,required:t.required,title:{len:t.len}};break;case"cta":r={id:1,required:t.required,data:{type:12}};break;case"icon":r={id:2,required:t.required,img:{type:1,w:t.sizes[0],h:t.sizes[1]}};break;case"image":r={id:3,required:t.required,img:{type:3,w:t.sizes[0],h:t.sizes[1]}};break;case"body":r={id:4,required:t.required,data:{type:2}};break;case"sponsoredBy":r={id:5,required:t.required,data:{type:1}}}return r}(e,r[e]);i&&t.push(i)}))}return t?{request:JSON.stringify({native:{assets:t}})}:void 0},q=function(e){var t,r=Object(i.deepAccess)(e,"mediaTypes.video"),a=["api","context","linearity","maxduration","mimes","protocols"];if(r){var n=Object.keys(r),d=r.playerSize;if(t={},d){var s=d.reduce((function(e,t){return t[0]>=e[0]&&t[1]>=e[1]?t:e}),[1,1]);t.w=s[0],t.h=s[1]}n.forEach((function(e){a.indexOf(e)>=0&&(t[e]=r[e])}))}return t},x={code:v,gvlid:676,aliases:[],supportedMediaTypes:[d.b,d.c,d.d],isBidRequestValid:function(e){return!0},buildRequests:function(e,t){if(!e||e.length<1)return!1;var r,a=j(e,"params.siteId"),n=j(e,"params.publisherId"),d=j(e,"params.page")||t.refererInfo.referer,s=j(e,"params.domain")||Object(i.parseUrl)(d).hostname,o=j(e,"params.tmax")?parseInt(j(e,"params.tmax"),10):450,p=j(e,"params.test")?1:void 0;try{f.self===f.top&&document.referrer&&(r=document.referrer)}catch(e){}var l,v,g={id:t.auctionId,site:{id:a,publisher:n?{id:n}:void 0,page:d,domain:s,ref:r},imp:e.map((function(e){return function(e){var t=e.adUnitCode,r=e.bidId,i=e.params,a=void 0===i?{}:i,n=e.ortb2Imp,d=void 0===n?{}:n,s=a.id,o=a.siteId,p=d.ext,u=void 0===p?{}:p,l=e.sizes.length?e.sizes.reduce((function(e,t){return e[0]*e[1]<=t[0]*t[1]?t:e})).join("x"):"1x1";h[t]||(y[l]=y[l]?y[l]+=1:1,h[t]="".concat(l,"_").concat(y[l])),u.data=c({pbsize:h[t]},u.data);var m={id:s&&o?s.padStart(3,"0"):"bidid-"+r,banner:k(e),native:T(e),video:q(e),tagid:t,ext:u};if("function"==typeof e.getFloor){var v,f,b=0;e.sizes.length&&(b=e.sizes.reduce((function(t,r){var i=e.getFloor({mediaType:"banner",size:r}).floor;return t>i?t:i}),0)),v=e.getFloor({mediaType:"native"}),f=e.getFloor({mediaType:"video"}),m.bidfloor=Math.max(b,v,f)}return m}(e)})),tmax:o,user:{},regs:{},test:p};return function(e,t){var r=e.gdprConsent;if(r){var i=r.apiVersion,a=r.gdprApplies,n=r.consentString;m=i,t.regs=c(t.regs,{gdpr:a?1:0}),t.user=c(t.user,{consent:n})}}(t,g),function(e){var t=document.location,r=b.connection,i=void 0===r?{}:r,a=b.deviceMemory,n=b.userAgentData,d=void 0===n?{}:n,s=f.visualViewport||!1,o=[],c={"CH-Ect":i.effectiveType,"CH-Rtt":i.rtt,"CH-SaveData":i.saveData,"CH-Downlink":i.downlink,"CH-DeviceMemory":a,"CH-Dpr":f.devicePixelRatio,"CH-ViewportWidth":s.width,"CH-BrowserBrands":JSON.stringify(d.brands),"CH-isMobile":d.mobile};w.id&&t.pathname===w.path||(w.path=t.pathname,w.id=Math.floor(1e20*Math.random())),Object.keys(c).forEach((function(e){var t=c[e];t&&o.push({name:e,value:t.toString()})}));var p={data:[{id:"12",name:"NetInfo",segment:o},{id:"7",name:"pvid",segment:[{value:"".concat(w.id)}]}]};e.user=u(u({},e.user),p)}(g),function(e,t){var r=e.userIdAsEids;if(r&&r.length){var i={eids:r};t.user=u(u({},t.user),i)}}(e[0],g),{method:"POST",url:"".concat("https://ssp.wp.pl/bidder/","?cs=").concat((l=/^((?!chrome|android|crios|fxios).)*safari/i.test(b.userAgent),v=b.cookieEnabled||!!document.cookie.length,!l&&v),"&bdver=").concat("5.41","&pbver=").concat("6.10.0-pre","&inver=0"),data:JSON.stringify(g),bidderRequest:t}},interpretResponse:function(e,t){var r,a=t.bidderRequest,n=e.body,d=[],s=JSON.parse(t.data).site;return s.sn=n.sn||"mc_adapter",void 0!==n.seatbid&&n.seatbid.forEach((function(e){r=e.seat,e.bid.forEach((function(e){var t=e.adomain,p=e.crid,u=void 0===p?"mcad_".concat(a.auctionId,"_").concat(s.slot):p,l=e.impid,m=e.exp,f=void 0===m?300:m,b=e.ext,h=e.price,y=e.w,w=e.h,O=a.bids.filter((function(e){var t=e.bidId,r=e.params,i=void 0===r?{}:r,a=i.id,n=i.siteId;return(a&&n?a:"bidid-"+t)===l}))[0],j=O||{},I=j.bidId,k=j.params;if(s.slot=k&&k.id,b){var T=b.siteid,q=b.slotid,x=b.pubid,C=b.adlabel;s.id=T||s.id,s.slot=q||s.slot,s.publisherId=x,s.adLabel=C}if(O&&s.id&&!o()(s.id,"bidid")){g[I]=[s.id,s.slot];var S={requestId:I,creativeId:u,cpm:h,currency:n.cur,ttl:f,width:y,height:w,bidderCode:v,meta:{advertiserDomains:t,networkName:r},netRevenue:!0};if(function(e){var t=new RegExp(/^<\?xml/);return e.adm&&e.adm.match(t)}(e))S.adType="instream",S.mediaType="video",S.vastXml=e.adm,S.vastContent=e.adm;else if(function(e){var t=new RegExp(/^{['"]native['"]/);return e.admNative||e.adm&&e.adm.match(t)}(e)){S.mediaType="native";try{var N=e.admNative||JSON.parse(e.adm).native;S.native=function(e){var t={};return e.assets.forEach((function(e){switch(parseInt(e.id)){case 0:t.title=e.title.text;break;case 1:t.cta=e.data.value;break;case 2:t.icon={url:e.img.url,width:e.img.w,height:e.img.h};break;case 3:t.image={url:e.img.url,width:e.img.w,height:e.img.h};break;case 4:t.body=e.data.value;break;case 5:t.sponsoredBy=e.data.value;break;default:Object(i.logWarn)("Unrecognized native asset",e)}})),t.clickUrl=e.link.url,t.impressionTrackers=e.imptrackers,Object(i.isArray)(e.jstracker)?t.javascriptTrackers=e.jstracker:e.jstracker&&(t.javascriptTrackers=[e.jstracker]),t}(N),S.width=1,S.height=1;var D={rid:O.auctionId,crid:S.creativeId,adunit:O.adUnitCode,url:S.native.clickUrl,vendor:r,site:s.id,slot:s.slot,cpm:S.cpm.toPrecision(4)},E='<script type="text/javascript" async="true" src="https://bdr.wpcdn.pl/tag/jstracker.js" '+Object.keys(D).reduce((function(e,t){return e+" data-wpar-".concat(t,'="').concat(D[t],'"')}),"")+"><\/script>";S.native.javascriptTrackers?S.native.javascriptTrackers.push(E):S.native.javascriptTrackers=[E]}catch(t){Object(i.logWarn)("Could not parse native data",e.adm),S.cpm=0}}else S.mediaType="banner",S.ad=function(e,t,r,a,n){var d,s={id:t,seat:a,seatbid:[{bid:[r]}]},o=btoa(encodeURI(JSON.stringify(s)));if(r.adm)try{(d=JSON.parse(r.adm).gam)&&Object.keys(d).length?(d.namedSizes=["fluid"],d.div="div-gpt-ad-x01",d.targeting=c(d.targeting||{},{OAS_retarg:"0",PREBID_ON:"1",emptygaf:"0"})):d=void 0,d&&!d.targeting&&(d.targeting={})}catch(e){Object(i.logWarn)("Could not parse adm data",r.adm)}var p='<head>\n  <title></title>\n  <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <style>\n    body {\n    background-color: transparent;\n    margin: 0;\n    padding: 0;\n  }\n</style>\n  <script>\n  window.rekid = '.concat(e.id,";\n  window.slot = ").concat(parseInt(e.slot,10),";\n  window.responseTimestamp = ").concat(Date.now(),';\n  window.wp_sn = "').concat(e.sn,'";\n  window.mcad = JSON.parse(decodeURI(atob("').concat(o,'")));\n  window.gdpr = ').concat(JSON.stringify(n.gdprConsent),';\n  window.page = "').concat(e.page,'";\n  window.ref = "').concat(e.ref,'";\n  window.adlabel = "').concat(e.adLabel?e.adLabel:"",'";\n  window.pubid = "').concat(e.publisherId?e.publisherId:"",'";\n  ');return p+'<\/script>\n    </head>\n    <body>\n    <div id="c"></div>\n    <script id="wpjslib" crossorigin src="//std.wpcdn.pl/wpjslib/wpjslib-inline.js" async defer><\/script>\n  </body>\n  </html>'}(s,n.id,e,r,a);S.cpm>0&&d.push(S)}else Object(i.logWarn)("Discarding response - no matching request / site id",e.impid)}))})),d},getUserSyncs:function(e,t,r){var i=[];return e.iframeEnabled&&1!=m&&i.push({type:"iframe",url:"".concat("https://ssp.wp.pl/bidder/usersync","?tcf=").concat(m)}),i},onTimeout:function(e){var t=O(e);if(t)return t.event="timeout",I(t),t},onBidWon:function(e){var t=O(e);if(t)return t.event="bidWon",I(t),t}};Object(n.registerBidder)(x),window.pbjs.installedModules.push("sspBCBidAdapter")}},[734]);