"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7690"],{10330:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>n,assets:()=>u,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"exercises/loops/loops02","title":"Loops02","description":"","source":"@site/docs/exercises/loops/loops02.mdx","sourceDirName":"exercises/loops","slug":"/exercises/loops/loops02","permalink":"/java-docs/pr-preview/pr-280/exercises/loops/loops02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/loops/loops02.mdx","tags":[],"version":"current","frontMatter":{"title":"Loops02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Loops01","permalink":"/java-docs/pr-preview/pr-280/exercises/loops/loops01"},"next":{"title":"Loops03","permalink":"/java-docs/pr-preview/pr-280/exercises/loops/loops03"}}'),s=r("85893"),a=r("50065"),l=r("17490");let i={title:"Loops02",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function p(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ermittelt, ob es sich bei einer\neingegebenen Zahl um eine Primzahl handelt oder nicht."}),"\n",(0,s.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Gib bitte eine ganze Zahl ein 13\nErgebnis: Die eingegebene Zahl ist eine Primzahl\n"})}),"\n",(0,s.jsx)(l.Z,{pullRequest:"13",branchSuffix:"loops/02"})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},97645:function(e,t,r){r.d(t,{Z:()=>a});var n=r("85893");r("67294");var s=r("67026");function a(e){let{children:t,hidden:r,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",a),hidden:r,children:t})}},58168:function(e,t,r){r.d(t,{Z:()=>x});var n=r("85893"),s=r("67294"),a=r("67026"),l=r("34718"),i=r("16550"),o=r("8714"),u=r("89207"),c=r("69413"),p=r("54510");function d(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var f=r("6735");function b(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{let t=e.currentTarget,r=o[u.indexOf(t)].value;r!==s&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map(e=>{let{value:t,label:r,attributes:l}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:p,...l,className:(0,a.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":s===t}),children:r??t},t)})})}function m(e){let{lazy:t,children:r,selectedValue:l}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,a=function(e){let{values:t,children:r}=e;return(0,s.useMemo)(()=>{let e=t??d(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[l,f]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:a})),[b,m]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(a),(0,s.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})},[a,n])]}({queryString:r,groupId:n}),[v,x]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[n,a]=(0,p.Nk)(r);return[n,(0,s.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:n}),g=(()=>{let e=b??v;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),x(e)},[m,x,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(b,{...t,...e}),(0,n.jsx)(m,{...t,...e})]})}function x(e){let t=(0,f.Z)();return(0,n.jsx)(v,{...e,children:d(e.children)},String(t))}},17490:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(85893);r(67294);var s=r(58168),a=r(97645),l=r(53367),i=r(31705);function o(e){let{pullRequest:t,branchSuffix:r}=e;return(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(i.Z,{language:"console",children:`git switch exercises/${r}`}),(0,n.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(i.Z,{language:"console",children:`git switch solutions/${r}`}),(0,n.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);