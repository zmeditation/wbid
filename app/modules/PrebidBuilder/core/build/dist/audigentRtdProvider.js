pbjsChunk([278],{277:function(t,e,a){t.exports=a(278)},278:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setData=g,a.d(e,"audigentSubmodule",function(){return l}),e.init=v;var n=a(3),u=a(20),o=a(0),r=a(13),s=a(4),i=a(9),c=Object(i.b)(),d="realTimeData";function g(t){c.setDataInLocalStorage("__adgntseg",JSON.stringify(t))}function f(r,i){var t=Object(u.a)().getUserIds(),e=null;t&&t.tdid?e=t.tdid:i({});var a="https://seg.ad.gt/api/v1/rtb_segments?tdid=".concat(e);Object(s.a)(a,{success:function(t,e){if(200===e.status)try{var n=JSON.parse(t);if(n&&n.audigent_segments){g(n);var a=r.reduce(function(t,e){var a=e&&e.code;return a&&(t[a]=n),t},{});i(a)}else i({})}catch(t){o.logError("unable to parse audigent segment data"),i({})}else 204===e.status&&i({})},error:function(){i({}),o.logError("unable to get audigent segment data")}})}var l={name:"audigent",getData:function(e,a){try{var t=c.getDataFromLocalStorage("__adgntseg");if(t){var n=JSON.parse(t);if(n.audigent_segments)return void a(e.reduce(function(t,e){var a=e&&e.code;return a&&(t[a]=n),t},{}))}f(e,a)}catch(t){f(e,a)}}};function v(t){var a=t.getConfig(d,function(t){var e=t.realTimeData;try{(e.dataProviders&&e.dataProviders.filter(function(t){return t.name&&"audigent"===t.name.toLowerCase()})[0].params).auctionDelay=e.auctionDelay}catch(t){0}a()})}Object(r.e)("realTimeData",l),v(n.b)}},[277]);