pbjsChunk([47],{15:function(e,t,r){"use strict";t.b=function(e){var t=[];for(var r in e)if(e.hasOwnProperty(r))if("pubProvidedId"===r)t=t.concat(e.pubProvidedId);else{var n=o(e[r],r);n&&t.push(n)}return t},t.a=function(e){var t=[];return e.filter((function(e){return Object(n.isPlainObject)(e.idObj)&&Object.keys(e.idObj).length})).forEach((function(e){Object.keys(e.idObj).forEach((function(r){Object(n.deepAccess)(e,"config.bidders")&&Array.isArray(e.config.bidders)&&Object(n.deepAccess)(i,r+".source")&&t.push({source:i[r].source,bidders:e.config.bidders})}))})),t};var n=r(0),i={trustpid:{source:"trustpid.com",atype:1,getValue:function(e){return e}},intentIqId:{source:"intentiq.com",atype:1},naveggId:{source:"navegg.com",atype:1},pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{getValue:function(e){return e.uid},source:"id5-sync.com",atype:1,getUidExt:function(e){if(e.ext)return e.ext}},parrableId:{source:"parrable.com",atype:1,getValue:function(e){return e.eid?e.eid:e.ccpaOptout?"":null},getUidExt:function(e){var t=Object(n.pick)(e,["ibaOptout","ccpaOptout"]);if(Object.keys(t).length)return t}},idl_env:{source:"liveramp.com",atype:3},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:3,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:3},dmdId:{source:"hcn.health",atype:3},lotamePanoramaId:{source:"crwdcntrl.net",atype:1},criteoId:{source:"criteo.com",atype:1},merkleId:{source:"merkleinc.com",atype:3,getValue:function(e){return e.id},getUidExt:function(e){return e&&e.keyID?{keyID:e.keyID}:void 0}},netId:{source:"netid.de",atype:1},IDP:{source:"zeotap.com",atype:1},hadronId:{source:"audigent.com",atype:1},haloId:{source:"audigent.com",atype:1},quantcastId:{source:"quantcast.com",atype:1},nextrollId:{source:"nextroll.com",atype:1},idx:{source:"idx.lat",atype:1},connectid:{source:"verizonmedia.com",atype:3},fabrickId:{source:"neustar.biz",atype:1},mwOpenLinkId:{source:"mediawallahscript.com",atype:1},tapadId:{source:"tapad.com",atype:1},novatiq:{getValue:function(e){return e.snowflake},source:"novatiq.com",atype:1},uid2:{source:"uidapi.com",atype:3,getValue:function(e){return e.id}},dapId:{source:"akamai.com",atype:1},deepintentId:{source:"deepintent.com",atype:3},admixerId:{source:"admixer.net",atype:3},adtelligentId:{source:"adtelligent.com",atype:3},amxId:{source:"amxrtb.com",atype:1},publinkId:{source:"epsilon.com",atype:3},kpuid:{source:"kpuid.com",atype:3},imuid:{source:"intimatemerger.com",atype:1},connectId:{source:"yahoo.com",atype:3},qid:{source:"adquery.io",atype:1}};function o(e,t){var r=i[t];if(r&&e){var o={};o.source=r.source;var a=Object(n.isFn)(r.getValue)?r.getValue(e):e;if(Object(n.isStr)(a)){var d={id:a,atype:r.atype};if(Object(n.isFn)(r.getUidExt)){var c=r.getUidExt(e);c&&(d.ext=c)}if(o.uids=[d],Object(n.isFn)(r.getEidExt)){var s=r.getEidExt(e);s&&(o.ext=s)}return o}}return null}},557:function(e,t,r){e.exports=r(558)},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasTypeVideo=h,t.isValid=b,r.d(t,"spec",(function(){return x}));var n=r(2),i=r(17),o=r(13),a=r(11),d=r.n(a),c=r(7),s=r(1),u=r(15),p=r(0);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m="https://onetag-sys.com/usync/",y=Object(c.b)(241);function h(e){return void 0!==e.mediaTypes&&void 0!==e.mediaTypes.video}function b(e,t){if(e===n.b)return j(t).length>0;if(e===n.d&&h(t)){var r=t.mediaTypes.video.context;if("outstream"===r||"instream"===r)return w(t).length>0}return!1}function v(e){try{return void 0!==e.document.hidden?e.document.hidden:void 0!==e.document.msHidden?e.document.msHidden:void 0!==e.document.webkitHidden?e.document.webkitHidden:null}catch(e){return null}}function I(e){var t=e.params;this.adUnitCode=e.adUnitCode,this.bidId=e.bidId,this.bidderRequestId=e.bidderRequestId,this.auctionId=e.auctionId,this.transactionId=e.transactionId,this.pubId=t.pubId,this.ext=t.ext,t.pubClick&&(this.click=t.pubClick),t.dealId&&(this.dealId=t.dealId);var r=function(e){var t=document.getElementById(e);try{for(var r=t.getBoundingClientRect(),n=r.top,i=r.left,o=r.width,a=r.height,d=t.ownerDocument.defaultView,c={top:n+d.pageYOffset,left:i+d.pageXOffset,width:o,height:a},s=d.frameElement;null!=s;){var u=s.getBoundingClientRect(),p=u.top,l=u.left;c.top+=p+d.pageYOffset,c.left+=l+d.pageXOffset,s=(d=d.parent).frameElement}return c}catch(e){return null}}(e.adUnitCode);r&&(this.coords=r)}function O(){try{if(null!=window.performance&&null!=window.performance.timing){var e={},t=window.performance.timing;return e.pageLoadTime=t.loadEventEnd-t.navigationStart,e.connectTime=t.responseEnd-t.requestStart,e.renderTime=t.domComplete-t.domLoading,e}}catch(e){return null}return null}function w(e){var t=e.mediaTypes.video.playerSize;return void 0!==t&&Array.isArray(t)&&t.length>0?T(t):[]}function j(e){return void 0!==e.mediaTypes&&void 0!==e.mediaTypes.banner&&void 0!==e.mediaTypes.banner.sizes&&Array.isArray(e.mediaTypes.banner.sizes)&&e.mediaTypes.banner.sizes.length>0?T(e.mediaTypes.banner.sizes):!h(e)&&e.sizes&&Array.isArray(e.sizes)?T(e.sizes):[]}function T(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push({width:n[0],height:n[1]})}return t}var x={code:"onetag",gvlid:241,supportedMediaTypes:[n.b,n.d],isBidRequestValid:function(e){return void 0!==e&&void 0!==e.params&&"string"==typeof e.params.pubId&&(b(n.b,e)||b(n.d,e))},buildRequests:function(e,t){var r,i,o,a,d,c,s=g({bids:(a=e,d=a.filter((function(e){return h(e)})).map((function(e){var t={};return I.call(t,e),t.context=e.mediaTypes.video.context,t.playerSize=w(e),t.mediaTypeInfo=Object(p.deepClone)(e.mediaTypes.video),t.type=n.d,t})),c=a.filter((function(e){return b(n.b,e)})).map((function(e){var t={};return I.call(t,e),t.sizes=j(e),t.type=n.b,t.mediaTypeInfo=Object(p.deepClone)(e.mediaTypes.banner),t})),d.concat(c))},(r=function(){var e=window,t=window.parent,r=0;try{for(;e!==e.parent;)(t=e.parent).location.href,e=e.parent}catch(n){r=t===e.top?1:2}return{topmostFrame:e,currentFrameNesting:r}}(),i=r.topmostFrame,o=r.currentFrameNesting,{location:i.location.href,referrer:""!==i.document.referrer?i.document.referrer:null,ancestorOrigin:window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0?window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]:null,masked:o,wWidth:i.innerWidth,wHeight:i.innerHeight,oWidth:i.outerWidth,oHeight:i.outerHeight,sWidth:i.screen.width,sHeight:i.screen.height,aWidth:i.screen.availWidth,aHeight:i.screen.availHeight,sLeft:"screenLeft"in i?i.screenLeft:i.screenX,sTop:"screenTop"in i?i.screenTop:i.screenY,xOffset:i.pageXOffset,yOffset:i.pageYOffset,docHidden:v(i),docHeight:i.document.body?i.document.body.scrollHeight:null,hLength:history.length,timing:O(),version:{prebid:"6.10.0-pre",adapter:"1.1.0"}}));t&&t.gdprConsent&&(s.gdprConsent={consentString:t.gdprConsent.consentString,consentRequired:t.gdprConsent.gdprApplies}),t&&t.uspConsent&&(s.usPrivacy=t.uspConsent),e&&0!==e.length&&e[0].userId&&(s.userId=Object(u.b)(e[0].userId));try{y.hasLocalStorage()&&(s.onetagSid=y.getDataFromLocalStorage("onetag_sid"))}catch(e){}return{method:"POST",url:"https://onetag-sys.com/prebid-request",data:JSON.stringify(s)}},interpretResponse:function(e,t){var r=e.body,a=[],c=JSON.parse(t.data);return!r||r.nobid&&!0===r.nobid?a:r.bids&&Array.isArray(r.bids)&&0!==r.bids.length?(r.bids.forEach((function(e){var t={requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,dealId:null==e.dealId?e.dealId:"",currency:e.currency,netRevenue:e.netRevenue||!1,mediaType:e.mediaType,meta:{mediaType:e.mediaType,advertiserDomains:e.adomain},ttl:e.ttl||300};if(e.mediaType===n.b)t.ad=e.ad;else if(e.mediaType===n.d){var r=d()(c.bids,(function(t){return t.bidId===e.requestId&&t.type===n.d})),s=r.context,u=r.adUnitCode;s===i.a?(t.vastUrl=e.vastUrl,t.videoCacheKey=e.videoCacheKey):s===i.b&&(t.vastXml=e.ad,t.vastUrl=e.vastUrl,e.rendererUrl&&(t.renderer=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=o.a.install({id:e.requestId,url:e.rendererUrl,config:t,adUnitCode:e.adUnitCode,loaded:!1});try{r.setRender((function(t){var r=t.renderer,n=t.width,i=t.height,o=t.vastXml,a=t.adUnitCode;r.push((function(){window.onetag.Player.init(g(g({},e),{},{width:n,height:i,vastXml:o,nodeId:a,config:r.getConfig()}))}))}))}catch(e){}return r}(g(g({},e),{},{adUnitCode:u}))))}a.push(t)})),a):a},getUserSyncs:function(e,t,r,n){var i=[],o="";return r&&("boolean"==typeof r.gdprApplies&&(o+="&gdpr="+(r.gdprApplies?1:0)),"string"==typeof r.consentString&&(o+="&gdpr_consent="+r.consentString)),n&&"string"==typeof n&&(o+="&us_privacy="+n),e.iframeEnabled&&i.push({type:"iframe",url:m+"?cb="+(new Date).getTime()+o}),e.pixelEnabled&&i.push({type:"image",url:m+"?tag=img"+o}),i}};Object(s.registerBidder)(x),window.pbjs.installedModules.push("onetagBidAdapter")}},[557]);