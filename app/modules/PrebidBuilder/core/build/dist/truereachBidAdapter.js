pbjsChunk([117],{770:function(e,t,n){e.exports=n(771)},771:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return d}));var r=n(0),i=n(1),a=n(3),s=[n(2).b],d={code:"truereach",supportedMediaTypes:s,isBidRequestValid:function(e){return e.params.site_id&&e.params.bidfloor&&Object(r.deepAccess)(e,"mediaTypes.banner")&&Object(r.deepAccess)(e,"mediaTypes.banner.sizes.length")>0},buildRequests:function(e,t){if(0===e.length)return[];var n=function(e,t){var n=0,i=0,s=Array.isArray(e[0].params.sizes)?e[0].params.sizes:e[0].sizes;2===s.length&&"number"==typeof s[0]&&"number"==typeof s[1]?(n=s[0],i=s[1]):(n=s[0][0],i=s[0][1]);var d=Number(0),o=window.location.host,c=window.location.host+window.location.pathname+location.search+location.hash;return{id:Object(r.getUniqueIdentifierStr)(),imp:[{id:e[0].bidId,banner:{w:n,h:i},bidfloor:d}],site:{domain:o,page:c},device:{ua:window.navigator.userAgent},tmax:a.b.getConfig("bidderTimeout")}}(e);return{method:"POST",url:"https://ads.momagic.com/exchange/openrtb25/"+Object(r.deepAccess)(e[0],"params.site_id")+"?hb=1&transactionId="+e[0].transactionId,data:n,options:{withCredentials:!0}}},interpretResponse:function(e,t){var n=e.body,r=[];if(!(n&&n.id&&n.seatbid&&0!==n.seatbid.length&&n.seatbid[0].bid&&0!==n.seatbid[0].bid.length))return r;var i=n.seatbid[0].bid[0],a=parseFloat(i.price);if(0===a)return r;var s=i.adm;i.nurl&&(s+='<img src="'+i.nurl+'" height="0px" width="0px">');var d={requestId:i.impid,cpm:a,currency:n.cur||"USD",width:parseInt(i.w),height:parseInt(i.h),ad:decodeURIComponent(s),ttl:180,creativeId:i.crid,netRevenue:!1};return i.adomain&&i.adomain.length&&(d.meta={advertiserDomains:i.adomain}),r.push(d),r},getUserSyncs:function(e,t,n,r){var i=[],a="";return n&&(a="boolean"==typeof n.gdprApplies?"?gdpr=".concat(Number(n.gdprApplies),"&gdpr_consent=").concat(n.consentString):"?gdpr_consent=".concat(n.consentString)),e.iframeEnabled&&i.push({type:"iframe",url:"http://ads.momagic.com/jsp/usersync.jsp"+a}),i}};Object(i.registerBidder)(d),window.pbjs.installedModules.push("truereachBidAdapter")}},[770]);