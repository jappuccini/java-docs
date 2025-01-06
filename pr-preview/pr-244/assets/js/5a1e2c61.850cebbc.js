"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2667"],{53399:function(e,t,r){r.r(t),r.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>u,frontMatter:()=>c});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-games","title":"W\xfcrfelspiele","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-games.mdx","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/","permalink":"/java-docs/pr-preview/pr-244/exam-exercises/exam-exercises-java1/dice-games/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-games.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"W\xfcrfelspiele","description":"","sidebar_position":30},"sidebar":"examExercisesSidebar","previous":{"title":"Selectionsort","permalink":"/java-docs/pr-preview/pr-244/exam-exercises/exam-exercises-java1/activity-diagrams/selection-sort"},"next":{"title":"W\xfcrfelspiel 1","permalink":"/java-docs/pr-preview/pr-244/exam-exercises/exam-exercises-java1/dice-games/dice-game-01"}}'),n=r("85893"),s=r("50065"),a=r("94301");let c={title:"W\xfcrfelspiele",description:"",sidebar_position:30},o=void 0,l={},u=[];function d(e){return(0,n.jsx)(a.Z,{})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},94301:function(e,t,r){r.d(t,{Z:()=>j});var i=r("85893");r("67294");var n=r("67026"),s=r("69369"),a=r("83012"),c=r("43115"),o=r("63150"),l=r("96025"),u=r("34403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,i.jsx)(a.Z,{href:t,className:(0,n.Z)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:a}=e;return(0,i.jsxs)(m,{href:t,children:[(0,i.jsxs)(u.Z,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),a&&(0,i.jsx)("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function x(e){let{item:t}=e,r=(0,s.LM)(t),n=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,i.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e,r=(0,o.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",n=(0,s.xz)(t.docId??void 0);return(0,i.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(f,{item:t});case"category":return(0,i.jsx)(x,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,s.jA)();return(0,i.jsx)(j,{items:r.items,className:t})}function j(e){let{items:t,className:r}=e;if(!t)return(0,i.jsx)(g,{...e});let a=(0,s.MN)(t);return(0,i.jsx)("section",{className:(0,n.Z)("row",r),children:a.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(h,{item:e})},t))})}},43115:function(e,t,r){r.d(t,{c:function(){return o}});var i=r(67294),n=r(2933);let s=["zero","one","two","few","many","other"];function a(e){return s.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,i.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let i=e.split("|");if(1===i.length)return i[0];i.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let n=r.select(t);return i[Math.min(r.pluralForms.indexOf(n),i.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return a}});var i=r(67294);let n={},s=i.createContext(n);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);