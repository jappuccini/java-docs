"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2611"],{40813:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>u,contentTitle:()=>l});var n=JSON.parse('{"id":"exercises/io-streams/io-streams","title":"Datenstr\xf6me (IO-Streams)","description":"","source":"@site/docs/exercises/io-streams/io-streams.mdx","sourceDirName":"exercises/io-streams","slug":"/exercises/io-streams/","permalink":"/java-docs/pr-preview/pr-272/exercises/io-streams/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/io-streams/io-streams.mdx","tags":[{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-272/tags/io-streams"}],"version":"current","sidebarPosition":220,"frontMatter":{"title":"Datenstr\xf6me (IO-Streams)","description":"","sidebar_position":220,"tags":["io-streams"]},"sidebar":"exercisesSidebar","previous":{"title":"UnitTests04","permalink":"/java-docs/pr-preview/pr-272/exercises/unit-tests/unit-tests04"},"next":{"title":"IOStreams01","permalink":"/java-docs/pr-preview/pr-272/exercises/io-streams/io-streams01"}}'),s=r("85893"),i=r("50065"),a=r("68399");let o={title:"Datenstr\xf6me (IO-Streams)",description:"",sidebar_position:220,tags:["io-streams"]},l=void 0,c={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function d(e){let t={h2:"h2",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,s.jsx)(a.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},68399:function(e,t,r){r.d(t,{Z:()=>j});var n=r("85893");r("67294");var s=r("67026"),i=r("86563"),a=r("53367"),o=r("11107"),l=r("19999"),c=r("7670"),u=r("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(a.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:i,description:a}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),a&&(0,n.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e,r=(0,i.LM)(t),s=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(j,{items:r.items,className:t})}function j(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let a=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,s.Z)("row",r),children:a.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return l}});var n=r(67294),s=r(87262);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let s=r.select(t);return n[Math.min(r.pluralForms.indexOf(s),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return a}});var n=r(67294);let s={},i=n.createContext(s);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);