pbjsChunk([218],{495:function(e,t,r){e.exports=r(496)},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return a}));var n=r(0),o=r(3),s=r(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a={code:"madvertise",isBidRequestValid:function(e){if("object"!==i(e.params))return!1;var t=Object(n.parseSizesInput)(e.sizes);return!(!t||0===t.length)&&(!(t.length>0&&void 0===t[0])&&((void 0===e.params.floor||parseFloat(e.params.floor)<.01)&&(e.params.floor=.01),void 0!==e.params.s))},buildRequests:function(e,t){return e.map((function(e){e.startTime=(new Date).getTime();for(var r="?rt=bid_request&v=1.0",s=0;s<e.sizes.length;s++)Array.isArray(e.sizes[s])&&2==e.sizes[s].length&&(r=r+"&sizes["+s+"]="+e.sizes[s][0]+"x"+e.sizes[s][1]);return Object(n._each)(e.params,(function(e,t){return r=r+"&"+t+"="+e})),void 0===e.params.u&&(r=r+"&u="+navigator.userAgent),t&&t.gdprConsent&&(r=r+"&gdpr="+(t.gdprConsent.gdprApplies?"1":"0")+"&consent[0][format]="+o.b.getConfig("consentManagement.cmpApi")+"&consent[0][value]="+t.gdprConsent.consentString),{method:"GET",url:"https://mobile.mng-ads.com/"+r,options:{withCredentials:!1},bidId:e.bidId}}))},interpretResponse:function(e,t){return null!=(e=e.body)&&"object"===i(e)&&e.hasOwnProperty("ad")?[{requestId:t.bidId,cpm:e.cpm,width:e.Width,height:e.height,ad:e.ad,ttl:e.ttl,creativeId:e.creativeId,netRevenue:e.netRevenue,currency:e.currency,dealId:e.dealId,meta:{advertiserDomains:Array.isArray(e.adomain)?e.adomain:[]}}]:[]},getUserSyncs:function(e){}};Object(s.registerBidder)(a),window.pbjs.installedModules.push("madvertiseBidAdapter")}},[495]);