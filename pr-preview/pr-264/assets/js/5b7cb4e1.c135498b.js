"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7610"],{66330:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>u});var r=JSON.parse('{"id":"documentation/abstract-and-final","title":"Abstrakte und finale Klassen und Methoden","description":"","source":"@site/docs/documentation/abstract-and-final.mdx","sourceDirName":"documentation","slug":"/documentation/abstract-and-final","permalink":"/java-docs/pr-preview/pr-264/documentation/abstract-and-final","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/abstract-and-final.mdx","tags":[{"inline":true,"label":"abstract","permalink":"/java-docs/pr-preview/pr-264/tags/abstract"},{"inline":true,"label":"final","permalink":"/java-docs/pr-preview/pr-264/tags/final"}],"version":"current","sidebarPosition":200,"frontMatter":{"title":"Abstrakte und finale Klassen und Methoden","description":"","sidebar_position":200,"tags":["abstract","final"]},"sidebar":"documentationSidebar","previous":{"title":"Die Mutter aller Klassen","permalink":"/java-docs/pr-preview/pr-264/documentation/object"},"next":{"title":"Schnittstellen (Interfaces)","permalink":"/java-docs/pr-preview/pr-264/documentation/interfaces"}}'),a=t("85893"),i=t("50065"),s=t("58168"),l=t("97645");let o={title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:200,tags:["abstract","final"]},u=void 0,c={},d=[];function p(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Mit Hilfe der Schl\xfcsselw\xf6rter ",(0,a.jsx)(n.code,{children:"abstract"})," und ",(0,a.jsx)(n.code,{children:"final"})," kann die Verwendung von\nKlassen vorgegeben bzw. eingesch\xe4nkt werden:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Abstrakte Klassen k\xf6nnen nicht instanziiert werden"}),"\n",(0,a.jsx)(n.li,{children:"Abstrakte Methoden werden in abstrakten Klassen definiert, besitzen dort\nkeinen Methodenrumpf und m\xfcssen in den abgeleiteten Klassen der abstrakten\nKlasse \xfcberschrieben werden"}),"\n",(0,a.jsx)(n.li,{children:"Finale Klassen k\xf6nnen nicht abgeleitet werden"}),"\n",(0,a.jsx)(n.li,{children:"Finale Methoden k\xf6nnen nicht \xfcberschrieben werden"}),"\n"]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"Abstrakte Klasse mit abstrakter und finaler Methode",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public abstract class Computer {\n   ...\n   public abstract ArrayList<String> getSpecification();\n\n   public final Cpu getCpu() {\n     return cpu;\n   }\n   ...\n}\n"})})}),(0,a.jsx)(l.Z,{value:"b",label:"Finale Klasse",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Notebook.java (Auszug)" showLineNumbers',children:'public final class Notebook extends Computer {\n   ...\n   @Override\n   public ArrayList<String> getSpecification() {\n      ArrayList<String> specification = new ArrayList<>();\n      specification.add("description: " + description);\n      specification.add("cpu: " + cpu);\n      specification.add("memoryInGb: " + memoryInGb);\n      specification.add("screenSizeInInches: " + screenSizeInInches);\n      return specification;\n   }\n\n   @Override\n   public Cpu getCpu() {...} // Kompilierungsfehler\n   ...\n}\n'})})}),(0,a.jsx)(l.Z,{value:"c",label:"Startklasse",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass extends Notebook { // Kompilierungsfehler\n\n   public static void main(String[] args) {\n      Computer computer = new Computer("Mein Office PC"); // Kompilierungsfehler\n   }\n\n}\n'})})})]})]})}function f(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},97645:function(e,n,t){t.d(n,{Z:()=>i});var r=t("85893");t("67294");var a=t("67026");function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",i),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>g});var r=t("85893"),a=t("67294"),i=t("67026"),s=t("34718"),l=t("16550"),o=t("8714"),u=t("89207"),c=t("69413"),d=t("54510");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var b=t("6735");function m(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let n=e.currentTarget,t=o[u.indexOf(n)].value;t!==a&&(c(n),l(t))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function h(e){let{lazy:n,children:t,selectedValue:s}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,i=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??p(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[s,b]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[m,h]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(i),(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:t,groupId:r}),[v,g]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,i]=(0,d.Nk)(t);return[r,(0,a.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:r}),j=(()=>{let e=m??v;return f({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{j&&b(j)},[j]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!f({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);b(e),h(e),g(e)},[h,g,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(m,{...n,...e}),(0,r.jsx)(h,{...n,...e})]})}function g(e){let n=(0,b.Z)();return(0,r.jsx)(v,{...e,children:p(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(67294);let a={},i=r.createContext(a);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);