pbjsChunk([260],{386:function(t,e,r){t.exports=r(387)},387:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"HALOID_LOCAL_NAME",(function(){return f})),r.d(e,"RTD_LOCAL_NAME",(function(){return l})),r.d(e,"storage",(function(){return O})),e.addRealTimeData=g,e.getRealTimeData=m,e.getRealTimeDataAsync=h,r.d(e,"hadronSubmodule",(function(){return v}));var a=r(4),n=r(3),i=r(14),o=r(7),c=r(8),s=r(0);function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}var u="hadron",f="auHadronId",l="auHadronRtd",O=Object(o.b)(561,u);function p(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];if(!r.length)return t;var n=r.shift();if(Object(s.isPlainObject)(t)&&Object(s.isPlainObject)(n)){var i=function(e){Object(s.isPlainObject)(n[e])?(t[e]||b(t,d({},e,{})),p(t[e],n[e])):Object(s.isArray)(n[e])&&t[e]?Object(s.isArray)(t[e])&&n[e].forEach((function(r){for(var a=1,n=0;n<t[e].length;n++)if(Object(s.deepEqual)(t[e][n],r)){a=0;break}a&&t[e].push(r)})):b(t,d({},e,n[e]))};for(var o in n)i(o)}return p.apply(void 0,[t].concat(r))}function j(t,e){return Object(s.isPlainObject)(t)||(t={}),Object(s.isPlainObject)(e)||(e={}),p(t,e)}function g(t,e,r){if(r.params&&r.params.handleRtd)r.params.handleRtd(t,e,r,n.b);else{if(Object(s.isPlainObject)(e.ortb2)){var a=n.b.getConfig("ortb2")||{};n.b.setConfig({ortb2:j(a,e.ortb2)})}if(Object(s.isPlainObject)(e.ortb2b)){var i=n.b.getBidderConfig();Object.keys(e.ortb2b).forEach((function(t){var r=e.ortb2b[t]||{},a={};Object(s.isPlainObject)(i[t])&&(a=i[t]),n.b.setBidderConfig({bidders:[t],config:j(a,r)})}))}}}function m(t,e,r,a){if(r&&Object(s.isPlainObject)(r.params)&&r.params.segmentCache){var n=O.getDataFromLocalStorage(l);if(n){var o=JSON.parse(n);if(o.rtd)return g(t,o.rtd,r),void e()}}var c,d,b,u=Object(i.a)().getUserIds(),p=O.getDataFromLocalStorage(f);if(Object(s.isStr)(p))Object(i.a)().refreshUserIds({submoduleNames:"hadronId"}),u.hadronId=p,h(t,e,r,a,u);else{var j=document.createElement("script");j.type="text/javascript",window.pubHadronCb=function(n){u.hadronId=n,h(t,e,r,a,u)};var m=r.params&&r.params.hadronIdUrl;j.src=(c=m,d="https://id.hadron.ad.gt/api/v1/hadronid",b=u,Object(s.isFn)(c)?c(b):Object(s.isStr)(c)?c:d),document.getElementsByTagName("head")[0].appendChild(j)}}function h(t,e,r,i,o){var c,d,b,u,f,p,j={};Object(s.isPlainObject)(r)&&(c=r,d="params.requestParams.ortb2",b=n.b.getConfig("ortb2"),u=d.split("."),f=u.pop(),(p=u.reduce((function(t,e){return t[e]=t[e]||{}}),c))[f]=p[f]||b,j=r.params.requestParams),Object(s.isPlainObject)(window.pubHadronPm)&&(j.pubHadronPm=window.pubHadronPm);Object(a.a)("https://seg.hadron.ad.gt/api/v1/rtd",{success:function(a,n){if(200===n.status)try{var i=JSON.parse(a);i&&i.rtd?(g(t,i.rtd,r),e(),O.setDataInLocalStorage(l,JSON.stringify(i))):e()}catch(t){Object(s.logError)("unable to parse audigent segment data"),e()}else 204===n.status&&e()},error:function(){e(),Object(s.logError)("unable to get audigent segment data")}},JSON.stringify({userIds:o,config:j}),{contentType:"application/json"})}var v={name:u,getBidRequestData:m,init:function(t,e){return!0}};Object(c.e)("realTimeData",v),window.pbjs.installedModules.push("hadronRtdProvider")}},[386]);