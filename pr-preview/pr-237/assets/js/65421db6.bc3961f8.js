"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5289"],{28694:function(e,n,l){l.r(n),l.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>t,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"exercises/javafx/javafx05","title":"JavaFX05","description":"","source":"@site/docs/exercises/javafx/javafx05.md","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/javafx05","permalink":"/java-docs/pr-preview/pr-237/exercises/javafx/javafx05","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx05.md","tags":[],"version":"current","frontMatter":{"title":"JavaFX05","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaFX04","permalink":"/java-docs/pr-preview/pr-237/exercises/javafx/javafx04"},"next":{"title":"JavaFX06","permalink":"/java-docs/pr-preview/pr-237/exercises/javafx/javafx06"}}'),a=l("85893"),s=l("50065");let r={title:"JavaFX05",description:""},d=void 0,t={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph",id:"szenegraph",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Calculator</em>",id:"hinweise-zur-klasse-calculator",level:2},{value:"Hinweise zur Klasse <em>Model</em>",id:"hinweise-zur-klasse-model",level:2},{value:"Hinweise zur Klasse <em>Controller</em>",id:"hinweise-zur-klasse-controller",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zum Durchf\xfchren einfacher Berechnungen anhand des\nabgebildeten Klassendiagramms sowie des abgebildeten Szenegraphs."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. Controller : implements\n    Controller o-- Model\n    Model o-- Calculator\n    Model ..> InvalidInputException : throws\n\n    class Calculator {\n        +add(a: double, b: double) double\n        +subtract(a: double, b: double) double\n        +multiply(a: double, b: double) double\n        +divide(a: double, b: double) double\n    }\n\n    class Model {\n        -instance: Model$\n        -calculator: Calculator\n        -Model()\n        +getInstance() Model$\n        +calculate(input: String) String\n    }\n\n    class Controller {\n        -inputTextField: TextField #123;FXML#125;\n        -outputLabel: Label #123;FXML#125;\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n        +calculate(actionEvent: ActionEvent) void #123;FXML#125;\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }\n\n    class InvalidInputException {\n    		<<exception>>\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"szenegraph",children:"Szenegraph"}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n	vbox[VBox\\nfx:controller=Pfad.Controller]\n	textfield[TextField\\nfx:id=inputTextField]\n	button[Button\\ntext=Berechnen\\nonAction=#calculate]\n	label[Label\\nfx:id=outputLabel]\n\n    vbox --\x3e textfield\n    vbox --\x3e button\n    vbox --\x3e label"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Der Konstruktor\n",(0,a.jsx)(n.code,{children:"Alert(alertType: AlertType, contentText: String, buttons: ButtonType...)"})," der\nKlasse ",(0,a.jsx)(n.code,{children:"Alert"})," erm\xf6glicht das Erzeugen eines Nachrichtendialoges"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void show()"})," der Klasse ",(0,a.jsx)(n.code,{children:"Alert"})," zeigt den Nachrichtendialog an"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-calculator",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Calculator"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"double add(a: double, b: double)"})," soll die Summe der eingehenden\nZahlen zur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"double subtract(a: double, b: double)"})," soll die Differenz der\neingehenden Zahlen zur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"double multiply(a: double, b: double)"})," soll das Produkt der\neingehenden Zahlen zur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"double divide(a: double, b: double)"})," soll den Quotienten der\neingehenden Zahlen zur\xfcckgeben"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-model",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Model"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Der Konstruktor soll den Taschenrechner initialisieren"}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"String calculate(input: String)"})," soll die eingehende Zeichenkette\nin zwei Kommazahlen sowie einen Operator umwandeln, anschlie\xdfend die\nentsprechende Berechnung durchf\xfchren und schlie\xdflich das Ergebnis der\nBerechnung zur\xfcckgeben. F\xfcr den Fall, dass die eingehende Zeichenkette den\nWert ",(0,a.jsx)(n.code,{children:"null"})," hat oder dass die Eingabe nicht dem Format ",(0,a.jsx)(n.em,{children:"Kommazahl +|-|*|/\nKommazahl"})," entspricht, soll die Ausnahme ",(0,a.jsx)(n.code,{children:"InvalidInputException"})," ausgel\xf6st\nwerden"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-controller",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Controller"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll\ndas Model initialisieren"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void calculate(actionEvent: ActionEvent)"})," soll anhand der Eingabe\ndas Ergebnis berechnen und dieses dem Ausgabe-Ausgabefeld zuweisen. F\xfcr den\nFall, dass die Eingabe ung\xfcltig ist, soll ein entsprechender Nachrichtendialog\nangezeigt werden"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return r}});var i=l(67294);let a={},s=i.createContext(a);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);