pbjsChunk([57],{437:function(e,n,t){e.exports=t(438)},438:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),a=t(6),i=t(9),o=t(0);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var p,f="https://api.pymx5.com/v1/sites/events",y="Invisibly Analytics Adapter:",b=t(5),g=Object(r.b)(0),v=b.EVENTS,d=v.AUCTION_INIT,T=v.AUCTION_END,E=v.BID_ADJUSTMENT,O=v.BID_TIMEOUT,D=v.BID_REQUESTED,h=v.BID_RESPONSE,A=v.NO_BID,I=v.BID_WON,_=v.BIDDER_DONE,m=v.SET_TARGETING,j=v.REQUEST_BIDS,N=v.ADD_AD_UNITS,w=v.AD_RENDER_FAILED,S=Object(o.generateUUID)(),B=null,U=0,R=0,k=!1,q=window,P=document,M=P.documentElement,C=P.getElementsByTagName("body")[0],G=q.innerWidth||M.clientWidth||C.clientWidth,J=q.innerHeight||M.clientHeight||C.clientHeight,W={eventType:"pageView",userAgent:window.navigator.userAgent,timestamp:Date.now(),timezoneOffset:(new Date).getTimezoneOffset(),language:window.navigator.language,vendor:window.navigator.vendor,screenWidth:G,screenHeight:J},H={filter:Math.random()>.99},F=[W],Q=l(Object(a.a)({url:f,analyticsType:"endpoint"}),{track:function(e){!function(e,n){n=n?JSON.parse(JSON.stringify(n)):{};var t={};switch(e){case d:U=(t=n).timestamp,R=t.timeout;break;case T:(t=n).start=U,t.end=Date.now();break;case E:t.bidders=n;break;case O:t.bidders=n,t.duration=R;break;case D:case h:t=n;break;case A:t.noBid=n;break;case I:case _:t=n;break;case m:t.targetings=n;break;case j:case N:case w:t=n;break;default:return}t.eventType=e,t.timestamp=t.timestamp||Date.now(),x(t)}(e.eventType,e.args)},sendEvent:x,weightedFilter:H});function V(){if(k&&F.length>0)for(;F.length;){var e=F.shift(),n="PREBID_"+e.eventType;delete e.eventType;var t=s({pageViewId:S,ver:1,bundleId:B.bundleId},e),r={event_type:n,event_data:s({},t)};g(B.url,(function(){return Object(o.logInfo)("".concat(y," sent events batch"))}),JSON.stringify(r),{contentType:"application/json",method:"POST",withCredentials:!0})}}function x(e){F.push(e),Object(o.logInfo)("".concat(y,"Event ").concat(e.eventType,":"),e),e.eventType===T&&(V(),clearInterval(p))}Q.originEnableAnalytics=Q.enableAnalytics,Q.enableAnalytics=function(e){(B=e.options||{}).url=B.url||f,B.url&&B.account&&H.filter?(k=!0,Q.originEnableAnalytics(e)):(k=!1,Q.originDisableAnalytics()),p=setInterval(V,1e3)},Q.originDisableAnalytics=Q.disableAnalytics,Q.disableAnalytics=function(){k&&(V(),clearInterval(p),Q.originDisableAnalytics())},i.default.registerAnalyticsAdapter({adapter:Q,code:"invisiblyAnalytics"}),Q.getOptions=function(){return B},Q.flush=V,n.default=Q,window.pbjs.installedModules.push("invisiblyAnalyticsAdapter")},6:function(e,n,t){"use strict";n.a=function(e){var n,t=e.url,r=e.analyticsType,a=e.global,l=e.handler,N=[],w=0,S=!0;(function(){if(S){for(var e=0;e<N.length;e++)N[e]();N.push=function(e){e()},S=!1}Object(o.logMessage)("event count sent to ".concat(a,": ").concat(w))})();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===j&&window[a](l,n,t);this.getAdapterType()===m&&B.apply(void 0,arguments)},enqueue:U,enableAnalytics:R,disableAnalytics:function(){Object(o._each)(n,(function(e,n){u.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:R},getAdapterType:function(){return r},getGlobal:function(){return a},getHandler:function(){return l},getUrl:function(){return t}};function B(e){var n=e.eventType,r=e.args,a=e.callback;Object(i.a)(t,a,JSON.stringify({eventType:n,args:r}))}function U(e){var n=e.eventType,t=e.args,r=this;a&&window[a]&&n&&t?this.track({eventType:n,args:t}):N.push((function(){w++,r.track({eventType:n,args:t})}))}function R(e){var t,r=this,i=this;"object"!==s(e)||"object"!==s(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(u.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==g&&U.call(i,{eventType:n,args:t})}})),c(t={},y,(function(e){return r.enqueue({eventType:y,args:e})})),c(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),c(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),c(t,d,(function(e){return r.enqueue({eventType:d,args:e})})),c(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),c(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),c(t,E,(function(e){return r.enqueue({eventType:E,args:e})})),c(t,O,(function(e){return r.enqueue({eventType:O,args:e})})),c(t,D,(function(e){return r.enqueue({eventType:D,args:e})})),c(t,f,(function(e){return r.enqueue({eventType:f,args:e})})),c(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),c(t,A,(function(e){return r.enqueue({eventType:A,args:e})})),c(t,I,(function(e){return r.enqueue({eventType:I,args:e})})),c(t,_,(function(e){return r.enqueue({eventType:_,args:e})})),c(t,p,(function(n){n.config="object"===s(e)&&e.options||{},r.enqueue({eventType:p,args:n})})),n=t,Object(o._each)(n,(function(e,n){u.on(n,e)}))):Object(o.logMessage)('Analytics adapter for "'.concat(a,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return Object(o.logMessage)('Analytics adapter for "'.concat(a,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),i=t(4),o=t(0);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=t(10),l=a.a.EVENTS,p=l.AUCTION_INIT,f=l.AUCTION_END,y=l.REQUEST_BIDS,b=l.BID_REQUESTED,g=l.BID_TIMEOUT,v=l.BID_RESPONSE,d=l.NO_BID,T=l.BID_WON,E=l.BID_ADJUSTMENT,O=l.BIDDER_DONE,D=l.SET_TARGETING,h=l.AD_RENDER_FAILED,A=l.AD_RENDER_SUCCEEDED,I=l.AUCTION_DEBUG,_=l.ADD_AD_UNITS,m="endpoint",j="bundle"}},[437]);