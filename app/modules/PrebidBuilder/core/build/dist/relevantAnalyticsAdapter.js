pbjsChunk([33],{6:function(e,n,t){"use strict";n.a=function(e){var n,t=e.url,r=e.analyticsType,a=e.global,l=e.handler,q=[],N=0,S=!0;(function(){if(S){for(var e=0;e<q.length;e++)q[e]();q.push=function(e){e()},S=!1}Object(u.logMessage)("event count sent to ".concat(a,": ").concat(N))})();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===j&&window[a](l,n,t);this.getAdapterType()===I&&m.apply(void 0,arguments)},enqueue:U,enableAnalytics:B,disableAnalytics:function(){Object(u._each)(n,(function(e,n){s.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:B},getAdapterType:function(){return r},getGlobal:function(){return a},getHandler:function(){return l},getUrl:function(){return t}};function m(e){var n=e.eventType,r=e.args,a=e.callback;Object(o.a)(t,a,JSON.stringify({eventType:n,args:r}))}function U(e){var n=e.eventType,t=e.args,r=this;a&&window[a]&&n&&t?this.track({eventType:n,args:t}):q.push((function(){N++,r.track({eventType:n,args:t})}))}function B(e){var t,r=this,o=this;"object"!==c(e)||"object"!==c(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(s.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==v&&U.call(o,{eventType:n,args:t})}})),i(t={},y,(function(e){return r.enqueue({eventType:y,args:e})})),i(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),i(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),i(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),i(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),i(t,d,(function(e){return r.enqueue({eventType:d,args:e})})),i(t,E,(function(e){return r.enqueue({eventType:E,args:e})})),i(t,D,(function(e){return r.enqueue({eventType:D,args:e})})),i(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),i(t,f,(function(e){return r.enqueue({eventType:f,args:e})})),i(t,A,(function(e){return r.enqueue({eventType:A,args:e})})),i(t,_,(function(e){return r.enqueue({eventType:_,args:e})})),i(t,O,(function(e){return r.enqueue({eventType:O,args:e})})),i(t,w,(function(e){return r.enqueue({eventType:w,args:e})})),i(t,p,(function(n){n.config="object"===c(e)&&e.options||{},r.enqueue({eventType:p,args:n})})),n=t,Object(u._each)(n,(function(e,n){s.on(n,e)}))):Object(u.logMessage)('Analytics adapter for "'.concat(a,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return Object(u.logMessage)('Analytics adapter for "'.concat(a,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),o=t(4),u=t(0);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=t(10),l=a.a.EVENTS,p=l.AUCTION_INIT,f=l.AUCTION_END,y=l.REQUEST_BIDS,g=l.BID_REQUESTED,v=l.BID_TIMEOUT,b=l.BID_RESPONSE,T=l.NO_BID,d=l.BID_WON,E=l.BID_ADJUSTMENT,D=l.BIDDER_DONE,h=l.SET_TARGETING,A=l.AD_RENDER_FAILED,_=l.AD_RENDER_SUCCEEDED,O=l.AUCTION_DEBUG,w=l.ADD_AD_UNITS,I="endpoint",j="bundle"},654:function(e,n,t){e.exports=t(655)},655:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),a=t(9);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var u=Object(r.a)({analyticsType:"bundle",handler:"on"}),i=u.enableAnalytics;o(u,{track:function(e){var n=e.eventType,t=e.args;window.relevantDigital.pbEventLog.push({ev:n,args:t,ts:new Date})},enableAnalytics:function(){window.relevantDigital=window.relevantDigital||{},window.relevantDigital.pbEventLog=window.relevantDigital.pbEventLog||[];for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return i.call.apply(i,[this].concat(n))}}),a.default.registerAnalyticsAdapter({adapter:u,code:"relevant"}),n.default=u,window.pbjs.installedModules.push("relevantAnalyticsAdapter")}},[654]);