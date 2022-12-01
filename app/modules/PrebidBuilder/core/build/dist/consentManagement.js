pbjsChunk([317],{262:function(n,t,e){n.exports=e(263)},263:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"allowAuction",(function(){return b})),e.d(t,"userCMP",(function(){return l})),e.d(t,"consentTimeout",(function(){return u})),e.d(t,"gdprScope",(function(){return f})),e.d(t,"staticConsentData",(function(){return p})),t.requestBidsHook=w,t.resetConsentData=function(){g=void 0,l=void 0,m=0,i.gdprDataHandler.setConsentData(null)},t.setConsentConfig=k;var o=e(0),a=e(3),i=e(9),c=e(12),r=e.n(c);function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function d(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var l,u,f,p,g,b={value:true,definedInConfig:!1},m=0,C=!1,v={iab:function(n,t,e){function a(a,i){Object(o.logInfo)("Received a response from CMP",a),i?!1!==a.gdprApplies&&"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus||n(a,e):t("CMP unable to register callback function.  Please check CMP setup.",e)}var i=function(){var t={};function a(){t.getConsentData&&t.getVendorConsents&&(Object(o.logInfo)("Received all requested responses from CMP",t),n(t,e))}return{consentDataCallback:function(n){t.getConsentData=n,a()},vendorConsentsCallback:function(n){t.getVendorConsents=n,a()}}}(),c={},s=function(){for(var n,t,e=window;!n;){try{if("function"==typeof e.__tcfapi||"function"==typeof e.__cmp){"function"==typeof e.__tcfapi?(m=2,t=e.__tcfapi):(m=1,t=e.__cmp),n=e;break}}catch(n){}try{if(e.frames.__tcfapiLocator){m=2,n=e;break}}catch(n){}try{if(e.frames.__cmpLocator){m=1,n=e;break}}catch(n){}if(e===window.top)break;e=e.parent}return{cmpFrame:n,cmpFunction:t}}(),l=s.cmpFrame,u=s.cmpFunction;if(!l)return t("CMP not found.",e);Object(o.isFn)(u)?(Object(o.logInfo)("Detected CMP API is directly accessible, calling it now..."),1===m?(u("getConsentData",null,i.consentDataCallback),u("getVendorConsents",null,i.vendorConsentsCallback)):2===m&&u("addEventListener",m,a)):1===m&&window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp?(Object(o.logInfo)("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."),f("getConsentData",i.consentDataCallback),f("getVendorConsents",i.vendorConsentsCallback)):(Object(o.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),1===m?(p("getConsentData",l,i.consentDataCallback),p("getVendorConsents",l,i.vendorConsentsCallback)):2===m&&p("addEventListener",l,a));function f(n,t){var a=e.adUnits,i=1,c=1;if(Array.isArray(a)&&a.length>0){var r=Object(o.getAdUnitSizes)(a[0]);i=r[0][0],c=r[0][1]}window.$sf.ext.register(i,c,(function(e,o){if("cmpReturn"===e){var a="getConsentData"===n?o.vendorConsentData:o.vendorConsents;t(a)}})),window.$sf.ext.cmp(n)}function p(n,t,e){var o=2===m?"__tcfapi":"__cmp",a="".concat(o,"Call");function i(n){var t="".concat(o,"Return"),e="string"==typeof n.data&&r()(n.data,t)?JSON.parse(n.data):n.data;if(e[t]&&e[t].callId){var a=e[t];void 0!==c[a.callId]&&c[a.callId](a.returnValue,a.success)}}2===m?(window[o]=function(n,e,o,i){var r=Math.random()+"",s=d({},a,{command:n,version:e,parameter:i,callId:r});c[r]=o,t.postMessage(s,"*")},window.addEventListener("message",i,!1),window[o](n,m,e)):(window[o]=function(n,e,o){var i=Math.random()+"",r=d({},a,{command:n,parameter:e,callId:i});c[i]=o,t.postMessage(r,"*")},window.addEventListener("message",i,!1),window[o](n,void 0,e))}},static:function(n,t,e){n(p,e)}};function w(n,t){var e={context:this,args:[t],nextFn:n,adUnits:t.adUnits||pbjs.adUnits,bidsBackHandler:t.bidsBackHandler,haveExited:!1,timer:null};return g?(Object(o.logInfo)("User consent information already known.  Pulling internally stored information..."),M(null,e)):r()(Object.keys(v),l)?(v[l].call(this,y,D,e),void(e.haveExited||(0===u?y(void 0,e):e.timer=setTimeout(j.bind(null,e),u)))):(Object(o.logWarn)("CMP framework (".concat(l,") is not a supported framework.  Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args))}function y(n,t){"static"===l&&2===(m=n.getConsentData?1:n.getTCData?2:0)&&(n=n.getTCData);var e=1===m?function(n){var t=n&&n.getConsentData&&n.getConsentData.gdprApplies;return!("boolean"==typeof t&&(!0!==t||Object(o.isStr)(n.getConsentData.consentData)&&Object(o.isPlainObject)(n.getVendorConsents)&&Object.keys(n.getVendorConsents).length>1))}:2===m?function(){var t=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:f,e=n&&n.tcString;return!("boolean"==typeof t&&(!0!==t||Object(o.isStr)(e)))}:null;b.definedInConfig&&2===m?Object(o.logWarn)("'allowAuctionWithoutConsent' ignored for TCF 2"):b.definedInConfig||1!==m||Object(o.logInfo)("'allowAuctionWithoutConsent' using system default: (".concat(true,").")),Object(o.isFn)(e)?e(n)?D("CMP returned unexpected value during lookup process.",t,n):(clearTimeout(t.timer),O(n),M(null,t)):D("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.",t,n)}function j(n){2===m?(Object(o.logWarn)("No response from CMP, continuing auction..."),O(void 0),M(null,n)):D("CMP workflow exceeded timeout threshold.",n)}function D(n,t,e){clearTimeout(t.timer),b.value&&1===m&&O(void 0),M(n,t,e)}function O(n){1===m?g={consentString:n?n.getConsentData.consentData:void 0,vendorData:n?n.getVendorConsents:void 0,gdprApplies:n?n.getConsentData.gdprApplies:f}:(g={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:f},n&&n.addtlConsent&&Object(o.isStr)(n.addtlConsent)&&(g.addtlConsent=n.addtlConsent)),g.apiVersion=m,i.gdprDataHandler.setConsentData(g)}function M(n,t,e){if(!1===t.haveExited){t.haveExited=!0;var a=t.context,i=t.args,c=t.nextFn;n?b.value&&1===m?(Object(o.logWarn)(n+" 'allowAuctionWithoutConsent' activated.",e),c.apply(a,i)):(Object(o.logError)(n+" Canceling auction as per consentManagement config.",e),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():Object(o.logError)("Error executing bidsBackHandler")):c.apply(a,i)}}function k(n){(n=n&&(n.gdpr||n.usp?n.gdpr:n))&&"object"===s(n)?(Object(o.isStr)(n.cmpApi)?l=n.cmpApi:(l="iab",Object(o.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab",")."))),Object(o.isNumber)(n.timeout)?u=n.timeout:(u=1e4,Object(o.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4,")."))),"boolean"==typeof n.allowAuctionWithoutConsent&&(b.value=n.allowAuctionWithoutConsent,b.definedInConfig=!0),f=!0===n.defaultGdprScope,Object(o.logInfo)("consentManagement module has been activated..."),"static"===l&&(Object(o.isPlainObject)(n.consentData)?(p=n.consentData,u=0):Object(o.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),C||pbjs.requestBids.before(w,50),C=!0):Object(o.logWarn)("consentManagement config not defined, exiting consent manager")}a.b.getConfig("consentManagement",(function(n){return k(n.consentManagement)})),window.pbjs.installedModules.push("consentManagement")}},[262]);