pbjsChunk([320],{302:function(e,a,t){e.exports=t(303)},303:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"spec",function(){return r});var n=t(1),l=t(2),g=t(0);var r={code:"bidlab",supportedMediaTypes:[l.b,l.d,l.c],noSync:!0,isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(parseInt(e.params.placementId)))},buildRequests:function(e,a){var t,n=0<arguments.length&&void 0!==e?e:[],r=1<arguments.length?a:void 0,i=window;try{t=new URL(r.refererInfo.referer),i=window.top}catch(e){t=i.location,g.logMessage(e)}var s=[],d={deviceWidth:i.screen.width,deviceHeight:i.screen.height,language:navigator&&navigator.language?navigator.language.split("-")[0]:"",secure:1,host:t.host,page:t.pathname,placements:s};-1!=d.language.indexOf("-")&&(d.language=d.language.split("-")[0]),r&&(r.uspConsent&&(d.ccpa=r.uspConsent),r.gdprConsent&&(d.gdpr=r.gdprConsent));for(var o=n.length,c=0;c<o;c++){var u=n[c],p=u.params.traffic||l.b;s.push({placementId:u.params.placementId,bidId:u.bidId,sizes:u.mediaTypes&&u.mediaTypes[p]&&u.mediaTypes[p].sizes?u.mediaTypes[p].sizes:[],traffic:p}),u.schain&&(s.schain=u.schain)}return{method:"POST",url:"https://service.bidlab.ai/?c=o&m=multi",data:d}},interpretResponse:function(e){for(var a=[],t=0;t<e.body.length;t++){var n=e.body[t];!function(e){if(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency)switch(e.mediaType){case l.b:return Boolean(e.width&&e.height&&e.ad);case l.d:return Boolean(e.vastUrl);case l.c:return Boolean(e.native&&e.native.title&&e.native.image&&e.native.impressionTrackers);default:return}}(n)||a.push(n)}return a},getUserSyncs:function(){return!1}};Object(n.registerBidder)(r)}},[302]);