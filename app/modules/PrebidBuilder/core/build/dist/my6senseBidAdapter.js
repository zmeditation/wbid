pbjsChunk([202],{535:function(e,r,t){e.exports=t(536)},536:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return s}));var a=t(2),n=t(1).registerBidder,p="my6sense",d="https://hb.mynativeplatform.com/pub2/web/v1.15.0/hbwidget.json";function u(e){e||(e=window.location.href);for(var r=null,t=document.getElementsByTagName("meta"),a=0;a<t.length&&!r;a++)"og:url"==t[a].getAttribute("property")&&(r=t[a].content);if(!r){var n=document.querySelector("link[rel='canonical']");n&&(r=n.href)}return e=r||e,encodeURIComponent(e).toString()}function l(e,r){var t={pageUrl:{emptyValue:"[PAGE_URL]",defaultValue:u()},displayWithinIframe:{emptyValue:"",defaultValue:""},dataParams:{emptyValue:"[KEY_VALUES]",defaultValue:""},paidClicks:{emptyValue:"[PAID_TRACKING_PIXEL]",defaultValue:""},organicClicks:{emptyValue:"[ORGANIC_TRACKING_PIXEL]",defaultValue:""},dataView:{emptyValue:"[VIEW_TRACKING_PIXEL]",defaultValue:""}};return t.hasOwnProperty(e)&&(!r||function(e,r){return r===t[e].emptyValue}(e,r))?{value:t[e].defaultValue,fromUser:!1}:{value:r,fromUser:!0}}var s={code:p,supportedMediaTypes:[a.b,a.c],isBidRequestValid:function(e){return!(e.bidder!==p||!e.params||!e.params.key)},buildRequests:function(e,r){var t=[];return e&&e.length&&e.forEach((function(e){e.widget_num=1;var a=!1,n=!1;if(e.params)for(var p in e.params)if(e.params.hasOwnProperty(p)){if("debug"===p&&!0===e.params[p]){n=!0,delete e.params[p];continue}var u=l(p,e.params[p]);e.params[p]=u.value,"pageUrl"===p&&!0===u.fromUser&&(a=!0),e.params[p]||delete e.params[p]}var s="".concat(d,"?widget_key=").concat(e.params.key,"&is_data_url_set=").concat(a);n&&(s="".concat(d,"?env=debug&widget_key=").concat(e.params.key,"&is_data_url_set=").concat(a)),e.gdpr=function(e){var r={gdpr_consent:null,gdpr:null};return e&&"gdprConsent"in e&&(r.gdpr_consent=e.gdprConsent.consentString||null,r.gdpr=null===r.gdpr&&1==e.gdprConsent.gdprApplies||r.gdpr,r.gdpr=(null!==r.gdpr||0!=e.gdprConsent.gdprApplies)&&r.gdpr,r.gdpr=null===r.gdpr&&1==e.gdprConsent.gdprApplies||r.gdpr,r.gdpr=(null!==r.gdpr||0!=e.gdprConsent.gdprApplies)&&r.gdpr),r}(r),t.push({url:s,method:"POST",data:JSON.stringify(e)})})),t},interpretResponse:function(e){var r=[];return e.body&&(e.body.bidderCode=p,r.push(e.body)),r}};n(s),window.pbjs.installedModules.push("my6senseBidAdapter")}},[535]);