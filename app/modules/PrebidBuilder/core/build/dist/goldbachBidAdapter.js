pbjsChunk([269],{366:function(e,r,t){e.exports=t(367)},367:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return E}));var a=t(13),n=t(0),i=t(3),s=t(1),o=t(2),d=t(16),c=t(11),p=t.n(c),u=t(12),l=t.n(u),m=t(17);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function y(){return(y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var g,h="https://ib.adnxs.com/ut/v3/prebid",_="https://ib.adnxs-simple.com/ut/v3/prebid",k=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],O=["minduration","maxduration","skip","skipafter","playbackmethod","api"],j=["age","externalUid","segments","gender","dnt","language"],I=["geo","device_id"],A=["enabled","dongle","member_id","debug_timeout"],w={"0x0":2.5,"300x600":5,"800x250":6,"350x600":6},C={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5}},x={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},S=/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,E={code:"goldbach",supportedMediaTypes:[o.b,o.d,o.c],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.member&&e.params.invCode)},buildRequests:function(e,r){var t=[];e.forEach((function(e){if(Array.isArray(e.params.placementId))for(var r=e.params.placementId,a=0;a<r.length;a++){var n=y({},e,{params:{placementId:r[a]}});t.push(n)}else t.push(e)}));var a=t.map(M),s=p()(e,N),o={};!0===i.b.getConfig("coppa")&&(o={coppa:!0}),s&&Object.keys(s.params.user).filter((function(e){return l()(j,e)})).forEach((function(e){var r=Object(n.convertCamelToUnderscore)(e);if("segments"===e&&Object(n.isArray)(s.params.user[e])){var t=[];s.params.user[e].forEach((function(e){Object(n.isNumber)(e)?t.push({id:e}):Object(n.isPlainObject)(e)&&t.push(e)})),o[r]=t}else"segments"!==e&&(o[r]=s.params.user[e])}));var d,c=p()(e,D);c&&c.params&&c.params.app&&(d={},Object.keys(c.params.app).filter((function(e){return l()(I,e)})).forEach((function(e){return d[e]=c.params.app[e]})));var u,m=p()(e,B);m&&m.params&&c.params.app&&c.params.app.id&&(u={appid:m.params.app.id});var f={},v={},g=p()(e,F);g&&g.debug&&(f=g.debug),f&&f.enabled&&Object.keys(f).filter((function(e){return l()(A,e)})).forEach((function(e){v[e]=f[e]}));var k=p()(e,z),O=k?parseInt(k.params.member,10):0,w=e[0].schain,C=p()(e,H),x={tags:b(a),user:o,sdk:{source:"pbjs",version:"6.10.0-pre"},schain:w};if(C&&(x.iab_support={omidpn:"Appnexus",omidpv:"6.10.0-pre"}),O>0&&(x.member_id=O),c&&(x.device=d),m&&(x.app=u),i.b.getConfig("adpod.brandCategoryExclusion")&&(x.brand_category_uniqueness=!0),v.enabled&&(x.debug=v,Object(n.logInfo)("Debug Auction Settings:\n\n"+JSON.stringify(v,null,4))),r&&r.gdprConsent&&(x.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies},r.gdprConsent.addtlConsent&&-1!==r.gdprConsent.addtlConsent.indexOf("~"))){var S=r.gdprConsent.addtlConsent,E=S.substring(S.indexOf("~")+1);x.gdpr_consent.addtl_consent=E.split(".").map((function(e){return parseInt(e,10)}))}if(r&&r.uspConsent&&(x.us_privacy=r.uspConsent),r&&r.refererInfo){var T={rd_ref:encodeURIComponent(r.refererInfo.referer),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map((function(e){return encodeURIComponent(e)})).join(",")};x.referrer_detection=T}if(p()(e,V)&&e.filter(V).forEach((function(e){var r=function(e,r){var t=r.mediaTypes.video,a=t.durationRangeSec,i=t.requireExactDuration,s=function(e){var r=e.adPodDurationSec,t=e.durationRangeSec,a=e.requireExactDuration,i=Object(n.getMinValueFromArray)(t),s=Math.floor(r/i);return a?Math.max(s,t.length):s}(r.mediaTypes.video),o=Object(n.getMaxValueFromArray)(a),d=e.filter((function(e){return e.uuid===r.bidId})),c=n.fill.apply(void 0,b(d).concat([s]));if(i){var p=Math.ceil(s/a.length),u=Object(n.chunk)(c,p);a.forEach((function(e,r){u[r].map((function(r){J(r,"minduration",e),J(r,"maxduration",e)}))}))}else c.map((function(e){return J(e,"maxduration",o)}));return c}(a,e),t=x.tags.filter((function(r){return r.uuid!==e.bidId}));x.tags=[].concat(b(t),b(r))})),e[0].userId){var P=[];$(P,Object(n.deepAccess)(e[0],"userId.flocId.id"),"chrome.com",null),$(P,Object(n.deepAccess)(e[0],"userId.criteoId"),"criteo.com",null),$(P,Object(n.deepAccess)(e[0],"userId.netId"),"netid.de",null),$(P,Object(n.deepAccess)(e[0],"userId.idl_env"),"liveramp.com",null),$(P,Object(n.deepAccess)(e[0],"userId.tdid"),"adserver.org","TDID"),$(P,Object(n.deepAccess)(e[0],"userId.uid2.id"),"uidapi.com","UID2"),P.length&&(x.eids=P)}return a[0].publisher_id&&(x.publisher_id=a[0].publisher_id),[{method:"GET",url:"https://templates.da-services.ch/01_universal/burda_prebid/1.0/json/sizeCPMMapping.json",options:{withCredentials:!1}},function(e,r){var t=[],a={withCredentials:!0},s=h;U(r)||(s=_);"TRUE"!==Object(n.getParameterByName)("apn_test").toUpperCase()&&!0!==i.b.getConfig("apn_test")||(a.customHeaders={"X-Is-Test":1});if(e.tags.length>15){var o=Object(n.deepClone)(e);Object(n.chunk)(e.tags,15).forEach((function(e){o.tags=e;var n=JSON.stringify(o);t.push({method:"POST",url:s,data:n,bidderRequest:r,options:a})}))}else{var d=JSON.stringify(e);t={method:"POST",url:s,data:d,bidderRequest:r,options:a}}return t}(x,r)]},parseAndMapCpm:function(e){var r=e.body;if(Array.isArray(r)&&r.length){var t={};return r.forEach((function(e){Object.keys(e).forEach((function(r){var a={};a[r]=e[r],t=y({},t,a)}))})),g=t,null}if(r.version){var a=g||w;r.tags&&Array.isArray(r.tags)&&r.tags.length&&r.tags.forEach((function(e){e.ads&&Array.isArray(e.ads)&&e.ads.length&&e.ads.forEach((function(e){if("banner"===e.ad_type){var r="".concat(e.rtb.banner.width,"x").concat(e.rtb.banner.height);a[r]?e.cpm=a[r]:e.cpm=a["0x0"]}}))}))}return r},interpretResponse:function(e,r){var t=this,i=r.bidderRequest;if(!(e=this.parseAndMapCpm(e)))return[];var d=[];if(e.error){var c="in response for ".concat(i.bidderCode," adapter : ").concat(e.error);return Object(n.logError)(c),d}if(e.tags&&e.tags.forEach((function(e){var r,c=(r=e)&&r.ads&&r.ads.length&&p()(r.ads,(function(e){return e.rtb}));if(c&&0!==c.cpm&&l()(t.supportedMediaTypes,c.ad_type)){var u=function(e,r,t){var i=Object(n.getBidRequest)(e.uuid,[t]),d={requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:i.adUnitCode,appnexus:{buyerMemberId:r.buyer_member_id,dealPriority:r.deal_priority,dealCode:r.deal_code}};r.adomain&&(d.meta=y({},d.meta,{advertiserDomains:[]}));r.advertiser_id&&(d.meta=y({},d.meta,{advertiserId:r.advertiser_id}));if(r.rtb.video){switch(y(d,{width:r.rtb.video.player_width,height:r.rtb.video.player_height,vastImpUrl:r.notify_url,ttl:3600}),Object(n.deepAccess)(i,"mediaTypes.video.context")){case o.a:var c=Object(s.getIabSubCategory)(i.bidder,r.brand_category_id);d.meta=y({},d.meta,{primaryCatId:c});var u=r.deal_priority;d.video={context:o.a,durationSeconds:Math.floor(r.rtb.video.duration_ms/1e3),dealTier:u},d.vastUrl=r.rtb.video.asset_url;break;case m.b:if(d.adResponse=e,d.adResponse.ad=d.adResponse.ads[0],d.adResponse.ad.video=d.adResponse.ad.rtb.video,d.vastXml=r.rtb.video.content,r.renderer_url){var l=p()(t.bids,(function(r){return r.bidId===e.uuid})),f=Object(n.deepAccess)(l,"renderer.options");d.renderer=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=a.a.install({id:r.renderer_id,url:r.renderer_url,config:t,loaded:!1,adUnitCode:e});try{i.setRender(L)}catch(e){Object(n.logError)("Prebid Error calling setRender on renderer",e)}return i.setEventHandlers({impression:function(){return Object(n.logMessage)("Outstream video impression event")},loaded:function(){return Object(n.logMessage)("Outstream video loaded event")},ended:function(){Object(n.logMessage)("Outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),i}(d.adUnitCode,r,f)}break;case m.a:d.vastUrl=r.notify_url+"&redir="+encodeURIComponent(r.rtb.video.asset_url)}}else if(r.rtb[o.c]){var b=r.rtb[o.c],v=r.viewability.config.replace("src=","data-src="),g=b.javascript_trackers;null==g?g=v:Object(n.isStr)(g)?g=[g,v]:g.push(v),d[o.c]={title:b.title,body:b.desc,body2:b.desc2,cta:b.ctatext,rating:b.rating,sponsoredBy:b.sponsored,privacyLink:b.privacy_link,address:b.address,downloads:b.downloads,likes:b.likes,phone:b.phone,price:b.price,salePrice:b.saleprice,clickUrl:b.link.url,displayUrl:b.displayurl,clickTrackers:b.link.click_trackers,impressionTrackers:b.impression_trackers,javascriptTrackers:g},b.main_img&&(d.native.image={url:b.main_img.url,height:b.main_img.height,width:b.main_img.width}),b.icon&&(d.native.icon={url:b.icon.url,height:b.icon.height,width:b.icon.width})}else{y(d,{width:r.rtb.banner.width,height:r.rtb.banner.height,ad:r.rtb.banner.content});try{if(r.rtb.trackers){var h=r.rtb.trackers[0].impression_urls[0],_=Object(n.createTrackPixelHtml)(h);d.ad+=_}}catch(e){Object(n.logError)("Error appending tracking pixel",e)}}return d}(e,c,i);u.mediaType=function(e){var r=e.ad_type;return r===o.d?o.d:r===o.c?o.c:o.b}(c),d.push(u)}})),e.debug&&e.debug.debug_info){var u="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info;u=u.replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),Object(n.logMessage)(u)}return d},getMappingFileInfo:function(){return{url:"https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",refreshInDays:2}},getUserSyncs:function(e,r,t){if(e.iframeEnabled&&U({gdprConsent:t}))return[{type:"iframe",url:"https://acdn.adnxs.com/dmp/async_usersync.html"}]},transformBidParams:function(e,r){return e=Object(n.convertTypes)({member:"string",invCode:"string",placementId:"number",keywords:n.transformBidderParamKeywords,publisherId:"number"},e),r&&(e.use_pmt_rule="boolean"==typeof e.usePaymentRule&&e.usePaymentRule,e.usePaymentRule&&delete e.usePaymentRule,T(e.keywords)&&e.keywords.forEach(P),Object.keys(e).forEach((function(r){var t=Object(n.convertCamelToUnderscore)(r);t!==r&&(e[t]=e[r],delete e[r])}))),e},onBidWon:function(e){e.native&&function(e){var r=function(e){var r;if(Object(n.isStr)(e)&&R(e))r=e;else if(Object(n.isArray)(e))for(var t=0;t<e.length;t++){var a=e[t];R(a)&&(r=a)}return r}(e.native.javascriptTrackers);if(r)for(var t="pbjs_adid="+e.adId+";pbjs_auc="+e.adUnitCode,a=function(e){var r=e.indexOf('src="')+5,t=e.indexOf('"',r);return e.substring(r,t)}(r),i=a.replace("dom_id=%native_dom_id%",t),s=document.getElementsByTagName("iframe"),o=!1,d=0;d<s.length&&!o;d++){var c=s[d];try{var p=c.contentDocument||c.contentWindow.document;if(p)for(var u=p.getElementsByTagName("script"),l=0;l<u.length&&!o;l++){var m=u[l];m.getAttribute("data-src")==a&&(m.setAttribute("src",i),m.setAttribute("data-src",""),m.removeAttribute&&m.removeAttribute("data-src"),o=!0)}}catch(e){if(!(e instanceof DOMException&&"SecurityError"===e.name))throw e}}}(e)}};function T(e){return!!(Object(n.isArray)(e)&&e.length>0)}function P(e){T(e.value)&&""===e.value[0]&&delete e.value}function R(e){var r=e.match(S),t=null!=r&&r.length>=1,a=e.match("trk.js"),n=null!=a&&a.length>=1;return e.startsWith("<script")&&n&&t}function U(e){var r=!0;return e&&e.gdprConsent&&e.gdprConsent.gdprApplies&&2===e.gdprConsent.apiVersion&&(r=!(!0!==Object(n.deepAccess)(e.gdprConsent,"vendorData.purpose.consents.1"))),r}function M(e){var r={};r.sizes=q(e.sizes),r.primary_size=r.sizes[0],r.ad_types=[],r.uuid=e.bidId,e.params.placementId?r.id=parseInt(e.params.placementId,10):r.code=e.params.invCode,r.allow_smaller_sizes=e.params.allowSmallerSizes||!1,r.use_pmt_rule=e.params.usePaymentRule||!1,r.prebid=!0,r.disable_psa=!0;var t=function(e){if(!Object(n.isFn)(e.getFloor))return e.params.reserve?e.params.reserve:null;var r=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if(Object(n.isPlainObject)(r)&&!isNaN(r.floor)&&"USD"===r.currency)return r.floor;return null}(e);if(t&&(r.reserve=t),e.params.position&&(r.position={above:1,below:2}[e.params.position]||0),e.params.trafficSourceCode&&(r.traffic_source_code=e.params.trafficSourceCode),e.params.privateSizes&&(r.private_sizes=q(e.params.privateSizes)),e.params.supplyType&&(r.supply_type=e.params.supplyType),e.params.pubClick&&(r.pubclick=e.params.pubClick),e.params.extInvCode&&(r.ext_inv_code=e.params.extInvCode),e.params.publisherId&&(r.publisher_id=parseInt(e.params.publisherId,10)),e.params.externalImpId&&(r.external_imp_id=e.params.externalImpId),!Object(n.isEmpty)(e.params.keywords)){var a=Object(n.transformBidderParamKeywords)(e.params.keywords);a.length>0&&a.forEach(P),r.keywords=a}var i,s,c=Object(n.deepAccess)(e,"ortb2Imp.ext.data.pbadslot");if(c&&(r.gpid=c),(e.mediaType===o.c||Object(n.deepAccess)(e,"mediaTypes.".concat(o.c)))&&(r.ad_types.push(o.c),0===r.sizes.length&&(r.sizes=q([1,1])),e.nativeParams)){var u=(i=e.nativeParams,s={},Object.keys(i).forEach((function(e){var r=x[e]&&x[e].serverName||x[e]||e,t=x[e]&&x[e].requiredParams;if(s[r]=y({},t,i[e]),(r===x.image.serverName||r===x.icon.serverName)&&s[r].sizes){var a=s[r].sizes;(Object(n.isArrayOfNums)(a)||Object(n.isArray)(a)&&a.length>0&&a.every((function(e){return Object(n.isArrayOfNums)(e)})))&&(s[r].sizes=q(s[r].sizes))}r===x.privacyLink&&(s.privacy_supported=!0)})),s);r[o.c]={layouts:[u]}}var m=Object(n.deepAccess)(e,"mediaTypes.".concat(o.d)),f=Object(n.deepAccess)(e,"mediaTypes.video.context");r.hb_source=m&&"adpod"===f?7:1,(e.mediaType===o.d||m)&&r.ad_types.push(o.d),(e.mediaType===o.d||m&&"outstream"!==f)&&(r.require_asset_url=!0),e.params.video&&(r.video={},Object.keys(e.params.video).filter((function(e){return l()(k,e)})).forEach((function(t){switch(t){case"context":case"playback_method":var a=e.params.video[t];a=Object(n.isArray)(a)?a[0]:a,r.video[t]=C[t][a];break;case"frameworks":break;default:r.video[t]=e.params.video[t]}})),e.params.video.frameworks&&Object(n.isArray)(e.params.video.frameworks)&&(r.video_frameworks=e.params.video.frameworks)),m&&(r.video=r.video||{},Object.keys(m).filter((function(e){return l()(O,e)})).forEach((function(e){switch(e){case"minduration":case"maxduration":"number"!=typeof r.video[e]&&(r.video[e]=m[e]);break;case"skip":"boolean"!=typeof r.video.skippable&&(r.video.skippable=1===m[e]);break;case"skipafter":"number"!=typeof r.video.skipoffset&&(r.video.skippoffset=m[e]);break;case"playbackmethod":if("number"!=typeof r.video.playback_method){var t=m[e];(t=Object(n.isArray)(t)?t[0]:t)>=1&&t<=4&&(r.video.playback_method=t)}break;case"api":if(!r.video_frameworks&&Object(n.isArray)(m[e])){var a=m[e].map((function(e){var r=4===e?5:5===e?4:e;if(r>=1&&r<=5)return r})).filter((function(e){return e}));r.video_frameworks=a}}}))),e.renderer&&(r.video=y({},r.video,{custom_renderer_present:!0})),e.params.frameworks&&Object(n.isArray)(e.params.frameworks)&&(r.banner_frameworks=e.params.frameworks);var b=p()(d.a.getAdUnits(),(function(r){return e.transactionId===r.transactionId}));return b&&b.mediaTypes&&b.mediaTypes.banner&&r.ad_types.push(o.b),0===r.ad_types.length&&delete r.ad_types,r}function q(e){var r=[],t={};if(Object(n.isArray)(e)&&2===e.length&&!Object(n.isArray)(e[0]))t.width=parseInt(e[0],10),t.height=parseInt(e[1],10),r.push(t);else if("object"===f(e))for(var a=0;a<e.length;a++){var i=e[a];(t={}).width=parseInt(i[0],10),t.height=parseInt(i[1],10),r.push(t)}return r}function N(e){return!!e.params.user}function z(e){return!!parseInt(e.params.member,10)}function D(e){if(e.params)return!!e.params.app}function B(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function F(e){return!!e.debug}function V(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===o.a}function H(e){var r=!1,t=e.params,a=e.params.video;return t.frameworks&&Object(n.isArray)(t.frameworks)&&(r=l()(e.params.frameworks,6)),!r&&a&&a.frameworks&&Object(n.isArray)(a.frameworks)&&(r=l()(e.params.video.frameworks,6)),r}function J(e,r,t){Object(n.isEmpty)(e.video)&&(e.video={}),e.video[r]=t}function L(e){var r,t;r=e.adUnitCode,(t=document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0]&&t[0].style.setProperty("display","none"),function(e){try{var r=document.getElementById(e).querySelectorAll("script[id^='sas_script']");r[0].nextSibling&&"iframe"===r[0].nextSibling.localName&&r[0].nextSibling.style.setProperty("display","none")}catch(e){}}(e.adUnitCode),e.renderer.push((function(){window.ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},W.bind(null,e))}))}function W(e,r,t){e.renderer.handleVideoEvent({id:r,eventName:t})}function $(e,r,t,a){return r&&(a?e.push({source:t,id:r,rti_partner:a}):e.push({source:t,id:r})),e}Object(s.registerBidder)(E),window.pbjs.installedModules.push("goldbachBidAdapter")}},[366]);