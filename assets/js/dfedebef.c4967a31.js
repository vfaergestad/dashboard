"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[7074],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=d(n),s=r,c=m["".concat(p,".").concat(s)]||m[s]||y[s]||l;return n?a.createElement(c,o(o({ref:t},g),{},{components:n})):a.createElement(c,o({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(8168),r=(n(6540),n(5680));const l={},o="Common Types",i={unversionedId:"extensions/api/common",id:"extensions/api/common",title:"Common Types",description:"Where",source:"@site/docs/extensions/api/common.md",sourceDirName:"extensions/api",slug:"/extensions/api/common",permalink:"/dashboard/extensions/api/common",draft:!1,tags:[],version:"current",lastUpdatedAt:1715322785,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Auto-Import Folders",permalink:"/dashboard/extensions/api/components/auto-import"},next:{title:"Air-gapped Environments",permalink:"/dashboard/extensions/advanced/air-gapped-environments"}},p={},d=[{value:"Where",id:"where",level:2},{value:"LocationConfig",id:"locationconfig",level:2},{value:"LocationConfig Examples",id:"locationconfig-examples",level:3}],g={toc:d},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"common-types"},"Common Types"),(0,r.yg)("h2",{id:"where"},"Where"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"where")," defines which area of the UI the extension method will apply to and they depend on which method they are applied to. This means that each method will only accept a given subset of the the following list (documented per each method)."),(0,r.yg)("p",null,"The admissable string values for the ",(0,r.yg)("inlineCode",{parentName:"p"},"where")," are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ActionLocation.HEADER")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for an action on the Header of Rancher Dashboard. Check ",(0,r.yg)("a",{parentName:"td",href:"./actions/#actionlocationheader-options"},"screenshot")," for location.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ActionLocation.TABLE")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for an action on a List View Table of Rancher Dashboard. Check ",(0,r.yg)("a",{parentName:"td",href:"./actions/#actionlocationtable-options"},"screenshot")," for location.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TabLocation.RESOURCE_DETAIL")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for a Tab on a Resource Detail page. Check ",(0,r.yg)("a",{parentName:"td",href:"./tabs/#tablocationresource_detail-options"},"screenshot")," for location.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PanelLocation.DETAILS_MASTHEAD")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for a panel on the Details Masthead area of a Resource Detail page. Check ",(0,r.yg)("a",{parentName:"td",href:"./panels/#panellocationdetails_masthead-options"},"screenshot")," for location.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PanelLocation.DETAIL_TOP")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for a panel on the Detail Top area of a Resource Detail page. Check ",(0,r.yg)("a",{parentName:"td",href:"./panels/#panellocationdetail_top-options"},"screenshot")," for location.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PanelLocation.RESOURCE_LIST")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for a panel on a Resource List View page (above the table area). Check ",(0,r.yg)("a",{parentName:"td",href:"./panels#panellocationresource_list-options"},"screenshot")," for location.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"CardLocation.CLUSTER_DASHBOARD_CARD")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for a card on the Cluster Dashboard page. Check ",(0,r.yg)("a",{parentName:"td",href:"./cards/#cardlocationcluster_dashboard_card-options"},"screenshot")," for location.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TableColumnLocation.RESOURCE")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Location for a table column on a Resource List View page. Check ",(0,r.yg)("a",{parentName:"td",href:"./table-columns/#tablecolumnlocationresource-options"},"screenshot")," for location.")))),(0,r.yg)("h2",{id:"locationconfig"},"LocationConfig"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"LocationConfig")," object defines ",(0,r.yg)("strong",{parentName:"p"},"when")," (product, resource, cluster...) these UI enhancement methods are applied on the UI. The ",(0,r.yg)("strong",{parentName:"p"},"when")," is based on the current routing system employed on Rancher Dashboard. Let's take on a simple example to try and understand the routing structure."),(0,r.yg)("p",null,"Example URL:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/c/local/explorer/apps.deployment/cattle-system/rancher-webhook\n")),(0,r.yg)("p",null,"How to recognize the URL structure on the example above:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/c/<CLUSTER-ID>/<PRODUCT-ID>/<RESOURCE-ID>/<NAMESPACE-ID>/<ID>\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," There are Kubernetes resources that aren't namespaced, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"catalog.cattle.io.clusterrepo"),", and in those cases the following structure applies:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/c/<CLUSTER-ID>/<PRODUCT-ID>/<RESOURCE-ID>/<ID>\n")),(0,r.yg)("p",null,'There is another different routing pattern for "extensions as products" which follows a slightly different convention of the core Rancher Dashboard routes. An example of this would be:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/elemental/c/local/elemental.cattle.io.machineinventory/nvxml-6mtga\n")),(0,r.yg)("p",null,"which translates to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/<PRODUCT-ID>/c/<CLUSTER-ID>/<RESOURCE-ID>/<ID>\n")),(0,r.yg)("p",null,"With this it's then possible to easily identify the parameters needed to populate the ",(0,r.yg)("inlineCode",{parentName:"p"},"LocationConfig")," and add the UI enhancements to the areas that you like. YES, it's also possible to enhance other extensions!"),(0,r.yg)("p",null,"The admissible parameters for the ",(0,r.yg)("inlineCode",{parentName:"p"},"LocationConfig")," object are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Compatible Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"product")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.2")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of the product identifier. Ex: ",(0,r.yg)("inlineCode",{parentName:"td"},"fleet"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"manager")," (Cluster Management), ",(0,r.yg)("inlineCode",{parentName:"td"},"harvesterManager")," (Virtualization Management), ",(0,r.yg)("inlineCode",{parentName:"td"},"explorer")," (Cluster Explorer) or ",(0,r.yg)("inlineCode",{parentName:"td"},"home")," (Homepage)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"resource")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.2")," + ",(0,r.yg)("inlineCode",{parentName:"td"},"v2.8.0")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of the identifier of the kubernetes resource to be bound to. Ex: ",(0,r.yg)("inlineCode",{parentName:"td"},"apps.deployment"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"storage.k8s.io.storageclass")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"secret")," (v2.7.2). You can also define a wildcard, ex: ",(0,r.yg)("inlineCode",{parentName:"td"},"['*']"),", which will match any resource page (v2.8.0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"namespace")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.2")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of the namespace identifier. Ex: ",(0,r.yg)("inlineCode",{parentName:"td"},"kube-system"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"cattle-global-data")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"cattle-system"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"path")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.7")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of objects that does matching for the ",(0,r.yg)("inlineCode",{parentName:"td"},"path")," part of the url. Admissable properties for the object are: ",(0,r.yg)("inlineCode",{parentName:"td"},"urlPath")," (string), ",(0,r.yg)("inlineCode",{parentName:"td"},"exact")," (boolean, default or omission: ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", which defines the type of match it does) and ",(0,r.yg)("inlineCode",{parentName:"td"},"endsWith")," (boolean, defaults to false) .Ex: { ",(0,r.yg)("inlineCode",{parentName:"td"},"urlPath"),": '/c/local/explorer/projectsnamespaces',  ",(0,r.yg)("inlineCode",{parentName:"td"},"exact"),": true } or { ",(0,r.yg)("inlineCode",{parentName:"td"},"urlPath"),": 'explorer/projectsnamespaces',  ",(0,r.yg)("inlineCode",{parentName:"td"},"endsWith"),": true }")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cluster")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.2")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of the cluster identifier. Ex: ",(0,r.yg)("inlineCode",{parentName:"td"},"local"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"id")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.2")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of the identifier for a given resource. Ex: ",(0,r.yg)("inlineCode",{parentName:"td"},"deployment-unt6xmz"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"mode")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.2")," + ",(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.7")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of modes which relates to the type of view on which the given enhancement should be applied. Admissible values are: ",(0,r.yg)("inlineCode",{parentName:"td"},"edit")," (v2.7.2), ",(0,r.yg)("inlineCode",{parentName:"td"},"config")," (v2.7.2), ",(0,r.yg)("inlineCode",{parentName:"td"},"detail")," (v2.7.2), ",(0,r.yg)("inlineCode",{parentName:"td"},"list")," (v2.7.2) and ",(0,r.yg)("inlineCode",{parentName:"td"},"create")," (v2.7.7)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"context")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.2")),(0,r.yg)("td",{parentName:"tr",align:null},"Object"),(0,r.yg)("td",{parentName:"tr",align:null},"Requirements set by the context itself. This is a key value object that must match the object provided where the feature is used. For instance if a ResourceTab should only include a tab given specific information where the ResourceTab is used. Ex ",(0,r.yg)("inlineCode",{parentName:"td"},'{ provider: "digitalocean" }'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"queryParam")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.7.2")),(0,r.yg)("td",{parentName:"tr",align:null},"Object"),(0,r.yg)("td",{parentName:"tr",align:null},"This is a key value object that must match the url's query param key values")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hash")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"v2.8.0")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of strings for url hash identifiers, commonly used in Tabs Ex: On a details view of a ",(0,r.yg)("inlineCode",{parentName:"td"},"provisioning.cattle.io.cluster"),", you have several tabs identified in the hash portion of the url such as ",(0,r.yg)("inlineCode",{parentName:"td"},"node-pools"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"conditions")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"related"))))),(0,r.yg)("h3",{id:"locationconfig-examples"},"LocationConfig Examples"),(0,r.yg)("p",null,"Example 1:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"{}\n")),(0,r.yg)("p",null,"Passing an empty object as a ",(0,r.yg)("inlineCode",{parentName:"p"},"LocationObject")," will apply a given extension enhancement to all locations where it can be apllied."),(0,r.yg)("p",null,"Example 2:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"{ product: ['home'] }\n")),(0,r.yg)("p",null,"Extension enhancement will be applied on the homepage of rancher dashboard (if applicable)."),(0,r.yg)("p",null,"Example 3:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"{ resource: ['pod'], id: ['pod-nxr5vm'] }\n")),(0,r.yg)("p",null,"Extension enhancement will be applied on the resource ",(0,r.yg)("inlineCode",{parentName:"p"},"pod")," with id ",(0,r.yg)("inlineCode",{parentName:"p"},"pod-nxr5vm")," (if applicable)."),(0,r.yg)("p",null,"Example 4:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"{ \n  cluster:  ['local'], \n  resource: ['catalog.cattle.io.clusterrepo'], \n  mode:     ['edit'] \n}\n")),(0,r.yg)("p",null,"Extension enhancement will be applied on the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," view/mode of the resource ",(0,r.yg)("inlineCode",{parentName:"p"},"catalog.cattle.io.clusterrepo")," inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"local")," cluster (if applicable)."))}y.isMDXComponent=!0}}]);