pbjsChunk([193],{553:function(e,o,n){e.exports=n(554)},554:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),n.d(o,"novatiqIdSubmodule",(function(){return s}));var t=n(0),r=n(4),i=n(8),s={name:"novatiq",decode:function(e,o){return{novatiq:{snowflake:e}}},getId:function(e){var o,n=e.params||{},i=this.getSrcId(n);Object(t.logInfo)("NOVATIQ Sync request used sourceid param: "+i),o=window.location.hostname,Object(t.logInfo)("NOVATIQ partner hostname: "+o);var s=function e(o){return o?(o^16*Math.random()>>o/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11+1e3).replace(/[018]/g,e)}(),c="https://spadsync.com/sync?sptoken="+s+"&sspid="+i+"&ssphost="+o;return Object(r.a)(c,void 0,void 0,{method:"GET",withCredentials:!1}),Object(t.logInfo)("NOVATIQ snowflake: "+s),{id:s}},getSrcId:function(e){var o,n;return Object(t.logInfo)("NOVATIQ Configured sourceid param: "+e.sourceid),void 0===e.sourceid||null===e.sourceid||""===e.sourceid?(o="000",Object(t.logInfo)("NOVATIQ sourceid param set to value 000 due to undefined parameter or missing value in config section")):e.sourceid.length<3||e.sourceid.length>3?(o="001",Object(t.logInfo)("NOVATIQ sourceid param set to value 001 due to wrong size in config section 3 chars max e.g. 1ab")):0==(n=e.sourceid,parseInt(n,16).toString(16)===n)?(o="002",Object(t.logInfo)("NOVATIQ sourceid param set to value 002 due to wrong format in config section expecting hex value only")):o=e.sourceid,o}};Object(i.e)("userId",s),window.pbjs.installedModules.push("novatiqIdSystem")}},[553]);