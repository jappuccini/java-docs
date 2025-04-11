"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5163"],{44272:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>u,contentTitle:()=>l});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/class-diagrams","title":"Klassendiagramme","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/class-diagrams.mdx","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/","permalink":"/java-docs/pr-preview/pr-289/exam-exercises/exam-exercises-java2/class-diagrams/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/class-diagrams.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Klassendiagramme","description":"","sidebar_position":10},"sidebar":"examExercisesSidebar","previous":{"title":"Programmierung 2","permalink":"/java-docs/pr-preview/pr-289/exam-exercises/exam-exercises-java2/"},"next":{"title":"Tante-Emma-Laden","permalink":"/java-docs/pr-preview/pr-289/exam-exercises/exam-exercises-java2/class-diagrams/corner-shop"}}'),a=r("85893"),n=r("50065"),i=r("68399");let c={title:"Klassendiagramme",description:"",sidebar_position:10},l=void 0,o={},u=[];function m(e){return(0,a.jsx)(i.Z,{})}function d(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},68399:function(e,t,r){r.d(t,{Z:()=>j});var s=r("85893");r("67294");var a=r("67026"),n=r("86563"),i=r("53367"),c=r("11107"),l=r("19999"),o=r("7670"),u=r("46055");let m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return(0,s.jsx)(i.Z,{href:t,className:(0,a.Z)("card padding--lg",m.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:n,description:i}=e;return(0,s.jsxs)(d,{href:t,children:[(0,s.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",m.cardTitle),title:n,children:[r," ",n]}),i&&(0,s.jsx)("p",{className:(0,a.Z)("text--truncate",m.cardDescription),title:i,children:i})]})}function x(e){let{item:t}=e,r=(0,n.LM)(t),a=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,o.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,s.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??a(t.items.length)}):null}function f(e){let{item:t}=e,r=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,n.xz)(t.docId??void 0);return(0,s.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(f,{item:t});case"category":return(0,s.jsx)(x,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,n.jA)();return(0,s.jsx)(j,{items:r.items,className:t})}function j(e){let{items:t,className:r}=e;if(!t)return(0,s.jsx)(g,{...e});let i=(0,n.MN)(t);return(0,s.jsx)("section",{className:(0,a.Z)("row",r),children:i.map((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(h,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return l}});var s=r(67294),a=r(87262);let n=["zero","one","two","few","many","other"];function i(e){return n.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let a=r.select(t);return s[Math.min(r.pluralForms.indexOf(a),s.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var s=r(67294);let a={},n=s.createContext(a);function i(e){let t=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);