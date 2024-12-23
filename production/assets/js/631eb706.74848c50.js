"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2852"],{1624:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>c,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"documentation/lombok","title":"Lombok","description":"","source":"@site/docs/documentation/lombok.mdx","sourceDirName":"documentation","slug":"/documentation/lombok","permalink":"/java-docs/production/documentation/lombok","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/lombok.mdx","tags":[{"inline":true,"label":"lombok","permalink":"/java-docs/production/tags/lombok"}],"version":"current","sidebarPosition":255,"frontMatter":{"title":"Lombok","description":"","sidebar_position":255,"tags":["lombok"]},"sidebar":"documentationSidebar","previous":{"title":"Maven","permalink":"/java-docs/production/documentation/maven"},"next":{"title":"Simple Logging Facade for Java (SLF4J)","permalink":"/java-docs/production/documentation/slf4j"}}'),i=n("85893"),a=n("50065"),l=n("47902"),o=n("5525");let s={title:"Lombok",description:"",sidebar_position:255,tags:["lombok"]},d=void 0,c={},u=[{value:"Annotationen",id:"annotationen",level:2},{value:"Beispiel",id:"beispiel",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://projectlombok.org/",children:"Lombok"})," stellt eine externe Java-Bibliothek dar,\ndie das Erstellen von Boilerplate-Code \xfcberfl\xfcssig macht. Repetitive Methoden\nwie Konstruktoren, Getter, Setter und die Objekt-Methoden m\xfcssen nicht manuell\nimplementiert werden, sondern werden beim Kompilieren generiert."]}),"\n",(0,i.jsx)(t.h2,{id:"annotationen",children:"Annotationen"}),"\n",(0,i.jsx)(t.p,{children:"Durch entsprechende Annotationen kann gesteuert werden, welche Methoden wie\ngeneriert werden sollen."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Annotation"}),(0,i.jsx)(t.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"@RequiredArgsConstructor"})}),(0,i.jsx)(t.td,{children:"Generiert einen Konstruktor mit Parametern zu allen unver\xe4nderlichen Attributen"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"@AllArgsConstructor"})}),(0,i.jsx)(t.td,{children:"Generiert einen Konstruktor mit Parametern zu allen Attributen"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"@Getter"})}),(0,i.jsx)(t.td,{children:"Generiert Get-Methoden zu allen Attributen"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"@Setter"})}),(0,i.jsx)(t.td,{children:"Generiert Set-Methoden zu allen ver\xe4nderlichen Attributen"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"@EqualsAndHashCode"})}),(0,i.jsxs)(t.td,{children:["Generiert Implementierungen f\xfcr die Methoden ",(0,i.jsx)(t.code,{children:"boolean equals(object: Object)"})," und ",(0,i.jsx)(t.code,{children:"int hashCode()"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"@ToString"})}),(0,i.jsxs)(t.td,{children:["Generiert eine Implementierung f\xfcr die Methode ",(0,i.jsx)(t.code,{children:"String toString()"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"@Data"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"@RequiredArgsConstructor"})," + ",(0,i.jsx)(t.code,{children:"@Getter"})," + ",(0,i.jsx)(t.code,{children:"@Setter"})," + ",(0,i.jsx)(t.code,{children:"@EqualsAndHashCode"})," + ",(0,i.jsx)(t.code,{children:"@ToString"})]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsxs)(t.p,{children:["F\xfcr die Klasse ",(0,i.jsx)(t.code,{children:"Student"})," werden mit Hilfe von Lombok-Annotationen Konstruktoren,\nSetter und Getter sowie die Object-Methoden generiert."]}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(o.Z,{value:"a",label:"Fachklasse",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"@RequiredArgsConstructor\n@AllArgsConstructor\n@Getter\n@Setter\n@EqualsAndHashCode\n@ToString\npublic class Student {\n\n  public final int id;\n  public final String name;\n  public double averageGrade;\n\n}\n"})})}),(0,i.jsx)(o.Z,{value:"b",label:"Startklasse",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n\n    Student student1 = new Student("8172534", "Hans Maier");\n    student1.setAverageGrade(2.2);\n    System.out.println(student1.getName());\n\n    Student student2 = new Student("9167121", "Lisa M\xfcller", 1.8);\n    System.out.println(student2);\n\n  }\n\n}\n'})})})]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5525:function(e,t,n){n.d(t,{Z:()=>l});var r=n("85893");n("67294");var i=n("67026");let a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a,l),hidden:n,children:t})}},47902:function(e,t,n){n.d(t,{Z:()=>g});var r=n("85893"),i=n("67294"),a=n("67026"),l=n("69599"),o=n("16550"),s=n("32000"),d=n("4520"),c=n("38341"),u=n("76009");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var p=n("7227");let b="tabList__CuJ",j="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:s}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{let t=e.currentTarget,n=s[d.indexOf(t)].value;n!==i&&(c(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:h,onClick:u,...l,className:(0,a.Z)("tabs__item",j,l?.className,{"tabs__item--active":i===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:l}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,i.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,p]=(0,i.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[b,j]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,d._X)(a);return[l,(0,i.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:n,groupId:r}),[f,x]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[a,l]=(0,u.Nk)(r);return[a,(0,i.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),v=(()=>{let e=b??f;return m({value:e,tabValues:a})?e:null})();return(0,s.Z)(()=>{v&&p(v)},[v]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),j(e),x(e)},[j,x,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",b),children:[(0,r.jsx)(f,{...t,...e}),(0,r.jsx)(x,{...t,...e})]})}function g(e){let t=(0,p.Z)();return(0,r.jsx)(v,{...e,children:h(e.children)},String(t))}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(67294);let i={},a=r.createContext(i);function l(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);