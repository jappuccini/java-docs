"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8740"],{2619:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>u});var t=JSON.parse('{"id":"documentation/class-diagrams","title":"Klassendiagramme","description":"","source":"@site/docs/documentation/class-diagrams.mdx","sourceDirName":"documentation","slug":"/documentation/class-diagrams","permalink":"/java-docs/pr-preview/pr-288/documentation/class-diagrams","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/class-diagrams.mdx","tags":[{"inline":true,"label":"uml","permalink":"/java-docs/pr-preview/pr-288/tags/uml"},{"inline":true,"label":"class-diagrams","permalink":"/java-docs/pr-preview/pr-288/tags/class-diagrams"}],"version":"current","sidebarPosition":155,"frontMatter":{"title":"Klassendiagramme","description":"","sidebar_position":155,"tags":["uml","class-diagrams"]},"sidebar":"documentationSidebar","previous":{"title":"Aufz\xe4hlungen (Enumerations)","permalink":"/java-docs/pr-preview/pr-288/documentation/enumerations"},"next":{"title":"Aktivit\xe4tsdiagramme","permalink":"/java-docs/pr-preview/pr-288/documentation/activity-diagrams"}}'),i=r("85893"),s=r("50065"),a=r("58168"),l=r("97645");let d={title:"Klassendiagramme",description:"",sidebar_position:155,tags:["uml","class-diagrams"]},u=void 0,o={},c=[{value:"Darstellung von Klassen",id:"darstellung-von-klassen",level:2},{value:"Darstellung spezieller Klassen",id:"darstellung-spezieller-klassen",level:2},{value:"Darstellung von Assoziationen",id:"darstellung-von-assoziationen",level:2},{value:"Darstellung von Vererbungs-und Realisierungs-Beziehungen",id:"darstellung-von-vererbungs-und-realisierungs-beziehungen",level:2},{value:"Darstellung von Multiplizit\xe4ten",id:"darstellung-von-multiplizit\xe4ten",level:2}];function h(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Klassendiagramme sind ein Diagrammtyp der UML und geh\xf6ren dort zum Bereich der\nStrukturdiagramme. Das Klassendiagramm dient zur leicht lesbaren Dokumentation\ndes Aufbaus von Klassen und deren Beziehungen (Relationen). Klassendiagramme\nk\xf6nnen Informationen zu den Attributen, den Methoden und weiteren\nKlassen-Bestandteilen enthalten."}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"UML"})," (Unified Modeling Language) ist eine grafische Modellierungssprache zur\nDarstellung von Software-Systemen. Sie wurde in den 1990er-Jahren entwickelt und\nist im ISO/IEC 19505 festgelegt. Die Sprache definiert mehrere Diagramme, die\nsich in zwei Hauptgruppen aufteilen lassen: Struktur- und Verhaltensdiagramme."]})}),"\n",(0,i.jsx)(n.h2,{id:"darstellung-von-klassen",children:"Darstellung von Klassen"}),"\n",(0,i.jsx)(n.p,{children:"Klassen werden im Klassendiagramm als Rechteck mit verschiedenen Bereichen\n(Klassenname, Attribute, Methoden und weitere Klassen-Bestandteile) dargestellt:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Der Klassenname wird zentriert, fett gedruckt und mit einem Gro\xdfbuchstaben\nbeginnend dargestellt"}),"\n",(0,i.jsxs)(n.li,{children:["Attribute werden nach dem Muster ",(0,i.jsx)(n.em,{children:"[Sichtbarkeit]"})," ",(0,i.jsx)(n.em,{children:"Attributname: Datentyp [=\nStandardwert] [{Eigenschaft}]"})," dargestellt"]}),"\n",(0,i.jsxs)(n.li,{children:["Methoden nach dem Muster ",(0,i.jsx)(n.em,{children:"[Sichtbarkeit]"})," ",(0,i.jsx)(n.em,{children:"Methoden-Signatur: Datentyp des\nR\xfcckgabewertes [{Eigenschaft}]"})," dargestellt"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Sichtbarkeit von Attributen und Methoden wird durch (farbige) Symbole\ndargestellt:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Sichtbarkeit ",(0,i.jsx)(n.code,{children:"public"})," wird durch das Symbol ",(0,i.jsx)(n.em,{children:"+"})," bzw. die Farbe ",(0,i.jsx)(n.em,{children:"gr\xfcn"}),"\ndargestellt"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Sichtbarkeit ",(0,i.jsx)(n.code,{children:"protected"})," wird durch das Symbol ",(0,i.jsx)(n.em,{children:"#"})," bzw. die Farbe ",(0,i.jsx)(n.em,{children:"gelb"}),"\ndargestellt"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Sichtbarkeit ",(0,i.jsx)(n.code,{children:"packaged"})," wird durch das Symbol ",(0,i.jsx)(n.em,{children:"~"})," bzw. die Farbe ",(0,i.jsx)(n.em,{children:"blau"}),"\ndargestellt"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Sichtbarkeit ",(0,i.jsx)(n.code,{children:"private"})," wird durch das Symbol ",(0,i.jsx)(n.em,{children:"-"})," bzw. die Farbe ",(0,i.jsx)(n.em,{children:"rot"}),"\ndargestellt"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Statische Attribute und Methoden werden durch Unterstriche kenntlich gemacht"}),"\n",(0,i.jsxs)(n.li,{children:["Finale Attribute und Methoden werden durch die Eigenschaft ",(0,i.jsx)(n.em,{children:"final"})," kenntlich\ngemacht"]}),"\n",(0,i.jsxs)(n.li,{children:["Abstrakte Methoden werden entweder kursiv dargestellt oder durch die\nEigenschaft ",(0,i.jsx)(n.em,{children:"abstract"})," kenntlich gemacht"]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n   class Person {\n      -name: String #123;final#125;\n      -age: int #123;final#125;\n      -gender: char #123;final#125;\n      -numberOfPersons: int$\n      +Person(name: String, age: int, gender: char)\n      +name() String\n      +age() int\n      +gender() char\n      +getNumberOfPersons()$ int\n   }"}),"\n",(0,i.jsx)(n.h2,{id:"darstellung-spezieller-klassen",children:"Darstellung spezieller Klassen"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(l.Z,{value:"a",label:"Aufz\xe4hlungen",default:!0,children:[(0,i.jsxs)(n.p,{children:["Aufz\xe4hlungen werden im Klassendiagramm durch den Stereotypen ",(0,i.jsx)(n.code,{children:"enumeration"}),"\nkenntlich gemacht. Die Aufz\xe4hlungskonstanten werden in einem zus\xe4tzlichen\nBereich aufgef\xfchrt. Der Stereotyp impliziert, dass die Aufz\xe4hlung einen privaten\nKonstruktor sowie ggbfs. passende Setter und Getter besitzt."]}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   class WeekDay {\n      <<enumeration>>\n      MONDAY = Monday\n      TUESDAY = Tuesday\n      WEDNESDAY = Wednesday\n      THURSDAY = Thursday\n      FRIDAY = Friday\n      SATURDAY = Saturday\n     SUNDAY = Sunday\n      -description: String #123;final#125;\n   }"})]}),(0,i.jsxs)(l.Z,{value:"b",label:"Abstrakte und finale Klassen",children:[(0,i.jsxs)(n.p,{children:["Abstrakte und finale Klassen werden durch die Stereotypen ",(0,i.jsx)(n.code,{children:"abstract"})," bzw.\n",(0,i.jsx)(n.code,{children:"final"})," kenntlich gemacht."]}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   AbstractList~E~ <|-- MyIntegerList\n   class AbstractList~E~ {\n      <<abstract>>\n   }\n   class MyIntegerList {\n      <<final>>\n   }"})]}),(0,i.jsxs)(l.Z,{value:"c",label:"Schnittstellen",children:[(0,i.jsxs)(n.p,{children:["Schnittstellen werden im Klassendiagramm durch den Stereotypen ",(0,i.jsx)(n.code,{children:"interface"}),"\nkenntlich gemacht. Dieser impliziert, dass alle Methoden der Schnittstelle\nabstrakt sind."]}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   class Comparable~T~ {\n      <<interface>>\n      +compareTo(o: T) int\n   }"})]}),(0,i.jsxs)(l.Z,{value:"d",label:"Datenklassen",children:[(0,i.jsxs)(n.p,{children:["Datenklassen werden im Klassendiagramm durch den Stereotypen ",(0,i.jsx)(n.code,{children:"record"})," kenntlich\ngemacht. Dieser impliziert, dass die Datenklasse einen entsprechenden\nKonstruktor, Getter zu allen Attributen sowie entsprechende Implementierungen\nf\xfcr die Object-Methoden besitzt, dass s\xe4mtliche Attribute private und\nunver\xe4nderlich sind und dass die Klasse selbst unver\xe4nderlich ist."]}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   class Person {\n      <<record>>\n      name: String\n      age: int\n      gender: char\n   }"})]}),(0,i.jsxs)(l.Z,{value:"e",label:"Generische Klassen",children:[(0,i.jsx)(n.p,{children:"Die formalen Typparameter einer generischen Klassen werden in einem zus\xe4tzlichen\nRechteck dargestellt."}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   class Box~T~ {\n      -content: T\n      +setContent(content: T) void\n      +getContent() T\n   }"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"darstellung-von-assoziationen",children:"Darstellung von Assoziationen"}),"\n",(0,i.jsx)(n.p,{children:"Assoziationen stellen allgemeine Relationen zwischen zwei Klassen dar, bei der\neine Klasse eine andere Klasse verwendet. Assoziationen k\xf6nnen in eine Richtung\n(unidirektional) und in beide Richtungen (bidirektional) vorliegen."}),"\n",(0,i.jsx)(n.p,{children:"Aggregationen und Kompositionen stellen spezielle Formen von Assoziationen dar,\nbei denen ein Objekt der einen Klasse Teil einer anderen Klasse ist. Im\nGegensatz zu Aggregationen h\xe4ngen bei Kompositionen die Teile von der Existenz\ndes Ganzen ab. Aggregationen werden daher auch als ist-Teil-von-Relationen,\nKompositionen als existenzabh\xe4ngige ist-Teil-von-Relationen bezeichnet."}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(l.Z,{value:"a",label:"Assoziationen",default:!0,children:[(0,i.jsx)(n.p,{children:"Assoziationen werden mit einem offenen Pfeil hin zur verwendeten Klasse\ndargestellt."}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   Persons --\x3e Person\n   class Persons {\n      +getPersons() List~Person~\n   }"})]}),(0,i.jsxs)(l.Z,{value:"b",label:"Aggregationen",children:[(0,i.jsx)(n.p,{children:"Aggregationen werden mit einer nicht ausgef\xfcllten Raute hin zur besitzenden\nKlasse dargestellt."}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   Person --o Team\n   class Team {\n      +members: List~Person~\n   }"})]}),(0,i.jsxs)(l.Z,{value:"c",label:"Kompositionen",children:[(0,i.jsx)(n.p,{children:"Kompositionen werden mit einer ausgef\xfcllten Raute hin zur besitzenden Klasse\ndargestellt."}),(0,i.jsx)(n.mermaid,{value:"classDiagram\n   OrderItem --* Order\n   class Order {\n      +items: List~OrderItem~\n   }"})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Assoziationen k\xf6nnen gerichtet und ungerichtet dargestellt werden."})}),"\n",(0,i.jsx)(n.h2,{id:"darstellung-von-vererbungs-und-realisierungs-beziehungen",children:"Darstellung von Vererbungs-und Realisierungs-Beziehungen"}),"\n",(0,i.jsx)(n.p,{children:"Vererbungs-Beziehungen werden mit einem geschlossenen Pfeil hin zur Oberklasse\nsowie einer durchgezogenen Linie dargestellt, Realisierungs-Beziehungen mit\neinem geschlossenen Pfeil hin zur Schnittstelle sowie einer gestrichelten Linie."}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n   Person <|-- Student : extends\n   Person <|-- Lecturer : extends\n   Comparable~T~ <|.. Person : implements\n   Serializable <|.. Person : implements"}),"\n",(0,i.jsx)(n.h2,{id:"darstellung-von-multiplizit\xe4ten",children:"Darstellung von Multiplizit\xe4ten"}),"\n",(0,i.jsxs)(n.p,{children:["Die Multiplizit\xe4t einer Beziehung legt fest, mit wie vielen Objekten der\ngegen\xfcberliegenden Klasse ein Objekt in Beziehung stehen kann. Die Multiplizit\xe4t\nwird als Intervall aus nicht-negativen ganzen Zahlen dargestellt und wird in der\nForm ",(0,i.jsx)(n.em,{children:"[untere Schranke]..[obere Schranke]"})," angegeben. Besitzen beide Schranken\nden gleichen Wert, muss nur eine der beiden Schranken angegeben werden. Eine\nnach oben unbeschr\xe4nkte Schranke wird mit ",(0,i.jsx)(n.strong,{children:"*"})," angegeben."]}),"\n",(0,i.jsx)(n.mermaid,{value:'classDiagram\n   Student "0..*" -- "1..1" Course'})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,n,r){r.d(n,{Z:()=>s});var t=r("85893");r("67294");var i=r("67026");function s(e){let{children:n,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",s),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>f});var t=r("85893"),i=r("67294"),s=r("67026"),a=r("34718"),l=r("16550"),d=r("8714"),u=r("89207"),o=r("69413"),c=r("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var g=r("6735");function p(e){let{className:n,block:r,selectedValue:i,selectValue:l,tabValues:d}=e,u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),c=e=>{let n=e.currentTarget,r=d[u.indexOf(n)].value;r!==i&&(o(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:d.map(e=>{let{value:n,label:r,attributes:a}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:c,...a,className:(0,s.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function b(e){let{lazy:n,children:r,selectedValue:a}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,s=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,g]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:s})),[p,b]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(s),(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})},[s,t])]}({queryString:r,groupId:t}),[v,f]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,s]=(0,c.Nk)(r);return[t,(0,i.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:t}),x=(()=>{let e=p??v;return m({value:e,tabValues:s})?e:null})();return(0,d.Z)(()=>{x&&g(x)},[x]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);g(e),b(e),f(e)},[b,f,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(p,{...n,...e}),(0,t.jsx)(b,{...n,...e})]})}function f(e){let n=(0,g.Z)();return(0,t.jsx)(v,{...e,children:h(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(67294);let i={},s=t.createContext(i);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);