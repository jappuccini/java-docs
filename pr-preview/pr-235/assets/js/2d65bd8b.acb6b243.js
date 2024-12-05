"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6366"],{49449:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"exercises/exceptions/exceptions03","title":"Exceptions03","description":"","source":"@site/docs/exercises/exceptions/exceptions03.mdx","sourceDirName":"exercises/exceptions","slug":"/exercises/exceptions/exceptions03","permalink":"/java-docs/pr-preview/pr-235/exercises/exceptions/exceptions03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions03.mdx","tags":[],"version":"current","frontMatter":{"title":"Exceptions03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Exceptions02","permalink":"/java-docs/pr-preview/pr-235/exercises/exceptions/exceptions02"},"next":{"title":"Innere Klassen (Inner Classes)","permalink":"/java-docs/pr-preview/pr-235/exercises/inner-classes/"}}'),t=s("85893"),a=s("50065"),i=s("39661");let l={title:"Exceptions03",description:""},o=void 0,c={},u=[{value:"Hinweis zur Klasse <em>Employee</em>",id:"hinweis-zur-klasse-employee",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Erstelle die Ausnhamenklassen ",(0,t.jsx)(n.code,{children:"SalaryIncreaseTooHighException"})," sowie\n",(0,t.jsx)(n.code,{children:"SalaryDecreaseException"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,t.jsxs)(n.li,{children:["Passe die Klasse ",(0,t.jsx)(n.code,{children:"Employee"})," anhand der Hinweise an"]}),"\n",(0,t.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,t.jsx)(n.a,{href:"../class-diagrams/class-diagrams04",children:"ClassDiagrams04"})," so an, dass ein oder\nmehrere Mitarbeiter eine Gehaltserh\xf6hung bekommen. Behandle alle m\xf6glichen\nAusnahmen und gebe passende Fehlermeldungen in der Konsole aus."]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    Employee --o Company\n    Employee o-- Person\n    SalaryIncreaseTooHighException <.. Employee : throws\n    SalaryDecreaseException <.. Employee : throws\n\n    class Company {\n        -name: String #123;final#125;\n        -employees: ArrayList~Employee~ #123;final#125;\n        -numberOfEmployees: int\n        +Company(name: String)\n        +getName() String\n        +getEmployees() ArrayList~Employee~\n        +getNumberOfEmployees() int\n        +addEmployee(employee: Employee) void\n        +toString() String\n    }\n\n    class Person {\n        -name: String #123;final#125;\n        +Person(name: String)\n        +getName() String\n    }\n\n    class Employee {\n        -employeeId: int #123;final#125;\n        -person: Person #123;final#125;\n        -salaryInEuro: int\n        +Employee(employeeId: int, person: Person, salaryInEuro: int)\n        +getEmployeeId() int\n        +getName() String\n        +setSalaryInEuro(salaryInEuro: int) void\n        +getSalaryInEuro() int\n        +toString() String\n    }\n\n    class SalaryIncreaseTooHighException {\n    	<<exception>>\n    }\n\n    class SalaryDecreaseException {\n    	<<exception>>\n    }"}),"\n",(0,t.jsxs)(n.h2,{id:"hinweis-zur-klasse-employee",children:["Hinweis zur Klasse ",(0,t.jsx)(n.em,{children:"Employee"})]}),"\n",(0,t.jsxs)(n.p,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void setSalaryInEuro(salaryInEuro: int)"})," soll das Gehalt eines\nMitarbeiters festlegen. Ist das eingehende Gehalt mehr als 10% des bestehenden\nGehalts, soll die Ausnhame ",(0,t.jsx)(n.code,{children:"SalaryIncreaseTooHighException"})," ausgel\xf6st werden.\nIst das eingehende Gehalt weniger als das bestehende Gehalt, soll die Ausnhame\n",(0,t.jsx)(n.code,{children:"SalaryDecreaseException"})," ausgel\xf6st werden."]}),"\n",(0,t.jsx)(i.Z,{pullRequest:"51",branchSuffix:"exceptions/03"})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5525:function(e,n,s){s.d(n,{Z:()=>i});var r=s("85893");s("67294");var t=s("67026");let a="tabItem_Ymn6";function i(e){let{children:n,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a,i),hidden:s,children:n})}},47902:function(e,n,s){s.d(n,{Z:()=>y});var r=s("85893"),t=s("67294"),a=s("67026"),i=s("69599"),l=s("16550"),o=s("32000"),c=s("4520"),u=s("38341"),d=s("76009");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var m=s("7227");let x="tabList__CuJ",f="tabItem_LNqP";function g(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,s=o[c.indexOf(n)].value;s!==t&&(u(n),l(s))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},n),children:o.map(e=>{let{value:n,label:s,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:p,onClick:d,...i,className:(0,a.Z)("tabs__item",f,i?.className,{"tabs__item--active":t===n}),children:s??n},n)})})}function b(e){let{lazy:n,children:s,selectedValue:i}=e,l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:r}=e,a=function(e){let{values:n,children:s}=e;return(0,t.useMemo)(()=>{let e=n??p(s).map(e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[i,m]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=s.find(e=>e.default)??s[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[x,f]=function(e){let{queryString:n=!1,groupId:s}=e,r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),i=(0,c._X)(a);return[i,(0,t.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:s,groupId:r}),[g,b]=function(e){var n;let{groupId:s}=e;let r=(n=s)?`docusaurus.tab.${n}`:null,[a,i]=(0,d.Nk)(r);return[a,(0,t.useCallback)(e=>{if(!!r)i.set(e)},[r,i])]}({groupId:r}),v=(()=>{let e=x??g;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{v&&m(v)},[v]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),b(e)},[f,b,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",x),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(b,{...n,...e})]})}function y(e){let n=(0,m.Z)();return(0,r.jsx)(v,{...e,children:p(e.children)},String(n))}},39661:function(e,n,s){s.d(n,{Z:function(){return o}});var r=s(85893);s(67294);var t=s(47902),a=s(5525),i=s(83012),l=s(45056);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,r.jsxs)(t.Z,{children:[(0,r.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);