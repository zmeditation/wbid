pbjsChunk([129],{770:function(e,r,t){e.exports=t(771)},771:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return s});var n=t(1),s={code:"segmento",isBidRequestValid:function(e){return Boolean(e&&e.params&&!isNaN(e.params.placementId))},buildRequests:function(e,r){for(var t={places:[],settings:{currency:"RUB",referrer:r.refererInfo&&r.refererInfo.referer}},n=0;n<e.length;n++){var s=e[n];t.places.push({id:s.bidId,placementId:s.params.placementId,sizes:s.sizes})}return{method:"POST",url:"https://prebid-bidder.rutarget.ru/bid",data:t}},interpretResponse:function(e){var r=e.body&&e.body.bids;if(!r)return[];for(var t=[],n=0;n<r.length;n++){var s=r[n];t.push({requestId:s.id,cpm:s.cpm,width:s.size.width,height:s.size.height,creativeId:s.creativeId,currency:"RUB",netRevenue:!0,ttl:0,adUrl:s.displayUrl})}return t},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://tag.rutarget.ru/tag?event=otherPage&check=true&response=syncframe&synconly=true"}]:e.pixelEnabled?[{type:"image",url:"https://tag.rutarget.ru/tag?event=otherPage&check=true&synconly=true"}]:[]}};Object(n.registerBidder)(s)}},[770]);