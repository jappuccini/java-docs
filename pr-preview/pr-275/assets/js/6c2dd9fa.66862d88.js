"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2306"],{83194:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>h,contentTitle:()=>u});var n=JSON.parse('{"id":"exercises/hashing/hashing01","title":"Hashing01","description":"","source":"@site/docs/exercises/hashing/hashing01.mdx","sourceDirName":"exercises/hashing","slug":"/exercises/hashing/hashing01","permalink":"/java-docs/pr-preview/pr-275/exercises/hashing/hashing01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/hashing/hashing01.mdx","tags":[],"version":"current","frontMatter":{"title":"Hashing01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Schl\xfcsseltransformationen (Hashing)","permalink":"/java-docs/pr-preview/pr-275/exercises/hashing/"},"next":{"title":"Hashing02","permalink":"/java-docs/pr-preview/pr-275/exercises/hashing/hashing02"}}'),a=t("85893"),s=t("50065"),i=t("58168"),l=t("97645");let o={title:"Hashing01",description:""},u=void 0,c={},h=[];function d(e){let r={code:"code",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["Berechne die Hashwerte der Objekte ",(0,a.jsx)(r.code,{children:"Person[name=Petra, age=33, gender=w]"}),",\n",(0,a.jsx)(r.code,{children:"Person[name=Heidi, age=17, gender=w]"})," und ",(0,a.jsx)(r.code,{children:"Person[name=Max, age=47, gender=m]"}),"\ngem\xe4\xdf der Formel ",(0,a.jsx)(r.code,{children:"Hashwert Name / Hashwert Alter + Hashwert Geschlecht"}),"."]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"-",default:!0}),(0,a.jsx)(l.Z,{value:"b",label:"Hashwert 1",children:(0,a.jsx)(r.p,{children:"(80 + 101 + 116 + 114 + 97) / 33 + 119 = 134"})}),(0,a.jsx)(l.Z,{value:"c",label:"Hashwert 2",children:(0,a.jsx)(r.p,{children:"(72 + 101 + 105 + 100 + 105) / 17 + 119 = 147"})}),(0,a.jsx)(l.Z,{value:"d",label:"Hashwert 3",children:(0,a.jsx)(r.p,{children:"(77 + 97 + 120) / 47 + 109 = 115"})})]})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97645:function(e,r,t){t.d(r,{Z:()=>s});var n=t("85893");t("67294");var a=t("67026");function s(e){let{children:r,hidden:t,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",s),hidden:t,children:r})}},58168:function(e,r,t){t.d(r,{Z:()=>g});var n=t("85893"),a=t("67294"),s=t("67026"),i=t("34718"),l=t("16550"),o=t("8714"),u=t("89207"),c=t("69413"),h=t("54510");function d(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var f=t("6735");function m(e){let{className:r,block:t,selectedValue:a,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),h=e=>{let r=e.currentTarget,t=o[u.indexOf(r)].value;t!==a&&(c(r),l(t))},d=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:o.map(e=>{let{value:r,label:t,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{u.push(e)},onKeyDown:d,onClick:h,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===r}),children:t??r},r)})})}function v(e){let{lazy:r,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function b(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,s=function(e){let{values:r,children:t}=e;return(0,a.useMemo)(()=>{let e=r??d(t).map(e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,f]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:s})),[m,v]=function(e){let{queryString:r=!1,groupId:t}=e,n=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(s),(0,a.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})},[s,n])]}({queryString:t,groupId:n}),[b,g]=function(e){let{groupId:r}=e,t=r?`docusaurus.tab.${r}`:null,[n,s]=(0,h.Nk)(t);return[n,(0,a.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:n}),x=(()=>{let e=m??b;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{x&&f(x)},[x]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),g(e)},[v,g,s]),tabValues:s}}(e);return(0,n.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(m,{...r,...e}),(0,n.jsx)(v,{...r,...e})]})}function g(e){let r=(0,f.Z)();return(0,n.jsx)(b,{...e,children:d(e.children)},String(r))}},50065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return i}});var n=t(67294);let a={},s=n.createContext(a);function i(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);