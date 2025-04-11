"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7081"],{64647:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>u,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"exercises/maps/maps01","title":"Maps01","description":"","source":"@site/docs/exercises/maps/maps01.mdx","sourceDirName":"exercises/maps","slug":"/exercises/maps/maps01","permalink":"/java-docs/pr-preview/pr-289/exercises/maps/maps01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/maps/maps01.mdx","tags":[],"version":"current","frontMatter":{"title":"Maps01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Assoziativspeicher (Maps)","permalink":"/java-docs/pr-preview/pr-289/exercises/maps/"},"next":{"title":"Maps02","permalink":"/java-docs/pr-preview/pr-289/exercises/maps/maps02"}}'),t=r("85893"),a=r("50065"),l=r("17490");let i={title:"Maps01",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>TelephoneBook</em>",id:"hinweise-zur-klasse-telephonebook",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,t.jsx)(n.code,{children:"Person"}),", ",(0,t.jsx)(n.code,{children:"TelephoneNumber"})," und ",(0,t.jsx)(n.code,{children:"TelephoneBook"})," anhand\ndes abgebildeten Klassendiagramms"]}),"\n",(0,t.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Telefonbuch mit mehreren\nEintr\xe4gen erzeugt und zu eingegebenen Namen die dazugeh\xf6rigen Telefonnummern\nauf der Konsole ausgibt"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    TelephoneBook o-- Person\n    TelephoneBook o-- TelephoneNumber\n\n    class Person {\n        <<record>>\n        name: String\n    }\n\n    class TelephoneNumber {\n        <<record>>\n        value: String\n    }\n\n    class TelephoneBook {\n        <<record>>\n        entries: Map~Person, TelephoneNumber~\n        +addEntry(person: Person, telephoneNumber: TelephoneNumber) void\n        +getTelephoneNumberByName(name: String) TelephoneNumber\n    }"}),"\n",(0,t.jsxs)(n.h2,{id:"hinweise-zur-klasse-telephonebook",children:["Hinweise zur Klasse ",(0,t.jsx)(n.em,{children:"TelephoneBook"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"void addEntry(person: Person, telephoneNumber: TelephoneNumber)"}),"\nsoll einen Eintrag im Telefonbuch anlegen"]}),"\n",(0,t.jsxs)(n.li,{children:["Die Methode ",(0,t.jsx)(n.code,{children:"TelephoneNumber getTelephoneNumberByName(name: String)"})," soll die\nTelefonnummer zum eingehenden Namen zur\xfcckgeben"]}),"\n"]}),"\n",(0,t.jsx)(l.Z,{pullRequest:"59",branchSuffix:"maps/01"})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>a});var s=r("85893");r("67294");var t=r("67026");function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",a),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>g});var s=r("85893"),t=r("67294"),a=r("67026"),l=r("34718"),i=r("16550"),o=r("8714"),u=r("89207"),c=r("69413"),d=r("54510");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function f(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==t&&(c(n),i(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":t===n}),children:r??n},n)})})}function b(e){let{lazy:n,children:r,selectedValue:l}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:s}=e,a=function(e){let{values:n,children:r}=e;return(0,t.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,m]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=r.find(e=>e.default)??r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:a})),[f,b]=function(e){let{queryString:n=!1,groupId:r}=e,s=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(a),(0,t.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})},[a,s])]}({queryString:r,groupId:s}),[v,g]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[s,a]=(0,d.Nk)(r);return[s,(0,t.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:s}),x=(()=>{let e=f??v;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{x&&m(x)},[x]),{selectedValue:l,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),b(e),g(e)},[b,g,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(f,{...n,...e}),(0,s.jsx)(b,{...n,...e})]})}function g(e){let n=(0,m.Z)();return(0,s.jsx)(v,{...e,children:p(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return o}});var s=r(85893);r(67294);var t=r(58168),a=r(97645),l=r(53367),i=r(31705);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(i.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(i.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);