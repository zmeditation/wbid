pbjsChunk([381],{101:function(e,t,r){e.exports=r(102)},102:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"BIDDER_CODE",(function(){return s})),r.d(t,"ADPLUS_ENDPOINT",(function(){return u})),r.d(t,"DGID_CODE",(function(){return c})),r.d(t,"SESSION_CODE",(function(){return p})),r.d(t,"storage",(function(){return l})),t.isValidUuid=g,r.d(t,"spec",(function(){return m}));var n=r(1),i=r(0),o=r(2),a=r(7);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s="adplus",u="https://ssp.ad-plus.com.tr/server/headerBidding",c="adplus_dg_id",p="adplus_s_id",l=Object(a.b)(void 0,s),y=864e5;function g(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)}function f(){var e=l.cookiesAreEnabled()&&l.getCookie(p);return e&&g(e)||function(e){if(l.cookiesAreEnabled()){var t=new Date(Date.now()+y).toISOString();l.setCookie(p,e,t)}}(e=i.generateUUID()),e}var m={code:s,supportedMediaTypes:[o.b],isBidRequestValid:function(e){return e?e.params?e.params.adUnitId&&"string"==typeof e.params.adUnitId?e.params.inventoryId&&"string"==typeof e.params.inventoryId?!(!(e.mediaTypes&&e.mediaTypes[o.b]&&i.isArray(e.mediaTypes[o.b].sizes))||e.mediaTypes[o.b].sizes.length<=0||!i.isArrayOfNums(e.mediaTypes[o.b].sizes[0]))||(i.logError(s,"Wrong or missing size parameters."),!1):(i.logError(s,"bid.params.inventoryId is missing or has wrong type."),!1):(i.logError(s,"bid.params.adUnitId is missing or has wrong type."),!1):(i.logError(s,"bid.params is required."),!1):(i.logError(s,"bid, can not be empty",e),!1)},buildRequests:function(e,t){return e.map((function(e){return r=(t=e).params,n=r.inventoryId,a=r.adUnitId,s=r.extraData,p=r.yearOfBirth,l=r.gender,y=r.categories,g=r.latitude,m=r.longitude,b=r.sdkVersion,{method:"GET",url:u,data:i.cleanObj({bidId:t.bidId,inventoryId:n,adUnitId:a,adUnitWidth:t.mediaTypes[o.b].sizes[0][0],adUnitHeight:t.mediaTypes[o.b].sizes[0][1],extraData:s,yearOfBirth:p,gender:l,categories:y,latitude:g,longitude:m,sdkVersion:b||"1",session:f(),interstitial:0,token:"object"===d(window.top)&&window.top[c]?window.top[c]:void 0,secure:"https:"===window.location.protocol?1:0,screenWidth:screen.width,screenHeight:screen.height,language:window.navigator.language||"en-US",pageUrl:window.location.href,domain:window.location.hostname,referrer:window.location.referrer})};var t,r,n,a,s,p,l,y,g,m,b}))},interpretResponse:function(e,t){return null!=e.body&&i.isArray(e.body)&&0!==e.body.length?e.body.map((function(e){return{requestId:(t=e).requestID,cpm:t.cpm,currency:t.currency,width:t.width,height:t.height,creativeId:t.creativeID,dealId:t.dealID,netRevenue:t.netRevenue,ttl:t.ttl,ad:t.ad,mediaType:t.mediaType,meta:{advertiserDomains:t.advertiserDomains,primaryCatId:i.isArray(t.categoryIDs)&&t.categoryIDs.length>0?t.categoryIDs[0]:void 0,secondaryCatIds:t.categoryIDs}};var t})):[]},onTimeout:function(e){i.logError("Adplus adapter timed out for the auction.",e)},onBidWon:function(e){i.logInfo("Adplus adapter won the auction. Bid id: ".concat(e.bidId,", Ad Unit Id: ").concat(e.adUnitId,", Inventory Id: ").concat(e.inventoryId))}};Object(n.registerBidder)(m),window.pbjs.installedModules.push("adplusBidAdapter")}},[101]);