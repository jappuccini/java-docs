"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8288"],{28576:function(e,r,a){a.r(r),a.d(r,{default:()=>p,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>u});var t=JSON.parse('{"id":"exercises/arrays/arrays04","title":"Arrays04","description":"","source":"@site/docs/exercises/arrays/arrays04.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays04","permalink":"/java-docs/pr-preview/pr-284/exercises/arrays/arrays04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays04.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Arrays03","permalink":"/java-docs/pr-preview/pr-284/exercises/arrays/arrays03"},"next":{"title":"Arrays05","permalink":"/java-docs/pr-preview/pr-284/exercises/arrays/arrays05"}}'),s=a("85893"),n=a("50065"),i=a("17490");let l={title:"Arrays04",description:""},u=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:'Erstelle eine ausf\xfchrbare Klasse, welche zwei "Bin\xe4rzahlen" aufsummiert und das\nErgebnis auf dem Bildschirm ausgibt.'}),"\n",(0,s.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-console",children:"  10010110\n+ 01100101\n= 11111011\n"})}),"\n",(0,s.jsx)(i.Z,{pullRequest:"21",branchSuffix:"arrays/04"})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,r,a){a.d(r,{Z:()=>n});var t=a("85893");a("67294");var s=a("67026");function n(e){let{children:r,hidden:a,className:n}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",n),hidden:a,children:r})}},58168:function(e,r,a){a.d(r,{Z:()=>x});var t=a("85893"),s=a("67294"),n=a("67026"),i=a("34718"),l=a("16550"),u=a("8714"),o=a("89207"),c=a("69413"),d=a("54510");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:a}=e;return a.some(e=>e.value===r)}var f=a("6735");function m(e){let{className:r,block:a,selectedValue:s,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,a=u[o.indexOf(r)].value;a!==s&&(c(r),l(a))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=o.indexOf(e.currentTarget)+1;r=o[a]??o[0];break}case"ArrowLeft":{let a=o.indexOf(e.currentTarget)-1;r=o[a]??o[o.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},r),children:u.map(e=>{let{value:r,label:a,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{o.push(e)},onKeyDown:p,onClick:d,...i,className:(0,n.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":s===r}),children:a??r},r)})})}function b(e){let{lazy:r,children:a,selectedValue:i}=e,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:a=!1,groupId:t}=e,n=function(e){let{values:r,children:a}=e;return(0,s.useMemo)(()=>{let e=r??p(a).map(e=>{let{props:{value:r,label:a,attributes:t,default:s}}=e;return{value:r,label:a,attributes:t,default:s}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,a])}(e),[i,f]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:n})),[m,b]=function(e){let{queryString:r=!1,groupId:a}=e,t=(0,l.k6)(),n=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,o._X)(n),(0,s.useCallback)(e=>{if(!n)return;let r=new URLSearchParams(t.location.search);r.set(n,e),t.replace({...t.location,search:r.toString()})},[n,t])]}({queryString:a,groupId:t}),[v,x]=function(e){let{groupId:r}=e,a=r?`docusaurus.tab.${r}`:null,[t,n]=(0,d.Nk)(a);return[t,(0,s.useCallback)(e=>{a&&n.set(e)},[a,n])]}({groupId:t}),g=(()=>{let e=m??v;return h({value:e,tabValues:n})?e:null})();return(0,u.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:n}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),x(e)},[b,x,n]),tabValues:n}}(e);return(0,t.jsxs)("div",{className:(0,n.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(m,{...r,...e}),(0,t.jsx)(b,{...r,...e})]})}function x(e){let r=(0,f.Z)();return(0,t.jsx)(v,{...e,children:p(e.children)},String(r))}},17490:function(e,r,a){a.d(r,{Z:function(){return u}});var t=a(85893);a(67294);var s=a(58168),n=a(97645),i=a(53367),l=a(31705);function u(e){let{pullRequest:r,branchSuffix:a}=e;return(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch exercises/${a}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch solutions/${a}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);