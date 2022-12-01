pbjsChunk([363],{151:function(e,t,n){e.exports=n(152)},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SEGMENTS_STORAGE_KEY",(function(){return m})),n.d(t,"storage",(function(){return g})),t.addRealTimeData=b,t.getRealTimeData=v,n.d(t,"akamaiDapRtdSubmodule",(function(){return y})),n.d(t,"dapUtils",(function(){return h}));var a=n(4),r=n(3),i=n(7),o=n(8),s=n(0);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="akamaiDapSegments",g=Object(i.b)(null,"dap");function b(e){if(Object(s.logInfo)("DEBUG(addRealTimeData) - ENTER"),Object(s.isPlainObject)(e.ortb2)){var t=r.b.getConfig("ortb2")||{};Object(s.logMessage)("DEBUG(addRealTimeData): merging original: ",t),Object(s.logMessage)("DEBUG(addRealTimeData): merging in: ",e.ortb2),r.b.setConfig({ortb2:(n=t,a=e.ortb2,Object(s.isPlainObject)(n)||(n={}),Object(s.isPlainObject)(a)||(a={}),Object(s.mergeDeep)(n,a))})}var n,a;Object(s.logInfo)("DEBUG(addRealTimeData) - EXIT")}function v(e,t,n,a){Object(s.logInfo)("DEBUG(getRealTimeData) - ENTER"),Object(s.logMessage)("  - apiHostname: "+n.params.apiHostname),Object(s.logMessage)("  - apiVersion:  "+n.params.apiVersion);var r=g.getDataFromLocalStorage(m);if(r){var i=JSON.parse(r);i.rtd&&(b(i.rtd),t(),Object(s.logInfo)("DEBUG(getRealTimeData) - 1"))}if(n&&Object(s.isPlainObject)(n.params)){var o={api_hostname:n.params.apiHostname,api_version:n.params.apiVersion,domain:n.params.domain,segtax:n.params.segtax},l={type:n.params.identityType},u=h.dapGetToken(o,l,n.params.tokenTtl);if(null!==u){var p=h.dapGetMembership(o,u),c=h.dapMembershipToRtbSegment(p,o);Object(s.logMessage)("DEBUG(getRealTimeData) - token: "+u+", user.data.segment: ",c);var d={rtd:{ortb2:{user:{data:[c]},site:{ext:{data:{dapSAID:p.said}}}}}};g.setDataInLocalStorage(m,JSON.stringify(d)),t()}}}var y={name:"dap",getBidRequestData:v,init:function(e,t){return!0}};Object(o.e)("realTimeData",y);var h={dapGetToken:function(e,t,n){var a=Math.round(Date.now()/1e3),r="async_dap_token",i=null;0==n&&localStorage.removeItem(r);var o=JSON.parse(localStorage.getItem(r));if(null==o?o={expires_at:a-1,token:null}:i=o.token,a>o.expires_at){h.dapLog("Token missing or expired, fetching a new one...");var l=d({},e);h.dapTokenize(l,t,(function(e,t,i){o.expires_at=a+n,o.token=e,localStorage.setItem(r,JSON.stringify(o)),h.dapLog("Successfully updated and stored token; expires in "+n+" seconds");var s=i.getResponseHeader("Akamai-DAP-100");null!=s&&(localStorage.setItem("dap_deviceId100",s),h.dapLog("Successfully stored DAP 100 Device ID: "+s))}),(function(e,t,n){Object(s.logError)("ERROR("+n+"): failed to retrieve token! "+t)}))}return i},dapGetMembership:function(e,t){var n=Math.round(Date.now()/1e3),a="async_dap_membership",r=null,i=JSON.parse(localStorage.getItem(a));null==i||n-i.expires_at>3600?i={expires_at:n-1,said:null,cohorts:null,attributes:null}:r={said:i.said,cohorts:i.cohorts,attributes:null};var o=d({},e);return h.dapMembership(o,t,(function(e,t,r){i.expires_at=n+3600,i.said=e.said,i.cohorts=e.cohorts,localStorage.setItem(a,JSON.stringify(i)),h.dapLog("Successfully updated and stored membership:"),h.dapLog(i)}),(function(e,t,n){Object(s.logError)("ERROR("+n+"): failed to retrieve membership! "+t)})),r},dapMembershipToRtbSegment:function(e,t){var n={name:"dap.akamai.com",ext:{segtax:t.segtax},segment:[]};if(null!=e){var a,r=u(e.cohorts);try{for(r.s();!(a=r.n()).done;){var i=a.value;n.segment.push({id:i})}}catch(e){r.e(e)}finally{r.f()}}return n},dapLog:function(e){Object(s.logInfo)("%cDAP Client","display: inline-block;color: #fff;background: #F28B20;padding: 1px 4px;border-radius: 3px",e)},dapTokenize:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(null==r&&(r=function(e,t,n){}),null!=e&&"undefined"!=l(e))if("string"==typeof e.domain)if(e.domain.length<=0)r(null,"Invalid config.domain: must have non-zero length","ClientError");else if((!("api_version"in e)||"string"==typeof e.api_version&&0==e.api_version.length)&&(e.api_version="x1"),"string"==typeof e.api_version)if("api_hostname"in e&&"string"==typeof e.api_hostname&&0!=e.api_hostname.length)if(null!=t&&"undefined"!=l(t))if(!("type"in t)||"string"!=typeof t.type||t.type.length<=0)r(null,"Identity must contain a valid 'type' field","ClientError");else{var i,o,s,u={type:t.type};switch("undefined"!=l(t.identity)&&(u.identity=t.identity),"undefined"!=l(t.attributes)&&(u.attributes=t.attributes),e.api_version){case"x1":case"x1-dev":i="POST",s="/data-activation/"+e.api_version+"/domain/"+e.domain+"/identity/tokenize",o=JSON.stringify(u);break;default:return void r(null,"Invalid api_version: "+e.api_version,"ClientError")}var p="https://"+e.api_hostname+s,c={success:function(t,a){var r=null;switch(e.api_version){case"x1":case"x1-dev":r=a.getResponseHeader("Akamai-DAP-Token")}n(r,a.status,a)},error:function(e,t){r(e,e.statusText,t)}};Object(a.a)(p,c,o,{method:i,customHeaders:{"Content-Type":"application/json",Pragma:"akamai-x-cache-on"}})}else r(null,"Invalid identity object","ClientError");else r(null,"Invalid api_hostname: must be a non-empty string","ClientError");else r(null,"Invalid api_version: must be a string like 'x1', etc.","ClientError");else r(null,"Invalid config.domain: must be a string","ClientError");else r(null,"Invalid config object","ClientError")},dapMembership:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(null==r&&(r=function(e,t,n){}),null!=e&&"undefined"!=l(e))if((!("api_version"in e)||"string"==typeof e.api_version&&0==e.api_version.length)&&(e.api_version="x1"),"string"==typeof e.api_version)if("api_hostname"in e&&"string"==typeof e.api_hostname&&0!=e.api_hostname.length)if(null!=t&&"string"==typeof t){var i="/data-activation/"+e.api_version+"/token/"+t+"/membership",o="https://"+e.api_hostname+i,s={success:function(e,t){n(JSON.parse(e),t.status,t)},error:function(e,t){r(t,t.status,e)}};Object(a.a)(o,s,void 0,{method:"GET",customHeaders:{}})}else r(null,"Invalid token: must be a non-null string","ClientError");else r(null,"Invalid api_hostname: must be a non-empty string","ClientError");else r(null,"Invalid api_version: must be a string like 'x1', etc.","ClientError");else r(null,"Invalid config object","ClientError")}};window.pbjs.installedModules.push("akamaiDapRtdProvider")}},[151]);