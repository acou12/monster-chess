import{S as Ze,i as Qe,s as xe,a as et,e as B,c as tt,b as H,g as de,t as F,d as he,f as J,h as G,j as nt,o as Se,k as rt,l as at,m as ot,n as Ee,p as q,q as st,r as it,u as lt,v as X,w as Z,x as Ae,y as Q,z as x,A as Ge}from"./chunks/index-ab6e1620.js";import{g as Ke,f as Me,s as z,a as Oe,i as ct}from"./chunks/singletons-378e86f1.js";import{_ as ke}from"./chunks/preload-helper-b21cceae.js";import{s as ft}from"./chunks/paths-6cd3a76e.js";function ut(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function pt(r){return r.split("%25").map(decodeURI).join("%25")}function dt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const ht=["href","pathname","search","searchParams","toString","toJSON"];function mt(r,e){const n=new URL(r);for(const i of ht){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return gt(n),n}function gt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const _t="/__data.json";function wt(r){return r.replace(/\/$/,"")+_t}function yt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;pe.delete(i)}return me(r,e)};const pe=new Map;function bt(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${yt(n.body)}"]`);const g=document.querySelector(s);if(g!=null&&g.textContent){const{body:t,...u}=JSON.parse(g.textContent),m=g.getAttribute("data-ttl");return m&&pe.set(e,{body:t,init:u,ttl:1e3*Number(m)}),Promise.resolve(new Response(t,u))}return me(r,n)}function vt(r,e){const n=pe.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);pe.delete(r)}return me(r,e)}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(r){const e=[],n=[],i=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${St(r).map((t,u,m)=>{const d=decodeURIComponent(t),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(_)return e.push(_[1]),n.push(_[2]),i.push(!1),"(?:/(.*))?";const b=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(b)return e.push(b[1]),n.push(b[2]),i.push(!0),"(?:/([^/]+))?";const O=u===m.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((j,V)=>{if(V%2){const T=Et.exec(j);if(!T)throw new Error(`Invalid param: ${j}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ee,Y,se,te]=T;return e.push(se),n.push(te),i.push(!!ee),Y?"(.*?)":ee?"([^/]*)?":"([^/]+?)"}return O&&j.includes(".")&&(s=!1),j.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${s?"/?":""}$`),names:e,types:n,optional:i}}function Rt(r){return!/^\([^)]+\)$/.test(r)}function St(r){return r.slice(1).split("/").filter(Rt)}function Ot(r,{names:e,types:n,optional:i},s){const g={};for(let t=0;t<e.length;t+=1){const u=e[t],m=n[t];let d=r[t+1];if(d||!i[t]){if(m){const _=s[m];if(!_)throw new Error(`Missing "${m}" param matcher`);if(!_(d))return}g[u]=d!=null?d:""}}return g}function $t(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([u,[m,d,_]])=>{const{pattern:b,names:O,types:K,optional:M}=kt(u),j={id:u,exec:V=>{const T=b.exec(V);if(T)return Ot(T,{names:O,types:K,optional:M},i)},errors:[1,..._||[]].map(V=>r[V]),layouts:[0,...d||[]].map(t),leaf:g(m)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function g(u){const m=u<0;return m&&(u=~u),[m,r[u]]}function t(u){return u===void 0?u:[s.has(u),r[u]]}}function jt(r){let e,n,i;var s=r[0][0];function g(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=X(s,g(r))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Ae(e.$$.fragment,t),n=B()},m(t,u){e&&Q(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&4&&(m.data=t[2]),u&2&&(m.form=t[1]),s!==(s=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),he()}s?(e=X(s,g(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&x(e,t)}}}function It(r){let e,n,i;var s=r[0][0];function g(t){return{props:{data:t[2],$$slots:{default:[At]},$$scope:{ctx:t}}}}return s&&(e=X(s,g(r))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Ae(e.$$.fragment,t),n=B()},m(t,u){e&&Q(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&4&&(m.data=t[2]),u&523&&(m.$$scope={dirty:u,ctx:t}),s!==(s=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),he()}s?(e=X(s,g(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&x(e,t)}}}function At(r){let e,n,i;var s=r[0][1];function g(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=X(s,g(r))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Ae(e.$$.fragment,t),n=B()},m(t,u){e&&Q(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&8&&(m.data=t[3]),u&2&&(m.form=t[1]),s!==(s=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),he()}s?(e=X(s,g(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&x(e,t)}}}function ze(r){let e,n=r[5]&&He(r);return{c(){e=rt("div"),n&&n.c(),this.h()},l(i){e=at(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ot(e);n&&n.l(s),s.forEach(G),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,s){H(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=He(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function He(r){let e;return{c(){e=st(r[6])},l(n){e=it(n,r[6])},m(n,i){H(n,e,i)},p(n,i){i&64&&lt(e,n[6])},d(n){n&&G(e)}}}function Lt(r){let e,n,i,s,g;const t=[It,jt],u=[];function m(_,b){return _[0][1]?0:1}e=m(r),n=u[e]=t[e](r);let d=r[4]&&ze(r);return{c(){n.c(),i=et(),d&&d.c(),s=B()},l(_){n.l(_),i=tt(_),d&&d.l(_),s=B()},m(_,b){u[e].m(_,b),H(_,i,b),d&&d.m(_,b),H(_,s,b),g=!0},p(_,[b]){let O=e;e=m(_),e===O?u[e].p(_,b):(de(),F(u[O],1,1,()=>{u[O]=null}),he(),n=u[e],n?n.p(_,b):(n=u[e]=t[e](_),n.c()),J(n,1),n.m(i.parentNode,i)),_[4]?d?d.p(_,b):(d=ze(_),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(_){g||(J(n),g=!0)},o(_){F(n),g=!1},d(_){u[e].d(_),_&&G(i),d&&d.d(_),_&&G(s)}}}function Nt(r,e,n){let{stores:i}=e,{page:s}=e,{components:g}=e,{form:t}=e,{data_0:u=null}=e,{data_1:m=null}=e;nt(i.page.notify);let d=!1,_=!1,b=null;return Se(()=>{const O=i.page.subscribe(()=>{d&&(n(5,_=!0),n(6,b=document.title||"untitled page"))});return n(4,d=!0),O}),r.$$set=O=>{"stores"in O&&n(7,i=O.stores),"page"in O&&n(8,s=O.page),"components"in O&&n(0,g=O.components),"form"in O&&n(1,t=O.form),"data_0"in O&&n(2,u=O.data_0),"data_1"in O&&n(3,m=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[g,t,u,m,d,_,b,i,s]}class Pt extends Ze{constructor(e){super(),Qe(this,e,Nt,Lt,xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ut={},ge=[()=>ke(()=>import("./chunks/0-6c11c4c7.js"),["./chunks/0-6c11c4c7.js","./components/layout.svelte-138be488.js","./chunks/index-ab6e1620.js"],import.meta.url),()=>ke(()=>import("./chunks/1-645ac368.js"),["./chunks/1-645ac368.js","./components/error.svelte-0e6fba56.js","./chunks/index-ab6e1620.js","./chunks/singletons-378e86f1.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>ke(()=>import("./chunks/2-43b2ed40.js"),["./chunks/2-43b2ed40.js","./components/pages/_page.svelte-b7b18044.js","./chunks/preload-helper-b21cceae.js","./chunks/index-ab6e1620.js","./chunks/paths-6cd3a76e.js","./assets/_page-f3ae51ec.css"],import.meta.url)],Tt=[],Dt={"/":[2]},Vt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,n){this.status=e,this.location=n}}async function qt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ct=-1,Bt=-2,Ft=-3,Jt=-4,Gt=-5,Kt=-6;function Mt(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(s,g=!1){if(s===Ct)return;if(s===Ft)return NaN;if(s===Jt)return 1/0;if(s===Gt)return-1/0;if(s===Kt)return-0;if(g)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const m=new Set;n[s]=m;for(let b=1;b<t.length;b+=1)m.add(i(t[b]));break;case"Map":const d=new Map;n[s]=d;for(let b=1;b<t.length;b+=2)d.set(i(t[b]),i(t[b+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[s]=_;for(let b=1;b<t.length;b+=2)_[t[b]]=i(t[b+1]);break}else{const u=new Array(t.length);n[s]=u;for(let m=0;m<t.length;m+=1){const d=t[m];d!==Bt&&(u[m]=i(d))}}else{const u={};n[s]=u;for(const m in t){const d=t[m];u[m]=i(d)}}return n[s]}return i(0)}const Xe="sveltekit:scroll",C="sveltekit:index",ce=$t(ge,Tt,Dt,Ut),je=ge[0],Ie=ge[1];je();Ie();let oe={};try{oe=JSON.parse(sessionStorage[Xe])}catch{}function Re(r){oe[r]=Oe()}function zt({target:r,base:e,trailing_slash:n}){var Be;const i=[];let s=null;const g={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,m=!1,d=!0,_=!1,b=!1,O=!1,K=!1,M,j=(Be=history.state)==null?void 0:Be[C];j||(j=Date.now(),history.replaceState({...history.state,[C]:j},"",location.href));const V=oe[j];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let T,ee,Y;async function se(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),l=ye(a,!0);s=null,await Ne(l,a,[])}async function te(a,{noScroll:l=!1,replaceState:f=!1,keepFocus:o=!1,state:c={},invalidateAll:p=!1},h,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),be({url:a,scroll:l?Oe():null,keepfocus:o,redirect_chain:h,details:{state:c,replaceState:f},nav_token:v,accepted:()=>{p&&(K=!0)},blocked:()=>{},type:"goto"})}async function Le(a){const l=ye(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:l.id,promise:Te(l)},s.promise}async function Ne(a,l,f,o,c={},p){var v,E;ee=c;let h=a&&await Te(a);if(h||(h=await Ce(l,{id:null},ae(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,ee!==c)return!1;if(h.type==="redirect")if(f.length>10||f.includes(l.pathname))h=await ie({status:500,error:ae(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return te(new URL(h.location,l).href,{},[...f,l.pathname],c),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await z.updated.check()&&await le(l);if(i.length=0,K=!1,_=!0,o&&o.details){const{details:w}=o,y=w.replaceState?0:1;w.state[C]=j+=y,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(s=null,m){t=h.state,h.props.page&&(h.props.page.url=l);const w=ue();M.$set(h.props),w()}else Pe(h);if(o){const{scroll:w,keepfocus:y}=o;if(!y){const R=document.body,L=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),L!==null?R.setAttribute("tabindex",L):R.removeAttribute("tabindex")}if(await Ge(),d){const R=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ge();d=!0,h.props.page&&(T=h.props.page),p&&p(),_=!1}function Pe(a){var c,p;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const f=ue();M=new Pt({target:r,props:{...a.props,stores:z},hydrate:!0}),f();const o={from:null,to:fe("to",{params:t.params,route:{id:(p=(c=t.route)==null?void 0:c.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};g.after_navigate.forEach(h=>h(o)),m=!0}async function ne({url:a,params:l,branch:f,status:o,error:c,route:p,form:h}){var L;const v=f.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:f,error:c,route:p},props:{components:v.map($=>$.node.component)}};h!==void 0&&(E.props.form=h);let w={},y=!T;for(let $=0;$<v.length;$+=1){const P=v[$];w={...w,...P.data},(y||!t.branch.some(U=>U===P))&&(E.props[`data_${$}`]=w,y=y||Object.keys((L=P.data)!=null?L:{}).length>0)}if(y||(y=Object.keys(T.data).length!==Object.keys(w).length),!t.url||a.href!==t.url.href||t.error!==c||h!==void 0||y){E.props.page={error:c,params:l,route:p,status:o,url:a,form:h,data:y?w:T.data};const $=(P,U)=>{Object.defineProperty(E.props.page,P,{get:()=>{throw new Error(`$page.${P} has been replaced by $page.url.${U}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function _e({loader:a,parent:l,url:f,params:o,route:c,server_data_node:p}){var w,y,R,L,$;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((w=E.shared)!=null&&w.load){let P=function(...S){for(const D of S){const{href:k}=new URL(D,f);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,c.id}},params:new Proxy(o,{get:(S,D)=>(v.params.add(D),S[D])}),data:(y=p==null?void 0:p.data)!=null?y:null,url:mt(f,()=>{v.url=!0}),async fetch(S,D){let k;S instanceof Request?(k=S.url,D={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...D}):k=S;const I=new URL(k,f).href;return P(I),m?vt(I,D):bt(k,I,D)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,l()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(R=await E.shared.load.call(null,U))!=null?R:null,h=h?await qt(h):null}return{node:E,loader:a,server:p,shared:(L=E.shared)!=null&&L.load?{type:"data",data:h,uses:v}:null,data:($=h!=null?h:p==null?void 0:p.data)!=null?$:null}}function Ue(a,l,f,o,c){if(K)return!0;if(!o)return!1;if(o.parent&&a||o.route&&l||o.url&&f)return!0;for(const p of o.params)if(c[p]!==t.params[p])return!0;for(const p of o.dependencies)if(i.some(h=>h(new URL(p))))return!0;return!1}function we(a,l){var f,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((f=a.uses.dependencies)!=null?f:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Te({id:a,invalidating:l,url:f,params:o,route:c}){var D;if((s==null?void 0:s.id)===a)return s.promise;const{errors:p,layouts:h,leaf:v}=c,E=[...h,v];p.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const y=t.url?a!==t.url.pathname+t.url.search:!1,R=t.route?a!==t.route.id:!1,L=E.reduce((k,I,N)=>{var re;const A=t.branch[N],W=!!(I!=null&&I[0])&&((A==null?void 0:A.loader)!==I[1]||Ue(k.some(Boolean),R,y,(re=A.server)==null?void 0:re.uses,o));return k.push(W),k},[]);if(L.some(Boolean)){try{w=await We(f,L)}catch(k){return ie({status:500,error:ae(k,{url:f,params:o,route:{id:c.id}}),url:f,route:c})}if(w.type==="redirect")return w}const $=w==null?void 0:w.nodes;let P=!1;const U=E.map(async(k,I)=>{var re;if(!k)return;const N=t.branch[I],A=$==null?void 0:$[I];if((!A||A.type==="skip")&&k[1]===(N==null?void 0:N.loader)&&!Ue(P,R,y,(re=N.shared)==null?void 0:re.uses,o))return N;if(P=!0,(A==null?void 0:A.type)==="error")throw A;return _e({loader:k[1],url:f,params:o,route:c,parent:async()=>{var Je;const Fe={};for(let ve=0;ve<I;ve+=1)Object.assign(Fe,(Je=await U[ve])==null?void 0:Je.data);return Fe},server_data_node:we(A===void 0&&k[0]?{type:"skip"}:A!=null?A:null,N==null?void 0:N.server)})});for(const k of U)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await U[k])}catch(I){if(I instanceof Ye)return{type:"redirect",location:I.location};let N=500,A;$!=null&&$.includes(I)?(N=(D=I.status)!=null?D:N,A=I.error):I instanceof $e?(N=I.status,A=I.body):A=ae(I,{params:o,url:f,route:{id:c.id}});const W=await De(k,S,p);return W?await ne({url:f,params:o,branch:S.slice(0,W.idx).concat(W.node),status:N,error:A,route:c}):await Ce(f,{id:c.id},A,N)}else S.push(void 0);return await ne({url:f,params:o,branch:S,status:200,error:null,route:c,form:l?void 0:null})}async function De(a,l,f){for(;a--;)if(f[a]){let o=a;for(;!l[o];)o-=1;try{return{idx:o+1,node:{node:await f[a](),loader:f[a],data:{},server:null,shared:null}}}catch{continue}}}async function ie({status:a,error:l,url:f,route:o}){var w;const c={},p=await je();let h=null;if(p.server)try{const y=await We(f,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;h=(w=y.nodes[0])!=null?w:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||u)&&await le(f)}const v=await _e({loader:je,url:f,params:c,route:o,parent:()=>Promise.resolve({}),server_data_node:we(h)}),E={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await ne({url:f,params:c,branch:[v,E],status:a,error:l,route:null})}function ye(a,l){if(Ve(a))return;const f=pt(a.pathname.slice(e.length)||"/");for(const o of ce){const c=o.exec(f);if(c){const p=new URL(a.origin+ut(a.pathname,n)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:o,params:dt(c),url:p}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function qe({url:a,type:l,intent:f,delta:o}){var v,E,w,y,R;let c=!1;const p={from:fe("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:fe("to",{params:(w=f==null?void 0:f.params)!=null?w:null,route:{id:(R=(y=f==null?void 0:f.route)==null?void 0:y.id)!=null?R:null},url:a}),willUnload:!f,type:l};o!==void 0&&(p.delta=o);const h={...p,cancel:()=>{c=!0}};return g.before_navigate.forEach(L=>L(h)),c?null:p}async function be({url:a,scroll:l,keepfocus:f,redirect_chain:o,details:c,type:p,delta:h,nav_token:v,accepted:E,blocked:w}){const y=ye(a,!1),R=qe({url:a,type:p,delta:h,intent:y});if(!R){w();return}Re(j),E(),b=!0,m&&z.navigating.set(R),await Ne(y,a,o,{scroll:l,keepfocus:f,details:c},v,()=>{b=!1,g.after_navigate.forEach(L=>L(R)),z.navigating.set(null)})}async function Ce(a,l,f,o){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await ie({status:o,error:f,url:a,route:l}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Se(()=>(g.after_navigate.push(a),()=>{const l=g.after_navigate.indexOf(a);g.after_navigate.splice(l,1)}))},before_navigate:a=>{Se(()=>(g.before_navigate.push(a),()=>{const l=g.before_navigate.indexOf(a);g.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!m)&&(d=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return te(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:l}=new URL(a,location.href);i.push(f=>f.href===l)}return se()},invalidateAll:()=>(K=!0,se()),prefetch:async a=>{const l=new URL(a,Ke(document));await Le(l)},prefetch_routes:async a=>{const f=(a?ce.filter(o=>a.some(c=>o.exec(c))):ce).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(f)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:f,route:o}=t;if(!o)return;const c=await De(t.branch.length,f,o.errors);if(c){const p=await ne({url:l,params:t.params,branch:f.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:o});t=p.state;const h=ue();M.$set(p.props),h()}}else if(a.type==="redirect")te(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...T,form:a.data,status:a.status}},f=ue();M.$set(l),f()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var p,h;let c=!1;if(!b){const v={from:fe("from",{params:t.params,route:{id:(h=(p=t.route)==null?void 0:p.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};g.before_navigate.forEach(E=>E(v))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(j);try{sessionStorage[Xe]=JSON.stringify(oe)}catch{}}});const a=o=>{const{url:c,options:p}=Me(o);if(c&&p.prefetch){if(Ve(c))return;Le(c)}};let l;const f=o=>{clearTimeout(l),l=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:c,url:p,options:h}=Me(o);if(!c||!p)return;const v=c instanceof SVGAElement;if(!v&&p.protocol!==location.protocol&&!(p.protocol==="https:"||p.protocol==="http:")||c.hasAttribute("download"))return;if((c.getAttribute("rel")||"").split(/\s+/).includes("external")||h.reload||(v?c.target.baseVal:c.target)){qe({url:p,type:"link"})||o.preventDefault(),b=!0;return}const[w,y]=p.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){O=!0,Re(j),t.url=p,z.page.set({...T,url:p}),z.page.notify();return}be({url:p,scroll:h.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[C]===j)return;const c=o.state[C]-j;be({url:new URL(location.href),scroll:oe[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=o.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[C]:++j},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:f,params:o,route:c,data:p,form:h})=>{var w;u=!0;const v=new URL(location.href);let E;try{const y=f.map(async(R,L)=>{const $=p[L];return _e({loader:ge[R],url:v,params:o,route:c,parent:async()=>{const P={};for(let U=0;U<L;U+=1)Object.assign(P,(await y[U]).data);return P},server_data_node:we($)})});E=await ne({url:v,params:o,branch:await Promise.all(y),status:a,error:l,form:h,route:(w=ce.find(({id:R})=>R===c.id))!=null?w:null})}catch(y){if(y instanceof Ye){await le(new URL(y.location,location.href));return}E=await ie({status:y instanceof $e?y.status:500,error:ae(y,{url:v,params:o,route:c}),url:v,route:c})}Pe(E)}}}async function We(r,e){var g;const n=new URL(r);n.pathname=wt(r.pathname);const i=await me(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),s=await i.json();if(!i.ok)throw new Error(s);return(g=s.nodes)==null||g.forEach(t=>{var u,m;(t==null?void 0:t.type)==="data"&&(t.data=Mt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((m=t.uses.params)!=null?m:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ae(r,e){var n;return r instanceof $e?r.body:(n=Vt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Ht=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const n of Ht)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ue(){return()=>{}}async function Qt({env:r,hydrate:e,paths:n,target:i,trailing_slash:s}){ft(n);const g=zt({target:i,base:n.base,trailing_slash:s});ct({client:g}),e?await g._hydrate(e):g.goto(location.href,{replaceState:!0}),g._start_router()}export{Qt as start};
