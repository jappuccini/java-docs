"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1222"],{17679:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"documentation/unit-tests","title":"Komponententests (Unit Tests)","description":"","source":"@site/docs/documentation/unit-tests.md","sourceDirName":"documentation","slug":"/documentation/unit-tests","permalink":"/java-docs/pr-preview/pr-272/documentation/unit-tests","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/unit-tests.md","tags":[{"inline":true,"label":"unit-tests","permalink":"/java-docs/pr-preview/pr-272/tags/unit-tests"}],"version":"current","sidebarPosition":320,"frontMatter":{"title":"Komponententests (Unit Tests)","description":"","sidebar_position":320,"tags":["unit-tests"]},"sidebar":"documentationSidebar","previous":{"title":"Softwaretests","permalink":"/java-docs/pr-preview/pr-272/documentation/tests"},"next":{"title":"Mockito","permalink":"/java-docs/pr-preview/pr-272/documentation/mockito"}}'),s=t("85893"),r=t("50065");let d={title:"Komponententests (Unit Tests)",description:"",sidebar_position:320,tags:["unit-tests"]},l=void 0,a={},o=[{value:"Implementieren einer Testklasse",id:"implementieren-einer-testklasse",level:2},{value:"Zusicherungen (Assertions)",id:"zusicherungen-assertions",level:2},{value:"Beispiel",id:"beispiel",level:2}];function c(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Komponententests (Unit Tests) werden zum Testen einzelner, abgeschlossener\nSoftwarebausteine verwendet. JUnit ist ein weit verbreitetes Framework zur\nErstellung dieser Komponententests bzw. zum automatisierten Testen von Klassen\nund Methoden in Java. Die aktuelle Version ",(0,s.jsx)(n.em,{children:"JUnit 5"})," stellt eine Kombination\nverschiedener Module der Projekte ",(0,s.jsx)(n.em,{children:"JUnit Platform"}),", ",(0,s.jsx)(n.em,{children:"JUnit Jupiter"})," sowie ",(0,s.jsx)(n.em,{children:"JUnit\nVintage"})," dar. Unter einem Framework versteht man ein Programmierger\xfcst, welches\ndie Architektur f\xfcr die Anwendung vorgibt und den Kontrollfluss der Anwendung\nsteuert. Die Arbeitsweise von Frameworks wird als ",(0,s.jsx)(n.em,{children:"Inversion of Control"}),"\nbezeichnet: Die Funktionen einer Anwendung werden beim Framework registriert,\nwelches die Funktionen zu einem sp\xe4teren Zeitpunkt aufruft, d.h. die Steuerung\ndes Kontrollfluss obliegt nicht der Anwendung, sondern dem Framework. Die Umkehr\nder Steuerung kann auch als Anwendung des Hollywood-Prinzips (",(0,s.jsx)(n.em,{children:"Don\xb4t call us,\nwe\xb4ll call you"}),") verstanden werden."]}),"\n",(0,s.jsx)(n.h2,{id:"implementieren-einer-testklasse",children:"Implementieren einer Testklasse"}),"\n",(0,s.jsx)(n.p,{children:"JUnit-Testklassen werden mit Hilfe entsprechender Annotationen implementiert:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Annotationen ",(0,s.jsx)(n.code,{children:"@Test"})," und ",(0,s.jsx)(n.code,{children:"@ParameterizedTest"})," definieren einfache bzw.\nparametrisierte Testmethoden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Annotationen ",(0,s.jsx)(n.code,{children:"@BeforeAll"})," und ",(0,s.jsx)(n.code,{children:"@AfterAll"})," definieren statische Methoden,\ndie aufgerufen werden, wenn die Klasse f\xfcr den Test initialisiert wird bzw.\nwenn alle Tests abgeschlossen sind"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Annotationen ",(0,s.jsx)(n.code,{children:"@BeforeEach"})," und ",(0,s.jsx)(n.code,{children:"@AfterEach"})," definieren Methoden, die vor\nbzw. nach jeder Testmethode aufgerufen werden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Annotation ",(0,s.jsx)(n.code,{children:"@Disabled"})," bewirkt, dass eine Testmethode beim Testen nicht\nausgef\xfchrt wird"]}),"\n",(0,s.jsxs)(n.li,{children:["Mit Hilfe der Annotation ",(0,s.jsx)(n.code,{children:"@DisplayName"})," kann einer Testklasse bzw. einer\nTestmethode ein Anzeigename zugewiesen werden"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"zusicherungen-assertions",children:"Zusicherungen (Assertions)"}),"\n",(0,s.jsxs)(n.p,{children:["Die Klasse ",(0,s.jsx)(n.code,{children:"Assertions"})," stellt verschiedene Methoden bereit, die immer dann eine\nAusnahme vom Typ ",(0,s.jsx)(n.code,{children:"AssertionError"})," ausl\xf6sen, wenn das Ergebnis eines\nMethodenaufrufs nicht wie erwartet ausgefallen ist. Eine Ausnahme vom Typ\n",(0,s.jsx)(n.code,{children:"AssertionError"})," f\xfchrt dazu, dass der Test als nicht erfolgreich gewertet wird."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Assert-Methode"}),(0,s.jsx)(n.th,{children:"Bedeutung"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"void assertTrue(condition: boolean)"})}),(0,s.jsx)(n.td,{children:"Pr\xfcft, ob eine Bedingung erf\xfcllt ist"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"void assertFalse(condition: boolean)"})}),(0,s.jsx)(n.td,{children:"Pr\xfcft, ob eine Bedingung nicht erf\xfcllt ist"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"void assertNull(actual: Object)"})}),(0,s.jsxs)(n.td,{children:["Pr\xfcft, ob etwas ",(0,s.jsx)(n.code,{children:"null"})," ist"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"void assertNotNull(actual: Object)"})}),(0,s.jsxs)(n.td,{children:["Pr\xfcft, ob etwas nicht ",(0,s.jsx)(n.code,{children:"null"})," ist"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"void assertSame(expected: Object, actual: Object)"})}),(0,s.jsx)(n.td,{children:"Pr\xfcft, ob zwei Objekte identisch sind"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"void assertNotSame(expected: Object, actual: Object)"})}),(0,s.jsx)(n.td,{children:"Pr\xfcft, ob zwei Objekte nicht identisch sind"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"void assertEquals(expected: Object, actual: Object)"})}),(0,s.jsx)(n.td,{children:"Pr\xfcft, ob zwei Objekte gleich sind"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"void assertNotEquals(expected: Object, actual: Object)"})}),(0,s.jsx)(n.td,{children:"Pr\xfcft, ob zwei Objekte nicht gleich sind"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"T assertThrows(expectedType: Class<T>, executable: Executable)"})}),(0,s.jsx)(n.td,{children:"Pr\xfcft, ob eine Ausnahme ausgel\xf6st wird"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,s.jsxs)(n.p,{children:["Die Klasse ",(0,s.jsx)(n.code,{children:"Calculator"})," stellt mehrere Methoden bereit, die getestet werden\nsollen."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Calculator.java" showLineNumbers',children:"public class Calculator {\n\n   public Calculator() {}\n\n   public int abs(int a) {\n      return a >= 0 ? a : a * -1;\n   }\n\n   public int divide(int a, int b) {\n      return a / b;\n   }\n\n   public int multiply(int a, int b) {\n      return a * b;\n   }\n\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Die statische Methode ",(0,s.jsx)(n.code,{children:"setUp()"})," der Testklasse ",(0,s.jsx)(n.code,{children:"CalculatorTest"})," stellt sicher,\ndass vor der Ausf\xfchrung der Testmethoden ein Taschenrechner-Objekt erzeugt wird.\nIn den Testmethoden werden verschiedene Testf\xe4lle wie z.B. die Division durch\nNull getestet."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class CalculatorTest {\n\n   private static Calculator calculator;\n\n   @BeforeAll\n   static void setUp() {\n      calculator = new Calculator();\n   }\n\n   @Test\n   @DisplayName("Multiplication with Zero")\n   void multiply_withZero_Zero() {\n      assertEquals(0, calculator.multiply(0, 5));\n      assertEquals(0, calculator.multiply(5, 0));\n   }\n\n   @ParameterizedTest\n   @DisplayName("Absolute Values of positive and negative Values")\n   @ValueSource(ints = {-1, 0, 1})\n   void abs_positiveAndNegativeValues_AbsoluteValues(int a) {\n      assertTrue(calculator.abs(a) >= 0);\n   }\n\n   @Test\n   @DisplayName("Division by Zero")\n   void divide_byZero_ArithmeticException() {\n      assertThrows(ArithmeticException.class, () -> calculator.divide(5, 0));\n   }\n\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,s.jsxs)(n.p,{children:["F\xfcr die Benennungen von Testmethoden wird in der Regel versucht, die\nwesentlichen Informationen eines Tests (Name der zu testenden Methode,\nvorgegebener Zustand, zu erwartendes Verhalten) in den Methodennamen zu\nintegrieren. Zus\xe4tzlich k\xf6nnen Schl\xfcsselw\xf6rter wie ",(0,s.jsx)(n.em,{children:"Should"}),", ",(0,s.jsx)(n.em,{children:"When"}),", oder ",(0,s.jsx)(n.em,{children:"Then"}),"\nverwendet werden."]})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var i=t(67294);let s={},r=i.createContext(s);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);