"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[2315],{5680:(e,t,i)=>{i.d(t,{xA:()=>s,yg:()=>h});var r=i(6540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(i),g=n,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return i?r.createElement(h,o(o({ref:t},s),{},{components:i})):r.createElement(h,o({ref:t},s))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}g.displayName="MDXCreateElement"},7229:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=i(8168),n=(i(6540),i(5680));const a={title:"Flexibily create, update, and export apps with Epinio.",description:"Allowing the user more flexibility in how they create and export apps",authors:["sorin","richard","francesco"],tags:["Epinio"]},o=void 0,p={permalink:"/blog/2023/04/10/epinio-gitlab/epinio-gitlab",source:"@site/blog/2023-04-10-epinio-gitlab/epinio-gitlab.md",title:"Flexibily create, update, and export apps with Epinio.",description:"Allowing the user more flexibility in how they create and export apps",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"Epinio",permalink:"/blog/tags/epinio"}],readingTime:.645,hasTruncateMarker:!1,authors:[{name:"Sorin Cursecu",title:"Sr. UX Developer",url:"https://github.com/scures",imageURL:"https://github.com/scures.png",key:"sorin"},{name:"Richard Cox",title:"UX/UI Developer",url:"https://github.com/richard-cox",imageURL:"https://github.com/richard-cox.png",key:"richard"},{name:"Francesco Torchia",title:"UX/UI Developer",url:"https://github.com/torchiaf",imageURL:"https://github.com/torchiaf.png",key:"francesco"}],frontMatter:{title:"Flexibily create, update, and export apps with Epinio.",description:"Allowing the user more flexibility in how they create and export apps",authors:["sorin","richard","francesco"],tags:["Epinio"]},prevItem:{title:"Inactivity notification and timeout settings in the UI",permalink:"/blog/2023/04/13/socket-disconnect-modal"}},l={authorsImageUrls:[void 0,void 0,void 0]},c=[{value:"Epinio Applications Workflow Updates",id:"epinio-applications-workflow-updates",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"epinio-applications-workflow-updates"},"Epinio Applications Workflow Updates"),(0,n.yg)("p",null,"Based on user feedback, we've made 4 improvements to the Epinio UI which make it easier to create, update and export applications."),(0,n.yg)("p",null,"Epinio now supports Gitlab directly in the application deployment creation workflow.\nUsers can create application deployments from Gitlab repositories:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Step 1",src:i(7153).A,width:"1215",height:"847"})),(0,n.yg)("hr",null),(0,n.yg)("p",null,"The application deployment creation UI now supports custom application variables (based on schema-ish metadata). Where possible, the UI informs the user about boundaries such as min/max allowed values."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Step 2",src:i(4055).A,width:"1248",height:"864"})),(0,n.yg)("hr",null),(0,n.yg)("p",null,"It's now possible to change the source of an existing application. For example, if an application was initially deployed from a GitHub repository, we can now update the source to point to Gitlab instead."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Overview",src:i(1038).A,width:"1248",height:"893"})),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Users can export applications as a helm chart and corresponding container image(s). "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Export",src:i(9772).A,width:"1250",height:"896"})))}d.isMDXComponent=!0},9772:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/image1-d61e5e05810c65c93df64a06761b5a59.png"},4055:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/image2-407afe4ff8bfa46c12b9f3b7dbe0d560.png"},1038:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/image3-88fdc27e24c9d7831d5e8ea5adf974bd.png"},7153:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/image4-f1aa7dfd2ba6ee68cdcaaedeeb8cc71c.png"}}]);