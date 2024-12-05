"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1626"],{37077:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>m,assets:()=>c,toc:()=>u,frontMatter:()=>o});var n=JSON.parse('{"id":"additional-material/daniel/java2/java2","title":"Programmierung 2","description":"","source":"@site/docs/additional-material/daniel/java2/java2.mdx","sourceDirName":"additional-material/daniel/java2","slug":"/additional-material/daniel/java2/","permalink":"/java-docs/pr-preview/pr-235/additional-material/daniel/java2/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/java2/java2.mdx","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Programmierung 2","description":"","sidebar_position":20,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"WWIBE224","permalink":"/java-docs/pr-preview/pr-235/additional-material/daniel/java1/wwibe224"},"next":{"title":"Klausur","permalink":"/java-docs/pr-preview/pr-235/additional-material/daniel/java2/sample-exam"}}'),a=r("85893"),i=r("50065"),l=r("94301");let o={title:"Programmierung 2",description:"",sidebar_position:20,tags:[]},s=void 0,c={},u=[];function d(e){return(0,a.jsx)(l.Z,{})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},94301:function(e,t,r){r.d(t,{Z:()=>v});var n=r("85893");r("67294");var a=r("67026"),i=r("69369"),l=r("83012"),o=r("43115"),s=r("63150"),c=r("96025"),u=r("34403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(l.Z,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:i,description:l}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),l&&(0,n.jsx)("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function f(e){let{item:t}=e,r=(0,i.LM)(t),a=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??a(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function j(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(v,{items:r.items,className:t})}function v(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let l=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,a.Z)("row",r),children:l.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(j,{item:e})},t))})}},43115:function(e,t,r){r.d(t,{c:function(){return s}});var n=r(67294),a=r(2933);let i=["zero","one","two","few","many","other"];function l(e){return i.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let a=r.select(t);return n[Math.min(r.pluralForms.indexOf(a),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return l}});var n=r(67294);let a={},i=n.createContext(a);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);