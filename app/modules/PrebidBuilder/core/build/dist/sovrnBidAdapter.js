pbjsChunk([19],{15:function(e,t,r){"use strict";t.b=function(e){var t=[];for(var r in e)if(e.hasOwnProperty(r))if("pubProvidedId"===r)t=t.concat(e.pubProvidedId);else{var n=c(e[r],r);n&&t.push(n)}return t},t.a=function(e){var t=[];return e.filter((function(e){return Object(n.isPlainObject)(e.idObj)&&Object.keys(e.idObj).length})).forEach((function(e){Object.keys(e.idObj).forEach((function(r){Object(n.deepAccess)(e,"config.bidders")&&Array.isArray(e.config.bidders)&&Object(n.deepAccess)(i,r+".source")&&t.push({source:i[r].source,bidders:e.config.bidders})}))})),t};var n=r(0),i={trustpid:{source:"trustpid.com",atype:1,getValue:function(e){return e}},intentIqId:{source:"intentiq.com",atype:1},naveggId:{source:"navegg.com",atype:1},pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{getValue:function(e){return e.uid},source:"id5-sync.com",atype:1,getUidExt:function(e){if(e.ext)return e.ext}},parrableId:{source:"parrable.com",atype:1,getValue:function(e){return e.eid?e.eid:e.ccpaOptout?"":null},getUidExt:function(e){var t=Object(n.pick)(e,["ibaOptout","ccpaOptout"]);if(Object.keys(t).length)return t}},idl_env:{source:"liveramp.com",atype:3},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:3,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:3},dmdId:{source:"hcn.health",atype:3},lotamePanoramaId:{source:"crwdcntrl.net",atype:1},criteoId:{source:"criteo.com",atype:1},merkleId:{source:"merkleinc.com",atype:3,getValue:function(e){return e.id},getUidExt:function(e){return e&&e.keyID?{keyID:e.keyID}:void 0}},netId:{source:"netid.de",atype:1},IDP:{source:"zeotap.com",atype:1},hadronId:{source:"audigent.com",atype:1},haloId:{source:"audigent.com",atype:1},quantcastId:{source:"quantcast.com",atype:1},nextrollId:{source:"nextroll.com",atype:1},idx:{source:"idx.lat",atype:1},connectid:{source:"verizonmedia.com",atype:3},fabrickId:{source:"neustar.biz",atype:1},mwOpenLinkId:{source:"mediawallahscript.com",atype:1},tapadId:{source:"tapad.com",atype:1},novatiq:{getValue:function(e){return e.snowflake},source:"novatiq.com",atype:1},uid2:{source:"uidapi.com",atype:3,getValue:function(e){return e.id}},dapId:{source:"akamai.com",atype:1},deepintentId:{source:"deepintent.com",atype:3},admixerId:{source:"admixer.net",atype:3},adtelligentId:{source:"adtelligent.com",atype:3},amxId:{source:"amxrtb.com",atype:1},publinkId:{source:"epsilon.com",atype:3},kpuid:{source:"kpuid.com",atype:3},imuid:{source:"intimatemerger.com",atype:1},connectId:{source:"yahoo.com",atype:3},qid:{source:"adquery.io",atype:1}};function c(e,t){var r=i[t];if(r&&e){var c={};c.source=r.source;var a=Object(n.isFn)(r.getValue)?r.getValue(e):e;if(Object(n.isStr)(a)){var o={id:a,atype:r.atype};if(Object(n.isFn)(r.getUidExt)){var u=r.getUidExt(e);u&&(o.ext=u)}if(c.uids=[o],Object(n.isFn)(r.getEidExt)){var s=r.getEidExt(e);s&&(c.ext=s)}return c}}return null}},730:function(e,t,r){e.exports=r(731)},731:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return f}));var n=r(0),i=r(1),c=r(2),a=r(15),o=r(3);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={mimes:function(e){return Array.isArray(e)&&e.length>0&&e.every((function(e){return"string"==typeof e}))},minduration:function(e){return Object(n.isInteger)(e)},maxduration:function(e){return Object(n.isInteger)(e)},protocols:function(e){return Array.isArray(e)&&e.every((function(e){return e>=1&&e<=10}))},w:function(e){return Object(n.isInteger)(e)},h:function(e){return Object(n.isInteger)(e)},startdelay:function(e){return Object(n.isInteger)(e)},placement:function(e){return Array.isArray(e)&&e.every((function(e){return e>=1&&e<=5}))},linearity:function(e){return-1!==[1,2].indexOf(e)},skip:function(e){return-1!==[0,1].indexOf(e)},skipmin:function(e){return Object(n.isInteger)(e)},skipafter:function(e){return Object(n.isInteger)(e)},sequence:function(e){return Object(n.isInteger)(e)},battr:function(e){return Array.isArray(e)&&e.every((function(e){return e>=1&&e<=17}))},maxextended:function(e){return Object(n.isInteger)(e)},minbitrate:function(e){return Object(n.isInteger)(e)},maxbitrate:function(e){return Object(n.isInteger)(e)},boxingallowed:function(e){return-1!==[0,1].indexOf(e)},playbackmethod:function(e){return Array.isArray(e)&&e.every((function(e){return e>=1&&e<=6}))},playbackend:function(e){return-1!==[1,2,3].indexOf(e)},delivery:function(e){return-1!==[1,2,3].indexOf(e)},pos:function(e){return Array.isArray(e)&&e.every((function(e){return e>=0&&e<=7}))},api:function(e){return Array.isArray(e)&&e.every((function(e){return e>=1&&e<=6}))}},f={code:"sovrn",supportedMediaTypes:[c.b,c.d],gvlid:13,isBidRequestValid:function(e){return!(!e.params.tagid||isNaN(parseFloat(e.params.tagid))||!isFinite(e.params.tagid)||Object(n.deepAccess)(e,"mediaTypes.video.context")===c.a)},buildRequests:function(e,t){try{var r,i,c,u,d=[],f=[];Object(n._each)(e,(function(e){!c&&e.userId&&(c=Object(a.b)(e.userId)).forEach((function(e){e.uids&&e.uids[0]&&("criteo.com"===e.source&&(u=e.uids[0].id),f.push({source:e.source,uid:e.uids[0].id}))})),e.schain&&(i=i||e.schain),r=r||Object(n.getBidIdParameter)("iv",e.params);var t=e.getFloor&&"function"==typeof e.getFloor?e.getFloor({currency:"USD",mediaType:e.mediaTypes&&e.mediaTypes.banner?"banner":"video",size:"*"}):{};t.floor=t.floor||Object(n.getBidIdParameter)("bidfloor",e.params);var o={adunitcode:e.adUnitCode,id:e.bidId,tagid:String(Object(n.getBidIdParameter)("tagid",e.params)),bidfloor:t.floor};if(Object(n.deepAccess)(e,"mediaTypes.banner")){var b=Object(n.deepAccess)(e,"mediaTypes.banner.sizes")||e.sizes,l=(b=(b=Object(n.isArray)(b)&&Object(n.isArray)(b[0])?b:[b]).filter((function(e){return Object(n.isArray)(e)}))).map((function(e){return{w:parseInt(e[0],10),h:parseInt(e[1],10)}}));o.banner={format:l,w:1,h:1}}Object(n.deepAccess)(e,"mediaTypes.video")&&(o.video=function(e){var t={},r=Object(n.deepAccess)(e,"mediaTypes.video",{}),i=Object(n.deepAccess)(e,"params.video",{}),c={};if(Array.isArray(r.playerSize)){var a=Array.isArray(r.playerSize[0])?r.playerSize[0]:r.playerSize;c.w=a[0],c.h=a[1]}var o=s(s(s({},c),r),i);return Object.keys(p).forEach((function(e){o.hasOwnProperty(e)&&(p[e](o[e])?t[e]=o[e]:Object(n.logWarn)("The OpenRTB video param ".concat(e," has been skipped due to misformating. Please refer to OpenRTB 2.5 spec.")))})),t}(e)),o.ext=Object(n.getBidIdParameter)("ext",e.ortb2Imp)||void 0;var y=Object(n.getBidIdParameter)("segments",e.params);y&&(o.ext=o.ext||{},o.ext.deals=y.split(",").map((function(e){return e.trim()}))),d.push(o)}));var b=Object(n.deepClone)(o.b.getConfig("ortb2")),l=b.site||{};l.page=t.refererInfo.referer,l.domain=Object(n.parseUrl)(l.page).hostname;var y={id:Object(n.getUniqueIdentifierStr)(),imp:d,site:l,user:b.user||{}};i&&(y.source={ext:{schain:i}}),t.gdprConsent&&(Object(n.deepSetValue)(y,"regs.ext.gdpr",+t.gdprConsent.gdprApplies),Object(n.deepSetValue)(y,"user.ext.consent",t.gdprConsent.consentString)),t.uspConsent&&Object(n.deepSetValue)(y,"regs.ext.us_privacy",t.uspConsent),c&&(Object(n.deepSetValue)(y,"user.ext.eids",c),Object(n.deepSetValue)(y,"user.ext.tpid",f),u&&Object(n.deepSetValue)(y,"user.ext.prebid_criteoid",u));var m="https://ap.lijit.com/rtb/bid?src=prebid_prebid_6.10.0-pre";return r&&(m+="&iv=".concat(r)),{method:"POST",url:m,data:JSON.stringify(y),options:{contentType:"text/plain"}}}catch(e){Object(n.logError)("Could not build bidrequest, error deatils:",e)}},interpretResponse:function(e){var t=e.body,r=t.id,i=t.seatbid;try{var a=[];return r&&i&&i.length>0&&i[0].bid&&i[0].bid.length>0&&i[0].bid.map((function(e){var t={requestId:e.impid,cpm:parseFloat(e.price),width:parseInt(e.w),height:parseInt(e.h),creativeId:e.crid||e.id,dealId:e.dealid||null,currency:"USD",netRevenue:!0,ttl:e.ext&&e.ext.ttl||90,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]}};e.nurl?(t.mediaType=c.b,t.ad=decodeURIComponent("".concat(e.adm,'<img src="').concat(e.nurl,'">'))):(t.mediaType=c.d,t.vastXml=decodeURIComponent(e.adm)),a.push(t)})),a}catch(e){Object(n.logError)("Could not intrepret bidresponse, error deatils:",e)}},getUserSyncs:function(e,t,r,i){try{var c=[];if(t&&0!==t.length){if(e.iframeEnabled){var a=t.filter((function(e){return Object(n.deepAccess)(e,"body.ext.iid")})).map((function(e){return e.body.ext.iid})),o=[];r&&r.gdprApplies&&"string"==typeof r.consentString&&o.push(["gdpr_consent",r.consentString]),i&&o.push(["us_privacy",i]),a[0]&&(o.push(["informer",a[0]]),c.push({type:"iframe",url:"https://ap.lijit.com/beacon?"+o.map((function(e){return e.join("=")})).join("&")}))}e.pixelEnabled&&t.filter((function(e){return Object(n.deepAccess)(e,"body.ext.sync.pixels")})).reduce((function(e,t){return e.concat(t.body.ext.sync.pixels)}),[]).map((function(e){return e.url})).forEach((function(e){return c.push({type:"image",url:e})}))}return c}catch(e){return[]}}};Object(i.registerBidder)(f),window.pbjs.installedModules.push("sovrnBidAdapter")}},[730]);