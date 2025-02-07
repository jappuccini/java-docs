"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1229"],{52210:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>o});var r=JSON.parse('{"id":"exercises/console-applications/console-applications02","title":"ConsoleApplications02","description":"","source":"@site/docs/exercises/console-applications/console-applications02.mdx","sourceDirName":"exercises/console-applications","slug":"/exercises/console-applications/console-applications02","permalink":"/java-docs/pr-preview/pr-261/exercises/console-applications/console-applications02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/console-applications/console-applications02.mdx","tags":[],"version":"current","frontMatter":{"title":"ConsoleApplications02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"ConsoleApplications01","permalink":"/java-docs/pr-preview/pr-261/exercises/console-applications/console-applications01"},"next":{"title":"Verzweigungen","permalink":"/java-docs/pr-preview/pr-261/exercises/cases/"}}'),a=t("85893"),s=t("50065"),i=t("17490");let l={title:"ConsoleApplications02",description:""},o=void 0,c={},u=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function p(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Ganzzahlen von der Konsole\neinliest, den prozentualen Anteil der ersten von der zweiten Ganzzahl berechnet\nund das Ergebnis auf der Konsole ausgibt."}),"\n",(0,a.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Gib bitte eine ganze Zahl ein: 5\nGib bitte eine weitere ganze Zahl ein: 50\nEregbnis: 5 von 50 sind 10,00%\n"})}),"\n",(0,a.jsx)(i.Z,{pullRequest:"6",branchSuffix:"console-applications/02"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},97645:function(e,n,t){t.d(n,{Z:()=>s});var r=t("85893");t("67294");var a=t("67026");function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",s),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>g});var r=t("85893"),a=t("67294"),s=t("67026"),i=t("34718"),l=t("16550"),o=t("8714"),c=t("89207"),u=t("69413"),p=t("54510");function d(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var f=t("6735");function b(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==a&&(u(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{c.push(e)},onKeyDown:d,onClick:p,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function v(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function m(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??d(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,f]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[b,v]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,a.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,s]=(0,p.Nk)(t);return[r,(0,a.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),x=(()=>{let e=b??m;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{x&&f(x)},[x]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),g(e)},[v,g,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(b,{...n,...e}),(0,r.jsx)(v,{...n,...e})]})}function g(e){let n=(0,f.Z)();return(0,r.jsx)(m,{...e,children:d(e.children)},String(n))}},17490:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(85893);t(67294);var a=t(58168),s=t(97645),i=t(53367),l=t(31705);function o(e){let{pullRequest:n,branchSuffix:t}=e;return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);