pbjsChunk([299],{302:function(e,n,t){e.exports=t(303)},303:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"spec",(function(){return d}));var a=t(1),r=t(2);function i(e,n,t,a,r,i,o){try{var s=e[i](o),d=s.value}catch(e){return void t(e)}s.done?n(d):Promise.resolve(d).then(a,r)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function s(e){i(o,a,r,s,d,"next",e)}function d(e){i(o,a,r,s,d,"throw",e)}s(void 0)}))}}var s=[r.b,r.d],d={code:"displayio",gvlid:999,supportedMediaTypes:s,isBidRequestValid:function(e){return!!(e.params&&e.params.placementId&&e.params.siteId&&e.params.adsSrvDomain&&e.params.cdnDomain)},buildRequests:function(e,n){var t=this;return e.map((function(e){return{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},url:"//"+e.params.adsSrvDomain+"/srv?method=getPlacement&app="+e.params.siteId+"&placement="+e.params.placementId,data:t._getPayload(e,n)}}))},interpretResponse:function(e,n){var t=e.body.data.ads,a=[],r=n.data.data;if(t.length){var i=t[0].ad.data,o={requestId:r.id,cpm:i.ecpm,width:i.w,height:i.h,netRevenue:!0,ttl:300,creativeId:i.adId||0,currency:"USD",referrer:r.data.ref,mediaType:t[0].ad.subtype,ad:i.markup,placement:r.placement,adData:i};"videoVast"===o.vastUrl&&(o.vastUrl=i.videos[0].url),a.push(o)}return a},_getPayload:function(e,n){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection,a="us_web_xxxxxxxxxxxx".replace(/[x]/g,(function(e){var n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)})),r=e.params,i=r.siteId,o=r.placementId,s=n.refererInfo,d=n.uspConsent,u=n.gdprConsent,l={consent:"-1",gdpr:"-1"};u&&(void 0!==u.consentString&&(l.consent=u.consentString),void 0!==u.gdprApplies&&(l.gdpr=u.gdprApplies?"1":"0"));var m={userSession:a,data:{id:e.bidId,action:"getPlacement",app:i,placement:o,data:{pagecat:r.pageCategory?r.pageCategory.split(",").map((function(e){return e.trim()})):[],keywords:r.keywords?r.keywords.split(",").map((function(e){return e.trim()})):[],lang_content:document.documentElement.lang,lang:window.navigator.language,domain:window.location.hostname,page:window.location.href,ref:s.referer,userids:c(),geo:""},complianceData:{child:"-1",us_privacy:d,dnt:window.navigator.doNotTrack,iabConsent:{},mediation:{consent:l.consent,gdpr:l.gdpr}},integration:"JS",omidpn:"Displayio",mediationPlatform:0,prebidVersion:"1.0.0",device:{w:window.screen.width,h:window.screen.height,connection_type:t?t.effectiveType:""}}};return navigator.permissions&&navigator.permissions.query({name:"geolocation"}).then((function(e){"granted"===e.state&&(m.data.data.geo=function(){return p.apply(this,arguments)}())})),m}};function c(){var e={};try{e=window.owpbjs.getUserIdsAsEids()}catch(e){}return e}function p(){return(p=o(regeneratorRuntime.mark((function e(){var n,t,a,r,i,o,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,t=function(){return new Promise((function(e,n){return navigator.geolocation.getCurrentPosition(e,n)}))},e.prev=2,e.next=5,t();case 5:a=e.sent,r=a.coords,i=r.latitude,o=r.longitude,s=r.accuracy,n={lat:i,lng:o,precision:s},e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}Object(a.registerBidder)(d),window.pbjs.installedModules.push("displayioBidAdapter")}},[302]);