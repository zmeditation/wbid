pbjsChunk([114],{778:function(e,n,i){e.exports=i(779)},779:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),i.d(n,"spec",(function(){return f}));var t=i(0),o=i(1),r=i(2),a=i(7),d=i(3);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=Object(a.b)(),l="ucf_uid",u=0,m=2,f={code:"ucfunnel",gvlid:607,ENDPOINT:"https://hb.aralego.com/header",supportedMediaTypes:[r.b,r.d,r.c],isBidRequestValid:function(e){var n=e.mediaTypes&&null!=e.mediaTypes.video,i=e.mediaTypes&&null!=e.mediaTypes.video?e.mediaTypes.video.videoContext:"";return"object"===c(e.params)&&"string"==typeof e.params.adid&&(!n||"outstream"!==i)},buildRequests:function(e,n){return e.map((function(e){return{method:"GET",url:f.ENDPOINT,data:h(e,n),bidRequest:e}}))},interpretResponse:function(e,n){var i=n.bidRequest,t=e?e.body:{},o=y(i),a={requestId:i.bidId,cpm:t.cpm||0,creativeId:t.crid||t.ad_id||i.params.adid,dealId:t.deal||null,currency:t.currency||"USD",netRevenue:!0,ttl:1800,meta:{}};switch(i.params&&i.params.bidfloor&&t.cpm&&t.cpm<i.params.bidfloor&&(a.cpm=0),t.creative_type&&(a.mediaType=t.creative_type,a.meta.mediaType=t.creative_type),t.adomain&&(a.meta.advertiserDomains=t.adomain),t.creative_type){case r.c:var d=t.native;s(a,{width:1,height:1,native:{title:d.title,body:d.desc,cta:d.ctatext,sponsoredBy:d.sponsored,image:d.image||d.image.url,icon:d.icon||d.icon.url,clickUrl:d.clickUrl,clickTrackers:d.clicktrackers?d.clicktrackers:[],impressionTrackers:d.impressionTrackers}});break;case r.d:s(a,{vastUrl:t.vastUrl,vastXml:t.vastXml}),o&&2===o.length&&s(a,{width:o[0],height:o[1]});break;case r.b:default:var c=y(i);s(a,{width:t.width||c[0],height:t.height||c[1],ad:t.adm||""})}return[a]},getUserSyncs:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3?arguments[3]:void 0,o=i&&i.gdprApplies?"1":"",r=i?i.apiVersion:"",a=i?i.consentString:"";return e.iframeEnabled?[{type:"iframe",url:"https://cdn.aralego.net/ucfad/cookie/sync.html"+g(o,r,a,t)}]:e.pixelEnabled?[{type:"image",url:"https://sync.aralego.com/idSync"+g(o,r,a,t)}]:void 0}};function g(e,n,i,t){var o="?";return"1"==e&&(o+="gdpr=1&"),1==n?o=o+"euconsent="+i+"&":2==n&&(o=o+"euconsent-v2="+i+"&"),t&&(o=o+"usprivacy="+t),"?"==o?"":o}function y(e){var n=e.params;if(e.mediaType===r.d){if(n.video&&n.video.playerWidth&&n.video.playerHeight)return[n.video.playerWidth,n.video.playerHeight]}return function(e){if("object"===c(e)&&e.length)return e[0]}(e.sizes)}function v(e){return null!=e&&e.banner?"banner":null!=e&&e.video?"video":null!=e&&e.native?"native":"banner"}function h(e,n){var i=y(e),o=navigator.language,r="yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,a=e.userId&&e.userId.tdid?e.userId.tdid:"",c=function(e){var n="";if(null!=e&&e.nodes){n=e.ver+","+e.complete;for(var i=0;i<e.nodes.length;i++)n+="!",n+=e.nodes[i].asi?encodeURIComponent(e.nodes[i].asi):"",n+=",",n+=e.nodes[i].sid?encodeURIComponent(e.nodes[i].sid):"",n+=",",n+=e.nodes[i].hp?encodeURIComponent(e.nodes[i].hp):"",n+=",",n+=e.nodes[i].rid?encodeURIComponent(e.nodes[i].rid):"",n+=",",n+=e.nodes[i].name?encodeURIComponent(e.nodes[i].name):"",n+=",",n+=e.nodes[i].domain?encodeURIComponent(e.nodes[i].domain):""}return n}(e.schain),f=function(e,n,i){if(e.params.bidfloor)return e.params.bidfloor;if("function"==typeof e.getFloor){var t=e.getFloor({currency:"USD",mediaType:v(i),size:n?[n[0],n[1]]:"*"});if("USD"===t.currency)return t.floor}}(e,i,e.mediaTypes),g={ver:"ADGENT_PREBID-2018011501",ifr:0,bl:o,je:1,dnt:r,adid:e.params.adid,tdid:a,schain:c};f&&(g.fp=f),function(e,n){e.eids="",Object(t._each)(n,(function(n,i){switch(i){case"haloId":n.haloId&&(e[i+"haloId"]=n.haloId),n.auSeg&&(e[i+"_auSeg"]=n.auSeg);break;case"parrableId":n.eid&&(e[i+"_eid"]=n.eid);break;case"id5id":n.uid&&(e[i+"_uid"]=n.uid),n.ext&&n.ext.linkType&&(e[i+"_linkType"]=n.ext.linkType);break;case"uid2":n.id&&(e.eids=e.eids.length>0?e.eids+"!"+i+","+n.id:i+","+n.id);break;case"connectid":n&&(e.eids=e.eids.length>0?e.eids+"!verizonMediaId,"+n:"verizonMediaId,"+n);break;case"flocId":n.id&&(e.cid=n.id);break;default:e[i]=n}}))}(g,e.userId);try{g.host=window.top.location.hostname,g.u=d.b.getConfig("publisherDomain")||window.top.location.href,g.xr=0}catch(e){g.host=window.location.hostname,g.u=d.b.getConfig("publisherDomain")||n.refererInfo.referrer||document.referrer||window.location.href,g.xr=1}if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0&&(g.ao=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]),p.cookiesAreEnabled()){var h="";null!=p.getCookie(l)?(h=p.getCookie(l),g.ucfUid=h):(h=Object(t.generateUUID)(),g.ucfUid=h,p.setCookie(l,h))}if(null!=i&&2==i.length&&(g.w=i[0],g.h=i[1]),n&&n.uspConsent&&s(g,{usprivacy:n.uspConsent}),e.mediaTypes&&null!=e.mediaTypes.video)switch(e.mediaTypes.video.context){case"outstream":g.atype=m;break;case"instream":default:g.atype=u}return n&&n.gdprConsent&&(1==n.gdprConsent.apiVersion?s(g,{gdpr:n.gdprConsent.gdprApplies?1:0,euconsent:n.gdprConsent.consentString}):2==n.gdprConsent.apiVersion&&s(g,{gdpr:n.gdprConsent.gdprApplies?1:0,"euconsent-v2":n.gdprConsent.consentString})),d.b.getConfig("coppa")&&(g.coppa=!0),g}Object(o.registerBidder)(f),window.pbjs.installedModules.push("ucfunnelBidAdapter")}},[778]);