pbjsChunk([316],{264:function(t,n,e){t.exports=e(265)},265:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"consentAPI",(function(){return s})),e.d(n,"consentTimeout",(function(){return r})),e.d(n,"staticConsentData",(function(){return u})),n.requestBidsHook=f,n.resetConsentData=function(){l=void 0,s=void 0,i.uspDataHandler.setConsentData(null)},n.setConsentConfig=P;var a=e(0),o=e(3),i=e(9);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s,r,u,l,d=!1,p={iab:function(t,n,e){var o=(u={},{consentDataCallback:function(a,o){o&&a.uspString&&(u.usPrivacy=a.uspString),u.usPrivacy?t(u,e):n("Unable to get USP consent string.",e)}}),i={},c=function(){for(var t,n,e=window;!t;){try{if("function"==typeof e.__uspapi){n=e.__uspapi,t=e;break}}catch(t){}try{if(e.frames.__uspapiLocator){t=e;break}}catch(t){}if(e===window.top)break;e=e.parent}return{uspapiFrame:t,uspapiFunction:n}}(),s=c.uspapiFrame,r=c.uspapiFunction;var u;if(!s)return n("USP CMP not found.",e);Object(a.isFn)(r)?(Object(a.logInfo)("Detected USP CMP is directly accessible, calling it now..."),r("getUSPData",1,o.consentDataCallback)):(Object(a.logInfo)("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."),function(t,n,e){function a(t){var n=t&&t.data&&t.data.__uspapiReturn;n&&n.callId&&void 0!==i[n.callId]&&(i[n.callId](n.returnValue,n.success),delete i[n.callId])}window.__uspapi=function(t,e,a){var o=Math.random()+"",c={__uspapiCall:{command:t,version:e,callId:o}};i[o]=a,n.postMessage(c,"*")},window.addEventListener("message",a,!1),window.__uspapi(t,1,e)}("getUSPData",s,o.consentDataCallback))},static:function(t,n,e){t(u,e)}};function f(t,n){var e={context:this,args:[n],nextFn:t,adUnits:n.adUnits||pbjs.adUnits,bidsBackHandler:n.bidsBackHandler,haveExited:!1,timer:null};if(!p[s])return Object(a.logWarn)("USP framework (".concat(s,") is not a supported framework. Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args);p[s].call(this,g,m,e),e.haveExited||(0===r?g(void 0,e):e.timer=setTimeout(b.bind(null,e),r))}function g(t,n){!t||!t.usPrivacy?m("USPAPI returned unexpected value during lookup process.",n,t):(clearTimeout(n.timer),function(t){t&&t.usPrivacy&&(l=t.usPrivacy,i.uspDataHandler.setConsentData(l))}(t),y(null,n))}function b(t){m("USPAPI workflow exceeded timeout threshold.",t)}function m(t,n,e){clearTimeout(n.timer),y(t,n,e)}function y(t,n,e){if(!1===n.haveExited){n.haveExited=!0;var o=n.context,i=n.args,c=n.nextFn;t&&Object(a.logWarn)(t+" Resuming auction without consent data as per consentManagement config.",e),c.apply(o,i)}}function P(t){(t=t&&t.usp)&&"object"===c(t)?(Object(a.isStr)(t.cmpApi)?s=t.cmpApi:(s="iab",Object(a.logInfo)("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat("iab",")."))),Object(a.isNumber)(t.timeout)?r=t.timeout:(r=50,Object(a.logInfo)("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50,")."))),Object(a.logInfo)("USPAPI consentManagement module has been activated..."),"static"===s&&(Object(a.isPlainObject)(t.consentData)&&Object(a.isPlainObject)(t.consentData.getUSPData)?(t.consentData.getUSPData.uspString&&(u={usPrivacy:t.consentData.getUSPData.uspString}),r=0):Object(a.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),d||pbjs.requestBids.before(f,50),d=!0):Object(a.logWarn)("consentManagement.usp config not defined, exiting usp consent manager")}o.b.getConfig("consentManagement",(function(t){return P(t.consentManagement)})),window.pbjs.installedModules.push("consentManagementUsp")}},[264]);