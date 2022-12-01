pbjsChunk([16],{6:function(e,n,t){"use strict";n.a=function(e){var n,t=e.url,i=e.analyticsType,o=e.global,d=e.handler,N=[],M=0,C=!0;(function(){if(C){for(var e=0;e<N.length;e++)N[e]();N.push=function(e){e()},C=!1}Object(r.logMessage)("event count sent to ".concat(o,": ").concat(M))})();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===_&&window[o](d,n,t);this.getAdapterType()===D&&U.apply(void 0,arguments)},enqueue:S,enableAnalytics:j,disableAnalytics:function(){Object(r._each)(n,(function(e,n){c.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:j},getAdapterType:function(){return i},getGlobal:function(){return o},getHandler:function(){return d},getUrl:function(){return t}};function U(e){var n=e.eventType,i=e.args,o=e.callback;Object(a.a)(t,o,JSON.stringify({eventType:n,args:i}))}function S(e){var n=e.eventType,t=e.args,i=this;o&&window[o]&&n&&t?this.track({eventType:n,args:t}):N.push((function(){M++,i.track({eventType:n,args:t})}))}function j(e){var t,i=this,a=this;"object"!==u(e)||"object"!==u(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(c.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==y&&S.call(a,{eventType:n,args:t})}})),s(t={},f,(function(e){return i.enqueue({eventType:f,args:e})})),s(t,g,(function(e){return i.enqueue({eventType:g,args:e})})),s(t,b,(function(e){return i.enqueue({eventType:b,args:e})})),s(t,h,(function(e){return i.enqueue({eventType:h,args:e})})),s(t,y,(function(e){return i.enqueue({eventType:y,args:e})})),s(t,T,(function(e){return i.enqueue({eventType:T,args:e})})),s(t,v,(function(e){return i.enqueue({eventType:v,args:e})})),s(t,E,(function(e){return i.enqueue({eventType:E,args:e})})),s(t,A,(function(e){return i.enqueue({eventType:A,args:e})})),s(t,l,(function(e){return i.enqueue({eventType:l,args:e})})),s(t,m,(function(e){return i.enqueue({eventType:m,args:e})})),s(t,I,(function(e){return i.enqueue({eventType:I,args:e})})),s(t,O,(function(e){return i.enqueue({eventType:O,args:e})})),s(t,B,(function(e){return i.enqueue({eventType:B,args:e})})),s(t,p,(function(n){n.config="object"===u(e)&&e.options||{},i.enqueue({eventType:p,args:n})})),n=t,Object(r._each)(n,(function(e,n){c.on(n,e)}))):Object(r.logMessage)('Analytics adapter for "'.concat(o,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return Object(r.logMessage)('Analytics adapter for "'.concat(o,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var i=t(5),o=t.n(i),a=t(4),r=t(0);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=t(10),d=o.a.EVENTS,p=d.AUCTION_INIT,l=d.AUCTION_END,f=d.REQUEST_BIDS,g=d.BID_REQUESTED,y=d.BID_TIMEOUT,b=d.BID_RESPONSE,h=d.NO_BID,T=d.BID_WON,v=d.BID_ADJUSTMENT,E=d.BIDDER_DONE,A=d.SET_TARGETING,m=d.AD_RENDER_FAILED,I=d.AD_RENDER_SUCCEEDED,O=d.AUCTION_DEBUG,B=d.ADD_AD_UNITS,D="endpoint",_="bundle"},776:function(e,n,t){e.exports=t(777)},777:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"ANALYTICS_VERSION",(function(){return p})),t.d(n,"BIDDER_STATUS",(function(){return h})),t.d(n,"parseBidderCode",(function(){return v})),t.d(n,"parseAdUnitCode",(function(){return E})),t.d(n,"ucfunnelAnalyticsAdapter",(function(){return A}));var i=t(4),o=t(6),a=t(5),r=t.n(a),s=t(9),u=t(14),c=t(0);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var p="1.0.0",l="https://hbwa.aralego.com",f=r.a.EVENTS,g=f.AUCTION_END,y=f.BID_WON,b=f.BID_TIMEOUT,h={BID:"bid",NO_BID:"noBid",BID_WON:"bidWon",TIMEOUT:"timeout"},T={},v=function(e){return(e.bidderCode||e.bidder).toLowerCase()},E=function(e){return e.adUnitCode.toLowerCase()},A=d(Object(o.a)({ANALYTICS_SERVER:l,analyticsType:"endpoint"}),{cachedAuctions:{},initConfig:function(e){return T.options=Object(c.deepClone)(e.options),"string"!=typeof e.options.pbuid||e.options.pbuid.length<1?(Object(c.logError)('"options.pbuid" is required.'),!1):"string"!=typeof e.options.adid||e.options.adid.length<1?(Object(c.logError)('"options.adid" is required.'),!1):(T.sampled=!0,"number"==typeof e.options.sampling&&(T.sampled=Math.random()<parseFloat(e.options.sampling)),T.pbuid=e.options.pbuid,T.adid=e.options.adid,T.server=l,!0)},sendEventMessage:function(e,n){Object(c.logInfo)("AJAX: ".concat(e,": ")+JSON.stringify(n)),Object(i.a)("".concat(T.server,"/").concat(e),null,JSON.stringify(n),{contentType:"application/json",withCredentials:!0})},createCommonMessage:function(e){return{version:p,auctionId:e,referrer:window.location.href,sampling:T.options.sampling,prebid:"6.10.0-pre",adid:T.adid,pbuid:T.pbuid,adUnits:{}}},serializeBidResponse:function(e,n){var t={prebidWon:n===h.BID_WON,isTimeout:n===h.TIMEOUT,status:n};return n!==h.BID&&n!==h.BID_WON||d(t,{time:e.timeToRespond,cpm:e.cpm,currency:e.currency}),t},addBidResponseToMessage:function(e,n,t){var i=E(n);e.adUnits[i]=e.adUnits[i]||{};var o=v(n),a=this.serializeBidResponse(n,t);e.adUnits[i][o]=a},createBidMessage:function(e,n,t){var i=this,o=e.auctionId,a=e.timestamp,r=e.auctionEnd,s=e.adUnitCodes,u=e.bidsReceived,c=e.noBids,d=this.createCommonMessage(o);return d.auctionElapsed=r-a,s.forEach((function(e){d.adUnits[e]={}})),c.forEach((function(e){return i.addBidResponseToMessage(d,e,h.NO_BID)})),u.forEach((function(e){return i.addBidResponseToMessage(d,e,h.BID)})),t.forEach((function(e){return i.addBidResponseToMessage(d,e,h.TIMEOUT)})),n.forEach((function(e){var n=E(e),t=v(e);d.adUnits[n][t].prebidWon=!0})),d},createImpressionMessage:function(e){var n=this.createCommonMessage(e.auctionId);return this.addBidResponseToMessage(n,e,h.BID_WON),n},getCachedAuction:function(e){return this.cachedAuctions[e]=this.cachedAuctions[e]||{timeoutBids:[]},this.cachedAuctions[e]},handleAuctionEnd:function(e){var n=this.getCachedAuction(e.auctionId),t=Object(u.a)().getHighestCpmBids();this.sendEventMessage("bid",this.createBidMessage(e,t,n.timeoutBids))},handleBidTimeout:function(e){var n=this;e.forEach((function(e){n.getCachedAuction(e.auctionId).timeoutBids.push(e)}))},handleBidWon:function(e){this.sendEventMessage("imp",this.createImpressionMessage(e))},track:function(e){var n=e.eventType,t=e.args;if(T.sampled)switch(n){case y:this.handleBidWon(t);break;case b:this.handleBidTimeout(t);break;case g:this.handleAuctionEnd(t)}},getAnalyticsOptions:function(){return T}});A.originEnableAnalytics=A.enableAnalytics,A.enableAnalytics=function(e){this.initConfig(e)&&A.originEnableAnalytics(e)},s.default.registerAnalyticsAdapter({adapter:A,code:"ucfunnelAnalytics"}),window.pbjs.installedModules.push("ucfunnelAnalyticsAdapter")}},[776]);