pbjsChunk([301],{298:function(e,r,t){e.exports=t(299)},299:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"adpodUtils",(function(){return v})),r.buildDfpVideoUrl=T,r.notifyTranslationModule=A,r.buildAdpodVideoUrl=C;var a=t(31),n=t(23),o=t(0),d=t(3),c=t(8),i=t(16),s=t(9),l=t(10),p=t.n(l),u=t(5),_=t.n(u);function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(){return(g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var f={env:"vp",gdfp_req:1,output:"vast",unviewed_position_start:1},v={};function T(e){if(e.params||e.url){var r=e.adUnit,t=e.bid||n.d.getWinningBids(r.code)[0],a={};if(e.url&&(a=Object(o.parseUrl)(e.url,{noDecodeWholeURL:!0}),Object(o.isEmpty)(e.params)))return function(e,r,t){var a=E(r,e,"search");a&&(e.search.description_url=a);var n=j(r,t);return e.search.cust_params=e.search.cust_params?e.search.cust_params+"%26"+n:n,Object(o.buildUrl)(e)}(a,t,e);var d={correlator:Date.now(),sz:Object(o.parseSizesInput)(Object(o.deepAccess)(r,"mediaTypes.video.playerSize")).join("|"),url:encodeURIComponent(location.href)},c=j(t,e),i=g({},f,a.search,d,e.params,{cust_params:c}),l=E(t,e,"params");l&&(i.description_url=l);var p=s.gdprDataHandler.getConsentData();p&&("boolean"==typeof p.gdprApplies&&(i.gdpr=Number(p.gdprApplies)),p.consentString&&(i.gdpr_consent=p.consentString),p.addtlConsent&&(i.addtl_consent=p.addtlConsent));var u=s.uspDataHandler.getConsentData();return u&&(i.us_privacy=u),Object(o.buildUrl)({protocol:"https",host:"securepubads.g.doubleclick.net",pathname:"/gampad/ads",search:i})}Object(o.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl")}function A(e){e.call(this,"dfp")}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.code,t=e.params,a=e.callback;if(t&&a){var n={correlator:Date.now(),sz:d(r),url:encodeURIComponent(location.href)};v.getTargeting({codes:[r],callback:c})}else Object(o.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl");function d(e){var r=i.a.getAdUnits().filter((function(r){return r.code===e})),t=Object(o.deepAccess)(r[0],"mediaTypes.video.playerSize");return Object(o.parseSizesInput)(t).join("|")}function c(e,d){var c;if(e)a(e,null);else{var i=(b(c={},v.TARGETING_KEY_PB_CAT_DUR,void 0),b(c,v.TARGETING_KEY_CACHE_ID,void 0),c),l={};d[r]&&(l=d[r].reduce((function(e,r){return Object.keys(r)[0]===v.TARGETING_KEY_PB_CAT_DUR?e[v.TARGETING_KEY_PB_CAT_DUR]=void 0!==e[v.TARGETING_KEY_PB_CAT_DUR]?e[v.TARGETING_KEY_PB_CAT_DUR]+","+r[v.TARGETING_KEY_PB_CAT_DUR]:r[v.TARGETING_KEY_PB_CAT_DUR]:Object.keys(r)[0]===v.TARGETING_KEY_CACHE_ID&&(e[v.TARGETING_KEY_CACHE_ID]=r[v.TARGETING_KEY_CACHE_ID]),e}),i));var p=encodeURIComponent(Object(o.formatQS)(l)),u=g({},f,n,t,{cust_params:p}),_=s.gdprDataHandler.getConsentData();_&&("boolean"==typeof _.gdprApplies&&(u.gdpr=Number(_.gdprApplies)),_.consentString&&(u.gdpr_consent=_.consentString),_.addtlConsent&&(u.addtl_consent=_.addtlConsent));var T=s.uspDataHandler.getConsentData();T&&(u.us_privacy=T);var A=Object(o.buildUrl)({protocol:"https",host:"securepubads.g.doubleclick.net",pathname:"/gampad/ads",search:u});a(null,A)}}}function E(e,r,t){if(!d.b.getConfig("cache.url"))if(Object(o.deepAccess)(r,"".concat(t,".description_url")))Object(o.logError)("input cannnot contain description_url");else{var a=e&&e.vastUrl;if(a)return encodeURIComponent(a)}}function j(e,r){var t=e&&e.adserverTargeting||{},a={},d=r&&r.adUnit;if(d){var c=n.d.getAllTargeting(d.code);a=c?c[d.code]:{}}var i=g({},{hb_uuid:e&&e.videoCacheKey},{hb_cache_id:e&&e.videoCacheKey},a,t);p.a.emit(_.a.EVENTS.SET_TARGETING,b({},d.code,i));var s=g({},i,Object(o.deepAccess)(r,"params.cust_params"));return encodeURIComponent(Object(o.formatQS)(s))}d.b.getConfig("brandCategoryTranslation.translationFile")&&Object(c.a)("registerAdserver").before(A),Object(a.a)("dfp",{buildVideoUrl:T,buildAdpodVideoUrl:C,getAdpodTargeting:function(e){return v.getTargeting(e)}}),Object(c.e)("adpod",v),window.pbjs.installedModules.push("dfpAdServerVideo")}},[298]);