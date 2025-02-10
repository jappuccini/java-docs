"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8611"],{3246:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>c,metadata:()=>n,assets:()=>l,toc:()=>u,contentTitle:()=>o});var n=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/queries/queries","title":"Abfragen","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/queries/queries.mdx","sourceDirName":"exam-exercises/exam-exercises-java2/queries","slug":"/exam-exercises/exam-exercises-java2/queries/","permalink":"/java-docs/pr-preview/pr-262/exam-exercises/exam-exercises-java2/queries/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/queries/queries.mdx","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Abfragen","description":"","sidebar_position":20},"sidebar":"examExercisesSidebar","previous":{"title":"Videosammlung","permalink":"/java-docs/pr-preview/pr-262/exam-exercises/exam-exercises-java2/class-diagrams/video-collection"},"next":{"title":"St\xe4dte","permalink":"/java-docs/pr-preview/pr-262/exam-exercises/exam-exercises-java2/queries/cities"}}'),i=r("85893"),s=r("50065"),a=r("68399");let c={title:"Abfragen",description:"",sidebar_position:20},o=void 0,l={},u=[];function d(e){return(0,i.jsx)(a.Z,{})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},68399:function(e,t,r){r.d(t,{Z:()=>g});var n=r("85893");r("67294");var i=r("67026"),s=r("86563"),a=r("53367"),c=r("11107"),o=r("19999"),l=r("7670"),u=r("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(a.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:a}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),a&&(0,n.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function x(e){let{item:t}=e,r=(0,s.LM)(t),i=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e,r=(0,o.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,s.xz)(t.docId??void 0);return(0,n.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(f,{item:t});case"category":return(0,n.jsx)(x,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,r=(0,s.jA)();return(0,n.jsx)(g,{items:r.items,className:t})}function g(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(j,{...e});let a=(0,s.MN)(t);return(0,n.jsx)("section",{className:(0,i.Z)("row",r),children:a.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(67294),i=r(87262);let s=["zero","one","two","few","many","other"];function a(e){return s.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let i=r.select(t);return n[Math.min(r.pluralForms.indexOf(i),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return a}});var n=r(67294);let i={},s=n.createContext(i);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);