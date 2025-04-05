"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8448"],{35713:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>u,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"exercises/generics/generics03","title":"Generics03","description":"","source":"@site/docs/exercises/generics/generics03.mdx","sourceDirName":"exercises/generics","slug":"/exercises/generics/generics03","permalink":"/java-docs/pr-preview/pr-282/exercises/generics/generics03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics03.mdx","tags":[],"version":"current","frontMatter":{"title":"Generics03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Generics02","permalink":"/java-docs/pr-preview/pr-282/exercises/generics/generics02"},"next":{"title":"Generics04","permalink":"/java-docs/pr-preview/pr-282/exercises/generics/generics04"}}'),i=r("85893"),l=r("50065"),a=r("17490");let t={title:"Generics03",description:""},c=void 0,u={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>SchoolClass</em>",id:"hinweise-zur-klasse-schoolclass",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,i.jsx)(n.code,{children:"Pair"}),", ",(0,i.jsx)(n.code,{children:"Pupil"})," und ",(0,i.jsx)(n.code,{children:"SchoolClass"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,i.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine Schulklasse mit mehreren\nSch\xfclern erzeugt und die Sch\xfclerpaare ausgibt"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    SchoolClass o-- Pupil\n\n    class Pair~T~ {\n        <<record>>\n        partA: T\n        partB: T\n    }\n\n    class SchoolClass {\n        <<record>>\n        name: String\n        pupils: List~Pupil~\n        +addPupil(pupil: Pupil) void\n        +getPairs() List~Pair~Pupil~~\n    }\n\n    class Pupil {\n        <<record>>\n        name: String\n        gender: String\n    }"}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-schoolclass",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"SchoolClass"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addPupil(pupil: Pupil)"})," soll der Schulklasse den eingehenden\nSch\xfcler hinzuf\xfcgen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<Pair<Pupil>> getPairs()"})," soll aus den Sch\xfclern der\nSchulklasse zuf\xe4llige Paare bilden und zur\xfcckgeben. Bei einer ungeraden Anzahl\nan Sch\xfclern soll der verbleibende Sch\xfcler mit dem Wert ",(0,i.jsx)(n.code,{children:"null"})," gepaart werden"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"Sch\xfcler:\nFranziska\nFritz\nHans\nJennifer\nLisa\nMax\nPeter\n\nPaare:\nJennifer - Franziska\nFritz - Lisa\nMax - Hans\nPeter - null\n"})}),"\n",(0,i.jsx)(a.Z,{pullRequest:"64",branchSuffix:"generics/03"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>l});var s=r("85893");r("67294");var i=r("67026");function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",l),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>v});var s=r("85893"),i=r("67294"),l=r("67026"),a=r("34718"),t=r("16550"),c=r("8714"),u=r("89207"),o=r("69413"),d=r("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function g(e){let{className:n,block:r,selectedValue:i,selectValue:t,tabValues:c}=e,u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),d=e=>{let n=e.currentTarget,r=c[u.indexOf(n)].value;r!==i&&(o(n),t(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:c.map(e=>{let{value:n,label:r,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...a,className:(0,l.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function f(e){let{lazy:n,children:r,selectedValue:a}=e,t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=t.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:t.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:s}=e,l=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=r.find(e=>e.default)??r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:l})),[g,f]=function(e){let{queryString:n=!1,groupId:r}=e,s=(0,t.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,i.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})},[l,s])]}({queryString:r,groupId:s}),[x,v]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[s,l]=(0,d.Nk)(r);return[s,(0,i.useCallback)(e=>{r&&l.set(e)},[r,l])]}({groupId:s}),b=(()=>{let e=g??x;return p({value:e,tabValues:l})?e:null})();return(0,c.Z)(()=>{b&&m(b)},[b]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),v(e)},[f,v,l]),tabValues:l}}(e);return(0,s.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(g,{...n,...e}),(0,s.jsx)(f,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,s.jsx)(x,{...e,children:h(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return c}});var s=r(85893);r(67294);var i=r(58168),l=r(97645),a=r(53367),t=r(31705);function c(e){let{pullRequest:n,branchSuffix:r}=e;return(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(l.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(t.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(l.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(t.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(l.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);