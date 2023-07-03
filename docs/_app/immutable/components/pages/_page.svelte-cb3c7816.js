var Le=Object.defineProperty;var xe=(s,e,t)=>e in s?Le(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var H=(s,e,t)=>(xe(s,typeof e!="symbol"?e+"":e,t),t);import{_ as Be}from"../../chunks/preload-helper-b21cceae.js";import{S as de,i as pe,s as ve,e as $,b as L,g as be,t as R,d as We,f as G,h as I,k as P,q as F,l as A,m as C,r as Y,n as k,G as W,I as Ce,J as ee,B as O,o as Se,K as Oe,w as Ne,a as _e,x as Me,c as Ee,y as He,z as Pe,L as fe,M as ue,u as qe}from"../../chunks/index-ab6e1620.js";import{b as Ke}from"../../chunks/paths-6cd3a76e.js";class N{constructor(e,t){this.x=e,this.y=t}add(e,t){return new N(this.x+e,this.y+t)}addVec(e){return this.add(e.x,e.y)}set(e){this.x=e.x,this.y=e.y}copy(){return new N(this.x,this.y)}equals(e){return this.x===e.x&&this.y===e.y}}class me{constructor(e){this.pieces=e}pieceAt(e){return this.pieces.find(t=>t.position.equals(e))}removePiece(e){const t=this.pieces.indexOf(e);if(t===-1)throw new Error("removePiece run on missing piece.");this.pieces.splice(t,1)}move(e,t){const n=this.pieceAt(t);n!==void 0&&this.removePiece(n);const o=this.pieceAt(e);o.position.set(t),o.type===se&&o.position.y===(o.color===_.WHITE?0:7)&&(o.type=ye)}copy(){return new me(this.pieces.map(e=>e.copy()))}copyWithMove(e,t){const n=this.copy();return n.move(e,t),n}legalState(e){const t=this.pieces.filter(c=>c.color===_.BLACK),n=this.pieces.filter(c=>c.color===_.WHITE),o=t.find(c=>c.type===z),r=n.find(c=>c.type===z);if(o===void 0||r===void 0)return!1;if(e===_.WHITE){for(const c of t)if(c.moves(this).some(u=>u.equals(r.position)))return!1}else for(const c of n){const u=c.moves(this),l=c.doubleMoves(this,u);if(u.some(a=>a.equals(o.position))||l.some(a=>a.finalPosition.equals(o.position)))return!1}return!0}}class j{}var _=(s=>(s[s.WHITE=0]="WHITE",s[s.BLACK=1]="BLACK",s))(_||{});const Re=s=>0<=s.x&&s.x<8&&0<=s.y&&s.y<8,Ae=(s,e,t,n,o,r,c)=>{const u=[];let l=s.add(e,t),a=0;for(;Re(l)&&a<n;){const i=o.find(p=>p.position.equals(l));if(i!==void 0){c&&i.color!=r&&u.push(l);break}u.push(l),l=l.add(e,t),a++}return u},Ge=s=>{const e=[];for(const t of s)e.some(n=>n.x===t.x&&n.y===t.y)||e.push(t);return e},U=(s,e,t,n,o,r,c)=>{let u=[];return[[e,t],[e,-t],[-e,t],[-e,-t],[t,e],[t,-e],[-t,e],[-t,-e]].forEach(a=>{u=u.concat(Ae(s,...a,n,o,r,c))}),Ge(u)};class Fe extends j{constructor(){super(...arguments);H(this,"id","k")}moves(t,n,o){return U(t,1,1,1,n,o,!0).concat(U(t,1,0,1,n,o,!0))}}const z=new Fe;class Ye extends j{constructor(){super(...arguments);H(this,"id","r")}moves(t,n,o){return U(t,1,0,1/0,n,o,!0)}}const te=new Ye;class Ve extends j{constructor(){super(...arguments);H(this,"id","n")}moves(t,n,o){return U(t,2,1,1,n,o,!0)}}const he=new Ve;class je extends j{constructor(){super(...arguments);H(this,"id","b")}moves(t,n,o){return U(t,1,1,1/0,n,o,!0)}}const ne=new je;class Xe extends j{constructor(){super(...arguments);H(this,"id","q")}moves(t,n,o){return ne.moves(t,n,o).concat(te.moves(t,n,o))}}const ye=new Xe,Ue=(s,e,t)=>s.filter(n=>e.some(o=>o.position.equals(n)&&o.color!=t));class ze extends j{constructor(){super(...arguments);H(this,"id","p")}moves(t,n,o){return Ae(t,0,o===0?-1:1,t.y===(o===0?6:1)?2:1,n,o,!1).concat(Ue(o===0?[t.add(-1,-1),t.add(1,-1)]:[t.add(-1,1),t.add(1,1)],n,o))}}const se=new ze;class K{constructor(e,t,n){this.type=e,this.color=t,this.position=n}moves(e){return this.type.moves(this.position,e.pieces,this.color)}doubleMoves(e,t,n=!1){const o=t.flatMap(i=>{var M;const p=(M=e.pieceAt(i))==null?void 0:M.position,d=e.copyWithMove(this.position,i);return d.pieceAt(i).moves(d).map(S=>({finalPosition:S,singleMove:i,takes:p}))}),r=[],c=(i,p)=>{i.finalPosition.equals(p.finalPosition)&&i.singleMove.equals(p.singleMove)&&(i.takes===void 0&&p.takes===void 0||i.takes!==void 0&&p.takes!==void 0&&i.takes.equals(p.takes))};o.forEach(i=>{r.some(p=>c(i,p))||r.push(i)});const u=[],l=[];for(const i of r){const p=u.find(d=>d.equals(i.finalPosition));p===void 0?(u.push(i.finalPosition),l.push([i])):l[u.indexOf(p)].push(i)}return(n?l.filter(i=>i.filter(p=>p.takes!==void 0).length<=1):l).flat().filter(i=>!t.some(p=>p.equals(i.finalPosition))).filter(i=>!i.finalPosition.equals(this.position))}copy(){return new K(this.type,this.color,this.position.copy())}}const Je=(s,e)=>{const t=s.pieces.filter(n=>n.color===e);return console.log(t),t.every(n=>{switch(n.color){case 0:return Qe(n,s,e).length===0;case 1:return Ze(n,s,e).length===0}})},Ze=(s,e,t)=>s.moves(e).filter(n=>e.copyWithMove(s.position,n).legalState(t)),Qe=(s,e,t)=>s.doubleMoves(e,s.moves(e)).filter(n=>e.copyWithMove(s.position,n.finalPosition).legalState(t)),ke=[z,te,he,ye,ne,se];var V=(s=>(s[s.PLAYING=0]="PLAYING",s[s.ENDED=1]="ENDED",s))(V||{}),T=(s=>(s[s.WHITE_FIRST=0]="WHITE_FIRST",s[s.WHITE_SECOND=1]="WHITE_SECOND",s[s.BLACK=2]="BLACK",s))(T||{});function $e(s){const e=s-1;return e*e*e+1}function ie(s,{delay:e=0,duration:t=400,easing:n=$e,start:o=0,opacity:r=0}={}){const c=getComputedStyle(s),u=+c.opacity,l=c.transform==="none"?"":c.transform,a=1-o,i=u*(1-r);return{delay:e,duration:t,easing:n,css:(p,d)=>`
			transform: ${l} scale(${1-a*d});
			opacity: ${u-i*d}
		`}}function et(s){let e,t,n,o;return{c(){e=P("div"),t=F("BLACK WINS!"),this.h()},l(r){e=A(r,"DIV",{class:!0});var c=C(e);t=Y(c,"BLACK WINS!"),c.forEach(I),this.h()},h(){k(e,"class","overlay black svelte-1hpjhek")},m(r,c){L(r,e,c),W(e,t),o=!0},i(r){o||(Ce(()=>{n||(n=ee(e,ie,{},!0)),n.run(1)}),o=!0)},o(r){n||(n=ee(e,ie,{},!1)),n.run(0),o=!1},d(r){r&&I(e),r&&n&&n.end()}}}function tt(s){let e,t,n,o;return{c(){e=P("div"),t=F("WHITE WINS!"),this.h()},l(r){e=A(r,"DIV",{class:!0});var c=C(e);t=Y(c,"WHITE WINS!"),c.forEach(I),this.h()},h(){k(e,"class","overlay white svelte-1hpjhek")},m(r,c){L(r,e,c),W(e,t),o=!0},i(r){o||(Ce(()=>{n||(n=ee(e,ie,{},!0)),n.run(1)}),o=!0)},o(r){n||(n=ee(e,ie,{},!1)),n.run(0),o=!1},d(r){r&&I(e),r&&n&&n.end()}}}function nt(s){let e,t,n,o;const r=[tt,et],c=[];function u(l,a){return l[0]===_.WHITE?0:l[0]===_.BLACK?1:-1}return~(e=u(s))&&(t=c[e]=r[e](s)),{c(){t&&t.c(),n=$()},l(l){t&&t.l(l),n=$()},m(l,a){~e&&c[e].m(l,a),L(l,n,a),o=!0},p(l,[a]){let i=e;e=u(l),e!==i&&(t&&(be(),R(c[i],1,1,()=>{c[i]=null}),We()),~e?(t=c[e],t||(t=c[e]=r[e](l),t.c()),G(t,1),t.m(n.parentNode,n)):t=null)},i(l){o||(G(t),o=!0)},o(l){R(t),o=!1},d(l){~e&&c[e].d(l),l&&I(n)}}}function st(s,e,t){let{winner:n}=e;return s.$$set=o=>{"winner"in o&&t(0,n=o.winner)},[n]}class it extends de{constructor(e){super(),pe(this,e,st,nt,ve,{winner:0})}}var X=(s=>(s[s.CONNECTING=0]="CONNECTING",s[s.WAITING=1]="WAITING",s[s.CONNECTED=2]="CONNECTED",s[s.DISCONNECTED=3]="DISCONNECTED",s))(X||{}),De=(s=>(s[s.HOST=0]="HOST",s[s.CLIENT=1]="CLIENT",s))(De||{});const ot="aydenmc-monster-chess-";class rt{constructor(e,t,n,o){H(this,"peer");H(this,"connection");H(this,"status",0);H(this,"type",0);this.peerjs=e,this.room=t,this.onStatusChange=n,this.onMove=o,this.peer=new e.Peer}setStatus(e){this.status=e,this.onStatusChange()}handleData(e,t){const{x1:n,y1:o,x2:r,y2:c,newTurn:u}=t,l=[new N(n,o),new N(r,c)];e.onMove(l,u)}init(){const e=`${ot}${this.room}`;this.onStatusChange(),this.peer.once("open",()=>{this.connection=this.peer.connect(e),this.connection.once("open",()=>{this.type=1,this.setStatus(2)}),this.connection.on("data",t=>this.handleData(this,t))}),this.peer.once("error",t=>{console.log(t.message),this.peer=new this.peerjs.Peer(e),this.peer.once("open",()=>{this.setStatus(1)}),this.peer.on("connection",n=>{this.connection=n,this.type=0,this.setStatus(2),this.connection.on("data",o=>{console.log(o),this.handleData(this,o)})})})}sendMove(e,t){const[n,o]=e,r={x1:n.x,y1:n.y,x2:o.x,y2:o.y,newTurn:t};console.log(`sending ${JSON.stringify(r)}...`),this.connection.send(r)}}function ct(s){let e;return{c(){e=P("canvas")},l(t){e=A(t,"CANVAS",{}),C(e).forEach(I)},m(t,n){L(t,e,n),s[7](e)},p:O,i:O,o:O,d(t){t&&I(e),s[7](null)}}}function lt(s,e,t){let{currentTurn:n}=e,{currentGameState:o}=e,{board:r}=e,{interactive:c}=e,{perspective:u}=e;const l=d=>u===_.WHITE?d:7-d;let{onMove:a}=e,i;Se(()=>{const d=window.innerHeight*1.5,h=d/8,M=(f,w)=>{const E=new Image;return E.src=`${Ke}/images/${w===_.WHITE?"w":"b"}${f}.png`,E},S=Object.assign({},...ke.map(f=>({[f.id]:M(f.id,_.WHITE)}))),x=Object.assign({},...ke.map(f=>({[f.id]:M(f.id,_.BLACK)}))),J=f=>(f.color===_.WHITE?S:x)[f.type.id];t(0,i.width=d,i),t(0,i.height=d,i);const g=i.getContext("2d");g.fillStyle="#b58863",g.fillRect(0,0,d,d),g.fillStyle="#f0d9b5";for(let f=0;f<8;f++)for(let w=f%2;w<8;w+=2)g.fillRect(f*h,l(w)*h,h,h);const m=(f,w,E,y)=>{g.fillStyle=y,g.beginPath(),g.ellipse(f*h+h/2,w*h+h/2,E,E,0,0,2*Math.PI),g.fill()},D=(f,w,E,y)=>{f.forEach(v=>{m(v.x,l(v.y),h/5,(v.x+v.y)%2==1?"#6e533c":"#92846e"),m(v.x,l(v.y),h/10,(v.x+v.y)%2==1?"#b58863":"#f0d9b5")}),w.forEach(v=>{m(v.x,l(v.y),h/5,(v.x+v.y)%2==1?"#6e533c":"#92846e")}),E.forEach(v=>{g.fillStyle=(v.x+v.y)%2==1?"#6e533c":"#92846e",g.fillRect(v.x*h,l(v.y)*h,h,h),g.fillStyle=(v.x+v.y)%2==1?"#b58863":"#f0d9b5",g.fillRect(v.x*h+h/15,l(v.y)*h+h/15,h-2*h/15,h-2*h/15)}),y.forEach(v=>{g.fillStyle=(v.x+v.y)%2==1?"#6e533c":"#92846e",g.fillRect(v.x*h,l(v.y)*h,h,h)})};let b,B=[],q=[],oe=[],re=[],ce=[],le=[];const Ie=()=>{requestAnimationFrame(Ie),g.fillStyle="#b58863",g.fillRect(0,0,d,d),g.fillStyle="#f0d9b5";for(let f=0;f<8;f++)for(let w=f%2;w<8;w+=2)g.fillRect(f*h,l(w)*h,h,h);b!==void 0&&D(oe,re,ce,le),r.pieces.forEach(f=>{f!==b&&g.drawImage(J(f),f.position.x*h,l(f.position.y)*h,h,h)}),b!==void 0&&g.drawImage(J(b),Z.x-h/2,Z.y-h/2,h,h)};Ie();const Z=new N(0,0),ae=f=>{const w=[],E=[];return f.forEach(y=>{r.pieces.some(v=>v.position.equals(y))?E.push(y):w.push(y)}),[w,E]},ge=f=>{if(o===V.PLAYING&&c){const w=new N(Math.floor(f[0]*(i.width/i.clientWidth)/h),l(Math.floor(f[1]*(i.height/i.clientHeight)/h))),E=r.pieceAt(w);E!==void 0&&(E.color===_.WHITE&&(n===T.WHITE_FIRST||n===T.WHITE_SECOND)||E.color===_.BLACK&&n===T.BLACK)&&u===E.color&&(b=E,n===T.WHITE_SECOND||n===T.BLACK?(B=E.moves(r).filter(y=>r.copyWithMove(E.position,y).legalState(n===T.WHITE_FIRST||n===T.WHITE_SECOND?_.WHITE:_.BLACK)),q=[],[re,le]=ae(B),[oe,ce]=[[],[]]):(B=E.moves(r),q=E.doubleMoves(r,B,!0).filter(y=>r.copyWithMove(E.position,y.finalPosition).legalState(n===T.WHITE_FIRST||n===T.WHITE_SECOND?_.WHITE:_.BLACK)),[oe,ce]=ae(B),[re,le]=ae(q.map(y=>y.finalPosition))))}};i.addEventListener("mousedown",f=>ge([f.offsetX,f.offsetY])),i.addEventListener("touchstart",f=>ge([f.touches[0].clientX,f.touches[0].clientY]));const we=f=>{if(b!==void 0){const w=new N(Math.floor(f[0]*(i.width/i.clientWidth)/h),l(Math.floor(f[1]*(i.height/i.clientHeight)/h)));if(n===T.WHITE_SECOND||n===T.BLACK){const E=B.find(y=>y.equals(w));E!==void 0&&a([b.position.copy(),E.copy()])}else{const E=B.find(v=>v.equals(w)),y=q.find(v=>v.finalPosition.equals(w));E!==void 0?a([b.position.copy(),E.copy()]):y!==void 0&&(y.takes!==void 0?(a([b.position.copy(),y.takes.copy()]),a([y.takes.copy(),y.finalPosition.copy()])):(a([b.position.copy(),y.singleMove.copy()]),a([y.singleMove.copy(),y.finalPosition.copy()])))}b=void 0}};i.addEventListener("mouseup",f=>we([f.offsetX,f.offsetY])),i.addEventListener("touchend",f=>{we([f.changedTouches[0].clientX,f.changedTouches[0].clientY])}),i.addEventListener("contextmenu",f=>f.preventDefault());const Te=f=>{Z.x=f[0]*(i.width/i.clientWidth),Z.y=f[1]*(i.height/i.clientHeight)};document.addEventListener("mousemove",f=>Te([f.offsetX,f.offsetY])),document.addEventListener("touchmove",f=>Te([f.touches[0].clientX,f.touches[0].clientY]))});function p(d){Oe[d?"unshift":"push"](()=>{i=d,t(0,i)})}return s.$$set=d=>{"currentTurn"in d&&t(1,n=d.currentTurn),"currentGameState"in d&&t(2,o=d.currentGameState),"board"in d&&t(3,r=d.board),"interactive"in d&&t(4,c=d.interactive),"perspective"in d&&t(5,u=d.perspective),"onMove"in d&&t(6,a=d.onMove)},[i,n,o,r,c,u,a,p]}class at extends de{constructor(e){super(),pe(this,e,lt,ct,ve,{currentTurn:1,currentGameState:2,board:3,interactive:4,perspective:5,onMove:6})}}function ft(s){let e,t,n,o,r,c,u,l;return e=new at({props:{currentTurn:s[0],currentGameState:s[2],board:s[6],onMove:s[8],interactive:s[1]==0,perspective:s[5]}}),{c(){Ne(e.$$.fragment),t=_e(),n=P("div"),o=P("div"),r=fe("svg"),c=fe("circle"),u=fe("circle"),this.h()},l(a){Me(e.$$.fragment,a),t=Ee(a),n=A(a,"DIV",{class:!0});var i=C(n);o=A(i,"DIV",{class:!0});var p=C(o);r=ue(p,"svg",{viewBox:!0});var d=C(r);c=ue(d,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),C(c).forEach(I),u=ue(d,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),C(u).forEach(I),d.forEach(I),p.forEach(I),i.forEach(I),this.h()},h(){k(c,"cx","0.5"),k(c,"cy","0.5"),k(c,"r","0.4"),k(c,"fill","black"),k(u,"cx","0.5"),k(u,"cy","0.5"),k(u,"r",s[7]),k(u,"fill","white"),k(r,"viewBox","0 0 1 1"),k(o,"class","turn-indicator"),k(n,"class","toolbar")},m(a,i){He(e,a,i),L(a,t,i),L(a,n,i),W(n,o),W(o,r),W(r,c),W(r,u),l=!0},p(a,i){const p={};i&1&&(p.currentTurn=a[0]),i&4&&(p.currentGameState=a[2]),i&64&&(p.board=a[6]),i&2&&(p.interactive=a[1]==0),i&32&&(p.perspective=a[5]),e.$set(p),(!l||i&128)&&k(u,"r",a[7])},i(a){l||(G(e.$$.fragment,a),l=!0)},o(a){R(e.$$.fragment,a),l=!1},d(a){Pe(e,a),a&&I(t),a&&I(n)}}}function ut(s){let e,t,n,o,r,c,u,l=`${Q}#${s[4]}`,a,i;return{c(){e=P("div"),t=P("p"),n=F("Waiting for an opponent..."),o=_e(),r=P("p"),c=F("Send them this link: "),u=P("a"),a=F(l),this.h()},l(p){e=A(p,"DIV",{class:!0});var d=C(e);t=A(d,"P",{});var h=C(t);n=Y(h,"Waiting for an opponent..."),h.forEach(I),o=Ee(d),r=A(d,"P",{});var M=C(r);c=Y(M,"Send them this link: "),u=A(M,"A",{href:!0});var S=C(u);a=Y(S,l),S.forEach(I),M.forEach(I),d.forEach(I),this.h()},h(){k(u,"href",i=Q+"#"+s[4]),k(e,"class","status")},m(p,d){L(p,e,d),W(e,t),W(t,n),W(e,o),W(e,r),W(r,c),W(r,u),W(u,a)},p(p,d){d&16&&l!==(l=`${Q}#${p[4]}`)&&qe(a,l),d&16&&i!==(i=Q+"#"+p[4])&&k(u,"href",i)},i:O,o:O,d(p){p&&I(e)}}}function ht(s){let e,t,n;return{c(){e=P("div"),t=P("p"),n=F("Connecting..."),this.h()},l(o){e=A(o,"DIV",{class:!0});var r=C(e);t=A(r,"P",{});var c=C(t);n=Y(c,"Connecting..."),c.forEach(I),r.forEach(I),this.h()},h(){k(e,"class","status")},m(o,r){L(o,e,r),W(e,t),W(t,n)},p:O,i:O,o:O,d(o){o&&I(e)}}}function dt(s){let e,t,n,o,r,c;e=new it({props:{winner:s[2]===V.ENDED?s[0]===T.WHITE_FIRST||s[0]===T.WHITE_SECOND?_.BLACK:_.WHITE:void 0}});const u=[ht,ut,ft],l=[];function a(i,p){return i[3]===X.CONNECTING?0:i[3]===X.WAITING?1:i[3]===X.CONNECTED?2:-1}return~(n=a(s))&&(o=l[n]=u[n](s)),{c(){Ne(e.$$.fragment),t=_e(),o&&o.c(),r=$()},l(i){Me(e.$$.fragment,i),t=Ee(i),o&&o.l(i),r=$()},m(i,p){He(e,i,p),L(i,t,p),~n&&l[n].m(i,p),L(i,r,p),c=!0},p(i,[p]){const d={};p&5&&(d.winner=i[2]===V.ENDED?i[0]===T.WHITE_FIRST||i[0]===T.WHITE_SECOND?_.BLACK:_.WHITE:void 0),e.$set(d);let h=n;n=a(i),n===h?~n&&l[n].p(i,p):(o&&(be(),R(l[h],1,1,()=>{l[h]=null}),We()),~n?(o=l[n],o?o.p(i,p):(o=l[n]=u[n](i),o.c()),G(o,1),o.m(r.parentNode,r)):o=null)},i(i){c||(G(e.$$.fragment,i),G(o),c=!0)},o(i){R(e.$$.fragment,i),R(o),c=!1},d(i){Pe(e,i),i&&I(t),~n&&l[n].d(i),i&&I(r)}}}const Q="https://acou12.github.io/monster-chess";function pt(s,e,t){let n,o,r=T.WHITE_FIRST,c=V.PLAYING,u,l=X.CONNECTING,a;const i=(m,D)=>[...Array(D-m).keys()].map(b=>b+m),p=m=>{Je(m,r===T.WHITE_FIRST||r===T.WHITE_SECOND?_.WHITE:_.BLACK)&&t(2,c=V.ENDED)};let d;const h=new me([...i(0,8).map(m=>new K(se,_.BLACK,new N(m,1))),...[te,he,ne,ye,z,ne,he,te].map((m,D)=>new K(m,_.BLACK,new N(D,0))),...i(2,6).map(m=>new K(se,_.WHITE,new N(m,6))),new K(z,_.WHITE,new N(4,7))]),M=m=>{let D="";const b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",B=b.length;for(let q=0;q<m;q++)D+=b.charAt(Math.floor(Math.random()*B));return D};Se(async()=>{t(4,a=window.location.hash),a===""?(t(4,a=M(8).toString()),window.location.hash=`#${a}`):t(4,a=a.slice(1)),u=new rt(await Be(()=>import("../../chunks/bundler-674fefd2.js"),[],import.meta.url),a,()=>{t(3,l=u.status),t(5,d=u.type===De.CLIENT?_.BLACK:_.WHITE),console.log(d)},g),u.init(),document.addEventListener("keydown",m=>{m.key==="ArrowLeft"&&x<S.length?t(1,x+=1):m.key==="ArrowRight"&&x>0&&t(1,x-=1)})});let S=[],x=0;const J=m=>{g(m,(r+1)%3),u.sendMove(m,r)},g=(m,D)=>{t(9,S=[...S,h.copy()]),h.move(...m),t(0,r=D),p(h)};return s.$$.update=()=>{s.$$.dirty&1&&t(7,n=[.4,.2,0][r]),s.$$.dirty&514&&t(6,o=x==0?h:S[S.length-x])},[r,x,c,l,a,d,o,n,J,S]}class yt extends de{constructor(e){super(),pe(this,e,pt,dt,ve,{})}}export{yt as default};
