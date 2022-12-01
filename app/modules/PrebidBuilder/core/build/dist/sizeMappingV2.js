pbjsChunk([142],{704:function(e,i,t){e.exports=t(705)},705:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),t.d(i,"internal",(function(){return l})),t.d(i,"sizeMappingInternalStore",(function(){return u})),i.isUsingNewSizeMapping=f,i.checkAdUnitSetupHook=p,i.checkBidderSizeConfigFormat=b,i.isLabelActivated=v,i.getFilteredMediaTypes=g,i.isSizeConfigActivated=y,i.getActiveSizeBucket=z,i.getRelevantMediaTypesForBidder=h,i.getAdUnitDetail=m,i.getBids=A;var n=t(0),a=t(33),r=t(12),o=t.n(r),d=t(8),c=t(37);function s(){return(s=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={checkBidderSizeConfigFormat:b,getActiveSizeBucket:z,getFilteredMediaTypes:g,getAdUnitDetail:m,getRelevantMediaTypesForBidder:h,isLabelActivated:v},u=function(){var e={};return{initializeStore:function(i,t){e[i]={usingSizeMappingV2:t,adUnits:[]}},getAuctionDetail:function(i){return e[i]},setAuctionDetail:function(i,t){e[i].adUnits.push(t)}}}();function f(e){var i=!1;return e.forEach((function(e){e.mediaTypes&&(Object.keys(e.mediaTypes).forEach((function(t){e.mediaTypes[t].sizeConfig&&!1===i&&(i=!0)})),e.bids&&Object(n.isArray)(e.bids)&&e.bids.forEach((function(e){e.sizeConfig&&!1===i&&(i=!0)})))})),i}function p(e){var i=function(e,i,t){var a=!0,r={banner:"sizes",video:"playerSize",native:"active"}[e],d={banner:"Removing mediaTypes.banner from ad unit.",video:"Removing mediaTypes.video.sizeConfig from ad unit.",native:"Removing mediaTypes.native.sizeConfig from ad unit."};return Array.isArray(i)?(i.forEach((function(i,s){var l=Object.keys(i);if(!o()(l,"minViewPort")||!o()(l,r))return Object(n.logError)("Ad unit ".concat(t,": Missing required property 'minViewPort' or 'sizes' from 'mediaTypes.").concat(e,".sizeConfig[").concat(s,"]'. ").concat(d[e])),void(a=!1);if(!Object(n.isArrayOfNums)(i.minViewPort,2))return Object(n.logError)("Ad unit ".concat(t,": Invalid declaration of 'minViewPort' in 'mediaTypes.").concat(e,".sizeConfig[").concat(s,"]'. ").concat(d[e])),void(a=!1);if("banner"===e||"video"===e){var u=!1;if(Array.isArray(i[r])){var f=c.adUnitSetupChecks.validateSizes(i[r]);i[r].length>0&&0===f.length&&(a=!1,u=!0)}else a=!1,u=!0;if(u)return void Object(n.logError)("Ad unit ".concat(t,": Invalid declaration of '").concat(r,"' in 'mediaTypes.").concat(e,".sizeConfig[").concat(s,"]'. ").concat(d[e]))}"native"===e&&"boolean"!=typeof i[r]&&(Object(n.logError)("Ad unit ".concat(t,": Invalid declaration of 'active' in 'mediaTypes.").concat(e,".sizeConfig[").concat(s,"]'. ").concat(d[e])),a=!1)})),a):(Object(n.logError)("Ad unit ".concat(t,": Invalid declaration of 'sizeConfig' in 'mediaTypes.").concat(e,".sizeConfig'. ").concat(d[e])),a=!1)},t=[];return e.forEach((function(e){var a,r,o,d=e.bids,l=e.mediaTypes;if(d&&Object(n.isArray)(d))if(l&&0!==Object.keys(l).length){if(l.banner)if(l.banner.sizes)a=c.adUnitSetupChecks.validateBannerMediaType(e);else if(l.banner.sizeConfig){a=Object(n.deepClone)(e),i("banner",l.banner.sizeConfig,e.code)?a.mediaTypes.banner.sizeConfig.forEach((function(e){Array.isArray(e.sizes[0])||(e.sizes=[e.sizes])})):delete a.mediaTypes.banner}else Object(n.logError)("Ad unit ".concat(e.code,": 'mediaTypes.banner' does not contain either 'sizes' or 'sizeConfig' property. Removing 'mediaTypes.banner' from ad unit.")),delete(a=Object(n.deepClone)(e)).mediaTypes.banner;if(l.video)if(l.video.playerSize)r=a?c.adUnitSetupChecks.validateVideoMediaType(a):c.adUnitSetupChecks.validateVideoMediaType(e);else if(l.video.sizeConfig){r=a||Object(n.deepClone)(e),i("video",l.video.sizeConfig,e.code)?r.mediaTypes.video.sizeConfig.forEach((function(e){Array.isArray(e.playerSize[0])||(e.playerSize=[e.playerSize])})):delete r.mediaTypes.video.sizeConfig}if(l.native)if(o=r?c.adUnitSetupChecks.validateNativeMediaType(r):a?c.adUnitSetupChecks.validateNativeMediaType(a):c.adUnitSetupChecks.validateNativeMediaType(e),l.native.sizeConfig)i("native",l.native.sizeConfig,e.code)||delete o.mediaTypes.native.sizeConfig;var u=s({},a,r,o);t.push(u)}else Object(n.logError)("Detected adUnit.code '".concat(e.code,"' did not have a 'mediaTypes' object defined. This is a required field for the auction, so this adUnit has been removed."));else Object(n.logError)("Detected adUnit.code '".concat(e.code,"' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."))})),t}function b(e){var i=!0;return Array.isArray(e)&&e.length>0?e.forEach((function(e){var t=Object.keys(e);i=!!(o()(t,"minViewPort")&&o()(t,"relevantMediaTypes")&&Object(n.isArrayOfNums)(e.minViewPort,2)&&Array.isArray(e.relevantMediaTypes)&&e.relevantMediaTypes.length>0&&(e.relevantMediaTypes.length>1?e.relevantMediaTypes.every((function(e){return o()(["banner","video","native"],e)})):["none","banner","video","native"].indexOf(e.relevantMediaTypes[0])>-1))&&(i&&!0)})):i=!1,i}function v(e,i,t,a){var r,d=Object.keys(e).filter((function(e){return"labelAny"===e||"labelAll"===e}));return d&&d.length>1&&Object(n.logWarn)("Size Mapping V2:: ".concat(e.code?"Ad Unit: ".concat(e.code,"(").concat(a,") => Ad unit has multiple label operators. Using the first declared operator: ").concat(d[0]):"Ad Unit: ".concat(t,"(").concat(a,"), Bidder: ").concat(e.bidder," => Bidder has multiple label operators. Using the first declared operator: ").concat(d[0]))),(r=d[0])&&!i?(Object(n.logWarn)("Size Mapping V2:: ".concat(e.code?"Ad Unit: ".concat(e.code,"(").concat(a,") => Found '").concat(r,"' on ad unit, but 'labels' is not set. Did you pass 'labels' to pbjs.requestBids() ?"):"Ad Unit: ".concat(t,"(").concat(a,"), Bidder: ").concat(e.bidder," => Found '").concat(r,"' on bidder, but 'labels' is not set. Did you pass 'labels' to pbjs.requestBids() ?"))),!0):"labelAll"===r&&Array.isArray(e[r])?0===e.labelAll.length?(Object(n.logWarn)("Size Mapping V2:: Ad Unit: ".concat(e.code,"(").concat(a,") => Ad unit has declared property 'labelAll' with an empty array.")),!0):e.labelAll.every((function(e){return o()(i,e)})):"labelAny"!==r||!Array.isArray(e[r])||(0===e.labelAny.length?(Object(n.logWarn)("Size Mapping V2:: Ad Unit: ".concat(e.code,"(").concat(a,") => Ad unit has declared property 'labelAny' with an empty array.")),!0):e.labelAny.some((function(e){return o()(i,e)})))}function g(e){var i,t,a;a=Object(n.deepClone)(e);var r={banner:void 0,video:void 0,native:void 0};try{i=Object(n.getWindowTop)().innerWidth,t=Object(n.getWindowTop)().innerHeight}catch(e){Object(n.logWarn)("SizeMappingv2:: Unfriendly iframe blocks viewport size to be evaluated correctly"),i=window.innerWidth,t=window.innerHeight}var o=[i,t];Object.keys(e).map((function(i){var t=e[i].sizeConfig;if(t){r[i]=z(t,o);var n=t.filter((function(e){return e.minViewPort===r[i]&&y(i,e)}));a[i]=s({filteredSizeConfig:n},e[i]);var d={banner:"sizes",video:"playerSize"};a[i].filteredSizeConfig.length>0?"native"!==i&&(a[i][d[i]]=a[i].filteredSizeConfig[0][d[i]]):delete a[i]}}));var d=Object.keys(r).filter((function(e){return void 0!==r[e]})).reduce((function(e,i){return e[i]={activeSizeBucket:r[i],activeSizeDimensions:"banner"===i?a.banner?a.banner.sizes:[]:"video"===i?a.video?a.video.playerSize:[]:"NA"},e}),{});return{mediaTypes:e,sizeBucketToSizeMap:d,activeViewport:o,transformedMediaTypes:a}}function y(e,i){switch(e){case"banner":return i.sizes&&i.sizes.length>0&&i.sizes[0].length>0;case"video":return i.playerSize&&i.playerSize.length>0&&i.playerSize[0].length>0;case"native":return i.active;default:return!1}}function z(e,i){var t=[];return e.sort((function(e,i){return e.minViewPort[0]-i.minViewPort[0]})).forEach((function(e){i[0]>=e.minViewPort[0]&&(t=i[1]>=e.minViewPort[1]?e.minViewPort:[])})),t}function h(e,i){if(l.checkBidderSizeConfigFormat(e)){var t=l.getActiveSizeBucket(e,i);return e.filter((function(e){return e.minViewPort===t}))[0].relevantMediaTypes}return[]}function m(e,i,t){var a=u.getAuctionDetail(e).adUnits,r=a.filter((function(e){return e.adUnitCode===i.code&&Object(n.deepEqual)(e.mediaTypes,i.mediaTypes)}));if(r.length>0)return r[0].cacheHits++,r[0];var o=a.filter((function(e){return e.adUnitCode===i.code})),d=o.length>0&&"number"==typeof o[0].instance?o[o.length-1].instance+1:1,c=l.isLabelActivated(i,t,i.code,d),s=c&&l.getFilteredMediaTypes(i.mediaTypes),f=s.mediaTypes,p=void 0===f?i.mediaTypes:f,b=s.sizeBucketToSizeMap,v=s.activeViewport,g=s.transformedMediaTypes,y={adUnitCode:i.code,mediaTypes:p,sizeBucketToSizeMap:b,activeViewport:v,transformedMediaTypes:g,instance:d,isLabelActivated:c,cacheHits:0};return u.setAuctionDetail(e,y),c&&Object(n.logInfo)("Size Mapping V2:: Ad Unit: ".concat(i.code,"(").concat(d,") => Active size buckets after filtration: "),b),y}function A(e){var i=e.bidderCode,t=e.auctionId,r=e.bidderRequestId,o=e.adUnits,d=e.labels,c=e.src;return o.reduce((function(e,o){if(!o.mediaTypes||!Object(n.isValidMediaTypes)(o.mediaTypes))return Object(n.logWarn)("Size Mapping V2:: Ad Unit: ".concat(o.code," => Ad unit has declared invalid 'mediaTypes' or has not declared a 'mediaTypes' property")),e;var u=l.getAdUnitDetail(t,o,d),f=u.activeViewport,p=u.transformedMediaTypes,b=u.instance,v=u.isLabelActivated,g=u.cacheHits;if(v){if(0===Object.keys(p).length)return 0===g&&Object(n.logInfo)("Size Mapping V2:: Ad Unit: ".concat(o.code,"(").concat(b,") => Ad unit disabled since there are no active media types after sizeConfig filtration.")),e;e.push(o.bids.filter((function(e){return e.bidder===i})).reduce((function(e,u){if(l.isLabelActivated(u,d,o.code,b)){if((u=s({},u,Object(n.getDefinedParams)(o,["mediaType","renderer","nativeParams"]))).sizeConfig){var v=l.getRelevantMediaTypesForBidder(u.sizeConfig,f);if(0===v.length)Object(n.logError)("Size Mapping V2:: Ad Unit: ".concat(o.code,"(").concat(b,"), Bidder: ").concat(i," => 'sizeConfig' is not configured properly. This bidder won't be eligible for sizeConfig checks and will remail active.")),u=s({},u);else{if("none"===v[0])return Object(n.logInfo)("Size Mapping V2:: Ad Unit: ".concat(o.code,"(").concat(b,"), Bidder: ").concat(u.bidder," => 'relevantMediaTypes' is set to 'none' in sizeConfig for current viewport size. This bidder is disabled.")),e;var g=Object.keys(p).filter((function(e){return v.indexOf(e)>-1})).reduce((function(e,i){return e[i]=p[i],e}),{});if(!(Object.keys(g).length>0))return Object(n.logInfo)("Size Mapping V2:: Ad Unit: ".concat(o.code,"(").concat(b,"), Bidder: ").concat(u.bidder," => 'relevantMediaTypes' does not match with any of the active mediaTypes at the Ad Unit level. This bidder is disabled.")),e;u=s({},u,{mediaTypes:g})}}return e.push(s({},u,{adUnitCode:o.code,transactionId:o.transactionId,sizes:Object(n.deepAccess)(p,"banner.sizes")||Object(n.deepAccess)(p,"video.playerSize")||[],mediaTypes:u.mediaTypes||p,bidId:u.bid_id||Object(n.getUniqueIdentifierStr)(),bidderRequestId:r,auctionId:t,src:c,bidRequestsCount:a.a.getRequestsCounter(o.code),bidderRequestsCount:a.a.getBidderRequestsCounter(o.code,u.bidder),bidderWinsCount:a.a.getBidderWinsCounter(o.code,u.bidder)})),e}return Object(n.logInfo)("Size Mapping V2:: Ad Unit: ".concat(o.code,"(").concat(b,"), Bidder: ").concat(u.bidder," => Label check for this bidder has failed. This bidder is disabled.")),e}),[]))}else 0===g&&Object(n.logInfo)("Size Mapping V2:: Ad Unit: ".concat(o.code,"(").concat(b,") => Ad unit is disabled due to failing label check."));return e}),[]).reduce(n.flatten,[]).filter((function(e){return""!==e}))}Object(d.a)("checkAdUnitSetup").before((function(e,i){return f(i)?(i=p(i),e.bail(i)):e.call(this,i)})),Object(d.a)("getBids").before((function(e,i){if(void 0===u.getAuctionDetail(i.auctionId)){var t=f(i.adUnits);u.initializeStore(i.auctionId,t)}if(u.getAuctionDetail(i.auctionId).usingSizeMappingV2){var n=A(i);return e.bail(n)}return e.call(this,i)})),window.pbjs.installedModules.push("sizeMappingV2")}},[704]);