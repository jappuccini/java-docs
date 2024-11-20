"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2874"],{57307:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>u,toc:()=>p,frontMatter:()=>l});var r=JSON.parse('{"id":"documentation/polymorphy","title":"(Dynamische) Polymorphie","description":"","source":"@site/docs/documentation/polymorphy.mdx","sourceDirName":"documentation","slug":"/documentation/polymorphy","permalink":"/java-docs/pr-preview/pr-224/documentation/polymorphy","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/polymorphy.mdx","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-224/tags/oo"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-224/tags/polymorphism"}],"version":"current","sidebarPosition":180,"frontMatter":{"title":"(Dynamische) Polymorphie","description":"","sidebar_position":180,"tags":["oo","polymorphism"]},"sidebar":"documentationSidebar","previous":{"title":"Vererbung","permalink":"/java-docs/pr-preview/pr-224/documentation/inheritance"},"next":{"title":"Die Mutter aller Klassen","permalink":"/java-docs/pr-preview/pr-224/documentation/object"}}'),i=t("85893"),a=t("50065"),o=t("47902"),s=t("5525");let l={title:"(Dynamische) Polymorphie",description:"",sidebar_position:180,tags:["oo","polymorphism"]},c=void 0,u={},p=[{value:"Der instanceof-Operator",id:"der-instanceof-operator",level:2}];function d(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Unter (dynamischer) Polymorphie (griechisch f\xfcr Vielgestaltigkeit) versteht man,\ndass eine Referenzvariable zur Laufzeit durch Typumwandlung Referenzen auf\nObjekte unterschiedlicher Klassen besitzen kann und dass dadurch\nunterschiedliche Methodenimplementierungen aufgerufen werden k\xf6nnen. Man spricht\nin diesem Zusammenhang auch vom ",(0,i.jsx)(n.em,{children:"statischen Datentyp einer Referenzvariablen"}),"\n(der zur Designzeit festgelegt wird) und vom ",(0,i.jsx)(n.em,{children:"dynamischen Datentyp einer\nReferenzvariablen"})," (der zur Laufzeit zugewiesen wird). Der statische Typ legt\nfest, welche Methoden aufgerufen werden k\xf6nnen, der dynamische, welche\nMethodenimplementierung aufgerufen wird. Die Typumwandlung von der abgeleiteten\nUnterklasse zur Oberklasse bezeichnet man als ",(0,i.jsx)(n.em,{children:"Upcast"}),", die R\xfcckumwandlung als\n",(0,i.jsx)(n.em,{children:"Downcast"}),"."]}),"\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(s.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:'public class Computer {\n  ...\n  public ArrayList<String> getSpecification() {\n    ArrayList<String> specification = new ArrayList<>();\n    specification.add("description: " + description);\n    specification.add("cpu: " + cpu);\n    specification.add("memoryInGB: " + memoryInGB);\n    return specification;\n  }\n  ...\n}\n'})})}),(0,i.jsx)(s.Z,{value:"b",label:"Unterklasse",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Notebook.java (Auszug)" showLineNumbers',children:'public class Notebook extends Computer {\n  ...\n  public Notebook(String description, CPU cpu, int memoryInGB, double screenSizeInInches) {\n    super(description, cpu, mainMemoryInGB);\n    this.screenSizeInInches = screenSizeInInches;\n  }\n\n  public double getScreenSizeInInches() {\n    return screenSizeInInches;\n  }\n\n  @Override\n  public ArrayList<String> getSpecification() {\n    ArrayList<String> specification = super.getSpecification();\n    specification.add("screenSizeInInches: " + screenSizeInInches);\n    return specification;\n  }\n  ...\n}\n'})})}),(0,i.jsx)(s.Z,{value:"c",label:"Startklasse",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    CPU myCpu1 = new CPU(3.5, 8);\n    CPU myCpu2 = new CPU(4.7, 8);\n\n    Notebook myNotebook1 = new Notebook("Mein Office Laptop", myCpu1, 16, 14);\n    Notebook myNotebook2 = new Notebook("Mein Gaming Laptop", myCpu2, 32, 16);\n\n    Computer myComputer;\n    ArrayList<Computer> computers = new ArrayList<>();\n\n    myComputer = myNotebook1; // Upcast\n    computers.add(myComputer);\n    myComputer = myNotebook2; // Upcast\n    computers.add(myComputer);\n\n    for(Computer c : computers) {\n      System.out.println(c.getSpecification()); // Polymorphie\n      Notebook myNotebook = (Notebook) c; // Downcast\n      System.out.println(myNotebook.getScreenSizeInInches());\n    }\n  }\n\n}\n'})})})]}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,i.jsxs)(n.p,{children:["Im Gegensatz zum Upcast muss bei einem Downcast der Typ explizit angegeben\nwerden. Der Downcast einer nicht zuweisungskompatiblen Referenz f\xfchrt zu einer\n",(0,i.jsx)(n.code,{children:"ClassCastException"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"der-instanceof-operator",children:"Der instanceof-Operator"}),"\n",(0,i.jsxs)(n.p,{children:["Mit dem Operator ",(0,i.jsx)(n.code,{children:"instanceof"})," kann zur Laufzeit gepr\xfcft werden, ob eine\nObjektreferenz zuweisungskompatibel zu einer Klasse ist. Eine Objektreferenz ist\ndann zuweisungskompatibel zu einer Klasse, wenn die Klasse des referenzierten\nObjektes in einer Vererbungsbeziehung zur Klasse steht. Seit Java 16 erm\xf6glicht\nder Mustervergleich bei ",(0,i.jsx)(n.code,{children:"instanceof"})," das Vermeiden notwendiger Typumwandlungen\nund sorgt gleichzeitig f\xfcr eine sicherere Programmierung."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java (Auszug)" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    ...\n    for(Computer c : computers) {\n      /* bis Java 16 */\n      if (c instanceof Notebook) {\n        Notebook myNotebook = (Notebook) c; // Downcast\n        System.out.println(myNotebook.getScreenSizeInInches());\n      }\n      /* seit Java 16 */\n      if (c instanceof Notebook myNotebook) { // Downcast\n        System.out.println(myNotebook.getScreenSizeInInches());\n      }\n    }\n    ...\n  }\n\n}\n"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5525:function(e,n,t){t.d(n,{Z:()=>o});var r=t("85893");t("67294");var i=t("67026");let a="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>k});var r=t("85893"),i=t("67294"),a=t("67026"),o=t("69599"),s=t("16550"),l=t("32000"),c=t("4520"),u=t("38341"),p=t("76009");function d(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var h=t("7227");let f="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),p=e=>{let n=e.currentTarget,t=l[c.indexOf(n)].value;t!==i&&(u(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map(e=>{let{value:n,label:t,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:d,onClick:p,...o,className:(0,a.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function y(e){let{lazy:n,children:t,selectedValue:o}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===o);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??d(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[o,h]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[f,b]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),o=(0,c._X)(a);return[o,(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[g,y]=function(e){var n;let{groupId:t}=e;let r=(n=t)?`docusaurus.tab.${n}`:null,[a,o]=(0,p.Nk)(r);return[a,(0,i.useCallback)(e=>{if(!!r)o.set(e)},[r,o])]}({groupId:r}),v=(()=>{let e=f??g;return m({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{v&&h(v)},[v]),{selectedValue:o,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);h(e),b(e),y(e)},[b,y,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(y,{...n,...e})]})}function k(e){let n=(0,h.Z)();return(0,r.jsx)(v,{...e,children:d(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var r=t(67294);let i={},a=r.createContext(i);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);