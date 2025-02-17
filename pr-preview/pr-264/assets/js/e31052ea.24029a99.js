"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9436"],{64379:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>u,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"documentation/references-and-objects","title":"Referenzen und Objekte","description":"","source":"@site/docs/documentation/references-and-objects.mdx","sourceDirName":"documentation","slug":"/documentation/references-and-objects","permalink":"/java-docs/pr-preview/pr-264/documentation/references-and-objects","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/references-and-objects.mdx","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-264/tags/oo"}],"version":"current","sidebarPosition":132,"frontMatter":{"title":"Referenzen und Objekte","description":"","sidebar_position":132,"tags":["oo"]},"sidebar":"documentationSidebar","previous":{"title":"Klassen","permalink":"/java-docs/pr-preview/pr-264/documentation/classes"},"next":{"title":"Die Java API","permalink":"/java-docs/pr-preview/pr-264/documentation/java-api"}}'),a=r("85893"),i=r("50065");r("58168"),r("97645");let s={title:"Referenzen und Objekte",description:"",sidebar_position:132,tags:["oo"]},o=void 0,u={},l=[{value:"Erzeugen von Objekten",id:"erzeugen-von-objekten",level:2},{value:"Zugriff auf Attribute und Aufruf von Methoden",id:"zugriff-auf-attribute-und-aufruf-von-methoden",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Technisch gesehen handelt es sich bei einer Klasse um einen komplexen Datentyp.\nAnalog zu den primitiven Datentypen k\xf6nnen auch f\xfcr Klassen Variablen \u2013\nsogenannte ",(0,a.jsx)(n.em,{children:"Referenzvariablen"})," \u2013 definiert werden."]}),"\n",(0,a.jsxs)(n.p,{children:['Im Gegensatz zu "normalen" Variablen werden bei Referenzvariablen nicht die\neigentlichen Werte in den Variablen gespeichert, sondern die Speicheradressen\nder erzeugten Objekte. Die Selbstreferenz ',(0,a.jsx)(n.code,{children:"this"})," verweist innerhalb einer Klasse\nauf das eigene Objekt."]}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n   subgraph Progamm\n   computer(Bezeichner: computer\n            Datentyp: Computer\n            Wert: 13FEE20C)\n   cpu(Bezeichner: cpu\n       Datentyp: Cpu\n       Wert: 88D45A01)\n   end\n   subgraph Hauptspeicher\n   o1(Klasse: Computer\n      hashCode: 13FEE20C\n      description: Mein Office PC\n      cpu: 88D45A01\n      memoryInGb: 32)\n   o2(Klasse: Cpu\n      hashCode: 88D45A01\n      powerInGhz: 3.5\n      numberOfCores: 8)\n   end\n   computer --\x3e o1\n   cpu --\x3e o2\n   o1 --\x3e o2"}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,a.jsxs)(n.p,{children:["Der Standarwert von Referenzvariablen ist ",(0,a.jsx)(n.code,{children:"null"})," (auch Nullreferenz genannt)."]})}),"\n",(0,a.jsx)(n.h2,{id:"erzeugen-von-objekten",children:"Erzeugen von Objekten"}),"\n",(0,a.jsxs)(n.p,{children:["Beim Erzeugen eines Objekts mit Hilfe des Operators ",(0,a.jsx)(n.code,{children:"new"})," wird der bei der\nDeklaration reservierte Speicherplatz durch das Objekt belegt."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      Cpu cpu = new Cpu(3.5, 8);\n      Computer computer = new Computer("Mein Office PC");\n   }\n\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,a.jsxs)(n.p,{children:["Nach dem new-Operator muss immer ein\n",(0,a.jsx)(n.a,{href:"classes#definition-von-konstruktoren",children:"Konstruktor"})," der Klasse stehen."]})}),"\n",(0,a.jsx)(n.h2,{id:"zugriff-auf-attribute-und-aufruf-von-methoden",children:"Zugriff auf Attribute und Aufruf von Methoden"}),"\n",(0,a.jsx)(n.p,{children:"Erlauben die Zugriffsrechte den Zugriff auf ein Attribut bzw. den Aufruf einer\nMethode, kann \xfcber die deklarierte Referenzvariable und einem nachgestellten\nPunkt auf das Attribut zugegriffen bzw. die Methode aufgerufen werden. Der\nZugriff auf statische Attribute bzw. der Aufruf statischer Methoden erfolgt \xfcber\nden Klassennamen sowie einem nachgestellten Punkt."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      Cpu cpu = new Cpu(3.5, 8);\n      Computer computer = new Computer("Mein Office PC");\n      computer.setCpu(cpu);\n      computer.setMemoryInGb(32);\n     System.out.println(Computer.getNumberOfComputers());\n   }\n\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,a.jsxs)(n.p,{children:["Beim Aufruf einer Methode m\xfcssen alle Parameter in der richtigen Reihenfolge\nversorgt werden. Parameter, die diesem Prinzip folgen, bezeichnet man als\n",(0,a.jsx)(n.em,{children:"Positionsparameter"})]})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},97645:function(e,n,r){r.d(n,{Z:()=>i});var t=r("85893");r("67294");var a=r("67026");function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",i),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>g});var t=r("85893"),a=r("67294"),i=r("67026"),s=r("34718"),o=r("16550"),u=r("8714"),l=r("89207"),c=r("69413"),d=r("54510");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function h(e){let{className:n,block:r,selectedValue:a,selectValue:o,tabValues:u}=e,l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let n=e.currentTarget,r=u[l.indexOf(n)].value;r!==a&&(c(n),o(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{let r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:u.map(e=>{let{value:n,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:p,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function b(e){let{lazy:n,children:r,selectedValue:s}=e,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,i=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[s,m]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:i})),[h,b]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})},[i,t])]}({queryString:r,groupId:t}),[v,g]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,i]=(0,d.Nk)(r);return[t,(0,a.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:t}),j=(()=>{let e=h??v;return f({value:e,tabValues:i})?e:null})();return(0,u.Z)(()=>{j&&m(j)},[j]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!f({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),b(e),g(e)},[b,g,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(h,{...n,...e}),(0,t.jsx)(b,{...n,...e})]})}function g(e){let n=(0,m.Z)();return(0,t.jsx)(v,{...e,children:p(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return s}});var t=r(67294);let a={},i=t.createContext(a);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);