pbjsChunk([244],{427:function(e,t,n){e.exports=n(428)},428:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"FIRST_PARTY_KEY",(function(){return d})),n.d(t,"storage",(function(){return u})),t.readData=s,n.d(t,"intentIqIdSubmodule",(function(){return f}));var r=n(0),i=n(4),o=n(8),a=n(7),c="intentIqId",d="_iiq_fdata",u=Object(a.b)(void 0,c),p="INVALID_ID";function s(e){try{if(u.hasLocalStorage())return u.getDataFromLocalStorage(e);if(u.cookiesAreEnabled())return u.getCookie(e)}catch(e){Object(r.logError)(e)}}function x(e,t){try{if(Object(r.logInfo)("intentIqId: storing data: key="+e+" value="+t),t){u.hasLocalStorage()&&u.setDataInLocalStorage(e,t);var n=new Date(Date.now()+31536e6).toUTCString();u.cookiesAreEnabled()&&u.setCookie(e,t,n,"LAX")}}catch(e){Object(r.logError)(e)}}function l(e){try{return JSON.parse(e)}catch(e){return Object(r.logError)(e),null}}var f={name:c,decode:function(e){return e&&""!=e&&p!=e?{intentIqId:e}:void 0},getId:function(e){var t=e&&e.params||{};if(t&&"number"==typeof t.partner){var n,o=l(s(d));if(!o||!o.pcid){var a=(n=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==e?t:3&t|8).toString(16)})));o={pcid:a},x(d,JSON.stringify(o))}var c="https://api.intentiq.com/profiles_engine/ProfilesEngineServlet?at=39&mi=10&dpi=".concat(t.partner,"&pt=17&dpn=1");c+=t.pcid?"&pcid="+encodeURIComponent(t.pcid):"",c+=t.pai?"&pai="+encodeURIComponent(t.pai):"",c+=o.pcid?"&iiqidtype=2&iiqpcid="+encodeURIComponent(o.pcid):"",c+=o.pid?"&pid="+encodeURIComponent(o.pid):"";return{callback:function(e){var t={success:function(t){var n=l(t);n&&n.ls?("pid"in n&&(o.pid=n.pid,x(d,JSON.stringify(o))),""==n.data&&(n.data=p),e(n.data)):e()},error:function(t){Object(r.logError)("intentIqId: ID fetch encountered an error",t),e()}};Object(i.a)(c,t,void 0,{method:"GET",withCredentials:!0})}}}Object(r.logError)("User ID - intentIqId submodule requires a valid partner to be defined")}};Object(o.e)("userId",f),window.pbjs.installedModules.push("intentIqIdSystem")}},[427]);