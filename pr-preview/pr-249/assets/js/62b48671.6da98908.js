"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8682"],{37583:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>u});var i=JSON.parse('{"id":"documentation/class-structure","title":"Aufbau einer Java-Klasse","description":"","source":"@site/docs/documentation/class-structure.mdx","sourceDirName":"documentation","slug":"/documentation/class-structure","permalink":"/java-docs/pr-preview/pr-249/documentation/class-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/class-structure.mdx","tags":[{"inline":true,"label":"class-structure","permalink":"/java-docs/pr-preview/pr-249/tags/class-structure"}],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Aufbau einer Java-Klasse","description":"","sidebar_position":20,"tags":["class-structure"]},"sidebar":"documentationSidebar","previous":{"title":"Softwaredesign","permalink":"/java-docs/pr-preview/pr-249/documentation/design"},"next":{"title":"Datentypen","permalink":"/java-docs/pr-preview/pr-249/documentation/data-types"}}'),a=t("85893"),r=t("50065"),s=t("58168"),l=t("97645");let o={title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20,tags:["class-structure"]},u=void 0,c={},d=[{value:"Statische Methoden",id:"statische-methoden",level:2},{value:"Die main-Methode",id:"die-main-methode",level:2},{value:"Kommentare und Dokumentation",id:"kommentare-und-dokumentation",level:2},{value:"Entwicklungspakete",id:"entwicklungspakete",level:2}];function m(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Klassen stellen den grundlegenden Rahmen f\xfcr Programme dar. Jede Klasse kann\nDaten (",(0,a.jsx)(n.em,{children:"Attribute"}),") und Routinen (",(0,a.jsx)(n.em,{children:"Methoden"}),") besitzen. Routinen bestehen dabei\naus Folgen von verzweigten und sich wiederholenden Anweisungen, wobei\nAnweisungen wohldefinierte Befehle darstellen, die der Interpreter zur Laufzeit\nausf\xfchrt. Anweisungen m\xfcssen in Java mit dem Semikolon abgeschlossen werden und\nk\xf6nnen zu Anweisungsbl\xf6cken zusammengefasst werden, die durch geschweifte\nKlammern umschlossen werden. Innerhalb eines Anweisungsblocks k\xf6nnen sich\nweitere Anweisungsbl\xf6cke befinden."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"Klasse",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'// highlight-start\npublic class MainClass {\n\n   public static void main(String[] args) {\n      System.out.println("Winter is Coming");\n   }\n\n}\n// highlight-end\n'})})}),(0,a.jsx)(l.Z,{value:"b",label:"Methode",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   // highlight-start\n   public static void main(String[] args) {\n      System.out.println("Winter is Coming");\n   }\n   // highlight-end\n\n}\n'})})}),(0,a.jsx)(l.Z,{value:"c",label:"Anweisung",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n   // highlight-start\n      System.out.println("Winter is Coming");\n   // highlight-end\n   }\n\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"statische-methoden",children:"Statische Methoden"}),"\n",(0,a.jsxs)(n.p,{children:["Statische Methoden sind abgeschlossene Programmteile, die Parameter enthalten\nund einen Wert zur\xfcckgeben k\xf6nnen. Sie m\xfcssen mit dem Schl\xfcsselwort ",(0,a.jsx)(n.code,{children:"static"}),"\ngekennzeichnet werden. Bei statischen Methoden, die einen Wert zur\xfcckgeben, muss\nder Datentyp des R\xfcckgabewertes angegeben werden; bei statische Methoden, die\nkeinen Wert zur\xfcckgeben, das Schl\xfcsselwort ",(0,a.jsx)(n.code,{children:"void"}),". Der Aufruf einer statischen\nMethode erfolgt \xfcber den Klassennamen gefolgt von einem Punkt."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      MainClass.printStarkMotto();\n      MainClass.printText("Winter is Coming");\n   }\n\n   public static void printStarkMotto() {\n      System.out.println("Winter is Coming");\n   }\n\n   public static void printText(String text) {\n      System.out.println(text);\n   }\n\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsxs)(n.p,{children:["Die statischen Methoden einer Startklasse werden auch als ",(0,a.jsx)(n.em,{children:"Unterprogramme"}),"\nbezeichnet."]})}),"\n",(0,a.jsx)(n.h2,{id:"die-main-methode",children:"Die main-Methode"}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void main(args: String[])"})," ist eine spezielle Methode in Java und\nstellt Startpunkt sowie Endpunkt einer Anwendung bzw. eines Programms dar. Nur\nKlassen mit einer main-Methode k\xf6nnen von der Laufzeitumgebung ausgef\xfchrt\nwerden. Aus diesem Grund werden Klassen mit einer main-Methode auch als\n",(0,a.jsx)(n.em,{children:"ausf\xfchrbare Klassen"})," oder als ",(0,a.jsx)(n.em,{children:"Startklassen"})," bezeichnet."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      System.out.println("Winter is Coming");\n   }\n\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"kommentare-und-dokumentation",children:"Kommentare und Dokumentation"}),"\n",(0,a.jsxs)(n.p,{children:["Kommentare sollen die Lesbarkeit und Verwendbarkeit des Programms verbessern.\nSie bewirken bei der Ausf\xfchrung keine Aktion und werden vom Java-Compiler\nignoriert. Man unterscheidet dabei zwischen Quellcode-Kommentaren, die einzelne\nAnweisungen oder Anweisungsbl\xf6cke erkl\xe4ren und Dokumentationskommentaren, die\nBeschreiben, wie eine Methode oder einer Klasse verwendet wird (siehe\n",(0,a.jsx)(n.a,{href:"/java-docs/pr-preview/pr-249/documentation/java-api#die-javadoc",children:"Javadoc"}),"). In Java werden einzeilige Kommentare mit\n",(0,a.jsx)(n.code,{children:"//"}),", Kommentarbl\xf6cke mit ",(0,a.jsx)(n.code,{children:"/* */"})," und Dokumentationskommentare mit ",(0,a.jsx)(n.code,{children:"/** */"}),"\nerstellt."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'/**\n * Beschreibung der Klasse\n *\n * @author Autor der Klasse\n * @version Version\n *\n */\npublic class MainClass {\n\n   /**\n    * Beschreibung der Methode\n    *\n    * @param args Beschreibung der Parameter\n    */\n   public static void main(String[] args) {\n      /* Kommentarblock */\n      System.out.println("Winter is Coming"); // Kommentar\n   }\n\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsx)(n.p,{children:"Guter Quellcode sollte immer selbsterkl\xe4rend sein. Das hei\xdft, dass auf den\nEinsatz von Quellcode-Kommentaren i.d.R. verzichtet werden sollte."})}),"\n",(0,a.jsx)(n.h2,{id:"entwicklungspakete",children:"Entwicklungspakete"}),"\n",(0,a.jsxs)(n.p,{children:["Entwicklungspakete erm\xf6glichen das hierarchische Strukturieren von Klassen. Um\ndie Klassen eines Entwicklungspaketes verwenden zu k\xf6nnen, m\xfcssen die jeweiligen\nKlassen explizit mit Hilfe des Schl\xfcsselworts ",(0,a.jsx)(n.code,{children:"import"})," importiert werden."]}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart\n    java(java) --\x3e lang(lang)\n    java --\x3e util(util)\n    java --\x3e time(time)\n    lang --\x3e object[Object]\n    lang --\x3e system[System]\n    util --\x3e arraylist[ArrayList]\n    util --\x3e scanner[Scanner]\n    time --\x3e localdate(LocalDate)\n    time --\x3e localtime(LocalTime)"}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsxs)(n.p,{children:["Die Klassen des Entwicklungspaketes ",(0,a.jsx)(n.code,{children:"java.lang"})," m\xfcssen nicht importiert werden."]})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},97645:function(e,n,t){t.d(n,{Z:()=>r});var i=t("85893");t("67294");var a=t("67026");function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",r),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>f});var i=t("85893"),a=t("67294"),r=t("67026"),s=t("34718"),l=t("16550"),o=t("8714"),u=t("89207"),c=t("69413"),d=t("54510");function m(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("6735");function g(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let n=e.currentTarget,t=o[u.indexOf(n)].value;t!==a&&(c(n),l(t))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{u.push(e)},onKeyDown:m,onClick:d,...s,className:(0,r.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function v(e){let{lazy:n,children:t,selectedValue:s}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:i}=e,r=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??m(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[s,p]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:r})),[g,v]=function(e){let{queryString:n=!1,groupId:t}=e,i=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(r),(0,a.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})},[r,i])]}({queryString:t,groupId:i}),[b,f]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[i,r]=(0,d.Nk)(t);return[i,(0,a.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:i}),j=(()=>{let e=g??b;return h({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{j&&p(j)},[j]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);p(e),v(e),f(e)},[v,f,r]),tabValues:r}}(e);return(0,i.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(g,{...n,...e}),(0,i.jsx)(v,{...n,...e})]})}function f(e){let n=(0,p.Z)();return(0,i.jsx)(b,{...e,children:m(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(67294);let a={},r=i.createContext(a);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);