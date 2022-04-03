"use strict";(self.webpackChunkenlay_docs=self.webpackChunkenlay_docs||[]).push([[474],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},s="Registering views",c={unversionedId:"tracking/views",id:"tracking/views",title:"Registering views",description:"Views can be registered by using the placement ID.",source:"@site/docs/tracking/views.md",sourceDirName:"tracking",slug:"/tracking/views",permalink:"/tracking/views",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"primary",previous:{title:"Clicks",permalink:"/tracking/clicks"},next:{title:"Fetching promotables",permalink:"/webhooks/promotables"}},u={},p=[{value:"POST <code>https://api.enlay.io/p/v</code>",id:"post-httpsapienlayiopv",level:2},{value:"Authorization",id:"authorization",level:3},{value:"Required headers",id:"required-headers",level:3},{value:"Request body",id:"request-body",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"registering-views"},"Registering views"),(0,i.kt)("p",null,"Views can be registered by using the placement ID."),(0,i.kt)("p",null,"This endpoint should be called when an advertisement has been seen. What 'seen' means is up to you, for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the page has been loaded."),(0,i.kt)("li",{parentName:"ul"},"When a user has scrolled down so that the advertisement is on their screen."),(0,i.kt)("li",{parentName:"ul"},"When a user hovers over the advertisement.")),(0,i.kt)("h2",{id:"post-httpsapienlayiopv"},"POST ",(0,i.kt)("inlineCode",{parentName:"h2"},"https://api.enlay.io/p/v")),(0,i.kt)("h3",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"No authorization is required for this endpoint."),(0,i.kt)("h3",{id:"required-headers"},"Required headers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")),(0,i.kt)("h3",{id:"request-body"},"Request body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": "f85ad1c4-9c67-4218-a2b0-a637f155036f" },\n  { "id": "8c873628-f6bb-4230-b8ee-3e112c361b3b" }\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the placement that has been viewed")))))}f.isMDXComponent=!0}}]);