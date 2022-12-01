pbjsChunk([25],{28:function(e,t){e.exports=function(e,t,a){return e&&e.findIndex(t,a)}},702:function(e,t,a){e.exports=a(703)},703:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSegmentsAndCategories=b,t.setGlobalOrtb2=y,t.setBidderOrtb2=O,t.loadCustomFunction=l,t.getSegAndCatsArray=h,t.addSegmentData=f,t.init=x,a.d(t,"sirdataSubmodule",(function(){return _}));var r=a(14),s=a(0),o=a(8),n=a(4),c=a(28),d=a.n(c),i=a(18),p=a(3);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t,a,o){var c=e.adUnits||Object(r.a)().adUnits;a.params=a.params||{};var d,p,m=o&&o.gdpr&&o.gdpr.consentString?o.gdpr.consentString:"",u=o&&o.gdpr&&o.gdpr.gdprApplies?o.gdpr.gdprApplies:"";a.params.partnerId=a.params.partnerId?a.params.partnerId:1,a.params.key=a.params.key?a.params.key:1,o.coppa||o.usp&&"1"==o.usp[0]&&("N"==o.usp[1]||"Y"==o.usp[2])?(d="cookieless-data.com",p=!1,u=null,m=""):Object(r.a)().getConfig("consentManagement.gdpr")&&(d="cookieless-data.com",p=!1),(!d||!u||Object(s.deepAccess)(o,"gdpr.vendorData.vendor.consents")&&o.gdpr.vendorData.vendor.consents[53]&&o.gdpr.vendorData.purpose.consents[1]&&o.gdpr.vendorData.purpose.consents[4])&&(d="sddan.com",p=!0);var g=a.params.actualUrl||Object(i.a)().referer,b="https://kvt."+d+"/api/v1/public/p/"+a.params.partnerId+"/d/"+a.params.key+"/s?callback=&gdpr="+u+"&gdpr_consent="+m+(g?"&url="+g:"");Object(n.a)(b,{success:function(e,r){if(200===r.status)try{var o=JSON.parse(e);o&&o.segments?f(c,o,a,t):t()}catch(e){t(),Object(s.logError)("unable to parse Sirdata data"+e)}else 204===r.status&&t()},error:function(){t(),Object(s.logError)("unable to get Sirdata data")}},null,{contentType:"text/plain",method:"GET",withCredentials:p,referrerPolicy:"unsafe-url",crossOrigin:!0})}function y(e,t){try{var a={},o=Object(r.a)().getConfig("ortb2")||{};if(Object(s.deepAccess)(o,"user.ext.data.sd_rtd")&&Object(s.deepEqual)(o.user.ext.data.sd_rtd,e)||Object(s.deepSetValue)(a,"user.ext.data.sd_rtd",e||{}),Object(s.deepAccess)(o,"site.ext.data.sd_rtd")&&Object(s.deepEqual)(o.site.ext.data.sd_rtd,t)||Object(s.deepSetValue)(a,"site.ext.data.sd_rtd",t||{}),!Object(s.isEmpty)(a)){var n={ortb2:Object(s.mergeDeep)({},o,a)};Object(r.a)().setConfig(n)}}catch(e){Object(s.logError)(e)}return!0}function O(e,t,a){try{var o={},n=Object(s.deepAccess)(p.b.getBidderConfig(),e+".ortb2")||{};if(Object(s.deepAccess)(n,"user.ext.data.sd_rtd")&&Object(s.deepEqual)(n.user.ext.data.sd_rtd,t)||Object(s.deepSetValue)(o,"user.ext.data.sd_rtd",t||{}),Object(s.deepAccess)(n,"site.ext.data.sd_rtd")&&Object(s.deepEqual)(n.site.ext.data.sd_rtd,a)||Object(s.deepSetValue)(o,"site.ext.data.sd_rtd",a||{}),!Object(s.isEmpty)(o)){var c={ortb2:Object(s.mergeDeep)({},n,o)};Object(r.a)().setBidderConfig({bidders:[e],config:c})}}catch(e){Object(s.logError)(e)}return!0}function l(e,t,a,r,o){try{"function"==typeof e&&e(t,a,r,o)}catch(e){Object(s.logError)(e)}return!0}function h(e,t){var a={segments:[],categories:[]};t=t&&"number"==typeof t?t:30;try{if(e&&e.contextual_categories)for(var r in e.contextual_categories){e.contextual_categories[r]>=t&&-1===a.categories.indexOf(r)&&a.categories.push(r.toString())}}catch(e){Object(s.logError)(e)}try{if(e&&e.segments)for(var o in e.segments)a.segments.push(e.segments[o].toString())}catch(e){Object(s.logError)(e)}return a}function f(e,t,a,o){(a=a||{}).params=a.params||{};var n=a.params.hasOwnProperty("contextualMinRelevancyScore")?a.params.contextualMinRelevancyScore:30,c=h(t,n);if(!c||c.segments.length<1&&c.categories.length<1)return Object(s.logError)("no cats"),o(),e;var i=c.segments.concat(c.categories),p={segments:[],categories:[]},m="1",g=!(!a.params||!a.params.bidders);if(g||y(c.segments,c.categories),void 0!==window.googletag&&(a.params.setGptKeyValues||!a.params.hasOwnProperty("setGptKeyValues")))try{m=a.params.gptCurationId?a.params.gptCurationId:"27449",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],n)),window.googletag.pubads().getSlots().forEach((function(e){void 0!==e.setTargeting&&e.setTargeting("sd_rtd",i.concat(p.segments).concat(p.categories))}))}catch(e){Object(s.logError)(e)}var b="",f=!1;return e.forEach((function(e){g||Object(s.deepAccess)(e,"ortb2Imp.ext.data.sd_rtd")||Object(s.deepSetValue)(e,"ortb2Imp.ext.data.sd_rtd",i),e.hasOwnProperty("bids")&&e.bids.forEach((function(o){b=!!a.params.hasOwnProperty("bidders")&&d()(a.params.bidders,(function(e){return e.bidder===o.bidder})),f=!!("number"==typeof b&&b>=0);try{p={segments:[],categories:[]};var y=f&&a.params.bidders[b].hasOwnProperty("contextualMinRelevancyScore")?a.params.bidders[b].contextualMinRelevancyScore:n;if(!g||f&&(!a.params.bidders[b].hasOwnProperty("adUnitCodes")||-1!==a.params.bidders[b].adUnitCodes.indexOf(e.code)))switch(o.bidder){case"appnexus":case"appnexusAst":case"brealtime":case"emxdigital":case"pagescience":case"gourmetads":case"matomy":case"featureforward":case"oftmedia":case"districtm":case"adasta":case"beintoo":case"gravity":case"msq_classic":case"msq_max":case"366_apx":m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27446",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],y)),f&&a.params.bidders[b].hasOwnProperty("customFunction")?l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o):Object(s.deepSetValue)(o,"params.keywords.sd_rtd",i.concat(p.segments).concat(p.categories));break;case"smartadserver":case"smart":var x=[];o.hasOwnProperty("params")&&o.params.hasOwnProperty("target")&&x.push(o.params.target),m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27440",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],y)),f&&a.params.bidders[b].hasOwnProperty("customFunction")?l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o):(i.concat(p.segments).concat(p.categories).forEach((function(e){-1===x.indexOf("sd_rtd="+e)&&x.push("sd_rtd="+e)})),Object(s.deepSetValue)(o,"params.target",x.join(";")));break;case"rubicon":m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27452",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],y)),f&&a.params.bidders[b].hasOwnProperty("customFunction")?l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o):O(o.bidder,t.segments.concat(p.segments),i.concat(p.segments).concat(p.categories));break;case"ix":if(!Object(r.a)().getConfig("ix.firstPartyData.sd_rtd"))if(m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27248",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],y)),f&&a.params.bidders[b].hasOwnProperty("customFunction"))l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o);else{var _=[],j=0,v=f&&a.params.bidders[b].hasOwnProperty("sizeLimit")?a.params.bidders[b].sizeLimit:1e3;i.concat(p.segments).concat(p.categories).forEach((function(e){j<v&&(_.push(e),j+=e.toString().length)})),Object(r.a)().setConfig({ix:{firstPartyData:{sd_rtd:_}}})}break;case"proxistore":m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27484",t.shared_taxonomy&&t.shared_taxonomy[m]?p=h(t.shared_taxonomy[m],y):t.shared_taxonomy[m]={contextual_categories:{}},f&&a.params.bidders[b].hasOwnProperty("customFunction")?l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o):Object(s.deepSetValue)(o,"ortb2.user.ext.data",{segments:c.segments.concat(p.segments),contextual_categories:u(u({},t.contextual_categories),t.shared_taxonomy[m].contextual_categories)});break;case"criteo":m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27443",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],y)),f&&a.params.bidders[b].hasOwnProperty("customFunction")?l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o):O(o.bidder,i.concat(p.segments).concat(p.categories),i.concat(p.segments).concat(p.categories));break;case"triplelift":m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27518",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],y)),f&&a.params.bidders[b].hasOwnProperty("customFunction")?l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o):O(o.bidder,t.segments.concat(p.segments),i.concat(p.segments).concat(p.categories));break;case"avct":case"avocet":m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27522",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],y)),f&&a.params.bidders[b].hasOwnProperty("customFunction")?l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o):O(o.bidder,t.segments.concat(p.segments),i.concat(p.segments).concat(p.categories));break;case"smaato":m=f&&a.params.bidders[b].hasOwnProperty("curationId")?a.params.bidders[b].curationId:"27520",t.shared_taxonomy&&t.shared_taxonomy[m]&&(p=h(t.shared_taxonomy[m],y)),f&&a.params.bidders[b].hasOwnProperty("customFunction")?l(a.params.bidders[b].customFunction,e,i.concat(p.segments).concat(p.categories),t,o):O(o.bidder,t.segments.concat(p.segments),i.concat(p.segments).concat(p.categories));break;default:g&&!f||(Object(s.deepAccess)(o,"ortb2.site.ext.data.sd_rtd")||Object(s.deepSetValue)(o,"ortb2.site.ext.data.sd_rtd",c.categories),Object(s.deepAccess)(o,"ortb2.user.ext.data.sd_rtd")||Object(s.deepSetValue)(o,"ortb2.user.ext.data.sd_rtd",c.segments))}}catch(e){Object(s.logError)(e)}}))})),o(),e}function x(e){return!0}var _={name:"SirdataRTDModule",init:x,getBidRequestData:b};Object(o.e)("realTimeData",_),window.pbjs.installedModules.push("sirdataRtdProvider")}},[702]);