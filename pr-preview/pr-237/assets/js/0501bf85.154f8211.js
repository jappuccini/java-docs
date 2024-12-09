"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1876"],{41052:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>u,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"exercises/enumerations/enumerations","title":"Aufz\xe4hlungen (Enumerations)","description":"","source":"@site/docs/exercises/enumerations/enumerations.mdx","sourceDirName":"exercises/enumerations","slug":"/exercises/enumerations/","permalink":"/java-docs/pr-preview/pr-237/exercises/enumerations/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/enumerations/enumerations.mdx","tags":[{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-237/tags/enumerations"}],"version":"current","sidebarPosition":100,"frontMatter":{"title":"Aufz\xe4hlungen (Enumerations)","description":"","sidebar_position":100,"tags":["enumerations"]},"sidebar":"exercisesSidebar","previous":{"title":"JavaAPI04","permalink":"/java-docs/pr-preview/pr-237/exercises/java-api/java-api04"},"next":{"title":"Enumerations01","permalink":"/java-docs/pr-preview/pr-237/exercises/enumerations/enumerations01"}}'),s=t("85893"),i=t("50065"),a=t("94301");let o={title:"Aufz\xe4hlungen (Enumerations)",description:"",sidebar_position:100,tags:["enumerations"]},l=void 0,u={},c=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function d(e){let n={a:"a",h2:"h2",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,s.jsx)(a.Z,{}),"\n",(0,s.jsx)(n.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,s.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_radio_eine_am_fm_modulation_geben",children:"I-6-1.3.1"})]}),"\n",(0,s.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,s.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_g%C3%BCltige_start_und_endfrequenz_bei_modulation_setzen",children:"I-6-1.3.2"})]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},94301:function(e,n,t){t.d(n,{Z:()=>b});var r=t("85893");t("67294");var s=t("67026"),i=t("69369"),a=t("83012"),o=t("43115"),l=t("63150"),u=t("96025"),c=t("34403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:n,children:t}=e;return(0,r.jsx)(a.Z,{href:n,className:(0,s.Z)("card padding--lg",d.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:i,description:a}=e;return(0,r.jsxs)(m,{href:n,children:[(0,r.jsxs)(c.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:i,children:[t," ",i]}),a&&(0,r.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function p(e){let{item:n}=e,t=(0,i.LM)(n),s=function(){let{selectMessage:e}=(0,o.c)();return n=>e(n,(0,u.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,r.jsx)(f,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??s(n.items.length)}):null}function h(e){let{item:n}=e,t=(0,l.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,i.xz)(n.docId??void 0);return(0,r.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,r.jsx)(h,{item:n});case"category":return(0,r.jsx)(p,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e,t=(0,i.jA)();return(0,r.jsx)(b,{items:t.items,className:n})}function b(e){let{items:n,className:t}=e;if(!n)return(0,r.jsx)(x,{...e});let a=(0,i.MN)(n);return(0,r.jsx)("section",{className:(0,s.Z)("row",t),children:a.map((e,n)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},n))})}},43115:function(e,n,t){t.d(n,{c:function(){return l}});var r=t(67294),s=t(2933);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(n=>e.includes(n))}let o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),o}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let s=t.select(n);return r[Math.min(t.pluralForms.indexOf(s),r.length-1)]})(t,n,e)}}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(67294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);