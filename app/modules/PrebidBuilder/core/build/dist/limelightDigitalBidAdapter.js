pbjsChunk([227],{469:function(e,t,n){e.exports=n(470)},470:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return u}));var r=n(0),i=n(1),a=n(2),s=n(4);function d(e){if(!(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency&&e.meta.advertiserDomains))return!1;switch(e.meta.mediaType){case a.b:return Boolean(e.width&&e.height&&e.ad);case a.d:return Boolean(e.vastXml||e.vastUrl)}return!1}var u={code:"limelightDigital",aliases:["pll"],supportedMediaTypes:[a.b,a.d],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&e.params.host&&e.params.adUnitType&&(e.params.adUnitId||0===e.params.adUnitId))},buildRequests:function(e,t){var n;try{(n=window.top).location.toString()}catch(e){Object(r.logMessage)(e),n=window}var i=Object(r.groupBy)(e.map((function(e){return function(e){var t;if(e.mediaTypes)switch(e.params.adUnitType){case a.b:e.mediaTypes.banner&&e.mediaTypes.banner.sizes&&(t=e.mediaTypes.banner.sizes);break;case a.d:e.mediaTypes.video&&e.mediaTypes.video.playerSize&&(t=[e.mediaTypes.video.playerSize])}return t=(t||[]).concat(e.sizes||[]),{host:e.params.host,adUnit:{id:e.params.adUnitId,bidId:e.bidId,transactionId:e.transactionId,sizes:t.map((function(e){return{width:e[0],height:e[1]}})),type:e.params.adUnitType.toUpperCase(),publisherId:e.params.publisherId,userIdAsEids:e.userIdAsEids}}}(e)})),"host");return Object.keys(i).map((function(e){return function(e,t,n){return{method:"POST",url:"https://".concat(t,"/hb"),data:{secure:"https:"===location.protocol,deviceWidth:e.screen.width,deviceHeight:e.screen.height,adUnits:n}}}(n,e,i[e].map((function(e){return e.adUnit})))}))},onBidWon:function(e){var t=e.pbMg;""!==e.nurl&&(e.nurl=e.nurl.replace(/\$\{AUCTION_PRICE\}/,t),Object(s.a)(e.nurl,null))},interpretResponse:function(e,t){for(var n=[],r=e.body,i=r.length,a=0;a<i;a++){var s=r[a];d(s)&&n.push(s)}return n},getUserSyncs:function(e,t,n,i){var a=t.map((function(e){return e.body})).reduce(r.flatten,[]).map((function(e){return Object(r.deepAccess)(e,"ext.sync")})).filter(Boolean);return[e.iframeEnabled?a.map((function(e){return e.iframe})).filter(Boolean).filter(r.uniques).map((function(e){return{type:"iframe",url:e}})):[],e.pixelEnabled?a.map((function(e){return e.pixel})).filter(Boolean).filter(r.uniques).map((function(e){return{type:"image",url:e}})):[]].reduce(r.flatten,[])}};Object(i.registerBidder)(u),window.pbjs.installedModules.push("limelightDigitalBidAdapter")}},[469]);