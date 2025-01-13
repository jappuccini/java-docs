"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4489"],{1693:function(e,r,a){a.r(r),a.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>t,assets:()=>u,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"exercises/arrays/arrays07","title":"Arrays07","description":"","source":"@site/docs/exercises/arrays/arrays07.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays07","permalink":"/java-docs/production/exercises/arrays/arrays07","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays07.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays07","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Arrays06","permalink":"/java-docs/production/exercises/arrays/arrays06"},"next":{"title":"Objektorientierte Programmierung","permalink":"/java-docs/production/exercises/oo/"}}'),n=a("85893"),s=a("50065"),l=a("17490");let i={title:"Arrays07",description:""},o=void 0,u={},c=[{value:"Zahlenfelder",id:"zahlenfelder",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Zahlenfelder zu einem Zahlenfeld\nzusammenf\xfchrt und alle Elemente des zusammengef\xfcgten Zahlenfeldes auf der\nKonsole ausgibt."}),"\n",(0,n.jsx)(r.h2,{id:"zahlenfelder",children:"Zahlenfelder"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"int[] arrayOne = { 1, 2, 3, 4 };\nint[] arrayTwo = { 5, 6, 7, 8 };\n"})}),"\n",(0,n.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",children:"1\n2\n3\n4\n5\n6\n7\n8\n"})}),"\n",(0,n.jsx)(l.Z,{pullRequest:"81",branchSuffix:"arrays/07"})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97645:function(e,r,a){a.d(r,{Z:()=>s});var t=a("85893");a("67294");var n=a("67026");function s(e){let{children:r,hidden:a,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",s),hidden:a,children:r})}},58168:function(e,r,a){a.d(r,{Z:()=>x});var t=a("85893"),n=a("67294"),s=a("67026"),l=a("34718"),i=a("16550"),o=a("8714"),u=a("89207"),c=a("69413"),d=a("54510");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:a}=e;return a.some(e=>e.value===r)}var f=a("6735");function m(e){let{className:r,block:a,selectedValue:n,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let r=e.currentTarget,a=o[u.indexOf(r)].value;a!==n&&(c(r),i(a))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=u.indexOf(e.currentTarget)+1;r=u[a]??u[0];break}case"ArrowLeft":{let a=u.indexOf(e.currentTarget)-1;r=u[a]??u[u.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},r),children:o.map(e=>{let{value:r,label:a,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...l,className:(0,s.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":n===r}),children:a??r},r)})})}function b(e){let{lazy:r,children:a,selectedValue:l}=e,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===l);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:a=!1,groupId:t}=e,s=function(e){let{values:r,children:a}=e;return(0,n.useMemo)(()=>{let e=r??p(a).map(e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,a])}(e),[l,f]=(0,n.useState)(()=>(function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:s})),[m,b]=function(e){let{queryString:r=!1,groupId:a}=e,t=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,u._X)(s),(0,n.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})},[s,t])]}({queryString:a,groupId:t}),[v,x]=function(e){let{groupId:r}=e,a=r?`docusaurus.tab.${r}`:null,[t,s]=(0,d.Nk)(a);return[t,(0,n.useCallback)(e=>{a&&s.set(e)},[a,s])]}({groupId:t}),g=(()=>{let e=m??v;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),x(e)},[b,x,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(m,{...r,...e}),(0,t.jsx)(b,{...r,...e})]})}function x(e){let r=(0,f.Z)();return(0,t.jsx)(v,{...e,children:p(e.children)},String(r))}},17490:function(e,r,a){a.d(r,{Z:function(){return o}});var t=a(85893);a(67294);var n=a(58168),s=a(97645),l=a(53367),i=a(31705);function o(e){let{pullRequest:r,branchSuffix:a}=e;return(0,t.jsxs)(n.Z,{children:[(0,t.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(i.Z,{language:"console",children:`git switch exercises/${a}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(i.Z,{language:"console",children:`git switch solutions/${a}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);