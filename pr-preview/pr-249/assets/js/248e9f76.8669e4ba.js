"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["724"],{3780:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>u});var a=JSON.parse('{"id":"exercises/lambdas/lambdas03","title":"Lambdas03","description":"","source":"@site/docs/exercises/lambdas/lambdas03.mdx","sourceDirName":"exercises/lambdas","slug":"/exercises/lambdas/lambdas03","permalink":"/java-docs/pr-preview/pr-249/exercises/lambdas/lambdas03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas03.mdx","tags":[],"version":"current","frontMatter":{"title":"Lambdas03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Lambdas02","permalink":"/java-docs/pr-preview/pr-249/exercises/lambdas/lambdas02"},"next":{"title":"Lambdas04","permalink":"/java-docs/pr-preview/pr-249/exercises/lambdas/lambdas04"}}'),n=r("85893"),s=r("50065"),i=r("17490");let l={title:"Lambdas03",description:""},u=void 0,o={},c=[];function d(e){let t={a:"a",code:"code",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Passe die Klasse ",(0,n.jsx)(t.code,{children:"FilteredStudents"})," so an, dass Verwender der Klasse selber\nentscheiden k\xf6nnen, wie die Studentenliste verarbeitet werden soll. Ersetze\nhierzu die Methode ",(0,n.jsx)(t.code,{children:"void printStudents()"})," durch die Methode\n",(0,n.jsx)(t.code,{children:"void forEach(consumer: Consumer<Student>)"}),". Implementiere in der Methode eine\nSchleife, in der f\xfcr jeden Studenten die Methode ",(0,n.jsx)(t.code,{children:"void accept(t: T)"})," des\neingehenden Verwenders aufgerufen wird"]}),"\n",(0,n.jsxs)(t.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,n.jsx)(t.a,{href:"lambdas02",children:"Lambdas02"})," so an,\ndass vollj\xe4hrige Studenten in Gro\xdfbuchstaben und minderj\xe4hrige Studenten in\nKleinbuchstaben auf der Konsole ausgegeben werden"]}),"\n"]}),"\n",(0,n.jsx)(i.Z,{pullRequest:"69",branchSuffix:"lambdas/03"})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97645:function(e,t,r){r.d(t,{Z:()=>s});var a=r("85893");r("67294");var n=r("67026");function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",s),hidden:r,children:t})}},58168:function(e,t,r){r.d(t,{Z:()=>x});var a=r("85893"),n=r("67294"),s=r("67026"),i=r("34718"),l=r("16550"),u=r("8714"),o=r("89207"),c=r("69413"),d=r("54510");function h(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var b=r("6735");function m(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let t=e.currentTarget,r=u[o.indexOf(t)].value;r!==n&&(c(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1]}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:u.map(e=>{let{value:t,label:r,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":n===t}),children:r??t},t)})})}function f(e){let{lazy:t,children:r,selectedValue:i}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===i);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:a}=e,s=function(e){let{values:t,children:r}=e;return(0,n.useMemo)(()=>{let e=t??h(r).map(e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[i,b]=(0,n.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:s})),[m,f]=function(e){let{queryString:t=!1,groupId:r}=e,a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,n.useCallback)(e=>{if(!s)return;let t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})},[s,a])]}({queryString:r,groupId:a}),[v,x]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[a,s]=(0,d.Nk)(r);return[a,(0,n.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:a}),j=(()=>{let e=m??v;return p({value:e,tabValues:s})?e:null})();return(0,u.Z)(()=>{j&&b(j)},[j]),{selectedValue:i,selectValue:(0,n.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);b(e),f(e),x(e)},[f,x,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(m,{...t,...e}),(0,a.jsx)(f,{...t,...e})]})}function x(e){let t=(0,b.Z)();return(0,a.jsx)(v,{...e,children:h(e.children)},String(t))}},17490:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(85893);r(67294);var n=r(58168),s=r(97645),i=r(53367),l=r(31705);function u(e){let{pullRequest:t,branchSuffix:r}=e;return(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);