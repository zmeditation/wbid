pbjsChunk([385],{91:function(e,n,r){e.exports=r(92)},92:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"adnuntiusSubmodule",(function(){return u})),n.beforeInit=d;var t=r(8),o=r(0),s=r(4),a=r(3);function i(e,n){var r={ortb2:{user:{data:[{name:"adnuntius",segment:n}]}}};e.params&&e.params.bidders?a.b.mergeBidderConfig({bidders:e.params.bidders,config:r}):a.b.mergeConfig(r)}var u={name:"adnuntius",init:function(e,n){return!(!e.params||!e.params.providers)&&(Object(o.logInfo)(n),!0)},getBidRequestData:function(e,n,r,t){var a=t&&t.gdpr,u=!0;if(a&&t.gdpr.gdprApplies&&a.gdprApplies&&!a.vendorData.vendorConsents[855]&&(u=!1),u){var d=r.params.providers.map((function(e){return function(e){var n={siteId:"s",userId:"browserId",browserId:"browserId",folderId:"folderId"},r=["https://data.adnuntius.com/usr?tzo="+(new Date).getTimezoneOffset()];return Object.keys(e).forEach((function(t){r.push("".concat(n[t],"=").concat(e[t]))})),new Promise((function(e,n){Object(s.a)(r.join("&"),{success:function(n){var r=JSON.parse(n);e(r)},error:function(e){n(e)}})}))}(e)}));Promise.allSettled(d).then((function(e){var t=e.reduce((function(e,n){return"fulfilled"===n.status?e.concat(n.value.segments):[]}),[]).map((function(e){return{id:e}}));i(r,t),n()})).catch((function(e){return Object(o.logError)("ADN: err",e)}))}else n()},setGlobalConfig:i};function d(){Object(t.e)("realTimeData",u)}d(),window.pbjs.installedModules.push("adnuntiusRtdProvider")}},[91]);