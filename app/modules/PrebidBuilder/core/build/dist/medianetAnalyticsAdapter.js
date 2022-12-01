pbjsChunk([48],{515:function(e,t,n){e.exports=n(516)},516:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(6),o=n(9),a=n(5),s=n.n(a),c=n(4),u=n(18),d=n(19),l=n(12),f=n.n(l),p=["winner"],h=["mpvid","crid","ext","pubcrid"];function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var i,r,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function v(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function E(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),e}var S,A,I="https://pb-logs.media.net/log?logid=kfk&evtid=prebid_analytics_events_client",D={auto:"pbAg",custom:"pbCg",dense:"pbDg",low:"pbLg",medium:"pbMg",high:"pbHg"},_="medianet",w=pbjs.version,k="-2",x=["canonical_url","og_url","twitter_url"],C="APPR",R="RA",U={},N=[],B=function(){function e(t,n){O(this,e),this.event=t,this.logid="kfk",this.evtid="projectevents",this.project="prebidanalytics",this.dn=A.domain||"",this.requrl=A.requrl||"",this.pbversion=w,this.cid=S.cid||"",this.rd=n}return E(e,[{key:"send",value:function(){var e="https://qsearch-a.akamaihd.net/log?"+J(this);Object(i.triggerPixel)(e)}}]),e}(),P=function(){function e(t){O(this,e),this.cid=t,this.pubLper=-1,this.ajaxState=0,this.loggingPercent=50,this.urlToConsume="page",this.debug=!1,this.gdprConsent=void 0,this.gdprApplies=void 0,this.uspConsent=void 0,this.shouldBeLogged={},this.mnetDebugConfig=""}return E(e,[{key:"getLoggingData",value:function(){return{cid:this.cid,lper:Math.round(100/this.loggingPercent),plper:this.pubLper,gdpr:this.gdprApplies?"1":"0",gdprConsent:this.gdprConsent,ccpa:this.uspConsent,ajx:this.ajaxState,pbv:w,pbav:"1.0.0",flt:1}}},{key:"_configURL",value:function(){return"https://prebid.media.net/rtb/prebid/analytics/config?cid="+encodeURIComponent(this.cid)+"&dn="+encodeURIComponent(A.domain)}},{key:"_parseResponse",value:function(e){try{e=JSON.parse(e),this.setDataFromResponse(e),this.overrideDomainLevelData(e),this.overrideToDebug(this.mnetDebugConfig),this.urlToConsume=f()(x,e.urlKey)?e.urlKey:this.urlToConsume,this.ajaxState=1}catch(e){this.ajaxState=3,new B("analytics_config_parse_fail",e).send()}}},{key:"setDataFromResponse",value:function(e){isNaN(parseInt(e.percentage,10))||(this.loggingPercent=e.percentage)}},{key:"overrideDomainLevelData",value:function(e){var t=Object(i.deepAccess)(e,"domain."+A.domain);t&&this.setDataFromResponse(t)}},{key:"overrideToDebug",value:function(e){if(""!==e)try{this.setDataFromResponse(JSON.parse(decodeURIComponent(e)))}catch(e){}}},{key:"_errorFetch",value:function(){this.ajaxState=3,new B("analytics_config_ajax_fail").send()}},{key:"init",value:function(){var e=Q.parseUrl(A.page);if(Object(i.deepAccess)(e,"search.medianet_test")||"localhost"===e.hostname)return this.loggingPercent=100,this.ajaxState=1,void(this.debug=!0);Object(i.deepAccess)(e,"search.mnet_setconfig")&&(this.mnetDebugConfig=Object(i.deepAccess)(e,"search.mnet_setconfig")),Object(c.a)(this._configURL(),{success:this._parseResponse.bind(this),error:this._errorFetch.bind(this)})}}]),e}(),L=function(){function e(){O(this,e);var t=this._getUrlFromSelector('link[rel="canonical"]',"href"),n=this._getUrlFromSelector('meta[property="og:url"]',"content"),i=this._getUrlFromSelector('meta[name="twitter:url"]',"content"),r=Object(u.a)();this.domain=Q.parseUrl(r.referer).hostname,this.page=r.referer,this.is_top=r.reachedTop,this.referrer=this._getTopWindowReferrer(),this.canonical_url=t,this.og_url=n,this.twitter_url=i,this.screen=this._getWindowSize()}return E(e,[{key:"_getTopWindowReferrer",value:function(){try{return window.top.document.referrer}catch(e){return document.referrer}}},{key:"_getWindowSize",value:function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||-1,t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||-1;return"".concat(e,"x").concat(t)}},{key:"_getAttributeFromSelector",value:function(e,t){try{var n=Object(i.getWindowTop)().document.querySelector(e);if(null!==n&&n[t])return n[t]}catch(e){}}},{key:"_getAbsoluteUrl",value:function(e){var t=Object(i.getWindowTop)().document.createElement("a");return t.href=e,t.href}},{key:"_getUrlFromSelector",value:function(e,t){var n=this._getAttributeFromSelector(e,t);return n&&this._getAbsoluteUrl(n)}},{key:"getLoggingData",value:function(){return{requrl:this[S.urlToConsume]||this.page,dn:this.domain,ref:this.referrer,screen:this.screen}}}]),e}(),q=function(){function e(t,n,i,r){O(this,e),this.tmax=t,this.supplyAdCode=n,this.context=i,this.adext=r,this.logged={},this.targeting=void 0,this.medianetPresent=0}return E(e,[{key:"getShouldBeLogged",value:function(e){return S.shouldBeLogged.hasOwnProperty(e)||(S.shouldBeLogged[e]=100*Math.random()<parseFloat(S.loggingPercent)),S.shouldBeLogged[e]}},{key:"getLoggingData",value:function(){return T({supcrid:this.supplyAdCode,tmax:this.tmax,targ:JSON.stringify(this.targeting),ismn:this.medianetPresent,vplcmtt:this.context},this.adext&&{adext:JSON.stringify(this.adext)})}}]),e}(),M=function(){function e(t,n,i,r,o,a,s){O(this,e),this.bidId=t,this.bidder=n,this.src=i,this.start=r,this.adUnitCode=o,this.allMediaTypeSizes=s,this.iwb=0,this.winner=0,this.status=n===k?1:3,this.ext={},this.originalCpm=void 0,this.cpm=void 0,this.dfpbd=void 0,this.width=void 0,this.height=void 0,this.mediaType=a,this.timeToRespond=void 0,this.dealId=void 0,this.creativeId=void 0,this.adId=void 0,this.currency=void 0,this.crid=void 0,this.pubcrid=void 0,this.mpvid=void 0,this.floorPrice=void 0,this.floorRule=void 0,this.serverLatencyMillis=void 0}return E(e,[{key:"size",get:function(){return this.width&&this.height?this.width+"x"+this.height:""}},{key:"getLoggingData",value:function(){return{adid:this.adId,pvnm:this.bidder,src:this.src,ogbdp:this.originalCpm,bdp:this.cpm,cbdp:this.dfpbd,dfpbd:this.dfpbd,szs:this.allMediaTypeSizes.join("|"),size:this.size,mtype:this.mediaType,dId:this.dealId,winner:this.winner,curr:this.currency,rests:this.timeToRespond,status:this.status,iwb:this.iwb,crid:this.crid,pubcrid:this.pubcrid,mpvid:this.mpvid,bidflr:this.floorPrice,flrrule:this.floorRule,ext:JSON.stringify(this.ext),rtime:this.serverLatencyMillis}}}]),e}(),F=function(){function e(t){O(this,e),this.acid=t,this.status=d.b,this.bids=[],this.adSlots={},this.auctionInitTime=void 0,this.auctionStartTime=void 0,this.setTargetingTime=void 0,this.auctionEndTime=void 0,this.bidWonTime=void 0,this.floorData={}}return E(e,[{key:"hasEnded",value:function(){return this.status===d.a}},{key:"getLoggingData",value:function(){return{sts:this.auctionStartTime-this.auctionInitTime,ets:this.auctionEndTime-this.auctionInitTime,tts:this.setTargetingTime-this.auctionInitTime,wts:this.bidWonTime-this.auctionInitTime,aucstatus:this.status,acid:this.acid,flrdata:this._mergeFieldsToLog({ln:this.floorData.location,skp:this.floorData.skipped,enfj:Object(i.deepAccess)(this.floorData,"enforcements.enforceJS"),enfd:Object(i.deepAccess)(this.floorData,"enforcements.floorDeals"),sr:this.floorData.skipRate,fs:this.floorData.fetchStatus}),flrver:this.floorData.modelVersion}}},{key:"addSlot",value:function(e){var t=e.adUnitCode,n=e.supplyAdCode,i=e.mediaTypes,r=e.allMediaTypeSizes,o=e.tmax,a=e.adext,s=e.context;t&&void 0===this.adSlots[t]&&(this.adSlots[t]=new q(o,n,s,a),this.addBid(new M("-1",k,"client","-1",t,i,r)))}},{key:"addBid",value:function(e){this.bids.push(e)}},{key:"findBid",value:function(e,t){return this.bids.filter((function(n){return n[e]===t}))[0]}},{key:"getAdslotBids",value:function(e){return this.bids.filter((function(t){return t.adUnitCode===e})).map((function(e){return e.getLoggingData()}))}},{key:"getWinnerAdslotBid",value:function(e){return this.getAdslotBids(e).filter((function(e){return e.winner}))}},{key:"_mergeFieldsToLog",value:function(e){for(var t,n=[],i=0,r=Object.keys(e);i<r.length;i++){var o=r[i];t=e[o],n.push(o+"="+(void 0===t?"":t))}return n.join("||")}}]),e}();function W(e){var t=e.auctionId,n=e.adUnits,r=e.timeout,o=e.timestamp,a=e.bidderRequests;t&&void 0===U[t]&&(U[t]=new F(t),U[t].auctionInitTime=o),function(e,t,n){t=t||[];var r=Object(i.groupBy)(t,"code");Object.keys(r).forEach((function(t){var o=r[t],a=Object(i.deepAccess)(o,"0.adUnitCode")||t,s="",c={},u={},d={banner:[],video:[]};o.forEach((function(e){var t=e.mediaTypes,n=e.sizes,r=e.ext;t=t||{},c=T(c,r||Object(i.deepAccess)(t,"banner.ext")),s=Object(i.deepAccess)(t,"video.context")||s,Object.keys(t).forEach((function(e){return u[e]=1}));var o=z(t,n);o.banner.forEach((function(e){return d.banner.push(e)})),o.video.forEach((function(e){return d.video.push(e)}))})),c=Object(i.isEmpty)(c)?void 0:c,d.banner=d.banner.filter(i.uniques),d.video=d.video.filter(i.uniques),d.native=1===u.native?[[1,1].join("x")]:[];var l=[].concat(d.banner,d.native,d.video),f=Object.keys(u).join("|");U[e].addSlot({adUnitCode:t,supplyAdCode:a,mediaTypes:f,allMediaTypeSizes:l,context:s,tmax:n,adext:c})}))}(t,n,r);var s=Object(i.deepAccess)(a,"0.bids.0.floorData");s&&(U[t].floorData=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s))}function z(e,t){var n=Object(i.deepAccess)(e,"banner.sizes")||t||[],r=Object(i.deepAccess)(e,"native")?[[1,1]]:[],o=Object(i.deepAccess)(e,"video.playerSize")||[],a=[];return 2===o.length&&(a=[o]),{banner:n.map((function(e){return e.join("x")})),native:r.map((function(e){return e.join("x")})),video:a.map((function(e){return e.join("x")}))}}function G(e,t,n){var i,r;(r=t,U[i=e]instanceof F&&U[i].adSlots[r]instanceof q)&&(n===R?V(e,t,n):function(e,t,n){var i=U[e].adSlots[t];i.getShouldBeLogged(n)&&!i.logged[n]&&(V(e,t,n),i.logged[n]=!0)}(e,t,n))}function V(e,t,n){var r=function(e,t){var n=T(A.getLoggingData(),S.getLoggingData());return T(n,U[e].adSlots[t].getLoggingData(),U[e].getLoggingData())}(e,t);r.lgtp=n;var o,a=Object(i.deepAccess)(r,"targ");Object.keys(r).forEach((function(e){return null==r[e]&&delete r[e]})),delete r.targ,n===R?(o=U[e].getWinnerAdslotBid(t),r.lper=1):(o=U[e].getAdslotBids(t).map((function(e){e.winner;return v(e,p)})),delete r.wts),o.filter((function(e){return e.pvnm===_})).length>0||(o=o.map((function(e){e.mpvid,e.crid,e.ext,e.pubcrid;return v(e,h)})));var s,c=J(r)+"&";o.forEach((function(e){c=c+J(e)+"&"})),c+=J({targ:a}),s=c,N.push(I+"&"+s),Object(i.triggerPixel)(I+"&"+s)}function J(e){return Object(i._map)(e,(function(e,t){return void 0===e?t+"=":(Object(i.isPlainObject)(e)&&(e=JSON.stringify(e)),t+"="+encodeURIComponent(e))})).join("&")}var Q=function(){function e(){O(this,e)}return E(e,null,[{key:"parseUrl",value:function(t){var n=document.createElement("a");return n.href=decodeURIComponent(t),{hostname:n.hostname,search:e.parseQS(n.search||""),host:n.host||window.location.host}}},{key:"parseQS",value:function(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,t){var n=g(t.split("="),2),i=n[0],r=n[1];return/\[\]$/.test(i)?(e[i=i.replace("[]","")]=e[i]||[],e[i].push(r)):e[i]=r||"",e}),{}):{}}}]),e}(),H=T(Object(r.a)({URL:Q,analyticsType:"endpoint"}),{getlogsQueue:function(){return N},clearlogsQueue:function(){N=[],U={}},track:function(e){var t,n,r,o,a,c,u,l=e.eventType,f=e.args;switch(S.debug&&Object(i.logInfo)(l,f),l){case s.a.EVENTS.AUCTION_INIT:W(f);break;case s.a.EVENTS.BID_REQUESTED:n=(t=f).auctionId,r=t.auctionStart,o=t.bids,a=t.start,c=t.uspConsent,u=t.gdpr,U[n]instanceof F&&(S.gdprApplies=!(!u||!u.gdprApplies),S.gdprApplies&&(S.gdprConsent=u.consentString||""),S.uspConsent=S.uspConsent||c,U[n].auctionStartTime=r,o.forEach((function(e){var t=e.adUnitCode,r=e.bidder,o=e.bidId,s=e.src,c=e.mediaTypes,u=z(c,e.sizes),d=[].concat(u.banner,u.native,u.video),l=new M(o,r,s,a,t,c&&Object.keys(c).join("|"),d);U[n].addBid(l),r===_&&(l.crid=Object(i.deepAccess)(e,"params.crid"),l.pubcrid=Object(i.deepAccess)(e,"params.crid"),U[n].adSlots[t].medianetPresent=1)})));break;case s.a.EVENTS.BID_RESPONSE:!function(e){var t=e.width,n=e.height,r=e.mediaType,o=e.cpm,a=e.requestId,c=e.timeToRespond,u=e.auctionId,l=e.dealId,f=e.originalCpm,p=e.bidderCode,h=e.creativeId,g=e.adId,b=e.currency;if(U[u]instanceof F){var v=U[u].findBid("bidId",a);if(v instanceof M){T(v,{cpm:o,width:t,height:n,mediaType:r,timeToRespond:c,dealId:l,creativeId:h},{adId:g,currency:b}),v.floorPrice=Object(i.deepAccess)(e,"floorData.floorValue"),v.floorRule=Object(i.deepAccess)(e,"floorData.floorRule"),v.originalCpm=f||o;var y=Object(i.deepAccess)(e,"adserverTargeting.hb_pb");if(!y){var m=Object(d.i)(e);y=e[D[m]]||o}v.dfpbd=y,e.status===s.a.BID_STATUS.BID_REJECTED?v.status=12:v.status=1,p===_&&e.ext instanceof Object&&T(v,{ext:e.ext},{mpvid:e.ext.pvid},e.ext.crid&&{crid:e.ext.crid}),void 0!==e.serverResponseTimeMs&&(v.serverLatencyMillis=e.serverResponseTimeMs)}}}(f);break;case s.a.EVENTS.BID_TIMEOUT:f.map((function(e){var t=e.bidId,n=e.auctionId;if(U[n]instanceof F){var i=U[n].findBid("bidId",t);i instanceof M&&(i.status=3)}}));break;case s.a.EVENTS.NO_BID:!function(e){var t=e.auctionId,n=e.bidId;if(U[t]instanceof F&&!U[t].hasEnded()){var i=U[t].findBid("bidId",n);i instanceof M&&(i.status=2)}}(f);break;case s.a.EVENTS.AUCTION_END:!function(e){var t=e.auctionId,n=e.auctionEnd;U[t]instanceof F&&(U[t].status=d.a,U[t].auctionEndTime=n)}(f);break;case s.a.EVENTS.SET_TARGETING:!function(e){for(var t=function(){for(var t=r[n],o=function(){var n=c[a],r=U[n],o=r.adSlots[t];if(!(o instanceof q))return"continue";o.targeting=e[t],r.setTargetingTime=Date.now();var u=Object.keys(e[t]).reduce((function(n,i){return-1!==i.indexOf(s.a.TARGETING_KEYS.AD_ID)&&(n[i]=e[t][i]),n}),{}),d=e[t][s.a.TARGETING_KEYS.AD_ID],l=void 0,f=Object.keys(u).map((function(e){return u[e]}));r.bids.filter((function(e){return-1!==f.indexOf(e.adId)})).map((function(e){e.iwb=1,e.adId===d&&(l=e)})),r.bids.forEach((function(e){e.bidder===k&&e.adUnitCode===t&&(e.iwb=0===f.length?0:1,e.width=Object(i.deepAccess)(l,"width"),e.height=Object(i.deepAccess)(l,"height"))})),G(n,t,C)},a=0,c=Object.keys(U);a<c.length;a++)o()},n=0,r=Object.keys(e);n<r.length;n++)t()}(f);break;case s.a.EVENTS.BID_WON:!function(e){var t=e.requestId,n=e.auctionId,i=e.adUnitCode;if(U[n]instanceof F){var r=U[n].findBid("bidId",t);r instanceof M&&(U[n].bidWonTime=Date.now(),r.winner=1,G(n,i,R))}}(f)}}});H.originEnableAnalytics=H.enableAnalytics,H.enableAnalytics=function(e){e&&e.options&&e.options.cid?(pbjs.medianetGlobals=pbjs.medianetGlobals||{},pbjs.medianetGlobals.analyticsEnabled=!0,A=new L,(S=new P(e.options.cid)).pubLper=e.options.sampling||"",S.init(),e.options.sampling=1,H.originEnableAnalytics(e)):Object(i.logError)("Media.net Analytics adapter: cid is required.")},o.default.registerAnalyticsAdapter({adapter:H,code:"medianetAnalytics",gvlid:142}),t.default=H,window.pbjs.installedModules.push("medianetAnalyticsAdapter")},6:function(e,t,n){"use strict";t.a=function(e){var t,n=e.url,i=e.analyticsType,r=e.global,d=e.handler,_=[],w=0,k=!0;(function(){if(k){for(var e=0;e<_.length;e++)_[e]();_.push=function(e){e()},k=!1}Object(a.logMessage)("event count sent to ".concat(r,": ").concat(w))})();return{track:function(e){var t=e.eventType,n=e.args;this.getAdapterType()===D&&window[r](d,t,n);this.getAdapterType()===I&&x.apply(void 0,arguments)},enqueue:C,enableAnalytics:R,disableAnalytics:function(){Object(a._each)(t,(function(e,t){u.off(t,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:R},getAdapterType:function(){return i},getGlobal:function(){return r},getHandler:function(){return d},getUrl:function(){return n}};function x(e){var t=e.eventType,i=e.args,r=e.callback;Object(o.a)(n,r,JSON.stringify({eventType:t,args:i}))}function C(e){var t=e.eventType,n=e.args,i=this;r&&window[r]&&t&&n?this.track({eventType:t,args:n}):_.push((function(){w++,i.track({eventType:t,args:n})}))}function R(e){var n,i=this,o=this;"object"!==c(e)||"object"!==c(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(u.getEvents().forEach((function(e){if(e){var t=e.eventType,n=e.args;t!==g&&C.call(o,{eventType:t,args:n})}})),s(n={},p,(function(e){return i.enqueue({eventType:p,args:e})})),s(n,h,(function(e){return i.enqueue({eventType:h,args:e})})),s(n,b,(function(e){return i.enqueue({eventType:b,args:e})})),s(n,v,(function(e){return i.enqueue({eventType:v,args:e})})),s(n,g,(function(e){return i.enqueue({eventType:g,args:e})})),s(n,y,(function(e){return i.enqueue({eventType:y,args:e})})),s(n,m,(function(e){return i.enqueue({eventType:m,args:e})})),s(n,T,(function(e){return i.enqueue({eventType:T,args:e})})),s(n,O,(function(e){return i.enqueue({eventType:O,args:e})})),s(n,f,(function(e){return i.enqueue({eventType:f,args:e})})),s(n,j,(function(e){return i.enqueue({eventType:j,args:e})})),s(n,E,(function(e){return i.enqueue({eventType:E,args:e})})),s(n,S,(function(e){return i.enqueue({eventType:S,args:e})})),s(n,A,(function(e){return i.enqueue({eventType:A,args:e})})),s(n,l,(function(t){t.config="object"===c(e)&&e.options||{},i.enqueue({eventType:l,args:t})})),t=n,Object(a._each)(t,(function(e,t){u.on(t,e)}))):Object(a.logMessage)('Analytics adapter for "'.concat(r,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return Object(a.logMessage)('Analytics adapter for "'.concat(r,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var i=n(5),r=n.n(i),o=n(4),a=n(0);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=n(10),d=r.a.EVENTS,l=d.AUCTION_INIT,f=d.AUCTION_END,p=d.REQUEST_BIDS,h=d.BID_REQUESTED,g=d.BID_TIMEOUT,b=d.BID_RESPONSE,v=d.NO_BID,y=d.BID_WON,m=d.BID_ADJUSTMENT,T=d.BIDDER_DONE,O=d.SET_TARGETING,j=d.AD_RENDER_FAILED,E=d.AD_RENDER_SUCCEEDED,S=d.AUCTION_DEBUG,A=d.ADD_AD_UNITS,I="endpoint",D="bundle"}},[515]);