"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7039"],{67915:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>u,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"exercises/polymorphy/polymorphy01","title":"Polymorphism01","description":"","source":"@site/docs/exercises/polymorphy/polymorphy01.mdx","sourceDirName":"exercises/polymorphy","slug":"/exercises/polymorphy/polymorphy01","permalink":"/java-docs/pr-preview/pr-275/exercises/polymorphy/polymorphy01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy01.mdx","tags":[],"version":"current","frontMatter":{"title":"Polymorphism01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Polymorphie","permalink":"/java-docs/pr-preview/pr-275/exercises/polymorphy/"},"next":{"title":"Polymorphism02","permalink":"/java-docs/pr-preview/pr-275/exercises/polymorphy/polymorphy02"}}'),s=r("85893"),t=r("50065"),l=r("17490");let a={title:"Polymorphism01",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Car</em>",id:"hinweise-zur-klasse-car",level:2},{value:"Hinweise zur Klasse <em>Truck</em>",id:"hinweise-zur-klasse-truck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Passe die Klasse ",(0,s.jsx)(n.code,{children:"Vehicle"})," aus \xdcbungsaufgabe\n",(0,s.jsx)(n.a,{href:"../enumerations/enumerations01",children:"Enumerations01"})," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klassen ",(0,s.jsx)(n.code,{children:"Car"})," und ",(0,s.jsx)(n.code,{children:"Truck"})]}),"\n",(0,s.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,s.jsx)(n.a,{href:"../enumerations/enumerations01",children:"Enumerations01"})," so an, dass keine Fahrzeuge,\nsondern Autos und Lastwagen erzeugt und ausgegeben werden"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Engine --o Vehicle\n\n    class Vehicle {\n        -make: String #123;final#125;\n        -model: String #123;final#125;\n        -engine: Engine #123;final#125;\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void\n        +brake(valueInKmh: int) void\n        +toString() String\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String #123;final#125;\n        Engine(description: String)\n        +getDescription() String\n    }\n\n    class Car {\n        -seats: int #123;final#125;\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        -cargo: int #123;final#125;\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-car",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Car"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void doATurboBoost()"})," soll die Geschwindigkeit verdoppeln und die\nGeschwindigkeit in der Konsole ausgeben."]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"String toString()"})," soll alle Attribute von Car ausgeben:\n",(0,s.jsx)(n.code,{children:"Opel Zafira Life (Diesel, 7 Sitzpl\xe4tze)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-truck",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Truck"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void transform()"})," soll das Attribut isTransformed invertieren und\nden aktuellen Status in der Konsole ausgeben."]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"String toString()"})," soll alle Attribute von Truck ausgeben:\n",(0,s.jsx)(n.code,{children:"MAN TGX (Diesel, 20t)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Anzahl Fahrzeuge: 0\nAnzahl Fahrzeuge: 3\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\nPorsche 911 beschleunigt auf 50 km/h\nMAN TGX verwandelt sich in einen Autobot\nPorsche 911 macht einen TurboBoost und beschleunigt auf 100 km/h\nMAN TGX verwandelt sich in einen Lastwagen zur\xfcck\n"})}),"\n",(0,s.jsx)(l.Z,{pullRequest:"86",branchSuffix:"polymorphy/01"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>t});var i=r("85893");r("67294");var s=r("67026");function t(e){let{children:n,hidden:r,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",t),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>x});var i=r("85893"),s=r("67294"),t=r("67026"),l=r("34718"),a=r("16550"),o=r("8714"),u=r("89207"),c=r("69413"),d=r("54510");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function g(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==s&&(c(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...l,className:(0,t.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":s===n}),children:r??n},n)})})}function f(e){let{lazy:n,children:r,selectedValue:l}=e,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:i}=e,t=function(e){let{values:n,children:r}=e;return(0,s.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:i,default:s}}=e;return{value:n,label:r,attributes:i,default:s}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=r.find(e=>e.default)??r[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:t})),[g,f]=function(e){let{queryString:n=!1,groupId:r}=e,i=(0,a.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(t),(0,s.useCallback)(e=>{if(!t)return;let n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})},[t,i])]}({queryString:r,groupId:i}),[b,x]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[i,t]=(0,d.Nk)(r);return[i,(0,s.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:i}),v=(()=>{let e=g??b;return p({value:e,tabValues:t})?e:null})();return(0,o.Z)(()=>{v&&m(v)},[v]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),x(e)},[f,x,t]),tabValues:t}}(e);return(0,i.jsxs)("div",{className:(0,t.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(g,{...n,...e}),(0,i.jsx)(f,{...n,...e})]})}function x(e){let n=(0,m.Z)();return(0,i.jsx)(b,{...e,children:h(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return o}});var i=r(85893);r(67294);var s=r(58168),t=r(97645),l=r(53367),a=r(31705);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(a.Z,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(a.Z,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);