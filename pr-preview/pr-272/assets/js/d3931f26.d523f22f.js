"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["174"],{41609:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>u,contentTitle:()=>c});var n=JSON.parse('{"id":"exercises/maps/maps","title":"Assoziativspeicher (Maps)","description":"","source":"@site/docs/exercises/maps/maps.mdx","sourceDirName":"exercises/maps","slug":"/exercises/maps/","permalink":"/java-docs/pr-preview/pr-272/exercises/maps/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/maps/maps.mdx","tags":[{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-272/tags/maps"}],"version":"current","sidebarPosition":190,"frontMatter":{"title":"Assoziativspeicher (Maps)","description":"","sidebar_position":190,"tags":["maps"]},"sidebar":"exercisesSidebar","previous":{"title":"Generics04","permalink":"/java-docs/pr-preview/pr-272/exercises/generics/generics04"},"next":{"title":"Maps01","permalink":"/java-docs/pr-preview/pr-272/exercises/maps/maps01"}}'),s=r("85893"),i=r("50065"),a=r("68399");let o={title:"Assoziativspeicher (Maps)",description:"",sidebar_position:190,tags:["maps"]},c=void 0,l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function p(e){let t={h2:"h2",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,s.jsx)(a.Z,{})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},68399:function(e,t,r){r.d(t,{Z:()=>j});var n=r("85893");r("67294");var s=r("67026"),i=r("86563"),a=r("53367"),o=r("11107"),c=r("19999"),l=r("7670"),u=r("46055");let p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return(0,n.jsx)(a.Z,{href:t,className:(0,s.Z)("card padding--lg",p.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:a}=e;return(0,n.jsxs)(d,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",p.cardTitle),title:i,children:[r," ",i]}),a&&(0,n.jsx)("p",{className:(0,s.Z)("text--truncate",p.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e,r=(0,i.LM)(t),s=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(m,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(j,{items:r.items,className:t})}function j(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let a=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,s.Z)("row",r),children:a.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(67294),s=r(87262);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let s=r.select(t);return n[Math.min(r.pluralForms.indexOf(s),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return a}});var n=r(67294);let s={},i=n.createContext(s);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);