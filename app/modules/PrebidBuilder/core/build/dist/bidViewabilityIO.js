pbjsChunk([344],{199:function(t,e,n){t.exports=n(200)},200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"IAB_VIEWABLE_DISPLAY_THRESHOLD",(function(){return u})),n.d(e,"IAB_VIEWABLE_DISPLAY_LARGE_THRESHOLD",(function(){return s})),n.d(e,"isSupportedMediaType",(function(){return w})),n.d(e,"getViewableOptions",(function(){return g})),n.d(e,"markViewed",(function(){return l})),n.d(e,"viewCallbackFactory",(function(){return v})),n.d(e,"init",(function(){return p}));var i=n(0),r=n(3),o=n(10),c=(n.n(o),n(5)),d=n.n(c),a="bidViewabilityIO",u=.5,s=.3,f=window.IntersectionObserver&&window.IntersectionObserverEntry&&window.IntersectionObserverEntry.prototype&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,b=["banner"],w=function(t){return b.indexOf(t.mediaType)>-1},E=function(t){return Object(i.logMessage)("".concat(a,": ").concat(t))},g=function(t){if("banner"===t.mediaType)return{root:null,rootMargin:"0px",threshold:t.width*t.height>242e3?s:u}},l=function(t,e,n){return function(){n.unobserve(e.target),o.emit(d.a.EVENTS.BID_VIEWABLE,t),E("id: ".concat(e.target.getAttribute("id")," code: ").concat(t.adUnitCode," was viewed"))}},v=function(t){return function(e,n){e.forEach((function(e){e.isIntersecting?(E("viewable timer starting for id: ".concat(e.target.getAttribute("id")," code: ").concat(t.adUnitCode)),e.target.view_tracker=setTimeout(l(t,e,n),1e3)):(E("id: ".concat(e.target.getAttribute("id")," code: ").concat(t.adUnitCode," is out of view")),e.target.view_tracker&&(clearTimeout(e.target.view_tracker),E("viewable timer stopped for id: ".concat(e.target.getAttribute("id")," code: ").concat(t.adUnitCode))))}))}},p=function(){r.b.getConfig(a,(function(t){t[a].enabled&&f&&o.on(d.a.EVENTS.AD_RENDER_SUCCEEDED,(function(t){t.doc;var e=t.bid;t.id;if(w(e)){var n=new IntersectionObserver(v(e),g(e)),i=document.getElementById(e.adUnitCode);n.observe(i)}}))}))};p(),window.pbjs.installedModules.push("bidViewabilityIO")}},[199]);