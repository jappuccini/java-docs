"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4573"],{37859:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>u,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"exercises/maps/maps02","title":"Maps02","description":"","source":"@site/docs/exercises/maps/maps02.mdx","sourceDirName":"exercises/maps","slug":"/exercises/maps/maps02","permalink":"/java-docs/production/exercises/maps/maps02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/maps/maps02.mdx","tags":[],"version":"current","frontMatter":{"title":"Maps02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Maps01","permalink":"/java-docs/production/exercises/maps/maps01"},"next":{"title":"Optionals","permalink":"/java-docs/production/exercises/optionals/"}}'),s=t("85893"),i=t("50065"),l=t("39661");let o={title:"Maps02",description:""},a=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>BookCollection</em>",id:"hinweise-zur-klasse-bookcollection",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,s.jsx)(n.code,{children:"Author"}),", ",(0,s.jsx)(n.code,{children:"Book"}),", ",(0,s.jsx)(n.code,{children:"BookCollection"})," und\n",(0,s.jsx)(n.code,{children:"DuplicateKeyException"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine B\xfcchersammlung mit mehreren\nAutoren und B\xfcchern erzeugt und den flei\xdfigsten Autoren auf der Konsole\nausgibt"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    BookCollection o-- Author\n    BookCollection o-- Book\n    DuplicateKeyException <.. BookCollection : throws\n\n    class Author {\n        <<record>>\n        name: String\n    }\n\n    class Book {\n        <<record>>\n        title: String\n    }\n\n    class BookCollection {\n        <<record>>\n        collection: Map~Author&sbquo; List~Book~~\n        +addAuthor(author: Author) void\n        +addBook(author: Author, book: Book) void\n        +getMostDiligentAuthor() Author\n        +getBookByTitle(title: String) Book\n    }\n\n    class DuplicateKeyException {\n    	<<exception>>\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-bookcollection",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"BookCollection"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addAuthor(author: Author)"})," soll den eingehenden Autor der\nB\xfcchersammlung hinzuf\xfcgen. F\xfcr den Fall, dass der Autor bereits in der\nB\xfcchersammlung vorhanden ist, soll die Ausnahme ",(0,s.jsx)(n.code,{children:"DuplicateKeyException"}),"\nausgel\xf6st werden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addBook(author: Author, book: Book)"})," soll das eingehende\nBuch der B\xfcchersammlung hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Author getMostDiligentAuthor()"})," soll den Autoren mit den meisten\nB\xfcchern in der B\xfcchersammlung zur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Book getBookByTitle(title: String)"})," soll das Buch zum eingehenden\nBuchtitel zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(l.Z,{pullRequest:"66",branchSuffix:"maps/02"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,n,t){t.d(n,{Z:()=>l});var r=t("85893");t("67294");var s=t("67026");let i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i,l),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>j});var r=t("85893"),s=t("67294"),i=t("67026"),l=t("69599"),o=t("16550"),a=t("32000"),u=t("4520"),c=t("38341"),d=t("76009");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("7227");let f="tabList__CuJ",x="tabItem_LNqP";function g(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:a}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,t=a[u.indexOf(n)].value;t!==s&&(c(n),o(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:h,onClick:d,...l,className:(0,i.Z)("tabs__item",x,l?.className,{"tabs__item--active":s===n}),children:t??n},n)})})}function b(e){let{lazy:n,children:t,selectedValue:l}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,i=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[f,x]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),l=(0,u._X)(i);return[l,(0,s.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:t,groupId:r}),[g,b]=function(e){var n;let{groupId:t}=e;let r=(n=t)?`docusaurus.tab.${n}`:null,[i,l]=(0,d.Nk)(r);return[i,(0,s.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),v=(()=>{let e=f??g;return p({value:e,tabValues:i})?e:null})();return(0,a.Z)(()=>{v&&m(v)},[v]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),b(e)},[x,b,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(b,{...n,...e})]})}function j(e){let n=(0,m.Z)();return(0,r.jsx)(v,{...e,children:h(e.children)},String(n))}},39661:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(85893);t(67294);var s=t(47902),i=t(5525),l=t(83012),o=t(45056);function a(e){let{pullRequest:n,branchSuffix:t}=e;return(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(o.Z,{language:"console",children:`git switch exercises/${t}`}),(0,r.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(o.Z,{language:"console",children:`git switch solutions/${t}`}),(0,r.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);