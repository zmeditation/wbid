pbjsChunk([357],{165:function(e,r,t){e.exports=t(166)},166:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"ADAPTER_VERSION",(function(){return a})),t.d(r,"API_SERVERS_MAP",(function(){return u})),t.d(r,"spec",(function(){return s}));var i=t(1),n=t(2),p=t(3),a="1.0.0",d=[n.b],u={default:"ad2.apx.appier.net",tw:"ad2.apx.appier.net",jp:"ad-jp.apx.appier.net"},s={code:"appier",aliases:["appierBR","appierExt","appierGM"],supportedMediaTypes:d,isBidRequestValid:function(e){return"string"==typeof e.params.hzid},buildRequests:function(e,r){if(0===e.length)return[];var t=this.getApiServer();return[{method:"POST",url:"//".concat(t).concat("/v1/prebid/bid"),data:{bids:e,refererInfo:r.refererInfo,version:a},bidderRequest:r}]},interpretResponse:function(e,r){return Array.isArray(e.body)?e.body:[]},getApiServer:function(){var e=p.b.getConfig("appier.server");if(!e){var r=p.b.getConfig("appier.farm");e=u[r]||u.default}return e}};Object(i.registerBidder)(s),window.pbjs.installedModules.push("appierBidAdapter")}},[165]);