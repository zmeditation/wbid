pbjsChunk([280],{342:function(e,r,t){e.exports=t(343)},343:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return f}));var n=t(0),a=t(2),i=t(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s="freewheel-ssp";function p(e){for(var r=[0,0],t=0;t<e.length;t++)e[t][0]*e[t][1]>r[0]*r[1]&&(r=e[t]);return r}function d(e,r,t){for(var n=r||[0,0],a=t||[Number.MAX_VALUE,Number.MAX_VALUE],i=[],o=0;o<e.length;o++)e[o][0]*e[o][1]>=n[0]*n[1]&&e[o][0]*e[o][1]<=a[0]*a[1]&&i.push(e[o]);return p(i)}function c(e,r){var t="",n=e.querySelectorAll("Impression"),a=!1,i=!1;return Array.prototype.forEach.call(n,(function(e){if(a&&i)return t;a=!1,i=!1;var n=e.textContent.substring(e.textContent.indexOf("?")+1).split("&"),o="";Array.prototype.forEach.call(n,(function(e){var t=e.split("=");t[0]==r&&(o=t[1]),"reqType"==t[0]&&"AdsDisplayStarted"==t[1]&&(i=!0),"rootViewKey"==t[0]&&(a=!0)})),i&&(t=o)})),t}function u(){var e=window;try{for(;top!==e;)e.parent.location.href.length&&(e=e.parent)}catch(e){}return e}function m(e){var r="mustang";return e&&"inbanner"!==e&&(r=e),r}var l=function(e,r){return'var config = {      preloadedVast:vast,      autoPlay:true    };    var ad = new window.com.stickyadstv.vpaid.Ad(document.getElementById("freewheelssp_prebid_target"),config);    (new window.com.stickyadstv.tools.ASLoader('+e.params.zoneId+", '"+m(e.params.format)+"')).registerEvents(ad);    ad.initAd("+r[0]+","+r[1]+',"",0,"","");'},y=function(e){var r=e.params;r.hasOwnProperty("domId")||r.hasOwnProperty("auto")||r.hasOwnProperty("p")||r.hasOwnProperty("article")||("intext-roll"===r.format?r.iframeMode="dfp":r.domId="freewheelssp_prebid_target");var t="var config = {  preloadedVast:vast,  ASLoader:new window.com.stickyadstv.tools.ASLoader("+e.params.zoneId+", '"+m(e.params.format)+"')";for(var n in r)r.hasOwnProperty(n)&&"format"!==n&&"zone"!==n&&"zoneId"!==n&&"vastUrlParams"!==n&&(t+=","+n+':"'+r[n]+'"');return t+="};window.com.stickyadstv."+((e.params.format||"").replace("-","")+".start(config);")},f={code:s,supportedMediaTypes:[a.b,a.d],aliases:["stickyadstv"],isBidRequestValid:function(e){return!!e.params.zoneId},buildRequests:function(e,r){return e.map((function(e){return function(e,r){var t=e.params.zoneId,a=(new Date).getTime(),i=function(e){var r=0;if(0==e.length)return r;for(var t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r&=r;return r}(t+""+a),s={reqType:"AdsSetup",protocolVersion:"2.0",zoneId:t,componentId:"prebid",componentSubId:m(e.params.format),timestamp:a,pKey:i};r&&r.gdprConsent&&(s._fw_gdpr_consent=r.gdprConsent.consentString,"boolean"==typeof r.gdprConsent.gdprApplies&&(s._fw_gdpr=r.gdprConsent.gdprApplies)),e.params.gdpr_consented_providers&&(s._fw_gdpr_consented_providers=e.params.gdpr_consented_providers),r&&r.uspConsent&&(s._fw_us_privacy=r.uspConsent);var c=e.schain;c&&(s.schain=c);var l=e.params.vastUrlParams;if("object"===o(l))for(var y in l)l.hasOwnProperty(y)&&(s[y]=l[y]);var f,v=r&&r.refererInfo?r.refererInfo.referer:u().location.href;(f=v)&&/^(https?|ftp|file):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(f)&&(s.loc=v);var g=[];return((g=e.mediaTypes.video&&e.mediaTypes.video.playerSize?Object(n.isArray)(e.mediaTypes.video.playerSize[0])?e.mediaTypes.video.playerSize[0]:e.mediaTypes.video.playerSize:e.mediaTypes.banner.sizes?d(e.mediaTypes.banner.sizes,e.mediaTypes.banner.minSizeLimit,e.mediaTypes.banner.maxSizeLimit):p(e.sizes))[0]>0||g[1]>0)&&(s.playerSize=g[0]+"x"+g[1]),{method:"GET",url:"https://ads.stickyadstv.com/www/delivery/swfIndex.php",data:s,bidRequest:e}}(e,r)}))},interpretResponse:function(e,r){var t,a=r.bidRequest,i=[];i=a.mediaTypes.video&&a.mediaTypes.video.playerSize?Object(n.isArray)(a.mediaTypes.video.playerSize[0])?a.mediaTypes.video.playerSize[0]:a.mediaTypes.video.playerSize:a.mediaTypes.banner.sizes?d(a.mediaTypes.banner.sizes,a.mediaTypes.banner.minSizeLimit,a.mediaTypes.banner.maxSizeLimit):p(a.sizes),"object"==o(e)&&"string"==typeof e.body&&(e=e.body);try{t=(new DOMParser).parseFromString(e,"application/xml")}catch(e){return void Object(n.logWarn)("Prebid.js - freewheel-ssp : "+e)}var s,f,v=function(e){var r,t={},a=e.querySelectorAll("Extension");if(Array.prototype.forEach.call(a,(function(e){"StickyPricing"===e.getAttribute("type")&&(r=e)})),r){var i=r.querySelector("Price");t={currency:i.getAttribute("currency"),price:i.textContent||i.innerText}}else Object(n.logWarn)("PREBID - freewheel-ssp: No bid received or missing pricing extension.");return t}(t),g=(s="",f=t.querySelectorAll("Ad"),Array.prototype.forEach.call(f,(function(e){s+="["+e.getAttribute("id")+"]"})),s),h=function(e){return c(e,"dealId")}(t),b=function(e){return c(e,"campaignId")}(t),w=function(e){return c(e,"adId")}(t),A=u();A.freewheelssp_cache||(A.freewheelssp_cache={}),A.freewheelssp_cache[a.adUnitCode]=e;var S,z,_,T,I,x,j=[];if(v.price){var O={requestId:a.bidId,cpm:v.price,width:i[0],height:i[1],creativeId:g,currency:v.currency,netRevenue:!0,ttl:360,meta:{advertiserDomains:v.adomain&&Object(n.isArray)(v.adomain)?v.adomain:[]},dealId:h,campaignId:b,bannerId:w};a.mediaTypes.video&&(O.vastXml=e,O.mediaType="video"),O.ad=(z=i,_=(S=a).params.format,T='<div id="freewheelssp_prebid_target" style="width:'+z[0]+"px;height:"+z[1]+'px;"></div>',I="",x="",_&&"inbanner"!==_?(x="https://cdn.stickyadstv.com/prime-time/"+m(S.params.format)+".min.js",I=y(S,z)):(x="https://cdn.stickyadstv.com/mustang/mustang.min.js",I=l(S,z)),T+"<script type='text/javascript'>(function() {  var st = document.createElement('script'); st.type = 'text/javascript'; st.async = true;  st.src = '"+x+"';  st.onload = function(){    var vastLoader = new window.com.stickyadstv.vast.VastLoader();    var vast = vastLoader.getVast();    var topWindow = (function(){var res=window; try{while(top != res){if(res.parent.location.href.length)res=res.parent;}}catch(e){}return res;})();    vast.setXmlString(topWindow.freewheelssp_cache[\""+S.adUnitCode+'"]);    vastLoader.parseAds(vast, {      onSuccess: function() {'+I+" }    });  };  document.head.appendChild(st);})();<\/script>"),j.push(O)}return j},getUserSyncs:function(e,r,t,n){var a="";return t&&(a="boolean"==typeof t.gdprApplies?"?gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):"?gdpr_consent=".concat(t.consentString)),e&&e.pixelEnabled?[{type:"image",url:"https://ads.stickyadstv.com/auto-user-sync"+a}]:[]}};Object(i.registerBidder)(f),window.pbjs.installedModules.push("freewheel-sspBidAdapter")}},[342]);