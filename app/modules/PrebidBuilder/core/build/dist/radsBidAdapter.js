pbjsChunk([161],{642:function(e,t,n){e.exports=n(643)},643:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return p}));var r=n(0),i=n(3),d=n(1),o=n(2);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p={code:"rads",gvlid:602,aliases:[],supportedMediaTypes:[o.b,o.d],isBidRequestValid:function(e){return!!e.params.placement},buildRequests:function(e,t){return e.map((function(e){var n,i,d=e.params,o=d.placement,s=Math.floor(99999999999*Math.random()),p=encodeURIComponent(t.refererInfo.referer),u=e.bidId,c=d.devMode||!1?"https://dcradn1.online-solution.biz/md.request.php":"https://rads.recognified.net/md.request.php",f={_f:"prebid_js",_ps:o,idt:100,rnd:s,p:p,bid_id:u};if("banner"===(i=e).mediaType||Object(r.deepAccess)(i,"mediaTypes.banner")||!function(e){return"video"===e.mediaType||!!Object(r.deepAccess)(e,"mediaTypes.video")}(i))n=function(e){return l(Object(r.deepAccess)(e,"mediaTypes.banner.sizes")||e.sizes)}(e),f.rt="bid-response",f.srw=n[0].width,f.srh=n[0].height;else{var g=d.vastFormat||"vast2";n=function(e){return l(Object(r.deepAccess)(e,"mediaTypes.video.playerSize")||e.sizes)}(e),f.rt=g,f.srw=n[0].width,f.srh=n[0].height}if(n.length>1){f.alt_ad_sizes=[];for(var m=1;m<n.length;m++)f.alt_ad_sizes.push(n[m].width+"x"+n[m].height)}return function(e,t,n,r){void 0!==e.pfilter&&(t.pfilter=e.pfilter);n&&n.gdprConsent&&(void 0!==t.pfilter?(t.pfilter.gdpr_consent=n.gdprConsent.consentString,t.pfilter.gdpr=n.gdprConsent.gdprApplies):t.pfilter={gdpr_consent:n.gdprConsent.consentString,gdpr:n.gdprConsent.gdprApplies});void 0!==e.bcat&&(t.bcat=e.bcat);void 0!==e.dvt&&(t.dvt=e.dvt);void 0!==e.latitude&&(t.latitude=e.latitude);void 0!==e.longitude&&(t.longitude=e.longitude);void 0!==e.ip&&(t.i=e.ip);r.userId&&r.userId.netId&&(t.did_netid=r.userId.netId);r.userId&&r.userId.uid2&&(t.did_uid2=r.userId.uid2)}(d,f,t,e),{method:"GET",url:c,data:a(f)}}))},interpretResponse:function(e,t){var n=[],r=e.body,d=r.crid||0,o=r.cpm/1e6||0;if(0!==o&&0!==d){var s=r.dealid||"",p=r.currency||"EUR",u=void 0===r.netRevenue||r.netRevenue,a={requestId:r.bid_id,cpm:o,width:r.width,height:r.height,creativeId:d,dealId:s,currency:p,netRevenue:u,ttl:i.b.getConfig("_bidderTimeout"),meta:{advertiserDomains:r.adomain||[]}};r.vastXml?(a.vastXml=r.vastXml,a.mediaType="video"):a.ad=r.adTag,n.push(a)}return n},getUserSyncs:function(e,t,n,r){if(!t||0===t.length)return[];var i=[],d="";return n&&(d="gdprApplies"in n&&"boolean"==typeof n.gdprApplies?"gdpr=".concat(Number(n.gdprApplies),"&gdpr_consent=").concat(n.consentString):"gdpr_consent=".concat(n.consentString)),t.length>0&&t[0].body.userSync&&(e.iframeEnabled&&t[0].body.userSync.iframeUrl.forEach((function(e){return i.push({type:"iframe",url:u(e,d)})})),e.pixelEnabled&&t[0].body.userSync.imageUrl.forEach((function(e){return i.push({type:"image",url:u(e,d)})}))),i}};function u(e,t){return t?e+(-1!==e.indexOf("?")?"&":"?")+t:e}function a(e,t){var n,r=[];for(n in e)if(e.hasOwnProperty(n)){var i=t?t+"["+n+"]":n,d=e[n];r.push(null!==d&&"object"===s(d)?a(d,i):encodeURIComponent(i)+"="+encodeURIComponent(d))}return r.join("&")}function c(e){var t={};return t.width=parseInt(e[0],10),t.height=parseInt(e[1],10),t}function l(e){return Array.isArray(e[0])?e.map((function(e){return c(e)})):[c(e)]}Object(d.registerBidder)(p),window.pbjs.installedModules.push("radsBidAdapter")}},[642]);