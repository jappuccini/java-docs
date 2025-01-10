"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7037"],{88370:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>u,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"exercises/lambdas/lambdas02","title":"Lambdas02","description":"","source":"@site/docs/exercises/lambdas/lambdas02.mdx","sourceDirName":"exercises/lambdas","slug":"/exercises/lambdas/lambdas02","permalink":"/java-docs/pr-preview/pr-246/exercises/lambdas/lambdas02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas02.mdx","tags":[],"version":"current","frontMatter":{"title":"Lambdas02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Lambdas01","permalink":"/java-docs/pr-preview/pr-246/exercises/lambdas/lambdas01"},"next":{"title":"Lambdas03","permalink":"/java-docs/pr-preview/pr-246/exercises/lambdas/lambdas03"}}'),r=n("85893"),i=n("50065"),l=n("39661");let a={title:"Lambdas02",description:""},d=void 0,u={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>FilteredStudents</em>",id:"hinweise-zur-klasse-filteredstudents",level:2}];function c(e){let t={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Gegeben sind die beiden Klassen ",(0,r.jsx)(t.code,{children:"FilteredAdultStudents"})," und\n",(0,r.jsx)(t.code,{children:"FilteredTeenStudents"}),". Beide sollen sicherstellen, dass nur bestimmte Studenten\nhinzugef\xfcgt werden k\xf6nnen. Die Klasse ",(0,r.jsx)(t.code,{children:"FilteredAdultStudents"})," erm\xf6glicht nur das\nHinzuf\xfcgen von Studenten, die mindesten 18 Jahre alt sind; die Klasse\n",(0,r.jsx)(t.code,{children:"FilteredTeenStudents"})," das Hinzuf\xfcgen von Studenten unter 18 Jahren. Dieser\nAnsatz funktioniert zwar, ist allerdings nicht flexibel."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Erstelle eine ausf\xfchrbare Klasse, welche mehrere Objekte der Klasse ",(0,r.jsx)(t.code,{children:"Student"}),"\nerzeugt und versucht, diese Objekten der Klasse ",(0,r.jsx)(t.code,{children:"FilteredAdultList"})," bzw.\n",(0,r.jsx)(t.code,{children:"FilteredTeenList"})," hinzuzuf\xfcgen"]}),"\n",(0,r.jsxs)(t.li,{children:["Erstelle die Klasse ",(0,r.jsx)(t.code,{children:"FilteredStudents"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,r.jsxs)(t.li,{children:["Passe die ausf\xfchrbare Klasse so an, dass nur noch die Klasse\n",(0,r.jsx)(t.code,{children:"FilteredStudents"})," verwendet wird und \xfcbergib dem Konstruktor das Pr\xe4dikat\njeweils in Form eines Lambda-Ausdrucks"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(t.mermaid,{value:"classDiagram\n    Student --o FilteredAdultStudents\n    Student --o FilteredTeenStudents\n    FilteredStudents o-- Student\n    FilteredStudents o-- Predicate~T~\n\n    class Student {\n        <<record>>\n        name: String\n        age: int\n    }\n\n    class Predicate~T~ {\n        <<interface>>\n        +test(t: T) boolean\n    }\n\n    class FilteredAdultStudents {\n        -students: List~Student~ #123;final#125;\n        +FilteredAdultStudents()\n        +add(student: Student) void\n        +printStudents() void\n    }\n\n    class FilteredTeenStudents {\n        -students: List~Student~ #123;final#125;\n        +FilteredTeenStudents()\n        +add(student: Student) void\n        +printStudents() void\n    }\n\n    class FilteredStudents {\n        -students: List~Student~ #123;final#125;\n        -mandatoryFilter: Predicate~Student~ #123;final#125;\n        +FilteredStudents(mandatoryFilter: Predicate~Student~)\n        +add(student: Student) void\n        +printStudents() void\n    }"}),"\n",(0,r.jsxs)(t.h2,{id:"hinweise-zur-klasse-filteredstudents",children:["Hinweise zur Klasse ",(0,r.jsx)(t.em,{children:"FilteredStudents"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,r.jsxs)(t.li,{children:["Die Methode ",(0,r.jsx)(t.code,{children:"void add(student: Student)"})," soll der Studentenliste den\neingehenden Studenten hinzuf\xfcgen. Vor dem Hinzuf\xfcgen soll mit Hilfe des\nFilters \xfcberpr\xfcft werden, ob der eingehende Student hinzugef\xfcgt werden soll"]}),"\n",(0,r.jsxs)(t.li,{children:["Methode ",(0,r.jsx)(t.code,{children:"void printStudent()"})," soll alle Studenten auf der Konsole ausgeben"]}),"\n"]}),"\n",(0,r.jsx)(l.Z,{pullRequest:"68",branchSuffix:"lambdas/02"})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5525:function(e,t,n){n.d(t,{Z:()=>l});var s=n("85893");n("67294");var r=n("67026");let i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n,children:t})}},47902:function(e,t,n){n.d(t,{Z:()=>j});var s=n("85893"),r=n("67294"),i=n("67026"),l=n("69599"),a=n("16550"),d=n("32000"),u=n("4520"),o=n("38341"),c=n("76009");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var p=n("7227");let f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:d}=e,u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),c=e=>{let t=e.currentTarget,n=d[u.indexOf(t)].value;n!==r&&(o(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:d.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:h,onClick:c,...l,className:(0,i.Z)("tabs__item",b,l?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:s}=e,i=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,p]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:i})),[f,b]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,u._X)(i);return[l,(0,r.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})},[i,s])]}({queryString:n,groupId:s}),[v,x]=function(e){var t;let{groupId:n}=e;let s=(t=n)?`docusaurus.tab.${t}`:null,[i,l]=(0,c.Nk)(s);return[i,(0,r.useCallback)(e=>{if(!!s)l.set(e)},[s,l])]}({groupId:s}),g=(()=>{let e=f??v;return m({value:e,tabValues:i})?e:null})();return(0,d.Z)(()=>{g&&p(g)},[g]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),x(e)},[b,x,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,s.jsx)(v,{...t,...e}),(0,s.jsx)(x,{...t,...e})]})}function j(e){let t=(0,p.Z)();return(0,s.jsx)(g,{...e,children:h(e.children)},String(t))}},39661:function(e,t,n){n.d(t,{Z:function(){return d}});var s=n(85893);n(67294);var r=n(47902),i=n(5525),l=n(83012),a=n(45056);function d(e){let{pullRequest:t,branchSuffix:n}=e;return(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(a.Z,{language:"console",children:`git switch exercises/${n}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(a.Z,{language:"console",children:`git switch solutions/${n}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);