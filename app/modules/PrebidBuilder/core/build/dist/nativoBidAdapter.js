pbjsChunk([200],{539:function(e,t,n){e.exports=n(540)},540:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return p}));var r=n(0),i=n(1),d=n(2),o="nativo",a=[d.b],c={},s={},u={url:function(e){return"string"==typeof e},placementId:function(e){return"string"==typeof e||"number"==typeof e}},p={code:o,gvlid:263,aliases:["ntv"],supportedMediaTypes:a,isBidRequestValid:function(e){return e.params?!Object.keys(e.params).some((function(t){var n=e.params[t],r=u[t];return!!r&&!r(n)})):e.bidder===o},buildRequests:function(e,t){var n,i,d=new Set,o={};e.forEach((function(e){i=Object(r.deepAccess)(e,"params.url",t.refererInfo.referer),(n=Object(r.deepAccess)(e,"params.placementId"))&&d.add(n);var a=n||e.adUnitCode;o[a]={bidId:e.bidId,size:b(e.sizes)}})),c[t.bidderRequestId]=o;var a,u={adUnits:e.map((function(e){return s[e.adUnitCode]=void 0!==s[e.adUnitCode]?s[e.adUnitCode]+1:0,{adUnitCode:e.adUnitCode,mediaTypes:e.mediaTypes}}))},p=[{key:"ntv_pb_rid",value:t.bidderRequestId},{key:"ntv_ppc",value:btoa(JSON.stringify(u))},{key:"ntv_dbr",value:btoa(JSON.stringify(s))},{key:"ntv_url",value:encodeURIComponent(i)}];if(d.size>0){var l=[];d.forEach((function(e){return l.push(e)})),p.unshift({key:"ntv_ptd",value:l.join(",")})}return t.gdprConsent&&p.unshift({key:"ntv_gdpr_consent",value:t.gdprConsent.consentString}),t.uspConsent&&p.unshift({key:"us_privacy",value:t.uspConsent}),{method:"GET",url:"https://exchange.postrelease.com/prebid"+(a=p,"?"+a.reduce((function(e,t){return f(e,t.key,t.value)}),""))}},interpretResponse:function(e,t){var n=this;if(!e||!e.body||Object(r.isEmpty)(e.body))return[];try{var i,d,o="string"==typeof e.body?JSON.parse(e.body):e.body,a=[];return o.seatbid.forEach((function(e){e.bid.forEach((function(e){d=n.getAdUnitData(o.id,e),i={requestId:d.bidId,cpm:e.price,currency:o.cur,width:e.w||d.size[0],height:e.h||d.size[1],creativeId:e.crid,dealId:e.id,netRevenue:!0,ttl:e.ttl||360,ad:e.adm,meta:{advertiserDomains:e.adomain}},a.push(i)}))})),delete c[o.id],a}catch(e){return[]}},getUserSyncs:function(e,t,n,i){var d="";n&&(d=f(d,"gdpr",n.gdprApplies?1:0),d=f(d,"gdpr_consent",encodeURIComponent(n.consentString||""))),i&&(d=f(d,"us_privacy",encodeURIComponent(i.uspConsent)));var o,a={iframe:e.iframeEnabled,image:e.pixelEnabled},c=[];return t.forEach((function(e){if(!e||!e.body||Object(r.isEmpty)(e.body))return c;(o="string"==typeof e.body?JSON.parse(e.body):e.body)&&o.seatbid&&0!==o.seatbid.length&&o.seatbid.forEach((function(e){e.syncUrls.forEach((function(e){a[e.type]&&""!==e.url.trim()&&c.push({type:e.type,url:e.url.replace("{GDPR_params}",d)})}))}))})),c},onTimeout:function(e){},onBidWon:function(e){},onSetTargeting:function(e){},getAdUnitData:function(e,t){var n=Object(r.deepAccess)(c,"".concat(e,".").concat(t.impid));if(n)return n;var i=Object(r.deepAccess)(t,"ext.ad_unit_id");return Object(r.deepAccess)(c,"".concat(e,".").concat(i))}};function f(e,t,n){return e+"".concat(e.length?"&":"").concat(t,"=").concat(n)}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return e&&0!==e.length?1===e.length?e[0]:e.reduce((function(e,n){return t(n)>t(e)?n:e})):[]}Object(i.registerBidder)(p);var l=function(e){return e[0]*e[1]};window.pbjs.installedModules.push("nativoBidAdapter")}},[539]);