;
(self.AMP=self.AMP||[]).push({m:1,v:"2410161801000",n:"amp-youtube",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;function n(){return i||(i=Promise.resolve(void 0))}var e=class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};function s(t){return new Promise((i=>{i(t())}))}var{isArray:o}=Array;function r(t){return o(t)?t:[t]}var{hasOwnProperty:a,toString:l}=Object.prototype;function h(t){return"[object Object]"===l.call(t)}function u(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function c(t){return"number"==typeof t&&isFinite(t)}function d(t,i,n,e,s,o,r,a,l,h,u){return t}function f(t,i){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==i||i(t),null}}function m(t){return(t.ownerDocument||t).defaultView}var p,v,_={bubbles:!0,cancelable:!0};function g(t){var i;null===(i=t.parentElement)||void 0===i||i.removeChild(t)}function P(t,i,n,e){const s=n||{};d(t.ownerDocument);const{bubbles:o,cancelable:r}=e||_,a=new MessageEvent(i,{data:s,bubbles:o,cancelable:r});t.dispatchEvent(a)}function A(t,i){t.classList.add("i-amphtml-fill-content"),i&&t.classList.add("i-amphtml-replaced-content")}function y(t,i,n,e){const s=r(t);for(const t of s){const s=i.getAttribute(t);null!==s?n.setAttribute(t,s):e&&n.removeAttribute(t)}}function b(t){const i=t.ownerDocument||t;return p&&p.ownerDocument===i||(p=i.createElement("div")),M}function M(t){return function(t,i){if(d(1===i.length),d(Array.isArray(i)||(n=i,a.call(n,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){const n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return i[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=i[0];var n;const e=t.firstElementChild;return d(e),d(!e.nextElementSibling),t.removeChild(e),e}(p,t)}function w(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:n,stack:e}=t,s=new Error(n);for(const i in t)s[i]=t[i];return s.stack=e,s}function E(t){let i=null,n="";for(const t of arguments)t instanceof Error&&!i?i=w(t):(n&&(n+=" "),n+=t);return i?n&&(i.message=n+": "+i.message):i=new Error(n),i}function I(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function R(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=E.apply(null,arguments);setTimeout((()=>{throw I(i),i}))}(t)}}function T(t){const i=E.apply(null,arguments);return i.expected=!0,i}function V(t,...i){I(T.apply(null,i))}var k=["Webkit","webkit","Moz","moz","ms","O","o"],C={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function S(t,i,n,e,s){const o=function(t,i,n){if(i.startsWith("--"))return i;v||(v=u());let e=v[i];if(!e||n){if(e=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),s=function(t,i){for(let n=0;n<k.length;n++){const e=k[n]+i;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[s]&&(e=s)}n||(v[i]=e)}return e}(t.style,i,s);if(!o)return;const r=e?n+e:n;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return k.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(o),r)}function x(t,i){for(const n in i)S(t,n,i[n])}var q=/vertical/,O=new WeakMap,$=new WeakMap,F=new WeakMap;function j(t){let i=O.get(t);return i||(i=new t.ResizeObserver(U),O.set(t,i)),i}function U(t){const i=new Set;for(let n=t.length-1;n>=0;n--){const e=t[n],{target:s}=e;if(i.has(s))continue;i.add(s);const o=$.get(s);if(o){F.set(s,e);for(let t=0;t<o.length;t++){const{callback:i,type:n}=o[t];Y(n,i,e)}}}}function Y(t,i,n){if(0==t){const{contentRect:t}=n,{height:e,width:s}=t;R(i,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=n;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=n,i=m(t),s=q.test(function(t,i){return t.getComputedStyle(i)||C}(i,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let a,l;s?(l=r,a=o):(a=r,l=o),e={inlineSize:a,blockSize:l}}R(i,e)}}function z(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var N=self.__AMP_LOG;function D(t){return N.user||(N.user=L()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(N.user.win,t)?N.userForEmbed||(N.userForEmbed=L()):N.user}function L(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function B(t,i,n,e,s,o,r,a,l,h,u){return t}function W(t,i,n,e,s,o,r,a,l,h,u){return D().assert(t,i,n,e,s,o,r,a,l,h,u)}function J(t,i){return Q(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function H(t,i){return Q(K(G(t)),i)}function Z(t,i){const n=K(G(t));return tt(n,i)?Q(n,i):null}function G(t){return t.nodeType?(i=m(t),J(i,"ampdoc")).getAmpDoc(t):t;var i}function K(t){const i=G(t);return i.isSingleDoc()?i.win:i}function Q(t,i){B(tt(t,i));const n=X(t)[i];return n.obj||(B(n.ctor),B(n.context),n.obj=new n.ctor(n.context),B(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function X(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function tt(t,i){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var it,nt,et,st=t=>Z(t,"action"),ot=t=>J(t,"platform"),rt=t=>Q(t,"timer"),at=t=>Z(t,"url"),lt=t=>H(t,"viewport");function ht(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=n,r=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function ut(t){var i;let n=null===(i=it)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){it||(it=new WeakMap,nt=new WeakMap),d(nt);let i=nt.get(t);return i||(i=ht((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];n.has(o)||(n.add(o),d(i),i.unobserve(o),d(it),null===(e=it.get(o))||void 0===e||e.resolve(t[s]),it.delete(o))}}),t,{needsRootBounds:!0}),nt.set(t,i)),i}(m(t));d(it),i.observe(t),n=new e,it.set(t,n)}return n.promise}function ct(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const i=t.document.createElement("video");var n;return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,x(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,s((()=>n.play())).catch((()=>{})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function dt(t){return t.querySelector("video, iframe")}function ft(t,i){const n=s((()=>t.play(!!i)));return n.catch((t=>{V(0,t)})),n}function mt(t,i,n,e){let s=t,o=n,r=t=>{try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}};const a=function(){if(void 0!==et)return et;et=!1;try{const t={get capture(){return et=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return et}(),l=!(null==e||!e.capture);return s.addEventListener(i,r,a?e:l),()=>{null==s||s.removeEventListener(i,r,a?e:l),o=null,s=null,r=null}}function pt(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}function vt(t,i,n,e){return mt(t,i,n,e)}function _t(t){return t.data}var gt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Pt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function At(t,i,n){if(i[n])return i[n];const e=t.querySelector(`style[${n}], link[${n}]`);return e?(i[n]=e,e):null}function yt(t,i){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==i)return!0;return!1}var bt=class{constructor(){this.qv=!1,this.Ov=new class{constructor(){this.ln=null}add(t){return this.ln||(this.ln=[]),this.ln.push(t),()=>{this.remove(t)}}remove(t){this.ln&&function(t,i){const n=t.indexOf(i);-1!=n&&t.splice(n,1)}(this.ln,t)}removeAll(){this.ln&&(this.ln.length=0)}fire(t){if(this.ln)for(const i of this.ln.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.ln)||void 0===i?void 0:i.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.Ov.add(t)}beginSession(){this.qv=!0}endSession(){this.qv&&this.Ov.fire(),this.qv=!1}isSessionActive(){return this.qv}},Mt={"title":"","artist":"","album":"","artwork":[{"src":""}]},wt="registered",Et="load",It="playing",Rt="pause",Tt="ended",Vt="muted",kt="unmuted",Ct="ad_start",St="ad_end",xt="playing_manual",qt="paused",Ot="video-play",$t="user-interacted";function Ft(t){t.signals().signal($t)}var jt="video-manager",Ut=(t,i)=>!!t&&(t.video===i||t.video.element===i);function Yt(t,i){const n=i.top+i.height/2,e=t.getSize().height/2;return Math.abs(n-e)}function zt(t){return 10*t*5}var Nt=t=>!!t&&!isNaN(t)&&t>1;function Dt(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),P(e.element,i,t)}))}function Lt(t){!function(t,i,e,s){const r=G(t),a=K(r);!function(t,i,n,e,s,o){const r=X(t);let a=r[n];a||(a=r[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&Q(t,n))}(a,r,i,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=z((()=>function(t){!function(t,i,n,e,s){const o=t.getHeadNode(),r=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=u());const o=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=n?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const n=At(t,s,r);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const a=(t.ownerDocument||t).createElement("style");a.textContent=i;let l=null;return n?a.setAttribute("amp-runtime",""):o?(a.setAttribute("amp-extension",e||""),l=At(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),l=t.lastChild),function(t,i,n=null){if(!n)return void function(t,i){t.insertBefore(i,t.firstChild)}(t,i);const e=n.nextSibling;t.insertBefore(i,e)}(t,a,l),r&&(s[r]=a),a}(o,function(t,i){const n=t.__AMP_CSS_TR;return n?n(i):i}(o,i),e||!1,s||null);if(n){const i=t.getRootNode();if(yt(i,r))return n(r),r;const e=setInterval((()=>{yt(i,r)&&(clearInterval(e),n(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.Fv=null,this.$v=null,this.zv=null,this.Ne=rt(t.win),this.jv=st(t.getHeadNode()),this.Yv=()=>this.Dv(),this.Nv=z((()=>new class{constructor(t,i){this.Wv=i,this.zi=t,this.Bv=null,this.Uv=null,this.Fv=[],this.Hv=[],this.Jv=()=>this.Gv(),this.Zv=t=>this.Kv(t)==xt,this.Qv=(t,i)=>this.Xv(t,i),this.a_(),this.l_()}dispose(){this.Hv.forEach((t=>t())),this.Hv.length=0}register(t){const{video:i}=t,{element:n}=i;this.c_(n)&&(this.Fv.push(i),vt(n,Rt,this.Jv),vt(n,It,this.Jv),vt(n,Tt,this.Jv),i.signals().whenSignal($t).then(this.Jv),this.Gv())}l_(){const t=this.zi.getRootNode(),i=()=>this.d_();this.Hv.push(vt(t,"webkitfullscreenchange",i),vt(t,"mozfullscreenchange",i),vt(t,"fullscreenchange",i),vt(t,"MSFullscreenChange",i))}isInLandscape(){return(t=this.zi.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}c_(t){if("video"==dt(t).tagName.toLowerCase())return!0;const i=ot(this.zi.win);return!i.isIos()&&!i.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}d_(){this.Bv=null}a_(){const{win:t}=this.zi,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.Hv.push(vt(t,"change",(()=>this.f_())))}this.Hv.push(vt(t,"orientationchange",(()=>this.f_())))}f_(){this.isInLandscape()?null!=this.Uv&&this.m_(this.Uv):this.Bv&&this.p_(this.Bv)}m_(t){const i=ot(this.zi.win);this.Bv=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.v_(t).then((()=>t.fullscreenEnter()))}p_(t){this.Bv=null,this.v_(t,"center").then((()=>t.fullscreenExit()))}v_(t,i=null){const{element:e}=t,s=this.__();return this.g_().then((()=>ut(e))).then((({boundingClientRect:t})=>{const{bottom:o,top:r}=t,a=s.getSize().height;if(r>=0&&o<=a)return n();const l=i||(o>a?"bottom":"top");return s.animateScrollIntoView(e,l)}))}__(){return lt(this.zi)}g_(){return rt(this.zi.win).promise(330)}Gv(){if(this.isInLandscape())return Promise.resolve(this.Uv);this.Uv=null;const t=this.Fv.filter(this.Zv).map((t=>ut(t.element)));return Promise.all(t).then((t=>{const i=t.sort(this.Qv)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((t=>this.Uv=t)):this.Uv}))}Xv(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=i,r=e-o;if(Math.abs(r)>.1)return r;const a=lt(this.zi),l=Yt(a,n),h=Yt(a,s);return l<h||l>h?l-h:n.top-s.top}Kv(t){return this.Wv.getPlayingState(t)}}(this.ampdoc,this))),this.Ne.delay(this.Yv,1e3)}dispose(){if(this.Nv().dispose(),this.$v.disconnect(),this.$v=null,this.Fv)for(let t=0;t<this.Fv.length;t++)this.Fv[t].dispose()}Dv(){for(let t=0;t<this.Fv.length;t++){const i=this.Fv[t];i.getPlayingState()!==qt&&(Dt(i,"video-seconds-played"),this.P_(i))}this.Ne.delay(this.Yv,1e3)}P_(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(c(n)&&c(e)&&e>0){const s=n/e,o=pt(this.ampdoc.win,`${jt}.${i}`,{"time":n,"percent":s});this.jv.trigger(t.video.element,i,o,1)}}register(t){B(t);const i=t;if(this.y_(t),!t.supportsPlatform())return;if(this.A_(t))return;if(!this.$v){const t=t=>t.forEach((({isIntersecting:t,target:i})=>{this.b_(i).updateVisibility(t)}));this.$v=ht(t,this.ampdoc.win,{threshold:.5})}this.$v.observe(i.element),vt(i.element,"reloaded",(()=>n.videoLoaded())),this.Fv=this.Fv||[];const n=new class{constructor(t,i){this.Wv=t,this.zi=t.ampdoc,this.video=i,this.M_=!0,this.w_=!1,this.rg=!1,this.E_=!1,this._s=!1,this.T_=new bt,this.T_.onSessionEnd((()=>Dt(this,"video-session"))),this.R_=new bt,this.R_.onSessionEnd((()=>Dt(this,"video-session-visible"))),this.I_=z((()=>new class{constructor(t,i){this.Ne=rt(t),this.V_=i,this.Hv=null,this.k_=0,this.q_=0}start(){const{element:t}=this.V_.video;this.stop(),this.Hv=this.Hv||[],this.S_()?this.x_(this.q_):this.Hv.push(function(t,i,n,e){let s=n;const o=mt(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.S_()&&this.x_(this.q_)}))),this.Hv.push(vt(t,Tt,(()=>{this.S_()&&this.C_(100)})))}stop(){if(this.Hv){for(;this.Hv.length>0;)this.Hv.pop()();this.q_++}}S_(){const{video:t}=this.V_,i=t.getDuration();if(!Nt(i))return!1;if(zt(i)<250){const i=Math.ceil(5);this.O_("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}O_(...t){D().warn.apply(D(),[jt].concat(t))}x_(t){if(t!=this.q_)return;const{V_:i,Ne:n}=this,{video:e}=i,s=()=>this.x_(t);if(i.getPlayingState()==qt)return void n.delay(s,500);const o=e.getDuration();if(!Nt(o))return void n.delay(s,500);const r=(h=zt(o),d(!0),Math.min(Math.max(h,250),4e3)),a=e.getCurrentTime()/o*100,l=5*Math.floor(a/5);var h;B(c(l)),this.C_(l),n.delay(s,r)}C_(t){t<=0||this.k_!=t&&(this.k_=t,this.F_(t))}F_(t){Dt(this.V_,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.zi.win,this))),this.z_=!1,this.j_=!1,this.Y_=null,this.Bt=!1,this.L_=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Wv.installAutoplayStyles(),this.D_=Mt,this.N_=()=>{ft(this.video,!1)},this.W_=()=>{this.video.pause()},vt(i.element,Et,(()=>this.videoLoaded())),vt(i.element,Rt,(()=>this.B_())),vt(i.element,"play",(()=>{this.L_=!0,Dt(this,Ot)})),vt(i.element,It,(()=>this.U_())),vt(i.element,Vt,(()=>this.Bt=!0)),vt(i.element,kt,(()=>{this.Bt=!1,this.Wv.pauseOtherVideos(this)})),vt(i.element,"amp:video:tick",(t=>{const i=_t(t),n=i.eventType;n&&this.H_(n,i.vars)})),vt(i.element,Tt,(()=>{this.E_=!1,Dt(this,"video-ended")})),vt(i.element,Ct,(()=>{this.E_=!0,Dt(this,"video-ad-start")})),vt(i.element,St,(()=>{this.E_=!1,Dt(this,"video-ad-end")})),i.signals().whenSignal(wt).then((()=>this.J_())),this.G_=z((()=>{const t="firstPlay",i=pt(this.zi.win,t,{}),{element:n}=this.video;st(n).trigger(n,t,i,1)})),this.Z_()}dispose(){this.I_().stop()}H_(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((t=>{n[`custom_${t}`]=i[t]})),Dt(this,"video-hosted-custom",n)}Z_(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.M_=!1,this.rg&&this.video.pause()}))}isMuted(){return this.Bt}isPlaybackManaged(){return this.M_}J_(){this.K_()&&this.Wv.registerForAutoFullscreen(this),this.hasAutoplay&&this.Q_()}K_(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&W(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}U_(){this.rg=!0,this.getPlayingState()==xt&&(this.G_(),this.Wv.pauseOtherVideos(this));const{video:t}=this,{element:i}=t;t.preimplementsMediaSessionAPI()||i.classList.contains("i-amphtml-disable-mediasession")||(function(t,i){const n=at(t);if(i&&i.artwork){const{artwork:t}=i;B(o(t)),t.forEach((t=>{if(t){const i=h(t)?t.src:t;W(n.isProtocolValid(i))}}))}}(i,this.D_),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(Mt),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.zi.win,this.D_,this.N_,this.W_)),this.T_.beginSession(),this._s&&this.R_.beginSession(),this.L_||Dt(this,Ot)}B_(){Dt(this,"video-pause"),this.rg=!1,this.j_?this.j_=!1:this.T_.endSession()}videoLoaded(){this.w_=!0,this.Y_=dt(this.video.element),this.X_(),this.I_().start(),this._s&&this.hg()}X_(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.D_=u(this.video.getMetadata()));const t=this.zi.win.document;if(!this.D_.artwork||0==this.D_.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=f(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||function(t){const i=t.querySelector('meta[property="og:image"]');return i?i.getAttribute("content"):void 0}(t)||function(t){const i=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return i?i.getAttribute("href"):void 0}(t);i&&(this.D_.artwork=[{"src":i}])}if(!this.D_.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Y_.getAttribute("title")||this.Y_.getAttribute("aria-label")||t.title;i&&(this.D_.title=i)}}dg(){this.w_&&this.hg()}hg(){this.zi.isVisible()&&ct(this.zi.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.fg():this.mg()}))}Q_(){this.video.isInteractive()&&this.video.hideControls(),ct(this.zi.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.pg()):this.video.showControls()}))}pg(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get($t))return;const e=function(t,i){const n=b(i)(Pt),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return g(e),n}(0,i),s=[e];function o(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,i)}))}))}function r(i){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",i)))}const a=[vt(i,Rt,(()=>r(!1))),vt(i,It,(()=>r(!0))),vt(i,Ct,(()=>{o(!1),t.showControls()})),vt(i,St,(()=>{o(!0),t.hideControls()})),vt(i,kt,(()=>Ft(t)))];if(t.isInteractive()){t.hideControls();const n=function(t,i){const n=b(t)(gt);return i&&i.title&&n.setAttribute("aria-label",i.title),n}(i,this.D_);s.push(n),a.push(vt(n,"click",(()=>Ft(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{i.appendChild(t)}))})),this.E_&&o(!1),t.signals().whenSignal($t).then((()=>{this.G_(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{g(t)}))}))}))}fg(){this.M_&&(this._s?(this.R_.beginSession(),ft(this.video,!0),this.z_=!0):(this.rg&&this.R_.endSession(),this.video.pause(),this.j_=!0))}mg(){this._s?this.R_.beginSession():this.rg&&this.R_.endSession()}updateVisibility(t){const i=this._s;this._s=t,t!=i&&this.dg()}getPlayingState(){return this.rg?this.rg&&this.z_&&!this.userInteracted()?"playing_auto":xt:qt}isRollingAd(){return this.E_}userInteracted(){return null!=this.video.signals().get($t)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([ct(this.zi.win),ut(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&n,a=t.getPlayedRanges(),l=a.reduce(((t,i)=>t+i[1]-i[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.Bt,"playedTotal":l,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.Fv.push(n);const{element:e}=n.video;P(e,wt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(wt),e.classList.add("i-amphtml-video-interface")}y_(t){n("play",(()=>ft(t,!1))),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=()=>t.fullscreenEnter();function n(i,n){t.registerAction(i,(()=>{Ft(t),n()}),1)}n("fullscreenenter",i),n("fullscreen",i)}A_(t){if(Ut(this.zv,t))return this.zv;for(let i=0;this.Fv&&i<this.Fv.length;i++){const n=this.Fv[i];if(Ut(n,t))return this.zv=n,n}return null}b_(t){return B(this.A_(t))}registerForAutoFullscreen(t){this.Nv().register(t)}vg(){return this.Nv()}getVideoStateProperty(t,i){const e=this.ampdoc.getRootNode(),s=D().assertElement(e.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),o=this.b_(s);return(o?o.getAnalyticsDetails():n()).then((t=>t?t[i]:""))}getPlayingState(t){return this.b_(t).getPlayingState()}isMuted(t){return this.b_(t).isMuted()}userInteracted(t){return this.b_(t).userInteracted()}isRollingAd(t){return this.b_(t).isRollingAd()}pauseOtherVideos(t){this.Fv.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==xt&&i.video.pause()}))}})}(t,"video-manager")}var Bt=["<iframe frameborder=0 allowfullscreen></iframe>"],Wt=["<img placeholder referrerpolicy=origin>"],Jt="amp-youtube",Ht=class extends t.BaseElement{constructor(t){super(t),this.TP=null,this.Ey=null,this.Bt=!1,this.Iy=!1,this.eg=!1,this.tg=null,this.zo=null,this.eP=null,this._g=null,this.gg=null,this.ng=null,this.Vy=null,this.sg=new class{constructor(t){this.yf=t,this.rg=!1,this.og=!1,this.lg=this.lg.bind(this)}updatePlaying(t){t!==this.rg&&(this.rg=t,t?(this.og=!1,function(t,i){!function(t,i,n){const e=t.ownerDocument.defaultView;if(!e)return;let s=$.get(t);if(s||(s=[],$.set(t,s),j(e).observe(t)),!s.some((t=>t.callback===n&&1===t.type))){s.push({type:1,callback:n});const i=F.get(t);i&&setTimeout((()=>Y(1,n,i)))}}(t,0,i)}(this.yf,this.lg)):function(t,i){!function(t,i,n){const e=$.get(t);if(e&&(function(t,i){const e=[];let s=0;for(let i=0;i<t.length;i++){const r=t[i];(o=r).callback===n&&1===o.type?e.push(r):(s<i&&(t[s]=r),s++)}var o;s<t.length&&(t.length=s)}(e),0==e.length)){$.delete(t),F.delete(t);const i=t.ownerDocument.defaultView;i&&j(i).unobserve(t)}}(t,0,i)}(this.yf,this.lg))}lg({blockSize:t,inlineSize:i}){const n=i>0&&t>0;if(n===this.og)return;this.og=n;const e=this.yf;n||e.pause()}}(this.element)}preconnectCallback(t){const i=J(this.win,"preconnect"),n=this.getAmpDoc();i.url(n,this.rP()),i.url(n,"https://i.ytimg.com",t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}renderOutsideViewport(){return.75}buildCallback(){this.TP=this.ky(),this.Ey=this.Cy(),this.Sy();const t=new e;this._g=t.promise,this.gg=t.resolve,Lt(this.element)}xy(){return this.Sy(),`https://www.youtube${"omit"===this.qy()?"-nocookie":""}.com/embed/${this.TP?`${encodeURIComponent(this.TP||"")}?`:`live_stream?channel=${encodeURIComponent(this.Ey||"")}&`}enablejsapi=1&amp=1`}rP(){if(this.eP)return this.eP;let t=this.xy();const{element:i}=this,n=function(t,i,n){const{dataset:e}=t,s={},o=/^param(.+)/;for(const t in e){const i=t.match(o);i&&(s[i[1][0].toLowerCase()+i[1].substr(1)]=e[t])}return s}(i);return"autoplay"in n&&(delete n.autoplay,this.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay")),"playsinline"in n||(n.playsinline="1"),i.hasAttribute("autoplay")&&("iv_load_policy"in n||(n.iv_load_policy="3"),n.playsinline="1"),"loop"in n&&this.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop"),this.Iy=i.hasAttribute("loop")||"loop"in n&&"1"==n.loop,this.eg="playlist"in n,this.Iy&&(this.eg?n.loop="1":"loop"in n&&delete n.loop),t=function(t,i){return function(t,i,n){if(!i)return t;const e=t.split("#",2),s=e[0].split("?",2);let o=s[0]+(s[1]?`?${s[1]}&${i}`:`?${i}`);return o+=e[1]?`#${e[1]}`:"",o}(t,function(t){const i=[];for(const s in t){let o=t[s];if(null!=o){o=r(o);for(let t=0;t<o.length;t++)i.push((n=s,e=o[t],`${encodeURIComponent(n)}=${encodeURIComponent(e)}`))}}var n,e;return i.join("&")}(i))}(t,n),this.eP=t}layoutCallback(){const t=function(t,i,n,e){const{element:s}=t,o=b(s)(Bt);return y(["referrerpolicy"],t.element,o),o.src=at(s).assertHttpsUrl(i,s),A(o),s.appendChild(o),o}(this,this.rP());var i;t.title=this.element.title||"YouTube video",function(t){let i=t.getAttribute("allow")||"";i+="autoplay;",t.setAttribute("allow",i)}(t),this.tg=t,(i=this.element,H(i,"video-manager")).register(this),this.ng=vt(this.win,"message",this.Oy.bind(this)),this.Iy&&!this.eg&&(this.Vy=vt(this.element,Tt,(t=>this.play(!1))));const n=this.loadPromise(this.tg).then((()=>rt(this.win).promise(300))).then((()=>{this.uP(),P(this.element,Et)}));return this.gg(n),n}unlayoutCallback(){this.tg&&(g(this.tg),this.tg=null),this.ng&&this.ng(),this.Vy&&this.Vy();const t=new e;return this._g=t.promise,this.gg=t.resolve,this.sg.updatePlaying(!1),!0}pauseCallback(){this.tg&&this.tg.contentWindow&&this.pause()}mutatedAttributesCallback(t){null!=t["data-videoid"]&&(this.TP=this.ky(),this.tg&&this.Zg("loadVideoById",[this.TP]))}Cy(){return this.element.getAttribute("data-live-channelid")}ky(){return this.element.getAttribute("data-videoid")}qy(){return this.element.getAttribute("credentials")||"include"}Sy(){W(!(this.TP&&this.Ey)&&(this.TP||this.Ey),"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",this.element)}Zg(t,i){this._g.then((()=>{if(this.tg&&this.tg.contentWindow){const n=JSON.stringify({"event":"command","func":t,"args":i||""});this.tg.contentWindow.postMessage(n,"*")}}))}Oy(t){if(!function(t,i,n){return!(!i||t.source!=i.contentWindow)&&"https://www.youtube.com"==t.origin}(t,this.tg))return;const i=_t(t);if(!(n=i)||!h(n)&&!n.startsWith("{"))return;var n;const e=h(s=i)?s:f(s);var s;if(null==e)return;const r=e.event,a=e.info||{},{element:l}=this,u=a.playerState;if("infoDelivery"==r&&null!=u){switch(u){case 1:this.sg.updatePlaying(!0);break;case 2:case 0:this.sg.updatePlaying(!1)}return void function(t,i,n){if(null==n[i])return!1;const e=n[i];(o(e)?e:[e]).forEach((i=>{P(t,i)}))}(l,u.toString(),{1:It,2:Rt,0:[Tt,Rt]})}const c=a.muted;if("infoDelivery"==r&&a&&null!=c){if(this.Bt==c)return;return this.Bt=c,void P(l,(d=this.Bt,d?Vt:kt))}var d;if("initialDelivery"==r)return this.zo=a,void P(l,"loadedmetadata");"infoDelivery"!=r||void 0===a.currentTime||(this.zo.currentTime=a.currentTime)}uP(){this.tg&&this.tg.contentWindow.postMessage(JSON.stringify({"event":"listening"}),"*")}createPlaceholderCallback(){if(!this.TP)return null;const{element:t}=this,i=b(t)(Wt),n=this.TP;return x(i,{"object-fit":"cover","visibility":"hidden"}),y(["aria-label"],this.element,i),i.src=`https://i.ytimg.com/vi/${encodeURIComponent(n)}/sddefault.jpg#404_is_fine`,i.hasAttribute("aria-label")?i.setAttribute("alt","Loading video - "+i.getAttribute("aria-label")):i.setAttribute("alt","Loading video"),A(i),this.loadPromise(i).then((()=>{if(120==i.naturalWidth&&90==i.naturalHeight)throw new Error("sddefault.jpg is not found")})).catch((()=>(i.src=`https://i.ytimg.com/vi/${encodeURIComponent(n)}/hqdefault.jpg`,this.loadPromise(i)))).then((()=>{this.getVsync().mutate((()=>{x(i,{"visibility":""})}))})),i}supportsPlatform(){return!0}isInteractive(){return!0}play(t){this.Zg("playVideo")}pause(){this.Zg("pauseVideo")}mute(){this.Zg("mute")}unmute(){this.Zg("unMute")}showControls(){}hideControls(){}fullscreenEnter(){this.tg&&function(t){const i=t.requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen;i&&i.call(t)}(this.tg)}fullscreenExit(){this.tg&&function(t){const i=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(i)return void i.call(t);const{ownerDocument:n}=t;if(!n)return;const e=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;e&&e.call(n)}(this.tg)}isFullscreen(){return!!this.tg&&function(t){const{webkitDisplayingFullscreen:i}=t;if(void 0!==i)return i;const{ownerDocument:n}=t;return!!n&&(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.webkitCurrentFullScreenElement)==t}(this.tg)}getMetadata(){}preimplementsMediaSessionAPI(){return!0}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return this.zo?this.zo.currentTime:NaN}getDuration(){return this.zo?this.zo.duration:NaN}getPlayedRanges(){return[]}seekTo(t){this.user().error(Jt,"`seekTo` not supported.")}};t.registerElement(Jt,Ht)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-youtube-0.1.mjs.map