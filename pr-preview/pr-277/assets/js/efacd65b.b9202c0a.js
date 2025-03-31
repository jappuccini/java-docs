"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9756"],{37707:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>u,contentTitle:()=>o});var n=JSON.parse('{"id":"exercises/generics/generics","title":"Generische Programmierung","description":"","source":"@site/docs/exercises/generics/generics.mdx","sourceDirName":"exercises/generics","slug":"/exercises/generics/","permalink":"/java-docs/pr-preview/pr-277/exercises/generics/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics.mdx","tags":[{"inline":true,"label":"generics","permalink":"/java-docs/pr-preview/pr-277/tags/generics"}],"version":"current","sidebarPosition":180,"frontMatter":{"title":"Generische Programmierung","description":"","sidebar_position":180,"tags":["generics"]},"sidebar":"exercisesSidebar","previous":{"title":"Lambdas05","permalink":"/java-docs/pr-preview/pr-277/exercises/lambdas/lambdas05"},"next":{"title":"Generics01","permalink":"/java-docs/pr-preview/pr-277/exercises/generics/generics01"}}'),i=t("85893"),s=t("50065"),c=t("68399");let a={title:"Generische Programmierung",description:"",sidebar_position:180,tags:["generics"]},o=void 0,l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function d(e){let r={h2:"h2",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,i.jsx)(c.Z,{})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},68399:function(e,r,t){t.d(r,{Z:()=>j});var n=t("85893");t("67294");var i=t("67026"),s=t("86563"),c=t("53367"),a=t("11107"),o=t("19999"),l=t("7670"),u=t("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:r,children:t}=e;return(0,n.jsx)(c.Z,{href:r,className:(0,i.Z)("card padding--lg",d.cardContainer),children:t})}function m(e){let{href:r,icon:t,title:s,description:c}=e;return(0,n.jsxs)(p,{href:r,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:s,children:[t," ",s]}),c&&(0,n.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function f(e){let{item:r}=e,t=(0,s.LM)(r),i=function(){let{selectMessage:e}=(0,a.c)();return r=>e(r,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return t?(0,n.jsx)(m,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:r.label,description:r.description??i(r.items.length)}):null}function g(e){let{item:r}=e,t=(0,o.Z)(r.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,s.xz)(r.docId??void 0);return(0,n.jsx)(m,{href:r.href,icon:t,title:r.label,description:r.description??i?.description})}function h(e){let{item:r}=e;switch(r.type){case"link":return(0,n.jsx)(g,{item:r});case"category":return(0,n.jsx)(f,{item:r});default:throw Error(`unknown item type ${JSON.stringify(r)}`)}}function x(e){let{className:r}=e,t=(0,s.jA)();return(0,n.jsx)(j,{items:t.items,className:r})}function j(e){let{items:r,className:t}=e;if(!r)return(0,n.jsx)(x,{...e});let c=(0,s.MN)(r);return(0,n.jsx)("section",{className:(0,i.Z)("row",t),children:c.map((e,r)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},r))})}},11107:function(e,r,t){t.d(r,{c:function(){return o}});var n=t(67294),i=t(87262);let s=["zero","one","two","few","many","other"];function c(e){return s.filter(r=>e.includes(r))}let a={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)(()=>{try{return function(e){let r=new Intl.PluralRules(e);return{locale:e,pluralForms:c(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${r.message}
`),a}},[e])}();return{selectMessage:(r,t)=>(function(e,r,t){let n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let i=t.select(r);return n[Math.min(t.pluralForms.indexOf(i),n.length-1)]})(t,r,e)}}},50065:function(e,r,t){t.d(r,{Z:function(){return a},a:function(){return c}});var n=t(67294);let i={},s=n.createContext(i);function c(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);