pbjsChunk([178],{591:function(e,t,r){e.exports=r(592)},592:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"storage",(function(){return m})),t.initSegments=l,t.setBidderRtb=v,t.isAcEnabled=O,t.isPermutiveOnPage=y,t.getSegments=S,r.d(t,"permutiveSubmodule",(function(){return w}));var n=r(14),a=r(8),i=r(7),c=r(0),u=r(3),o=r(12),s=r.n(o);function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f="permutive",m=Object(i.b)(null,f);function l(e,t,r){var n=y(),a=b(r),i=S(a.params.maxSegs);g(e,a,i),a.waitForIt&&n?window.permutive.ready((function(){g(e,a,i),t()}),"realtime"):t()}function b(e){return Object(c.mergeDeep)({waitForIt:!1,params:{maxSegs:500,acBidders:[],overwrites:{}}},e)}function v(e,t){var r=u.b.getBidderConfig(),n=b(t),a=Object(c.deepAccess)(n,"params.acBidders"),i=S(Object(c.deepAccess)(n,"params.maxSegs"));a.forEach((function(e){var t=function(e,t){var r=t.ac.map((function(e){return{id:e}})),n="permutive.com",a=Object(c.mergeDeep)({},e),i=(Object(c.deepAccess)(a,"ortb2.user.data")||[]).filter((function(e){return e.name!==n})).concat({name:n,segment:r});return Object(c.deepSetValue)(a,"ortb2.user.data",i),a}(r[e]||{},i);u.b.setBidderConfig({bidders:[e],config:t})}))}function g(e,t,r){var a=e&&e.adUnits||Object(n.a)().adUnits,i={deepSetValue:c.deepSetValue,deepAccess:c.deepAccess,isFn:c.isFn,mergeDeep:c.mergeDeep},u={appnexusAst:"appnexus"};a&&a.forEach((function(e){e.bids.forEach((function(e){var n=e.bidder;void 0!==u[n]&&(n=u[n]);var a=O(t,n),o=function(e,t){var r=Object(c.deepAccess)(e,"params.overwrites.".concat(t));return r&&Object(c.isFn)(r)?r:null}(t,n),s=function(e){return{appnexus:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(c.deepSetValue)(e,"params.keywords.p_standard",t.ac),t.appnexus&&t.appnexus.length&&Object(c.deepSetValue)(e,"params.keywords.permutive",t.appnexus),e},rubicon:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(c.deepSetValue)(e,"params.visitor.p_standard",t.ac),t.rubicon&&t.rubicon.length&&Object(c.deepSetValue)(e,"params.visitor.permutive",t.rubicon),e},ozone:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(c.deepSetValue)(e,"params.customData.0.targeting.p_standard",t.ac),e}}[e]}(n);o?o(e,r,a,i,s):s&&s(e,r,a)}))}))}function j(e){try{e()}catch(e){Object(c.logError)(e)}}function O(e,t){var r=Object(c.deepAccess)(e,"params.acBidders")||[];return s()(r,t)}function y(){return void 0!==window.permutive&&"function"==typeof window.permutive.ready}function S(e){var t=h("_psegs").map(Number).filter((function(e){return e>=1e6})).map(String),r=h("_ppam"),n=h("_pcrprs"),a={ac:[].concat(p(n),p(r),p(t)),rubicon:h("_prubicons"),appnexus:h("_papns"),gam:h("_pdfps")};for(var i in a)a[i]=a[i].slice(0,e);return a}function h(e){try{return JSON.parse(m.getDataFromLocalStorage(e)||"[]")}catch(e){return[]}}var w={name:f,getBidRequestData:function(e,t,r){j((function(){l(e,t,r)}))},onAuctionInitEvent:function(e,t){j((function(){v(0,t)}))},init:function(e,t){return!0}};Object(a.e)("realTimeData",w),window.pbjs.installedModules.push("permutiveRtdProvider")}},[591]);