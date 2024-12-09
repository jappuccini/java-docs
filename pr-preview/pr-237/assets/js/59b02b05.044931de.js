"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2320"],{53174:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>t,toc:()=>o,frontMatter:()=>s});var r=JSON.parse('{"id":"exercises/javafx/javafx01","title":"JavaFX01","description":"","source":"@site/docs/exercises/javafx/javafx01.md","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/javafx01","permalink":"/java-docs/pr-preview/pr-237/exercises/javafx/javafx01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx01.md","tags":[],"version":"current","frontMatter":{"title":"JavaFX01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaFX","permalink":"/java-docs/pr-preview/pr-237/exercises/javafx/"},"next":{"title":"JavaFX02","permalink":"/java-docs/pr-preview/pr-237/exercises/javafx/javafx02"}}'),a=i("85893"),l=i("50065");let s={title:"JavaFX01",description:""},d=void 0,t={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph",id:"szenegraph",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Controller</em>",id:"hinweise-zur-klasse-controller",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zum Zeichnen beliebig vieler, unterschiedlich\ngro\xdfer und unterschiedlich farbiger Kreise anhand des abgebildeten\nKlassendiagramms sowie des abgebildeten Szenegraphs."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. Controller\n\n    class Controller {\n        -canvas: Canvas #123;FXML#125;\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n        +addCircle(actionEvent: ActionEvent) void #123;FXML#125;\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"szenegraph",children:"Szenegraph"}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n	vbox[VBox\\nfx:controller=Pfad.Controller]\n	canvas[Canvas\\nfx:id=canvas\\nwidth=500.0\\nheight=500.0]\n	button[Button\\ntext=Kreis zeichnen\\nonAction=#drawCircle]\n\n    vbox --\x3e canvas\n    vbox --\x3e button"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"GraphicsContext getGraphicsContext2D()"})," der Klasse ",(0,a.jsx)(n.code,{children:"Canvas"})," gibt\ndie Grafik einer Leinwand zur\xfcck"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methoden ",(0,a.jsx)(n.code,{children:"double getWidth()"})," und ",(0,a.jsx)(n.code,{children:"double getHeight"})," der Klasse ",(0,a.jsx)(n.code,{children:"Canvas"}),"\ngeben die Breite bzw. die H\xf6he einer Leinwand zur\xfcck"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void setFill(p: Paint)"})," der Klasse ",(0,a.jsx)(n.code,{children:"GraphicsContext"})," setzt die\nF\xfcllfarbe einer Grafik auf den eingehenden Wert"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methoden ",(0,a.jsx)(n.code,{children:"void fillRect(x: double, y: double, w: double, h: double)"})," und\n",(0,a.jsx)(n.code,{children:"void fillOval(x: double, y: double, w: double, h: double)"})," der Klasse\n",(0,a.jsx)(n.code,{children:"GraphicsContext"})," zeichnen ein ausgef\xfclltes Rechteck bzw. ein ausgef\xfclltes\nOval mit den eingehenden Informationen und der aktuellen F\xfcllfarbe auf die\nGrafik"]}),"\n",(0,a.jsxs)(n.li,{children:["Der Konstruktor\n",(0,a.jsx)(n.code,{children:"Color(red: double, green: double, blue: double, opacity: double)"})," der Klasse\n",(0,a.jsx)(n.code,{children:"Color"})," erm\xf6glicht das Erzeugen einer (durchsichtigen) Farbe"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-controller",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Controller"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll\ndie Leinwand wei\xdf anmalen"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void drawCircle(actionEvent: ActionEvent)"})," soll einen Kreis mit\neiner zuf\xe4lligen Gr\xf6\xdfe und einer zuf\xe4lligen Farbe auf eine zuf\xe4llige Position\nder Leinwand zeichnen"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var r=i(67294);let a={},l=r.createContext(a);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);