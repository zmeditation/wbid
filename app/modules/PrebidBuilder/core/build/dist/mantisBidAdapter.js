pbjsChunk([216],{501:function(t,e,n){t.exports=n(502)},502:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"storage",(function(){return a})),e.onVisible=d,n.d(e,"spec",(function(){return h})),e.sfPostMessage=g,e.iframePostMessage=b;var o=n(1),r=n(7);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=Object(r.b)();function u(t,e){var n=document.createElement("img");n.src=t,n.style.cssText="display:none !important;",(e||document.body).appendChild(n)}function d(t,e,n,o,r){var i,a,u=null,d=!1,c=null,s=function(){d&&c&&c(),d=!1},l=function(t,e,f){var l=void 0!==document.hidden&&document.hidden;if(0==f.width||0==f.height||l)return s();var m=f.height*r,p=f.width*r;return(f.top<0&&f.bottom>=m||f.top>0&&e-f.top>=m)&&(f.left<0&&f.right>=p||f.left>0&&t-f.left>=p)?!u&&o?(u=Date.now(),s()):o&&Date.now()-u<o?s():void(d||n((function(t){t?d=!0:(i&&clearInterval(i),a&&a())}),(function(t){c=t}))):s()};f()&&(a=t.context.observeIntersection((function(t){t.forEach((function(t){l(t.rootBounds.width,t.rootBounds.height,t.boundingClientRect)}))}))),i=setInterval((function(){var n=t.innerHeight||document.documentElement.clientHeight,o=t.innerWidth||document.documentElement.clientWidth;l(o,n,e.getBoundingClientRect())}),100)}function c(t){return null!=t&&("string"==typeof t?!(!t||/^\s*$/.test(t)):"number"!=typeof t||!isNaN(t))}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(){return"object"===i(window.context)&&("AMP-AD"===window.context.tagName||"AMP-EMBED"===window.context.tagName)}function l(t,e,n){var o,r=n||[];for(var i in t){var a=i;e&&(a=e+"["+i+"]");var u=t[i];if(o=u,"[object Array]"===Object.prototype.toString.call(o))for(var d=0;d<u.length;d++){var f=a+"["+d+"]",m=u[d];s(m)&&l(m,f,r)}else s(u)&&u!=t?l(u,a,r):c(u)&&r.push(a+"="+encodeURIComponent(u))}return r.join("&")}function m(t,e,n){var o={referrer:document.referrer,tz:(new Date).getTimezoneOffset(),buster:(new Date).getTime(),secure:"https:"===document.location.protocol,version:9};if(window.mantis_uuid)o.uuid=window.mantis_uuid;else if(a.hasLocalStorage()){var r=a.getDataFromLocalStorage("mantis:uuid");r&&(o.uuid=r)}if(function(){try{return window.self!==window.top&&!window.mantis_link}catch(t){return!0}}())o.iframe=!0;else try{o.title=window.top.document.title,o.referrer=window.top.document.referrer,o.url=window.top.document.location.href}catch(t){}f()&&(o.amp=!0,!o.url&&window.context.canonicalUrl&&(o.url=window.context.canonicalUrl),!o.url&&window.context.location&&(o.url=window.context.location.href),!o.referrer&&window.context.referrer&&(o.referrer=window.context.referrer)),Object.keys(e).forEach((function(t){o[t]=e[t]}));var i=l(o);return(void 0===window.mantis_domain?n||"https://mantodea.mantisadnetwork.com":window.mantis_domain)+t+"?"+i}var p,w,h={code:"mantis",supportedMediaTypes:["banner"],isBidRequestValid:function(t){return!(!t.params.property||!(t.params.code||t.params.zoneId||t.params.zone))},buildRequests:function(t,e){var n=null;t.some((function(t){if(t.params.property)return n=t.params.property,!0}));var o={measurable:!0,usp:e&&e.uspConsent,bids:t.map((function(t){return{bidId:t.bidId,config:t.params,sizes:t.sizes.map((function(t){return{width:t[0],height:t[1]}}))}})),property:n};return e&&e.gdprConsent&&e.gdprConsent.gdprApplies&&(o.consent=!1),{method:"GET",url:m("/prebid/display",o)+"&foo",data:""}},interpretResponse:function(t){return function(t){if(window.mantis_uuid)return!1;if(window.mantis_uuid=t,a.hasLocalStorage())try{a.setDataInLocalStorage("mantis:uuid",t)}catch(t){}}(t.body.uuid),t.body.ads.map((function(e){return{requestId:e.bid,cpm:e.cpm,width:e.width,height:e.height,ad:e.html,meta:{advertiserDomains:e.domains||[]},ttl:e.ttl||t.body.ttl||86400,creativeId:e.view,netRevenue:!0,currency:"USD"}}))},getUserSyncs:function(t,e,n,o){return t.iframeEnabled?[{type:"iframe",url:m("/prebid/iframe",{gdpr:n,uspConsent:o})}]:t.pixelEnabled?[{type:"image",url:m("/prebid/pixel",{gdpr:n,uspConsent:o})}]:void 0}};function g(t,e,n,o){var r=!1;t.ext.register(e,n,(function(){t.ext.inViewPercentage()<50||r||(r=!0,o())}))}function b(t,e,n){for(var o=document.getElementsByTagName("iframe"),r=0;r<o.length;r++){var i=o[r];i.name==e&&d(t,i,(function(t){n(),t()}),1e3,.5)}}p="iframe",w=function(t){window.$sf?g(window.$sf,t.width,t.height,(function(){return u(t.pixel)})):b(window,t.frame,(function(){return u(t.pixel)}))},window.addEventListener("message",(function(t){t.data.mantis&&t.data.type==p&&w(t.data.data)}),!1),Object(o.registerBidder)(h),window.pbjs.installedModules.push("mantisBidAdapter")}},[501]);