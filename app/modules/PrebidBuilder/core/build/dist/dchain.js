pbjsChunk([305],{290:function(e,n,t){e.exports=t(291)},291:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.checkDchainSyntax=l,n.addBidResponseHook=u,n.init=O;var c=t(12),a=t.n(c),i=t(3),o=t(8),d=t(0),s=" should be a string",r=" should be an object",b=" is not a valid dchain property",h={STRICT:"strict",RELAXED:"relaxed",OFF:"off"},j=[];function l(e,n){var t=Object(d.deepClone)(e.meta.dchain),c="Detected something wrong in bid.meta.dchain object for bid:",i="",o=["ver","complete","nodes","ext"];function j(e){i+="\n"+e}function l(){n===h.STRICT?Object(d.logError)(c,e,"\n",t,i):Object(d.logWarn)(c,e,"\n",t,i)}if(Object.keys(t).forEach((function(e){a()(o,e)||j("dchain.".concat(e)+b)})),0!==t.complete&&1!==t.complete&&j("dchain.complete should be 0 or 1"),Object(d.isStr)(t.ver)||j("dchain.ver"+s),Object(d.hasOwn)(t,"ext")&&(Object(d.isPlainObject)(t.ext)||j("dchain.ext"+r)),Object(d.isArray)(t.nodes)){var u=["asi","bsid","rid","name","domain","ext"];t.nodes.forEach((function(e,n){Object(d.isPlainObject)(e)?Object.keys(e).forEach((function(t){a()(u,t)||j("dchain.nodes[".concat(n,"].").concat(t)+b),"ext"===t?Object(d.isPlainObject)(e.ext)||j("dchain.nodes[".concat(n,"].ext")+r):Object(d.isStr)(e[t])||j("dchain.nodes[".concat(n,"].").concat(t)+s)})):j("dchain.nodes[".concat(n,"]")+r)}))}else if(j("dchain.nodes should be an Array"),l(),n===h.STRICT)return!1;return!(i.length>0&&(l(),n===h.STRICT))}function u(e,n,t){var c={ver:"1.0",complete:0,nodes:[]};Object(d.deepAccess)(t,"meta.networkId")&&Object(d.deepAccess)(t,"meta.networkName")&&c.nodes.push({name:t.meta.networkName,bsid:t.meta.networkId.toString()}),c.nodes.push({name:t.bidderCode});var a=Object(d.deepAccess)(t,"meta.dchain");a&&Object(d.isPlainObject)(a)?function(e){var n=h.STRICT,t=i.b.getConfig("dchain");return t&&Object(d.isStr)(t.validation)&&-1!=j.indexOf(t.validation)&&(n=t.validation),n===h.OFF||l(e,n)}(t)?Object(d.isArray)(a.nodes)?t.meta.dchain.nodes.push({asi:t.bidderCode}):Object(d.logWarn)("bid.meta.dchain.nodes did not exist or was not an array; did not append prebid dchain.",t):delete t.meta.dchain:t.meta.dchain=c;e(n,t)}function O(){Object(o.a)("addBidResponse").before(u,35)}Object(d._each)(h,(function(e){return j.push(e)})),O(),window.pbjs.installedModules.push("dchain")}},[290]);