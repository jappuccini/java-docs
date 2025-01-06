"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2446"],{19295:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>f,assets:()=>o,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"exercises/abstract-and-final/abstract-and-final","title":"Abstrakte und finale Klassen und Methoden","description":"","source":"@site/docs/exercises/abstract-and-final/abstract-and-final.mdx","sourceDirName":"exercises/abstract-and-final","slug":"/exercises/abstract-and-final/","permalink":"/java-docs/pr-preview/pr-244/exercises/abstract-and-final/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/abstract-and-final/abstract-and-final.mdx","tags":[{"inline":true,"label":"abstract","permalink":"/java-docs/pr-preview/pr-244/tags/abstract"},{"inline":true,"label":"final","permalink":"/java-docs/pr-preview/pr-244/tags/final"}],"version":"current","sidebarPosition":130,"frontMatter":{"title":"Abstrakte und finale Klassen und Methoden","description":"","sidebar_position":130,"tags":["abstract","final"]},"sidebar":"exercisesSidebar","previous":{"title":"Polymorphism04","permalink":"/java-docs/pr-preview/pr-244/exercises/polymorphy/polymorphy04"},"next":{"title":"AbstractAndFinal01","permalink":"/java-docs/pr-preview/pr-244/exercises/abstract-and-final/abstract-and-final01"}}'),a=n("85893"),s=n("50065"),i=n("94301");let l={title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:130,tags:["abstract","final"]},c=void 0,o={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von ntu.edu.sg",id:"\xfcbungsaufgaben-von-ntuedusg",level:2}];function d(e){let t={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,a.jsx)(i.Z,{}),"\n",(0,a.jsx)(t.h2,{id:"\xfcbungsaufgaben-von-ntuedusg",children:"\xdcbungsaufgaben von ntu.edu.sg"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,a.jsx)(t.a,{href:"https://www3.ntu.edu.sg/home/ehchua/programming/java/J3f_OOPExercises.html#zz-6.1",children:"OOP-6.1"})]}),"\n"]})]})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},94301:function(e,t,n){n.d(t,{Z:()=>x});var r=n("85893");n("67294");var a=n("67026"),s=n("69369"),i=n("83012"),l=n("43115"),c=n("63150"),o=n("96025"),u=n("34403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:n}=e;return(0,r.jsx)(i.Z,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:i}=e;return(0,r.jsxs)(f,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,r.jsx)("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e,n=(0,s.LM)(t),a=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,o.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(p,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??a(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,s.xz)(t.docId??void 0);return(0,r.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e,n=(0,s.jA)();return(0,r.jsx)(x,{items:n.items,className:t})}function x(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(b,{...e});let i=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,a.Z)("row",n),children:i.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},43115:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(67294),a=n(2933);let s=["zero","one","two","few","many","other"];function i(e){return s.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let a=n.select(t);return r[Math.min(n.pluralForms.indexOf(a),r.length-1)]})(n,t,e)}}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var r=n(67294);let a={},s=r.createContext(a);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);