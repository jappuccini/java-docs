"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["829"],{66740:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>l,assets:()=>t,toc:()=>o,contentTitle:()=>d});var l=JSON.parse('{"id":"exercises/javafx/javafx07","title":"JavaFX07","description":"","source":"@site/docs/exercises/javafx/javafx07.md","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/javafx07","permalink":"/java-docs/pr-preview/pr-289/exercises/javafx/javafx07","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx07.md","tags":[],"version":"current","frontMatter":{"title":"JavaFX07","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaFX06","permalink":"/java-docs/pr-preview/pr-289/exercises/javafx/javafx06"},"next":{"title":"JavaFX08","permalink":"/java-docs/pr-preview/pr-289/exercises/javafx/javafx08"}}'),s=i("85893"),r=i("50065");let a={title:"JavaFX07",description:""},d=void 0,t={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph",id:"szenegraph",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Ball</em>",id:"hinweise-zur-klasse-ball",level:2},{value:"Hinweise zur Klasse <em>Model</em>",id:"hinweise-zur-klasse-model",level:2},{value:"Hinweis zur Klasse <em>Controller</em>",id:"hinweis-zur-klasse-controller",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zur Animation beliebig vieler, unterschiedlich\ngro\xdfer, unterschiedlich farbiger und unterschiedlich schneller Gummib\xe4lle anhand\ndes abgebildeten Klassendiagramms sowie des abgebildeten Szenegraphs."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. Controller : implements\n    Controller o-- Model\n    Model o-- Ball\n\n    class Ball {\n        -color: color\n        -r: int\n        -speedX: int\n        -speedY: int\n        -x: int\n        -y: int\n        +Ball(r: int, x: int, y: int, color: Color, speedX: int, speedY: int)\n        +getColor() Color\n        +getR() int\n        +getX() int\n        +getY() int\n        +getSpeedX() int\n        +getSpeedY() int\n        +move(minX: int, minY: int, maxX: int, maxY: int) void\n    }\n\n    class Model {\n        -instance: Model$\n        -balls: List~Ball~$\n        -Model()\n        +getInstance() Model$\n        +addBall(ball: Ball) void\n        +getBalls() List~Ball~\n    }\n\n    class Controller {\n        -canvas: Canvas #123;FXML#125;\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"szenegraph",children:"Szenegraph"}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n	vbox[VBox\n	     fx:controller=Pfad.Controller]\n	canvas[Canvas\n	       fx:id=canvas\n	       width=1000.0\n	       height=1000.0]\n\n    vbox --\x3e canvas"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Klasse ",(0,s.jsx)(n.code,{children:"AnimationTimer"})," repr\xe4sentiert einen Zeitmesser"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void start()"})," der Klasse ",(0,s.jsx)(n.code,{children:"AnimationTimer"})," startet den Zeitmesser"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"GraphicsContext getGraphicsContext2D()"})," der Klasse ",(0,s.jsx)(n.code,{children:"Canvas"})," gibt\ndie Grafik einer Leinwand zur\xfcck"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methoden ",(0,s.jsx)(n.code,{children:"double getWidth()"})," und ",(0,s.jsx)(n.code,{children:"double getHeight"})," der Klasse ",(0,s.jsx)(n.code,{children:"Canvas"}),"\ngeben die Breite bzw. die H\xf6he einer Leinwand zur\xfcck"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void setFill(p: Paint)"})," der Klasse ",(0,s.jsx)(n.code,{children:"GraphicsContext"})," setzt die\nF\xfcllfarbe einer Grafik auf den eingehenden Wert"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methoden ",(0,s.jsx)(n.code,{children:"void fillRect(x: double, y: double, w: double, h: double)"})," und\n",(0,s.jsx)(n.code,{children:"void fillOval(x: double, y: double, w: double, h: double)"})," der Klasse\n",(0,s.jsx)(n.code,{children:"GraphicsContext"})," zeichnen ein ausgef\xfclltes Rechteck bzw. ein ausgef\xfclltes\nOval mit den eingehenden Informationen und der aktuellen F\xfcllfarbe auf die\nGrafik"]}),"\n",(0,s.jsxs)(n.li,{children:["Der Konstruktor\n",(0,s.jsx)(n.code,{children:"Color(red: double, green: double, blue: double, opacity: double)"})," der Klasse\n",(0,s.jsx)(n.code,{children:"Color"})," erm\xf6glicht das Erzeugen einer (durchsichtigen) Farbe"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-ball",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Ball"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void move()"}),' soll die x- und y-Position des Balls um die\ndazugeh\xf6rigen Geschwindigkeitswerte erh\xf6hen und sicherstellen, dass der Ball\nbeim \xdcberschreiten der eingehenden Grenzen an diesen "abprallt"']}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-model",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Model"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll die Gummiballliste initialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addBall(ball: Ball)"})," soll den eingehenden Gummiball der\nGummiballliste hinzuf\xfcgen"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-controller",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Controller"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll das\nModel initialisieren und kontinuierlich alle Gummib\xe4lle der Gummiballliste\nbewegen sowie die Leinwand neu zeichnen. Zudem soll bei einem Mausklick auf die\nLeinwand an der geklickten Stelle ein Gummiball zuf\xe4lliger Gr\xf6\xdfe, Farbe und\nGeschwindigkeitswerten erstellt werden."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return a}});var l=i(67294);let s={},r=l.createContext(s);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);