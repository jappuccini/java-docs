"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9986"],{80814:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>l,assets:()=>o,toc:()=>d,contentTitle:()=>t});var l=JSON.parse('{"id":"exercises/javafx/javafx02","title":"JavaFX02","description":"","source":"@site/docs/exercises/javafx/javafx02.md","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/javafx02","permalink":"/java-docs/pr-preview/pr-282/exercises/javafx/javafx02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx02.md","tags":[],"version":"current","frontMatter":{"title":"JavaFX02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaFX01","permalink":"/java-docs/pr-preview/pr-282/exercises/javafx/javafx01"},"next":{"title":"JavaFX03","permalink":"/java-docs/pr-preview/pr-282/exercises/javafx/javafx03"}}'),s=i("85893"),r=i("50065");let a={title:"JavaFX02",description:""},t=void 0,o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph",id:"szenegraph",level:2},{value:"Allgemeiner Hinweis",id:"allgemeiner-hinweis",level:2},{value:"Hinweise zur Klasse <em>Dice</em>",id:"hinweise-zur-klasse-dice",level:2},{value:"Hinweise zur Klasse <em>Model</em>",id:"hinweise-zur-klasse-model",level:2},{value:"Hinweise zur Klasse <em>Controller</em>",id:"hinweise-zur-klasse-controller",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zum W\xfcrfeln anhand des abgebildeten\nKlassendiagramms sowie des abgebildeten Szenegraphs."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. Controller : implements\n    Controller o-- Model\n    Model o-- Dice\n\n    class Dice {\n        -value: int\n        -image: Image\n        +Dice()\n        +rollTheDice() void\n        +getValue() int\n        +getImage() Image\n    }\n\n    class Model {\n        -instance: Model$\n        -dice: Dice\n        -Model()\n        +getInstance() Model$\n        +rollTheDice() void\n        +getDiceValue() int\n        +getDiceImage() Image\n    }\n\n    class Controller {\n        -diceImageView: ImageView #123;FXML#125;\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n        +rollTheDice(actionEvent: ActionEvent) void #123;FXML#125;\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"szenegraph",children:"Szenegraph"}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n	vbox[VBox\n	     fx:controller=Pfad.Controller]\n	imageview[ImageView\n	          fx:id=diceImageView]\n	button[Button\n	       text=W\xfcrfeln\n	       onAction=#rollTheDice]\n\n    vbox --\x3e imageview\n    vbox --\x3e button"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeiner-hinweis",children:"Allgemeiner Hinweis"}),"\n",(0,s.jsxs)(n.p,{children:["Der Konstruktor ",(0,s.jsx)(n.code,{children:"Image(url: String)"})," der Klasse ",(0,s.jsx)(n.code,{children:"Image"})," erm\xf6glicht das Erzeugen\neines Grafik-Objektes."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-dice",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Dice"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll den W\xfcrfel werfen"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void rollTheDice()"})," soll den W\xfcrfelwert auf einen zuf\xe4lligen Wert\nzwischen 1 und 6 setzen und dem W\xfcrfelbild eine entsprechende Grafik zuweisen"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-model",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Model"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll den W\xfcrfel initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void rollTheDice()"})," soll den W\xfcrfel werfen"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-controller",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Controller"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll\ndas Model initialisieren, den W\xfcrfel werfen und dem W\xfcrfelbilderrahmen ein\nentsprechendes W\xfcrfelbild zuweisen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void rollTheDice(actionEvent: ActionEvent)"})," soll den W\xfcrfel\nwerfen und dem W\xfcrfelbilderrahmen ein entsprechendes W\xfcrfelbild zuweisen"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return a}});var l=i(67294);let s={},r=l.createContext(s);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);