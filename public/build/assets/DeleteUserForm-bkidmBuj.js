import{a as Je,r as s,U as m,j as v,m as Qe}from"./app-BM8vArYW.js";import{T as et,I as tt}from"./TextInput-DnLqM-Z6.js";import{I as nt}from"./InputLabel-zvn0UEiL.js";import{s as oe,K as x,L as $,y as D,n as O,o as y,a as X,b as _,u as Y,t as le,T as rt,l as ae,p as ot,f as xe,F as G,c as $e,z as Te,i as V,d as lt,O as pe}from"./transition-CIfx4bLu.js";var at=Je();function z(e){return oe.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ut=s.createContext(void 0);function it(){return s.useContext(ut)}let st="span";var q=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(q||{});function ct(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $()({ourProps:l,theirProps:o,slot:{},defaultTag:st,name:"Hidden"})}let ee=x(ct),ue=s.createContext(null);ue.displayName="DescriptionContext";function Fe(){let e=s.useContext(ue);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Fe),t}return e}function dt(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=y(l=>(t(u=>[...u,l]),()=>t(u=>{let i=u.slice(),a=i.indexOf(l);return a!==-1&&i.splice(a,1),i}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return m.createElement(ue.Provider,{value:o},n.children)},[t])]}let ft="p";function mt(e,t){let n=s.useId(),r=it(),{id:o=`headlessui-description-${n}`,...l}=e,u=Fe(),i=D(t);O(()=>u.register(o),[o,u.register]);let a=r||!1,d=s.useMemo(()=>({...u.slot,disabled:a}),[u.slot,a]),c={ref:i,...u.props,id:o};return $()({ourProps:c,theirProps:l,slot:d,defaultTag:ft,name:u.name||"Description"})}let pt=x(mt),ht=Object.assign(pt,{});var Pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Pe||{});let vt=s.createContext(()=>{});function gt({value:e,children:t}){return m.createElement(vt.Provider,{value:e},t)}let wt=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Le(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let u=t[o].call(n,...l);u&&(n=u,r.forEach(i=>i()))}}}function Se(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let Et=new wt(()=>Le(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function k(e,t){let n=Et.get(t),r=s.useId(),o=Se(n);if(O(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let l=o.indexOf(r),u=o.length;return l===-1&&(l=u,u+=1),l===u-1}let te=new Map,U=new Map;function he(e){var t;let n=(t=U.get(e))!=null?t:0;return U.set(e,n+1),n!==0?()=>ve(e):(te.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>ve(e))}function ve(e){var t;let n=(t=U.get(e))!=null?t:1;if(n===1?U.delete(e):U.set(e,n-1),n!==1)return;let r=te.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,te.delete(e))}function yt(e,{allowed:t,disallowed:n}={}){let r=k(e,"inert-others");O(()=>{var o,l;if(!r)return;let u=X();for(let a of(o=n==null?void 0:n())!=null?o:[])a&&u.add(he(a));let i=(l=t==null?void 0:t())!=null?l:[];for(let a of i){if(!a)continue;let d=z(a);if(!d)continue;let c=a.parentElement;for(;c&&c!==d.body;){for(let p of c.children)i.some(h=>p.contains(h))||u.add(he(p));c=c.parentElement}}return u.dispose},[r,t,n])}function bt(e,t,n){let r=_(o=>{let l=o.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&n()});s.useEffect(()=>{if(!e)return;let o=t===null?null:t instanceof HTMLElement?t:t.current;if(!o)return;let l=X();if(typeof ResizeObserver<"u"){let u=new ResizeObserver(()=>r.current(o));u.observe(o),l.add(()=>u.disconnect())}if(typeof IntersectionObserver<"u"){let u=new IntersectionObserver(()=>r.current(o));u.observe(o),l.add(()=>u.disconnect())}return()=>l.dispose()},[t,r,e])}let K=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),xt=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(F||{}),ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ne||{}),$t=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))($t||{});function Tt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(K)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function Ft(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(xt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function Pt(e,t=0){var n;return e===((n=z(e))==null?void 0:n.body)?!1:Y(t,{0(){return e.matches(K)},1(){let r=e;for(;r!==null;){if(r.matches(K))return!0;r=r.parentElement}return!1}})}var Lt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Lt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function P(e){e==null||e.focus({preventScroll:!0})}let St=["textarea","input"].join(",");function Dt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,St))!=null?n:!1}function Ct(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let u=o.compareDocumentPosition(l);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function B(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?n?Ct(e):e:t&64?Ft(e):Tt(e);o.length>0&&u.length>1&&(u=u.filter(f=>!o.some(g=>g!=null&&"current"in g?(g==null?void 0:g.current)===f:g===f))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,p=u.length,h;do{if(c>=p||c+p<=0)return 0;let f=a+c;if(t&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}h=u[f],h==null||h.focus(d),c+=i}while(h!==l.activeElement);return t&6&&Dt(h)&&h.select(),2}function Ce(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Mt(){return/Android/gi.test(window.navigator.userAgent)}function Nt(){return Ce()||Mt()}function j(e,t,n,r){let o=_(n);s.useEffect(()=>{if(!e)return;function l(u){o.current(u)}return document.addEventListener(t,l,r),()=>document.removeEventListener(t,l,r)},[e,t,r])}function Me(e,t,n,r){let o=_(n);s.useEffect(()=>{if(!e)return;function l(u){o.current(u)}return window.addEventListener(t,l,r),()=>window.removeEventListener(t,l,r)},[e,t,r])}const ge=30;function At(e,t,n){let r=k(e,"outside-click"),o=_(n),l=s.useCallback(function(a,d){if(a.defaultPrevented)return;let c=d(a);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let p=function h(f){return typeof f=="function"?h(f()):Array.isArray(f)||f instanceof Set?f:[f]}(t);for(let h of p)if(h!==null&&(h.contains(c)||a.composed&&a.composedPath().includes(h)))return;return!Pt(c,De.Loose)&&c.tabIndex!==-1&&a.preventDefault(),o.current(a,c)},[o,t]),u=s.useRef(null);j(r,"pointerdown",a=>{var d,c;u.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),j(r,"mousedown",a=>{var d,c;u.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),j(r,"click",a=>{Nt()||u.current&&(l(a,()=>u.current),u.current=null)},!0);let i=s.useRef({x:0,y:0});j(r,"touchstart",a=>{i.current.x=a.touches[0].clientX,i.current.y=a.touches[0].clientY},!0),j(r,"touchend",a=>{let d={x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY};if(!(Math.abs(d.x-i.current.x)>=ge||Math.abs(d.y-i.current.y)>=ge))return l(a,()=>a.target instanceof HTMLElement?a.target:null)},!0),Me(r,"blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function W(...e){return s.useMemo(()=>z(...e),[...e])}function Ne(e,t,n,r){let o=_(n);s.useEffect(()=>{e=e??window;function l(u){o.current(u)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function Ot(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),l=Math.max(0,e-o);n.style(r,"paddingRight",`${l}px`)}}}function Rt(){return Ce()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=X();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,u=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let a=i.target.closest("a");if(!a)return;let{hash:d}=new URL(a.href),c=e.querySelector(d);c&&!r(c)&&(u=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let a=i.target;for(;a.parentElement&&r(a.parentElement);)a=a.parentElement;t.style(a,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(r(i.target)){let a=i.target;for(;a.parentElement&&a.dataset.headlessuiPortal!==""&&!(a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth);)a=a.parentElement;a.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let a=(i=window.scrollY)!=null?i:window.pageYOffset;l!==a&&window.scrollTo(0,l),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)})})}}:{}}function kt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function It(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let A=Le(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:X(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:It(n)},o=[Rt(),Ot(),kt()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});A.subscribe(()=>{let e=A.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&A.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&A.dispatch("TEARDOWN",n)}});function jt(e,t,n=()=>({containers:[]})){let r=Se(A),o=t?r.get(t):void 0,l=o?o.count>0:!1;return O(()=>{if(!(!t||!e))return A.dispatch("PUSH",t,n),()=>A.dispatch("POP",t,n)},[e,t]),l}function Ht(e,t,n=()=>[document.body]){let r=k(e,"scroll-lock");jt(r,t,o=>{var l;return{containers:[...(l=o.containers)!=null?l:[],n]}})}function ie(e,t){let n=s.useRef([]),r=y(e);s.useEffect(()=>{let o=[...n.current];for(let[l,u]of t.entries())if(n.current[l]!==u){let i=r(t,o);return n.current=t,i}},[r,...t])}function Ut(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let S=[];Ut(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||S[0]===t.target)return;let n=t.target;n=n.closest(K),S.unshift(n??t.target),S=S.filter(r=>r!=null&&r.isConnected),S.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ae(e){let t=y(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,le(()=>{n.current&&t()})}),[t])}let Oe=s.createContext(!1);function Bt(){return s.useContext(Oe)}function we(e){return m.createElement(Oe.Provider,{value:e.force},e.children)}function _t(e){let t=Bt(),n=s.useContext(ke),r=W(e),[o,l]=s.useState(()=>{var u;if(!t&&n!==null)return(u=n.current)!=null?u:null;if(oe.isServer)return null;let i=r==null?void 0:r.getElementById("headlessui-portal-root");if(i)return i;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let Re=s.Fragment,Wt=x(function(e,t){let n=e,r=s.useRef(null),o=D(rt(p=>{r.current=p}),t),l=W(r),u=_t(r),[i]=s.useState(()=>{var p;return oe.isServer?null:(p=l==null?void 0:l.createElement("div"))!=null?p:null}),a=s.useContext(re),d=ae();O(()=>{!u||!i||u.contains(i)||(i.setAttribute("data-headlessui-portal",""),u.appendChild(i))},[u,i]),O(()=>{if(i&&a)return a.register(i)},[a,i]),Ae(()=>{var p;!u||!i||(i instanceof Node&&u.contains(i)&&u.removeChild(i),u.childNodes.length<=0&&((p=u.parentElement)==null||p.removeChild(u)))});let c=$();return d?!u||!i?null:at.createPortal(c({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:Re,name:"Portal"}),i):null});function Vt(e,t){let n=D(t),{enabled:r=!0,...o}=e,l=$();return r?m.createElement(Wt,{...o,ref:n}):l({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:Re,name:"Portal"})}let Yt=s.Fragment,ke=s.createContext(null);function Gt(e,t){let{target:n,...r}=e,o={ref:D(t)},l=$();return m.createElement(ke.Provider,{value:n},l({ourProps:o,theirProps:r,defaultTag:Yt,name:"Popover.Group"}))}let re=s.createContext(null);function qt(){let e=s.useContext(re),t=s.useRef([]),n=y(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=y(l=>{let u=t.current.indexOf(l);u!==-1&&t.current.splice(u,1),e&&e.unregister(l)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:l}){return m.createElement(re.Provider,{value:o},l)},[o])]}let Kt=x(Vt),Ie=x(Gt),Xt=Object.assign(Kt,{Group:Ie});function zt(e,t=typeof document<"u"?document.defaultView:null,n){let r=k(e,"escape");Ne(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Pe.Escape&&n(o))})}function Zt(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return O(()=>{if(!t)return;function o(l){r(l.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function Jt({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=W(n),o=y(()=>{var l,u;let i=[];for(let a of e)a!==null&&(a instanceof HTMLElement?i.push(a):"current"in a&&a.current instanceof HTMLElement&&i.push(a.current));if(t!=null&&t.current)for(let a of t.current)i.push(a);for(let a of(l=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?l:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(n&&(a.contains(n)||a.contains((u=n==null?void 0:n.getRootNode())==null?void 0:u.host))||i.some(d=>a.contains(d))||i.push(a));return i});return{resolveContainers:o,contains:y(l=>o().some(u=>u.contains(l)))}}let je=s.createContext(null);function Ee({children:e,node:t}){let[n,r]=s.useState(null),o=He(t??n);return m.createElement(je.Provider,{value:o},e,o===null&&m.createElement(ee,{features:q.Hidden,ref:l=>{var u,i;if(l){for(let a of(i=(u=z(l))==null?void 0:u.querySelectorAll("html > *, body > *"))!=null?i:[])if(a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a!=null&&a.contains(l)){r(a);break}}}}))}function He(e=null){var t;return(t=s.useContext(je))!=null?t:e}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Qt(){let e=s.useRef(0);return Me(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ue(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let en="div";var N=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(N||{});function tn(e,t){let n=s.useRef(null),r=D(n,t),{initialFocus:o,initialFocusFallback:l,containers:u,features:i=15,...a}=e;ae()||(i=0);let d=W(n);ln(i,{ownerDocument:d});let c=an(i,{ownerDocument:d,container:n,initialFocus:o,initialFocusFallback:l});un(i,{ownerDocument:d,container:n,containers:u,previousActiveElement:c});let p=Qt(),h=y(E=>{let L=n.current;L&&(b=>b())(()=>{Y(p.current,{[H.Forwards]:()=>{B(L,F.First,{skipElements:[E.relatedTarget,l]})},[H.Backwards]:()=>{B(L,F.Last,{skipElements:[E.relatedTarget,l]})}})})}),f=k(!!(i&2),"focus-trap#tab-lock"),g=ot(),C=s.useRef(!1),M={ref:r,onKeyDown(E){E.key=="Tab"&&(C.current=!0,g.requestAnimationFrame(()=>{C.current=!1}))},onBlur(E){if(!(i&4))return;let L=Ue(u);n.current instanceof HTMLElement&&L.add(n.current);let b=E.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(Be(L,b)||(C.current?B(n.current,Y(p.current,{[H.Forwards]:()=>F.Next,[H.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:E.target}):E.target instanceof HTMLElement&&P(E.target)))}},T=$();return m.createElement(m.Fragment,null,f&&m.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:q.Focusable}),T({ourProps:M,theirProps:a,defaultTag:en,name:"FocusTrap"}),f&&m.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:q.Focusable}))}let nn=x(tn),rn=Object.assign(nn,{features:N});function on(e=!0){let t=s.useRef(S.slice());return ie(([n],[r])=>{r===!0&&n===!1&&le(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=S.slice())},[e,S,t]),y(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function ln(e,{ownerDocument:t}){let n=!!(e&8),r=on(n);ie(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&P(r())},[n]),Ae(()=>{n&&P(r())})}function an(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let l=s.useRef(null),u=k(!!(e&1),"focus-trap#initial-focus"),i=xe();return ie(()=>{if(e===0)return;if(!u){o!=null&&o.current&&P(o.current);return}let a=n.current;a&&le(()=>{if(!i.current)return;let d=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===d){l.current=d;return}}else if(a.contains(d)){l.current=d;return}if(r!=null&&r.current)P(r.current);else{if(e&16){if(B(a,F.First|F.AutoFocus)!==ne.Error)return}else if(B(a,F.First)!==ne.Error)return;if(o!=null&&o.current&&(P(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=t==null?void 0:t.activeElement})},[o,u,e]),l}function un(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let l=xe(),u=!!(e&4);Ne(t==null?void 0:t.defaultView,"focus",i=>{if(!u||!l.current)return;let a=Ue(r);n.current instanceof HTMLElement&&a.add(n.current);let d=o.current;if(!d)return;let c=i.target;c&&c instanceof HTMLElement?Be(a,c)?(o.current=c,P(c)):(i.preventDefault(),i.stopPropagation(),P(d)):P(o.current)},!0)}function Be(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var sn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(sn||{}),cn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(cn||{});let dn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},se=s.createContext(null);se.displayName="DialogContext";function Z(e){let t=s.useContext(se);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return t}function fn(e,t){return Y(t.type,dn,e,t)}let ye=x(function(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:u,role:i="dialog",autoFocus:a=!0,__demoMode:d=!1,unmount:c=!1,...p}=e,h=s.useRef(!1);i=function(){return i==="dialog"||i==="alertdialog"?i:(h.current||(h.current=!0,console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let f=$e();o===void 0&&f!==null&&(o=(f&V.Open)===V.Open);let g=s.useRef(null),C=D(g,t),M=W(g),T=o?0:1,[E,L]=s.useReducer(fn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),b=y(()=>l(!1)),ce=y(w=>L({type:0,id:w})),R=ae()?T===0:!1,[We,Ve]=qt(),Ye={get current(){var w;return(w=E.panelRef.current)!=null?w:g.current}},J=He(),{resolveContainers:Q}=Jt({mainTreeNode:J,portals:We,defaultContainers:[Ye]}),de=f!==null?(f&V.Closing)===V.Closing:!1;yt(d||de?!1:R,{allowed:y(()=>{var w,me;return[(me=(w=g.current)==null?void 0:w.closest("[data-headlessui-portal]"))!=null?me:null]}),disallowed:y(()=>{var w;return[(w=J==null?void 0:J.closest("body > *:not(#headlessui-portal-root)"))!=null?w:null]})}),At(R,Q,w=>{w.preventDefault(),b()}),zt(R,M==null?void 0:M.defaultView,w=>{w.preventDefault(),w.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),b()}),Ht(d||de?!1:R,M,Q),bt(R,g,b);let[Ge,qe]=dt(),Ke=s.useMemo(()=>[{dialogState:T,close:b,setTitleId:ce,unmount:c},E],[T,E,b,ce,c]),fe=s.useMemo(()=>({open:T===0}),[T]),Xe={ref:C,id:r,role:i,tabIndex:-1,"aria-modal":d?void 0:T===0?!0:void 0,"aria-labelledby":E.titleId,"aria-describedby":Ge,unmount:c},ze=!Zt(),I=N.None;R&&!d&&(I|=N.RestoreFocus,I|=N.TabLock,a&&(I|=N.AutoFocus),ze&&(I|=N.InitialFocus));let Ze=$();return m.createElement(lt,null,m.createElement(we,{force:!0},m.createElement(Xt,null,m.createElement(se.Provider,{value:Ke},m.createElement(Ie,{target:g},m.createElement(we,{force:!1},m.createElement(qe,{slot:fe},m.createElement(Ve,null,m.createElement(rn,{initialFocus:u,initialFocusFallback:g,containers:Q,features:I},m.createElement(gt,{value:b},Ze({ourProps:Xe,theirProps:p,slot:fe,defaultTag:mn,features:pn,visible:T===0,name:"Dialog"})))))))))))}),mn="div",pn=pe.RenderStrategy|pe.Static;function hn(e,t){let{transition:n=!1,open:r,...o}=e,l=$e(),u=e.hasOwnProperty("open")||l!==null,i=e.hasOwnProperty("onClose");if(!u&&!i)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!u)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!i)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!l&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?m.createElement(Ee,null,m.createElement(Te,{show:r,transition:n,unmount:o.unmount},m.createElement(ye,{ref:t,...o}))):m.createElement(Ee,null,m.createElement(ye,{ref:t,open:r,...o}))}let vn="div";function gn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...l}=e,[{dialogState:u,unmount:i},a]=Z("Dialog.Panel"),d=D(t,a.panelRef),c=s.useMemo(()=>({open:u===0}),[u]),p=y(M=>{M.stopPropagation()}),h={ref:d,id:r,onClick:p},f=o?G:s.Fragment,g=o?{unmount:i}:{},C=$();return m.createElement(f,{...g},C({ourProps:h,theirProps:l,slot:c,defaultTag:vn,name:"Dialog.Panel"}))}let wn="div";function En(e,t){let{transition:n=!1,...r}=e,[{dialogState:o,unmount:l}]=Z("Dialog.Backdrop"),u=s.useMemo(()=>({open:o===0}),[o]),i={ref:t,"aria-hidden":!0},a=n?G:s.Fragment,d=n?{unmount:l}:{},c=$();return m.createElement(a,{...d},c({ourProps:i,theirProps:r,slot:u,defaultTag:wn,name:"Dialog.Backdrop"}))}let yn="h2";function bn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:u}]=Z("Dialog.Title"),i=D(t);s.useEffect(()=>(u(r),()=>u(null)),[r,u]);let a=s.useMemo(()=>({open:l===0}),[l]),d={ref:i,id:r};return $()({ourProps:d,theirProps:o,slot:a,defaultTag:yn,name:"Dialog.Title"})}let xn=x(hn),_e=x(gn);x(En);let $n=x(bn),Tn=Object.assign(xn,{Panel:_e,Title:$n,Description:ht});function be({className:e="",disabled:t,children:n,...r}){return v.jsx("button",{...r,className:`inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function Fn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},u={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v.jsx(Te,{show:t,leave:"duration-200",children:v.jsxs(Tn,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",onClose:l,children:[v.jsx(G,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),v.jsx(G,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v.jsx(_e,{className:`mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${u}`,children:e})})]})})}function Pn({type:e="button",className:t="",disabled:n,children:r,...o}){return v.jsx("button",{...o,type:e,className:`inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Nn({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:l,delete:u,processing:i,reset:a,errors:d,clearErrors:c}=Qe({password:""}),p=()=>{n(!0)},h=g=>{g.preventDefault(),u(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>f(),onError:()=>r.current.focus(),onFinish:()=>a()})},f=()=>{n(!1),c(),a()};return v.jsxs("section",{className:`space-y-6 ${e}`,children:[v.jsxs("header",{children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),v.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v.jsx(be,{onClick:p,children:"Delete Account"}),v.jsx(Fn,{show:t,onClose:f,children:v.jsxs("form",{onSubmit:h,className:"p-6",children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),v.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),v.jsxs("div",{className:"mt-6",children:[v.jsx(nt,{htmlFor:"password",value:"Password",className:"sr-only"}),v.jsx(et,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:g=>l("password",g.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v.jsx(tt,{message:d.password,className:"mt-2"})]}),v.jsxs("div",{className:"mt-6 flex justify-end",children:[v.jsx(Pn,{onClick:f,children:"Cancel"}),v.jsx(be,{className:"ms-3",disabled:i,children:"Delete Account"})]})]})})]})}export{Nn as default};
