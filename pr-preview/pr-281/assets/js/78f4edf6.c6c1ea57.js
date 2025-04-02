"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2302"],{94031:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>c,metadata:()=>i,assets:()=>o,toc:()=>u,contentTitle:()=>l});var i=JSON.parse('{"id":"exercises/activity-diagrams/activity-diagrams","title":"Aktivit\xe4tsdiagramme","description":"","source":"@site/docs/exercises/activity-diagrams/activity-diagrams.mdx","sourceDirName":"exercises/activity-diagrams","slug":"/exercises/activity-diagrams/","permalink":"/java-docs/pr-preview/pr-281/exercises/activity-diagrams/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/activity-diagrams/activity-diagrams.mdx","tags":[{"inline":true,"label":"uml","permalink":"/java-docs/pr-preview/pr-281/tags/uml"},{"inline":true,"label":"activity-diagrams","permalink":"/java-docs/pr-preview/pr-281/tags/activity-diagrams"}],"version":"current","sidebarPosition":115,"frontMatter":{"title":"Aktivit\xe4tsdiagramme","description":"","sidebar_position":115,"tags":["uml","activity-diagrams"]},"sidebar":"exercisesSidebar","previous":{"title":"ClassDiagrams05","permalink":"/java-docs/pr-preview/pr-281/exercises/class-diagrams/class-diagrams05"},"next":{"title":"ActivityDiagrams01","permalink":"/java-docs/pr-preview/pr-281/exercises/activity-diagrams/activity-diagrams01"}}'),a=r("85893"),n=r("50065"),s=r("68399");let c={title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:115,tags:["uml","activity-diagrams"]},l=void 0,o={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function d(e){let t={h2:"h2",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,a.jsx)(s.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},68399:function(e,t,r){r.d(t,{Z:()=>x});var i=r("85893");r("67294");var a=r("67026"),n=r("86563"),s=r("53367"),c=r("11107"),l=r("19999"),o=r("7670"),u=r("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,i.jsx)(s.Z,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:n,description:s}=e;return(0,i.jsxs)(m,{href:t,children:[(0,i.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:n,children:[r," ",n]}),s&&(0,i.jsx)("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e,r=(0,n.LM)(t),a=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,o.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,i.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??a(t.items.length)}):null}function g(e){let{item:t}=e,r=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,n.xz)(t.docId??void 0);return(0,i.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(g,{item:t});case"category":return(0,i.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e,r=(0,n.jA)();return(0,i.jsx)(x,{items:r.items,className:t})}function x(e){let{items:t,className:r}=e;if(!t)return(0,i.jsx)(v,{...e});let s=(0,n.MN)(t);return(0,i.jsx)("section",{className:(0,a.Z)("row",r),children:s.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(h,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return l}});var i=r(67294),a=r(87262);let n=["zero","one","two","few","many","other"];function s(e){return n.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,i.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let i=e.split("|");if(1===i.length)return i[0];i.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let a=r.select(t);return i[Math.min(r.pluralForms.indexOf(a),i.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return s}});var i=r(67294);let a={},n=i.createContext(a);function s(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);