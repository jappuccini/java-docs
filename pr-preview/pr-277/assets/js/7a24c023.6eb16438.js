"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2926"],{25358:function(e,t,i){i.r(t),i.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"additional-material/daniel/coding1-wi/coding1-wi","title":"Programmierung I (WI)","description":"","source":"@site/docs/additional-material/daniel/coding1-wi/coding1-wi.mdx","sourceDirName":"additional-material/daniel/coding1-wi","slug":"/additional-material/daniel/coding1-wi/","permalink":"/java-docs/pr-preview/pr-277/additional-material/daniel/coding1-wi/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/coding1-wi/coding1-wi.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Programmierung I (WI)","description":"","sidebar_position":30,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"GitHub-Repositories","permalink":"/java-docs/pr-preview/pr-277/additional-material/daniel/github-repos"},"next":{"title":"Kill Team","permalink":"/java-docs/pr-preview/pr-277/additional-material/daniel/coding1-wi/killteam"}}'),r=i("85893"),a=i("50065"),o=i("68399");let l={title:"Programmierung I (WI)",description:"",sidebar_position:30,tags:[]},s=void 0,c={},d=[];function u(e){return(0,r.jsx)(o.Z,{})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},68399:function(e,t,i){i.d(t,{Z:()=>j});var n=i("85893");i("67294");var r=i("67026"),a=i("86563"),o=i("53367"),l=i("11107"),s=i("19999"),c=i("7670"),d=i("46055");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:i}=e;return(0,n.jsx)(o.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:a,description:o}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:a,children:[i," ",a]}),o&&(0,n.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e,i=(0,a.LM)(t),r=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,n.jsx)(p,{href:i,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e,i=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,a.xz)(t.docId??void 0);return(0,n.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(g,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,i=(0,a.jA)();return(0,n.jsx)(j,{items:i.items,className:t})}function j(e){let{items:t,className:i}=e;if(!t)return(0,n.jsx)(x,{...e});let o=(0,a.MN)(t);return(0,n.jsx)("section",{className:(0,r.Z)("row",i),children:o.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},t))})}},11107:function(e,t,i){i.d(t,{c:function(){return s}});var n=i(67294),r=i(87262);let a=["zero","one","two","few","many","other"];function o(e){return a.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,i)=>(function(e,t,i){let n=e.split("|");if(1===n.length)return n[0];n.length>i.pluralForms.length&&console.error(`For locale=${i.locale}, a maximum of ${i.pluralForms.length} plural forms are expected (${i.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let r=i.select(t);return n[Math.min(i.pluralForms.indexOf(r),n.length-1)]})(i,t,e)}}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return o}});var n=i(67294);let r={},a=n.createContext(r);function o(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);