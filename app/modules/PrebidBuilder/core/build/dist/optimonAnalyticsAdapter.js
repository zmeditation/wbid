pbjsChunk([44],{575:function(e,n,t){e.exports=t(576)},576:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),a=t(9),u=Object(r.a)({global:"OptimonAnalyticsAdapter",handler:"on",analyticsType:"bundle"});a.default.registerAnalyticsAdapter({adapter:u,code:"optimon"}),n.default=u,window.pbjs.installedModules.push("optimonAnalyticsAdapter")},6:function(e,n,t){"use strict";n.a=function(e){var n,t=e.url,r=e.analyticsType,a=e.global,l=e.handler,S=[],m=0,j=!0;(function(){if(j){for(var e=0;e<S.length;e++)S[e]();S.push=function(e){e()},j=!1}Object(o.logMessage)("event count sent to ".concat(a,": ").concat(m))})();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===N&&window[a](l,n,t);this.getAdapterType()===q&&U.apply(void 0,arguments)},enqueue:B,enableAnalytics:R,disableAnalytics:function(){Object(o._each)(n,(function(e,n){s.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:R},getAdapterType:function(){return r},getGlobal:function(){return a},getHandler:function(){return l},getUrl:function(){return t}};function U(e){var n=e.eventType,r=e.args,a=e.callback;Object(u.a)(t,a,JSON.stringify({eventType:n,args:r}))}function B(e){var n=e.eventType,t=e.args,r=this;a&&window[a]&&n&&t?this.track({eventType:n,args:t}):S.push((function(){m++,r.track({eventType:n,args:t})}))}function R(e){var t,r=this,u=this;"object"!==c(e)||"object"!==c(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(s.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==T&&B.call(u,{eventType:n,args:t})}})),i(t={},y,(function(e){return r.enqueue({eventType:y,args:e})})),i(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),i(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),i(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),i(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),i(t,d,(function(e){return r.enqueue({eventType:d,args:e})})),i(t,E,(function(e){return r.enqueue({eventType:E,args:e})})),i(t,A,(function(e){return r.enqueue({eventType:A,args:e})})),i(t,_,(function(e){return r.enqueue({eventType:_,args:e})})),i(t,f,(function(e){return r.enqueue({eventType:f,args:e})})),i(t,D,(function(e){return r.enqueue({eventType:D,args:e})})),i(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),i(t,O,(function(e){return r.enqueue({eventType:O,args:e})})),i(t,I,(function(e){return r.enqueue({eventType:I,args:e})})),i(t,p,(function(n){n.config="object"===c(e)&&e.options||{},r.enqueue({eventType:p,args:n})})),n=t,Object(o._each)(n,(function(e,n){s.on(n,e)}))):Object(o.logMessage)('Analytics adapter for "'.concat(a,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return Object(o.logMessage)('Analytics adapter for "'.concat(a,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),u=t(4),o=t(0);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=t(10),l=a.a.EVENTS,p=l.AUCTION_INIT,f=l.AUCTION_END,y=l.REQUEST_BIDS,g=l.BID_REQUESTED,T=l.BID_TIMEOUT,b=l.BID_RESPONSE,v=l.NO_BID,d=l.BID_WON,E=l.BID_ADJUSTMENT,A=l.BIDDER_DONE,_=l.SET_TARGETING,D=l.AD_RENDER_FAILED,h=l.AD_RENDER_SUCCEEDED,O=l.AUCTION_DEBUG,I=l.ADD_AD_UNITS,q="endpoint",N="bundle"}},[575]);