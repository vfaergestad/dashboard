"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[1429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},s="Stores",i={unversionedId:"code-base-works/stores",id:"code-base-works/stores",title:"Stores",description:"Location",source:"@site/docs/code-base-works/stores.md",sourceDirName:"code-base-works",slug:"/code-base-works/stores",permalink:"/dashboard/code-base-works/stores",draft:!1,tags:[],version:"current",lastUpdatedAt:1682414047,formattedLastUpdatedAt:"Apr 25, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Middleware",permalink:"/dashboard/code-base-works/middleware"},next:{title:"Nuxt Plugins",permalink:"/dashboard/code-base-works/nuxt-plugins"}},l={},c=[{value:"Location",id:"location",level:2},{value:"Notes",id:"notes",level:2},{value:"Pattern",id:"pattern",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stores"},"Stores"),(0,o.kt)("h2",{id:"location"},"Location"),(0,o.kt)("p",null,"The definitions of stores reside in ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/store"),". Stores added to ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/nuxt/store.js")," will be initialized at the start of the app rendering. "),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"This file was generated by nuxt and will soon be redefined by hand. It's safe to add new stores to this file."),(0,o.kt)("h2",{id:"pattern"},"Pattern"),(0,o.kt)("p",null,"Define the store in a file that resides within ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/store"),". Then add the store to ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/nuxt/store.js"),"."),(0,o.kt)("p",null,"shell/nuxt/store.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\nresolveStoreModules(require('../store/i18n.js'), 'i18n.js')\n...\n")))}p.isMDXComponent=!0}}]);