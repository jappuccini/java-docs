"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6415"],{93017:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>u,contentTitle:()=>c});var t=JSON.parse('{"id":"exercises/interfaces/interfaces01","title":"Interfaces01","description":"","source":"@site/docs/exercises/interfaces/interfaces01.mdx","sourceDirName":"exercises/interfaces","slug":"/exercises/interfaces/interfaces01","permalink":"/java-docs/pr-preview/pr-289/exercises/interfaces/interfaces01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/interfaces/interfaces01.mdx","tags":[],"version":"current","frontMatter":{"title":"Interfaces01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Schnittstellen (Interfaces)","permalink":"/java-docs/pr-preview/pr-289/exercises/interfaces/"},"next":{"title":"Komparatoren","permalink":"/java-docs/pr-preview/pr-289/exercises/comparators/"}}'),a=r("85893"),i=r("50065"),s=r("17490");let l={title:"Interfaces01",description:""},c=void 0,o={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>TravelAgency</em>",id:"hinweise-zur-klasse-travelagency",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Passe die Klasse ",(0,a.jsx)(n.code,{children:"Rental"})," aus \xdcbungsaufgabe\n",(0,a.jsx)(n.a,{href:"../abstract-and-final/abstract-and-final01",children:"AbstractAndFinal01"})," anhand des\nabgebildeten Klassendiagramms an und erstelle die Klasse ",(0,a.jsx)(n.code,{children:"TravelAgency"})," sowie\ndie Schnittstelle ",(0,a.jsx)(n.code,{children:"Partner"})]}),"\n",(0,a.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,a.jsx)(n.a,{href:"../abstract-and-final/abstract-and-final01",children:"AbstractAndFinal01"})," so an, dass\nein Reiseb\xfcro erzeugt wird, dass diesem die Autovermietung hinzugef\xfcgt wird\nund dass alle Attribute des Reiseb\xfcros ausgegeben werden"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Engine --o Vehicle\n    Rental o-- Vehicle\n    Partner <|.. Rental : implements\n    TravelAgency o-- Partner\n\n    class Vehicle {\n        <<abstract>>\n        -make: String\n        -model: String\n        -engine: Engine\n        #speedInKmh: double\n        -numberOfVehicles: int$\n\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void #123;final#125;\n        +brake(valueInKmh: int) void #123;final#125;\n        +toString() String #123;abstract#125;\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String #123;final#125;\n        +getDescription() String\n    }\n\n    class Car {\n        <<final>>\n        -seats: int #123;final#125;\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        <<final>>\n        -cargo: int #123;final#125;\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String #123;final#125;\n        -vehicles: ArrayList~Vehicle~ #123;final#125;\n        +Rental(name: String)\n        +getName() String\n        +getVehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +transformAllTrucks() void\n        +toString() String\n    }\n\n    class Partner {\n        <<interface>>\n        +toString() String\n    }\n\n    class TravelAgency {\n        -name: String #123;final#125;\n        -partners: ArrayList~Partner~\n        +TravelAgency(name: String)\n        +addPartner(partner: Partner) void\n        +toString() String\n    }"}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-travelagency",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"TravelAgency"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void addPartner(partner: Partner)"})," soll dem Reiseb\xfcro einen\nPartner hinzuf\xfcgen"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Reiseb\xfcro Schmidt\nUnsere Partner:\nFahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n"})}),"\n",(0,a.jsx)(s.Z,{pullRequest:"46",branchSuffix:"interfaces/01"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>i});var t=r("85893");r("67294");var a=r("67026");function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",i),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>b});var t=r("85893"),a=r("67294"),i=r("67026"),s=r("34718"),l=r("16550"),c=r("8714"),o=r("89207"),u=r("69413"),d=r("54510");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var f=r("6735");function m(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{let n=e.currentTarget,r=c[o.indexOf(n)].value;r!==a&&(u(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:c.map(e=>{let{value:n,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function p(e){let{lazy:n,children:r,selectedValue:s}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,i=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[s,f]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:i})),[m,p]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(i),(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})},[i,t])]}({queryString:r,groupId:t}),[v,b]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,i]=(0,d.Nk)(r);return[t,(0,a.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:t}),x=(()=>{let e=m??v;return g({value:e,tabValues:i})?e:null})();return(0,c.Z)(()=>{x&&f(x)},[x]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!g({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),p(e),b(e)},[p,b,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(m,{...n,...e}),(0,t.jsx)(p,{...n,...e})]})}function b(e){let n=(0,f.Z)();return(0,t.jsx)(v,{...e,children:h(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(85893);r(67294);var a=r(58168),i=r(97645),s=r(53367),l=r(31705);function c(e){let{pullRequest:n,branchSuffix:r}=e;return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);