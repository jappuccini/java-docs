"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["174"],{36162:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>l,toc:()=>u,frontMatter:()=>o});var r=JSON.parse('{"id":"exercises/maps/maps","title":"Assoziativspeicher (Maps)","description":"","source":"@site/docs/exercises/maps/maps.mdx","sourceDirName":"exercises/maps","slug":"/exercises/maps/","permalink":"/java-docs/production/exercises/maps/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/maps/maps.mdx","tags":[{"inline":true,"label":"maps","permalink":"/java-docs/production/tags/maps"}],"version":"current","sidebarPosition":190,"frontMatter":{"title":"Assoziativspeicher (Maps)","description":"","sidebar_position":190,"tags":["maps"]},"sidebar":"exercisesSidebar","previous":{"title":"Generics04","permalink":"/java-docs/production/exercises/generics/generics04"},"next":{"title":"Maps01","permalink":"/java-docs/production/exercises/maps/maps01"}}'),s=n("85893"),i=n("50065"),a=n("94301");let o={title:"Assoziativspeicher (Maps)",description:"",sidebar_position:190,tags:["maps"]},c=void 0,l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function d(e){let t={h2:"h2",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,s.jsx)(a.Z,{})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},94301:function(e,t,n){n.d(t,{Z:()=>j});var r=n("85893");n("67294");var s=n("67026"),i=n("69369"),a=n("83012"),o=n("43115"),c=n("63150"),l=n("96025"),u=n("34403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return(0,r.jsx)(a.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:a}=e;return(0,r.jsxs)(p,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),a&&(0,r.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e,n=(0,i.LM)(t),s=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let a=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,s.Z)("row",n),children:a.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},43115:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(67294),s=n(2933);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let s=n.select(t);return r[Math.min(n.pluralForms.indexOf(s),r.length-1)]})(n,t,e)}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(67294);let s={},i=r.createContext(s);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);