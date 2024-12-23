"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2324"],{75969:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>c});var n=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/exam-exercises-java1","title":"Programmierung 1","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/exam-exercises-java1.mdx","sourceDirName":"exam-exercises/exam-exercises-java1","slug":"/exam-exercises/exam-exercises-java1/","permalink":"/java-docs/pr-preview/pr-239/exam-exercises/exam-exercises-java1/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/exam-exercises-java1.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Programmierung 1","description":"","sidebar_position":30},"sidebar":"examExercisesSidebar","next":{"title":"Klassendiagramme","permalink":"/java-docs/pr-preview/pr-239/exam-exercises/exam-exercises-java1/class-diagrams/"}}'),s=r("85893"),a=r("50065"),i=r("94301");let c={title:"Programmierung 1",description:"",sidebar_position:30},o=void 0,l={},u=[];function m(e){return(0,s.jsx)(i.Z,{})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},94301:function(e,t,r){r.d(t,{Z:()=>j});var n=r("85893");r("67294");var s=r("67026"),a=r("69369"),i=r("83012"),c=r("43115"),o=r("63150"),l=r("96025"),u=r("34403");let m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return(0,n.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",m.cardContainer),children:r})}function x(e){let{href:t,icon:r,title:a,description:i}=e;return(0,n.jsxs)(d,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",m.cardTitle),title:a,children:[r," ",a]}),i&&(0,n.jsx)("p",{className:(0,s.Z)("text--truncate",m.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e,r=(0,a.LM)(t),s=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(x,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function p(e){let{item:t}=e,r=(0,o.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,a.xz)(t.docId??void 0);return(0,n.jsx)(x,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(p,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,a.jA)();return(0,n.jsx)(j,{items:r.items,className:t})}function j(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let i=(0,a.MN)(t);return(0,n.jsx)("section",{className:(0,s.Z)("row",r),children:i.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},t))})}},43115:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(67294),s=r(2933);let a=["zero","one","two","few","many","other"];function i(e){return a.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let s=r.select(t);return n[Math.min(r.pluralForms.indexOf(s),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var n=r(67294);let s={},a=n.createContext(s);function i(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);