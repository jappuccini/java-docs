"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["435"],{5632:function(e,t,r){r.r(t),r.d(t,{default:()=>f,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>u,contentTitle:()=>o});var n=JSON.parse('{"id":"exercises/javafx/javafx","title":"JavaFX","description":"","source":"@site/docs/exercises/javafx/javafx.mdx","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/","permalink":"/java-docs/pr-preview/pr-280/exercises/javafx/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx.mdx","tags":[{"inline":true,"label":"gui","permalink":"/java-docs/pr-preview/pr-280/tags/gui"},{"inline":true,"label":"javafx","permalink":"/java-docs/pr-preview/pr-280/tags/javafx"}],"version":"current","sidebarPosition":240,"frontMatter":{"title":"JavaFX","description":"","sidebar_position":240,"tags":["gui","javafx"]},"sidebar":"exercisesSidebar","previous":{"title":"Algorithms02","permalink":"/java-docs/pr-preview/pr-280/exercises/algorithms/algorithms02"},"next":{"title":"JavaFX01","permalink":"/java-docs/pr-preview/pr-280/exercises/javafx/javafx01"}}'),a=r("85893"),i=r("50065"),s=r("68399");let l={title:"JavaFX",description:"",sidebar_position:240,tags:["gui","javafx"]},o=void 0,c={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function d(e){let t={h2:"h2",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,a.jsx)(s.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},68399:function(e,t,r){r.d(t,{Z:()=>v});var n=r("85893");r("67294");var a=r("67026"),i=r("86563"),s=r("53367"),l=r("11107"),o=r("19999"),c=r("7670"),u=r("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:r}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:i,description:s}=e;return(0,n.jsxs)(f,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),s&&(0,n.jsx)("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e,r=(0,i.LM)(t),a=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??a(t.items.length)}):null}function x(e){let{item:t}=e,r=(0,o.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(x,{item:t});case"category":return(0,n.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(v,{items:r.items,className:t})}function v(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let s=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,a.Z)("row",r),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(67294),a=r(87262);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let a=r.select(t);return n[Math.min(r.pluralForms.indexOf(a),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var n=r(67294);let a={},i=n.createContext(a);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);