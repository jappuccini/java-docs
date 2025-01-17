"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7998"],{36102:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>u});var r=JSON.parse('{"id":"documentation/lists","title":"Listen","description":"","source":"@site/docs/documentation/lists.mdx","sourceDirName":"documentation","slug":"/documentation/lists","permalink":"/java-docs/pr-preview/pr-251/documentation/lists","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/lists.mdx","tags":[{"inline":true,"label":"collections","permalink":"/java-docs/pr-preview/pr-251/tags/collections"},{"inline":true,"label":"namess","permalink":"/java-docs/pr-preview/pr-251/tags/namess"}],"version":"current","sidebarPosition":215,"frontMatter":{"title":"Listen","description":"","sidebar_position":215,"tags":["collections","namess"]},"sidebar":"documentationSidebar","previous":{"title":"Schnittstellen (Interfaces)","permalink":"/java-docs/pr-preview/pr-251/documentation/interfaces"},"next":{"title":"Komparatoren","permalink":"/java-docs/pr-preview/pr-251/documentation/comparators"}}'),a=t("85893"),s=t("50065"),i=t("58168"),l=t("97645");let o={title:"Listen",description:"",sidebar_position:215,tags:["collections","namess"]},u=void 0,c={},d=[];function m(e){let n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Die Java API stellt unter Anderem die Schnittstelle ",(0,a.jsx)(n.code,{children:"List<E>"})," sowie die Klassen\n",(0,a.jsx)(n.code,{children:"ArrayList<E>"}),", ",(0,a.jsx)(n.code,{children:"LinkedList<E>"})," und ",(0,a.jsx)(n.code,{children:"Arrays"})," zur Verf\xfcgung, mit deren Hilfe\nListen realisiert werden. Unter einer Liste versteht man eine geordnete Folge\nvon Elementen, die auch doppelt enthalten sein k\xf6nnen. Der Zugriff auf die\nElemente erfolgt \xfcber den Index oder sequentiell."]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(l.Z,{value:"a",label:"Unver\xe4nderbare Listen",default:!0,children:[(0,a.jsxs)(n.p,{children:["Die Schnittstelle ",(0,a.jsx)(n.code,{children:"List<E>"})," bietet verschiedene Fabrikmethoden zum Erzeugen\nunver\xe4nderbarer Listen. Unver\xe4nderbar bedeutet, dass weder die Liste selbst noch\nihre Elemente ge\xe4ndert werden k\xf6nnen."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      List<String> names = List.of("Hans", "Peter", "Lisa");\n\n      System.out.println(names.size());\n      System.out.println(names.get(0));\n      names.set(0, "Max"); // Laufzeitfehler\n      names.add("Heidi"); // Laufzeitfehler\n      names.remove(0); // Laufzeitfehler\n   }\n\n}\n'})}),(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsx)(n.p,{children:"Fabrikmethoden sind Methoden, die Objekte erzeugen."})})]}),(0,a.jsxs)(l.Z,{value:"b",label:"Ver\xe4nderbare Listen fixer Gr\xf6\xdfe",children:[(0,a.jsxs)(n.p,{children:["Die Klasse ",(0,a.jsx)(n.code,{children:"Arrays"})," stellt neben Methoden zum Sortieren und Durchsuchen von\nFeldern auch eine Methode zum Erzeugen ver\xe4nderbarer Listen fixer Gr\xf6\xdfe zur\nVerf\xfcgung."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      List<String> names = Arrays.asList("Hans", "Peter", "Lisa");\n\n      System.out.println(names.size());\n      System.out.println(names.get(0));\n      names.set(0, "Max");\n      names.add("Heidi"); // Laufzeitfehler\n      names.remove(0); // Laufzeitfehler\n   }\n\n}\n'})})]}),(0,a.jsxs)(l.Z,{value:"c",label:"Ver\xe4nderbare Listen dynamischer Gr\xf6\xdfe",children:[(0,a.jsxs)(n.p,{children:["Die Klasse ",(0,a.jsx)(n.code,{children:"ArrayList<E>"})," stellt eine ver\xe4nderbare Liste dynamischer Gr\xf6\xdfe auf\nBasis eine Feldes dar, die Klasse ",(0,a.jsx)(n.code,{children:"LinkedList<E>"})," eine ver\xe4nderbare Liste\ndynamischer Gr\xf6\xdfe auf Basis doppelt verketteter Elemente."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      List<String> names = new ArrayList<>(); // = new LinkedList<>();\n      names.add("Hans");\n      names.add("Peter");\n      names.add("Lisa");\n\n      System.out.println(names.size());\n      System.out.println(names.get(0));\n      names.set(0, "Max");\n      names.add("Heidi");\n      names.remove(0);\n   }\n\n}\n'})}),(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsx)(n.p,{children:"Eine feldbasierte Liste ist bei wahlfreiem Zugriff schneller als eine verkettete\nListe; eine verkettete Liste ist bei Anf\xfcge- und L\xf6schoperationen (insbesondere\nbei gro\xdfen Elementzahlen) schneller als eine feldbasierte Liste."})})]})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},97645:function(e,n,t){t.d(n,{Z:()=>s});var r=t("85893");t("67294");var a=t("67026");function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",s),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>g});var r=t("85893"),a=t("67294"),s=t("67026"),i=t("34718"),l=t("16550"),o=t("8714"),u=t("89207"),c=t("69413"),d=t("54510");function m(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var h=t("6735");function f(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=o[u.indexOf(n)].value;t!==a&&(c(n),l(t))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{u.push(e)},onKeyDown:m,onClick:d,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function v(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??m(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,h]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[f,v]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(s),(0,a.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[b,g]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,s]=(0,d.Nk)(t);return[r,(0,a.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),j=(()=>{let e=f??b;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{j&&h(j)},[j]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);h(e),v(e),g(e)},[v,g,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(f,{...n,...e}),(0,r.jsx)(v,{...n,...e})]})}function g(e){let n=(0,h.Z)();return(0,r.jsx)(b,{...e,children:m(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(67294);let a={},s=r.createContext(a);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);