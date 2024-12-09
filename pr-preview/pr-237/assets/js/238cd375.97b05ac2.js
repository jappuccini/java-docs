"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4764"],{66319:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>u,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"documentation/java-collections-framework","title":"Java Collections Framework","description":"","source":"@site/docs/documentation/java-collections-framework.mdx","sourceDirName":"documentation","slug":"/documentation/java-collections-framework","permalink":"/java-docs/pr-preview/pr-237/documentation/java-collections-framework","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/java-collections-framework.mdx","tags":[{"inline":true,"label":"collections","permalink":"/java-docs/pr-preview/pr-237/tags/collections"},{"inline":true,"label":"lists","permalink":"/java-docs/pr-preview/pr-237/tags/lists"},{"inline":true,"label":"sets","permalink":"/java-docs/pr-preview/pr-237/tags/sets"},{"inline":true,"label":"queues","permalink":"/java-docs/pr-preview/pr-237/tags/queues"}],"version":"current","sidebarPosition":224,"frontMatter":{"title":"Java Collections Framework","description":"","sidebar_position":224,"tags":["collections","lists","sets","queues"]},"sidebar":"documentationSidebar","previous":{"title":"Komparatoren","permalink":"/java-docs/pr-preview/pr-237/documentation/comparators"},"next":{"title":"Schl\xfcsseltransformationen (Hashing)","permalink":"/java-docs/pr-preview/pr-237/documentation/hashing"}}'),a=t("85893"),i=t("50065"),s=t("47902"),l=t("5525");let o={title:"Java Collections Framework",description:"",sidebar_position:224,tags:["collections","lists","sets","queues"]},c=void 0,u={},d=[{value:"Iteratoren",id:"iteratoren",level:2}];function m(e){let n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Collections sind Beh\xe4lter, die beliebig viele Objekte aufnehmen k\xf6nnen. Der\nBeh\xe4lter \xfcbernimmt dabei die Verantwortung f\xfcr die Elemente. Collections werden\nauch als (Daten-)Sammlungen bezeichnet. Alle Collections-Schnittstellen und\nKlassen befinden sich im Paket ",(0,a.jsx)(n.code,{children:"java.util"}),". Die Grundformen der Datensammlungen\nsind die Schnittstellen ",(0,a.jsx)(n.code,{children:"List<E>"}),", ",(0,a.jsx)(n.code,{children:"Set<E>"})," und ",(0,a.jsx)(n.code,{children:"Queue<E>"}),". Zu allen\nSchnittstellen existieren konkrete Implementierungen sowie abstrakte Klassen,\ndie zum Erstellen eigener Collections-Klassen verwendet werden k\xf6nnen."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(l.Z,{value:"a",label:"Listen (Lists)",default:!0,children:[(0,a.jsx)(n.p,{children:"Unter einer Liste (List) versteht man eine geordnete Folge von Objekten. Listen\nk\xf6nnen doppelte Elemente enthalten. Der Zugriff auf die Elemente erfolgt \xfcber\nden Index oder sequentiell."}),(0,a.jsx)(n.mermaid,{value:"flowchart\n    subgraph names\n        name1(Lisa)\n        name2(Peter)\n        name3(Lisa)\n        name4(Hans)\n    end"}),(0,a.jsxs)(n.p,{children:["Konkrete Implementierungen der Schnittstelle ",(0,a.jsx)(n.code,{children:"List<E>"})," stellen die Klassen\n",(0,a.jsx)(n.code,{children:"ArrayList<E>"})," und ",(0,a.jsx)(n.code,{children:"LinkedList<E>"})," (siehe auch\n",(0,a.jsx)(n.a,{href:"array-lists",children:"Feldbasierte Listen"})," und ",(0,a.jsx)(n.a,{href:"lists",children:"Listen"}),") dar."]})]}),(0,a.jsxs)(l.Z,{value:"b",label:"Mengen (Sets)",children:[(0,a.jsx)(n.p,{children:"Unter einer Menge (Set) versteht man eine Ansammlung von Elementen. Mengen\nk\xf6nnen keine doppelten Elemente beinhalten. Der Zugriff erfolgt \xfcber typische\nMengenoperationen."}),(0,a.jsx)(n.mermaid,{value:"flowchart LR\n    subgraph names\n        name1(Lisa)\n        name2(Peter)\n        name3(Hans)\n    end"}),(0,a.jsxs)(n.p,{children:["Konkrete Implementierungen der Schnittstelle ",(0,a.jsx)(n.code,{children:"Set<E>"})," stellen die Klassen\n",(0,a.jsx)(n.code,{children:"HashSet<E>"})," und ",(0,a.jsx)(n.code,{children:"TreeSet<E>"})," dar. Die Klasse ",(0,a.jsx)(n.code,{children:"HashSet<E>"})," implementiert die\nMenge dabei in Form einer Hashtabelle, die Klasse ",(0,a.jsx)(n.code,{children:"TreeSet<E>"})," in Form eines\nBin\xe4rbaumes."]})]}),(0,a.jsxs)(l.Z,{value:"c",label:"Warteschlangen (Queues)",children:[(0,a.jsx)(n.p,{children:"Unter einer Warteschlange (Queue) versteht man eine Folge von Objekten, bei der\ndas Anf\xfcgen und L\xf6schen von Objekten nach dem FIFO-Prinzip (First In First Out)\nfunktioniert. Bei einer Warteschlange kann ein neues Objekt immer nur am Ende\nangef\xfcgt werden und nur das Objekt, das am Anfang der Warteschlange steht,\ngel\xf6scht werden. Warteschlangen k\xf6nnen doppelte Elemente enthalten."}),(0,a.jsx)(n.mermaid,{value:"flowchart LR\n    name1 --\x3e name2 --\x3e name3 --\x3e name4 --\x3e name5\n\n    name1(Lisa)\n    subgraph names\n        direction LR\n        name2(Peter)\n        name3(Lisa)\n        name4(Hans)\n    end\n    name5(Max)"}),(0,a.jsxs)(n.p,{children:["Konkrete Implementierungen der Schnittstelle ",(0,a.jsx)(n.code,{children:"Queue<E>"})," stellen die Klassen\n",(0,a.jsx)(n.code,{children:"PriorityQueue<E>"})," und ",(0,a.jsx)(n.code,{children:"LinkedList<E>"})," dar. Die Klasse ",(0,a.jsx)(n.code,{children:"PriorityQueue<E>"}),"\nimplementiert die Warteschlange als eine Vorrang-Warteschlange. Bei einer\nVorrang-Warteschlange werden die Elemente gem\xe4\xdf ihrer Wichtigkeit sortiert, das\nhei\xdft, sie funktioniert nicht nach dem FIFO-Prinzip."]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"iteratoren",children:"Iteratoren"}),"\n",(0,a.jsxs)(n.p,{children:["Ein Iterator erlaubt den sequentiellen Zugriff auf die Elemente einer\nDatensammlung. Iteratoren werden durch die Schnittstelle ",(0,a.jsx)(n.code,{children:"Iterator<E>"}),"\ndefiniert; diese bietet die Methoden ",(0,a.jsx)(n.code,{children:"boolean hasNext()"}),", ",(0,a.jsx)(n.code,{children:"E next()"})," und\n",(0,a.jsx)(n.code,{children:"void remove()"}),". Die von ",(0,a.jsx)(n.code,{children:"Iterator<E>"})," abgeleitete Schnittstelle\n",(0,a.jsx)(n.code,{children:"ListIterator<E>"})," bietet zus\xe4tzliche Methoden zum Ver\xe4ndern einer Liste."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n\n    List<String> names = List.of("Hans", "Peter", "Lisa");\n\n    Iterator<String> iterator = names.iterator();\n    while (iterator.hasNext()) {\n      String name = iterator.next();\n      System.out.println(name);\n    }\n\n  }\n\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Auch die bereits bekannte for-each-Schleife basiert auf Iteratoren. Die\nausf\xfchrliche Schreibeweise mit Iteratoren wird auch als erweiterte for-Schleife\nbezeichnet. Beim Kompilieren werden for-each-Schleifen um Iteratoren erg\xe4nzt."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n\n    List<String> names = List.of("Hans", "Peter", "Lisa");\n\n    for (Iterator<String> iterator = names.iterator(); iterator.hasNext();) {\n      String name = iterator.next();\n      System.out.println(name);\n    }\n\n    /* Kurzschreibweise */\n    for (String name: names) {\n      System.out.println(name);\n    }\n\n  }\n\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},5525:function(e,n,t){t.d(n,{Z:()=>s});var r=t("85893");t("67294");var a=t("67026");let i="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>x});var r=t("85893"),a=t("67294"),i=t("67026"),s=t("69599"),l=t("16550"),o=t("32000"),c=t("4520"),u=t("38341"),d=t("76009");function m(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("7227");let f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==a&&(u(n),l(t))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:m,onClick:d,...s,className:(0,i.Z)("tabs__item",b,s?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:s}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,i=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??m(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[s,p]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[f,b]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),s=(0,c._X)(i);return[s,(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:t,groupId:r}),[v,g]=function(e){var n;let{groupId:t}=e;let r=(n=t)?`docusaurus.tab.${n}`:null,[i,s]=(0,d.Nk)(r);return[i,(0,a.useCallback)(e=>{if(!!r)s.set(e)},[r,s])]}({groupId:r}),j=(()=>{let e=f??v;return h({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{j&&p(j)},[j]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),g(e)},[b,g,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,r.jsx)(v,{...n,...e}),(0,r.jsx)(g,{...n,...e})]})}function x(e){let n=(0,p.Z)();return(0,r.jsx)(j,{...e,children:m(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(67294);let a={},i=r.createContext(a);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);