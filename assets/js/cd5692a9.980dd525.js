"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[830],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={},l="On-screen Text and Translations",o={unversionedId:"on-screen-text-and-translations",id:"on-screen-text-and-translations",title:"On-screen Text and Translations",description:"This page covers Internationalisation (i18n) and localisation (i10n).",source:"@site/docs/on-screen-text-and-translations.md",sourceDirName:".",slug:"/on-screen-text-and-translations",permalink:"/dashboard/on-screen-text-and-translations",draft:!1,tags:[],version:"current",lastUpdatedAt:1668073381,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initializing Plugins",permalink:"/dashboard/plugins/initializing-plugins"},next:{title:"Products and Navigation",permalink:"/dashboard/products-and-navigation"}},s={},p=[{value:"Internationalization (i18n)",id:"internationalization-i18n",level:2},{value:"Using Variables in i18n Paths",id:"using-variables-in-i18n-paths",level:2},{value:"i10n",id:"i10n",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-screen-text-and-translations"},"On-screen Text and Translations"),(0,i.kt)("p",null,"This page covers Internationalisation (i18n) and localisation (i10n)."),(0,i.kt)("h2",{id:"internationalization-i18n"},"Internationalization (i18n)"),(0,i.kt)("p",null,"Any code producing messages, labels, numbers, dates, times, and the like should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n")," store and translation strings to generate and format them instead of hardcoding English or American-isms anywhere.   Messages and number formatting uses ",(0,i.kt)("a",{parentName:"p",href:"https://formatjs.io/docs/intl-messageformat"},"ICU templating")," for very powerful pluralization and customizing."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/translations")," dir stores a YAML file with translations for each supported language."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'English is automatically used as the "fallback" if a particular key is missing from a non-English language.'),(0,i.kt)("li",{parentName:"ul"},"If you don't have a native translation for a particular key, just leave that key out of the language"),(0,i.kt)("li",{parentName:"ul"},"Do not duplicate the English string into other languages.")),(0,i.kt)("p",null,"Translations should be the largest phrase that makes sense as a single key, rather than several separate things rendered in a fixed order."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'For example "about 2 minutes remaining" should be a single translation: ',(0,i.kt)("inlineCode",{parentName:"li"},"About {n, number} {n, plural, one { minute }, other { minutes }} remaining"),"."),(0,i.kt)("li",{parentName:"ul"},"Not one for ",(0,i.kt)("inlineCode",{parentName:"li"},"About"),", one for ",(0,i.kt)("inlineCode",{parentName:"li"},"minute"),", one for ",(0,i.kt)("inlineCode",{parentName:"li"},"minutes"),", one for ",(0,i.kt)("inlineCode",{parentName:"li"},"remaining"),", and some code picking and choosing which to concatenate.")),(0,i.kt)("p",null,"All on screen text should be localised and implemented in the default ",(0,i.kt)("inlineCode",{parentName:"p"},"en-US")," locale. There are different ways to access localised text"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"t")," can be exposed via adding the i18n getter as a computed property with ",(0,i.kt)("inlineCode",{parentName:"p"},"...mapGetters({ t: 'i18n/t' })"))),(0,i.kt)("p",null,"In HTML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<t k="<path to localisation>" />\n{{ t("<path to localisation>") }}\n')),(0,i.kt)("p",null,"Many components will also accept a localisation path via a ",(0,i.kt)("inlineCode",{parentName:"p"},"value-key")," property, instead of the translated text in ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,i.kt)("p",null,"In JS/TS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"this.t('<path to localisation>')\n")),(0,i.kt)("p",null,"A localisation can be checked with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"this.$store.getters['i18n/exists']('<path to localisation>')\n\nthis.$store.getters['i18n/withFallback']('<path to localisation>', null, '<fallback>'))\n")),(0,i.kt)("h2",{id:"using-variables-in-i18n-paths"},"Using Variables in i18n Paths"),(0,i.kt)("p",null,"In Javascript files, variables in localisation paths must be wrapped in quotation marks when the variable contains a slash."),(0,i.kt)("p",null,"For example, if we want to dynamically fill in the description of a resource based on its type, we can use a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," variable when referencing the localisation path to the description:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  description: this.t(`secret.typeDescriptions.'${ type }'.description`),\n}\n")),(0,i.kt)("p",null,"In this case, the quotation marks are required because some Secret types, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/basic-auth"),", include a slash."),(0,i.kt)("h2",{id:"i10n"},"i10n"),(0,i.kt)("p",null,"Localisation files can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"./assets/translations/en-us.yaml"),"."),(0,i.kt)("p",null,"Please follow precedents in file to determine where new translations should be place."),(0,i.kt)("p",null,"Form fields are conventionally defined in translations as ",(0,i.kt)("inlineCode",{parentName:"p"},"<some prefix>"),".",(0,i.kt)("inlineCode",{parentName:"p"},"<field name>"),".{label,description,enum options if applicable} e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"account:\n  apiKey:\n    description:\n      label: Description\n      placeholder: Optionally enter a description to help you identify this API Key\n")),(0,i.kt)("p",null,"If a translation is not included in the user's selected language, it will fall back to English. The only time the Rancher UI devs should modify a non-English translation is when a key is renamed."))}u.isMDXComponent=!0}}]);