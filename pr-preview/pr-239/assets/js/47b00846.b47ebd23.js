"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7728"],{47247:function(e,t,r){r.r(t),r.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>u});var s=JSON.parse('{"id":"exercises/class-structure/class-structure01","title":"ClassStructure01","description":"","source":"@site/docs/exercises/class-structure/class-structure01.mdx","sourceDirName":"exercises/class-structure","slug":"/exercises/class-structure/class-structure01","permalink":"/java-docs/pr-preview/pr-239/exercises/class-structure/class-structure01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-structure/class-structure01.mdx","tags":[],"version":"current","frontMatter":{"title":"ClassStructure01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Aufbau einer Java-Klasse","permalink":"/java-docs/pr-preview/pr-239/exercises/class-structure/"},"next":{"title":"Datenobjekte","permalink":"/java-docs/pr-preview/pr-239/exercises/data-objects/"}}'),a=r("85893"),n=r("50065"),l=r("39661");let u={title:"ClassStructure01",description:""},i=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:'Erstelle eine ausf\xfchrbare Klasse, welche "Hello World" auf der Konsole ausgibt.'}),"\n",(0,a.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"Hello World\n"})}),"\n",(0,a.jsx)(l.Z,{pullRequest:"2",branchSuffix:"class-structure/01"})]})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5525:function(e,t,r){r.d(t,{Z:()=>l});var s=r("85893");r("67294");var a=r("67026");let n="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n,l),hidden:r,children:t})}},47902:function(e,t,r){r.d(t,{Z:()=>j});var s=r("85893"),a=r("67294"),n=r("67026"),l=r("69599"),u=r("16550"),i=r("32000"),o=r("4520"),c=r("38341"),d=r("76009");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var f=r("7227");let b="tabList__CuJ",v="tabItem_LNqP";function m(e){let{className:t,block:r,selectedValue:a,selectValue:u,tabValues:i}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let t=e.currentTarget,r=i[o.indexOf(t)].value;r!==a&&(c(t),u(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:i.map(e=>{let{value:t,label:r,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:p,onClick:d,...l,className:(0,n.Z)("tabs__item",v,l?.className,{"tabs__item--active":a===t}),children:r??t},t)})})}function x(e){let{lazy:t,children:r,selectedValue:l}=e,u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=u.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:u.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:s}=e,n=function(e){let{values:t,children:r}=e;return(0,a.useMemo)(()=>{let e=t??p(r).map(e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[l,f]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=r.find(e=>e.default)??r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:n})),[b,v]=function(e){let{queryString:t=!1,groupId:r}=e,s=(0,u.k6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r}),l=(0,o._X)(n);return[l,(0,a.useCallback)(e=>{if(!n)return;let t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})},[n,s])]}({queryString:r,groupId:s}),[m,x]=function(e){var t;let{groupId:r}=e;let s=(t=r)?`docusaurus.tab.${t}`:null,[n,l]=(0,d.Nk)(s);return[n,(0,a.useCallback)(e=>{if(!!s)l.set(e)},[s,l])]}({groupId:s}),g=(()=>{let e=b??m;return h({value:e,tabValues:n})?e:null})();return(0,i.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:n}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,n]),tabValues:n}}(e);return(0,s.jsxs)("div",{className:(0,n.Z)("tabs-container",b),children:[(0,s.jsx)(m,{...t,...e}),(0,s.jsx)(x,{...t,...e})]})}function j(e){let t=(0,f.Z)();return(0,s.jsx)(g,{...e,children:p(e.children)},String(t))}},39661:function(e,t,r){r.d(t,{Z:function(){return i}});var s=r(85893);r(67294);var a=r(47902),n=r(5525),l=r(83012),u=r(45056);function i(e){let{pullRequest:t,branchSuffix:r}=e;return(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(u.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(u.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);