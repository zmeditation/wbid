pbjsChunk([119],{766:function(e,t,n){e.exports=n(767)},767:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return o})),t.getStorageData=u,t.setStorageData=g,t.acceptPostMessage=b;var r=n(0),i=n(1),a=n(7),d=Object(a.b)(),o={code:"trion",isBidRequestValid:function(e){return!!(e&&e.params&&e.params.pubId&&e.params.sectionId)},buildRequests:function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r],a=p(i,t);n.push({method:"GET",url:"https://in-appadvertising.com/api/bidRequest",bidRequest:i,data:a})}return n},interpretResponse:function(e,t){var n={},r=[],i=t.bidRequest,a=e?e.body:{};if(a&&a.bidId&&i){var d=a.result;if(d&&d.cpm&&d.placeBid&&d.ad){var o=parseInt(d.cpm,10)/100;n.requestId=i.bidId,n.cpm=o,n.ad=d.ad,n.width=d.width,n.height=d.height,n.ttl=d.ttl,n.creativeId=d.creativeId,n.currency=d.currency,n.netRevenue=d.netRevenue,d.adomain&&(n.meta={advertiserDomains:d.adomain}),r.push(n)}}return r},getUserSyncs:function(e,t,n,r){if(e.iframeEnabled)return function(){try{window.addEventListener&&window.addEventListener("message",b)}catch(e){}}(),[{type:"iframe",url:s(n,r)}]}};function s(e,t){var n=(u("_trion_lps")||":").split(":")||[],r=n[0]||-1,i=n[1]||-1,a=c(),d="";return e&&(e.consentString&&(d+="&gc="+encodeURIComponent(e.consentString)),d+="&g="+(e.gdprApplies?1:0)),t&&(d="&up="+encodeURIComponent(t)),"https://in-appadvertising.com/api/userSync.html"+"?p=".concat(r,"&s=").concat(i).concat(d,"&u=").concat(a)}function c(){var e="";try{if(window.top==window)e=window.location.href;else try{e=window.top.location.href}catch(t){e=document.referrer}}catch(e){}return e}function p(e,t){var n=Object(r.getBidIdParameter)("pubId",e.params),i=Object(r.getBidIdParameter)("sectionId",e.params),a=c(),d=function(e){return e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes?e.mediaTypes.banner.sizes:e.sizes}(e),o=Object(r.parseSizesInput)(d).join(","),s=navigator&&navigator.webdriver?"1":"0",p=document.hidden?"1":"0",b=encodeURIComponent(document.visibilityState),l=window.TR_INT_T&&-1!=window.TR_INT_T?window.TR_INT_T:null;l||(l=u("_trion_int_t")),l&&g("_trion_int_t",l),g("_trion_lps",n+":"+i);var y="";if(y=Object(r.tryAppendQueryString)(y,"bidId",e.bidId),y=Object(r.tryAppendQueryString)(y,"pubId",n),y=Object(r.tryAppendQueryString)(y,"sectionId",i),y=Object(r.tryAppendQueryString)(y,"vers","6.10.0-pre"),a&&(y+="url="+a+"&"),o&&(y+="sizes="+o+"&"),l&&(y=Object(r.tryAppendQueryString)(y,"int_t",encodeURIComponent(l))),y=Object(r.tryAppendQueryString)(y,"tr_wd",s),y=Object(r.tryAppendQueryString)(y,"tr_hd",p),y=Object(r.tryAppendQueryString)(y,"tr_vs",b),t&&t.gdprConsent){var m=t.gdprConsent;m&&(m.consentString&&(y=Object(r.tryAppendQueryString)(y,"gdprc",encodeURIComponent(m.consentString))),y=Object(r.tryAppendQueryString)(y,"gdpr",m.gdprApplies?1:0))}return t&&t.uspConsent&&(y=Object(r.tryAppendQueryString)(y,"usp",encodeURIComponent(t.uspConsent))),y.lastIndexOf("&")===y.length-1&&(y=y.substring(0,y.length-1)),y}function u(e){var t=null;try{d.hasLocalStorage()&&(t=d.getDataFromLocalStorage(e))}catch(e){}return t}function g(e,t){try{d.hasLocalStorage()&&d.setDataInLocalStorage(e,t)}catch(e){}}function b(e){var t=e.data||"";if(t.indexOf&&t.split&&0===t.indexOf("_trion_userId")){var n=t.split("_trion_userId=")[1];n&&g("_trion_int_t",n)}}Object(i.registerBidder)(o),window.pbjs.installedModules.push("trionBidAdapter")}},[766]);