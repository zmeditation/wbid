pbjsChunk([329],{234:function(a,t,e){a.exports=e(235)},235:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"storage",(function(){return c})),e.d(t,"registerAdserver",(function(){return g})),t.getAdserverCategoryHook=f,t.initTranslation=b;var r=e(3),n=e(8),i=e(4),o=e(0),l=e(19),s=e(7),c=Object(s.a)("categoryTranslation"),p="iabToFwMappingkey",d="iabToFwMappingkeyPub",g=Object(n.b)("async",(function(a){"freewheel"===a&&("https://cdn.jsdelivr.net/gh/prebid/category-mapping-file@1/freewheel-mapping.json",b("https://cdn.jsdelivr.net/gh/prebid/category-mapping-file@1/freewheel-mapping.json",p))}),"registerAdserver");function f(a,t,e){if(!e)return a.call(this,t);if(!r.b.getConfig("adpod.brandCategoryExclusion"))return a.call(this,t,e);var n=r.b.getConfig("brandCategoryTranslation.translationFile")?d:p;if(e.meta&&!e.meta.adServerCatId){var i=c.getDataFromLocalStorage(n);if(i){try{i=JSON.parse(i)}catch(a){Object(o.logError)("Failed to parse translation mapping file")}e.meta.primaryCatId&&i.mapping&&i.mapping[e.meta.primaryCatId]?e.meta.adServerCatId=i.mapping[e.meta.primaryCatId].id:e.meta.adServerCatId=void 0}else Object(o.logError)("Translation mapping data not found in local storage")}a.call(this,t,e)}function b(a,t){Object(n.d)(l.c,f,50);var e=c.getDataFromLocalStorage(t);try{(!(e=e?JSON.parse(e):void 0)||Object(o.timestamp)()>e.lastUpdated+864e5)&&Object(i.a)(a,{success:function(a){try{(a=JSON.parse(a)).lastUpdated=Object(o.timestamp)(),c.setDataInLocalStorage(t,JSON.stringify(a))}catch(a){Object(o.logError)("Failed to parse translation mapping file")}},error:function(){Object(o.logError)("Failed to load brand category translation file.")}})}catch(a){Object(o.logError)("Failed to parse translation mapping file")}}g(),r.b.getConfig("brandCategoryTranslation",(function(a){return function(a){a.translationFile&&b(a.translationFile,d)}(a.brandCategoryTranslation)})),window.pbjs.installedModules.push("categoryTranslation")}},[234]);