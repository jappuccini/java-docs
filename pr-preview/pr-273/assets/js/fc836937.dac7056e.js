"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1188"],{40693:function(e,r,t){t.r(r),t.d(r,{default:()=>x,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"exercises/operators/operators02","title":"Operators02","description":"","source":"@site/docs/exercises/operators/operators02.mdx","sourceDirName":"exercises/operators","slug":"/exercises/operators/operators02","permalink":"/java-docs/pr-preview/pr-273/exercises/operators/operators02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/operators/operators02.mdx","tags":[],"version":"current","frontMatter":{"title":"Operators02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Operators01","permalink":"/java-docs/pr-preview/pr-273/exercises/operators/operators01"},"next":{"title":"Operators03","permalink":"/java-docs/pr-preview/pr-273/exercises/operators/operators03"}}'),s=t("85893"),l=t("50065"),i=t("58168"),d=t("97645");let a={title:"Operators02",description:""},c=void 0,o={},h=[{value:"Coding",id:"coding",level:2}];function u(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"}),"\n",(0,s.jsx)(r.h2,{id:"coding",children:"Coding"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",metastring:"showLineNumbers",children:'int a = 0;\nint b = 0;\nint c = 0;\nint d = 5;\nint e = 3;\nint f = 4;\nint g = 0;\nint h = 2;\n\na = 3 * ++b;\nc = 3 * a++;\n\nd *= 6 + ++e;\ne = --f - 5 - f--;\nf = f + d % (e * 2);\n\ng = (h-- + 2) * (1 + --h);\n\nSystem.out.println("a: " + a);\nSystem.out.println("b: " + b);\nSystem.out.println("c: " + c);\nSystem.out.println("d: " + d);\nSystem.out.println("e: " + e);\nSystem.out.println("f: " + f);\nSystem.out.println("g: " + g);\nSystem.out.println("h: " + h);\n'})}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(d.Z,{value:"a",label:"-",default:!0}),(0,s.jsx)(d.Z,{value:"b",label:"a",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Zeile"}),(0,s.jsx)(r.th,{children:"Wert"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"a = 0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"a = 3 * 1 = 3"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"11"}),(0,s.jsx)(r.td,{children:"a = 3 + 1 = 4"})]})]})]})}),(0,s.jsx)(d.Z,{value:"c",label:"b",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Zeile"}),(0,s.jsx)(r.th,{children:"Wert"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2"}),(0,s.jsx)(r.td,{children:"b = 0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"b = 0 + 1 = 1"})]})]})]})}),(0,s.jsx)(d.Z,{value:"d",label:"c",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Zeile"}),(0,s.jsx)(r.th,{children:"Wert"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3"}),(0,s.jsx)(r.td,{children:"c = 0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"11"}),(0,s.jsx)(r.td,{children:"c = 3 * 3 = 9"})]})]})]})}),(0,s.jsx)(d.Z,{value:"e",label:"d",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Zeile"}),(0,s.jsx)(r.th,{children:"Wert"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"4"}),(0,s.jsx)(r.td,{children:"d = 5"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"13"}),(0,s.jsx)(r.td,{children:"d = 5 * (6 + 4) = 50"})]})]})]})}),(0,s.jsx)(d.Z,{value:"f",label:"e",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Zeile"}),(0,s.jsx)(r.th,{children:"Wert"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"5"}),(0,s.jsx)(r.td,{children:"e = 3"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"13"}),(0,s.jsx)(r.td,{children:"e = 3 + 1 = 4"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"14"}),(0,s.jsx)(r.td,{children:"e = 3 - 5 - 3 = -5"})]})]})]})}),(0,s.jsx)(d.Z,{value:"g",label:"f",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Zeile"}),(0,s.jsx)(r.th,{children:"Wert"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"6"}),(0,s.jsx)(r.td,{children:"f = 4"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"14"}),(0,s.jsx)(r.td,{children:"f = 4 - 1 = 3"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"14"}),(0,s.jsx)(r.td,{children:"f = 3 - 1 = 2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"15"}),(0,s.jsx)(r.td,{children:"f = 2 + 50 % (-5 * 2) = 2"})]})]})]})}),(0,s.jsx)(d.Z,{value:"h",label:"g",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Zeile"}),(0,s.jsx)(r.th,{children:"Wert"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"7"}),(0,s.jsx)(r.td,{children:"g = 0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"17"}),(0,s.jsx)(r.td,{children:"g = (2 + 2) * (1 + 0) = 4"})]})]})]})}),(0,s.jsx)(d.Z,{value:"i",label:"h",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Zeile"}),(0,s.jsx)(r.th,{children:"Wert"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"8"}),(0,s.jsx)(r.td,{children:"h = 0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"17"}),(0,s.jsx)(r.td,{children:"h = 2 - 1 = 1"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"17"}),(0,s.jsx)(r.td,{children:"h = 1 - 1 = 0"})]})]})]})})]})]})}function x(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},97645:function(e,r,t){t.d(r,{Z:()=>l});var n=t("85893");t("67294");var s=t("67026");function l(e){let{children:r,hidden:t,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",l),hidden:t,children:r})}},58168:function(e,r,t){t.d(r,{Z:()=>m});var n=t("85893"),s=t("67294"),l=t("67026"),i=t("34718"),d=t("16550"),a=t("8714"),c=t("89207"),o=t("69413"),h=t("54510");function u(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var j=t("6735");function p(e){let{className:r,block:t,selectedValue:s,selectValue:d,tabValues:a}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),h=e=>{let r=e.currentTarget,t=a[c.indexOf(r)].value;t!==s&&(o(r),d(t))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r),children:a.map(e=>{let{value:r,label:t,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{c.push(e)},onKeyDown:u,onClick:h,...i,className:(0,l.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":s===r}),children:t??r},r)})})}function f(e){let{lazy:r,children:t,selectedValue:i}=e,d=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=d.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:d.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function b(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,l=function(e){let{values:r,children:t}=e;return(0,s.useMemo)(()=>{let e=r??u(t).map(e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}});return!function(e){let r=(0,o.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,j]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:l})),[p,f]=function(e){let{queryString:r=!1,groupId:t}=e,n=(0,d.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c._X)(l),(0,s.useCallback)(e=>{if(!l)return;let r=new URLSearchParams(n.location.search);r.set(l,e),n.replace({...n.location,search:r.toString()})},[l,n])]}({queryString:t,groupId:n}),[b,m]=function(e){let{groupId:r}=e,t=r?`docusaurus.tab.${r}`:null,[n,l]=(0,h.Nk)(t);return[n,(0,s.useCallback)(e=>{t&&l.set(e)},[t,l])]}({groupId:n}),v=(()=>{let e=p??b;return x({value:e,tabValues:l})?e:null})();return(0,a.Z)(()=>{v&&j(v)},[v]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!x({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);j(e),f(e),m(e)},[f,m,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(p,{...r,...e}),(0,n.jsx)(f,{...r,...e})]})}function m(e){let r=(0,j.Z)();return(0,n.jsx)(b,{...e,children:u(e.children)},String(r))}},50065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return i}});var n=t(67294);let s={},l=n.createContext(s);function i(e){let r=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);