pbjsChunk([80],{859:function(e,r,i){e.exports=i(860)},860:function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),i.d(r,"spec",(function(){return u}));var t=i(0),a=i(1),s=i(2);function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var d="44253",p="https://prebid.rfihub.com/prebid",u={code:"zeta_global",supportedMediaTypes:[s.b],isBidRequestValid:function(e){return e&&e.bidId&&e.params?e.params.user&&e.params.user.buyeruid?e.params.device&&e.params.device.ip?e.params.device.geo&&e.params.device.geo.country?!!e.params.definerId||(Object(t.logWarn)("Invalid bid request - missing required definer data"),!1):(Object(t.logWarn)("Invalid bid request - missing required geo data"),!1):(Object(t.logWarn)("Invalid bid request - missing required device data"),!1):(Object(t.logWarn)("Invalid bid request - missing required user data"),!1):(Object(t.logWarn)("Invalid bid request - missing required bid data"),!1)},buildRequests:function(e,r){var i=e[0],t=i.params,a={id:i.bidId,secure:1,banner:c(i)},s={id:r.auctionId,imp:[a],site:t.site?t.site:{},app:t.app?t.app:{},device:t.device?t.device:{},user:t.user?t.user:{},at:t.at,tmax:t.tmax,wseat:t.wseat,bseat:t.bseat,allimps:t.allimps,cur:["USD"],wlang:t.wlang,bcat:t.bcat,badv:t.badv,bapp:t.bapp,source:t.source?t.source:{},regs:t.regs?t.regs:{},ext:t.ext?t.ext:{}};return s.device.ua=navigator.userAgent,s.device.ip=navigator.ip,s.site.page=r.refererInfo.referer,s.site.mobile=/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)?1:0,s.ext.definerId=t.definerId,t.test&&(s.test=t.test),i.gdprConsent&&(s.regs.ext=n(s.regs.ext,{gdpr:!0===i.gdprConsent.gdprApplies?1:0})),i.gdprConsent&&i.gdprConsent.gdprApplies&&(s.user.ext=n(s.user.ext,{consent:i.gdprConsent.consentString})),{method:"POST",url:t.definerId!==d?p.concat("/",t.definerId):p,data:JSON.stringify(s)}},interpretResponse:function(e,r){var i=[];if(0!==Object.keys(e.body).length){var t=e.body,a=t.seatbid[0].bid[0],s={requestId:a.impid,cpm:a.price,currency:t.cur,width:a.w,height:a.h,ad:a.adm,ttl:200,creativeId:a.crid,netRevenue:true};i.push(s)}return i},getUserSyncs:function(e,r,i,t,a){var s=[];return""!==i&&null!==i||(i=d),e.iframeEnabled&&s.push({type:"iframe",url:"https://p.rfihub.com/cm?in=1&pub=".concat(i)}),s}};function c(e){var r=e.sizes;return e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes&&(r=e.mediaTypes.banner.sizes),{w:r[0][0],h:r[0][1]}}Object(a.registerBidder)(u),window.pbjs.installedModules.push("zetaBidAdapter")}},[859]);