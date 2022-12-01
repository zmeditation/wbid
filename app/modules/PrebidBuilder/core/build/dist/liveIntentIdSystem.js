pbjsChunk([4],{471:function(e,n,t){e.exports=t(472)},472:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"storage",(function(){return p})),n.reset=function(){window&&window.liQ&&(window.liQ=[]);b.setModuleMode(null),g=!1,m=null},t.d(n,"liveIntentIdSubmodule",(function(){return b}));var r=t(0),o=t(4),i=t(8),a=t(473),c=t(9),u=t(7),f=t(474);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h="liveIntentId",p=Object(u.b)(null,h),v={ajaxGet:function(e,n,t,r){Object(o.b)(r)(e,{success:n,error:t},void 0,{method:"GET",withCredentials:!0})},pixelGet:function(e,n){return Object(r.triggerPixel)(e,n)}},g=!1,m=null;function w(e){if(m)return m;var n={source:"prebid",publisherId:(e=e||{}).publisherId||"any"};e.url&&(n.url=e.url),e.partner&&(n.source=e.partner),e.ajaxTimeout&&(n.ajaxTimeout=e.ajaxTimeout);var t,r,o=(t=e.liCollectConfig,r={},(t=t||{}).appId&&(r.appId=t.appId),t.fpiStorageStrategy&&(r.storageStrategy=t.fpiStorageStrategy),t.fpiExpirationDays&&(r.expirationDays=t.fpiExpirationDays),t.collectorUrl&&(r.collectorUrl=t.collectorUrl),r);o.wrapperName="prebid",o.identityResolutionConfig=n,o.identifiersToResolve=e.identifiersToResolve||[];var i=c.uspDataHandler.getConsentData();i&&(o.usPrivacyString=i);var a=c.gdprDataHandler.getConsentData();return a&&(o.gdprApplies=a.gdprApplies,o.gdprConsent=a.consentString),m=b.getInitializer()(o,p,v),e.emailHash&&m.push({hash:e.emailHash}),m}function y(){!g&&m&&(m.fire(),g=!0)}var b={moduleMode:void 0,name:h,setModuleMode:function(e){this.moduleMode=e},getInitializer:function(){return"minimal"===this.moduleMode?f.a:a.a},decode:function(e,n){var t=n&&n.params||{};return m||w(t),y(),e&&"string"==typeof e.unifiedId?function(e){var n={lipbid:e.unifiedId};return delete e.unifiedId,{lipb:s(s({},n),e)}}(e):void 0},getId:function(e){var n=w(e&&e.params||{});if(n){y();return{callback:function(e){n.resolve((function(n){e(n)}),(function(n){Object(r.logError)("".concat(h,": ID fetch encountered an error: "),n),e()}))}}}}};Object(i.e)("userId",b),window.pbjs.installedModules.push("liveIntentIdSystem")},473:function(e,n,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.d(n,"a",(function(){return on}));var o="[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",i=new RegExp("^".concat(o,"$"),"i");function a(e){return"object"===r(e)?JSON.stringify(e):""+e}function c(e){return"[object Array]"===Object.prototype.toString.call(e)}var u=!!String.prototype.trim;function f(e){return u?(""+e).trim():(""+e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function l(e){return"string"==typeof e}function s(e,n){return l(e)&&l(n)&&f(e.toLowerCase())===f(n.toLowerCase())}function d(e){return!!e&&"object"===r(e)&&!c(e)}function h(e){return e&&"function"==typeof e}function p(e){return v(e,864e5).toUTCString()}function v(e,n){return new Date((new Date).getTime()+e*n)}function g(e,n,t){return function(e){return null!=e&&f(e).length>0}(n)?[e,h(t)?t(n):n]:[]}function m(e,n){return g(e,n,(function(e){return encodeURIComponent(e)}))}function w(e){if(e&&d(e)){var n=[];return Object.keys(e).forEach((function(t){var r=e[t];r&&!d(r)&&r.length&&n.push([encodeURIComponent(t),encodeURIComponent(r)])})),n}return[]}function y(e,n){var t={},r=function(e){return d(e)?e:{}},o=r(e),i=r(n);return Object.keys(o).forEach((function(e){t[e]=o[e]})),Object.keys(i).forEach((function(e){t[e]=i[e]})),t}var b="li_errors",S="_li_duid",I="https://idx.liadm.com/idex";function C(e,n){window&&window.__li__evt_bus&&window.__li__evt_bus.emit(e,n)}function _(e,n){C(e,n)}function x(e,n){E(e,n.message,n)}function E(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new Error(n||t.message);r.stack=t.stack,r.name=e||"unknown error",r.lineNumber=t.lineNumber,r.columnNumber=t.columnNumber,C(b,r)}function O(e,n,t,r){var o=e&&e.collectorUrl||"https://rp.liadm.com";function i(e){a(e,"p",(function(e){return n.pixelGet(e,t)}))}function a(e,n,t){if(e.sendsPixel()){h(r)&&r();var i="dtstmp=".concat(u()),a=e.asQueryString(),c=a?"&".concat(i):"?".concat(i);t("".concat(o,"/").concat(n).concat(a).concat(c))}}function u(){var e=new Date;return new Date(e.toUTCString()).getTime()+e.getMilliseconds()}return{sendAjax:function(e){a(e,"j",(function(r){n.ajaxGet(r,(function(e){h(t)&&t(),function(e){try{var t=JSON.parse(e).bakers;if(c(t))for(var r=0;r<t.length;r++)n.pixelGet("".concat(t[r],"?dtstmp=").concat(u()))}catch(e){E("CallBakers","Error while calling bakers",e)}}(e)}),(function(n){i(e),E("AjaxFailed",n.message,n)}),0)}))},sendPixel:i}}function j(e){this.size=parseInt(e)||5,this.h={},this.q={}}j.prototype={on:function(e,n,t){(this.h[e]||(this.h[e]=[])).push({fn:n,ctx:t});for(var r=(this.q[e]||[]).length,o=0;o<r;o++)n.apply(t,this.q[e][o]);return this},once:function(e,n,t){var r=this,o=this.q[e]||[];if(o.length>0)return n.apply(t,o[0]),this;var i=function o(){r.off(e,o),n.apply(t,arguments)};return i._=n,this.on(e,i,t)},emit:function(e){for(var n=[].slice.call(arguments,1),t=(this.h[e]||[]).slice(),r=0,o=t.length;r<o;r++)t[r].fn.apply(t[r].ctx,n);var i=this.q[e]||(this.q[e]=[]);return i.length>=this.size&&i.shift(),i.push(n),this},off:function(e,n){var t=this.h[e],r=[];if(t&&n)for(var o=0,i=t.length;o<i;o++)t[o].fn!==n&&t[o].fn._!==n&&r.push(t[o]);return r.length?this.h[e]=r:delete this.h[e],this}};function R(e){return function(e){var n;for(e="".concat(e),n=0;n<e.length;n++)if(e.charCodeAt(n)>255)return null;var t,r="";for(n=0;n<e.length;n+=3){var o=[void 0,void 0,void 0,void 0];o[0]=e.charCodeAt(n)>>2,o[1]=(3&e.charCodeAt(n))<<4,e.length>n+1&&(o[1]|=e.charCodeAt(n+1)>>4,o[2]=(15&e.charCodeAt(n+1))<<2),e.length>n+2&&(o[2]|=e.charCodeAt(n+2)>>6,o[3]=63&e.charCodeAt(n+2));for(var i=0;i<o.length;i++)void 0===o[i]?r+="=":r+=(t=o[i])>=0&&t<64?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t]:void 0}return r}(e)||""}var k=/[+/]|=+$/g,L={"+":"-","/":"_"};function D(e){return L[e]||""}function U(e){var n=null,t=encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(e,n){return String.fromCharCode("0x"+n)}));try{n=window&&h(window.btoa)?window.btoa:R}catch(e){n=R}return n(t).replace(k,D)}function N(e){return/\S+(@|%40)\S+\.\S+/.test(e)}var F=/"([^"]+(@|%40)[^"]+[.][a-z]*(\s+)?)(\\"|")/;function T(e){return F.test(e)}function A(e,n){return"string"==typeof n&&N(f(n))?"*********":n}for(var P=[],G=0;G<64;)P[G]=0|4294967296*Math.sin(++G%Math.PI);function V(e){var n,t,r,o=[n=1732584193,t=4023233417,~n,~t],i=[],a=unescape(encodeURI(e))+"",c=a.length;for(e=--c/4+2|15,i[--e]=8*c;~c;)i[c>>2]|=a.charCodeAt(c)<<8*c--;for(G=a=0;G<e;G+=16){for(c=o;a<64;c=[r=c[3],n+((r=c[0]+[n&t|~n&r,r&n|~r&t,n^t^r,t^(n|~r)][c=a>>4]+P[a]+~~i[G|15&[a,5*a+1,3*a+5,7*a][c]])<<(c=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*c+a++%4])|r>>>-c),n,t])n=0|c[1],t=c[2];for(a=4;a;)o[--a]+=c[a]}for(e="";a<32;)e+=(o[a>>3]>>4*(1^a++)&15).toString(16);return e}function Q(e){var n,t,r,o,i,a=[],c=[t=1732584193,r=4023233417,~t,~r,3285377520],u=[],f=unescape(encodeURI(e))+"",l=f.length;for(u[e=--l/4+2|15]=8*l;~l;)u[l>>2]|=f.charCodeAt(l)<<8*~l--;for(n=l=0;n<e;n+=16){for(t=c;l<80;t=[t[4]+(a[l]=l<16?~~u[n+l]:2*f|f<0)+1518500249+[r&o|~r&i,f=341275144+(r^o^i),882459459+(r&o|r&i|o&i),f+1535694389][l++/5>>2]+((f=t[0])<<5|f>>>27),f,r<<30|r>>>2,o,i])f=a[l-3]^a[l-8]^a[l-14]^a[l-16],r=t[1],o=t[2],i=t[3];for(l=5;l;)c[--l]+=t[l]}for(f="";l<40;)f+=(c[l>>3]>>4*(7-l++)&15).toString(16);return f}for(var J,M=18,W=[],H=[];M>1;M--)for(J=M;J<320;)W[J+=M]=1;function z(e,n){return 4294967296*Math.pow(e,1/n)|0}for(J=0;J<64;)W[++M]||(H[J]=z(M,2),W[J++]=z(M,3));function q(e,n){return e>>>n|e<<-n}function B(e){var n=H.slice(M=J=0,8),t=[],r=unescape(encodeURI(e))+"",o=r.length;for(t[e=--o/4+2|15]=8*o;~o;)t[o>>2]|=r.charCodeAt(o)<<8*~o--;for(o=[];M<e;M+=16){for(z=n.slice();J<64;z.unshift(r+(q(r=z[0],2)^q(r,13)^q(r,22))+(r&z[1]^z[1]&z[2]^z[2]&r)))z[3]+=r=0|(o[J]=J<16?~~t[J+M]:(q(r=o[J-2],17)^q(r,19)^r>>>10)+o[J-7]+(q(r=o[J-15],7)^q(r,18)^r>>>3)+o[J-16])+z.pop()+(q(r=z[4],6)^q(r,11)^q(r,25))+(r&z[5]^~r&z[6])+W[J++];for(J=8;J;)n[--J]+=z[J]}for(r="";J<64;)r+=(n[J>>3]>>4*(7-J++)&15).toString(16);return r}var $={32:"md5",40:"sha1",64:"sha256"};function K(e){var n=X(e);return!!n&&null!=$[n.length]}function X(e){var n=e.match(/(\s+)?[a-f0-9]{32,64}(\s+)?/gi);return n&&n.map(f)[0]}function Y(e){var n=e.toLowerCase();return{md5:V(n),sha1:Q(n),sha256:B(n)}}function Z(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return Q(e.replace(/^\./,"")).substring(0,n)}var ee=["items","itemids"],ne=["email","emailhash","hash","hashedemail"];var te=[function(e){for(var n,t=e.eventSource,r=0,o=Object.keys(t);r<o.length;r++){var i=o[r],c=i.toLowerCase();if(ne.indexOf(c)>-1){var u=f(a(t[i])),l=(n=void 0,(n=u.match(/\S+(@|%40)\S+\.\S+/))&&n.map(f)[0]),s=X(u);if(l){var d=Y(decodeURIComponent(l));return y({hashedEmail:[d.md5,d.sha1,d.sha256]},e)}if(s&&K(s))return y({hashedEmail:[s.toLowerCase()]},e)}}return e},function(e){var n=e.eventSource;return Object.keys(n).forEach((function(e){var t=e.toLowerCase();ee.indexOf(t)>-1&&c(n[e])&&n[e].length>10&&(n[e].length=10)})),{}}];var re=function(e){var n="";return e.forEach((function(e){var t=0===n.length?"?":"&";e&&e.length&&2===e.length&&e[0]&&e[1]&&(n="".concat(n).concat(t).concat(e[0],"=").concat(e[1]))})),n};function oe(e){return-1===e.indexOf("%")?e:decodeURIComponent(e)}function ie(e){return function(e){return"false"!==e&&("true"===e||e)}(function(e){return"null"===e||"undefined"===e?null:e}(function(e){return isNaN(+e)?e:+e}(e)))}var ae=["setemail","setemailhash","sethashedemail"],ce={appId:function(e){return m("aid",e)},eventSource:function(e){return g("se",e,(function(e){return U(JSON.stringify(e,A))}))},liveConnectId:function(e){return m("duid",e)},legacyId:function(e){return m("lduid",e&&e.duid)},trackerName:function(e){return m("tna",e||"unknown")},pageUrl:function(e){return m("pu",e)},errorDetails:function(e){return g("ae",e,(function(e){return U(JSON.stringify(e))}))},retrievedIdentifiers:function(e){var n=[];return e.forEach((function(e){return n.push(m("ext_".concat(e.name),e.value))})),n},hashesFromIdentifiers:function(e){var n=[];return e.forEach((function(e){return n.push(m("scre","".concat(e.md5,",").concat(e.sha1,",").concat(e.sha256)))})),n},decisionIds:function(e){return m("li_did",e.join(","))},hashedEmail:function(e){return m("e",e.join(","))},usPrivacyString:function(e){return m("us_privacy",e)},wrapperName:function(e){return m("wpn",e)},gdprApplies:function(e){return g("gdpr",e,(function(e){return encodeURIComponent(e?1:0)}))},gdprConsent:function(e){return m("gdpr_consent",e)},referrer:function(e){return m("refr",e)}};function ue(e){var n={};function t(){var e=[];return Object.keys(n).forEach((function(t){var r=n[t];if(ce[t]){var o=ce[t](r);o&&o.length&&(o[0]instanceof Array?e=e.concat(o):e.push(o))}})),e}return e&&(n=function(e){try{return function(e){return d(e.eventSource)?te.reduce((function(e,n){return y(e,n(e))}),e):e}(JSON.parse(JSON.stringify(e)))}catch(e){return E("StateCombineWith","Error while extracting event data",e),n}}(e)),{data:n,combineWith:function(n){return new ue(y(e,n))},asQueryString:function(){return re(t())},asTuples:t,sendsPixel:function(){var e=d(n.eventSource)?n.eventSource:{},t=Object.keys(e).filter((function(e){return"eventname"===e.toLowerCase()||"event"===e.toLowerCase()})),r=t&&t.length>=1&&t[0],o=r&&f(n.eventSource[r]);return!o||-1===ae.indexOf(o.toLowerCase())}}}function fe(){return document.domain||document.location&&document.location.host||window&&window.location&&window.location.host||"localhost"}function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return de((function(){return e.top.document.referrer}))}function se(){for(var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=de((function(){return n.location.ancestorOrigins}))||{},r=[],o=n;o!==top;)r.push(o),o=o.parent;r.push(o);for(var i=function(n){e=de((function(){return r[n].location.href})),0!==n&&(e||(e=de((function(){return r[n-1].document.referrer}))),e||(e=t[n-1]))},a=r.length-1;a>=0&&!e;a--)i(a);return e}function de(e){try{return e()}catch(e){return}}var he=null;function pe(e){return he||(he={pageUrl:se(),referrer:le()}),he}var ve=null,ge=null,me={errorDetails:{message:"Unknown message",name:"Unknown name"}};function we(e){try{var n=1*e;return isNaN(n)?void 0:n}catch(e){}}function ye(e){try{return e&&e.length&&e.length>120?"".concat(e.substr(0,120),"..."):e}catch(e){}}function be(e){ge&&ge.sendPixel(new ue(function(e){return e?{errorDetails:{message:ye(e.message),name:ye(e.name),stackTrace:ye(e.stack),lineNumber:we(e.lineNumber),lineColumn:we(e.lineColumn),fileName:ye(e.fileName)}}:me}(e)).combineWith(ve||{}).combineWith(pe()))}var Se="0123456789ABCDEFGHJKMNPQRSTVWXYZ",Ie=Se.length,Ce=Math.pow(2,48)-1,_e=function(){var e="undefined"!=typeof window?window:null,n=e&&(e.crypto||e.msCrypto);if(n)return function(){var e=new Uint8Array(1);return n.getRandomValues(e),e[0]/255};return function(){return Math.random()}}();function xe(e,n){if(e>Ce)throw(t=new Error("cannot encode time greater than "+Ce)).source="Ulid",t;for(var t,r,o="";n>0;n--)o=Se.charAt(r=e%Ie)+o,e=(e-r)/Ie;return o}function Ee(){var e=Math.floor(_e()*Ie);return e===Ie&&(e=Ie-1),Se.charAt(e)}function Oe(){return xe(Date.now(),10)+function(e){for(var n="";e>0;e--)n=Ee()+n;return n}(16)}var je="ls",Re="none",ke="_li_dcdm_c";function Le(e,n){try{var t=e.expirationDays||730,r=function(){var e=n.getCookie(ke);if(e)return e;for(var t=fe(),r=t.split("."),o=r.length;o>0;o--){var i=".".concat(r.slice(o-1,r.length).join("."));if(n.setCookie(ke,i,void 0,"Lax",i),n.getCookie(ke))return i}return".".concat(t)}(),o={expires:t,domain:r};return{domain:r,liveConnectId:function(e,t,r,o){return s(o,je)?function(e,t,r){var o=null;try{if(n.localStorageIsEnabled()){var i="".concat(e,"_exp"),a=n.getDataFromLocalStorage(i),c=v(r.expires,864e5);a&&parseInt(a)<=(new Date).getTime()&&n.removeDataFromLocalStorage(e),n.getDataFromLocalStorage(e)||n.setDataInLocalStorage(e,t),n.setDataInLocalStorage(i,"".concat(c)),o=n.getDataFromLocalStorage(e)}}catch(e){E("LSGetOrAdd","Error manipulating LS",e)}return o}(e,t,r):s(o,Re)?null:function(e,t,r){var o=null;try{var i=n.getCookie(e);i?n.setCookie(e,i,p(r.expires),"Lax",r.domain):n.setCookie(e,t,p(r.expires),"Lax",r.domain),o=n.getCookie(e)}catch(e){E("CookieGetOrAdd","Failed manipulating cookie jar",e)}return o}(e,t,r)}("_lc2_fpi","".concat(Z(r),"--").concat(Oe()).toLocaleLowerCase(),o,e.storageStrategy)}}catch(e){return E("IdentifiersResolve","Error while managing identifiers",e),{}}}var De=p(30),Ue="lidids.",Ne=function(e,n,t){return t.indexOf(e)===n},Fe=function(e){return function(e){return e&&i.test(f(e))}(e)},Te=function(e){return e&&f(e).length>0};function Ae(e,n){var t,r,o,i,a,u={};try{var l=e.pageUrl&&(t=e.pageUrl,a={},t&&-1!==(r=t.indexOf("?"))&&(o=t.slice(r+1))&&(-1===(i=o.indexOf("#"))||(o=o.slice(0,i)))?(o.split("&").forEach((function(e){if(e){if("[]"===(e=((e=e.split("="))&&2===e.length?e:[e[0],"true"]).map(oe))[0].slice(-2)&&(a[e[0]=e[0].slice(0,-2)]=a[e[0]]||[]),!a[e[0]])return a[e[0]]=ie(e[1]);c(a[e[0]])?a[e[0]].push(ie(e[1])):a[e[0]]=[a[e[0]],ie(e[1])]}})),a):a)||{},s=[].concat(l.li_did||[]),d=n.findSimilarCookies(Ue);s.map(f).filter(Te).filter(Fe).filter(Ne).forEach((function(t){return r=t,o=e.domain,void(r&&n.setCookie("".concat(Ue).concat(r),r,De,"Lax",o));var r,o})),u={decisionIds:s.concat(d).map(f).filter(Te).filter(Fe).filter(Ne)}}catch(e){E("DecisionsResolve","Error while managing decision ids",e)}return u}function Pe(e,n){e&&n.setDataInLocalStorage(S,e)}function Ge(e,n){try{var t=((new Date).getTime()-156384e5)/1e3,r=e.legacyId||{},o=r.currVisitTs?parseInt(r.currVisitTs):0;return r.currVisitTs&&t>o&&e.liveConnectId&&Pe(e.liveConnectId,n),n.getDataFromLocalStorage(S)||Pe(r.duid||e.liveConnectId,n),{peopleVerifiedId:n.getDataFromLocalStorage(S)}}catch(e){return E("PeopleVerifiedResolve","Error while managing people verified",e),{}}}function Ve(e,n){try{return function(e,n){for(var t=[],r=[],o=0;o<e.length;o++){var i=e[o],c=n.getCookie(i)||n.getDataFromLocalStorage(i);if(c){var u=Qe(a(c));t.push({name:i,value:u.identifierWithoutRawEmails}),r=r.concat(u.hashesFromIdentifier)}}return{retrievedIdentifiers:t,hashesFromIdentifiers:Je(r)}}(function(e){var n=[];e.identifiersToResolve&&(c(e.identifiersToResolve)?n=e.identifiersToResolve:l(e.identifiersToResolve)&&(n=e.identifiersToResolve.split(",")));for(var t=0;t<n.length;t++)n[t]=n[t].trim();return n}(e),n)}catch(e){return x("IdentifiersEnricher",e),{}}}function Qe(e){if(T(e))return function(e){for(var n=function(e){for(var n=[],t=new RegExp(F.source,"g"),r=t.exec(e);r;)n.push(f(r[1])),r=t.exec(e);return n}(e),t=[],r=0;r<n.length;r++){var o=n[r],i=Y(o);e=e.replace(o,i.md5),t.push(i)}return{identifierWithoutRawEmails:e,hashesFromIdentifier:t}}(e);if(N(e)){var n=Y(e);return{identifierWithoutRawEmails:n.md5,hashesFromIdentifier:[n]}}return{identifierWithoutRawEmails:e,hashesFromIdentifier:[]}}function Je(e){for(var n={},t=[],r=0;r<e.length;r++)e[r].md5 in n||(t.push(e[r]),n[e[r].md5]=!0);return t}var Me="\\+?\\d+",We="(".concat("[a-z]-[a-z0-9]{4}","--").concat(o,")\\.(").concat(Me,")\\.(").concat(Me,")\\.(").concat(Me,")\\.(").concat(Me,")\\.(").concat(o,")"),He=new RegExp(We,"i");function ze(e,n){var t,r,o,i=(t=Z((r=fe(),o=r.length,"."===r.charAt(--o)&&(r=r.slice(0,o)),"*."===r.slice(0,2)&&(r=r.slice(1)),r+"/"),4),"".concat("_litra_id.").concat(t));try{if(e.appId&&n.localStorageIsEnabled())return{legacyId:function(e){if(e){var n=e.match(He);if(n&&7===n.length)return{duid:n[1],creationTs:n[2],sessionCount:n[3],currVisitTs:n[4],lastSessionVisitTs:n[5],sessionId:n[6]}}}(n.getDataFromLocalStorage(i))}}catch(e){E("LegacyDuidEnrich","Error while getting legacy duid",e)}return{}}var qe="__li_idex_cache";function Be(e,n,t,r){return function(o){var i={};if(o)try{i=JSON.parse(o)}catch(e){x("IdentityResolverParser",e)}try{e.setCookie(qe,JSON.stringify(i),v(t,36e5).toUTCString(),"Lax",n)}catch(e){x("IdentityResolverStorage",e)}r(i)}}function $e(e,n,t){try{var r=e||{},o=r.identityResolutionConfig||{},i=r.retrievedIdentifiers||[],a=o.expirationHours||1,c=o.source||"unknown",u=o.publisherId||"any",f=o.url||I,l=o.ajaxTimeout||5e3,s=[];s.push(m("duid",r.peopleVerifiedId)),s.push(m("us_privacy",r.usPrivacyString)),s.push(g("gdpr",r.gdprApplies,(function(e){return encodeURIComponent(e?1:0)}))),s.push(m("gdpr_consent",r.gdprConsent)),i.forEach((function(e){s.push(m(e.name,e.value))}));var d=function(e){var n=s.slice().concat(w(e)),t=re(n);return"".concat(f,"/").concat(c,"/").concat(u).concat(t)};return{resolve:function(e,o,i){try{!function(e,o,i){var c=n.getCookie(qe);c?e(JSON.parse(c)):t.ajaxGet(d(i),Be(n,r.domain,a,e),o,l)}(e,o,i)}catch(e){o(),x("IdentityResolve",e)}},getUrl:function(e){return d(e)}}}catch(e){return x("IdentityResolver",e),{resolve:function(n,t){t(),x("IdentityResolver.resolve",e)},getUrl:function(){x("IdentityResolver.getUrl",e)}}}}var Ke=function(){};var Xe=function(){};function Ye(e){var n=[];function t(t){return e&&e[t]&&h(e[t])?e[t]:(n.push(t),Xe)}var r={ajaxGet:t("ajaxGet"),pixelGet:t("pixelGet")};return n.length>0&&E("CallHandler","The call functions '".concat(JSON.stringify(n),"' are not provided")),r}var Ze={};function en(e,n,t){if(e&&d(e))if(e.config)E("StrayConfig","Received a config after LC has already been initialised",new Error(e));else{var r=t.combineWith({eventSource:e});Ze.hashedEmail=Ze.hashedEmail||r.data.hashedEmail;var o=y({eventSource:e},Ze);n.sendAjax(t.combineWith(o))}else E("EventNotAnObject","Received event was not an object",new Error(e))}function nn(e,n,t){try{e.forEach((function(e){var r=e;c(r)?r.forEach((function(e){return en(e,n,t)})):en(r,n,t)}))}catch(e){E("LCPush","Failed sending an event",e)}}function tn(e,n,t){try{!function(e,n){e||(e=5);try{window||n(new Error("Bus can only be attached to the window, which is not present")),window&&!window.__li__evt_bus&&(window.__li__evt_bus=new j(e)),window.__li__evt_bus}catch(e){n(e)}}();var r=Ye(t);!function(e,n){try{window&&window.__li__evt_bus&&h(window.__li__evt_bus.on)&&window.__li__evt_bus.on(b,be),ge=new O(e,n),ve=e||{}}catch(e){}}(e,r);var o=function(e,n){var t=[];function r(e){return n&&n[e]&&h(n[e])?n[e]:(t.push(e),Ke)}var o=function(n){return s(e,Re)?Ke:r(n)},i={localStorageIsEnabled:o("localStorageIsEnabled"),getCookie:r("getCookie"),setCookie:o("setCookie"),getDataFromLocalStorage:r("getDataFromLocalStorage"),removeDataFromLocalStorage:o("removeDataFromLocalStorage"),setDataInLocalStorage:o("setDataInLocalStorage"),findSimilarCookies:r("findSimilarCookies")};return t.length>0&&E("StorageHandler","The storage functions '".concat(JSON.stringify(t),"' are not provided")),i}(e.storageStrategy,n),i=function(e,n){return e.combineWith(n(e.data,o))},a=[Le,Ge,Ae],c=[pe,Ve,ze].reduce(i,new ue(e)),u=a.reduce(i,c),f=y(e,{peopleVerifiedId:u.data.peopleVerifiedId}),l=new O(e,r,(function(){return _("lips",f)}),(function(){return _("pre_lips","0")})),d=$e(u.data,o,r),p=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return nn(n,l,u)};return{push:p,fire:function(){return p({})},peopleVerifiedId:u.data.peopleVerifiedId,ready:!0,resolve:d.resolve,resolutionCallUrl:d.getUrl,config:e}}catch(e){E("LCConstruction","Failed to build LC",e)}}var rn=function(e,n,t){try{var r=window.liQ||[],o=d(e)&&e||{};if(window&&(window.liQ=function(e){try{if(window&&window.liQ&&window.liQ.ready){var n=window.liQ.config&&function(e,n){if(e.appId!==n.appId||e.wrapperName!==n.wrapperName||e.collectorUrl!==n.collectorUrl)return{appId:[e.appId,n.appId],wrapperName:[e.wrapperName,n.wrapperName],collectorUrl:[e.collectorUrl,n.collectorUrl]}}(window.liQ.config,e);if(n){var t=new Error;t.name="ConfigSent",t.message="Additional configuration received",E("LCDuplication",JSON.stringify(n),t)}return window.liQ}}catch(e){}}(o)||tn(o,n,t)||r),c(r))for(var i=0;i<r.length;i++)window.liQ.push(r[i])}catch(e){E("LCConstruction","Failed to build LC",e)}return window.liQ};function on(e,n,t){var r=d(e)&&e||{};return rn(r,n,t)}},474:function(e,n,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return"object"===r(e)?JSON.stringify(e):""+e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)}t.d(n,"a",(function(){return j}));var a=!!String.prototype.trim;function c(e){return a?(""+e).trim():(""+e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function u(e){return"string"==typeof e}function f(e){return!!e&&"object"===r(e)&&!i(e)}function l(e){return e&&"function"==typeof e}function s(e,n,t){return function(e){return null!=e&&c(e).length>0}(n)?[e,l(t)?t(n):n]:[]}function d(e,n){return s(e,n,(function(e){return encodeURIComponent(e)}))}function h(e,n){var t={},r=function(e){return f(e)?e:{}},o=r(e),i=r(n);return Object.keys(o).forEach((function(e){t[e]=o[e]})),Object.keys(i).forEach((function(e){t[e]=i[e]})),t}var p="li_errors";function v(e,n){window&&window.__li__evt_bus&&window.__li__evt_bus.emit(e,n)}function g(e,n){m(e,n.message,n)}function m(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new Error(n||t.message);r.stack=t.stack,r.name=e||"unknown error",r.lineNumber=t.lineNumber,r.columnNumber=t.columnNumber,v(p,r)}function w(e,n,t){try{var r=e||{},o=r.identityResolutionConfig||{},i=r.retrievedIdentifiers||[],a=o.source||"unknown",c=o.publisherId||"any",u=o.url||"https://idx.liadm.com/idex",l=o.ajaxTimeout||5e3,h=[];h.push(d("duid",r.peopleVerifiedId)),h.push(d("us_privacy",r.usPrivacyString)),h.push(s("gdpr",r.gdprApplies,(function(e){return encodeURIComponent(e?1:0)}))),h.push(d("gdpr_consent",r.gdprConsent)),i.forEach((function(e){h.push(d(e.name,e.value))}));var p=function(e){var n=function(e){var n="";return e.forEach((function(e){var t=0===n.length?"?":"&";e&&e.length&&2===e.length&&e[0]&&e[1]&&(n="".concat(n).concat(t).concat(e[0],"=").concat(e[1]))})),n}(h.slice().concat(function(e){if(e&&f(e)){var n=[];return Object.keys(e).forEach((function(t){var r=e[t];r&&!f(r)&&r.length&&n.push([encodeURIComponent(t),encodeURIComponent(r)])})),n}return[]}(e)));return"".concat(u,"/").concat(a,"/").concat(c).concat(n)},v=function(e,n,r){t.ajaxGet(p(r),function(e,n){return function(e){var t={};if(e)try{t=JSON.parse(e)}catch(e){g("IdentityResolverParser",e)}n(t)}}(0,e),n,l)};return{resolve:function(e,n,t){try{v(e,n,t)}catch(e){n(),g("IdentityResolve",e)}},getUrl:function(e){return p(e)}}}catch(e){return g("IdentityResolver",e),{resolve:function(n,t){t(),g("IdentityResolver.resolve",e)},getUrl:function(){g("IdentityResolver.getUrl",e)}}}}function y(e){return/\S+(@|%40)\S+\.\S+/.test(e)}var b=/"([^"]+(@|%40)[^"]+[.][a-z]*(\s+)?)(\\"|")/;function S(e){return b.test(e)}function I(e,n){try{return function(e,n){e.identifiersToResolve=e.identifiersToResolve||[];for(var t=i(e.identifiersToResolve)?e.identifiersToResolve:o(e.identifiersToResolve).split(","),r=[],a=0;a<t.length;a++){var u=c(t[a]),f=n.getCookie(u)||n.getDataFromLocalStorage(u);!f||S(o(f))||y(o(f))||r.push({name:u,value:o(f)})}return{retrievedIdentifiers:r}}(e,n)}catch(e){return g("IdentifiersEnrich",e),{}}}var C="none",_=function(){};function x(e,n){var t=[];function r(e){return n&&n[e]&&l(n[e])?n[e]:(t.push(e),_)}var o,i,a,f={localStorageIsEnabled:(o="localStorageIsEnabled",a=C,u(i=e)&&u(a)&&c(i.toLowerCase())===c(a.toLowerCase())?_:r(o)),getCookie:r("getCookie"),getDataFromLocalStorage:r("getDataFromLocalStorage")};return t.length>0&&m("StorageHandler","The storage functions '".concat(JSON.stringify(t),"' are not provided")),f}var E=function(){};function O(e,n,t){try{var r=function(e){var n=[];function t(t){return e&&e[t]&&l(e[t])?e[t]:(n.push(t),E)}var r={ajaxGet:t("ajaxGet"),pixelGet:t("pixelGet")};return n.length>0&&m("CallHandler","The call functions '".concat(JSON.stringify(n),"' are not provided")),r}(t),o=x(e.storageStrategy,n),i=h(e,function(e,n){try{return{peopleVerifiedId:n.getDataFromLocalStorage("_li_duid")}}catch(e){return m("PeopleVerifiedEnrich",e.message,e),{}}}(0,o)),a=w(h(i,I(i,o)),0,r);return{push:function(e){return window.liQ.push(e)},fire:function(){return window.liQ.push({})},peopleVerifiedId:i.peopleVerifiedId,ready:!0,resolve:a.resolve,resolutionCallUrl:a.getUrl,config:e}}catch(e){}}function j(e,n,t){try{return window&&(window.liQ=window.liQ||[]),O(f(e)&&e||{},n,t)}catch(e){}return{}}}},[471]);