pbjsChunk([137],{716:function(e,a,t){e.exports=t(717)},717:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"spec",(function(){return p}));var r=t(0),n=t(1),s=t(2),i=t(3),c="https://n1.smartyads.com/?c=o&m=prebid&secret_key=prebid_js",d="https://as.ck-ie.com/prebidjs?p=7c47322e527cf8bdeb7facc1bb03387a";function o(e){if(!(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency))return!1;switch(e.mediaType){case s.b:return Boolean(e.width&&e.height&&e.ad);case s.d:return Boolean(e.vastUrl);case s.c:return Boolean(e.native&&e.native.title&&e.native.image&&e.native.impressionTrackers);default:return!1}}var p={code:"smartyads",supportedMediaTypes:[s.b,s.d,s.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.sourceid)&&!isNaN(e.params.accountid)&&"prebid"==e.params.host)},buildRequests:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=window;try{e=new URL(t.refererInfo.referer),n=window.top}catch(a){e=n.location,Object(r.logMessage)(a)}var d=[],o={deviceWidth:n.screen.width,deviceHeight:n.screen.height,language:navigator&&navigator.language?navigator.language:"",secure:1,host:e.host,page:e.pathname,coppa:!0===i.b.getConfig("coppa")?1:0,placements:d};-1!=o.language.indexOf("-")&&(o.language=o.language.split("-")[0]),t&&(t.uspConsent&&(o.ccpa=t.uspConsent),t.gdprConsent&&(o.gdpr=t.gdprConsent));for(var p=a.length,u=0;u<p;u++){var g=a[u],l=g.params.traffic||s.b;d.push({placementId:g.params.sourceid,bidId:g.bidId,sizes:g.mediaTypes&&g.mediaTypes[l]&&g.mediaTypes[l].sizes?g.mediaTypes[l].sizes:[],traffic:l,publisherId:g.params.accountid}),g.schain&&(d.schain=g.schain)}return{method:"POST",url:c,data:o}},interpretResponse:function(e){var a=[];e=e.body;for(var t=0;t<e.length;t++){var r=e[t];o(r)&&a.push(r)}return a},getUserSyncs:function(e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=[],n=a.gdprApplies,s=a.consentString,i=void 0===s?"":s;return e.iframeEnabled?r.push({type:"iframe",url:"".concat(d,"&gdpr=").concat(n?1:0,"&gdpr_consent=").concat(i,"&type=iframe&us_privacy=").concat(t)}):r.push({type:"image",url:"".concat(d,"&gdpr=").concat(n?1:0,"&gdpr_consent=").concat(i,"&type=image&us_privacy=").concat(t)}),r}};Object(n.registerBidder)(p),window.pbjs.installedModules.push("smartyadsBidAdapter")}},[716]);