"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1185"],{33426:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>u,contentTitle:()=>c});var r=JSON.parse('{"id":"documentation/data-types","title":"Datentypen","description":"","source":"@site/docs/documentation/data-types.mdx","sourceDirName":"documentation","slug":"/documentation/data-types","permalink":"/java-docs/pr-preview/pr-286/documentation/data-types","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/data-types.mdx","tags":[{"inline":true,"label":"data-types","permalink":"/java-docs/pr-preview/pr-286/tags/data-types"}],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Datentypen","description":"","sidebar_position":30,"tags":["data-types"]},"sidebar":"documentationSidebar","previous":{"title":"Aufbau einer Java-Klasse","permalink":"/java-docs/pr-preview/pr-286/documentation/class-structure"},"next":{"title":"Datenobjekte","permalink":"/java-docs/pr-preview/pr-286/documentation/data-objects"}}'),i=t("85893"),a=t("50065"),s=t("58168"),l=t("97645");let d={title:"Datentypen",description:"",sidebar_position:30,tags:["data-types"]},c=void 0,o={},u=[];function h(e){let n={a:"a",admonition:"admonition",code:"code",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Datentypen legen neben der Gr\xf6\xdfe des Arbeitsspeichers, die ein Datenobjekt\nben\xf6tigt, auch die Art der Information fest, die im Datenobjekt gespeichert\nwerden kann."}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{value:"a",label:"Primitive Datentypen",default:!0,children:[(0,i.jsx)(n.p,{children:"Primitive Datentypen sind fest in der Programmiersprache verankert und k\xf6nnen\ndurch entsprechende Schl\xfcsselw\xf6rter angesprochen werden. Java kennt 8 solcher\nprimitiver Datentypen."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datentyp"}),(0,i.jsx)(n.th,{children:"Gr\xf6\xdfe"}),(0,i.jsx)(n.th,{children:"Wertbereich"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"true, false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"char"}),(0,i.jsx)(n.td,{children:"2 Byte"}),(0,i.jsx)(n.td,{children:"\\u0000 bis \\uFFFF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"byte"}),(0,i.jsx)(n.td,{children:"1 Byte"}),(0,i.jsx)(n.td,{children:"-128 bis +127"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"short"}),(0,i.jsx)(n.td,{children:"2 Byte"}),(0,i.jsx)(n.td,{children:"-32.768 bis +32.767"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"4 Byte"}),(0,i.jsx)(n.td,{children:"-2.147.483.648 bis +2.147.483.647"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"8 Byte"}),(0,i.jsx)(n.td,{children:"-9.233.372.036.854.775.808 bis +9.233.372.036.854.775.807"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"4 Byte"}),(0,i.jsx)(n.td,{children:"+/-1,4e-45 bis +/-3,4028235e+38"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"double"}),(0,i.jsx)(n.td,{children:"8 Byte"}),(0,i.jsx)(n.td,{children:"+/-4,9e-324 bis +/-1,7976931348623157e+308"})]})]})]})]}),(0,i.jsxs)(l.Z,{value:"b",label:"Strukturierte Datentypen",children:[(0,i.jsx)(n.p,{children:"Klassen werden auch als strukturierte Datentypen bezeichnet, da sie im Gegensatz\nzu primitiven Datentypen beliebig viele, unterschiedlich typisierte Attribute\nenthalten k\xf6nnen."}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   class Person {\n      -name: String\n      -age: int\n      -gender: char\n   }"}),(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["Weitere Informationen zu strukturierten Datentypen finden sich im Kapitel\n",(0,i.jsx)(n.a,{href:"oo",children:"Objektorientierte Programmierung"}),"."]})})]}),(0,i.jsxs)(l.Z,{value:"c",label:"Generische Datentypen",children:[(0,i.jsxs)(n.p,{children:["Klassen, die \xfcber einen oder mehrere formale Typparameter verf\xfcgen, werden als\ngenerische Klassen bezeichnet. Generische Klassen k\xf6nnen mit verschiedenen\nDatentypen verwendet werden und erm\xf6glichen dadurch die Wiederverwendung von\nCode unter Beibehaltung statischer Typsicherheit. Unter Typsicherheit versteht\nman, dass Datentypen gem\xe4\xdf ihrer Definition verwendet werden und dabei keine\nTypverletzungen auftreten. Bei statisch typisierten Sprachen findet die\nTyppr\xfcfung bei der Kompilierung statt. Beispiele f\xfcr generische Klassen sind die\nKlasse ",(0,i.jsx)(n.code,{children:"ArrayList<E>"})," sowie die Klasse ",(0,i.jsx)(n.code,{children:"HashMap<K, V>"}),"."]}),(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["Weitere Informationen zu generischen Datentypen finden sich im Kapitel\n",(0,i.jsx)(n.a,{href:"generics",children:"Generische Programmierung"}),"."]})})]}),(0,i.jsxs)(l.Z,{value:"d",label:"Abstrakte Datentypen",children:[(0,i.jsxs)(n.p,{children:["Abstrakte Datentypen sind Sammlungen von Daten samt den dazugeh\xf6rigen\nOperationen wie Einf\xfcgen, L\xf6schen etc. Beispiele f\xfcr abstrakte Datentypen sind\nListen (z.B. die Klassen ",(0,i.jsx)(n.code,{children:"ArrayList<E>"})," und ",(0,i.jsx)(n.code,{children:"LinkedList<E>"}),"), Mengen (z.B. die\nKlassen ",(0,i.jsx)(n.code,{children:"HashSet<E>"})," und ",(0,i.jsx)(n.code,{children:"TreeSet<E>"}),"), Warteschlangen (z.B. die Klassen\n",(0,i.jsx)(n.code,{children:"LinkedList<E>"})," und ",(0,i.jsx)(n.code,{children:"PriorityQueue<E>"}),") sowie Assoziativspeicher (z.B. die\nKlassen ",(0,i.jsx)(n.code,{children:"HashMap<K, V>"})," und ",(0,i.jsx)(n.code,{children:"TreeMap<K, V>"}),")."]}),(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["Weitere Informationen zu abstrakten Datentypen finden sich in den Kapiteln\n",(0,i.jsx)(n.a,{href:"array-lists",children:"Feldbasierte Listen (ArrayLists)"}),", ",(0,i.jsx)(n.a,{href:"lists",children:"Listen"}),",\n",(0,i.jsx)(n.a,{href:"java-collections-framework",children:"Java Collections Framework"})," und\n",(0,i.jsx)(n.a,{href:"maps",children:"Assoziativspeicher (Maps)"}),"."]})})]})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,n,t){t.d(n,{Z:()=>a});var r=t("85893");t("67294");var i=t("67026");function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",a),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>b});var r=t("85893"),i=t("67294"),a=t("67026"),s=t("34718"),l=t("16550"),d=t("8714"),c=t("89207"),o=t("69413"),u=t("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("6735");function f(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:d}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),u=e=>{let n=e.currentTarget,t=d[c.indexOf(n)].value;t!==i&&(o(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:d.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:u,...s,className:(0,a.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function j(e){let{lazy:n,children:t,selectedValue:s}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[s,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[f,j]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[x,b]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,a]=(0,u.Nk)(t);return[r,(0,i.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:r}),v=(()=>{let e=f??x;return p({value:e,tabValues:a})?e:null})();return(0,d.Z)(()=>{v&&m(v)},[v]),{selectedValue:s,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),j(e),b(e)},[j,b,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(f,{...n,...e}),(0,r.jsx)(j,{...n,...e})]})}function b(e){let n=(0,m.Z)();return(0,r.jsx)(x,{...e,children:h(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(67294);let i={},a=r.createContext(i);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);