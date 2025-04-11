"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1960"],{80434:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/activity-diagram-example-e5b23e859f3d9726d968128b8bfaa144.png"},58322:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/class-diagram-example-72bfae0ca79b41c963cd69b7df1e766d.png"},42709:function(e,s,n){n.d(s,{Z:function(){return a}});var i=n(85893),l=n(67294);function a(e){let{children:s,initSlides:n,width:a=null,height:r=null}=e;return(0,l.useEffect)(()=>{n()}),(0,i.jsx)("div",{className:"reveal reveal-viewport",style:{width:a??"100vw",height:r??"100vh"},children:(0,i.jsx)("div",{className:"slides",children:s})})}},91242:function(e,s,n){n.d(s,{O:function(){return i}});let i=()=>{let e=n(42199),s=n(87251),i=n(60977),l=n(12489);new(n(29197))({plugins:[e,s,i,l]}).initialize({hash:!0})}},42441:function(e,s,n){n.d(s,{K:function(){return l}});var i=n(85893);n(67294);let l=()=>(0,i.jsx)("p",{style:{fontSize:"8px",position:"absolute",bottom:0,right:0},children:"*NKR"})},29230:function(e,s,n){n.r(s),n.d(s,{default:function(){return t}});var i=n(85893),l=n(53367),a=n(42709),r=n(42441),c=n(91242);function t(){return(0,i.jsxs)(a.Z,{initSlides:c.O,children:[(0,i.jsx)("section",{children:(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Agenda"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Wiederholung"}),(0,i.jsx)("li",{className:"fragment",children:"Java API"}),(0,i.jsx)("li",{className:"fragment",children:"final Modifier"}),(0,i.jsx)("li",{className:"fragment",children:"Enumeration"}),(0,i.jsx)("li",{className:"fragment",children:"Klassendiagramm"}),(0,i.jsx)("li",{className:"fragment",children:"Aktivit\xe4tsdiagramm"}),(0,i.jsx)("li",{className:"fragment",children:"Zusammenfassung"})]})]})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Wiederholung"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Klasse"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Abstraktion von Objekten"}),(0,i.jsx)("li",{className:"fragment",children:"definiert durch Methoden und Attribute"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Objekt"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Instanz einer Klasse"}),(0,i.jsx)("li",{className:"fragment",children:"Verhalten abh\xe4ngig von der Instanz"}),(0,i.jsx)("li",{className:"fragment",children:"ist eine Referenzvariable"}),(0,i.jsx)("li",{className:"fragment",children:"hat den default Wert null"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Modifiers"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"public & private"}),(0,i.jsx)("li",{className:"fragment",children:"Getter und Setter"}),(0,i.jsx)("li",{className:"fragment",children:"this"}),(0,i.jsx)("li",{className:"fragment",children:"\xdcberladen von Methoden"}),(0,i.jsx)("li",{className:"fragment",children:"Konstruktor"}),(0,i.jsx)("li",{className:"fragment",children:"static"})]})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Java API"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Wrapper Klassen"}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public static void main(String[] args) {\n  Integer i = Integer.valueOf(\"631\");\n  System.out.println(i) // 631;\n  Boolean b = Boolean.logicalXor(true, false);\n  System.out.println(b) // true\n  Character c = Character.toUpperCase('m');\n  System.out.println(c) // 'M'\n}"}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Datums- und Zeitangaben"}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'public static void main(String[] args) {\n  LocalDateTime now = LocalDateTime.now();\n  System.out.println("Jahr: " + now.getYear());\n  System.out.println("Monat: " + now.getMonth());\n  System.out.println("Tag: " + now.getDayOfMonth());\n}'}})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Dateien lesen*"}),(0,i.jsx)("pre",{className:"fragment",children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:'public static void main(String[] args) {\n  File file = new File("text.txt");\n  Scanner scanner = new Scanner(file);\n  while(scanner.hasNextLine()) {\n    String currentLine = scanner.nextLine();\n    System.out.println(currentLine);\n  }\n  scanner.close();\n}'}})}),(0,i.jsx)(r.K,{})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"final Modifier"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Kann angewendet werden auf"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Klassen (wird sp\xe4ter behandelt)"}),(0,i.jsx)("li",{className:"fragment",children:"Methoden (wird sp\xe4ter behandelt)"}),(0,i.jsx)("li",{className:"fragment",children:"Attribute"}),(0,i.jsx)("li",{className:"fragment",children:"Variablen"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Was bewirkt der final modifier?"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Zuweisung nur einmal m\xf6glich"}),(0,i.jsx)("li",{className:"fragment",children:"bei Attributen nur im Konstruktor"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:(0,i.jsx)(l.Z,{to:"https://github.com/jappuccini/java-demos/blob/steffen/java1/finalmodifier",children:"Demo - final Modifier"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"char gender"}),(0,i.jsx)("li",{className:"fragment",children:"String firstName"}),(0,i.jsx)("li",{className:"fragment",children:"Reference variable Human"})]})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Enumeration"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Was ist eine Enumeration?"}),(0,i.jsx)("p",{className:"fragment",children:"Gruppe von Konstanten"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Geschlecht (Male, Female, Divers)"}),(0,i.jsx)("li",{className:"fragment",children:"Motorart (Benzin, Diesel, Elektro)"}),(0,i.jsx)("li",{className:"fragment",children:"Genre (Action, Horror, Romanze)"}),(0,i.jsx)("li",{className:"fragment",children:"USK (0, 6, 12, 16, 18)"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Enumeration implementieren"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Welche Geschlechter?"}),(0,i.jsx)("li",{className:"fragment",children:"Welche Attribute?"}),(0,i.jsxs)("li",{className:"fragment",children:["Wie kann immer das ",(0,i.jsx)("b",{children:"eine"})," Geschlecht verwendet werden?"]}),(0,i.jsx)("li",{className:"fragment",children:"Wie keine weiteren Geschlechtinstanzen zulassen?"}),(0,i.jsx)("li",{className:"fragment",children:"Wie die Manipulation existierender Geschlechtsinstanzen verhindern?"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Geht das nicht einfacher?"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"enum anstatt class"}),(0,i.jsx)("li",{className:"fragment",children:"Konstanten kommagetrennt festlegen"}),(0,i.jsx)("li",{className:"fragment",children:"access modifier Konstruktor optional"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:(0,i.jsx)(l.Z,{to:"https://github.com/jappuccini/java-demos/blob/steffen/java1/enums",children:"Demo - Enumeration"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Human with Gender property"}),(0,i.jsx)("li",{className:"fragment",children:"switch - printGender"}),(0,i.jsx)("li",{className:"fragment",children:"isBinary"}),(0,i.jsx)("li",{className:"fragment",children:"values & ordinal"})]})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Klassendiagramm"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Was sind Klassendiagramme?"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Diagrammtyp der UML"}),(0,i.jsx)("li",{className:"fragment",children:"visualisiert Klassen"}),(0,i.jsx)("li",{className:"fragment",children:"und deren Beziehungen"})]})]}),(0,i.jsx)("section",{children:(0,i.jsx)("img",{height:"400px",src:n(58322).Z})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Bereiche"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Klassenname"}),(0,i.jsx)("li",{className:"fragment",children:"Attribute"}),(0,i.jsx)("li",{className:"fragment",children:"Methoden"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Access Modifier"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{className:"fragment",children:[(0,i.jsx)("strong",{children:"+"})," entspricht public"]}),(0,i.jsxs)("li",{className:"fragment",children:[(0,i.jsx)("strong",{children:"-"})," entspricht private"]}),(0,i.jsxs)("li",{className:"fragment",children:[(0,i.jsx)("strong",{children:"#"})," entspricht protected"]}),(0,i.jsxs)("li",{className:"fragment",children:[(0,i.jsx)("strong",{children:"~"})," entspricht packaged *"]})]}),(0,i.jsx)("div",{className:"fragment",children:(0,i.jsx)(r.K,{})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"andere Modifier"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"unterstrichene Attribute und Methoden sind static"}),(0,i.jsxs)("li",{className:"fragment",children:["weitere Merkmale durch geschweifte Klammern"," "]})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Methoden"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{className:"fragment",children:"Modifier - Bezeichner - Parameter - R\xfcckgabetyp"})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Attribute"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{className:"fragment",children:"Modifier - Bezeichner - R\xfcckgabetyp - Anfangswert"})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Stereotypen"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:" << enum >>"}),(0,i.jsx)("li",{className:"fragment",children:" << interface >>"}),(0,i.jsx)("li",{className:"fragment",children:" << exception >>"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Beziehungen zwischen Klassen"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Assoziation"}),(0,i.jsx)("li",{className:"fragment",children:"Aggregation"}),(0,i.jsx)("li",{className:"fragment",children:"Kompositon*"})]}),(0,i.jsx)("div",{className:"fragment",children:(0,i.jsx)(r.K,{})})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Aktivit\xe4tsdiagramm*"}),(0,i.jsx)(r.K,{})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Was sind Aktivit\xe4tsdiagramme?"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Diagrammtyp der UML"}),(0,i.jsx)("li",{className:"fragment",children:"visualisiert Verhalten"})]})]}),(0,i.jsx)("section",{children:(0,i.jsx)("img",{height:"400px",src:n(80434).Z})})]}),(0,i.jsxs)("section",{children:[(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Zusammenfassung"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Java API"}),(0,i.jsx)("li",{className:"fragment",children:"final modifier"}),(0,i.jsx)("li",{className:"fragment",children:"Enumerations"}),(0,i.jsx)("li",{className:"fragment",children:"Klassendiagramme"}),(0,i.jsx)("li",{className:"fragment",children:"Aktivit\xe4tsdiagramme"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Rest of the day"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:(0,i.jsx)(l.Z,{to:"/exercises/java-api",children:"Java API"})}),(0,i.jsx)("li",{className:"fragment",children:(0,i.jsx)(l.Z,{to:"/exercises/enumerations",children:"Enumerations"})}),(0,i.jsx)("li",{className:"fragment",children:(0,i.jsx)(l.Z,{to:"/exercises/activity-diagrams",children:"Activity Diagrams"})}),(0,i.jsx)("li",{className:"fragment",children:(0,i.jsx)(l.Z,{to:"/exercises/class-diagrams",children:"Class Diagrams"})})]})]})]})]})}}}]);