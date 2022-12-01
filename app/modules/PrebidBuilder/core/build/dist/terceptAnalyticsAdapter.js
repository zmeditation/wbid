pbjsChunk([17],{6:function(e,t,n){"use strict";t.a=function(e){var t,n=e.url,a=e.analyticsType,i=e.global,d=e.handler,D=[],q=0,U=!0;(function(){if(U){for(var e=0;e<D.length;e++)D[e]();D.push=function(e){e()},U=!1}Object(o.logMessage)("event count sent to ".concat(i,": ").concat(q))})();return{track:function(e){var t=e.eventType,n=e.args;this.getAdapterType()===_&&window[i](d,t,n);this.getAdapterType()===N&&j.apply(void 0,arguments)},enqueue:R,enableAnalytics:C,disableAnalytics:function(){Object(o._each)(t,(function(e,t){c.off(t,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:C},getAdapterType:function(){return a},getGlobal:function(){return i},getHandler:function(){return d},getUrl:function(){return n}};function j(e){var t=e.eventType,a=e.args,i=e.callback;Object(r.a)(n,i,JSON.stringify({eventType:t,args:a}))}function R(e){var t=e.eventType,n=e.args,a=this;i&&window[i]&&t&&n?this.track({eventType:t,args:n}):D.push((function(){q++,a.track({eventType:t,args:n})}))}function C(e){var n,a=this,r=this;"object"!==u(e)||"object"!==u(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(c.getEvents().forEach((function(e){if(e){var t=e.eventType,n=e.args;t!==b&&R.call(r,{eventType:t,args:n})}})),s(n={},y,(function(e){return a.enqueue({eventType:y,args:e})})),s(n,f,(function(e){return a.enqueue({eventType:f,args:e})})),s(n,T,(function(e){return a.enqueue({eventType:T,args:e})})),s(n,v,(function(e){return a.enqueue({eventType:v,args:e})})),s(n,b,(function(e){return a.enqueue({eventType:b,args:e})})),s(n,I,(function(e){return a.enqueue({eventType:I,args:e})})),s(n,g,(function(e){return a.enqueue({eventType:g,args:e})})),s(n,m,(function(e){return a.enqueue({eventType:m,args:e})})),s(n,E,(function(e){return a.enqueue({eventType:E,args:e})})),s(n,l,(function(e){return a.enqueue({eventType:l,args:e})})),s(n,h,(function(e){return a.enqueue({eventType:h,args:e})})),s(n,S,(function(e){return a.enqueue({eventType:S,args:e})})),s(n,O,(function(e){return a.enqueue({eventType:O,args:e})})),s(n,A,(function(e){return a.enqueue({eventType:A,args:e})})),s(n,p,(function(t){t.config="object"===u(e)&&e.options||{},a.enqueue({eventType:p,args:t})})),t=n,Object(o._each)(t,(function(e,t){c.on(t,e)}))):Object(o.logMessage)('Analytics adapter for "'.concat(i,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return Object(o.logMessage)('Analytics adapter for "'.concat(i,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var a=n(5),i=n.n(a),r=n(4),o=n(0);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=n(10),d=i.a.EVENTS,p=d.AUCTION_INIT,l=d.AUCTION_END,y=d.REQUEST_BIDS,f=d.BID_REQUESTED,b=d.BID_TIMEOUT,T=d.BID_RESPONSE,v=d.NO_BID,I=d.BID_WON,g=d.BID_ADJUSTMENT,m=d.BIDDER_DONE,E=d.SET_TARGETING,h=d.AD_RENDER_FAILED,S=d.AD_RENDER_SUCCEEDED,O=d.AUCTION_DEBUG,A=d.ADD_AD_UNITS,N="endpoint",_="bundle"},758:function(e,t,n){e.exports=n(759)},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(4),r=n(6),o=n(9),s=n(5),u=n.n(s);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d,p,l={bids:[]},y=c(Object(r.a)({emptyUrl:"",analyticsType:"endpoint"}),{track:function(e){var t=e.eventType,n=e.args;void 0!==n&&(t===u.a.EVENTS.BID_TIMEOUT?n.forEach((function(e){f(e,"timeout")})):t===u.a.EVENTS.AUCTION_INIT?(l.auctionInit=n,p=n.timestamp):t===u.a.EVENTS.BID_REQUESTED?function(e){var t=[];void 0!==e.bids&&e.bids.length&&e.bids.forEach((function(n){t.push({bidderCode:n.bidder,bidId:n.bidId,adUnitCode:n.adUnitCode,requestId:n.bidderRequestId,auctionId:n.auctionId,transactionId:n.transactionId,sizes:Object(a.parseSizesInput)(n.mediaTypes.banner.sizes).toString(),renderStatus:1,requestTimestamp:e.auctionStart})}));return t}(n).forEach((function(e){l.bids.push(e)})):t===u.a.EVENTS.BID_RESPONSE?f(n,"response"):t===u.a.EVENTS.BID_WON&&b({bidWon:f(n,"win")},"won")),t===u.a.EVENTS.AUCTION_END&&b(l,"auctionEnd")}});function f(e,t){if("win"===t)return{bidderCode:e.bidder,bidId:e.requestId,adUnitCode:e.adUnitCode,auctionId:e.auctionId,creativeId:e.creativeId,transactionId:e.transactionId,currency:e.currency,cpm:e.cpm,netRevenue:e.netRevenue,renderedSize:e.size,mediaType:e.mediaType,statusMessage:e.statusMessage,status:e.status,renderStatus:4,timeToRespond:e.timeToRespond,requestTimestamp:e.requestTimestamp,responseTimestamp:e.responseTimestamp};c(l.bids.filter((function(t){return t.bidId===e.bidId||t.bidId===e.requestId}))[0],{bidderCode:e.bidder,bidId:"timeout"===t?e.bidId:e.requestId,adUnitCode:e.adUnitCode,auctionId:e.auctionId,creativeId:e.creativeId,transactionId:e.transactionId,currency:e.currency,cpm:e.cpm,netRevenue:e.netRevenue,mediaType:e.mediaType,statusMessage:e.statusMessage,status:e.status,renderStatus:"timeout"===t?3:2,timeToRespond:e.timeToRespond,requestTimestamp:e.requestTimestamp,responseTimestamp:e.responseTimestamp})}function b(e,t){var n=Object(a.getWindowLocation)();void 0!==e&&void 0!==e.auctionInit&&c(e.auctionInit,{host:n.host,path:n.pathname,search:n.search}),e.initOptions=d;var r=Object(a.buildUrl)({protocol:"https",hostname:d&&d.hostName||"us-central1-quikr-ebay.cloudfunctions.net",pathname:d&&d.pathName||"/prebid-analytics",search:{auctionTimestamp:p,terceptAnalyticsVersion:"v1.0.0",prebidVersion:pbjs.version}});Object(i.a)(r,void 0,JSON.stringify(e),{method:"POST",contentType:"text/plain"})}y.originEnableAnalytics=y.enableAnalytics,y.enableAnalytics=function(e){d=e.options,y.originEnableAnalytics(e)},o.default.registerAnalyticsAdapter({adapter:y,code:"tercept"}),t.default=y,window.pbjs.installedModules.push("terceptAnalyticsAdapter")}},[758]);