"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5541"],{50505:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>a,assets:()=>u,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"exercises/arrays/arrays02","title":"Arrays02","description":"","source":"@site/docs/exercises/arrays/arrays02.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays02","permalink":"/java-docs/pr-preview/pr-287/exercises/arrays/arrays02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays02.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Arrays01","permalink":"/java-docs/pr-preview/pr-287/exercises/arrays/arrays01"},"next":{"title":"Arrays03","permalink":"/java-docs/pr-preview/pr-287/exercises/arrays/arrays03"}}'),s=t("85893"),n=t("50065"),l=t("17490");let i={title:"Arrays02",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse zum Umdrehen von Feldern (d.h. das erste\nElement soll nach dem Umdrehen an letzter Position stehen, das letzte an erster\nPosition usw.)."}),"\n",(0,s.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-console",children:"Eingabe: 4 8 2 6 9 1\nAusgabe: 1 9 6 2 8 4\n"})}),"\n",(0,s.jsx)(l.Z,{pullRequest:"19",branchSuffix:"arrays/02"})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,r,t){t.d(r,{Z:()=>n});var a=t("85893");t("67294");var s=t("67026");function n(e){let{children:r,hidden:t,className:n}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",n),hidden:t,children:r})}},58168:function(e,r,t){t.d(r,{Z:()=>x});var a=t("85893"),s=t("67294"),n=t("67026"),l=t("34718"),i=t("16550"),o=t("8714"),u=t("89207"),c=t("69413"),d=t("54510");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var f=t("6735");function m(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let r=e.currentTarget,t=o[u.indexOf(r)].value;t!==s&&(c(r),i(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:o.map(e=>{let{value:r,label:t,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...l,className:(0,n.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":s===r}),children:t??r},r)})})}function b(e){let{lazy:r,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:a}=e,n=function(e){let{values:r,children:t}=e;return(0,s.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:a,default:s}}=e;return{value:r,label:t,attributes:a,default:s}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[l,f]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:n})),[m,b]=function(e){let{queryString:r=!1,groupId:t}=e,a=(0,i.k6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(n),(0,s.useCallback)(e=>{if(!n)return;let r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})},[n,a])]}({queryString:t,groupId:a}),[v,x]=function(e){let{groupId:r}=e,t=r?`docusaurus.tab.${r}`:null,[a,n]=(0,d.Nk)(t);return[a,(0,s.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:a}),g=(()=>{let e=m??v;return h({value:e,tabValues:n})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:n}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),x(e)},[b,x,n]),tabValues:n}}(e);return(0,a.jsxs)("div",{className:(0,n.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(m,{...r,...e}),(0,a.jsx)(b,{...r,...e})]})}function x(e){let r=(0,f.Z)();return(0,a.jsx)(v,{...e,children:p(e.children)},String(r))}},17490:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(85893);t(67294);var s=t(58168),n=t(97645),l=t(53367),i=t(31705);function o(e){let{pullRequest:r,branchSuffix:t}=e;return(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(i.Z,{language:"console",children:`git switch exercises/${t}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(i.Z,{language:"console",children:`git switch solutions/${t}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);