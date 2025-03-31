"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["98"],{62397:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>u,contentTitle:()=>c});var r=JSON.parse('{"id":"exercises/exceptions/exceptions","title":"Ausnahmen (Exceptions)","description":"","source":"@site/docs/exercises/exceptions/exceptions.mdx","sourceDirName":"exercises/exceptions","slug":"/exercises/exceptions/","permalink":"/java-docs/pr-preview/pr-278/exercises/exceptions/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions.mdx","tags":[{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-278/tags/exceptions"}],"version":"current","sidebarPosition":160,"frontMatter":{"title":"Ausnahmen (Exceptions)","description":"","sidebar_position":160,"tags":["exceptions"]},"sidebar":"exercisesSidebar","previous":{"title":"Trees01","permalink":"/java-docs/pr-preview/pr-278/exercises/trees/trees01"},"next":{"title":"Exceptions01","permalink":"/java-docs/pr-preview/pr-278/exercises/exceptions/exceptions01"}}'),i=n("85893"),s=n("50065"),a=n("68399");let o={title:"Ausnahmen (Exceptions)",description:"",sidebar_position:160,tags:["exceptions"]},c=void 0,l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function d(e){let t={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,i.jsx)(a.Z,{}),"\n",(0,i.jsx)(t.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,i.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/exception.html#_die_l%C3%A4ngste_zeile_einer_datei_ermitteln",children:"I-9-1.1.1"}),"\n(ohne java.nio.file.Files)"]}),"\n",(0,i.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,i.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/exception.html#_ausnahmen_ermitteln_lachen_am_laufenden_band",children:"I-9-1.1.2"})]}),"\n",(0,i.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,i.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/exception.html#_string_array_in_int_array_konvertieren_und_nachsichtig_bei_nichtzahlen_sein",children:"I-9-1.1.3"})]}),"\n",(0,i.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,i.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/exception.html#_watt_ist_unm%C3%B6glich_mit_eigener_ausnahme_anzeigen",children:"I-9-1.3.1"})]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},68399:function(e,t,n){n.d(t,{Z:()=>b});var r=n("85893");n("67294");var i=n("67026"),s=n("86563"),a=n("53367"),o=n("11107"),c=n("19999"),l=n("7670"),u=n("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return(0,r.jsx)(a.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:a}=e;return(0,r.jsxs)(p,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),a&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e,n=(0,s.LM)(t),i=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(h,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function x(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,s.xz)(t.docId??void 0);return(0,r.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(x,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function m(e){let{className:t}=e,n=(0,s.jA)();return(0,r.jsx)(b,{items:n.items,className:t})}function b(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(m,{...e});let a=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:a.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},11107:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(67294),i=n(87262);let s=["zero","one","two","few","many","other"];function a(e){return s.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);