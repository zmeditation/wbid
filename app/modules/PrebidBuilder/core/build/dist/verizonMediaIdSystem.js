pbjsChunk([104],{803:function(e,n,t){e.exports=t(804)},804:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"verizonMediaIdSubmodule",(function(){return f}));var o=t(4),r=t(8),i=t(0),c=t(12),d=t.n(c);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p="verizonMediaId",a="__PIXEL_ID__",s="https://ups.analytics.yahoo.com/ups/".concat(a,"/fed");function l(e){return!!(e&&e.gdpr&&e.gdpr.gdprApplies)}var f={name:p,gvlid:25,decode:function(e){return"object"===u(e)&&(e.connectid||e.vmuid)?{connectid:e.connectid||e.vmuid}:void 0},getId:function(e,n){var t=e.params||{};if(t&&"string"==typeof t.he&&(void 0!==t.pixelId||void 0!==t.endpoint)){var o={"1p":d()([1,"1",!0],t["1p"])?"1":"0",he:t.he,gdpr:l(n)?"1":"0",gdpr_consent:l(n)?n.gdpr.consentString:"",us_privacy:n&&n.uspConsent?n.uspConsent:""};t.pixelId&&(o.pixelId=t.pixelId);return{callback:function(e){var n={success:function(n){var t;if(n)try{t=JSON.parse(n)}catch(e){Object(i.logError)(e)}e(t)},error:function(n){Object(i.logError)("".concat(p,": ID fetch encountered an error"),n),e()}},r=s.replace(a,t.pixelId),c="".concat(t.endpoint||r,"?").concat(Object(i.formatQS)(o));f.getAjaxFn()(c,n,null,{method:"GET",withCredentials:!0})}}}Object(i.logError)("The verizonMediaId submodule requires the 'he' and 'pixelId' parameters to be defined.")},getAjaxFn:function(){return o.a}};Object(r.e)("userId",f),window.pbjs.installedModules.push("verizonMediaIdSystem")}},[803]);