pbjsChunk([208],{523:function(e,r,n){e.exports=n(524)},524:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"storage",(function(){return a})),n.d(r,"merkleIdSubmodule",(function(){return p}));var o=n(0),t=n(4),s=n(8),i=n(7),d="merkleId",l="https://id2.sv.rkdms.com/identity/",c="_svsid",a=Object(i.b)();function f(e,r,n){var o=new Date;o.setTime(o.getTime()+1e3*n*60),a.setCookie(e,r,o.toUTCString())}function u(e){var r=function(e){return"string"==typeof e.sv_session?e.sv_session:a.getCookie(c)}(e),n=e.endpoint+"?vendor=".concat(e.vendor,"&sv_cid=").concat(e.sv_cid,"&sv_domain=").concat(e.sv_domain,"&sv_pubid=").concat(e.sv_pubid);return r&&(n="".concat(n,"&sv_session=").concat(r)),Object(o.logInfo)("Merkle url :"+n),n}function g(e,r){var n=u(e);return function(e){t.b()(n,(function(n){var t;if(n)try{t=JSON.parse(n),function(e,r){Object(o.logInfo)("Merkle setting session "),r&&r.c&&r.c.value&&"string"==typeof r.c.value&&f(c,r.c.value,e.expires)}(r,t),Object(o.logInfo)("Merkle responseObj "+JSON.stringify(t))}catch(e){Object(o.logError)(e)}var s=(new Date).toUTCString();t.date=s,Object(o.logInfo)("Merkle responseObj with date "+JSON.stringify(t)),e(t)}),(function(r){Object(o.logError)("".concat(d,": merkleId fetch encountered an error"),r),e()}),{method:"GET",withCredentials:!0})}}var p={name:d,decode:function(e){var r=e&&e.pam_id&&"string"==typeof e.pam_id.id?e.pam_id:void 0;return Object(o.logInfo)("Merkle id "+JSON.stringify(r)),r?{merkleId:r}:void 0},getId:function(e,r){Object(o.logInfo)("User ID - merkleId generating id");var n=e&&e.params||{};if(n&&"string"==typeof n.vendor)if("string"==typeof n.sv_cid)if("string"==typeof n.sv_pubid){if(!r||"boolean"!=typeof r.gdprApplies||!r.gdprApplies)return"string"!=typeof n.endpoint&&(Object(o.logWarn)("User ID - merkleId submodule endpoint string is not defined"),n.endpoint=l),"string"!=typeof n.sv_domain&&(n.sv_domain=p.findRootDomain()),{callback:g(n,e&&e.storage||{})};Object(o.logError)("User ID - merkleId submodule does not currently handle consent strings")}else Object(o.logError)("User ID - merkleId submodule requires a valid sv_pubid string to be defined");else Object(o.logError)("User ID - merkleId submodule requires a valid sv_cid string to be defined");else Object(o.logError)("User ID - merkleId submodule requires a valid vendor to be defined")},extendId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;Object(o.logInfo)("User ID - merkleId stored id "+n);var t=e&&e.params||{};if("string"!=typeof t.endpoint&&(Object(o.logWarn)("User ID - merkleId submodule endpoint string is not defined"),t.endpoint=l),!r||"boolean"!=typeof r.gdprApplies||!r.gdprApplies){"string"!=typeof t.sv_domain&&(t.sv_domain=p.findRootDomain());var s=e&&e.storage||{};if(s&&s.refreshInSeconds&&"number"==typeof t.refreshInSeconds)return{id:n};var i=25200;t&&t.refreshInSeconds&&"number"==typeof t.refreshInSeconds&&(i=t.refreshInSeconds,Object(o.logInfo)("User ID - merkleId param refreshInSeconds"+i));var d=new Date(n.date);if(d&&(d&&Date.now()-d.getTime()>1e3*i)){Object(o.logInfo)("User ID - merkleId needs refreshing id");var c=g(t,s);return{callback:c}}return Object(o.logInfo)("User ID - merkleId not refreshed"),{id:n}}Object(o.logError)("User ID - merkleId submodule does not currently handle consent strings")}};Object(s.e)("userId",p),window.pbjs.installedModules.push("merkleIdSystem")}},[523]);