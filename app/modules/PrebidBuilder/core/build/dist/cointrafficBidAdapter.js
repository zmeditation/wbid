pbjsChunk([323],{246:function(e,r,t){e.exports=t(247)},247:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return s}));var n=t(0),i=t(1),d=t(2),a=t(3),c="cointraffic",u=["EUR","USD","JPY","BGN","CZK","DKK","GBP","HUF","PLN","RON","SEK","CHF","ISK","NOK","HRK","RUB","TRY","AUD","BRL","CAD","CNY","HKD","IDR","ILS","INR","KRW","MXN","MYR","NZD","PHP","SGD","THB","ZAR"],s={code:c,supportedMediaTypes:[d.b],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,r){return e.map((function(e){var t=Object(n.parseSizesInput)(e.params.size||e.sizes),i=a.b.getConfig("currency.bidderCurrencyDefault.".concat(c))||a.b.getConfig("currency.adServerCurrency")||"EUR";if(-1!==u.indexOf(i))return{method:"POST",url:"https://appspb.cointraffic.io/pb/tmp",data:{placementId:e.params.placementId,currency:i,sizes:t,bidId:e.bidId,referer:r.refererInfo.referer}};Object(n.logError)("Currency is not supported - "+i)}))},interpretResponse:function(e,r){var t=[],i=e.body;if(Object(n.isEmpty)(i))return t;var d={requestId:i.requestId,cpm:i.cpm,currency:i.currency,netRevenue:i.netRevenue,width:i.width,height:i.height,creativeId:i.creativeId,ttl:i.ttl,ad:i.ad,meta:{advertiserDomains:i.adomain&&i.adomain.length?i.adomain:[],mediaType:i.mediaType}};return t.push(d),t}};Object(i.registerBidder)(s),window.pbjs.installedModules.push("cointrafficBidAdapter")}},[246]);