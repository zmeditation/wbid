pbjsChunk([347],{189:function(e,t,r){e.exports=r(190)},190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return s}));var n=r(0),i=r(1),o=r(3);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d="beop",c=/^[0-9a-fA-F]{24}$/,s={code:d,gvlid:666,aliases:["bp"],isBidRequestValid:function(e){var t=e.params.accountId||e.params.networkId;return null!=t&&(!!c.test(t)&&(null!==e.mediaTypes.banner&&void 0!==e.mediaTypes.banner))},buildRequests:function(e,t){var r=e.map(u),i=Object(n.deepAccess)(window,"location.href")||Object(n.deepAccess)(t,"refererInfo.canonicalUrl")||o.b.getConfig("pageUrl"),a=o.b.getLegacyFpd(o.b.getConfig("ortb2")),d=t.gdprConsent,c=r[0],s={at:(new Date).toString(),nid:c.nid,nptnid:c.nptnid,pid:c.pid,url:i,lang:window.navigator.language||window.navigator.languages[0],kwds:a&&a.site&&a.site.keywords||[],dbg:!1,slts:r,is_amp:Object(n.deepAccess)(t,"referrerInfo.isAmp"),tc_string:d&&d.gdprApplies?d.consentString:null};return{method:"POST",url:"https://hb.beop.io/bid",data:JSON.stringify(s)}},interpretResponse:function(e,t){return e&&e.body&&Object(n.isArray)(e.body.bids)&&e.body.bids.length>0?e.body.bids:[]},onTimeout:function(e){if(null!=e&&0!==Object.keys(e).length){var t=b(e,"timeout",e.timeout);Object(n.logWarn)("beop: timed out request"),Object(n.triggerPixel)(Object(n.buildUrl)({protocol:"https",hostname:"t.beop.io",pathname:"/bid",search:t}))}},onBidWon:function(e){if(null!=e&&0!==Object.keys(e).length){var t=b(e,"won",e.cpm);Object(n.logInfo)("beop: won request"),Object(n.triggerPixel)(Object(n.buildUrl)({protocol:"https",hostname:"t.beop.io",pathname:"/bid",search:t}))}},onSetTargeting:function(e){}};function b(e,t,r){var n=e.params.accountId;return{pid:void 0===n?e.ad.match(/account: \“([a-f\d]{24})\“/)[1]:n,nid:e.params.networkId,nptnid:e.params.networkPartnerId,bid:e.bidId||e.requestId,sl_n:e.adUnitCode,aid:e.auctionId,se_ca:"bid",se_ac:t,se_va:r,url:window.location.href}}function u(e){var t,r=Object(n.deepAccess)(e,"mediaTypes.banner.sizes"),i=o.b.getConfig("currency.adServerCurrency")||Object(n.getValue)(e.params,"currency")||"EUR";if("function"==typeof e.getFloor){var d=e.getFloor({currency:i,mediaType:"banner",size:[1,1]});"object"!==a(d)||d.currency!==i||isNaN(parseFloat(d.floor))||(t=parseFloat(d.floor))}return{sizes:Object(n.isArray)(r)?r:e.sizes,flr:t,pid:Object(n.getValue)(e.params,"accountId"),nid:Object(n.getValue)(e.params,"networkId"),nptnid:Object(n.getValue)(e.params,"networkPartnerId"),bid:Object(n.getBidIdParameter)("bidId",e),brid:Object(n.getBidIdParameter)("bidderRequestId",e),name:Object(n.getBidIdParameter)("adUnitCode",e),aid:Object(n.getBidIdParameter)("auctionId",e),tid:Object(n.getBidIdParameter)("transactionId",e),brc:Object(n.getBidIdParameter)("bidRequestsCount",e),bdrc:Object(n.getBidIdParameter)("bidderRequestCount",e),bwc:Object(n.getBidIdParameter)("bidderWinsCount",e)}}Object(i.registerBidder)(s),window.pbjs.installedModules.push("beopBidAdapter")}},[189]);