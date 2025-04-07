"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9577"],{48424:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>l,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>u});var a=JSON.parse('{"id":"exercises/lambdas/lambdas05","title":"Lambdas05","description":"","source":"@site/docs/exercises/lambdas/lambdas05.mdx","sourceDirName":"exercises/lambdas","slug":"/exercises/lambdas/lambdas05","permalink":"/java-docs/pr-preview/pr-286/exercises/lambdas/lambdas05","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas05.mdx","tags":[],"version":"current","frontMatter":{"title":"Lambdas05","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Lambdas04","permalink":"/java-docs/pr-preview/pr-286/exercises/lambdas/lambdas04"},"next":{"title":"Generische Programmierung","permalink":"/java-docs/pr-preview/pr-286/exercises/generics/"}}'),s=t("85893"),n=t("50065"),i=t("17490");let l={title:"Lambdas05",description:""},u=void 0,o={},c=[];function d(e){let r={a:"a",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,s.jsx)(r.a,{href:"../inner-classes/inner-classes04",children:"InnerClasse04"})," so an, dass die\nKoordinatenliste mit Hilfe eines Lambda-Ausdruckes absteigend nach den X-Werten\nsortiert wird."]}),"\n",(0,s.jsx)(i.Z,{pullRequest:"74",branchSuffix:"lambdas/05"})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,r,t){t.d(r,{Z:()=>n});var a=t("85893");t("67294");var s=t("67026");function n(e){let{children:r,hidden:t,className:n}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",n),hidden:t,children:r})}},58168:function(e,r,t){t.d(r,{Z:()=>x});var a=t("85893"),s=t("67294"),n=t("67026"),i=t("34718"),l=t("16550"),u=t("8714"),o=t("89207"),c=t("69413"),d=t("54510");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var m=t("6735");function f(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,t=u[o.indexOf(r)].value;t!==s&&(c(r),l(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:u.map(e=>{let{value:r,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{o.push(e)},onKeyDown:p,onClick:d,...i,className:(0,n.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":s===r}),children:t??r},r)})})}function b(e){let{lazy:r,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:a}=e,n=function(e){let{values:r,children:t}=e;return(0,s.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:a,default:s}}=e;return{value:r,label:t,attributes:a,default:s}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,m]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:n})),[f,b]=function(e){let{queryString:r=!1,groupId:t}=e,a=(0,l.k6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o._X)(n),(0,s.useCallback)(e=>{if(!n)return;let r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})},[n,a])]}({queryString:t,groupId:a}),[v,x]=function(e){let{groupId:r}=e,t=r?`docusaurus.tab.${r}`:null,[a,n]=(0,d.Nk)(t);return[a,(0,s.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:a}),g=(()=>{let e=f??v;return h({value:e,tabValues:n})?e:null})();return(0,u.Z)(()=>{g&&m(g)},[g]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:n}))throw Error(`Can't select invalid tab value=${e}`);m(e),b(e),x(e)},[b,x,n]),tabValues:n}}(e);return(0,a.jsxs)("div",{className:(0,n.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(f,{...r,...e}),(0,a.jsx)(b,{...r,...e})]})}function x(e){let r=(0,m.Z)();return(0,a.jsx)(v,{...e,children:p(e.children)},String(r))}},17490:function(e,r,t){t.d(r,{Z:function(){return u}});var a=t(85893);t(67294);var s=t(58168),n=t(97645),i=t(53367),l=t(31705);function u(e){let{pullRequest:r,branchSuffix:t}=e;return(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);