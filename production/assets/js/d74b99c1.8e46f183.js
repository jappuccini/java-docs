"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6019"],{6063:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>u,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"exercises/polymorphy/polymorphy02","title":"Polymorphism02","description":"","source":"@site/docs/exercises/polymorphy/polymorphy02.mdx","sourceDirName":"exercises/polymorphy","slug":"/exercises/polymorphy/polymorphy02","permalink":"/java-docs/production/exercises/polymorphy/polymorphy02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy02.mdx","tags":[],"version":"current","frontMatter":{"title":"Polymorphism02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Polymorphism01","permalink":"/java-docs/production/exercises/polymorphy/polymorphy01"},"next":{"title":"Polymorphism03","permalink":"/java-docs/production/exercises/polymorphy/polymorphy03"}}'),t=r("85893"),l=r("50065"),a=r("17490");let s={title:"Polymorphism02",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Rental</em>",id:"hinweise-zur-klasse-rental",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Erstelle die Klasse ",(0,t.jsx)(n.code,{children:"Rental"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,t.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,t.jsx)(n.a,{href:"polymorphy01",children:"Polymorphism01"}),"\nso an, dass alle erzeugten Autos und Lastwagen in einer Fahrzeugvermietung\nabgelegt und alle Attribute der Fahrzeugvermietung ausgegeben werden"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Engine --o Vehicle\n    Rental o-- Vehicle\n\n    class Vehicle {\n        -make: String #123;final#125;\n        -model: String #123;final#125;\n        -engine: Engine #123;final#125;\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void\n        +brake(valueInKmh: int) void\n        +toString() String\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String #123;final#125;\n        Engine(description: String)\n        +getDescription() String\n    }\n\n    class Car {\n        -seats: int #123;final#125;\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        -cargo: int #123;final#125;\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String #123;final#125;\n        -vehicles: ArrayList~Vehicle~ #123;final#125;\n        +Rental(name: String)\n        +getName() String\n        +getVehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +toString() String\n    }"}),"\n",(0,t.jsxs)(n.h2,{id:"hinweise-zur-klasse-rental",children:["Hinweise zur Klasse ",(0,t.jsx)(n.em,{children:"Rental"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void addVehicle(vehicle: Vehicle)"})," soll der Fahrzeugvermietung\nein Fahrzeug hinzuf\xfcgen"]}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void addAllVehicles(vehicles: Vehicle...)"})," soll der\nFahrzeugvermietung mehrere Fahrzeug hinzuf\xfcgen"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Fahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n"})}),"\n",(0,t.jsx)(a.Z,{pullRequest:"87",branchSuffix:"polymorphy/02"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>l});var i=r("85893");r("67294");var t=r("67026");function l(e){let{children:n,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",l),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>b});var i=r("85893"),t=r("67294"),l=r("67026"),a=r("34718"),s=r("16550"),o=r("8714"),u=r("89207"),c=r("69413"),d=r("54510");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function g(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==t&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:a}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...a,className:(0,l.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":t===n}),children:r??n},n)})})}function f(e){let{lazy:n,children:r,selectedValue:a}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===a);return e?(0,t.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:i}=e,l=function(e){let{values:n,children:r}=e;return(0,t.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,m]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=r.find(e=>e.default)??r[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:l})),[g,f]=function(e){let{queryString:n=!1,groupId:r}=e,i=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,t.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})},[l,i])]}({queryString:r,groupId:i}),[v,b]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[i,l]=(0,d.Nk)(r);return[i,(0,t.useCallback)(e=>{r&&l.set(e)},[r,l])]}({groupId:i}),x=(()=>{let e=g??v;return p({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{x&&m(x)},[x]),{selectedValue:a,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),b(e)},[f,b,l]),tabValues:l}}(e);return(0,i.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(g,{...n,...e}),(0,i.jsx)(f,{...n,...e})]})}function b(e){let n=(0,m.Z)();return(0,i.jsx)(v,{...e,children:h(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return o}});var i=r(85893);r(67294);var t=r(58168),l=r(97645),a=r(53367),s=r(31705);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,i.jsxs)(t.Z,{children:[(0,i.jsxs)(l.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(s.Z,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(l.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(s.Z,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(l.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);