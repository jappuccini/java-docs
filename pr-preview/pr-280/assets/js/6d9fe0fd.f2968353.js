"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8678"],{64899:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>u,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"exercises/polymorphy/polymorphy03","title":"Polymorphism03","description":"","source":"@site/docs/exercises/polymorphy/polymorphy03.mdx","sourceDirName":"exercises/polymorphy","slug":"/exercises/polymorphy/polymorphy03","permalink":"/java-docs/pr-preview/pr-280/exercises/polymorphy/polymorphy03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy03.mdx","tags":[],"version":"current","frontMatter":{"title":"Polymorphism03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Polymorphism02","permalink":"/java-docs/pr-preview/pr-280/exercises/polymorphy/polymorphy02"},"next":{"title":"Polymorphism04","permalink":"/java-docs/pr-preview/pr-280/exercises/polymorphy/polymorphy04"}}'),i=r("85893"),a=r("50065"),l=r("17490");let s={title:"Polymorphism03",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Rental</em>",id:"hinweis-zur-klasse-rental",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Passe die Klasse ",(0,i.jsx)(n.code,{children:"Rental"})," aus \xdcbungsaufgabe ",(0,i.jsx)(n.a,{href:"polymorphy02",children:"Polymorphism02"}),"\nanhand des abgebildeten Klassendiagramms an"]}),"\n",(0,i.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,i.jsx)(n.a,{href:"polymorphy02",children:"Polymorphism02"}),"\nso an, dass sich alle Lastwagen der Fahrzeugvermietung in Autobots verwandeln"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Engine --o Vehicle\n    Rental o-- Vehicle\n\n    class Vehicle {\n        -make: String #123;final#125;\n        -model: String #123;final#125;\n        -engine: Engine #123;final#125;\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void\n        +brake(valueInKmh: int) void\n        +toString() String\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String #123;final#125;\n        Engine(description: String) String\n        +getDescription() String\n    }\n\n    class Car {\n        -seats: int #123;final#125;\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        -cargo: int #123;final#125;\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String #123;final#125;\n        -vehicles: ArrayList~Vehicle~ #123;final#125;\n        +Rental(name: String)\n        +getName() String\n        +getVehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +transformAllTrucks() void\n        +toString() String\n    }"}),"\n",(0,i.jsxs)(n.h2,{id:"hinweis-zur-klasse-rental",children:["Hinweis zur Klasse ",(0,i.jsx)(n.em,{children:"Rental"})]}),"\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void transformAllTrucks()"})," soll alle Lastwagen in Autobots\nverwandeln."]}),"\n",(0,i.jsx)(l.Z,{pullRequest:"43",branchSuffix:"polymorphy/03"})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>a});var t=r("85893");r("67294");var i=r("67026");function a(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",a),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>b});var t=r("85893"),i=r("67294"),a=r("67026"),l=r("34718"),s=r("16550"),o=r("8714"),u=r("89207"),c=r("69413"),d=r("54510");function p(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function g(e){let{className:n,block:r,selectedValue:i,selectValue:s,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==i&&(c(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function f(e){let{lazy:n,children:r,selectedValue:l}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[g,f]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(a),(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[v,b]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,a]=(0,d.Nk)(r);return[t,(0,i.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:t}),x=(()=>{let e=g??v;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{x&&m(x)},[x]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),b(e)},[f,b,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(f,{...n,...e})]})}function b(e){let n=(0,m.Z)();return(0,t.jsx)(v,{...e,children:p(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(85893);r(67294);var i=r(58168),a=r(97645),l=r(53367),s=r(31705);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(s.Z,{language:"console",children:`git switch exercises/${r}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(s.Z,{language:"console",children:`git switch solutions/${r}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);