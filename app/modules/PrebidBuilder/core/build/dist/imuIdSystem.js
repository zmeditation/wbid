pbjsChunk([251],{413:function(t,e,i){t.exports=i(414)},414:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"storage",(function(){return c})),i.d(e,"storageKey",(function(){return u})),i.d(e,"cookieKey",(function(){return d})),i.d(e,"apiUrl",(function(){return s})),e.setImDataInLocalStorage=m,e.removeImDataFromLocalStorage=l,e.getLocalData=g,e.apiSuccessProcess=p,e.getApiCallback=b,e.callImuidApi=v,e.getApiUrl=D,i.d(e,"imuIdSubmodule",(function(){return S}));var o=i(0),a=i(4),r=i(8),n=i(7),c=Object(n.b)(),u="__im_uid",d="_im_vid",s="https://audiencedata.im-apps.net/imuid/get";function m(t){c.setDataInLocalStorage(u,t),c.setDataInLocalStorage("".concat(u,"_mt"),new Date(Object(o.timestamp)()).toUTCString())}function l(){c.removeDataFromLocalStorage(u),c.removeDataFromLocalStorage("".concat(u,"_mt"))}function f(t){c.setCookie(d,t,new Date(Object(o.timestamp)()+972e8).toUTCString(),"none")}function g(){var t=c.getDataFromLocalStorage("".concat(u,"_mt")),e=!0;return Date.parse(t)&&Date.now()-new Date(t).getTime()<18e5&&(e=!1),{id:c.getDataFromLocalStorage(u),vid:c.getCookie(d),expired:e}}function p(t){t&&(t.uid?(m(t.uid),t.vid&&f(t.vid)):l())}function b(t){return{success:function(e){var i={};if(e)try{p(i=JSON.parse(e))}catch(t){Object(o.logError)("User ID - imuid submodule: "+t)}t&&i.uid&&t(i.uid)},error:function(e){Object(o.logError)("User ID - imuid submodule was unable to get data from api: "+e),t&&t()}}}function v(t){return function(e){Object(a.a)(t,b(e),void 0,{method:"GET",withCredentials:!0})}}function D(t,e){return e?"".concat(e,"?cid=").concat(t):"".concat(s,"?cid=").concat(t)}var S={name:"imuid",decode:function(t){if(t&&"string"==typeof t)return{imuid:t}},getId:function(t){var e=t&&t.params||{};if(e&&"number"==typeof e.cid){var i=D(e.cid,e.url),a=g();return a.vid&&(i+="&vid=".concat(a.vid),f(a.vid)),a.id?(a.expired&&v(i)(),{id:a.id}):{callback:v(i)}}Object(o.logError)("User ID - imuid submodule requires a valid cid to be defined")}};Object(r.e)("userId",S),window.pbjs.installedModules.push("imuIdSystem")}},[413]);