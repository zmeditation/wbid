pbjsChunk([186],{621:function(e,t,i){e.exports=i(622)},622:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"spec",function(){return d});var s=i(0),r=i(1),a=i(2),n=i(7),u=Object(n.b)();function b(e){return parseInt((Math.random()+1)*Math.pow(10,e-1))+""}function c(){return/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2}var o,p=-1<(o=navigator.userAgent).indexOf("Android")||-1<o.indexOf("Adr")?"Android":o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?"iOS":"windows";var d={code:"newborntownWeb",supportedMediaTypes:[a.b,a.c],isBidRequestValid:function(e){return!!(e.params.publisher_id&&e.params.slot_id&&e.params.bidfloor)},buildRequests:function(e,n){var o,i,d=[];return 0===e.length?null:(null==u.getDataFromLocalStorage("sax_user_id")&&u.setDataInLocalStorage("sax_user_id",(i=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(i+16*Math.random())%16|0;return i=Math.floor(i/16),("x"==e?t:3&t|8).toString(16)}))),o=u.getDataFromLocalStorage("sax_user_id"),s._each(e,function(e){var t,i=e.params,r={id:b(12)+b(12),tmax:n.timeout,bidId:e.bidId,user:{id:o},imp:[{id:"1",bidfloor:i.bidfloor,bidfloorcur:"USD",banner:{w:0,h:0}}],site:{domain:window.location.host,id:i.slot_id,page:window.location.href,publisher:{id:i.publisher_id}},device:{ip:"",ua:navigator.userAgent,os:p,geo:{country:"",type:0,ipservice:1,region:"",city:""},language:(t=navigator.language?"language":"userLanguage",navigator[t].split("-")[0]),devicetype:c()},ext:{solomath:{slotid:i.slot_id}}},a=e.sizes;if(!a)return!1;a&&s.isArray(a[0])?(r.imp[0].banner.w=a[0][0],r.imp[0].banner.h=a[0][1]):a&&s.isNumber(a[0])&&(r.imp[0].banner.w=a[0],r.imp[0].banner.h=a[1]);d.push({method:"POST",url:"https://us-west.solortb.com/adx/api/rtb?from=4",data:r,bidderRequest:n,options:{withCredentials:!1}})}),d)},interpretResponse:function(r,a){var n=[];return r.body.seatbid&&0<r.body.seatbid.length&&r.body.seatbid[0].bid&&0<r.body.seatbid[0].bid.length&&r.body.seatbid[0].bid[0].adm&&s._each(r.body.seatbid[0].bid,function(e){var t=e.adm,i={requestId:a.data.bidId||0,cpm:e.price||0,width:e.w?e.w:0,height:e.h?e.h:0,ad:t,netRevenue:!0,currency:r.body.cur||"USD",ttl:600,creativeId:e.cid};n.push(i)}),n}};Object(r.registerBidder)(d)}},[621]);