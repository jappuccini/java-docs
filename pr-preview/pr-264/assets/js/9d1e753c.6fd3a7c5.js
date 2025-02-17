"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9285"],{2768:function(e,a,t){t.r(a),t.d(a,{default:()=>d,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>u});var n=JSON.parse('{"id":"exercises/java-stream-api/java-stream-api","title":"Die Java Stream API","description":"","source":"@site/docs/exercises/java-stream-api/java-stream-api.mdx","sourceDirName":"exercises/java-stream-api","slug":"/exercises/java-stream-api/","permalink":"/java-docs/pr-preview/pr-264/exercises/java-stream-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api.mdx","tags":[{"inline":true,"label":"java-stream-api","permalink":"/java-docs/pr-preview/pr-264/tags/java-stream-api"}],"version":"current","sidebarPosition":200,"frontMatter":{"title":"Die Java Stream API","description":"","sidebar_position":200,"tags":["java-stream-api"]},"sidebar":"exercisesSidebar","previous":{"title":"Optionals03","permalink":"/java-docs/pr-preview/pr-264/exercises/optionals/optionals03"},"next":{"title":"JavaStreamAPI01","permalink":"/java-docs/pr-preview/pr-264/exercises/java-stream-api/java-stream-api01"}}'),r=t("85893"),s=t("50065"),i=t("68399");let l={title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},u=void 0,c={},o=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function h(e){let a={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,r.jsx)(i.Z,{}),"\n",(0,r.jsx)(a.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_heldenepos_stream_api_kennenlernen",children:"II-5-1.1.1"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_den_geliebten_captain_aus_einer_liste_ermitteln",children:"II-5-1.1.2"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_bilder_einrahmen",children:"II-5-1.1.3"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_schau_und_sag",children:"II-5-1.1.4"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_doppelte_inseln_mit_metallen_der_seltenen_erden_entfernen",children:"II-5-1.1.5"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_wo_gibt_es_die_segel",children:"II-5-1.1.6"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_das_beliebteste_auto_kaufen",children:"II-5-1.1.7"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_nan_in_einem_array_erkennen",children:"II-5-1.2.1"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_jahrzehnte_erzeugen",children:"II-5-1.2.2"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_array_mit_konstantem_inhalt_%C3%BCber_stream_erzeugen",children:"II-5-1.2.3"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_pyramiden_zeichnen",children:"II-5-1.2.4"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_buchstabenh%C3%A4ufigkeit_eines_strings_ermitteln",children:"II-5-1.2.5"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_von_1_auf_0_von_10_auf_9",children:"II-5-1.2.6"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_zwei_int_arrays_zusammenf%C3%BChren",children:"II-5-1.2.7"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_gewinnkombinationen_ermitteln",children:"II-5-1.2.8"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_die_schnellsten_und_langsamsten_paddler",children:"II-5-1.3.1"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_median_berechnen",children:"II-5-1.3.2"})]}),"\n",(0,r.jsxs)(a.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(a.a,{href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_temperaturstatistiken_berechnen_und_charts_zeichnen",children:"II-5-1.3.3"})]}),"\n"]})]})}function d(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},68399:function(e,a,t){t.d(a,{Z:()=>b});var n=t("85893");t("67294");var r=t("67026"),s=t("86563"),i=t("53367"),l=t("11107"),u=t("19999"),c=t("7670"),o=t("46055");let h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:a,children:t}=e;return(0,n.jsx)(i.Z,{href:a,className:(0,r.Z)("card padding--lg",h.cardContainer),children:t})}function g(e){let{href:a,icon:t,title:s,description:i}=e;return(0,n.jsxs)(d,{href:a,children:[(0,n.jsxs)(o.Z,{as:"h2",className:(0,r.Z)("text--truncate",h.cardTitle),title:s,children:[t," ",s]}),i&&(0,n.jsx)("p",{className:(0,r.Z)("text--truncate",h.cardDescription),title:i,children:i})]})}function m(e){let{item:a}=e,t=(0,s.LM)(a),r=function(){let{selectMessage:e}=(0,l.c)();return a=>e(a,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a}))}();return t?(0,n.jsx)(g,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:a.label,description:a.description??r(a.items.length)}):null}function p(e){let{item:a}=e,t=(0,u.Z)(a.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,s.xz)(a.docId??void 0);return(0,n.jsx)(g,{href:a.href,icon:t,title:a.label,description:a.description??r?.description})}function f(e){let{item:a}=e;switch(a.type){case"link":return(0,n.jsx)(p,{item:a});case"category":return(0,n.jsx)(m,{item:a});default:throw Error(`unknown item type ${JSON.stringify(a)}`)}}function j(e){let{className:a}=e,t=(0,s.jA)();return(0,n.jsx)(b,{items:t.items,className:a})}function b(e){let{items:a,className:t}=e;if(!a)return(0,n.jsx)(j,{...e});let i=(0,s.MN)(a);return(0,n.jsx)("section",{className:(0,r.Z)("row",t),children:i.map((e,a)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(f,{item:e})},a))})}},11107:function(e,a,t){t.d(a,{c:function(){return u}});var n=t(67294),r=t(87262);let s=["zero","one","two","few","many","other"];function i(e){return s.filter(a=>e.includes(a))}let l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function u(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)(()=>{try{return function(e){let a=new Intl.PluralRules(e);return{locale:e,pluralForms:i(a.resolvedOptions().pluralCategories),select:e=>a.select(e)}}(e)}catch(a){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${a.message}
`),l}},[e])}();return{selectMessage:(a,t)=>(function(e,a,t){let n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let r=t.select(a);return n[Math.min(t.pluralForms.indexOf(r),n.length-1)]})(t,a,e)}}},50065:function(e,a,t){t.d(a,{Z:function(){return l},a:function(){return i}});var n=t(67294);let r={},s=n.createContext(r);function i(e){let a=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);