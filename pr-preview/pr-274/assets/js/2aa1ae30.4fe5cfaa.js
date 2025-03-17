"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1391"],{42709:function(e,n,a){a.d(n,{Z:function(){return t}});var s=a(85893),r=a(67294);function t(e){let{children:n,initSlides:a,width:t=null,height:i=null}=e;return(0,r.useEffect)(()=>{a()}),(0,s.jsx)("div",{className:"reveal reveal-viewport",style:{width:t??"100vw",height:i??"100vh"},children:(0,s.jsx)("div",{className:"slides",children:n})})}},91242:function(e,n,a){a.d(n,{O:function(){return s}});let s=()=>{let e=a(42199),n=a(87251),s=a(60977),r=a(12489);new(a(29197))({plugins:[e,n,s,r]}).initialize({hash:!0})}},42441:function(e,n,a){a.d(n,{K:function(){return r}});var s=a(85893);a(67294);let r=()=>(0,s.jsx)("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0},children:"*NKR"})},614:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});var s=a(85893),r=a(53367),t=a(42709),i=a(91242),l=a(42441);function c(){return(0,s.jsxs)(t.Z,{initSlides:i.O,children:[(0,s.jsx)("section",{children:(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Agenda"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"fragment",children:"Funktionale Programmierung"}),(0,s.jsx)("li",{className:"fragment",children:"Lambdafunktionen"}),(0,s.jsx)("li",{className:"fragment",children:"Allgemeine Funktionale Interfaces"}),(0,s.jsx)("li",{className:"fragment",children:"Methodenreferenzen"})]})]})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("section",{children:(0,s.jsx)("h2",{children:"Funktionale Programmierung"})}),(0,s.jsx)("section",{children:(0,s.jsxs)("p",{children:["Funktionale Programmierung ist ein ",(0,s.jsx)("b",{children:"Programmierparadigma"}),", bei dem Funktionen als Werte behandelt werden und auf Seiteneffekte verzichtet wird."]})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Funktionen als Werte"}),"Funktionen...",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"fragment",children:"sind Methoden"}),(0,s.jsx)("li",{className:"fragment",children:"k\xf6nnen als Parameter definiert werden"}),(0,s.jsx)("li",{className:"fragment",children:"k\xf6nnen als Argument definiert werden"}),(0,s.jsx)("li",{className:"fragment",children:"k\xf6nnen als Variable definiert werden"})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Seiteneffekt"}),(0,s.jsx)("p",{className:"fragment",children:"Ein Seiteneffekt beschreibt eine Zustands\xe4nderung"})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Beispiele Seiteneffekte"}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{"data-line-numbers":!0,className:"java",dangerouslySetInnerHTML:{__html:"public class Human {\n  private int age;\n  \n  public void setAge(age) {\n    this.age = age;\n    /*Seiteneffekt, da Wert au\xdferhalb\n     der Funktion ver\xe4ndert wird */ \n  }\n  public int getAge() {\n    return age;\n    /*Kein Seiteneffekt, da Wert nicht au\xdferhalb\n     der Funktion ver\xe4ndert wird */ \n  }\n}\n"}})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:(0,s.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/functionalprogramming",children:"Demo - Lambda Funktionen"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"fragment",children:"Age Comparator"}),(0,s.jsx)("li",{className:"fragment",children:(0,s.jsx)(r.Z,{to:"/documentation/inner-classes",children:"Anonyme Klasse*"})}),(0,s.jsx)("li",{className:"fragment",children:"Anonyme Funktion"})]}),(0,s.jsx)(l.K,{})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("section",{children:(0,s.jsx)("h2",{children:"Lambdafunktionen"})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Lambdafunktion"}),(0,s.jsx)("p",{className:"fragment",children:"Eine Lambdafunktion ist eine Methode ohne Name, die wie eine Referenzvariable verwendet werden kann."}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{"data-line-numbers":"4",className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Comparator&lt;Human&gt; sortAge;\n    sortAge = (h1, h2) -> h1.age() > h2.age() ? 1 : -1;\n  }\n}\n"}})}),(0,s.jsx)("span",{className:"fragment foot-note",children:"Lambdafunktionen werden auch anonyme Funktion, anonymous function oder arrow function genannt."})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Typisierung"}),(0,s.jsx)("p",{className:"fragment",children:"Ein funkionales Interface wird f\xfcr die Typisierung einer Lambdafunktion verwendet."}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{"data-line-numbers":"3",className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    Comparator&lt;Human&gt; sortAge;\n    sortAge = (h1, h2) -> h1.age() > h2.age() ? 1 : -1;\n  }\n}\n"}})}),(0,s.jsx)("p",{className:"fragment foot-note",children:"Ein funktionales Interface ist ein Interface mit genau einer abstrakten Methode und einer speziellen Annotation."})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Funktionales Interface"}),(0,s.jsxs)("p",{className:"fragment",children:["Funktionale Interfaces werden mit @FunctionalInterface markiert, z.B."," ",(0,s.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html",children:"Comparator"})]}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"@FunctionalInterface\npublic interface Comparator&lt;T&gt; {\n  public int compare(T o1, T o2);\n}\n"}})}),(0,s.jsxs)("p",{className:"fragment foot-note",children:["Nicht jedes Interface mit einer einzigen abstrakten Methode ist funktional, z.B."," ",(0,s.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Comparable.html",children:"Comparable"})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Syntax Lambdafunktion"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"fragment",children:"Kein Parameter"}),(0,s.jsx)("li",{className:"fragment",children:"Ein Parameter"}),(0,s.jsx)("li",{className:"fragment",children:"Mehrere Parameter"}),(0,s.jsx)("li",{className:"fragment",children:"Eine Anweisung"}),(0,s.jsx)("li",{className:"fragment",children:"Mehrere Anweisungen"}),(0,s.jsx)("li",{className:"fragment",children:"Return Anweisung"})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Kein Parameter"}),(0,s.jsx)("p",{className:"fragment",children:"Hat das funktionale Interface keinen Parameter, werden runde Klammern ben\xf6tigt."}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface NoParamFunction {\n public void do();\n};\n"}})}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'NoParamFunction function = () -&gt; {\n  System.out.println("Kein Parameter");\n};\n'}})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Ein Parameter"}),(0,s.jsx)("p",{className:"fragment",children:"Hat das funktionale Interface einen Parameter, werden keine runden Klammern ben\xf6tigt."}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface OneParamFunction {\n public void do(String one);\n}\n"}})}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'OneParamFunction function = one -&gt; {\n  System.out.println("Ein Parameter: " + one);\n};\n'}})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Mehrere Parameter"}),(0,s.jsx)("p",{className:"fragment",children:"Hat das funktionale Interface mehrere Parameter, werden runden Klammern ben\xf6tigt."}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface MultiParamFunction {\n public void do(String one, String two);\n}\n"}})}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'MultiParamFunction function = (one, two) -&gt; {\n  System.out.println("Zwei Parameter: " + one + two);\n};\n'}})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Eine Anweisung"}),(0,s.jsx)("p",{className:"fragment",children:"Besteht die Lambdafunktion aus einer Anweisung sind keine geschweifte Klammern notwendig."}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'MultiParamFunction function = (one, two) -&gt; \n  System.out.println("Zwei Parameter: " + one + two);\n'}})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Mehrere Anweisungen"}),(0,s.jsx)("p",{className:"fragment",children:"Besteht die Lambdafunktion aus mehrern Anweisungen sind geschweifte Klammern notwendig."}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'MultiParamFunction function = (one, two) -&gt; {\n  System.out.println("Parameter Eins: " + one);\n  System.out.println("Parameter Zwei: " + two);\n};\n'}})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"return-Anweisung"}),(0,s.jsx)("p",{className:"fragment",children:"Besteht die Lambdafunktion aus einer einzelnen return Anweisung, sind keine geschweifte Klammern notwendig und das return Statement kann weggelassen werden."}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface OneParamReturnFunction {\n public boolean validate(Human human);\n}\n"}})}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"OneParamReturnFunction function = h -&gt; h.age() > 10;\n"}})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:(0,s.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/functionalinterfaces/owninterfaces",children:"Demo - Eigene Funktionale Interfaces"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"fragment",children:"Intro Shopping List Example"}),(0,s.jsx)("li",{className:"fragment",children:"Problem 1"}),(0,s.jsx)("li",{className:"fragment",children:"Problem 2"})]})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("section",{children:(0,s.jsx)("h2",{children:"Allgemeine Funktionale Interfaces"})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Grundkategorien von Funktionalen Interfaces"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"fragment",children:"Consumer"}),(0,s.jsx)("li",{className:"fragment",children:"Function"}),(0,s.jsx)("li",{className:"fragment",children:"Predicate"}),(0,s.jsx)("li",{className:"fragment",children:"Supplier"})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Consumer"}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Consumer&lt;T&gt; {\n  public void accept(T t);\n}\n"}})}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiConsumer&lt;T, U&gt; {\n  public void accept(T t, U u);\n}\n"}})}),(0,s.jsx)("p",{className:"fragment",children:"Code ausf\xfchren ohne Daten weiterzugeben."})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Function"}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Function&lt;T, R&gt; {\n  public R apply(T t);\n}\n"}})}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BiFunction&lt;T, U, R&gt; {\n  public R apply(T t, U u);\n}\n"}})}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface UnaryOperator&lt;T&gt; {\n  public T apply(T t);\n}\n"}})}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface BinaryOperator&lt;T&gt; {\n  public T apply(T t1, T t2);\n}\n"}})}),(0,s.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der Daten zur\xfcckgibt."})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Predicate"}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Predicate&lt;T&gt; {\n  public boolean test(T t);\n}\n"}})}),(0,s.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der true oder false zur\xfcckgibt."})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Supplier*"}),(0,s.jsx)("pre",{className:"fragment",children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public interface Supplier&lt;T&gt; {\n  public T get();\n}\n"}})}),(0,s.jsx)("p",{className:"fragment",children:"Code ausf\xfchren, der Daten vom Typ T zur\xfcckgibt."}),(0,s.jsx)("div",{className:"fragment",children:(0,s.jsx)(l.K,{})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:(0,s.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/functionalinterfaces/knowninterfaces",children:"Demo - Allgemeine Funktionale Interfaces"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"fragment",children:"Consumer anstatt ProductsChangedConsumer"}),(0,s.jsx)("li",{className:"fragment",children:"Predicate anstatt AddAllowedChecker"})]})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("section",{children:(0,s.jsx)("h2",{children:"Methodenreferenzen"})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Warum Methodenreferenzen?"}),(0,s.jsx)("p",{className:"fragment",children:"Mit Methodenreferenzen kann man noch weniger Code schreiben."}),(0,s.jsx)("p",{className:"fragment",children:"Hat ein Parameter die gleiche Signatur, wie eine statische Methode, kann diese Methode als Methodenreferenz \xfcbergeben werden."})]}),(0,s.jsxs)("section",{children:[(0,s.jsxs)("h2",{children:["Beispiel ArrayList -"," ",(0,s.jsx)(r.Z,{to:"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/ArrayList.html#forEach(java.util.function.Consumer)",children:"For Each"})]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Main {\n  public static void main(String[] args) {\n    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n    \n    // lambda funktion\n    names.forEach((name) -&gt; System.out.println(name));\n    \n    // methodenreferenz\n    names.forEach(System.out::println);\n }\n}\n"}})})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Verwenden von Methodenreferenzen?"}),(0,s.jsx)("p",{className:"fragment",children:"Anstatt die Methode \xfcber einen Punkt aufzurufen, wird ein zweifacher Doppelpunkt verwendet."}),(0,s.jsx)("p",{className:"fragment",children:'Mit dem "new" nach dem zweifachen Doppelpunkt kann auch der Konstruktor einer Klasse referenziert werden.'}),(0,s.jsx)(l.K,{})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:(0,s.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/functionalinterfaces/methodreferences",children:"Demo - Methodenreferenzen"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"fragment",children:"Methodensignatur System.out.println"}),(0,s.jsx)("li",{className:"fragment",children:"OneTimePrinter"})]})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Rest of the Day"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{className:"fragment",children:(0,s.jsx)(r.Z,{to:"https://jappuccini.github.io/java-docs/exercises/lambdas/",children:"Lambdas"})})}),(0,s.jsx)("p",{className:"fragment font-medium",children:"Bei Lambdas 01 kann die Teilaufgabe mit anonymer Klasse ignoriert werden."})]})]})}}}]);