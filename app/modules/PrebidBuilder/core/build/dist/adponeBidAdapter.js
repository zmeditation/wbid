pbjsChunk([379],{107:function(t,e,r){t.exports=r(108)},108:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"spec",(function(){return u}));var n=r(2),i=r(1),a=r(0);function o(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u={code:"adpone",supportedMediaTypes:[n.b],isBidRequestValid:function(t){return!!t.params.placementId&&!!t.bidId&&"adpone"===t.bidder},buildRequests:function(t,e){return t.map((function(t){var r="https://rtb.adpone.com/bid-request?pid="+t.params.placementId,n={at:1,id:t.bidId,imp:t.sizes.map((function(e,r){return{id:t.bidId+"_"+r,banner:{w:e[0],h:e[1]}}}))};return e&&e.gdprConsent&&(r+="&gdpr_applies="+e.gdprConsent.gdprApplies,r+="&consentString="+e.gdprConsent.consentString),{method:"POST",url:r,data:n,options:{withCredentials:!0}}}))},interpretResponse:function(t,e){if(!t||!t.body)return[];var r=[];return t.body.seatbid.forEach((function(n){n.bid.length&&(r=[].concat(o(r),o(n.bid.filter((function(t){return t.price>0})).map((function(r){var n={id:r.id,requestId:e.data.id,cpm:r.price,ad:r.adm,width:r.w||0,height:r.h||0,currency:t.body.cur||"EUR",netRevenue:!0,ttl:300,creativeId:r.crid||0};return r.meta&&r.meta.adomain&&r.meta.adomain.length>0&&(n.meta={},n.meta.advertiserDomains=r.meta.adomain),n})))))})),r},onBidWon:function(t){var e=JSON.stringify(t),r=window.btoa(e);Object(a.triggerPixel)("https://rtb.adpone.com/prebid/analytics?q=".concat(r))}};Object(i.registerBidder)(u),window.pbjs.installedModules.push("adponeBidAdapter")}},[107]);