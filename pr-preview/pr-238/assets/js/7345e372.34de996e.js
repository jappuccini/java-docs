"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8288"],{27518:function(e,r,t){t.r(r),t.d(r,{metadata:()=>a,contentTitle:()=>u,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"exercises/arrays/arrays04","title":"Arrays04","description":"","source":"@site/docs/exercises/arrays/arrays04.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays04","permalink":"/java-docs/pr-preview/pr-238/exercises/arrays/arrays04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays04.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Arrays03","permalink":"/java-docs/pr-preview/pr-238/exercises/arrays/arrays03"},"next":{"title":"Arrays05","permalink":"/java-docs/pr-preview/pr-238/exercises/arrays/arrays05"}}'),s=t("85893"),n=t("50065"),i=t("39661");let l={title:"Arrays04",description:""},u=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:'Erstelle eine ausf\xfchrbare Klasse, welche zwei "Bin\xe4rzahlen" aufsummiert und das\nErgebnis auf dem Bildschirm ausgibt.'}),"\n",(0,s.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-console",children:"  10010110\n+ 01100101\n= 11111011\n"})}),"\n",(0,s.jsx)(i.Z,{pullRequest:"21",branchSuffix:"arrays/04"})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,r,t){t.d(r,{Z:()=>i});var a=t("85893");t("67294");var s=t("67026");let n="tabItem_Ymn6";function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n,i),hidden:t,children:r})}},47902:function(e,r,t){t.d(r,{Z:()=>j});var a=t("85893"),s=t("67294"),n=t("67026"),i=t("69599"),l=t("16550"),u=t("32000"),o=t("4520"),c=t("38341"),d=t("76009");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var f=t("7227");let m="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,t=u[o.indexOf(r)].value;t!==s&&(c(r),l(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:u.map(e=>{let{value:r,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>o.push(e),onKeyDown:p,onClick:d,...i,className:(0,n.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===r}),children:t??r},r)})})}function x(e){let{lazy:r,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:a}=e,n=function(e){let{values:r,children:t}=e;return(0,s.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:a,default:s}}=e;return{value:r,label:t,attributes:a,default:s}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,f]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:n})),[m,b]=function(e){let{queryString:r=!1,groupId:t}=e,a=(0,l.k6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t}),i=(0,o._X)(n);return[i,(0,s.useCallback)(e=>{if(!n)return;let r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})},[n,a])]}({queryString:t,groupId:a}),[v,x]=function(e){var r;let{groupId:t}=e;let a=(r=t)?`docusaurus.tab.${r}`:null,[n,i]=(0,d.Nk)(a);return[n,(0,s.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),g=(()=>{let e=m??v;return h({value:e,tabValues:n})?e:null})();return(0,u.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:n}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),x(e)},[b,x,n]),tabValues:n}}(e);return(0,a.jsxs)("div",{className:(0,n.Z)("tabs-container",m),children:[(0,a.jsx)(v,{...r,...e}),(0,a.jsx)(x,{...r,...e})]})}function j(e){let r=(0,f.Z)();return(0,a.jsx)(g,{...e,children:p(e.children)},String(r))}},39661:function(e,r,t){t.d(r,{Z:function(){return u}});var a=t(85893);t(67294);var s=t(47902),n=t(5525),i=t(83012),l=t(45056);function u(e){let{pullRequest:r,branchSuffix:t}=e;return(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);