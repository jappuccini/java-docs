"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1148"],{42681:function(e,a,r){r.r(a),r.d(a,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>u});var n=JSON.parse('{"id":"exercises/lambdas/lambdas01","title":"Lambdas01","description":"","source":"@site/docs/exercises/lambdas/lambdas01.mdx","sourceDirName":"exercises/lambdas","slug":"/exercises/lambdas/lambdas01","permalink":"/java-docs/pr-preview/pr-256/exercises/lambdas/lambdas01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas01.mdx","tags":[],"version":"current","frontMatter":{"title":"Lambdas01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Lambda-Ausdr\xfccke (Lambdas)","permalink":"/java-docs/pr-preview/pr-256/exercises/lambdas/"},"next":{"title":"Lambdas02","permalink":"/java-docs/pr-preview/pr-256/exercises/lambdas/lambdas02"}}'),s=r("85893"),t=r("50065"),l=r("17490");let i={title:"Lambdas01",description:""},u=void 0,o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let a={code:"code",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Erstelle die Klasse ",(0,s.jsx)(a.code,{children:"Student"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,s.jsxs)(a.li,{children:["Erstelle eine ausf\xfchrbare Klasse, welche mehrere Objekte der Klasse ",(0,s.jsx)(a.code,{children:"Student"}),"\nerzeugt und diese einer Liste hinzuf\xfcgt"]}),"\n",(0,s.jsx)(a.li,{children:"Rufe in der ausf\xfchrbaren Klasse die forEach-Methode auf, und \xfcbergib eine\nanonyme Klasse. Die anonyme Klasse soll alle Studenten die \xe4lter sind als 26\nauf der Konsole ausgeben"}),"\n",(0,s.jsx)(a.li,{children:"Rufe in der ausf\xfchrbaren Klasse die forEach-Methode auf, und \xfcbergib einen\nLambda-Ausdruck. Der Lambda-Ausdruck soll sich exakt so verhalten wie die\nzuvor implementierte anonyme Klasse"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(a.mermaid,{value:"classDiagram\n    class Student {\n        <<record>>\n        name: String\n        age: int\n    }"}),"\n",(0,s.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-console",children:"Yannik ist 28 Jahre alt\nHanni ist 29 Jahre alt\nManu ist 30 Jahre alt\n"})}),"\n",(0,s.jsx)(l.Z,{pullRequest:"67",branchSuffix:"lambdas/01"})]})}function h(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,a,r){r.d(a,{Z:()=>t});var n=r("85893");r("67294");var s=r("67026");function t(e){let{children:a,hidden:r,className:t}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",t),hidden:r,children:a})}},58168:function(e,a,r){r.d(a,{Z:()=>x});var n=r("85893"),s=r("67294"),t=r("67026"),l=r("34718"),i=r("16550"),u=r("8714"),o=r("89207"),c=r("69413"),d=r("54510");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:a,tabValues:r}=e;return r.some(e=>e.value===a)}var p=r("6735");function b(e){let{className:a,block:r,selectedValue:s,selectValue:i,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let a=e.currentTarget,r=u[o.indexOf(a)].value;r!==s&&(c(a),i(r))},h=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;a=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;a=o[r]??o[o.length-1]}}a?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},a),children:u.map(e=>{let{value:a,label:r,attributes:l}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...l,className:(0,t.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":s===a}),children:r??a},a)})})}function f(e){let{lazy:a,children:r,selectedValue:l}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){let e=i.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==l}))})}function v(e){let a=function(e){let{defaultValue:a,queryString:r=!1,groupId:n}=e,t=function(e){let{values:a,children:r}=e;return(0,s.useMemo)(()=>{let e=a??h(r).map(e=>{let{props:{value:a,label:r,attributes:n,default:s}}=e;return{value:a,label:r,attributes:n,default:s}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,r])}(e),[l,p]=(0,s.useState)(()=>(function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:a,tabValues:t})),[b,f]=function(e){let{queryString:a=!1,groupId:r}=e,n=(0,i.k6)(),t=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,o._X)(t),(0,s.useCallback)(e=>{if(!t)return;let a=new URLSearchParams(n.location.search);a.set(t,e),n.replace({...n.location,search:a.toString()})},[t,n])]}({queryString:r,groupId:n}),[v,x]=function(e){let{groupId:a}=e,r=a?`docusaurus.tab.${a}`:null,[n,t]=(0,d.Nk)(r);return[n,(0,s.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:n}),g=(()=>{let e=b??v;return m({value:e,tabValues:t})?e:null})();return(0,u.Z)(()=>{g&&p(g)},[g]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),x(e)},[f,x,t]),tabValues:t}}(e);return(0,n.jsxs)("div",{className:(0,t.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(b,{...a,...e}),(0,n.jsx)(f,{...a,...e})]})}function x(e){let a=(0,p.Z)();return(0,n.jsx)(v,{...e,children:h(e.children)},String(a))}},17490:function(e,a,r){r.d(a,{Z:function(){return u}});var n=r(85893);r(67294);var s=r(58168),t=r(97645),l=r(53367),i=r(31705);function u(e){let{pullRequest:a,branchSuffix:r}=e;return(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(i.Z,{language:"console",children:`git switch exercises/${r}`}),(0,n.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(i.Z,{language:"console",children:`git switch solutions/${r}`}),(0,n.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);