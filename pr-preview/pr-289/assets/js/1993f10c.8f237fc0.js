"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9233"],{15482:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"additional-material/daniel/coding2-wi/coding2-wi","title":"Programmierung II (WI)","description":"","source":"@site/docs/additional-material/daniel/coding2-wi/coding2-wi.mdx","sourceDirName":"additional-material/daniel/coding2-wi","slug":"/additional-material/daniel/coding2-wi/","permalink":"/java-docs/pr-preview/pr-289/additional-material/daniel/coding2-wi/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/coding2-wi/coding2-wi.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"title":"Programmierung II (WI)","description":"","sidebar_position":40,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"Klausurergebnisse","permalink":"/java-docs/pr-preview/pr-289/additional-material/daniel/coding1-wi/exam-results"},"next":{"title":"Musterklausur","permalink":"/java-docs/pr-preview/pr-289/additional-material/daniel/coding2-wi/sample-exam"}}'),i=n("85893"),a=n("50065"),o=n("68399");let l={title:"Programmierung II (WI)",description:"",sidebar_position:40,tags:[]},s=void 0,c={},d=[];function u(e){return(0,i.jsx)(o.Z,{})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},68399:function(e,t,n){n.d(t,{Z:()=>w});var r=n("85893");n("67294");var i=n("67026"),a=n("86563"),o=n("53367"),l=n("11107"),s=n("19999"),c=n("7670"),d=n("46055");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:a,description:o}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:a,children:[n," ",a]}),o&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e,n=(0,a.LM)(t),i=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(p,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function g(e){let{item:t}=e,n=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,a.xz)(t.docId??void 0);return(0,r.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(g,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,a.jA)();return(0,r.jsx)(w,{items:n.items,className:t})}function w(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let o=(0,a.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:o.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(h,{item:e})},t))})}},11107:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(67294),i=n(87262);let a=["zero","one","two","few","many","other"];function o(e){return a.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var r=n(67294);let i={},a=r.createContext(i);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);