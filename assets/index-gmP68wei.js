const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CGLeT65P.js","assets/mui-vendor-C1YKb_C-.js","assets/react-vendor-DyFf35aq.js","assets/About-dzkD_Zd5.js","assets/Courses-CGOfC1Jk.js"])))=>i.map(i=>d[i]);
import{r as c,R as Se,j as v,A as Le,T as je,a as Te,B as q,c as Be,b as Oe}from"./mui-vendor-C1YKb_C-.js";import{a as Ne}from"./react-vendor-DyFf35aq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var F={},te;function Ie(){if(te)return F;te=1;var e=Ne();return F.createRoot=e.createRoot,F.hydrateRoot=e.hydrateRoot,F}var ne=Ie();const Ue="modulepreload",Fe=function(e){return"/my-educator-app/"+e},re={},Z=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(n.map(s=>{if(s=Fe(s),s in re)return;re[s]=!0;const d=s.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${f}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Ue,d||(u.as="script"),u.crossOrigin="",u.href=s,l&&u.setAttribute("nonce",l),document.head.appendChild(u),d)return new Promise((p,C)=>{u.addEventListener("load",p),u.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${s}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return a.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}var b;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(b||(b={}));const ae="popstate";function _e(e){e===void 0&&(e={});function t(r,a){let{pathname:o,search:i,hash:l}=r.location;return G("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:$(a)}return We(t,n,null,e)}function P(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function de(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $e(){return Math.random().toString(36).substr(2,8)}function oe(e,t){return{usr:e.state,key:e.key,idx:t}}function G(e,t,n,r){return n===void 0&&(n=null),O({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?B(t):t,{state:n,key:t&&t.key||r||$e()})}function $(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function B(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function We(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,l=b.Pop,s=null,d=f();d==null&&(d=0,i.replaceState(O({},i.state,{idx:d}),""));function f(){return(i.state||{idx:null}).idx}function u(){l=b.Pop;let h=f(),m=h==null?null:h-d;d=h,s&&s({action:l,location:y.location,delta:m})}function p(h,m){l=b.Push;let g=G(y.location,h,m);d=f()+1;let E=oe(g,d),w=y.createHref(g);try{i.pushState(E,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(w)}o&&s&&s({action:l,location:y.location,delta:1})}function C(h,m){l=b.Replace;let g=G(y.location,h,m);d=f();let E=oe(g,d),w=y.createHref(g);i.replaceState(E,"",w),o&&s&&s({action:l,location:y.location,delta:0})}function x(h){let m=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof h=="string"?h:$(h);return g=g.replace(/ $/,"%20"),P(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let y={get action(){return l},get location(){return e(a,i)},listen(h){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(ae,u),s=h,()=>{a.removeEventListener(ae,u),s=null}},createHref(h){return t(a,h)},createURL:x,encodeLocation(h){let m=x(h);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:C,go(h){return i.go(h)}};return y}var ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ie||(ie={}));function ke(e,t,n){return n===void 0&&(n="/"),Ae(e,t,n)}function Ae(e,t,n,r){let a=typeof t=="string"?B(t):t,o=T(a.pathname||"/",n);if(o==null)return null;let i=fe(e);De(i);let l=null;for(let s=0;l==null&&s<i.length;++s){let d=Ye(o);l=Xe(i[s],d)}return l}function fe(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,i,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&(P(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let d=S([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(P(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),fe(o.children,t,f,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:He(d,o.index),routesMeta:f})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,i);else for(let s of he(o.path))a(o,i,s)}),t}function he(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let i=he(r.join("/")),l=[];return l.push(...i.map(s=>s===""?o:[o,s].join("/"))),a&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function De(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ge(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Me=/^:[\w-]+$/,Ve=3,ze=2,qe=1,Je=10,Ke=-2,le=e=>e==="*";function He(e,t){let n=e.split("/"),r=n.length;return n.some(le)&&(r+=Ke),t&&(r+=ze),n.filter(a=>!le(a)).reduce((a,o)=>a+(Me.test(o)?Ve:o===""?qe:Je),r)}function Ge(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Xe(e,t,n){let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],d=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",u=X({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},f),p=s.route;if(!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:S([o,u.pathname]),pathnameBase:nt(S([o,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(o=S([o,u.pathnameBase]))}return i}function X(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qe(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((d,f,u)=>{let{paramName:p,isOptional:C}=f;if(p==="*"){let y=l[u]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const x=l[u];return C&&!x?d[p]=void 0:d[p]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:i,pattern:e}}function Qe(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),de(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Ye(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return de(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function T(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ze(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?B(e):e;return{pathname:n?n.startsWith("/")?n:et(n,t):t,search:rt(r),hash:at(a)}}function et(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function J(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tt(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pe(e,t){let n=tt(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function me(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=B(e):(a=O({},e),P(!a.pathname||!a.pathname.includes("?"),J("?","pathname","search",a)),P(!a.pathname||!a.pathname.includes("#"),J("#","pathname","hash",a)),P(!a.search||!a.search.includes("#"),J("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=n;else{let u=t.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),u-=1;a.pathname=p.join("/")}l=u>=0?t[u]:"/"}let s=Ze(a,l),d=i&&i!=="/"&&i.endsWith("/"),f=(o||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(d||f)&&(s.pathname+="/"),s}const S=e=>e.join("/").replace(/\/\/+/g,"/"),nt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,at=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ot(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ve=["post","put","patch","delete"];new Set(ve);const it=["get",...ve];new Set(it);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}const k=c.createContext(null),ge=c.createContext(null),L=c.createContext(null),A=c.createContext(null),j=c.createContext({outlet:null,matches:[],isDataRoute:!1}),xe=c.createContext(null);function lt(e,t){let{relative:n}=t===void 0?{}:t;I()||P(!1);let{basename:r,navigator:a}=c.useContext(L),{hash:o,pathname:i,search:l}=D(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:S([r,i])),a.createHref({pathname:s,search:l,hash:o})}function I(){return c.useContext(A)!=null}function U(){return I()||P(!1),c.useContext(A).location}function ye(e){c.useContext(L).static||c.useLayoutEffect(e)}function st(){let{isDataRoute:e}=c.useContext(j);return e?Ct():ct()}function ct(){I()||P(!1);let e=c.useContext(k),{basename:t,future:n,navigator:r}=c.useContext(L),{matches:a}=c.useContext(j),{pathname:o}=U(),i=JSON.stringify(pe(a,n.v7_relativeSplatPath)),l=c.useRef(!1);return ye(()=>{l.current=!0}),c.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let u=me(d,JSON.parse(i),o,f.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:S([t,u.pathname])),(f.replace?r.replace:r.push)(u,f.state,f)},[t,r,i,o,e])}function D(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=c.useContext(L),{matches:a}=c.useContext(j),{pathname:o}=U(),i=JSON.stringify(pe(a,r.v7_relativeSplatPath));return c.useMemo(()=>me(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function ut(e,t){return dt(e,t)}function dt(e,t,n,r){I()||P(!1);let{navigator:a,static:o}=c.useContext(L),{matches:i}=c.useContext(j),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let f=U(),u;if(t){var p;let m=typeof t=="string"?B(t):t;d==="/"||(p=m.pathname)!=null&&p.startsWith(d)||P(!1),u=m}else u=f;let C=u.pathname||"/",x=C;if(d!=="/"){let m=d.replace(/^\//,"").split("/");x="/"+C.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=ke(e,{pathname:x}),h=vt(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:S([d,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?d:S([d,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n,r);return t&&h?c.createElement(A.Provider,{value:{location:N({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:b.Pop}},h):h}function ft(){let e=Et(),t=ot(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:a},n):null,null)}const ht=c.createElement(ft,null);class pt extends c.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?c.createElement(j.Provider,{value:this.props.routeContext},c.createElement(xe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mt(e){let{routeContext:t,match:n,children:r}=e,a=c.useContext(k);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(j.Provider,{value:t},r)}function vt(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,l=(a=n)==null?void 0:a.errors;if(l!=null){let f=i.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);f>=0||P(!1),i=i.slice(0,Math.min(i.length,f+1))}let s=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<i.length;f++){let u=i[f];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=f),u.route.id){let{loaderData:p,errors:C}=n,x=u.route.loader&&p[u.route.id]===void 0&&(!C||C[u.route.id]===void 0);if(u.route.lazy||x){s=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((f,u,p)=>{let C,x=!1,y=null,h=null;n&&(C=l&&u.route.id?l[u.route.id]:void 0,y=u.route.errorElement||ht,s&&(d<0&&p===0?(Pt("route-fallback"),x=!0,h=null):d===p&&(x=!0,h=u.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,p+1)),g=()=>{let E;return C?E=y:x?E=h:u.route.Component?E=c.createElement(u.route.Component,null):u.route.element?E=u.route.element:E=f,c.createElement(mt,{match:u,routeContext:{outlet:f,matches:m,isDataRoute:n!=null},children:E})};return n&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?c.createElement(pt,{location:n.location,revalidation:n.revalidation,component:y,error:C,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var Ee=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ee||{}),Ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ce||{});function gt(e){let t=c.useContext(k);return t||P(!1),t}function xt(e){let t=c.useContext(ge);return t||P(!1),t}function yt(e){let t=c.useContext(j);return t||P(!1),t}function Pe(e){let t=yt(),n=t.matches[t.matches.length-1];return n.route.id||P(!1),n.route.id}function Et(){var e;let t=c.useContext(xe),n=xt(),r=Pe();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ct(){let{router:e}=gt(Ee.UseNavigateStable),t=Pe(Ce.UseNavigateStable),n=c.useRef(!1);return ye(()=>{n.current=!0}),c.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,N({fromRouteId:t},o)))},[e,t])}const se={};function Pt(e,t,n){se[e]||(se[e]=!0)}function wt(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _(e){P(!1)}function Rt(e){let{basename:t="/",children:n=null,location:r,navigationType:a=b.Pop,navigator:o,static:i=!1,future:l}=e;I()&&P(!1);let s=t.replace(/^\/*/,"/"),d=c.useMemo(()=>({basename:s,navigator:o,static:i,future:N({v7_relativeSplatPath:!1},l)}),[s,l,o,i]);typeof r=="string"&&(r=B(r));let{pathname:f="/",search:u="",hash:p="",state:C=null,key:x="default"}=r,y=c.useMemo(()=>{let h=T(f,s);return h==null?null:{location:{pathname:h,search:u,hash:p,state:C,key:x},navigationType:a}},[s,f,u,p,C,x,a]);return y==null?null:c.createElement(L.Provider,{value:d},c.createElement(A.Provider,{children:n,value:y}))}function bt(e){let{children:t,location:n}=e;return ut(Q(t),n)}new Promise(()=>{});function Q(e,t){t===void 0&&(t=[]);let n=[];return c.Children.forEach(e,(r,a)=>{if(!c.isValidElement(r))return;let o=[...t,a];if(r.type===c.Fragment){n.push.apply(n,Q(r.props.children,o));return}r.type!==_&&P(!1),!r.props.index||!r.props.children||P(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Q(r.props.children,o)),n.push(i)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function we(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function St(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lt(e,t){return e.button===0&&(!t||t==="_self")&&!St(e)}const jt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Tt=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Bt="6";try{window.__reactRouterVersion=Bt}catch{}const Ot=c.createContext({isTransitioning:!1}),Nt="startTransition",ce=Se[Nt];function It(e){let{basename:t,children:n,future:r,window:a}=e,o=c.useRef();o.current==null&&(o.current=_e({window:a,v5Compat:!0}));let i=o.current,[l,s]=c.useState({action:i.action,location:i.location}),{v7_startTransition:d}=r||{},f=c.useCallback(u=>{d&&ce?ce(()=>s(u)):s(u)},[s,d]);return c.useLayoutEffect(()=>i.listen(f),[i,f]),c.useEffect(()=>wt(r),[r]),c.createElement(Rt,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:r})}const Ut=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ft=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_t=c.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:i,state:l,target:s,to:d,preventScrollReset:f,viewTransition:u}=t,p=we(t,jt),{basename:C}=c.useContext(L),x,y=!1;if(typeof d=="string"&&Ft.test(d)&&(x=d,Ut))try{let E=new URL(window.location.href),w=d.startsWith("//")?new URL(E.protocol+d):new URL(d),R=T(w.pathname,C);w.origin===E.origin&&R!=null?d=R+w.search+w.hash:y=!0}catch{}let h=lt(d,{relative:a}),m=Wt(d,{replace:i,state:l,target:s,preventScrollReset:f,relative:a,viewTransition:u});function g(E){r&&r(E),E.defaultPrevented||m(E)}return c.createElement("a",W({},p,{href:x||h,onClick:y||o?r:g,ref:n,target:s}))}),K=c.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:i=!1,style:l,to:s,viewTransition:d,children:f}=t,u=we(t,Tt),p=D(s,{relative:u.relative}),C=U(),x=c.useContext(ge),{navigator:y,basename:h}=c.useContext(L),m=x!=null&&kt(p)&&d===!0,g=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,E=C.pathname,w=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;a||(E=E.toLowerCase(),w=w?w.toLowerCase():null,g=g.toLowerCase()),w&&h&&(w=T(w,h)||w);const R=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let M=E===g||!i&&E.startsWith(g)&&E.charAt(R)==="/",ee=w!=null&&(w===g||!i&&w.startsWith(g)&&w.charAt(g.length)==="/"),V={isActive:M,isPending:ee,isTransitioning:m},Re=M?r:void 0,z;typeof o=="function"?z=o(V):z=[o,M?"active":null,ee?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let be=typeof l=="function"?l(V):l;return c.createElement(_t,W({},u,{"aria-current":Re,className:z,ref:n,style:be,to:s,viewTransition:d}),typeof f=="function"?f(V):f)});var Y;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Y||(Y={}));var ue;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ue||(ue={}));function $t(e){let t=c.useContext(k);return t||P(!1),t}function Wt(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i,viewTransition:l}=t===void 0?{}:t,s=st(),d=U(),f=D(e,{relative:i});return c.useCallback(u=>{if(Lt(u,n)){u.preventDefault();let p=r!==void 0?r:$(d)===$(f);s(e,{replace:p,state:a,preventScrollReset:o,relative:i,viewTransition:l})}},[d,s,f,r,a,n,e,o,i,l])}function kt(e,t){t===void 0&&(t={});let n=c.useContext(Ot);n==null&&P(!1);let{basename:r}=$t(Y.useViewTransitionState),a=D(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=T(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=T(n.nextLocation.pathname,r)||n.nextLocation.pathname;return X(a.pathname,i)!=null||X(a.pathname,o)!=null}const At=()=>v.jsx(Le,{position:"static",children:v.jsxs(je,{children:[v.jsx(Te,{variant:"h6",sx:{flexGrow:1},children:"EDUFINITE"}),v.jsx(K,{to:"/",className:({isActive:e})=>e?"active-route":"",style:{textDecoration:"none"},children:v.jsx(q,{color:"inherit",children:"Home"})}),v.jsx(K,{to:"/about",className:({isActive:e})=>e?"active-route":"",style:{textDecoration:"none"},children:v.jsx(q,{color:"inherit",children:"About"})}),v.jsx(K,{to:"/courses",className:({isActive:e})=>e?"active-route":"",style:{textDecoration:"none"},children:v.jsx(q,{color:"inherit",children:"Courses"})})]})}),Dt=c.lazy(()=>Z(()=>import("./Home-CGLeT65P.js"),__vite__mapDeps([0,1,2]))),Mt=c.lazy(()=>Z(()=>import("./About-dzkD_Zd5.js"),__vite__mapDeps([3,1,2]))),Vt=c.lazy(()=>Z(()=>import("./Courses-CGOfC1Jk.js"),__vite__mapDeps([4,1,2])));function zt(){return v.jsx("div",{className:"appContainer",children:v.jsxs(It,{basename:"/my-educator-app",children:[v.jsx(At,{}),v.jsx(c.Suspense,{fallback:v.jsx("div",{children:"Loading..."}),children:v.jsxs(bt,{children:[v.jsx(_,{path:"/",element:v.jsx(Dt,{})}),v.jsx(_,{path:"/about",element:v.jsx(Mt,{})}),v.jsx(_,{path:"/courses",element:v.jsx(Vt,{})})]})})]})})}const qt=Be({palette:{primary:{main:"#6EC5E9",contrastText:"#FFFFFF"},secondary:{main:"#F8A8BB",contrastText:"#FFFFFF"},success:{main:"#C1E7C0",contrastText:"#333333"},warning:{main:"#F8E9A1",contrastText:"#333333"},error:{main:"#F3BAB3",contrastText:"#333333"},background:{default:"#FDFDFD"},text:{primary:"#333333",secondary:"#555555"}},typography:{fontFamily:"'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",h1:{fontSize:"2.2rem",fontWeight:700,color:"#333333",letterSpacing:"0.5px"},h2:{fontSize:"1.75rem",fontWeight:600,color:"#555555",marginBottom:"0.5rem"}},shape:{borderRadius:8}}),Jt=({onComplete:e})=>{const[t,n]=c.useState(!1),[r,a]=c.useState(0);return c.useEffect(()=>{const o=setInterval(()=>{a(i=>i>=100?(clearInterval(o),100):i+5)},150);return setTimeout(()=>{n(!0)},3e3),setTimeout(()=>{e()},5e3),()=>clearInterval(o)},[e]),v.jsx("div",{className:`preloader ${t?"fade-out":""}`,children:v.jsxs("div",{className:"preloader-content",children:[v.jsx("img",{src:"/my-educator-app/edufinitelogo.webp",alt:"Edufinite Logo",className:"preloader-logo"}),v.jsxs("div",{className:"progress-text",children:[r,"%"]})]})})},H=document.getElementById("root");if(H){H.innerHTML='<div id="preload"></div>';const e=ne.createRoot(document.getElementById("preload"));e.render(v.jsx(c.StrictMode,{children:v.jsx(Jt,{onComplete:()=>{e.unmount(),ne.createRoot(H).render(v.jsx(c.StrictMode,{children:v.jsx(Oe,{theme:qt,children:v.jsx(zt,{})})}))}})}))}export{Z as _};
