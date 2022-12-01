pbjsChunk([292],{371:function(e,r,t){e.exports=t(372)},372:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return v}),r.resetUserSync=function(){i=!1},r.getSyncUrl=function(){return d};var l=t(0),n=t(1),o=t(11),c=t(2),d="https://tech.convergd.com/push_sync",i=!1,g="Bid from response has no auid parameter - ",f="Bid from response has no adm parameter - ",p="Array of bid objects is empty",y="Can't find in requested bids the bid with auid - ",u="Seatbid array from response has empty item",m="Response is empty",b="Response has empty seatbid array",h="Seatbid from response has no array of bid objects - ",v={code:"converge",supportedMediaTypes:[c.b,c.d],isBidRequestValid:function(e){return!!e.params.uid},buildRequests:function(e,r){var a,o,p=[],u={},c={},g={},f="net";(e||[]).forEach(function(e){"gross"===e.params.priceType&&(f="gross"),o=e.bidderRequestId;var r=e.params.uid,t=e.adUnitCode;p.push(r);var n,s=l.parseSizesInput(e.sizes);a||l.isEmpty(e.params.keywords)||(0<(n=l.transformBidderParamKeywords(e.params.keywords)).length&&n.forEach(S),a=n),c[r]||(c[r]={});var d=c[r];d[t]?d[t].bids.push(e):d[t]={adUnitCode:t,bids:[e],parents:[]};var i=d[t];s.forEach(function(e){g[e]=!0,u[r]||(u[r]={}),u[r][e]?u[r][e].push(i):u[r][e]=[i],i.parents.push({parent:u[r],key:e,uid:r})})});var t={pt:f,auids:p.join(","),sizes:l.getKeys(g).join(","),r:o,wrapperType:"Prebid_js",wrapperVersion:"4.26.0-pre"};return a&&(t.keywords=JSON.stringify(a)),r&&(r.refererInfo&&r.refererInfo.referer&&(t.u=r.refererInfo.referer),r.timeout&&(t.wtimeout=r.timeout),r.gdprConsent&&(r.gdprConsent.consentString&&(t.gdpr_consent=r.gdprConsent.consentString),t.gdpr_applies="boolean"==typeof r.gdprConsent.gdprApplies?Number(r.gdprConsent.gdprApplies):1),r.uspConsent&&(t.us_privacy=r.uspConsent)),{method:"GET",url:"https://tech.convergd.com/hb",data:l.parseQueryStringParameters(t).replace(/\&$/,""),bidsMap:u}},interpretResponse:function(e,r,t){var n=2<arguments.length&&void 0!==t?t:o.a;e=e&&e.body;var s,d=[],i=r.bidsMap,a=r.data.pt;return e?e.seatbid&&!e.seatbid.length&&(s=b):s=m,!s&&e.seatbid&&e.seatbid.forEach(function(e){!function(e,d,r,t,n){if(!e)return;var s;e.auid||(s=g+JSON.stringify(e));{var i,a,o,p,u;e.adm?(i=d[e.auid])?(a="".concat(e.w,"x").concat(e.h),i[a]&&(o=i[a][0],p=o.bids.shift(),u={requestId:p.bidId,bidderCode:v.code,cpm:e.price,width:e.w,height:e.h,creativeId:e.auid,currency:"EUR",netRevenue:"gross"!==r,ttl:360,dealId:e.dealid},"video"===e.content_type||!e.content_type&&p.mediaTypes&&p.mediaTypes.video?(u.vastXml=e.adm,u.mediaType=c.d,u.adResponse={content:u.vastXml},p.renderer||p.mediaTypes&&p.mediaTypes.video&&"outstream"!==p.mediaTypes.video.context||(u.renderer=function(e,r){var t=r.install({id:e.id,url:e.url,loaded:!1});try{t.setRender(E)}catch(e){l.logWarn("Prebid Error calling setRender on renderer",e)}return t}({id:p.bidId,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"},n))):(u.ad=e.adm,u.mediaType=c.b),t.push(u),o.bids.length||o.parents.forEach(function(e){var r=e.parent,t=e.key,n=e.uid,s=r[t].indexOf(o);-1<s&&r[t].splice(s,1),r[t].length||(delete r[t],l.getKeys(r).length||delete d[n])}))):s=y+e.auid:s=f+JSON.stringify(e)}s&&l.logError(s)}(function(e){e?e.bid?e.bid[0]||l.logError(p):l.logError(h+JSON.stringify(e)):l.logError(u);return e&&e.bid&&e.bid[0]}(e),i,a,d,n)}),s&&l.logError(s),d},getUserSyncs:function(e,r,t,n){if(!i&&e.pixelEnabled){var s="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?s+="&gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):s+="&gdpr_consent=".concat(t.consentString)),n&&(s+="&us_privacy=".concat(n)),i=!0,{type:"image",url:d+s}}}};function S(e){var r;r=e.value,l.isArray(r)&&0<r.length&&""===e.value[0]&&delete e.value}function E(e){e.renderer.push(function(){window.ANOutstreamVideo.renderAd({targetId:e.adUnitCode,adResponse:e.adResponse})})}Object(n.registerBidder)(v)}},[371]);