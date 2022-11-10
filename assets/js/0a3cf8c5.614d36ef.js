"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,f=u["".concat(d,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"Server-side Rendering"},o="Server-side-Rendering (SSR)",s={unversionedId:"server-side-rendering",id:"server-side-rendering",title:"Server-side-Rendering (SSR)",description:"Update: From Rancher 2.6.6 SSR mode is disabled for devs by default",source:"@site/docs/server-side-rendering.md",sourceDirName:".",slug:"/server-side-rendering",permalink:"/dashboard/server-side-rendering",draft:!1,tags:[],version:"current",lastUpdatedAt:1668073381,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{sidebar_label:"Server-side Rendering"},sidebar:"tutorialSidebar",previous:{title:"Products and Navigation",permalink:"/dashboard/products-and-navigation"},next:{title:"Style and Format",permalink:"/dashboard/style"}},d={},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-side-rendering-ssr"},"Server-side-Rendering (SSR)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Update: From Rancher 2.6.6 SSR mode is disabled for devs by default")),(0,a.kt)("p",null,'Nuxt supports server-side-rendering (SSR), where a node.js server runs the UI code on the server-side and responds with the fully-baked HTML of the desired page.  This allows it to make all the necessary API calls directly "to itself", with less latency, versus serving up an empty page which loads all the JS, then starts making API calls across the slower server<->user connection.'),(0,a.kt)("p",null,"But actually using this mode would require a node.js process (with sometimes considerable overhead) running inside of every Rancher container, and coordination with Rancher to proxy requests that should be for the UI to it.  So we don't actually ship anything using this mode, Rancher releases use single-page-app (SPA) mode only."),(0,a.kt)("p",null,"We have no concrete plans for this, but can envision several situations where we might want to use SSR in the future, so maintaining the functionality is an engineering priority.  Therefore SSR is on by default for development, and you should keep it that way in general.  It is relatively easy to write something that will break in SSR, and if not exercised we'd end up with many different slightly broken things that add up to a large effort to ever get it running again if needed."),(0,a.kt)("p",null,"To disable it for the whole server for development, add ",(0,a.kt)("inlineCode",{parentName:"p"},"--spa"),".  To disable it for a single page load, add ",(0,a.kt)("inlineCode",{parentName:"p"},"?spa")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"&spa"),") to the query string.  It is harder, but possible, to write something that works in SSR but breaks in SPA, so these are good for debugging issues."),(0,a.kt)("p",null,"SSR causes certain NUXT component functions to execute server side, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"async fetch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"asyncData")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nuxtServerInit"),". State returned by these and the core Vuex store is transferred back to the client by the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.__NUXT__")," property. As these contain resources that should be Proxy objects the Dashboard rehydrates them as such via ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/dashboard-store/index.js"),". There you can see any resource tagged with ",(0,a.kt)("inlineCode",{parentName:"p"},"__rehydrate")," or array with  ",(0,a.kt)("inlineCode",{parentName:"p"},"__rehydrateAll__<x>")," will be converted into back into a Proxy object in the client."))}p.isMDXComponent=!0}}]);