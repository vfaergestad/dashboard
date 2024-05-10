"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[2002],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>c});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(t),_=i,c=g["".concat(p,".").concat(_)]||g[_]||d[_]||r;return t?a.createElement(c,o(o({ref:n},u),{},{components:t})):a.createElement(c,o({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=_;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},9129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(8168),i=(t(6540),t(5680));const r={},o="Side menu",l={unversionedId:"extensions/api/nav/side-menu",id:"extensions/api/nav/side-menu",title:"Side menu",description:"Defining a page as a side-menu entry (basicType)",source:"@site/docs/extensions/api/nav/side-menu.md",sourceDirName:"extensions/api/nav",slug:"/extensions/api/nav/side-menu",permalink:"/dashboard/extensions/api/nav/side-menu",draft:!1,tags:[],version:"current",lastUpdatedAt:1715322785,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Resource page",permalink:"/dashboard/extensions/api/nav/resource-page"},next:{title:"Routing",permalink:"/dashboard/extensions/api/nav/routing"}},p={},s=[{value:"Defining a page as a side-menu entry (basicType)",id:"defining-a-page-as-a-side-menu-entry-basictype",level:2},{value:"Side menu ordering (weightType and weightGroup)",id:"side-menu-ordering-weighttype-and-weightgroup",level:2}],u={toc:s},g="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(g,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"side-menu"},"Side menu"),(0,i.yg)("h2",{id:"defining-a-page-as-a-side-menu-entry-basictype"},"Defining a page as a side-menu entry (basicType)"),(0,i.yg)("p",null,"With the ",(0,i.yg)("inlineCode",{parentName:"p"},"virtualType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"configureType")," we have learned how to configure a page for your Extension product, but that won't make it appear on the side-menu. For that you need to use the function ",(0,i.yg)("inlineCode",{parentName:"p"},"basicType")," coming from ",(0,i.yg)("inlineCode",{parentName:"p"},"$plugin.DSL"),". As an example usage of that method, one could do the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// this is the definition of a \"blank cluster\" for Rancher Dashboard\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  const CUSTOM_PAGE_NAME = 'page1';\n  \n  const { \n    product,\n    configureType,\n    virtualType,\n    basicType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  \n  // defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n\n  \n\n  // creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n\n  // => => => registering the defined pages as side-menu entries\n  basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME]);\n}\n")),(0,i.yg)("p",null,'On the above example we are creating two side menu entries on a "root" level for your ',(0,i.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME")," pages. "),(0,i.yg)("p",null,'Menu entries can also be grouped under a common "folder/group" in the side menu. For that the ',(0,i.yg)("inlineCode",{parentName:"p"},"basicType"),' takes an additional parameter which will be the name for the folder/group" in the side-menu. An example of the grouping as a follow-up on the example above would be: '),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"// update of the function usage based on the example above\n\n// => => => registering the defined pages as side-menu entries as a group \n  basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME], 'my-custom-group-name');\n")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"NOTE: On the example above the label of the group on the side-menu will be ",(0,i.yg)("inlineCode",{parentName:"p"},"my-custom-group-name"),".")),(0,i.yg)("h2",{id:"side-menu-ordering-weighttype-and-weightgroup"},"Side menu ordering (weightType and weightGroup)"),(0,i.yg)("p",null,"How about if you wanted to change the side-menu ordering for your Extension product? That can be achieved by using the functions ",(0,i.yg)("inlineCode",{parentName:"p"},"weightType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"weightGroup")," coming from ",(0,i.yg)("inlineCode",{parentName:"p"},"$plugin.DSL"),". Let's then look at the following example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// this is the definition of a \"blank cluster\" for Rancher Dashboard\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  const CUSTOM_PAGE_NAME_1 = 'page1';\n  const CUSTOM_PAGE_NAME_2 = 'page2';\n  const CUSTOM_PAGE_NAME_3 = 'page3';\n  \n  const { \n    product,\n    configureType,\n    virtualType,\n    basicType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME_2 }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  // defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n  // creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME_1,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME_1 }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  // creating yet another custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME_2,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME_2 }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME_3,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME_3 }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  // registering some of the defined pages as side-menu entries in the root level\n  basicType([CUSTOM_PAGE_NAME_2, CUSTOM_PAGE_NAME_3]);\n  // registering some of the defined pages as side-menu entries in a group\n  basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME_1], 'myAdvancedGroup');\n}\n")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: All individual root elements (in the example would be ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME_2")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME_3"),") are placed under a pseudo-group called ",(0,i.yg)("inlineCode",{parentName:"p"},"root"),", which in turn has always a default weight of ",(0,i.yg)("inlineCode",{parentName:"p"},"1000"),'.\nIn the example provided above we are registering 4 pages: 1 is a "resource" page (',(0,i.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME"),') and 3 are "custom" pages (',(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME_1"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME_2")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME_3"),"). ")),(0,i.yg)("p",null,"These pages are set as side-menu entries being ",(0,i.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME_1")," in a group called ",(0,i.yg)("inlineCode",{parentName:"p"},"myAdvancedGroup")," and 2 other pages(",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME_2")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME_3"),") as a root level side-menu entry. "),(0,i.yg)("p",null,"The default ordering of these side-menu entries is the order on which you register them using ",(0,i.yg)("inlineCode",{parentName:"p"},"basicType"),", taking also into consideration pseudo-group ",(0,i.yg)("inlineCode",{parentName:"p"},"root"),", which in turn will always be above any other custom groups, provided the fact that the developer hasn't defined any custom group weight yet."),(0,i.yg)("p",null,"In the above example the side-menu output would be something like:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"CUSTOM_PAGE_NAME_2"),(0,i.yg)("li",{parentName:"ul"},"CUSTOM_PAGE_NAME_3"),(0,i.yg)("li",{parentName:"ul"},"myAdvancedGroup",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"YOUR_K8S_RESOURCE_NAME"),(0,i.yg)("li",{parentName:"ul"},"CUSTOM_PAGE_NAME_1")))),(0,i.yg)("p",null,"If we wanted to define some custom ordering for these menu entries, we would need to use the functions ",(0,i.yg)("inlineCode",{parentName:"p"},"weightType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"weightGroup"),", like: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// this is the definition of a \"blank cluster\" for Rancher Dashboard\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  const CUSTOM_PAGE_NAME_1 = 'page1';\n  const CUSTOM_PAGE_NAME_2 = 'page2';\n  const CUSTOM_PAGE_NAME_3 = 'page3';\n  \n  const { \n    product,\n    configureType,\n    virtualType,\n    basicType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME_2 }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  // defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n  // creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME_1,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME_1 }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  // creating yet another custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME_2,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME_2 }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME_3,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME_3 }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  // registering some of the defined pages as side-menu entries in the root level\n  basicType([CUSTOM_PAGE_NAME_2, CUSTOM_PAGE_NAME_3]);\n  // registering some of the defined pages as side-menu entries in a group\n  basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME_1], 'myAdvancedGroup');\n  // => => => individual ordering of each menu entry\n  weightType(CUSTOM_PAGE_NAME_1, 2, true);\n  weightType(YOUR_K8S_RESOURCE_NAME, 1, true);\n  weightType(CUSTOM_PAGE_NAME_3, 2, true);\n  weightType(CUSTOM_PAGE_NAME_2, 1, true);\n  // => => => ordering of the grouped entry\n  weightGroup('myAdvancedGroup', 1001, true);\n}\n")),(0,i.yg)("p",null,"Given the example provided above, what would be the output in terms of ordering of this side-menu?"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"myAdvancedGroup",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"CUSTOM_PAGE_NAME_1"),(0,i.yg)("li",{parentName:"ul"},"YOUR_K8S_RESOURCE_NAME"))),(0,i.yg)("li",{parentName:"ul"},"CUSTOM_PAGE_NAME_3"),(0,i.yg)("li",{parentName:"ul"},"CUSTOM_PAGE_NAME_2")),(0,i.yg)("p",null,"Interpreting the code on the example, it's easy to follow the ordering defined:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"We are setting 3 root level side-menu items: ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_2"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_3")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"myAdvancedGroup")),(0,i.yg)("li",{parentName:"ul"},"Technically, as mentioned on the note above, ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_2")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_3")," are placed under a group called ",(0,i.yg)("inlineCode",{parentName:"li"},"root"),' which has no label associated, hence why it\'s not perceived as "group" like ',(0,i.yg)("inlineCode",{parentName:"li"},"myAdvancedGroup")),(0,i.yg)("li",{parentName:"ul"},"Since we are giving a weight of ",(0,i.yg)("inlineCode",{parentName:"li"},"1001")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"myAdvancedGroup")," (the bigger, the higher it will sit on the menu ordering - higher than the default ",(0,i.yg)("inlineCode",{parentName:"li"},"1000")," of ",(0,i.yg)("inlineCode",{parentName:"li"},"root"),"), the ",(0,i.yg)("inlineCode",{parentName:"li"},"myAdvancedGroup")," menu will be above the ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_2")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_3")," side-menu entries"),(0,i.yg)("li",{parentName:"ul"},"Inside the ",(0,i.yg)("inlineCode",{parentName:"li"},"myAdvancedGroup")," group we are setting a specific order as well: weight of ",(0,i.yg)("inlineCode",{parentName:"li"},"2")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_1")," and a weight of ",(0,i.yg)("inlineCode",{parentName:"li"},"1")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"YOUR_K8S_RESOURCE_NAME"),".This will make the side-menu entry for ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_1")," appear higher than ",(0,i.yg)("inlineCode",{parentName:"li"},"YOUR_K8S_RESOURCE_NAME")," inside the group ",(0,i.yg)("inlineCode",{parentName:"li"},"myAdvancedGroup")),(0,i.yg)("li",{parentName:"ul"},"As for the ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_2")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_3")," they are done inside that virtual group called ",(0,i.yg)("inlineCode",{parentName:"li"},"root"),". Since ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_3")," is set a weight of ",(0,i.yg)("inlineCode",{parentName:"li"},"2")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_3")," is set a weight of ",(0,i.yg)("inlineCode",{parentName:"li"},"1"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_3")," will appear above ",(0,i.yg)("inlineCode",{parentName:"li"},"CUSTOM_PAGE_NAME_2"))),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"NOTE: The last parameter for the ",(0,i.yg)("inlineCode",{parentName:"p"},"weightType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"weightGroup")," functions is a boolean that should be set to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," at all times so that it works properly.")))}d.isMDXComponent=!0}}]);