"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9003"],{86613:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>u,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"documentation/mockito","title":"Mockito","description":"","source":"@site/docs/documentation/mockito.mdx","sourceDirName":"documentation","slug":"/documentation/mockito","permalink":"/java-docs/pr-preview/pr-278/documentation/mockito","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/mockito.mdx","tags":[{"inline":true,"label":"mockito","permalink":"/java-docs/pr-preview/pr-278/tags/mockito"}],"version":"current","sidebarPosition":325,"frontMatter":{"title":"Mockito","description":"","sidebar_position":325,"tags":["mockito"]},"sidebar":"documentationSidebar","previous":{"title":"Komponententests (Unit Tests)","permalink":"/java-docs/pr-preview/pr-278/documentation/unit-tests"},"next":{"title":"Datenstr\xf6me (IO-Streams)","permalink":"/java-docs/pr-preview/pr-278/documentation/io-streams"}}'),i=t("85893"),s=t("50065"),a=t("58168"),o=t("97645");let l={title:"Mockito",description:"",sidebar_position:325,tags:["mockito"]},d=void 0,u={},c=[{value:"Arten von Mock-Objekten",id:"arten-von-mock-objekten",level:2},{value:"Simulieren von Objekten",id:"simulieren-von-objekten",level:2},{value:"Umh\xfcllen von Objekten",id:"umh\xfcllen-von-objekten",level:2},{value:"Pr\xfcfen von Methodenaufrufen",id:"pr\xfcfen-von-methodenaufrufen",level:2},{value:"Argument Matcher",id:"argument-matcher",level:2},{value:"Beispiel",id:"beispiel",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://site.mockito.org/",children:"Mockito"})," ist ein leistungsf\xe4higes und einfach zu\nverwendendes Framework f\xfcr das Erstellen von Mock-Objekten in Java. Mock-Objekte\nsimulieren das Verhalten realer Komponenten und werden oft in Tests anstelle der\nrealen Komponenten verwendet. Durch den Einsatz von Mock-Objekten werden die\nAbh\xe4ngigkeiten des SUT (System under Test) minimiert und so das Testen von\nAnwendungen erheblich vereinfacht. Man spricht in diesem Zusammenhang auch von\nder sogenannten Test-Isolierung. Gr\xfcnde f\xfcr den Einsatz von Mock-Objekten k\xf6nnen\nkomplexe Abh\xe4ngigkeiten, ungew\xfcnschte Seiteneffekte oder hohe Laufzeiten der\nrealen Komponenten sein."]}),"\n",(0,i.jsx)(n.h2,{id:"arten-von-mock-objekten",children:"Arten von Mock-Objekten"}),"\n",(0,i.jsx)(n.p,{children:"Man unterscheidet zwischen verschiedenen Arten von Mock-Objekten."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ein ",(0,i.jsx)(n.em,{children:"Stub"})," ist ein Objekt, welches beim Aufruf einer Methode unabh\xe4ngig der\nEingabe immer den selben festgelegten Wert zur\xfcckgibt"]}),"\n",(0,i.jsxs)(n.li,{children:["Ein ",(0,i.jsx)(n.em,{children:"Mock"})," ist ein Objekt, welches im Gegensatz zum Stub beim Aufruf einer\nMethode abh\xe4ngig von der Eingabe festgelegte Werte zur\xfcckgibt"]}),"\n",(0,i.jsxs)(n.li,{children:["Ein ",(0,i.jsx)(n.em,{children:"Spy"})," ist ein Objekt, welches Aufrufe und \xfcbergebene Werte protokolliert\nund abfragbar macht"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"simulieren-von-objekten",children:"Simulieren von Objekten"}),"\n",(0,i.jsxs)(n.p,{children:["Mockito stellt f\xfcr das Erzeugen von Mock-Objekten zum Einen die statische\nMethode ",(0,i.jsx)(n.code,{children:"T mock(reified: T...)"})," der Klasse ",(0,i.jsx)(n.code,{children:"Mockito"})," und zum Anderen die\nAnnotation ",(0,i.jsx)(n.code,{children:"@Mock"})," sowie die statische Methode\n",(0,i.jsx)(n.code,{children:"AutoCloseable openMocks(testClass: Object)"})," der Klasse ",(0,i.jsx)(n.code,{children:"MockitoAnnotations"})," zur\nVerf\xfcgung. In beiden F\xe4llen wird ein entsprechendes Objekt der angegebenen\nKlasse erstellt, allerdings ohne jegliche Methodenimplementierungen. Das\nVerhalten einzelner Methoden kann anschlie\xdfend \xfcber die statische Methode\n",(0,i.jsx)(n.code,{children:"OngoingStubbing<T> when(methodCall: T)"})," der Klasse ",(0,i.jsx)(n.code,{children:"Mockito"})," sowie \xfcber die\nMethode ",(0,i.jsx)(n.code,{children:"OngoingStubbing<T> thenReturn(value: T)"})," bzw.\n",(0,i.jsx)(n.code,{children:"OngoingStubbing<T> thenThrow(throwables: Throwable...)"})," der Klasse\n",(0,i.jsx)(n.code,{children:"OngoingStubbing<T>"})," festgelegt werden."]}),"\n",(0,i.jsx)(n.h2,{id:"umh\xfcllen-von-objekten",children:"Umh\xfcllen von Objekten"}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcr das Erzeugen von Spy-Objekten stellt Mockito zum Einen die statische Methode\n",(0,i.jsx)(n.code,{children:"T spy(object: T)"})," der Klasse ",(0,i.jsx)(n.code,{children:"Mockito"})," und zum Anderen die Annotation ",(0,i.jsx)(n.code,{children:"@Spy"}),"\nsowie die statische Methode ",(0,i.jsx)(n.code,{children:"AutoCloseable openMocks(testClass: Object)"})," der\nKlasse ",(0,i.jsx)(n.code,{children:"MockitoAnnotations"})," zur Verf\xfcgung. Durch das so umh\xfcllte Objekt kann das\nVerhalten einzelner Methoden anschlie\xdfend \xfcber die statische Methode\n",(0,i.jsx)(n.code,{children:"Stubber doReturn(toBeReturned: Object)"})," bzw.\n",(0,i.jsx)(n.code,{children:"Stubber doThrow(toBeThrown: Throwable...)"})," der Klasse ",(0,i.jsx)(n.code,{children:"Mockito"})," sowie \xfcber die\nMethode ",(0,i.jsx)(n.code,{children:"T when(mock: T)"})," der Klasse ",(0,i.jsx)(n.code,{children:"Stubber"})," \xfcberschrieben werden."]}),"\n",(0,i.jsx)(n.h2,{id:"pr\xfcfen-von-methodenaufrufen",children:"Pr\xfcfen von Methodenaufrufen"}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcr das Pr\xfcfen, ob, wie oft und in welcher Reihenfolge eine Methode eines\nMock-Objektes aufgerufen wurde, stellt Mockito die statische Methode\n",(0,i.jsx)(n.code,{children:"T verify(mock: T, mode: VerificationMode)"})," der Klasse ",(0,i.jsx)(n.code,{children:"Mockito"})," zur Verf\xfcgung.\nZur Angabe des Pr\xfcfungsmodus k\xf6nnen die statischen Methoden\n",(0,i.jsx)(n.code,{children:"VerificationMode times(wantedNumberOfInvocations: int)"}),",\n",(0,i.jsx)(n.code,{children:"VerificationMode atLeast(minNumberOfInvocations: int)"}),",\n",(0,i.jsx)(n.code,{children:"VerificationMode atMost(maxNumberOfInvocations: int)"})," und\n",(0,i.jsx)(n.code,{children:"VerificationMode never()"})," der Klasse ",(0,i.jsx)(n.code,{children:"Mockito"})," verwendet werden."]}),"\n",(0,i.jsx)(n.h2,{id:"argument-matcher",children:"Argument Matcher"}),"\n",(0,i.jsxs)(n.p,{children:["Die Klasse ",(0,i.jsx)(n.code,{children:"ArgumentMatchers"})," stellt eine Reihe statischer Methoden wie z.B.\n",(0,i.jsx)(n.code,{children:"String anyString()"})," und ",(0,i.jsx)(n.code,{children:"List<T> anyList()"})," zur Verf\xfcgung, die ein flexibles\nSimulieren von Objekten und Pr\xfcfen von Methodenaufrufen erm\xf6glichen."]}),"\n",(0,i.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(o.Z,{value:"a",label:"Zu testende Klasse",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="StudentClass.java" showLineNumbers',children:"@Data\npublic class StudentClass {\n\n   private List<Student> students;\n\n   public void addStudent(Student student) {\n      students.add(student);\n   }\n\n   public Optional<Student> getStudentWithBestAverageGrade() {\n      Student studentWithBestAverageGrade = null;\n      double bestAverageGrade = Double.MAX_VALUE;\n      for (Student s : students) {\n         if (s.getAverageGrade() < bestAverageGrade) {\n            studentWithBestAverageGrade = s;\n            bestAverageGrade = s.getAverageGrade();\n         }\n      }\n      return Optional.ofNullable(studentWithBestAverageGrade);\n   }\n\n}\n"})})}),(0,i.jsx)(o.Z,{value:"b",label:"Zu simulierende Klasse",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"@Data\npublic class Student {\n\n   private final int id;\n   private final String name;\n   private final List<Double> grades;\n\n   public void addGrade(double grade) {\n      grades.add(grade);\n   }\n\n   public double getAverageGrade() {\n      double total = 0;\n      for (double grade : grades) {\n         total += grade;\n      }\n      return total / grades.size();\n   }\n\n}\n"})})}),(0,i.jsx)(o.Z,{value:"c",label:"Testklasse",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="StudentClassTest.java" showLineNumbers',children:'public class StudentClassTest {\n\n   @Mock\n   private Student studentMock;\n   private Student studentSpy;\n   private StudentClass studentClass;\n\n   @BeforeEach\n   void setUp() {\n      MockitoAnnotations.openMocks(this);\n\n      studentSpy = spy(new Student(1, "Hans Maier", new ArrayList<>()));\n\n      studentClass = new StudentClass(new ArrayList<>());\n      studentClass.addStudent(studentMock);\n      studentClass.addStudent(studentSpy);\n   }\n\n   @Test\n   void testGetStudentWithBestAverageGrade() {\n      when(studentMock.getAverageGrade()).thenReturn(2.2);\n      doReturn(1.5).when(studentSpy).getAverageGrade();\n\n      assertEquals(Optional.of(studentSpy), studentClass.getStudentWithBestAverageGrade());\n\n      verify(studentMock, atLeast(1)).getAverageGrade();\n      verify(studentSpy, atLeast(1)).getAverageGrade();\n   }\n\n}\n'})})})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,n,t){t.d(n,{Z:()=>s});var r=t("85893");t("67294");var i=t("67026");function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",s),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>g});var r=t("85893"),i=t("67294"),s=t("67026"),a=t("34718"),o=t("16550"),l=t("8714"),d=t("89207"),u=t("69413"),c=t("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var b=t("6735");function f(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l}=e,d=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{let n=e.currentTarget,t=l[d.indexOf(n)].value;t!==i&&(u(n),o(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{d.push(e)},onKeyDown:h,onClick:c,...a,className:(0,s.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function v(e){let{lazy:n,children:t,selectedValue:a}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function p(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,b]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[f,v]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(s),(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[p,g]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,s]=(0,c.Nk)(t);return[r,(0,i.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),j=(()=>{let e=f??p;return m({value:e,tabValues:s})?e:null})();return(0,l.Z)(()=>{j&&b(j)},[j]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);b(e),v(e),g(e)},[v,g,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(f,{...n,...e}),(0,r.jsx)(v,{...n,...e})]})}function g(e){let n=(0,b.Z)();return(0,r.jsx)(p,{...e,children:h(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(67294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);