(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Wr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},yt=[],Ae=()=>{},ss=()=>!1,ls=/^on[^a-z]/,Yn=e=>ls.test(e),Kr=e=>e.startsWith("onUpdate:"),ne=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fs=Object.prototype.hasOwnProperty,U=(e,t)=>fs.call(e,t),R=Array.isArray,_t=e=>Wn(e)==="[object Map]",ji=e=>Wn(e)==="[object Set]",L=e=>typeof e=="function",re=e=>typeof e=="string",Vr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",zi=e=>G(e)&&L(e.then)&&L(e.catch),Di=Object.prototype.toString,Wn=e=>Di.call(e),cs=e=>Wn(e).slice(8,-1),Ui=e=>Wn(e)==="[object Object]",Xr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},us=/-(\w)/g,Me=Kn(e=>e.replace(us,(t,n)=>n?n.toUpperCase():"")),ds=/\B([A-Z])/g,Ct=Kn(e=>e.replace(ds,"-$1").toLowerCase()),qn=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=Kn(e=>e?`on${qn(e)}`:""),Rn=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ln=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ms=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ra;const yr=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nn(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?gs(r):nn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(G(e))return e}}const ps=/;(?![^(]*\))/g,hs=/:([^]+)/,vs=/\/\*[^]*?\*\//g;function gs(e){const t={};return e.replace(vs,"").split(ps).forEach(n=>{if(n){const r=n.split(hs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Yt(e){let t="";if(re(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Yt(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ys=Wr(bs);function Bi(e){return!!e||e===""}const _s=e=>re(e)?e:e==null?"":R(e)||G(e)&&(e.toString===Di||!L(e.toString))?JSON.stringify(e,Hi,2):String(e),Hi=(e,t)=>t&&t.__v_isRef?Hi(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ji(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!R(t)&&!Ui(t)?String(t):t;let ye;class xs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ws(e,t=ye){t&&t.active&&t.effects.push(e)}function ks(){return ye}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yi=e=>(e.w&Je)>0,Wi=e=>(e.n&Je)>0,As=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},Os=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Yi(a)&&!Wi(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},_r=new WeakMap;let $t=0,Je=1;const xr=30;let _e;const ft=Symbol(""),wr=Symbol("");class Gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ws(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Ve=!0,Je=1<<++$t,$t<=xr?As(this):La(this),this.fn()}finally{$t<=xr&&Os(this),Je=1<<--$t,_e=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(La(this),this.onStop&&this.onStop(),this.active=!1)}}function La(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const Ki=[];function St(){Ki.push(Ve),Ve=!1}function Pt(){const e=Ki.pop();Ve=e===void 0?!0:e}function me(e,t,n){if(Ve&&_e){let r=_r.get(e);r||_r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),qi(a)}}function qi(e,t){let n=!1;$t<=xr?Wi(e)||(e.n|=Je,n=!Yi(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function ze(e,t,n,r,a,i){const o=_r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Xr(n)&&s.push(o.get("length")):(s.push(o.get(ft)),_t(e)&&s.push(o.get(wr)));break;case"delete":R(e)||(s.push(o.get(ft)),_t(e)&&s.push(o.get(wr)));break;case"set":_t(e)&&s.push(o.get(ft));break}if(s.length===1)s[0]&&kr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);kr(Jr(l))}}function kr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&$a(r);for(const r of n)r.computed||$a(r)}function $a(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Es=Wr("__proto__,__v_isRef,__isVue"),Vi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vr)),Cs=Zr(),Ss=Zr(!1,!0),Ps=Zr(!0),ja=Is();function Is(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=B(this)[t].apply(this,n);return Pt(),r}}),e}function Ts(e){const t=B(this);return me(t,"has",e),t.hasOwnProperty(e)}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?qs:Qi:t?Zi:Gi).get(r))return r;const o=R(r);if(!e){if(o&&U(ja,a))return Reflect.get(ja,a,i);if(a==="hasOwnProperty")return Ts}const s=Reflect.get(r,a,i);return(Vr(a)?Vi.has(a):Es(a))||(e||me(r,"get",a),t)?s:ce(s)?o&&Xr(a)?s:s.value:G(s)?e?eo(s):ta(s):s}}const Ns=Xi(),Ms=Xi(!0);function Xi(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&ce(o)&&!ce(a))return!1;if(!e&&(!Ar(a)&&!Wt(a)&&(o=B(o),a=B(a)),!R(n)&&ce(o)&&!ce(a)))return o.value=a,!0;const s=R(n)&&Xr(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Rn(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Fs(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Rs(e,t){const n=Reflect.has(e,t);return(!Vr(t)||!Vi.has(t))&&me(e,"has",t),n}function Ls(e){return me(e,"iterate",R(e)?"length":ft),Reflect.ownKeys(e)}const Ji={get:Cs,set:Ns,deleteProperty:Fs,has:Rs,ownKeys:Ls},$s={get:Ps,set(e,t){return!0},deleteProperty(e,t){return!0}},js=ne({},Ji,{get:Ss,set:Ms}),Qr=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function dn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Vn(a),s=r?Qr:n?aa:ra;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function mn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function pn(e,t=!1){return e=e.__v_raw,!t&&me(B(e),"iterate",ft),Reflect.get(e,"size",e)}function za(e){e=B(e);const t=B(this);return Vn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Da(e,t){t=B(t);const n=B(this),{has:r,get:a}=Vn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Rn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Ua(e){const t=B(this),{has:n,get:r}=Vn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Ba(){const e=B(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function hn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Qr:e?aa:ra;return!e&&me(s,"iterate",ft),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Qr:t?aa:ra;return!t&&me(i,"iterate",l?wr:ft),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:s?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function zs(){const e={get(i){return dn(this,i)},get size(){return pn(this)},has:mn,add:za,set:Da,delete:Ua,clear:Ba,forEach:hn(!1,!1)},t={get(i){return dn(this,i,!1,!0)},get size(){return pn(this)},has:mn,add:za,set:Da,delete:Ua,clear:Ba,forEach:hn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:hn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[Ds,Us,Bs,Hs]=zs();function ea(e,t){const n=t?e?Hs:Bs:e?Us:Ds;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Ys={get:ea(!1,!1)},Ws={get:ea(!1,!0)},Ks={get:ea(!0,!1)},Gi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,qs=new WeakMap;function Vs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xs(e){return e.__v_skip||!Object.isExtensible(e)?0:Vs(cs(e))}function ta(e){return Wt(e)?e:na(e,!1,Ji,Ys,Gi)}function Js(e){return na(e,!1,js,Ws,Zi)}function eo(e){return na(e,!0,$s,Ks,Qi)}function na(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Xs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function xt(e){return Wt(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function Ar(e){return!!(e&&e.__v_isShallow)}function to(e){return xt(e)||Wt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function no(e){return Ln(e,"__v_skip",!0),e}const ra=e=>G(e)?ta(e):e,aa=e=>G(e)?eo(e):e;function Gs(e){Ve&&_e&&(e=B(e),qi(e.dep||(e.dep=Jr())))}function Zs(e,t){e=B(e);const n=e.dep;n&&kr(n)}function ce(e){return!!(e&&e.__v_isRef===!0)}function Qs(e){return ce(e)?e.value:e}const el={get:(e,t,n)=>Qs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ce(a)&&!ce(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ro(e){return xt(e)?e:new Proxy(e,el)}class tl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,Zs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Gs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function nl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new tl(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Xn(i,t,n)}return a}function Oe(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&zi(i)&&i.catch(o=>{Xn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Xn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}rl(e,n,a,r)}function rl(e,t,n,r=!0){console.error(e)}let Kt=!1,Or=!1;const se=[];let Te=0;const wt=[];let Le=null,it=0;const ao=Promise.resolve();let ia=null;function al(e){const t=ia||ao;return e?t.then(this?e.bind(this):e):t}function il(e){let t=Te+1,n=se.length;for(;t<n;){const r=t+n>>>1;qt(se[r])<e?t=r+1:n=r}return t}function oa(e){(!se.length||!se.includes(e,Kt&&e.allowRecurse?Te+1:Te))&&(e.id==null?se.push(e):se.splice(il(e.id),0,e),io())}function io(){!Kt&&!Or&&(Or=!0,ia=ao.then(so))}function ol(e){const t=se.indexOf(e);t>Te&&se.splice(t,1)}function sl(e){R(e)?wt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?it+1:it))&&wt.push(e),io()}function Ha(e,t=Kt?Te+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function oo(e){if(wt.length){const t=[...new Set(wt)];if(wt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>qt(n)-qt(r)),it=0;it<Le.length;it++)Le[it]();Le=null,it=0}}const qt=e=>e.id==null?1/0:e.id,ll=(e,t)=>{const n=qt(e)-qt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function so(e){Or=!1,Kt=!0,se.sort(ll);const t=Ae;try{for(Te=0;Te<se.length;Te++){const n=se[Te];n&&n.active!==!1&&Xe(n,null,14)}}finally{Te=0,se.length=0,oo(),Kt=!1,ia=null,(se.length||wt.length)&&so()}}function fl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[d]||J;g&&(a=n.map(w=>re(w)?w.trim():w)),m&&(a=n.map(ms))}let s,l=r[s=lr(t)]||r[s=lr(Me(t))];!l&&i&&(l=r[s=lr(Ct(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function lo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=lo(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ne(o,i),G(e)&&r.set(e,o),o)}function Jn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Ct(t))||U(e,t))}let xe=null,Gn=null;function $n(e){const t=xe;return xe=e,Gn=e&&e.type.__scopeId||null,t}function sa(e){Gn=e}function la(){Gn=null}function cl(e,t=xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ei(-1);const i=$n(t);let o;try{o=e(...a)}finally{$n(i),r._d&&ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:g,setupState:w,ctx:$,inheritAttrs:N}=e;let D,k;const O=$n(e);try{if(n.shapeFlag&4){const P=a||r;D=Ie(d.call(P,P,m,i,w,g,$)),k=l}else{const P=t;D=Ie(P.length>1?P(i,{attrs:l,slots:s,emit:c}):P(i,null)),k=t.props?l:ul(l)}}catch(P){Ut.length=0,Xn(P,e,1),D=W(Vt)}let M=D;if(k&&N!==!1){const P=Object.keys(k),{shapeFlag:H}=M;P.length&&H&7&&(o&&P.some(Kr)&&(k=dl(k,o)),M=At(M,k))}return n.dirs&&(M=At(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),D=M,$n(O),D}const ul=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},dl=(e,t)=>{const n={};for(const r in e)(!Kr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ml(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ya(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(o[g]!==r[g]&&!Jn(c,g))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ya(r,o,c):!0:!!o;return!1}function Ya(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Jn(n,i))return!0}return!1}function pl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hl=e=>e.__isSuspense;function vl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):sl(e)}const gn={};function Sn(e,t,n){return fo(e,t,n)}function fo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){var s;const l=ks()===((s=ae)==null?void 0:s.scope)?ae:null;let c,d=!1,m=!1;if(ce(e)?(c=()=>e.value,d=Ar(e)):xt(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(P=>xt(P)||Ar(P)),c=()=>e.map(P=>{if(ce(P))return P.value;if(xt(P))return vt(P);if(L(P))return Xe(P,l,2)})):L(e)?t?c=()=>Xe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),Oe(e,l,3,[w])}:c=Ae,t&&r){const P=c;c=()=>vt(P())}let g,w=P=>{g=O.onStop=()=>{Xe(P,l,4)}},$;if(Jt)if(w=Ae,t?n&&Oe(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const P=pf();$=P.__watcherHandles||(P.__watcherHandles=[])}else return Ae;let N=m?new Array(e.length).fill(gn):gn;const D=()=>{if(O.active)if(t){const P=O.run();(r||d||(m?P.some((H,ie)=>Rn(H,N[ie])):Rn(P,N)))&&(g&&g(),Oe(t,l,3,[P,N===gn?void 0:m&&N[0]===gn?[]:N,w]),N=P)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>de(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>oa(D));const O=new Gr(c,k);t?n?D():N=O.run():a==="post"?de(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&qr(l.scope.effects,O)};return $&&$.push(M),M}function gl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?co(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ae;Ot(this);const s=fo(a,i.bind(r),n);return o?Ot(o):ct(),s}function co(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function vt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))vt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if(ji(e)||_t(e))e.forEach(n=>{vt(n,t)});else if(Ui(e))for(const n in e)vt(e[n],t);return e}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Oe(l,n,8,[e.el,s,e,t]),Pt())}}function bl(e,t){return L(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const Pn=e=>!!e.type.__asyncLoader,uo=e=>e.type.__isKeepAlive;function yl(e,t){mo(e,"a",t)}function _l(e,t){mo(e,"da",t)}function mo(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Zn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)uo(a.parent.vnode)&&xl(r,t,n,a),a=a.parent}}function xl(e,t,n,r){const a=Zn(t,e,r,!0);po(()=>{qr(r[t],a)},n)}function Zn(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Ot(n);const s=Oe(t,n,e,o);return ct(),Pt(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=ae)=>(!Jt||e==="sp")&&Zn(e,(...r)=>t(...r),n),wl=He("bm"),kl=He("m"),Al=He("bu"),Ol=He("u"),El=He("bum"),po=He("um"),Cl=He("sp"),Sl=He("rtg"),Pl=He("rtc");function Il(e,t=ae){Zn("ec",e,t)}const ho="components";function $e(e,t){return Nl(ho,e,!0,t)||e}const Tl=Symbol.for("v-ndc");function Nl(e,t,n=!0,r=!1){const a=xe||ae;if(a){const i=a.type;if(e===ho){const s=cf(i,!1);if(s&&(s===t||s===Me(t)||s===qn(Me(t))))return i}const o=Wa(a[e]||i[e],t)||Wa(a.appContext[e],t);return!o&&r?i:o}}function Wa(e,t){return e&&(e[t]||e[Me(t)]||e[qn(Me(t))])}const Er=e=>e?Co(e)?ma(e)||e.proxy:Er(e.parent):null,Dt=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Er(e.parent),$root:e=>Er(e.root),$emit:e=>e.emit,$options:e=>fa(e),$forceUpdate:e=>e.f||(e.f=()=>oa(e.update)),$nextTick:e=>e.n||(e.n=al.bind(e.proxy)),$watch:e=>gl.bind(e)}),ur=(e,t)=>e!==J&&!e.__isScriptSetup&&U(e,t),Ml={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(ur(r,t))return o[t]=1,r[t];if(a!==J&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==J&&U(n,t))return o[t]=4,n[t];Cr&&(o[t]=0)}}const d=Dt[t];let m,g;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&U(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,U(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return ur(a,t)?(a[t]=n,!0):r!==J&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&U(e,o)||ur(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Dt,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ka(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Cr=!0;function Fl(e){const t=fa(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:g,beforeUpdate:w,updated:$,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:P,render:H,renderTracked:ie,renderTriggered:oe,errorCaptured:ge,serverPrefetch:ve,expose:Fe,inheritAttrs:Ft,components:ln,directives:fn,filters:ir}=t;if(c&&Rl(c,r,null),o)for(const Z in o){const K=o[Z];L(K)&&(r[Z]=K.bind(n))}if(a){const Z=a.call(n,n);G(Z)&&(e.data=ta(Z))}if(Cr=!0,i)for(const Z in i){const K=i[Z],et=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Ae,cn=!L(K)&&L(K.set)?K.set.bind(n):Ae,tt=at({get:et,set:cn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ee=>tt.value=Ee})}if(s)for(const Z in s)vo(s[Z],r,n,Z);if(l){const Z=L(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Ul(K,Z[K])})}d&&qa(d,e,"c");function le(Z,K){R(K)?K.forEach(et=>Z(et.bind(n))):K&&Z(K.bind(n))}if(le(wl,m),le(kl,g),le(Al,w),le(Ol,$),le(yl,N),le(_l,D),le(Il,ge),le(Pl,ie),le(Sl,oe),le(El,O),le(po,P),le(Cl,ve),R(Fe))if(Fe.length){const Z=e.exposed||(e.exposed={});Fe.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:et=>n[K]=et})})}else e.exposed||(e.exposed={});H&&e.render===Ae&&(e.render=H),Ft!=null&&(e.inheritAttrs=Ft),ln&&(e.components=ln),fn&&(e.directives=fn)}function Rl(e,t,n=Ae){R(e)&&(e=Sr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=In(a.from||r,a.default,!0):i=In(a.from||r):i=In(a),ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function qa(e,t,n){Oe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vo(e,t,n,r){const a=r.includes(".")?co(n,r):()=>n[r];if(re(e)){const i=t[e];L(i)&&Sn(a,i)}else if(L(e))Sn(a,e.bind(n));else if(G(e))if(R(e))e.forEach(i=>vo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Sn(a,i,e)}}function fa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>jn(l,c,o,!0)),jn(l,t,o)),G(t)&&i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ll={data:Va,props:Xa,emits:Xa,methods:jt,computed:jt,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:jt,directives:jt,watch:jl,provide:Va,inject:$l};function Va(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function $l(e,t){return jt(Sr(e),Sr(t))}function Sr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?ne(Object.create(null),e,t):t}function Xa(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:ne(Object.create(null),Ka(e),Ka(t??{})):t}function jl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function go(){return{app:null,config:{isNativeTag:ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Dl(e,t){return function(r,a=null){L(r)||(r=ne({},r)),a!=null&&!G(a)&&(a=null);const i=go(),o=new Set;let s=!1;const l=i.app={_uid:zl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const g=W(r,a);return g.appContext=i,d&&t?t(g,c):e(g,c,m),s=!0,l._container=c,c.__vue_app__=l,ma(g.component)||g.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){zn=l;try{return c()}finally{zn=null}}};return l}}let zn=null;function Ul(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function In(e,t,n=!1){const r=ae||xe;if(r||zn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Bl(e,t,n,r=!1){const a={},i={};Ln(i,er,1),e.propsDefaults=Object.create(null),bo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Js(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Hl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Jn(e.emitsOptions,g))continue;const w=t[g];if(l)if(U(i,g))w!==i[g]&&(i[g]=w,c=!0);else{const $=Me(g);a[$]=Pr(l,s,$,w,e,!1)}else w!==i[g]&&(i[g]=w,c=!0)}}}else{bo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!U(t,m)&&((d=Ct(m))===m||!U(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Pr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function bo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Cn(l))continue;const c=t[l];let d;a&&U(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Jn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Pr(a,l,m,c[m],e,!U(c,m))}}return o}function Pr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ot(a),r=c[n]=l.call(null,t),ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function yo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[g,w]=yo(m,t,!0);ne(o,g),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,yt),yt;if(R(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Ja(m)&&(o[m]=J)}else if(i)for(const d in i){const m=Me(d);if(Ja(m)){const g=i[d],w=o[m]=R(g)||L(g)?{type:g}:ne({},g);if(w){const $=Qa(Boolean,w.type),N=Qa(String,w.type);w[0]=$>-1,w[1]=N<0||$<N,($>-1||U(w,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function Ja(e){return e[0]!=="$"}function Ga(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Za(e,t){return Ga(e)===Ga(t)}function Qa(e,t){return R(t)?t.findIndex(n=>Za(n,e)):L(t)&&Za(t,e)?0:-1}const _o=e=>e[0]==="_"||e==="$stable",ca=e=>R(e)?e.map(Ie):[Ie(e)],Yl=(e,t,n)=>{if(t._n)return t;const r=cl((...a)=>ca(t(...a)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(_o(a))continue;const i=e[a];if(L(i))t[a]=Yl(a,i,r);else if(i!=null){const o=ca(i);t[a]=()=>o}}},wo=(e,t)=>{const n=ca(t);e.slots.default=()=>n},Wl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Ln(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&wo(e,t);Ln(e.slots,er,1)},Kl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,xo(t,a)),o=t}else t&&(wo(e,t),o={default:1});if(i)for(const s in a)!_o(s)&&!(s in o)&&delete a[s]};function Ir(e,t,n,r,a=!1){if(R(e)){e.forEach((g,w)=>Ir(g,t&&(R(t)?t[w]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?ma(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,U(m,c)&&(m[c]=null)):ce(c)&&(c.value=null)),L(l))Xe(l,s,12,[o,d]);else{const g=re(l),w=ce(l);if(g||w){const $=()=>{if(e.f){const N=g?U(m,l)?m[l]:d[l]:l.value;a?R(N)&&qr(N,i):R(N)?N.includes(i)||N.push(i):g?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=o,U(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?($.id=-1,de($,n)):$()}}}const de=vl;function ql(e){return Vl(e)}function Vl(e,t){const n=yr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:g,setScopeId:w=Ae,insertStaticContent:$}=e,N=(f,u,p,v=null,h=null,_=null,A=!1,y=null,x=!!u.dynamicChildren)=>{if(f===u)return;f&&!Lt(f,u)&&(v=un(f),Ee(f,h,_,!0),f=null),u.patchFlag===-2&&(x=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:C}=u;switch(b){case Qn:D(f,u,p,v);break;case Vt:k(f,u,p,v);break;case Tn:f==null&&O(u,p,v,A);break;case Pe:ln(f,u,p,v,h,_,A,y,x);break;default:C&1?H(f,u,p,v,h,_,A,y,x):C&6?fn(f,u,p,v,h,_,A,y,x):(C&64||C&128)&&b.process(f,u,p,v,h,_,A,y,x,mt)}I!=null&&h&&Ir(I,f&&f.ref,_,u||f,!u)},D=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},O=(f,u,p,v)=>{[f.el,f.anchor]=$(f.children,u,p,v,f.el,f.anchor)},M=({el:f,anchor:u},p,v)=>{let h;for(;f&&f!==u;)h=g(f),r(f,p,v),f=h;r(u,p,v)},P=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=g(f),a(f),f=p;a(u)},H=(f,u,p,v,h,_,A,y,x)=>{A=A||u.type==="svg",f==null?ie(u,p,v,h,_,A,y,x):ve(f,u,h,_,A,y,x)},ie=(f,u,p,v,h,_,A,y)=>{let x,b;const{type:I,props:C,shapeFlag:T,transition:F,dirs:j}=f;if(x=f.el=o(f.type,_,C&&C.is,C),T&8?d(x,f.children):T&16&&ge(f.children,x,null,v,h,_&&I!=="foreignObject",A,y),j&&nt(f,null,v,"created"),oe(x,f,f.scopeId,A,v),C){for(const Y in C)Y!=="value"&&!Cn(Y)&&i(x,Y,null,C[Y],_,f.children,v,h,Re);"value"in C&&i(x,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Se(b,v,f)}j&&nt(f,null,v,"beforeMount");const q=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;q&&F.beforeEnter(x),r(x,u,p),((b=C&&C.onVnodeMounted)||q||j)&&de(()=>{b&&Se(b,v,f),q&&F.enter(x),j&&nt(f,null,v,"mounted")},h)},oe=(f,u,p,v,h)=>{if(p&&w(f,p),v)for(let _=0;_<v.length;_++)w(f,v[_]);if(h){let _=h.subTree;if(u===_){const A=h.vnode;oe(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ge=(f,u,p,v,h,_,A,y,x=0)=>{for(let b=x;b<f.length;b++){const I=f[b]=y?qe(f[b]):Ie(f[b]);N(null,I,u,p,v,h,_,A,y)}},ve=(f,u,p,v,h,_,A)=>{const y=u.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:I}=u;x|=f.patchFlag&16;const C=f.props||J,T=u.props||J;let F;p&&rt(p,!1),(F=T.onVnodeBeforeUpdate)&&Se(F,p,u,f),I&&nt(u,f,p,"beforeUpdate"),p&&rt(p,!0);const j=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,v,j,_):A||K(f,u,y,null,p,v,j,_,!1),x>0){if(x&16)Ft(y,u,C,T,p,v,h);else if(x&2&&C.class!==T.class&&i(y,"class",null,T.class,h),x&4&&i(y,"style",C.style,T.style,h),x&8){const q=u.dynamicProps;for(let Y=0;Y<q.length;Y++){const ee=q[Y],be=C[ee],pt=T[ee];(pt!==be||ee==="value")&&i(y,ee,be,pt,h,f.children,p,v,Re)}}x&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Ft(y,u,C,T,p,v,h);((F=T.onVnodeUpdated)||I)&&de(()=>{F&&Se(F,p,u,f),I&&nt(u,f,p,"updated")},v)},Fe=(f,u,p,v,h,_,A)=>{for(let y=0;y<u.length;y++){const x=f[y],b=u[y],I=x.el&&(x.type===Pe||!Lt(x,b)||x.shapeFlag&70)?m(x.el):p;N(x,b,I,null,v,h,_,A,!0)}},Ft=(f,u,p,v,h,_,A)=>{if(p!==v){if(p!==J)for(const y in p)!Cn(y)&&!(y in v)&&i(f,y,p[y],null,A,u.children,h,_,Re);for(const y in v){if(Cn(y))continue;const x=v[y],b=p[y];x!==b&&y!=="value"&&i(f,y,b,x,A,u.children,h,_,Re)}"value"in v&&i(f,"value",p.value,v.value)}},ln=(f,u,p,v,h,_,A,y,x)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,v),r(I,p,v),ge(u.children,p,I,h,_,A,y,x)):C>0&&C&64&&T&&f.dynamicChildren?(Fe(f.dynamicChildren,T,p,h,_,A,y),(u.key!=null||h&&u===h.subTree)&&ko(f,u,!0)):K(f,u,p,I,h,_,A,y,x)},fn=(f,u,p,v,h,_,A,y,x)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,v,A,x):ir(u,p,v,h,_,A,x):Pa(f,u,x)},ir=(f,u,p,v,h,_,A)=>{const y=f.component=af(f,v,h);if(uo(f)&&(y.ctx.renderer=mt),of(y),y.asyncDep){if(h&&h.registerDep(y,le),!f.el){const x=y.subTree=W(Vt);k(null,x,u,p)}return}le(y,f,u,p,h,_,A)},Pa=(f,u,p)=>{const v=u.component=f.component;if(ml(f,u,p))if(v.asyncDep&&!v.asyncResolved){Z(v,u,p);return}else v.next=u,ol(v.update),v.update();else u.el=f.el,v.vnode=u},le=(f,u,p,v,h,_,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:C,u:T,parent:F,vnode:j}=f,q=I,Y;rt(f,!1),I?(I.el=j.el,Z(f,I,A)):I=j,C&&fr(C),(Y=I.props&&I.props.onVnodeBeforeUpdate)&&Se(Y,F,I,j),rt(f,!0);const ee=cr(f),be=f.subTree;f.subTree=ee,N(be,ee,m(be.el),un(be),f,h,_),I.el=ee.el,q===null&&pl(f,ee.el),T&&de(T,h),(Y=I.props&&I.props.onVnodeUpdated)&&de(()=>Se(Y,F,I,j),h)}else{let I;const{el:C,props:T}=u,{bm:F,m:j,parent:q}=f,Y=Pn(u);if(rt(f,!1),F&&fr(F),!Y&&(I=T&&T.onVnodeBeforeMount)&&Se(I,q,u),rt(f,!0),C&&sr){const ee=()=>{f.subTree=cr(f),sr(C,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=cr(f);N(null,ee,p,v,f,h,_),u.el=ee.el}if(j&&de(j,h),!Y&&(I=T&&T.onVnodeMounted)){const ee=u;de(()=>Se(I,q,ee),h)}(u.shapeFlag&256||q&&Pn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=v=null}},x=f.effect=new Gr(y,()=>oa(b),f.scope),b=f.update=()=>x.run();b.id=f.uid,rt(f,!0),b()},Z=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,Hl(f,u.props,v,p),Kl(f,u.children,p),St(),Ha(),Pt()},K=(f,u,p,v,h,_,A,y,x=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,C=u.children,{patchFlag:T,shapeFlag:F}=u;if(T>0){if(T&128){cn(b,C,p,v,h,_,A,y,x);return}else if(T&256){et(b,C,p,v,h,_,A,y,x);return}}F&8?(I&16&&Re(b,h,_),C!==b&&d(p,C)):I&16?F&16?cn(b,C,p,v,h,_,A,y,x):Re(b,h,_,!0):(I&8&&d(p,""),F&16&&ge(C,p,v,h,_,A,y,x))},et=(f,u,p,v,h,_,A,y,x)=>{f=f||yt,u=u||yt;const b=f.length,I=u.length,C=Math.min(b,I);let T;for(T=0;T<C;T++){const F=u[T]=x?qe(u[T]):Ie(u[T]);N(f[T],F,p,null,h,_,A,y,x)}b>I?Re(f,h,_,!0,!1,C):ge(u,p,v,h,_,A,y,x,C)},cn=(f,u,p,v,h,_,A,y,x)=>{let b=0;const I=u.length;let C=f.length-1,T=I-1;for(;b<=C&&b<=T;){const F=f[b],j=u[b]=x?qe(u[b]):Ie(u[b]);if(Lt(F,j))N(F,j,p,null,h,_,A,y,x);else break;b++}for(;b<=C&&b<=T;){const F=f[C],j=u[T]=x?qe(u[T]):Ie(u[T]);if(Lt(F,j))N(F,j,p,null,h,_,A,y,x);else break;C--,T--}if(b>C){if(b<=T){const F=T+1,j=F<I?u[F].el:v;for(;b<=T;)N(null,u[b]=x?qe(u[b]):Ie(u[b]),p,j,h,_,A,y,x),b++}}else if(b>T)for(;b<=C;)Ee(f[b],h,_,!0),b++;else{const F=b,j=b,q=new Map;for(b=j;b<=T;b++){const pe=u[b]=x?qe(u[b]):Ie(u[b]);pe.key!=null&&q.set(pe.key,b)}let Y,ee=0;const be=T-j+1;let pt=!1,Na=0;const Rt=new Array(be);for(b=0;b<be;b++)Rt[b]=0;for(b=F;b<=C;b++){const pe=f[b];if(ee>=be){Ee(pe,h,_,!0);continue}let Ce;if(pe.key!=null)Ce=q.get(pe.key);else for(Y=j;Y<=T;Y++)if(Rt[Y-j]===0&&Lt(pe,u[Y])){Ce=Y;break}Ce===void 0?Ee(pe,h,_,!0):(Rt[Ce-j]=b+1,Ce>=Na?Na=Ce:pt=!0,N(pe,u[Ce],p,null,h,_,A,y,x),ee++)}const Ma=pt?Xl(Rt):yt;for(Y=Ma.length-1,b=be-1;b>=0;b--){const pe=j+b,Ce=u[pe],Fa=pe+1<I?u[pe+1].el:v;Rt[b]===0?N(null,Ce,p,Fa,h,_,A,y,x):pt&&(Y<0||b!==Ma[Y]?tt(Ce,p,Fa,2):Y--)}}},tt=(f,u,p,v,h=null)=>{const{el:_,type:A,transition:y,children:x,shapeFlag:b}=f;if(b&6){tt(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){A.move(f,u,p,mt);return}if(A===Pe){r(_,u,p);for(let C=0;C<x.length;C++)tt(x[C],u,p,v);r(f.anchor,u,p);return}if(A===Tn){M(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(_),r(_,u,p),de(()=>y.enter(_),h);else{const{leave:C,delayLeave:T,afterLeave:F}=y,j=()=>r(_,u,p),q=()=>{C(_,()=>{j(),F&&F()})};T?T(_,j,q):q()}else r(_,u,p)},Ee=(f,u,p,v=!1,h=!1)=>{const{type:_,props:A,ref:y,children:x,dynamicChildren:b,shapeFlag:I,patchFlag:C,dirs:T}=f;if(y!=null&&Ir(y,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const F=I&1&&T,j=!Pn(f);let q;if(j&&(q=A&&A.onVnodeBeforeUnmount)&&Se(q,u,f),I&6)os(f.component,p,v);else{if(I&128){f.suspense.unmount(p,v);return}F&&nt(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,h,mt,v):b&&(_!==Pe||C>0&&C&64)?Re(b,u,p,!1,!0):(_===Pe&&C&384||!h&&I&16)&&Re(x,u,p),v&&Ia(f)}(j&&(q=A&&A.onVnodeUnmounted)||F)&&de(()=>{q&&Se(q,u,f),F&&nt(f,null,u,"unmounted")},p)},Ia=f=>{const{type:u,el:p,anchor:v,transition:h}=f;if(u===Pe){is(p,v);return}if(u===Tn){P(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,x=()=>A(p,_);y?y(f.el,_,x):x()}else _()},is=(f,u)=>{let p;for(;f!==u;)p=g(f),a(f),f=p;a(u)},os=(f,u,p)=>{const{bum:v,scope:h,update:_,subTree:A,um:y}=f;v&&fr(v),h.stop(),_&&(_.active=!1,Ee(A,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,v=!1,h=!1,_=0)=>{for(let A=_;A<f.length;A++)Ee(f[A],u,p,v,h)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),Ta=(f,u,p)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Ha(),oo(),u._vnode=f},mt={p:N,um:Ee,m:tt,r:Ia,mt:ir,mc:ge,pc:K,pbc:Fe,n:un,o:e};let or,sr;return t&&([or,sr]=t(mt)),{render:Ta,hydrate:or,createApp:Dl(Ta,or)}}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ko(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||ko(o,s)),s.type===Qn&&(s.el=o.el)}}function Xl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Jl=e=>e.__isTeleport,Pe=Symbol.for("v-fgt"),Qn=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),Ut=[];let we=null;function It(e=!1){Ut.push(we=e?null:[])}function Gl(){Ut.pop(),we=Ut[Ut.length-1]||null}let Xt=1;function ei(e){Xt+=e}function Zl(e){return e.dynamicChildren=Xt>0?we||yt:null,Gl(),Xt>0&&we&&we.push(e),e}function Tt(e,t,n,r,a,i){return Zl(z(e,t,n,r,a,i,!0))}function Tr(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",Ao=({key:e})=>e??null,Nn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ce(e)||L(e)?{i:xe,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,r=0,a=null,i=e===Pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&Nn(t),scopeId:Gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xe};return s?(ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Xt>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const W=Ql;function Ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tl)&&(e=Vt),Tr(e)){const s=At(e,t,!0);return n&&ua(s,n),Xt>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(uf(e)&&(e=e.__vccOpts),t){t=ef(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=Yt(s)),G(l)&&(to(l)&&!R(l)&&(l=ne({},l)),t.style=nn(l))}const o=re(e)?1:hl(e)?128:Jl(e)?64:G(e)?4:L(e)?2:0;return z(e,t,n,r,a,o,i,!0)}function ef(e){return e?to(e)||er in e?ne({},e):e:null}function At(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ao(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Nn(t)):[a,Nn(t)]:Nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Oo(e=" ",t=0){return W(Qn,null,e,t)}function Eo(e,t){const n=W(Tn,null,e);return n.staticCount=t,n}function Ie(e){return e==null||typeof e=="boolean"?W(Vt):R(e)?W(Pe,null,e.slice()):typeof e=="object"?qe(e):W(Qn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(er in t)?t._ctx=xe:a===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[Oo(t)]):n=8);e.children=t,e.shapeFlag|=n}function tf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Yt([t.class,r.class]));else if(a==="style")t.style=nn([t.style,r.style]);else if(Yn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Oe(e,t,7,[n,r])}const nf=go();let rf=0;function af(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nf,i={uid:rf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yo(r,a),emitsOptions:lo(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=fl.bind(null,i),e.ce&&e.ce(i),i}let ae=null,da,ht,ti="__VUE_INSTANCE_SETTERS__";(ht=yr()[ti])||(ht=yr()[ti]=[]),ht.push(e=>ae=e),da=e=>{ht.length>1?ht.forEach(t=>t(e)):ht[0](e)};const Ot=e=>{da(e),e.scope.on()},ct=()=>{ae&&ae.scope.off(),da(null)};function Co(e){return e.vnode.shapeFlag&4}let Jt=!1;function of(e,t=!1){Jt=t;const{props:n,children:r}=e.vnode,a=Co(e);Bl(e,n,a,t),Wl(e,r);const i=a?sf(e,t):void 0;return Jt=!1,i}function sf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=no(new Proxy(e.ctx,Ml));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ff(e):null;Ot(e),St();const i=Xe(r,e,0,[e.props,a]);if(Pt(),ct(),zi(i)){if(i.then(ct,ct),t)return i.then(o=>{ni(e,o,t)}).catch(o=>{Xn(o,e,0)});e.asyncDep=i}else ni(e,i,t)}else So(e,t)}function ni(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=ro(t)),So(e,n)}let ri;function So(e,t,n){const r=e.type;if(!e.render){if(!t&&ri&&!r.render){const a=r.template||fa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=ri(a,c)}}e.render=r.render||Ae}Ot(e),St(),Fl(e),Pt(),ct()}function lf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function ff(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return lf(e)},slots:e.slots,emit:e.emit,expose:t}}function ma(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ro(no(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function cf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function uf(e){return L(e)&&"__vccOpts"in e}const at=(e,t)=>nl(e,t,Jt);function df(e,t,n){const r=arguments.length;return r===2?G(t)&&!R(t)?Tr(t)?W(e,null,[t]):W(e,t):W(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),W(e,t,n))}const mf=Symbol.for("v-scx"),pf=()=>In(mf),hf="3.3.4",vf="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,ai=ot&&ot.createElement("template"),gf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(vf,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ai.innerHTML=r?`<svg>${e}</svg>`:e;const s=ai.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function bf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function yf(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Nr(r,i,"");for(const i in n)Nr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ii=/\s*!important$/;function Nr(e,t,n){if(R(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_f(e,t);ii.test(n)?e.setProperty(Ct(r),n.replace(ii,""),"important"):e[r]=n}}const oi=["Webkit","Moz","ms"],dr={};function _f(e,t){const n=dr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return dr[t]=r;r=qn(r);for(let a=0;a<oi.length;a++){const i=oi[a]+r;if(i in e)return dr[t]=i}return t}const si="http://www.w3.org/1999/xlink";function xf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(si,t.slice(6,t.length)):e.setAttributeNS(si,t,n);else{const i=ys(t);n==null||i&&!Bi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function wf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Bi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function kf(e,t,n,r){e.addEventListener(t,n,r)}function Af(e,t,n,r){e.removeEventListener(t,n,r)}function Of(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ef(t);if(r){const c=i[t]=Pf(r,a);kf(e,s,c,l)}else o&&(Af(e,s,o,l),i[t]=void 0)}}const li=/(?:Once|Passive|Capture)$/;function Ef(e){let t;if(li.test(e)){t={};let r;for(;r=e.match(li);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let mr=0;const Cf=Promise.resolve(),Sf=()=>mr||(Cf.then(()=>mr=0),mr=Date.now());function Pf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(If(r,n.value),t,5,[r])};return n.value=e,n.attached=Sf(),n}function If(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const fi=/^on[a-z]/,Tf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?bf(e,r,a):t==="style"?yf(e,n,r):Yn(t)?Kr(t)||Of(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nf(e,t,r,a))?wf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xf(e,t,r,a))};function Nf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&fi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||fi.test(t)&&re(n)?!1:t in e}const Mf=ne({patchProp:Tf},gf);let ci;function Ff(){return ci||(ci=ql(Mf))}const Rf=(...e)=>{const t=Ff().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Lf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Lf(e){return re(e)?document.querySelector(e):e}const Nt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},$f={props:{width:0,height:0}};function jf(e,t,n,r,a,i){return It(),Tt("div",{class:"border-bottom",style:nn({width:`${n.width}px`,"border-bottom":`${n.height}px solid grey`})},null,4)}const pa=Nt($f,[["render",jf],["__scopeId","data-v-fda3dc2c"]]);const zf={components:{Separator:pa},props:{img:"",title:""}},Df={class:"card"},Uf={class:"card-img"},Bf=["src"],Hf={class:"card-title"};function Yf(e,t,n,r,a,i){const o=$e("Separator");return It(),Tt("div",Df,[z("div",Uf,[z("img",{src:n.img,alt:"aloevera"},null,8,Bf)]),z("div",Hf,[W(o,{width:50,height:2}),Oo(" "+_s(n.title),1)])])}const Wf=Nt(zf,[["render",Yf],["__scopeId","data-v-546da440"]]),Kf="/ufc-w1-lombok/image/garden.jpg";const qf={components:{Separator:pa}},ha=e=>(sa("data-v-9118148f"),e=e(),la(),e),Vf={class:"about-section"},Xf=ha(()=>z("div",{class:"about-image"},[z("img",{src:Kf,"lazy-loading":"true",alt:"Garden, image, jardin"})],-1)),Jf={class:"about-text"},Gf=ha(()=>z("div",{class:"about-title"},"ABOUT",-1)),Zf=ha(()=>z("div",{class:"about-p"},[z("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus nam quasi soluta consequatur, eius suscipit earum laborum at in obcaecati laboriosam saepe enim magnam error exercitationem doloribus consequuntur harum!")],-1));function Qf(e,t,n,r,a,i){const o=$e("Separator");return It(),Tt("div",Vf,[Xf,z("div",Jf,[Gf,W(o,{width:100,height:8}),Zf])])}const ec=Nt(qf,[["render",Qf],["__scopeId","data-v-9118148f"]]);const tc={},nc={class:"contact-section"},rc=Eo('<div class="title" data-v-265f0c4f>S U B S C R I B E</div><div class="subtitle" data-v-265f0c4f> Sign up to our newsletter </div><div class="email-input" data-v-265f0c4f><input type="email" name="email" id="email" placeholder="Your email" data-v-265f0c4f></div><div class="btn-submit" data-v-265f0c4f>S U B M I T</div>',4),ac=[rc];function ic(e,t){return It(),Tt("div",nc,ac)}const oc=Nt(tc,[["render",ic],["__scopeId","data-v-265f0c4f"]]);const sc={},lc=e=>(sa("data-v-f9245032"),e=e(),la(),e),fc={class:"footer"},cc={class:"social-links"},uc=lc(()=>z("div",{class:"nav"},[z("div",{class:"nav-item"},"A B O U T"),z("div",{class:"nav-item"},"A R T I C L E S"),z("div",{class:"nav-item"},"S U B S C R I B E")],-1));function dc(e,t){const n=$e("font-awesome-icon");return It(),Tt("div",fc,[z("div",cc,[W(n,{class:"brand",icon:"fa-brands fa-instagram"}),W(n,{class:"brand",icon:"fa-brands fa-facebook"}),W(n,{class:"brand",icon:"fa-brands fa-twitter"}),W(n,{class:"brand",icon:"fa-brands fa-pinterest"})]),uc])}const mc=Nt(sc,[["render",dc],["__scopeId","data-v-f9245032"]]),pc="/ufc-w1-lombok/assets/bg_plant-86ee8e28.png";const hc={components:{Separator:pa,Card:Wf,About:ec,Contact:oc,Footer:mc},data(){return{isSticky:!1,scrolly_pr:0,nav_show:!1,show_btn_up:!1}},methods:{handleScroll(){this.isSticky=window.scrollY>10,this.scrolly_pr=window.scrollY,this.nav_show=!1,this.show_btn_up=window.scrollY>200},layerStyle(e){return{transform:`translateY(${this.scrolly_pr/e}px)`}},scroll_to_start(){window.scrollTo(0,0)}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},rn=e=>(sa("data-v-5c864cda"),e=e(),la(),e),vc={href:"#"},gc={class:"screen parallax-container bg-special border-white"},bc=rn(()=>z("div",{class:"logo"},"LO",-1)),yc=Eo('<div class="nav-item border-bottom" data-v-5c864cda><a href="#about" data-v-5c864cda>A B O U T</a></div><div class="nav-item border-bottom" data-v-5c864cda><a href="#article" data-v-5c864cda>A R T I C L E S</a></div><div class="nav-item btn-subs" data-v-5c864cda><a href="#subscribe" data-v-5c864cda>S U B S C R I B E</a></div>',3),_c=[yc],xc=rn(()=>z("div",{class:"title"},"LOMBOK",-1)),wc=rn(()=>z("div",{class:"subtitle"},"HOLISTIC HEALTH",-1)),kc=rn(()=>z("div",{class:"image_bg"},[z("img",{src:pc,alt:"img"})],-1)),Ac={class:"bg-special latest-article",id:"article"},Oc={class:"screen-title"},Ec=rn(()=>z("h1",null,"LATEST ARTICLES",-1)),Cc={class:"screen-list"},Sc={class:"",id:"about"},Pc={class:"center bg-special",id:"subscribe"},Ic={class:"footer"};function Tc(e,t,n,r,a,i){const o=$e("font-awesome-icon"),s=$e("Separator"),l=$e("Card"),c=$e("About"),d=$e("Contact"),m=$e("Footer");return It(),Tt(Pe,null,[z("div",{class:Yt(["btn-back-home",{"btn-show":a.show_btn_up}]),onClick:t[0]||(t[0]=(...g)=>i.scroll_to_start&&i.scroll_to_start(...g))},[z("a",vc,[W(o,{icon:"fa-solid fa-arrow-up"})])],2),z("div",gc,[z("div",{class:"banniere",style:nn(i.layerStyle(2))},[z("header",null,[bc,z("nav",{class:Yt({show_nav:a.nav_show,hide_nav:!a.nav_show})},_c,2),z("div",{class:"menu-bars",onClick:t[1]||(t[1]=g=>a.nav_show=!a.nav_show)},[W(o,{icon:"fa-solid fa-bars"})])]),xc,wc,W(s,{width:100,height:8})],4),kc]),z("div",Ac,[z("div",Oc,[Ec,W(s,{width:100,height:8})]),z("div",Cc,[W(l,{img:"./image/aloevera.jpg",title:"How to use mindfullness in your every day life"}),W(l,{img:"./image/walking.jpg",title:"What are the best walking meditation"}),W(l,{img:"./image/plant silver.jpg",title:"How to go deep into the mind of hope"})])]),z("div",Sc,[W(c)]),z("div",Pc,[W(d)]),z("div",Ic,[W(m)])],64)}const Nc=Nt(hc,[["render",Tc],["__scopeId","data-v-5c864cda"]]);function ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ui(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){"@babel/helpers - typeof";return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function Mc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function di(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fc(e,t,n){return t&&di(e.prototype,t),n&&di(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function va(e,t){return Lc(e)||jc(e,t)||Po(e,t)||Dc()}function an(e){return Rc(e)||$c(e)||Po(e)||zc()}function Rc(e){if(Array.isArray(e))return Mr(e)}function Lc(e){if(Array.isArray(e))return e}function $c(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Po(e,t){if(e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mi=function(){},ga={},Io={},To=null,No={mark:mi,measure:mi};try{typeof window<"u"&&(ga=window),typeof document<"u"&&(Io=document),typeof MutationObserver<"u"&&(To=MutationObserver),typeof performance<"u"&&(No=performance)}catch{}var Uc=ga.navigator||{},pi=Uc.userAgent,hi=pi===void 0?"":pi,Ge=ga,X=Io,vi=To,bn=No;Ge.document;var Ye=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Mo=~hi.indexOf("MSIE")||~hi.indexOf("Trident/"),yn,_n,xn,wn,kn,De="___FONT_AWESOME___",Fr=16,Fo="fa",Ro="svg-inline--fa",ut="data-fa-i2svg",Rr="data-fa-pseudo-element",Bc="data-fa-pseudo-element-pending",ba="data-prefix",ya="data-icon",gi="fontawesome-i2svg",Hc="async",Yc=["HTML","HEAD","STYLE","SCRIPT"],Lo=function(){try{return!0}catch{return!1}}(),V="classic",Q="sharp",_a=[V,Q];function on(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Gt=on((yn={},te(yn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(yn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),yn)),Zt=on((_n={},te(_n,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(_n,Q,{solid:"fass",regular:"fasr",light:"fasl"}),_n)),Qt=on((xn={},te(xn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(xn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),xn)),Wc=on((wn={},te(wn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(wn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),wn)),Kc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,$o="fa-layers-text",qc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vc=on((kn={},te(kn,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(kn,Q,{900:"fass",400:"fasr",300:"fasl"}),kn)),jo=[1,2,3,4,5,6,7,8,9,10],Xc=jo.concat([11,12,13,14,15,16,17,18,19,20]),Jc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Zt[V]).map(en.add.bind(en));Object.keys(Zt[Q]).map(en.add.bind(en));var Gc=[].concat(_a,an(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY]).concat(jo.map(function(e){return"".concat(e,"x")})).concat(Xc.map(function(e){return"w-".concat(e)})),Bt=Ge.FontAwesomeConfig||{};function Zc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var eu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];eu.forEach(function(e){var t=va(e,2),n=t[0],r=t[1],a=Qc(Zc(n));a!=null&&(Bt[r]=a)})}var zo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fo,replacementClass:Ro,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var Et=E(E({},zo),Bt);Et.autoReplaceSvg||(Et.observeMutations=!1);var S={};Object.keys(zo).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Et[e]=n,Ht.forEach(function(r){return r(S)})},get:function(){return Et[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Et.cssPrefix=t,Ht.forEach(function(n){return n(S)})},get:function(){return Et.cssPrefix}});Ge.FontAwesomeConfig=S;var Ht=[];function tu(e){return Ht.push(e),function(){Ht.splice(Ht.indexOf(e),1)}}var Ke=Fr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nu(e){if(!(!e||!Ye)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var ru="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=ru[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xa(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Do(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function au(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Do(e[n]),'" ')},"").trim()}function tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function wa(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function iu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function ou(e){var t=e.transform,n=e.width,r=n===void 0?Fr:n,a=e.height,i=a===void 0?Fr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Mo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var su=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Uo(){var e=Fo,t=Ro,n=S.cssPrefix,r=S.replacementClass,a=su;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var bi=!1;function pr(){S.autoAddCss&&!bi&&(nu(Uo()),bi=!0)}var lu={mixout:function(){return{dom:{css:Uo,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},Ue=Ge||{};Ue[De]||(Ue[De]={});Ue[De].styles||(Ue[De].styles={});Ue[De].hooks||(Ue[De].hooks={});Ue[De].shims||(Ue[De].shims=[]);var ke=Ue[De],Bo=[],fu=function e(){X.removeEventListener("DOMContentLoaded",e),Un=1,Bo.map(function(t){return t()})},Un=!1;Ye&&(Un=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Un||X.addEventListener("DOMContentLoaded",fu));function cu(e){Ye&&(Un?setTimeout(e,0):Bo.push(e))}function sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Do(e):"<".concat(t," ").concat(au(r),">").concat(i.map(sn).join(""),"</").concat(t,">")}function yi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var uu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},hr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?uu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function du(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Lr(e){var t=du(e);return t.length===1?t[0].toString(16):null}function mu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function _i(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function $r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=_i(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,_i(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&$r("fa",t)}var An,On,En,gt=ke.styles,pu=ke.shims,hu=(An={},te(An,V,Object.values(Qt[V])),te(An,Q,Object.values(Qt[Q])),An),ka=null,Ho={},Yo={},Wo={},Ko={},qo={},vu=(On={},te(On,V,Object.keys(Gt[V])),te(On,Q,Object.keys(Gt[Q])),On);function gu(e){return~Gc.indexOf(e)}function bu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!gu(a)?a:null}var Vo=function(){var t=function(i){return hr(gt,function(o,s,l){return o[l]=hr(s,i,{}),o},{})};Ho=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Yo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in gt||S.autoFetchSvg,r=hr(pu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Wo=r.names,Ko=r.unicodes,ka=nr(S.styleDefault,{family:S.familyDefault})};tu(function(e){ka=nr(e.styleDefault,{family:S.familyDefault})});Vo();function Aa(e,t){return(Ho[e]||{})[t]}function yu(e,t){return(Yo[e]||{})[t]}function lt(e,t){return(qo[e]||{})[t]}function Xo(e){return Wo[e]||{prefix:null,iconName:null}}function _u(e){var t=Ko[e],n=Aa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return ka}var Oa=function(){return{prefix:null,iconName:null,rest:[]}};function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Gt[r][e],i=Zt[r][e]||Zt[r][a],o=e in ke.styles?e:null;return i||o||null}var xi=(En={},te(En,V,Object.keys(Qt[V])),te(En,Q,Object.keys(Qt[Q])),En);function rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,V,"".concat(S.cssPrefix,"-").concat(V)),te(t,Q,"".concat(S.cssPrefix,"-").concat(Q)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return xi[V].includes(c)}))&&(s=V),(e.includes(i[Q])||e.some(function(c){return xi[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,d){var m=bu(S.cssPrefix,d);if(gt[d]?(d=hu[s].includes(d)?Wc[s][d]:d,o=d,c.prefix=d):vu[s].indexOf(d)>-1?(o=d,c.prefix=nr(d,{family:s})):m?c.iconName=m:d!==S.replacementClass&&d!==i[V]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var g=o==="fa"?Xo(c.iconName):{},w=lt(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||w||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!gt.far&&gt.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},Oa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(gt.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=lt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ze()||"fas"),l}var xu=function(){function e(){Mc(this,e),this.definitions={}}return Fc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),$r(s,o[s]);var l=Qt[V][s];l&&$r(l,o[s]),Vo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),wi=[],bt={},kt={},wu=Object.keys(kt);function ku(e,t){var n=t.mixoutsTo;return wi=e,bt={},Object.keys(kt).forEach(function(r){wu.indexOf(r)===-1&&delete kt[r]}),wi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){bt[o]||(bt[o]=[]),bt[o].push(i[o])})}r.provides&&r.provides(kt)}),n}function jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function zr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(t)return t=lt(n,t)||t,yi(Jo.definitions,n,t)||yi(ke.styles,n,t)}var Jo=new xu,Au=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,dt("noAuto")},Ou={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(dt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,cu(function(){Cu({autoReplaceSvgRoot:n}),dt("watch",t)})}},Eu={icon:function(t){if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:lt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nr(t[0]);return{prefix:r,iconName:lt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Kc))){var a=rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:lt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:lt(i,t)||t}}}},he={noAuto:Au,config:S,dom:Ou,parse:Eu,library:Jo,findIconDefinition:zr,toHtml:sn},Cu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||S.autoFetchSvg)&&Ye&&S.autoReplaceSvg&&he.dom.i2svg({node:r})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Su(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(wa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=tr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Pu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ea(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,w=g===void 0?!1:g,$=r.found?r:n,N=$.width,D=$.height,k=a==="fak",O=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},P=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(M.attributes[ut]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||tn())},children:[l]}),delete M.attributes.title);var H=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},P),m.styles)}),ie=r.found&&n.found?Be("generateAbstractMask",H)||{children:[],attributes:{}}:Be("generateAbstractIcon",H)||{children:[],attributes:{}},oe=ie.children,ge=ie.attributes;return H.children=oe,H.attributes=ge,s?Pu(H):Su(H)}function ki(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ut]="");var d=E({},o.styles);wa(a)&&(d.transform=ou({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=tr(d);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Iu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vr=ke.styles;function Dr(e){var t=e[0],n=e[1],r=e.slice(4),a=va(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(st.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(st.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(st.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Tu={found:!1,width:512,height:512};function Nu(e,t){!Lo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ur(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Xo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var o=vr[t][e];return r(Dr(o))}Nu(e,t),r(E(E({},Tu),{},{icon:S.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var Ai=function(){},Br=S.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Ai,measure:Ai},zt='FA "6.4.2"',Mu=function(t){return Br.mark("".concat(zt," ").concat(t," begins")),function(){return Go(t)}},Go=function(t){Br.mark("".concat(zt," ").concat(t," ends")),Br.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},Ca={begin:Mu,end:Go},Mn=function(){};function Oi(e){var t=e.getAttribute?e.getAttribute(ut):null;return typeof t=="string"}function Fu(e){var t=e.getAttribute?e.getAttribute(ba):null,n=e.getAttribute?e.getAttribute(ya):null;return t&&n}function Ru(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Lu(){if(S.autoReplaceSvg===!0)return Fn.replace;var e=Fn[S.autoReplaceSvg];return e||Fn.replace}function $u(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function ju(e){return X.createElement(e)}function Zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$u:ju:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Zo(o,{ceFn:r}))}),a}function zu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Zo(a),n)}),n.getAttribute(ut)===null&&S.keepOriginalSource){var r=X.createComment(zu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~xa(n).indexOf(S.replacementClass))return Fn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(ut,""),n.innerHTML=o}};function Ei(e){e()}function Qo(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=Ei;S.mutateApproach===Hc&&(r=Ge.requestAnimationFrame||Ei),r(function(){var a=Lu(),i=Ca.begin("mutate");e.map(a),i(),n()})}}var Sa=!1;function es(){Sa=!0}function Hr(){Sa=!1}var Bn=null;function Ci(e){if(vi&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,o=i===void 0?Mn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Bn=new vi(function(c){if(!Sa){var d=Ze();Mt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Oi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Oi(m.target)&&~Jc.indexOf(m.attributeName))if(m.attributeName==="class"&&Fu(m.target)){var g=rr(xa(m.target)),w=g.prefix,$=g.iconName;m.target.setAttribute(ba,w||d),$&&m.target.setAttribute(ya,$)}else Ru(m.target)&&a(m.target)})}}),Ye&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Du(){Bn&&Bn.disconnect()}function Uu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Bu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=rr(xa(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=yu(a.prefix,e.innerText)||Aa(a.prefix,Lr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Hu(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Bu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Hu(e),s=jr("parseNodeAttributes",{},e),l=t.styleParser?Uu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Wu=ke.styles;function ts(e){var t=S.autoReplaceSvg==="nest"?Si(e,{styleParser:!1}):Si(e);return~t.extra.classes.indexOf($o)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var Qe=new Set;_a.map(function(e){Qe.add("fa-".concat(e))});Object.keys(Gt[V]).map(Qe.add.bind(Qe));Object.keys(Gt[Q]).map(Qe.add.bind(Qe));Qe=an(Qe);function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(gi,"-").concat(m))},a=function(m){return n.remove("".concat(gi,"-").concat(m))},i=S.autoFetchSvg?Qe:_a.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Wu));i.includes("fa")||i.push("fa");var o=[".".concat($o,":not([").concat(ut,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ut,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Mt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ca.begin("onTree"),c=s.reduce(function(d,m){try{var g=ts(m);g&&d.push(g)}catch(w){Lo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(g){Qo(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function Ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ts(e).then(function(n){n&&Qo([n],t)})}function qu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:zr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:zr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Vu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,g=m===void 0?null:m,w=n.titleId,$=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,M=n.styles,P=M===void 0?{}:M;if(t){var H=t.prefix,ie=t.iconName,oe=t.icon;return ar(E({type:"icon"},t),function(){return dt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(g?O["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat($||tn()):(O["aria-hidden"]="true",O.focusable="false")),Ea({icons:{main:Dr(oe),mask:l?Dr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ie,transform:E(E({},Ne),a),symbol:o,title:g,maskId:d,titleId:$,extra:{attributes:O,styles:P,classes:D}})})}},Xu={mixout:function(){return{icon:qu(Vu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Pi,n.nodeCallback=Ku,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Pi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(w,$){Promise.all([Ur(a,s),d.iconName?Ur(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=va(N,2),k=D[0],O=D[1];w([n,Ea({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch($)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=tr(s);l.length>0&&(a.style=l);var c;return wa(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ju={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ar({type:"layer"},function(){dt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},Gu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ar({type:"counter",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),Iu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},Zu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,w=g===void 0?{}:g;return ar({type:"text",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),ki({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(S.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Mo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ki({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Qu=new RegExp('"',"ug"),Ii=[1105920,1112319];function ed(e){var t=e.replace(Qu,""),n=mu(t,0),r=n>=Ii[0]&&n<=Ii[1],a=t.length===2?t[0]===t[1]:!1;return{value:Lr(a?t[0]:t),isSecondary:r||a}}function Ti(e,t){var n="".concat(Bc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),o=i.filter(function(oe){return oe.getAttribute(Rr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?Q:V,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zt[g][l[2].toLowerCase()]:Vc[g][c],$=ed(m),N=$.value,D=$.isSecondary,k=l[0].startsWith("FontAwesome"),O=Aa(w,N),M=O;if(k){var P=_u(N);P.iconName&&P.prefix&&(O=P.iconName,w=P.prefix)}if(O&&!D&&(!o||o.getAttribute(ba)!==w||o.getAttribute(ya)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var H=Yu(),ie=H.extra;ie.attributes[Rr]=t,Ur(O,w).then(function(oe){var ge=Ea(E(E({},H),{},{icons:{main:oe,mask:Oa()},prefix:w,iconName:M,extra:ie,watchable:!0})),ve=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ge.map(function(Fe){return sn(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function td(e){return Promise.all([Ti(e,"::before"),Ti(e,"::after")])}function nd(e){return e.parentNode!==document.head&&!~Yc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ni(e){if(Ye)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(nd).map(td),a=Ca.begin("searchPseudoElements");es(),Promise.all(r).then(function(){a(),Hr(),t()}).catch(function(){a(),Hr(),n()})})}var rd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ni,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;S.searchPseudoElements&&Ni(a)}}},Mi=!1,ad={mixout:function(){return{dom:{unwatch:function(){es(),Mi=!0}}}},hooks:function(){return{bootstrap:function(){Ci(jr("mutationObserverCallbacks",{}))},noAuto:function(){Du()},watch:function(n){var r=n.observeMutationsRoot;Mi?Hr():Ci(jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},id={mixout:function(){return{parse:{transform:function(n){return Fi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Fi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:g};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function od(e){return e.tag==="g"?e.children:[e]}var sd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?rr(a.split(" ").map(function(o){return o.trim()})):Oa();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,g=o.icon,w=iu({transform:l,containerWidth:m,iconWidth:c}),$={tag:"rect",attributes:E(E({},gr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ri)}:{},D={tag:"g",attributes:E({},w.inner),children:[Ri(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(s||tn()),M="clip-".concat(s||tn()),P={tag:"mask",attributes:E(E({},gr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[$,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:od(g)},P]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},gr)}),{children:r,attributes:a}}}},ld={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},cd=[lu,Xu,Ju,Gu,Zu,rd,ad,id,sd,ld,fd];ku(cd,{mixoutsTo:he});he.noAuto;he.config;var ud=he.library;he.dom;var Yr=he.parse;he.findIconDefinition;he.toHtml;var dd=he.icon;he.layer;he.text;he.counter;function Li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Li(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){"@babel/helpers - typeof";return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function md(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function pd(e,t){if(e==null)return{};var n=md(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ns={exports:{}};(function(e){(function(t){var n=function(k,O,M){if(!c(O)||m(O)||g(O)||w(O)||l(O))return O;var P,H=0,ie=0;if(d(O))for(P=[],ie=O.length;H<ie;H++)P.push(n(k,O[H],M));else{P={};for(var oe in O)Object.prototype.hasOwnProperty.call(O,oe)&&(P[k(oe,M)]=n(k,O[oe],M))}return P},r=function(k,O){O=O||{};var M=O.separator||"_",P=O.split||/(?=[A-Z])/;return k.split(P).join(M)},a=function(k){return $(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},g=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},$=function(k){return k=k-0,k===k},N=function(k,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?k:function(P,H){return M(P,k,H)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(hd)})(ns);var vd=ns.exports,gd=["class","style"];function bd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function yd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function rs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return rs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=yd(d);break;case"style":l.style=bd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=pd(n,gd);return df(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var as=!1;try{as=!0}catch{}function _d(){if(!as&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function xd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function $i(e){if(e&&Hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Yr.icon)return Yr.icon(e);if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var wd=bl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=at(function(){return $i(t.icon)}),i=at(function(){return br("classes",xd(t))}),o=at(function(){return br("transform",typeof t.transform=="string"?Yr.transform(t.transform):t.transform)}),s=at(function(){return br("mask",$i(t.mask))}),l=at(function(){return dd(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Sn(l,function(d){if(!d)return _d("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=at(function(){return l.value?rs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),kd={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ad={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Od={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ed={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Cd={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Sd={prefix:"fab",iconName:"pinterest",icon:[496,512,[],"f0d2","M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"]};ud.add(Od,Ed,Cd,Sd,kd,Ad);Rf(Nc).component("font-awesome-icon",wd).mount("#app");
