pbjsChunk([0],{22:function(e,n,t){var i;i=function(){var e=e||function(e,n){var t=Object.create||function(){function e(){}return function(n){var t;return e.prototype=n,t=new e,e.prototype=null,t}}(),i={},r=i.lib={},o=r.Base={extend:function(e){var n=t(this);return e&&n.mixIn(e),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var n in e)e.hasOwnProperty(n)&&(this[n]=e[n]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},a=r.WordArray=o.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=null!=n?n:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var n=this.words,t=e.words,i=this.sigBytes,r=e.sigBytes;if(this.clamp(),i%4)for(var o=0;o<r;o++){var a=t[o>>>2]>>>24-o%4*8&255;n[i+o>>>2]|=a<<24-(i+o)%4*8}else for(o=0;o<r;o+=4)n[i+o>>>2]=t[o>>>2];return this.sigBytes+=r,this},clamp:function(){var n=this.words,t=this.sigBytes;n[t>>>2]&=4294967295<<32-t%4*8,n.length=e.ceil(t/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(n){for(var t,i=[],r=function(n){n=n;var t=987654321,i=4294967295;return function(){var r=((t=36969*(65535&t)+(t>>16)&i)<<16)+(n=18e3*(65535&n)+(n>>16)&i)&i;return r/=4294967296,(r+=.5)*(e.random()>.5?1:-1)}},o=0;o<n;o+=4){var s=r(4294967296*(t||e.random()));t=987654071*s(),i.push(4294967296*s()|0)}return new a.init(i,n)}}),s=i.enc={},c=s.Hex={stringify:function(e){for(var n=e.words,t=e.sigBytes,i=[],r=0;r<t;r++){var o=n[r>>>2]>>>24-r%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(e){for(var n=e.length,t=[],i=0;i<n;i+=2)t[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new a.init(t,n/2)}},u=s.Latin1={stringify:function(e){for(var n=e.words,t=e.sigBytes,i=[],r=0;r<t;r++){var o=n[r>>>2]>>>24-r%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var n=e.length,t=[],i=0;i<n;i++)t[i>>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new a.init(t,n)}},l=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},d=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(n){var t=this._data,i=t.words,r=t.sigBytes,o=this.blockSize,s=r/(4*o),c=(s=n?e.ceil(s):e.max((0|s)-this._minBufferSize,0))*o,u=e.min(4*c,r);if(c){for(var l=0;l<c;l+=o)this._doProcessBlock(i,l);var d=i.splice(0,c);t.sigBytes-=u}return new a.init(d,u)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),h=(r.Hasher=d.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(n,t){return new e.init(t).finalize(n)}},_createHmacHelper:function(e){return function(n,t){return new h.HMAC.init(e,t).finalize(n)}}}),i.algo={});return i}(Math);return e},e.exports=i()},227:function(e,n,t){e.exports=t(228)},228:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(229),o=t.n(r),a=t(230),s=t.n(a),c=t(233),u=t.n(c),l=t(6),d=t(5),h=t.n(d),f=t(9),p=t(4);function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var g="bydata@123456",y=h.a.EVENTS,b=y.NO_BID,_=y.BID_TIMEOUT,w=y.AUCTION_END,m="https://pbjs-stream.bydata.com/topics/prebid",A={},T={to:[],nb:[]},E={};function I(e){S("onAuctionEnd",e);var n=E,t=n.isCorrectOption,i=n.logFrequency,r=Math.floor(1e4*Math.random()+1);S(" value - frequency ",r+"-"+i),setTimeout((function(){var n,o;t&&r<i&&(B.dataProcess(e),n=pbjs.getAllPrebidWinningBids(),o=pbjs.getAllWinningBids(),n&&n.length>0&&n.forEach((function(e){A.auctionData&&A.auctionData.forEach((function(n){n.bids_bid_id===e.requestId&&n.br_size===e.size&&(n.is_prebid_winning_bid=1)}))})),o&&o.length>0&&o.forEach((function(e){A.auctionData&&A.auctionData.forEach((function(n){n.bids_bid_id===e.requestId&&n.br_size===e.size&&(n.is_winning_bid=1)}))})),B.sendPayload())}),500)}var B=v(Object(l.a)({url:m,analyticsType:"endpoint"}),{track:function(e){var n,t=e.eventType,i=e.args;switch(t){case b:n=i,A.visitor_data&&n&&T.nb.push(n);break;case _:!function(e){A.visitor_data&&e&&e.length>0&&(T.to=e)}(i);break;case w:I(i)}}});function S(e,n){Object(i.logInfo)(O(e),n)}function O(e){return"Bydata Prebid Analytics: "+e}B.originEnableAnalytics=B.enableAnalytics,B.enableAnalytics=function(e){this.initConfig(e)&&(S("initiated:",E),E.isCorrectOption&&B.getVisitorData(),B.originEnableAnalytics(e))},B.initConfig=function(e){var n,t=!0;return E={},S("initConfig",e),E.options=Object(i.deepClone)(e.options),E.clientId=E.options.clientId||null,E.logFrequency=E.options.logFrequency,E.clientId||(n='"options.clientId" should not empty!!',Object(i.logError)(O(n)),t=!1),E.isCorrectOption=t,this.initOptions=E,t},B.getVisitorData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.userId?e:{},t={options:[],header:[window.navigator.platform,window.navigator.userAgent,window.navigator.appVersion,window.navigator.vendor,window.opera],dataos:[{name:"Windows Phone",value:"Windows Phone",version:"OS"},{name:"Windows",value:"Win",version:"NT"},{name:"iPhone",value:"iPhone",version:"OS"},{name:"iPad",value:"iPad",version:"OS"},{name:"Kindle",value:"Silk",version:"Silk"},{name:"Android",value:"Android",version:"Android"},{name:"PlayBook",value:"PlayBook",version:"OS"},{name:"BlackBerry",value:"BlackBerry",version:"/"},{name:"Macintosh",value:"Mac",version:"OS X"},{name:"Linux",value:"Linux",version:"rv"},{name:"Palm",value:"Palm",version:"PalmOS"}],databrowser:[{name:"Chrome",value:"Chrome",version:"Chrome"},{name:"Firefox",value:"Firefox",version:"Firefox"},{name:"Safari",value:"Safari",version:"Version"},{name:"Internet Explorer",value:"MSIE",version:"MSIE"},{name:"Opera",value:"Opera",version:"Opera"},{name:"BlackBerry",value:"CLDC",version:"CLDC"},{name:"Mozilla",value:"Mozilla",version:"Mozilla"}],init:function(){var e=this.header.join(" ");return{os:this.matchItem(e,this.dataos),browser:this.matchItem(e,this.databrowser)}},matchItem:function(e,n){var t,i,r,o=0,a=0;for(o=0;o<n.length;o+=1)if(new RegExp(n[o].value,"i").test(e)){if(t=new RegExp(n[o].version+"[- /:;]([\\d._]+)","i"),r="",(i=e.match(t))&&i[1]&&(i=i[1]),i)for(i=i.split(/[._]+/),a=0;a<i.length;a+=1)r+=0===a?i[a]+".":i[a];else r="0";return{name:n[o].name,version:parseFloat(r)}}return{name:"unknown",version:0}}};function i(){try{var e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=-177&e[6]|64,e[8]=-65&e[8]|128;var n=Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("");return n.slice(0,5)+"-"+n.slice(5,9)+"-"+n.slice(9,13)+"-"+n.slice(13,18)}catch(e){return""}}function r(e){var n=o.a.stringify(e);return n=(n=(n=n.replace(/=+$/,"")).replace(/\+/g,"-")).replace(/\//g,"_")}function a(e){var n=r(u.a.parse(JSON.stringify({alg:"HS256",typ:"JWT"})))+"."+r(u.a.parse(JSON.stringify(e))),t=s()(n,g);return n+"."+(t=r(t))}var c=E,l=c.clientId,d=window.localStorage.getItem("userId");d||(d=i(),window.localStorage.setItem("userId",d));var h={width:window.screen.width,height:window.screen.height},f=window.navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)?"Mobile":"Desktop",p=t.init();n.userId||(n.userId=d,n.client_id=l,n.plateform_name=p.os.name,n.os_version=p.os.version,n.browser_name=p.browser.name,n.browser_version=p.browser.version,n.screen_size=h,n.device_type=f,n.time_zone=window.Intl.DateTimeFormat().resolvedOptions().timeZone);var v=a(n);return A.visitor_data=v,v},B.dataProcess=function(e){A.auction_id=e.auctionId,A.auction_start=e.timestamp,A.auctionData=[];var n=[],t=[];return e.bidderRequests&&e.bidderRequests.forEach((function(e){var t={bids:[]};e.bids.forEach((function(e){var n={};n.adUnitCode=e.adUnitCode,n.sizes=e.sizes,n.bidder=e.bidder,n.bidId=e.bidId,n.mediaTypes=[];var i=e.mediaTypes.banner?"display":"video";n.mediaTypes.push(i),t.bids.push(n)})),n.push(t)})),e.bidsReceived&&e.bidsReceived.forEach((function(e){var n=e.requestId,i=e.bidder,r=e.width,o=e.height,a=e.cpm,s=e.currency,c=e.timeToRespond,u=e.adUnitCode;t.push({requestId:n,bidder:i,width:r,height:o,cpm:a,currency:s,timeToRespond:c,adUnitCode:u})})),n.length>0&&n.forEach((function(e){e.bids.forEach((function(e){var n=e.adUnitCode,t=e.sizes,i=e.bidder,r=e.bidId,o=e.mediaTypes;t.forEach((function(e){var t=e[0]+"x"+e[1];A.auctionData.push({adUnit:n,size:t,media_type:o[0],bids_bidder:i,bids_bid_id:r})}))}))})),t.length>0&&t.forEach((function(e){var n=e.requestId,t=e.bidder,i=e.width,r=e.height,o=e.cpm,a=e.currency,s=e.timeToRespond;A.auctionData.forEach((function(e){e.bids_bid_id===n&&e.size===i+"x"+r&&(e.br_request_id=n,e.br_bidder=t,e.br_pb_mg=o,e.br_currency=a,e.br_time_to_respond=s,e.br_size=i+"x"+r)}))})),A.auctionData&&A.auctionData.length>0&&A.auctionData.forEach((function(e){T.to.forEach((function(n){e.bids_bid_id===n.bidId&&(e.is_timeout=1)})),T.nb.forEach((function(n){e.adUnit===n.adUnitCode&&e.bids_bidder===n.bidder&&e.bids_bid_id===n.bidId&&(e.is_nobid=1)}))})),A},B.sendPayload=function(){var e={records:[{value:A}]},n=JSON.stringify(e);S(" sendPayload ",JSON.stringify(e)),Object(p.a)(m,void 0,n,{contentType:"application/vnd.kafka.json.v2+json",method:"POST",withCredentials:!0})},f.default.registerAnalyticsAdapter({adapter:B,code:"bydata"}),n.default=B,window.pbjs.installedModules.push("byDataAnalyticsAdapter")},229:function(e,n,t){var i;i=function(e){var n,t;return t=(n=e).lib.WordArray,n.enc.Base64={stringify:function(e){var n=e.words,t=e.sigBytes,i=this._map;e.clamp();for(var r=[],o=0;o<t;o+=3)for(var a=(n[o>>>2]>>>24-o%4*8&255)<<16|(n[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|n[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;s<4&&o+.75*s<t;s++)r.push(i.charAt(a>>>6*(3-s)&63));var c=i.charAt(64);if(c)for(;r.length%4;)r.push(c);return r.join("")},parse:function(e){var n=e.length,i=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var o=0;o<i.length;o++)r[i.charCodeAt(o)]=o}var a=i.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(n=s)}return function(e,n,i){for(var r=[],o=0,a=0;a<n;a++)if(a%4){var s=i[e.charCodeAt(a-1)]<<a%4*2,c=i[e.charCodeAt(a)]>>>6-a%4*2;r[o>>>2]|=(s|c)<<24-o%4*8,o++}return t.create(r,o)}(e,n,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},e.enc.Base64},e.exports=i(t(22))},230:function(e,n,t){var i;i=function(e){return e.HmacSHA512},e.exports=i(t(22),t(42),t(231),t(232))},231:function(e,n,t){var i;i=function(e){return function(){var n=e,t=n.lib.Hasher,i=n.x64,r=i.Word,o=i.WordArray,a=n.algo;function s(){return r.create.apply(r,arguments)}var c=[s(1116352408,3609767458),s(1899447441,602891725),s(3049323471,3964484399),s(3921009573,2173295548),s(961987163,4081628472),s(1508970993,3053834265),s(2453635748,2937671579),s(2870763221,3664609560),s(3624381080,2734883394),s(310598401,1164996542),s(607225278,1323610764),s(1426881987,3590304994),s(1925078388,4068182383),s(2162078206,991336113),s(2614888103,633803317),s(3248222580,3479774868),s(3835390401,2666613458),s(4022224774,944711139),s(264347078,2341262773),s(604807628,2007800933),s(770255983,1495990901),s(1249150122,1856431235),s(1555081692,3175218132),s(1996064986,2198950837),s(2554220882,3999719339),s(2821834349,766784016),s(2952996808,2566594879),s(3210313671,3203337956),s(3336571891,1034457026),s(3584528711,2466948901),s(113926993,3758326383),s(338241895,168717936),s(666307205,1188179964),s(773529912,1546045734),s(1294757372,1522805485),s(1396182291,2643833823),s(1695183700,2343527390),s(1986661051,1014477480),s(2177026350,1206759142),s(2456956037,344077627),s(2730485921,1290863460),s(2820302411,3158454273),s(3259730800,3505952657),s(3345764771,106217008),s(3516065817,3606008344),s(3600352804,1432725776),s(4094571909,1467031594),s(275423344,851169720),s(430227734,3100823752),s(506948616,1363258195),s(659060556,3750685593),s(883997877,3785050280),s(958139571,3318307427),s(1322822218,3812723403),s(1537002063,2003034995),s(1747873779,3602036899),s(1955562222,1575990012),s(2024104815,1125592928),s(2227730452,2716904306),s(2361852424,442776044),s(2428436474,593698344),s(2756734187,3733110249),s(3204031479,2999351573),s(3329325298,3815920427),s(3391569614,3928383900),s(3515267271,566280711),s(3940187606,3454069534),s(4118630271,4000239992),s(116418474,1914138554),s(174292421,2731055270),s(289380356,3203993006),s(460393269,320620315),s(685471733,587496836),s(852142971,1086792851),s(1017036298,365543100),s(1126000580,2618297676),s(1288033470,3409855158),s(1501505948,4234509866),s(1607167915,987167468),s(1816402316,1246189591)],u=[];!function(){for(var e=0;e<80;e++)u[e]=s()}();var l=a.SHA512=t.extend({_doReset:function(){this._hash=new o.init([new r.init(1779033703,4089235720),new r.init(3144134277,2227873595),new r.init(1013904242,4271175723),new r.init(2773480762,1595750129),new r.init(1359893119,2917565137),new r.init(2600822924,725511199),new r.init(528734635,4215389547),new r.init(1541459225,327033209)])},_doProcessBlock:function(e,n){for(var t=this._hash.words,i=t[0],r=t[1],o=t[2],a=t[3],s=t[4],l=t[5],d=t[6],h=t[7],f=i.high,p=i.low,v=r.high,g=r.low,y=o.high,b=o.low,_=a.high,w=a.low,m=s.high,A=s.low,T=l.high,E=l.low,I=d.high,B=d.low,S=h.high,O=h.low,D=f,x=p,C=v,j=g,P=y,z=b,U=_,q=w,M=m,k=A,N=T,R=E,H=I,W=B,F=S,J=O,V=0;V<80;V++){var L=u[V];if(V<16)var K=L.high=0|e[n+2*V],G=L.low=0|e[n+2*V+1];else{var X=u[V-15],Q=X.high,$=X.low,Z=(Q>>>1|$<<31)^(Q>>>8|$<<24)^Q>>>7,Y=($>>>1|Q<<31)^($>>>8|Q<<24)^($>>>7|Q<<25),ee=u[V-2],ne=ee.high,te=ee.low,ie=(ne>>>19|te<<13)^(ne<<3|te>>>29)^ne>>>6,re=(te>>>19|ne<<13)^(te<<3|ne>>>29)^(te>>>6|ne<<26),oe=u[V-7],ae=oe.high,se=oe.low,ce=u[V-16],ue=ce.high,le=ce.low;K=(K=(K=Z+ae+((G=Y+se)>>>0<Y>>>0?1:0))+ie+((G+=re)>>>0<re>>>0?1:0))+ue+((G+=le)>>>0<le>>>0?1:0),L.high=K,L.low=G}var de,he=M&N^~M&H,fe=k&R^~k&W,pe=D&C^D&P^C&P,ve=x&j^x&z^j&z,ge=(D>>>28|x<<4)^(D<<30|x>>>2)^(D<<25|x>>>7),ye=(x>>>28|D<<4)^(x<<30|D>>>2)^(x<<25|D>>>7),be=(M>>>14|k<<18)^(M>>>18|k<<14)^(M<<23|k>>>9),_e=(k>>>14|M<<18)^(k>>>18|M<<14)^(k<<23|M>>>9),we=c[V],me=we.high,Ae=we.low,Te=F+be+((de=J+_e)>>>0<J>>>0?1:0),Ee=ye+ve;F=H,J=W,H=N,W=R,N=M,R=k,M=U+(Te=(Te=(Te=Te+he+((de+=fe)>>>0<fe>>>0?1:0))+me+((de+=Ae)>>>0<Ae>>>0?1:0))+K+((de+=G)>>>0<G>>>0?1:0))+((k=q+de|0)>>>0<q>>>0?1:0)|0,U=P,q=z,P=C,z=j,C=D,j=x,D=Te+(ge+pe+(Ee>>>0<ye>>>0?1:0))+((x=de+Ee|0)>>>0<de>>>0?1:0)|0}p=i.low=p+x,i.high=f+D+(p>>>0<x>>>0?1:0),g=r.low=g+j,r.high=v+C+(g>>>0<j>>>0?1:0),b=o.low=b+z,o.high=y+P+(b>>>0<z>>>0?1:0),w=a.low=w+q,a.high=_+U+(w>>>0<q>>>0?1:0),A=s.low=A+k,s.high=m+M+(A>>>0<k>>>0?1:0),E=l.low=E+R,l.high=T+N+(E>>>0<R>>>0?1:0),B=d.low=B+W,d.high=I+H+(B>>>0<W>>>0?1:0),O=h.low=O+J,h.high=S+F+(O>>>0<J>>>0?1:0)},_doFinalize:function(){var e=this._data,n=e.words,t=8*this._nDataBytes,i=8*e.sigBytes;return n[i>>>5]|=128<<24-i%32,n[30+(i+128>>>10<<5)]=Math.floor(t/4294967296),n[31+(i+128>>>10<<5)]=t,e.sigBytes=4*n.length,this._process(),this._hash.toX32()},clone:function(){var e=t.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32});n.SHA512=t._createHelper(l),n.HmacSHA512=t._createHmacHelper(l)}(),e.SHA512},e.exports=i(t(22),t(42))},232:function(e,n,t){var i;i=function(e){var n,t,i;t=(n=e).lib.Base,i=n.enc.Utf8,n.algo.HMAC=t.extend({init:function(e,n){e=this._hasher=new e.init,"string"==typeof n&&(n=i.parse(n));var t=e.blockSize,r=4*t;n.sigBytes>r&&(n=e.finalize(n)),n.clamp();for(var o=this._oKey=n.clone(),a=this._iKey=n.clone(),s=o.words,c=a.words,u=0;u<t;u++)s[u]^=1549556828,c[u]^=909522486;o.sigBytes=a.sigBytes=r,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var n=this._hasher,t=n.finalize(e);return n.reset(),n.finalize(this._oKey.clone().concat(t))}})},e.exports=i(t(22))},233:function(e,n,t){var i;i=function(e){return e.enc.Utf8},e.exports=i(t(22))},42:function(e,n,t){var i;i=function(e){var n,t,i,r,o;return t=(n=e).lib,i=t.Base,r=t.WordArray,(o=n.x64={}).Word=i.extend({init:function(e,n){this.high=e,this.low=n}}),o.WordArray=i.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=null!=n?n:8*e.length},toX32:function(){for(var e=this.words,n=e.length,t=[],i=0;i<n;i++){var o=e[i];t.push(o.high),t.push(o.low)}return r.create(t,this.sigBytes)},clone:function(){for(var e=i.clone.call(this),n=e.words=this.words.slice(0),t=n.length,r=0;r<t;r++)n[r]=n[r].clone();return e}}),e},e.exports=i(t(22))},6:function(e,n,t){"use strict";n.a=function(e){var n,t=e.url,i=e.analyticsType,r=e.global,l=e.handler,O=[],D=0,x=!0;(function(){if(x){for(var e=0;e<O.length;e++)O[e]();O.push=function(e){e()},x=!1}Object(a.logMessage)("event count sent to ".concat(r,": ").concat(D))})();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===S&&window[r](l,n,t);this.getAdapterType()===B&&C.apply(void 0,arguments)},enqueue:j,enableAnalytics:P,disableAnalytics:function(){Object(a._each)(n,(function(e,n){u.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:P},getAdapterType:function(){return i},getGlobal:function(){return r},getHandler:function(){return l},getUrl:function(){return t}};function C(e){var n=e.eventType,i=e.args,r=e.callback;Object(o.a)(t,r,JSON.stringify({eventType:n,args:i}))}function j(e){var n=e.eventType,t=e.args,i=this;r&&window[r]&&n&&t?this.track({eventType:n,args:t}):O.push((function(){D++,i.track({eventType:n,args:t})}))}function P(e){var t,i=this,o=this;"object"!==c(e)||"object"!==c(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(u.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==v&&j.call(o,{eventType:n,args:t})}})),s(t={},f,(function(e){return i.enqueue({eventType:f,args:e})})),s(t,p,(function(e){return i.enqueue({eventType:p,args:e})})),s(t,g,(function(e){return i.enqueue({eventType:g,args:e})})),s(t,y,(function(e){return i.enqueue({eventType:y,args:e})})),s(t,v,(function(e){return i.enqueue({eventType:v,args:e})})),s(t,b,(function(e){return i.enqueue({eventType:b,args:e})})),s(t,_,(function(e){return i.enqueue({eventType:_,args:e})})),s(t,w,(function(e){return i.enqueue({eventType:w,args:e})})),s(t,m,(function(e){return i.enqueue({eventType:m,args:e})})),s(t,h,(function(e){return i.enqueue({eventType:h,args:e})})),s(t,A,(function(e){return i.enqueue({eventType:A,args:e})})),s(t,T,(function(e){return i.enqueue({eventType:T,args:e})})),s(t,E,(function(e){return i.enqueue({eventType:E,args:e})})),s(t,I,(function(e){return i.enqueue({eventType:I,args:e})})),s(t,d,(function(n){n.config="object"===c(e)&&e.options||{},i.enqueue({eventType:d,args:n})})),n=t,Object(a._each)(n,(function(e,n){u.on(n,e)}))):Object(a.logMessage)('Analytics adapter for "'.concat(r,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return Object(a.logMessage)('Analytics adapter for "'.concat(r,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var i=t(5),r=t.n(i),o=t(4),a=t(0);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=t(10),l=r.a.EVENTS,d=l.AUCTION_INIT,h=l.AUCTION_END,f=l.REQUEST_BIDS,p=l.BID_REQUESTED,v=l.BID_TIMEOUT,g=l.BID_RESPONSE,y=l.NO_BID,b=l.BID_WON,_=l.BID_ADJUSTMENT,w=l.BIDDER_DONE,m=l.SET_TARGETING,A=l.AD_RENDER_FAILED,T=l.AD_RENDER_SUCCEEDED,E=l.AUCTION_DEBUG,I=l.ADD_AD_UNITS,B="endpoint",S="bundle"}},[227]);