"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[5371],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=g(n),m=r,u=d["".concat(p,".").concat(m)]||d[m]||y[m]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(8168),r=(n(6540),n(5680));const l={},i="Tabs",o={unversionedId:"extensions/api/tabs",id:"extensions/api/tabs",title:"Tabs",description:"Tabs present custom content inside a new Tab of an existing Tabbed Area section",source:"@site/docs/extensions/api/tabs.md",sourceDirName:"extensions/api",slug:"/extensions/api/tabs",permalink:"/extensions/api/tabs",draft:!1,tags:[],version:"current",lastUpdatedAt:1715364831,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Panels",permalink:"/extensions/api/panels"},next:{title:"Table Columns",permalink:"/extensions/api/table-columns"}},p={},g=[{value:"addTab",id:"addtab",level:2},{value:"TabLocation.RESOURCE_DETAIL options",id:"tablocationresource_detail-options",level:3}],s={toc:g},d="wrapper";function y(e){let{components:t,...l}=e;return(0,r.yg)(d,(0,a.A)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"tabs"},"Tabs"),(0,r.yg)("p",null,"Tabs present custom content inside a new Tab of an existing Tabbed Area section\nwithin the Rancher UI."),(0,r.yg)("p",null,"Tabs are added to Rancher via the ",(0,r.yg)("inlineCode",{parentName:"p"},"addTab")," method."),(0,r.yg)("h2",{id:"addtab"},"addTab"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"(Rancher version v2.7.2)")),(0,r.yg)("p",null,"This method adds a tab to the UI."),(0,r.yg)("p",null,"Method:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"plugin.addTab(where: String, when: LocationConfig, options: Object);\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Arguments")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"where")," string parameter admissable values for this method:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TabLocation.RESOURCE_DETAIL")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for a Tab on a Resource Detail page")))),(0,r.yg)("br",null),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"when")," Object admissable values:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"LocationConfig")," as described above for the ",(0,r.yg)("a",{parentName:"p",href:"./common#locationconfig"},"LocationConfig object"),"."),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"tablocationresource_detail-options"},"TabLocation.RESOURCE_DETAIL options"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tabs",src:n(925).A,width:"1511",height:"1001"})),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,r.yg)("inlineCode",{parentName:"p"},"options")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"'TabLocation.RESOURCE_DETAIL'")," are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"name")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Query param name used in url when tab is active/clicked")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"label")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Text for the tab label")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"labelKey")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},'Same as "label" but allows for translation. Will superseed "label"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"weight")),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"Defines the order on which the tab is displayed in relation to other tabs in the component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"showHeader")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the tab header is displayed or not")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tooltip")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Tooltip message (on tab header)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"component")),(0,r.yg)("td",{parentName:"tr",align:null},"Function"),(0,r.yg)("td",{parentName:"tr",align:null},"Component to be rendered as content on the tab")))),(0,r.yg)("p",null,"Usage example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"plugin.addTab( \n  TabLocation.RESOURCE_DETAIL,\n  { resource: ['pod'] }, \n  {\n    name:       'some-name',\n    labelKey:   'plugin-examples.tab-label',\n    label:      'some-label',\n    weight:     -5,\n    showHeader: true,\n    tooltip:    'this is a tooltip message',\n    component:  () => import('./MyTabComponent.vue')\n  }\n);\n")))}y.isMDXComponent=!0},925:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/add-tab-27c2ec2f62a38c1559d6841c14b4f266.png"}}]);