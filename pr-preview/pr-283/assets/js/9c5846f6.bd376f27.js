"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5574"],{98683:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>u});var a=JSON.parse('{"id":"exercises/lambdas/lambdas04","title":"Lambdas04","description":"","source":"@site/docs/exercises/lambdas/lambdas04.mdx","sourceDirName":"exercises/lambdas","slug":"/exercises/lambdas/lambdas04","permalink":"/java-docs/pr-preview/pr-283/exercises/lambdas/lambdas04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas04.mdx","tags":[],"version":"current","frontMatter":{"title":"Lambdas04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Lambdas03","permalink":"/java-docs/pr-preview/pr-283/exercises/lambdas/lambdas03"},"next":{"title":"Lambdas05","permalink":"/java-docs/pr-preview/pr-283/exercises/lambdas/lambdas05"}}'),n=r("85893"),s=r("50065"),l=r("17490");let i={title:"Lambdas04",description:""},u=void 0,o={},c=[];function d(e){let t={code:"code",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"It\xb4s a Bug! Steffen der Schlingel hat gelogen und ist 17 Jahre alt. Das Alter\nwurde aber erst ge\xe4ndert, nachdem er schon der Liste mit den erwachsenden\nStudenten hinzugef\xfcgt wurde."}),"\n",(0,n.jsxs)(t.p,{children:["Passe die Methode ",(0,n.jsx)(t.code,{children:"void forEach(consumer: Consumer<Student>)"})," der gegebenen\nKlasse ",(0,n.jsx)(t.code,{children:"FilteredStudents"})," so an, dass vor dem Aufruf der Methode\n",(0,n.jsx)(t.code,{children:"void accept(t: T)"})," \xfcberpr\xfcft wird, ob der Student wirklich verarbeitet werden\ndarf."]}),"\n",(0,n.jsx)(l.Z,{pullRequest:"70",branchSuffix:"lambdas/04"})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97645:function(e,t,r){r.d(t,{Z:()=>s});var a=r("85893");r("67294");var n=r("67026");function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",s),hidden:r,children:t})}},58168:function(e,t,r){r.d(t,{Z:()=>x});var a=r("85893"),n=r("67294"),s=r("67026"),l=r("34718"),i=r("16550"),u=r("8714"),o=r("89207"),c=r("69413"),d=r("54510");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var m=r("6735");function f(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let t=e.currentTarget,r=u[o.indexOf(t)].value;r!==n&&(c(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1]}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:u.map(e=>{let{value:t,label:r,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:p,onClick:d,...l,className:(0,s.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":n===t}),children:r??t},t)})})}function b(e){let{lazy:t,children:r,selectedValue:l}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===l);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:a}=e,s=function(e){let{values:t,children:r}=e;return(0,n.useMemo)(()=>{let e=t??p(r).map(e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[l,m]=(0,n.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:s})),[f,b]=function(e){let{queryString:t=!1,groupId:r}=e,a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,n.useCallback)(e=>{if(!s)return;let t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})},[s,a])]}({queryString:r,groupId:a}),[v,x]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[a,s]=(0,d.Nk)(r);return[a,(0,n.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:a}),g=(()=>{let e=f??v;return h({value:e,tabValues:s})?e:null})();return(0,u.Z)(()=>{g&&m(g)},[g]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);m(e),b(e),x(e)},[b,x,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(f,{...t,...e}),(0,a.jsx)(b,{...t,...e})]})}function x(e){let t=(0,m.Z)();return(0,a.jsx)(v,{...e,children:p(e.children)},String(t))}},17490:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(85893);r(67294);var n=r(58168),s=r(97645),l=r(53367),i=r(31705);function u(e){let{pullRequest:t,branchSuffix:r}=e;return(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(i.Z,{language:"console",children:`git switch exercises/${r}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(i.Z,{language:"console",children:`git switch solutions/${r}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);