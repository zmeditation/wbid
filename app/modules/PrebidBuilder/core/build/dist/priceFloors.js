pbjsChunk([175],{602:function(e,t,r){e.exports=r(603)},603:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"allowedFields",(function(){return D})),r.d(t,"_floorDataForAuction",(function(){return I})),r.d(t,"fieldMatchingFunctions",(function(){return M})),t.getFirstMatchingFloor=B,t.getBiddersCpmAdjustment=z,t.calculateAdjustedFloor=W,t.getFloor=N,t.getFloorsDataForAuction=_,t.getFloorDataFromAdUnits=H,t.updateAdUnitsForAuction=J,t.pickRandomModel=L,t.createFloorsDataForAuction=Y,t.continueAuction=K,t.isFloorsDataValid=Z,t.parseFloorData=$,t.requestBidsHook=ee,t.handleFetchResponse=re,t.generateAndHandleFetch=ne,t.handleSetFloorsConfig=ce,t.addBidResponseHook=ae;var o=r(0),n=r(14),c=r(3),a=r(4),i=r(10),u=r.n(i),s=r(5),l=r.n(s),d=r(8),f=r(26),p=r(11),m=r.n(p),h=r(18),b=r(16),g=r(25),y=["modelGroups"];function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C,k="Price Floors",T=Object(a.b)(1e4),D=["gptSlot","adUnitCode","size","domain","mediaType"],R=!1,U=!1,w={},E=[],I={};function P(e,t){return Math.ceil((parseFloat(e)*Math.pow(10,t)).toFixed(1))/Math.pow(10,t)}var M={size:function(e,t){return Object(o.parseGPTSingleSizeArray)(t.size)||"*"},mediaType:function(e,t){return t.mediaType||"banner"},gptSlot:function(e,t){return function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).index,r=(void 0===t?b.a.index:t).getAdUnit({transactionId:e});return"gam"===Object(o.deepAccess)(r,"ortb2Imp.ext.data.adserver.name")&&r.ortb2Imp.ext.data.adserver.adslot}((e||t).transactionId)||Object(o.getGptSlotInfoForAdUnitCode)((e||t).adUnitCode).gptSlot},domain:function(e,t){return C||(r=Object(h.a)().referer,C=Object(o.parseUrl)(r,{noDecodeWholeURL:!0}).hostname);var r},adUnitCode:function(e,t){return(e||t).adUnitCode}};function x(e,t,r){return e.reduce((function(e,o){var n=M[o](t,r)||"*";return e.push("*"===n?["*"]:[n.toLowerCase(),"*"]),e}),[])}function B(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=x(Object(o.deepAccess)(e,"schema.fields")||[],t,r);if(!n.length)return{matchingFloor:e.default};var c=n.map((function(e){return e[0]})).join("-"),a=Object(o.deepAccess)(e,"matchingInputs.".concat(c));if(a)return A({},a);var i=V(n,Object(o.deepAccess)(e,"schema.delimiter")||"|"),u=m()(i,(function(t){return e.values.hasOwnProperty(t)})),s={floorMin:e.floorMin||0,floorRuleValue:e.values[u]||e.default,matchingData:i[0],matchingRule:u};return s.matchingFloor=Math.max(s.floorMin,s.floorRuleValue),Object(o.deepSetValue)(e,"matchingInputs.".concat(c),A({},s)),s}function V(e,t){return e.reduce((function(e,r){var o=[];return e.map((function(e){r.map((function(r){o.push(e+t+r)}))})),o})).sort((function(e,t){return e.split("*").length-t.split("*").length}))}function z(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=g.a.get(e,"bidCpmAdjustment");return o?parseFloat(o(t,A(A({},r),{},{cpm:t}))):parseFloat(t)}function W(e,t){var r=Math.pow(10,10);return e*r/(t*r)*(e*r)/r}var q={banner:function(e){return Object(o.deepAccess)(e,"mediaTypes.banner.sizes")||[]},video:function(e){return Object(o.deepAccess)(e,"mediaTypes.video.playerSize")||[]},native:function(e){return Object(o.deepAccess)(e,"mediaTypes.native.image.sizes")?[Object(o.deepAccess)(e,"mediaTypes.native.image.sizes")]:[]}};function G(e,t){var r=Object.keys(e.mediaTypes||{});return"*"===t.mediaType&&1===r.length&&(t.mediaType=r[0]),"*"===t.size&&-1!==r.indexOf(t.mediaType)&&q[t.mediaType]&&1===q[t.mediaType](e).length&&(t.size=q[t.mediaType](e)[0]),t}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currency:"USD",mediaType:"*",size:"*"},t=this,r=I[t.auctionId];if(!r||r.skipped)return{};e=G(t,e);var c=B(r.data,A({},t),{mediaType:e.mediaType,size:e.size}),a=e.currency||r.data.currency;if(c.matchingFloor&&a!==r.data.currency)try{c.matchingFloor=Object(n.a)().convertCurrency(c.matchingFloor,r.data.currency,a)}catch(e){Object(o.logWarn)("".concat(k,": Unable to get currency conversion for getFloor for bidder ").concat(t.bidder,". You must have currency module enabled with defaultRates in your currency config")),a=r.data.currency}if(r.enforcement.bidAdjustment&&c.matchingFloor){var i=z(t.bidder,c.matchingFloor);c.matchingFloor=i?W(c.matchingFloor,i):c.matchingFloor}return c.matchingFloor?{floor:P(c.matchingFloor,4),currency:a}:{}}function _(e,t){var r=Object(o.deepClone)(e);return r.schema.delimiter=e.schema.delimiter||"|",r.values=function(e,t){var r=e.schema.fields,o=e.schema.delimiter,n=t&&-1===r.indexOf("adUnitCode")&&r.unshift("adUnitCode");return Object.keys(e.values).reduce((function(r,c){return r[(n?"".concat(t).concat(o).concat(c):c).toLowerCase()]=e.values[c],r}),{})}(r,t),r.currency=r.currency||"USD",r}function H(e){return e.reduce((function(e,t){if(Z(t.floors))if(e.values){var r=_(t.floors,t.code).values;v(e.values,r)}else(e=_(t.floors,t.code)).location="adUnit";return e}),{})}function J(e,t,r){e.forEach((function(e){e.bids.forEach((function(e){t.skipped?delete e.getFloor:e.getFloor=N,e.auctionId=r,e.floorData={skipped:t.skipped,skipRate:t.skipRate,floorMin:t.floorMin,modelVersion:Object(o.deepAccess)(t,"data.modelVersion"),modelWeight:Object(o.deepAccess)(t,"data.modelWeight"),modelTimestamp:Object(o.deepAccess)(t,"data.modelTimestamp"),location:Object(o.deepAccess)(t,"data.location","noData"),floorProvider:t.floorProvider,fetchStatus:w.fetchStatus}}))}))}function L(e,t){for(var r=Math.floor(Math.random()*t+1),o=0;o<e.length;o++)if((r-=e[o].modelWeight)<=0)return e[o]}function Y(e,t){var r=Object(o.deepClone)(w);if(2===Object(o.deepAccess)(r,"data.floorsSchemaVersion")){var n=r.data,c=n.modelGroups,a=j(n,y);r.data=v(a,L(c,a.modelWeightSum))}var i=0===Object.keys(Object(o.deepAccess)(r,"data.values")||{}).length;if(r.data=i?H(e):_(r.data),0===Object.keys(Object(o.deepAccess)(r,"data.values")||{}).length)r.skipped=!0;else{var u=Object(o.getParameterByName)("pbjs_skipRate")||r.skipRate,s=100*Math.random()<parseFloat(u);r.skipped=s}return r.hasOwnProperty("floorMin")&&(r.data.floorMin=r.floorMin),J(e,r,t),r}function K(e){e.hasExited||(E=E.filter((function(t){return t.timer!==e.timer})),e.reqBidsConfigObj.auctionId=e.reqBidsConfigObj.auctionId||Object(o.generateUUID)(),I[e.reqBidsConfigObj.auctionId]=Y(e.reqBidsConfigObj.adUnits||Object(n.a)().adUnits,e.reqBidsConfigObj.auctionId),e.nextFn.apply(e.context,[e.reqBidsConfigObj]),e.hasExited=!0)}function Q(e){return t=Object(o.deepAccess)(e,"schema.fields"),!!(Array.isArray(t)&&t.length>0&&t.every((function(e){return-1!==D.indexOf(e)}))||(Object(o.logError)("".concat(k,": Fields recieved do not match allowed fields")),0))&&(r=e,n=e.schema.fields.length,c=e.schema.delimiter||"|","object"===O(r.values)&&(r.values=Object.keys(r.values).reduce((function(e,t){return function(e,t,r,o){return"string"==typeof e&&e.split(o).length===r&&"number"==typeof t}(t,r.values[t],n,c)&&(e[t]=r.values[t]),e}),{}),Object.keys(r.values).length>0));var t,r,n,c}var X={1:function(e){return Q(e)},2:function(e){return!(!Array.isArray(e.modelGroups)||0===e.modelGroups.length)&&(e.modelWeightSum=0,e.modelGroups.every((function(t){return!("number"!=typeof t.modelWeight||!Q(t))&&(e.modelWeightSum+=t.modelWeight,!0)})))}};function Z(e){return"object"===O(e)&&(e.floorsSchemaVersion=e.floorsSchemaVersion||1,"function"!=typeof X[e.floorsSchemaVersion]?(Object(o.logError)("".concat(k,": Unknown floorsSchemaVersion: "),e.floorsSchemaVersion),!1):X[e.floorsSchemaVersion](e))}function $(e,t){if(e&&"object"===O(e)&&Z(e))return Object(o.logInfo)("".concat(k,": A ").concat(t," set the auction floor data set to "),e),A(A({},e),{},{location:t});Object(o.logError)("".concat(k,": The floors data did not contain correct values"),e)}function ee(e,t){var r={reqBidsConfigObj:t,context:this,nextFn:e,haveExited:!1,timer:null};w.auctionDelay>0&&R?(r.timer=setTimeout((function(){Object(o.logWarn)("".concat(k,": Fetch attempt did not return in time for auction")),w.fetchStatus="timeout",K(r)}),w.auctionDelay),E.push(r)):K(r)}function te(){E.forEach((function(e){clearTimeout(e.timer),K(e)})),E=[]}function re(e){var t;R=!1,w.fetchStatus="success";try{t=JSON.parse(e)}catch(r){t=e}var r=$(t,"fetch");r&&(w.data=r,w.skipRate=Object(o.isNumber)(r.skipRate)?r.skipRate:w.skipRate,w.floorProvider=r.floorProvider||w.floorProvider),te()}function oe(e){R=!1,w.fetchStatus="error",Object(o.logError)("".concat(k,": Fetch errored with: "),e),te()}function ne(e){e.url&&!R?"GET"!==(e.method||"GET")?Object(o.logError)("".concat(k,": 'GET' is the only request method supported at this time!")):(T(e.url,{success:re,error:oe},null,{method:"GET"}),R=!0):R&&Object(o.logWarn)("".concat(k,": A fetch is already occuring. Skipping."))}function ce(e){(w=Object(o.pick)(e,["floorMin","enabled",function(e){return!1!==e},"auctionDelay",function(e){return e||0},"floorProvider",function(t){return Object(o.deepAccess)(e,"data.floorProvider",t)},"endpoint",function(e){return e||{}},"skipRate",function(){return isNaN(Object(o.deepAccess)(e,"data.skipRate"))?e.skipRate||0:e.data.skipRate},"enforcement",function(e){return Object(o.pick)(e||{},["enforceJS",function(e){return!1!==e},"enforcePBS",function(e){return!0===e},"floorDeals",function(e){return!0===e},"bidAdjustment",function(e){return!1!==e}])},"additionalSchemaFields",function(e){return"object"===O(e)&&Object.keys(e).length>0?(t=e,void Object.keys(t).forEach((function(e){-1===D.indexOf(e)&&"function"==typeof t[e]&&(D.push(e),M[e]=t[e])}))):void 0;var t},"data",function(e){return e&&$(e,"setConfig")||w.data}])).enabled?(ne(w.endpoint),U||(u.a.on(l.a.EVENTS.AUCTION_END,(function(e){setTimeout((function(){return delete I[e.auctionId]}),3e3)})),Object(n.a)().requestBids.before(ee,50),Object(d.a)("addBidResponse").before(ae,Object(o.debugTurnedOn)()?4:50),U=!0)):(Object(o.logInfo)("".concat(k,": Turning off module")),w={},I={},Object(d.a)("addBidResponse").getHooks({hook:ae}).remove(),Object(n.a)().requestBids.getHooks({hook:ee}).remove(),U=!1)}function ae(e,t,r){var c=I[r.auctionId];if(!c||!r||c.skipped)return e.call(this,t,r);var a,i=B(c.data,null,A(A({},r),{},{size:[r.width,r.height]}));if(!i.matchingFloor)return Object(o.logWarn)("".concat(k,": unable to determine a matching price floor for bidResponse"),r),e.call(this,t,r);var u=c.data.currency.toUpperCase(),s=r.currency||"USD";if(u===s.toUpperCase())a=r.cpm;else if(r.originalCurrency&&u===r.originalCurrency.toUpperCase())a=r.originalCpm;else try{a=Object(n.a)().convertCurrency(r.cpm,s.toUpperCase(),u)}catch(n){return Object(o.logError)("".concat(k,": Unable do get currency conversion for bidResponse to Floor Currency. Do you have Currency module enabled? ").concat(r)),e.call(this,t,r)}if(function(e,t,r,o){r.floorData={floorValue:t.matchingFloor,floorRule:t.matchingRule,floorRuleValue:t.floorRuleValue,floorCurrency:e.data.currency,cpmAfterAdjustments:o,enforcements:A({},e.enforcement),matchedFields:{}},e.data.schema.fields.forEach((function(o,n){var c=t.matchingData.split(e.data.schema.delimiter)[n];r.floorData.matchedFields[o]=c}))}(c,i,r,a=z(r.bidderCode,a,r)),function(e,t,r){var n=!1!==Object(o.deepAccess)(e,"enforcement.enforceJS"),c=!0===Object(o.deepAccess)(e,"enforcement.floorDeals")||!r.dealId,a=r.floorData.cpmAfterAdjustments<t.matchingFloor;return n&&a&&c}(c,i,r)){var d=Object(f.a)(l.a.STATUS.NO_BID,r.getIdentifiers());return v(d,Object(o.pick)(r,["floorData","width","height","mediaType","currency","originalCpm","originalCurrency","getCpmInNewCurrency"])),d.status=l.a.BID_STATUS.BID_REJECTED,d.cpm=0,Object(o.logWarn)("".concat(k,": ").concat(d.bidderCode,"'s Bid Response for ").concat(t," was rejected due to floor not met"),r),e.call(this,t,d)}return e.call(this,t,r)}c.b.getConfig("floors",(function(e){return ce(e.floors)})),window.pbjs.installedModules.push("priceFloors")}},[602]);