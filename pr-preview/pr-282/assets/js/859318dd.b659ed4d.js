"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4573"],{52026:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>u,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"exercises/maps/maps02","title":"Maps02","description":"","source":"@site/docs/exercises/maps/maps02.mdx","sourceDirName":"exercises/maps","slug":"/exercises/maps/maps02","permalink":"/java-docs/pr-preview/pr-282/exercises/maps/maps02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/maps/maps02.mdx","tags":[],"version":"current","frontMatter":{"title":"Maps02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Maps01","permalink":"/java-docs/pr-preview/pr-282/exercises/maps/maps01"},"next":{"title":"Optionals","permalink":"/java-docs/pr-preview/pr-282/exercises/optionals/"}}'),s=r("85893"),i=r("50065"),l=r("17490");let a={title:"Maps02",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>BookCollection</em>",id:"hinweise-zur-klasse-bookcollection",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Ausnahmenklasse ",(0,s.jsx)(n.code,{children:"DuplicateKeyException"})]}),"\n",(0,s.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,s.jsx)(n.code,{children:"Author"}),", ",(0,s.jsx)(n.code,{children:"Book"})," und ",(0,s.jsx)(n.code,{children:"BookCollection"})," anhand des\nabgebildeten Klassendiagramms"]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine B\xfcchersammlung mit mehreren\nAutoren und B\xfcchern erzeugt und den flei\xdfigsten Autoren auf der Konsole\nausgibt"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    BookCollection o-- Author\n    BookCollection o-- Book\n\n    class Author {\n        <<record>>\n        name: String\n    }\n\n    class Book {\n        <<record>>\n        title: String\n    }\n\n    class BookCollection {\n        <<record>>\n        collection: Map~Author&sbquo; List~Book~~\n        +addAuthor(author: Author) void\n        +addBook(author: Author, book: Book) void\n        +getMostDiligentAuthor() Author\n        +getBookByTitle(title: String) Book\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-bookcollection",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"BookCollection"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addAuthor(author: Author)"})," soll den eingehenden Autor der\nB\xfcchersammlung hinzuf\xfcgen. F\xfcr den Fall, dass der Autor bereits in der\nB\xfcchersammlung vorhanden ist, soll die Ausnahme ",(0,s.jsx)(n.code,{children:"DuplicateKeyException"}),"\nausgel\xf6st werden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addBook(author: Author, book: Book)"})," soll das eingehende\nBuch der B\xfcchersammlung hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Author getMostDiligentAuthor()"})," soll den Autoren mit den meisten\nB\xfcchern in der B\xfcchersammlung zur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Book getBookByTitle(title: String)"})," soll das Buch zum eingehenden\nBuchtitel zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(l.Z,{pullRequest:"66",branchSuffix:"maps/02"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>i});var t=r("85893");r("67294");var s=r("67026");function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",i),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>v});var t=r("85893"),s=r("67294"),i=r("67026"),l=r("34718"),a=r("16550"),o=r("8714"),u=r("89207"),c=r("69413"),d=r("54510");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function f(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==s&&(c(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":s===n}),children:r??n},n)})})}function g(e){let{lazy:n,children:r,selectedValue:l}=e,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,i=function(e){let{values:n,children:r}=e;return(0,s.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:i})),[f,g]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,s.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})},[i,t])]}({queryString:r,groupId:t}),[x,v]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,i]=(0,d.Nk)(r);return[t,(0,s.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:t}),b=(()=>{let e=f??x;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{b&&m(b)},[b]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),v(e)},[g,v,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(f,{...n,...e}),(0,t.jsx)(g,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,t.jsx)(x,{...e,children:h(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(85893);r(67294);var s=r(58168),i=r(97645),l=r(53367),a=r(31705);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(a.Z,{language:"console",children:`git switch exercises/${r}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(a.Z,{language:"console",children:`git switch solutions/${r}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);