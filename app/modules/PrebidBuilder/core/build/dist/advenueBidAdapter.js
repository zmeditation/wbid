pbjsChunk([342],{246:function(e,t,r){e.exports=r(247)},247:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return a});var s=r(1),i=r(2),c=r(0),a={code:"advenue",supportedMediaTypes:[i.b,i.d,i.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.placementId)&&-1!==a.supportedMediaTypes.indexOf(e.params.traffic))},buildRequests:function(e,t){var r;try{(r=window.top).location.toString()}catch(e){c.logMessage(e),r=window}for(var s=t?new URL(t.refererInfo.referer):r.location,i=[],a={secure:"https:"===s.protocol?1:0,deviceWidth:r.screen.width,deviceHeight:r.screen.height,host:s.host,page:s.pathname,placements:i},n=0;n<e.length;n++){var d=e[n],o=d.params;i.push({placementId:o.placementId,bidId:d.bidId,sizes:d.sizes,traffic:o.traffic})}return{method:"POST",url:"https://ssp.advenuemedia.co.uk/?c=o&m=multi",data:a}},interpretResponse:function(e){try{e=e.body}catch(e){c.logMessage(e)}return e}};Object(s.registerBidder)(a)}},[246]);