pbjsChunk([364],{149:function(a,e,t){a.exports=t(150)},150:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"storage",(function(){return d})),t.d(e,"akamaiDAPIdSubmodule",(function(){return p}));var i=t(0),n=t(4),o=t(8),r=t(7),s=t(9),c="akamai_dap_token",d=Object(r.b)(),p={name:"akamaiDAPId",decode:function(a){return Object(i.logMessage)("akamaiDAPId [decode] value=",a),{dapId:a}},getId:function(a,e){var t=a&&a.params;if(t)if("string"==typeof t.apiHostname)if("string"==typeof t.domain)if("string"==typeof t.type){var o=e&&"boolean"==typeof e.gdprApplies&&e.gdprApplies?1:0,r=o?e.consentString:"",p=s.uspDataHandler.getConsentData();if(!o||r&&""!==r){var u,g="",l="";if("v1"===t.apiVersion)if(0==t.type.indexOf("dap-signature:")){var m=t.type.split(":")[1];g="https://".concat(t.apiHostname,"/data-activation/v1/domain/").concat(t.domain,"/signature?v=").concat(m,"&gdpr=").concat(o,"&gdpr_consent=").concat(r,"&us_privacy=").concat(p),l="SigToken"}else g="https://".concat(t.apiHostname,"/data-activation/v1/identity/tokenize?gdpr=").concat(o,"&gdpr_consent=").concat(r,"&us_privacy=").concat(p),u={version:1,domain:t.domain,identity:t.identity,type:t.type},l="PubToken";else g="https://".concat(t.apiHostname,"/data-activation/x1/domain/").concat(t.domain,"/identity/tokenize?gdpr=").concat(o,"&gdpr_consent=").concat(r,"&us_privacy=").concat(p),u={version:t.apiVersion,identity:t.identity,type:t.type,attributes:t.attributes},l="x1Token";var f={success:function(a,e){var t=""===a?e.getResponseHeader("Akamai-DAP-Token"):a;d.setDataInLocalStorage(c,t)},error:function(a){Object(i.logError)("akamaiDAPId [getId:ajax.error] failed to retrieve "+l,a)}};Object(n.a)(g,f,JSON.stringify(u),{contentType:"application/json"});var v=d.getDataFromLocalStorage(c);return Object(i.logMessage)("akamaiDAPId [getId] returning",v),{id:v}}Object(i.logError)("User ID - akamaiDAPId submodule requires consent string to call API")}else Object(i.logError)("User ID - akamaiDAPId submodule requires a valid configParams.type");else Object(i.logError)("User ID - akamaiDAPId submodule requires a valid configParams.domain");else Object(i.logError)("User ID - akamaiDAPId submodule requires a valid configParams.apiHostname");else Object(i.logError)("User ID - akamaiDAPId submodule requires a valid configParams")}};Object(o.e)("userId",p),window.pbjs.installedModules.push("akamaiDAPIdSystem")}},[149]);