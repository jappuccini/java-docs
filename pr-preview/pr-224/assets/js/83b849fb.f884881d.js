"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7804"],{34351:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"documentation/generics","title":"Generische Programmierung","description":"","source":"@site/docs/documentation/generics.md","sourceDirName":"documentation","slug":"/documentation/generics","permalink":"/java-docs/pr-preview/pr-224/documentation/generics","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/generics.md","tags":[{"inline":true,"label":"generics","permalink":"/java-docs/pr-preview/pr-224/tags/generics"}],"version":"current","sidebarPosition":270,"frontMatter":{"title":"Generische Programmierung","description":"","sidebar_position":270,"tags":["generics"]},"sidebar":"documentationSidebar","previous":{"title":"Lambda-Ausdr\xfccke (Lambdas)","permalink":"/java-docs/pr-preview/pr-224/documentation/lambdas"},"next":{"title":"Assoziativspeicher (Maps)","permalink":"/java-docs/pr-preview/pr-224/documentation/maps"}}'),t=i("85893"),s=i("50065");let a={title:"Generische Programmierung",description:"",sidebar_position:270,tags:["generics"]},c=void 0,l={},d=[{value:"Generische Klassen ohne Java Generics",id:"generische-klassen-ohne-java-generics",level:2},{value:"Generische Klassen mit Java Generics",id:"generische-klassen-mit-java-generics",level:2},{value:"Generische Methoden mit Java Generics",id:"generische-methoden-mit-java-generics",level:2},{value:"Namensrichtlinien f\xfcr Typparameter",id:"namensrichtlinien-f\xfcr-typparameter",level:2},{value:"Varianz",id:"varianz",level:2}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Quellcode sollte generell so allgemein bzw. generisch geschrieben werden, dass\ner f\xfcr unterschiedliche Datenstrukturen und Datentypen verwendet werden kann.\nDas Ziel der generischen Programmierung ist die Entwicklung von\nwiederverwendbarem Code. In Java verwendet man das Konzept der generischen\nDatentypen, also Klassen, die mit verschiedene Datentypen verwendet werden\nk\xf6nnen."}),"\n",(0,t.jsx)(n.h2,{id:"generische-klassen-ohne-java-generics",children:"Generische Klassen ohne Java Generics"}),"\n",(0,t.jsxs)(n.p,{children:["Auch ohne Java Generics kann in Java mit Hilfe der Klasse ",(0,t.jsx)(n.code,{children:"Object"})," generisch\nprogrammiert werden. Der Nachteil besteht darin, dass durch den Upcast einer\nbeliebigen Klasse auf die Klasse ",(0,t.jsx)(n.code,{children:"Object"})," die spezifischen Methoden der Klasse\nnicht mehr verwendet werden k\xf6nnen und der dadurch notwendige Downcast zu\nLaufzeitfehlern f\xfchren kann."]}),"\n",(0,t.jsxs)(n.p,{children:["Die Klasse ",(0,t.jsx)(n.code,{children:"Box"})," erm\xf6glicht das Speichern einer beliebig typisierten\nInformation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Box.java" showLineNumbers',children:"public class Box {\n\n  private Object content;\n\n  public void set(Object content) {\n    this.content = content;\n  }\n\n  public Object get() {\n    return content;\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In der main-Methode der Startklasse wird zun\xe4chst eine ganze Zahl in einer Box\ngespeichert und anschlie\xdfend wieder ausgelesen. Die Umwandlung der ganzen Zahl\nin eine Zeichenkette f\xfchrt erst zur Laufzeit zu einem Fehler."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Box box = new Box();\n    box.set(5);\n    String i = (String) box.get(); // Laufzeitfehler\n    System.out.println(i);\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"generische-klassen-mit-java-generics",children:"Generische Klassen mit Java Generics"}),"\n",(0,t.jsxs)(n.p,{children:["Klassen und Methoden k\xf6nnen in Java mit Typen parametrisiert werden. Diese\nwerden durch spitze Klammern ",(0,t.jsx)(n.code,{children:"<>"})," gekennzeichnet und stellen Platzhalter f\xfcr\nkonkrete Datentypen dar. Beim Kompilieren werden alle generischen Informationen\nvollst\xe4ndig entfernt und durch die konkreten Datentypen ersetzt. Durch die\ndadurch vorhandene statische Typsicherheit k\xf6nnen Laufzeitfehler verhindert und\nFehler bereits beim Kompilieren entdeckt werden."]}),"\n",(0,t.jsxs)(n.p,{children:["Die generische Klasse ",(0,t.jsx)(n.code,{children:"Box<T>"})," erm\xf6glicht das Speichern einer beliebig\ntypisierten Information mit Hilfe des Typparameters ",(0,t.jsx)(n.code,{children:"T"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Box.java" showLineNumbers',children:"public class Box<T> {\n\n  private T content;\n\n  public void set(T content) {\n    this.content = content;\n  }\n\n  public T get() {\n    return content;\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In der main-Methode der Startklasse wird zun\xe4chst eine ganze Zahl in einer Box\ngespeichert und anschlie\xdfend wieder ausgelesen. Die Umwandlung der ganzen Zahl\nin eine Zeichenkette f\xfchrt aufgrund der statischen Typsicherheit zu einem\nKompilierungsfehler."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Box<Integer> box = new Box<>();\n    box.set(5);\n    String i = box.get(); // Kompilierungsfehler\n    System.out.println(i);\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["Die Typisierung kann entweder explizit oder implizit \xfcber den Diamantenoperator\n",(0,t.jsx)(n.code,{children:"<>"})," erfolgen."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["Typparameter k\xf6nnen auf die Unterklassen einer bestimmten Klasse eingeschr\xe4nkt\nwerden. Dadurch kann in der generischen Klasse auf Attribute und Methoden der\nangegebenen Klasse zugegriffen werden. Die Angabe eines eingeschr\xe4nkten\nTypparameters erfolgt \xfcber den Zusatz ",(0,t.jsx)(n.code,{children:"extends"})," sowie die Angabe der\nentsprechenden Klasse."]})}),"\n",(0,t.jsx)(n.h2,{id:"generische-methoden-mit-java-generics",children:"Generische Methoden mit Java Generics"}),"\n",(0,t.jsxs)(n.p,{children:["Die generische Methode ",(0,t.jsx)(n.code,{children:"<T> int getIndex(value: T, values: T[])"})," gibt den Index\neines beliebig typisierten gesuchten Wertes innerhalb eines gleichtypisierten\nFeldes zur\xfcck."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println(getIndex(5, new Integer[] {3, 5, 2, 4, 1}));\n  }\n\n  public static <T> int getIndex(T value, T[] values) {\n    for (int i = 0; i < values.length; i++) {\n      if (values[i].equals(value)) {\n        return i;\n      }\n    }\n    return -1;\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"namensrichtlinien-f\xfcr-typparameter",children:"Namensrichtlinien f\xfcr Typparameter"}),"\n",(0,t.jsx)(n.p,{children:"Um den Einsatzbereich von Typparametern in generischen Klassen und Methoden\nkenntlich zu machen, sollte man festgelegte Zeichen verwenden."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Typparameter"}),(0,t.jsx)(n.th,{children:"Einsatzbereich"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"T, U, V, W..."}),(0,t.jsx)(n.td,{children:"Datentyp (Type)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"E"}),(0,t.jsx)(n.td,{children:"Element einer Datensammlung (Element)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"K"}),(0,t.jsx)(n.td,{children:"Schl\xfcssel eines Assoziativspeichers (Key)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"V"}),(0,t.jsx)(n.td,{children:"Wert eines Assoziativspeichers (Value)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"varianz",children:"Varianz"}),"\n",(0,t.jsxs)(n.p,{children:["Bei der Deklaration einer generischen Klasse erm\xf6glicht der Wildcard-Typ ",(0,t.jsx)(n.code,{children:"?"})," die\nAngabe eines unbestimmten Typs. Dieser kann gar nicht (",(0,t.jsx)(n.strong,{children:"Bivarianz"}),"), nach oben\n(",(0,t.jsx)(n.strong,{children:"Kovarianz"}),"), nach unten (",(0,t.jsx)(n.strong,{children:"Kontravarianz"}),"), oder sowohl nach oben als auch\nnach unten (",(0,t.jsx)(n.strong,{children:"Invarianz"}),") eingeschr\xe4nkt werden."]}),"\n",(0,t.jsxs)(n.p,{children:["Die generische Klasse ",(0,t.jsx)(n.code,{children:"Box<T>"})," erm\xf6glicht das Speichern einer beliebig\ntypisierten Information."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Box.java" showLineNumbers',children:"public class Box<T> {\n\n  private T content;\n\n  public void set(T content) {\n    this.content = content;\n  }\n\n  public T get() {\n    return content;\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In der main-methode der Startklasse werden verschiedene Boxen unterschiedlich\ndeklariert und anschlie\xdfend initialisiert. Dabei ist die Klasse ",(0,t.jsx)(n.code,{children:"String"})," eine\nUnterklasse der Klasse ",(0,t.jsx)(n.code,{children:"Object"}),", die Klasse ",(0,t.jsx)(n.code,{children:"Integer"})," eine Unterklasse der\nKlasse ",(0,t.jsx)(n.code,{children:"Number"})," und diese eine Unterklasse der Klasse ",(0,t.jsx)(n.code,{children:"Object"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Box<?> bivariantBox;\n    bivariantBox = new GenericBox<Object>();\n    bivariantBox = new GenericBox<Number>();\n    bivariantBox = new GenericBox<Integer>();\n    bivariantBox = new GenericBox<String>();\n\n    Box<? extends Number> covariantBox;\n    covariantBox = new GenericBox<Object>(); // Kompilierungsfehler\n    covariantBox = new GenericBox<Number>();\n    covariantBox = new GenericBox<Integer>();\n    covariantBox = new GenericBox<Integer>(); // Kompilierungsfehler\n\n    Box<? super Number> contravariantBox;\n    contravariantBox = new GenericBox<Object>();\n    contravariantBox = new GenericBox<Number>();\n    contravariantBox = new GenericBox<Integer>(); // Kompilierungsfehler\n    covariantBox = new GenericBox<Integer>(); // Kompilierungsfehler\n\n    Box<Number> invariantBox;\n    invariantBox = new GenericBox<Object>(); // Kompilierungsfehler\n    invariantBox = new GenericBox<Number>();\n    invariantBox = new GenericBox<Integer>(); // Kompilierungsfehler\n    covariantBox = new GenericBox<String>(); // Kompilierungsfehler\n  }\n\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var r=i(67294);let t={},s=r.createContext(t);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);