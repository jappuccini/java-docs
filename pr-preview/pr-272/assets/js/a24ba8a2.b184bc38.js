"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2213"],{92922:function(e,r,t){t.r(r),t.d(r,{default:()=>d,frontMatter:()=>i,metadata:()=>a,assets:()=>u,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"exercises/operators/operators01","title":"Operators01","description":"","source":"@site/docs/exercises/operators/operators01.mdx","sourceDirName":"exercises/operators","slug":"/exercises/operators/operators01","permalink":"/java-docs/pr-preview/pr-272/exercises/operators/operators01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/operators/operators01.mdx","tags":[],"version":"current","frontMatter":{"title":"Operators01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Operatoren","permalink":"/java-docs/pr-preview/pr-272/exercises/operators/"},"next":{"title":"Operators02","permalink":"/java-docs/pr-preview/pr-272/exercises/operators/operators02"}}'),n=t("85893"),s=t("50065"),o=t("17490");let i={title:"Operators01",description:""},l=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function p(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den ganzzahligen Quotienten sowie den\nDivisionsrest einer Division auf der Konsole ausgibt."}),"\n",(0,n.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",children:"a: 13\nb: 4\nGanzzahliger Quotient von a/b: 3\nDivisionsrest von a/b: 1\n"})}),"\n",(0,n.jsx)(o.Z,{pullRequest:"4",branchSuffix:"operators/01"})]})}function d(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},97645:function(e,r,t){t.d(r,{Z:()=>s});var a=t("85893");t("67294");var n=t("67026");function s(e){let{children:r,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",s),hidden:t,children:r})}},58168:function(e,r,t){t.d(r,{Z:()=>x});var a=t("85893"),n=t("67294"),s=t("67026"),o=t("34718"),i=t("16550"),l=t("8714"),u=t("89207"),c=t("69413"),p=t("54510");function d(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var f=t("6735");function v(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:l}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{let r=e.currentTarget,t=l[u.indexOf(r)].value;t!==n&&(c(r),i(t))},d=e=>{let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:l.map(e=>{let{value:r,label:t,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>{u.push(e)},onKeyDown:d,onClick:p,...o,className:(0,s.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":n===r}),children:t??r},r)})})}function b(e){let{lazy:r,children:t,selectedValue:o}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===o);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o}))})}function m(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:a}=e,s=function(e){let{values:r,children:t}=e;return(0,n.useMemo)(()=>{let e=r??d(t).map(e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[o,f]=(0,n.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:s})),[v,b]=function(e){let{queryString:r=!1,groupId:t}=e,a=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(s),(0,n.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})},[s,a])]}({queryString:t,groupId:a}),[m,x]=function(e){let{groupId:r}=e,t=r?`docusaurus.tab.${r}`:null,[a,s]=(0,p.Nk)(t);return[a,(0,n.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:a}),g=(()=>{let e=v??m;return h({value:e,tabValues:s})?e:null})();return(0,l.Z)(()=>{g&&f(g)},[g]),{selectedValue:o,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),x(e)},[b,x,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(v,{...r,...e}),(0,a.jsx)(b,{...r,...e})]})}function x(e){let r=(0,f.Z)();return(0,a.jsx)(m,{...e,children:d(e.children)},String(r))}},17490:function(e,r,t){t.d(r,{Z:function(){return l}});var a=t(85893);t(67294);var n=t(58168),s=t(97645),o=t(53367),i=t(31705);function l(e){let{pullRequest:r,branchSuffix:t}=e;return(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(i.Z,{language:"console",children:`git switch exercises/${t}`}),(0,a.jsx)(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(i.Z,{language:"console",children:`git switch solutions/${t}`}),(0,a.jsx)(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(o.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);