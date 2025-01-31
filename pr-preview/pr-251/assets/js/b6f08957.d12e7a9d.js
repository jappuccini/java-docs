"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2100"],{72652:function(e,n,t){t.r(n),t.d(n,{default:()=>g,frontMatter:()=>o,metadata:()=>r,assets:()=>u,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"documentation/javafx","title":"JavaFX","description":"","source":"@site/docs/documentation/javafx.mdx","sourceDirName":"documentation","slug":"/documentation/javafx","permalink":"/java-docs/pr-preview/pr-251/documentation/javafx","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/javafx.mdx","tags":[{"inline":true,"label":"gui","permalink":"/java-docs/pr-preview/pr-251/tags/gui"},{"inline":true,"label":"javafx","permalink":"/java-docs/pr-preview/pr-251/tags/javafx"}],"version":"current","sidebarPosition":370,"frontMatter":{"title":"JavaFX","description":"","sidebar_position":370,"tags":["gui","javafx"]},"sidebar":"documentationSidebar","previous":{"title":"Grafische Benutzeroberfl\xe4chen","permalink":"/java-docs/pr-preview/pr-251/documentation/gui"}}'),i=t("85893"),a=t("50065"),l=t("58168"),s=t("97645");let o={title:"JavaFX",description:"",sidebar_position:370,tags:["gui","javafx"]},d=void 0,u={},c=[{value:"Aufbau und Lebenszyklus von JavaFX-Anwendungen",id:"aufbau-und-lebenszyklus-von-javafx-anwendungen",level:2},{value:"Definition von Szenen",id:"definition-von-szenen",level:2},{value:"Aufruf von Szenen",id:"aufruf-von-szenen",level:2},{value:"Implementierung von Ereignisbehandler-Klassen",id:"implementierung-von-ereignisbehandler-klassen",level:2},{value:"Implementierung von Model-Klassen",id:"implementierung-von-model-klassen",level:2}];function h(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Java stellt mit dem ",(0,i.jsx)(n.em,{children:"AWT"})," (Abstract Window Toolkit) und ",(0,i.jsx)(n.em,{children:"Swing"})," zwei\nBibliotheken zur Entwicklung grafischer Benutzeroberfl\xe4chen zur Verf\xfcgung. Swing\nbaut dabei auf dem \xe4lteren AWT auf und verwendet teilweise Klasse daraus. Der\nNachfolger von Swing hei\xdft JavaFX und stellt im Gegensatz zu AWT und Swing keine\nBibliothek, sondern ein Framework zur Entwicklung plattform\xfcbergreifender\ngrafischer Benutzeroberfl\xe4chen dar. Unter einem Framework versteht man ein\nProgrammierger\xfcst, welches die Architektur f\xfcr die Anwendung vorgibt und den\nKontrollfluss der Anwendung steuert. So werden die Funktionen einer Anwendung\nbeim Framework registriert, welches die Funktionen zu einem sp\xe4teren Zeitpunkt\naufruft, d.h. die Steuerung des Kontrollfluss obliegt nicht der Anwendung,\nsondern dem Framework. Diese Umkehr der Steuerung kann auch als Anwendung des\nHollywood-Prinzips (",(0,i.jsx)(n.em,{children:"Don\xb4t call us, we\xb4ll call you"}),") verstanden werden."]}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Bis Java 11 war JavaFX Bestandteil des JDK, seit Java 11 stellt es ein\neigenst\xe4ndiges SDK (Software Development Kit) dar."})}),"\n",(0,i.jsx)(n.h2,{id:"aufbau-und-lebenszyklus-von-javafx-anwendungen",children:"Aufbau und Lebenszyklus von JavaFX-Anwendungen"}),"\n",(0,i.jsxs)(n.p,{children:["JavaFX-Anwendungen bestehen aus einer oder mehreren B\xfchnen (Stages), die\nbeliebig vielen Szenen (Scenes) enthalten k\xf6nnen, wobei jede Szene wiederum\nbeliebig viele Bildschirmelemente (Nodes) enthalten kann. Jede JavaFX-Anwendung\nist eine Unterklasse der Klasse ",(0,i.jsx)(n.code,{children:"Application"}),". Diese stellt die verschiedenen\nLebenszyklus-Methoden der JavaFX-Anwendung bereit."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void launch(args: String[])"})," speichert die Aufrufparameter,\nerzeugt ein Objekt der eigenen Klasse und ruft die weiteren\nLebenszyklus-Methoden auf"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void init()"})," kann genutzt werden, um z.B. die Aufrufparameter\nauszulesen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void start(primaryStage: Stage)"})," bekommt eine B\xfchne \xfcbergeben und\nwird dazu verwendet, die B\xfchne zu gestalten und die erste Szene aufzurufen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void stop()"})," wird aufgerufen, bevor der Prozess gestoppt wird und\nkann genutzt werden, um Aufr\xe4umarbeiten durchzuf\xfchren"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"definition-von-szenen",children:"Definition von Szenen"}),"\n",(0,i.jsx)(n.p,{children:"Die Definition einer Szene (View) kann entweder objektorientiert oder deklarativ\nmit Hilfe von FXML-Dokumenten erfolgen. FXML stellt eine auf XML-basierende\nSprache dar und erm\xf6glicht eine klare Trennung zwischen Layout und Code. XML\n(Extensible Markup Language) wiederum stellt eine Auszeichnungssprache zur\nBeschreibung strukturierter Daten dar."}),"\n",(0,i.jsx)(n.p,{children:"Mit Hilfe spezifischer JavaFX-Eigenschaften wird eine Verbindung zwischen der\nSzene und der Ereignisbehandler-Klasse hergestellt:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Bildschirmelementen k\xf6nnen \xfcber die Eigenschaft ",(0,i.jsx)(n.code,{children:"fx:id"})," IDs zugewiesen werden,\n\xfcber die die Ereignisbehandler-Klasse auf die jeweiligen Elemente zugreifen\nkann"]}),"\n",(0,i.jsxs)(n.li,{children:["Die verantwortliche Ereignisbehandler-Klasse wird \xfcber die Eigenschaft\n",(0,i.jsx)(n.code,{children:"fx:controller"})," festgelegt"]}),"\n",(0,i.jsxs)(n.li,{children:["Den zu behandelnden Ereignissen k\xf6nnen \xfcber entsprechende Eigenschaften wie\nz.B. ",(0,i.jsx)(n.code,{children:"onAction"})," bei Drucktasten Behandlermethoden der Ereignisbehandler-Klasse\nzugewiesen werden"]}),"\n"]}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"a",label:"InputView",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="InputView.fxml" showLineNumbers',children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<?import javafx.geometry.Insets?>\n<?import javafx.scene.control.Button?>\n<?import javafx.scene.control.TextField?>\n<?import javafx.scene.layout.VBox?>\n\n<VBox alignment="CENTER" spacing="5.0" xmlns:fx="http://javafx.com/fxml/1"\n      fx:controller="InputController">\n   <children>\n      <TextField fx:id="valueTextField" promptText="Wert" />\n      <Button text="Zur Ausgabe" onAction="#goToOutput"/>\n   </children>\n   <padding>\n      <Insets bottom="25.0" left="25.0" right="25.0" top="25.0" />\n   </padding>\n</VBox>\n'})})}),(0,i.jsx)(s.Z,{value:"b",label:"OutputView",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="InputView.fxml" showLineNumbers',children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<?import javafx.geometry.Insets?>\n<?import javafx.scene.control.Label?>\n<?import javafx.scene.layout.VBox?>\n\n<VBox alignment="CENTER" spacing="5.0" xmlns:fx="http://javafx.com/fxml/1"\n      fx:controller="OutputController">\n   <children>\n      <Label fx:id="valueLabel" />\n   </children>\n   <padding>\n      <Insets bottom="25.0" left="25.0" right="25.0" top="25.0" />\n   </padding>\n</VBox>\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"aufruf-von-szenen",children:"Aufruf von Szenen"}),"\n",(0,i.jsxs)(n.p,{children:["Die statische Methode ",(0,i.jsx)(n.code,{children:"Parent load(location: URL)"})," der Klasse ",(0,i.jsx)(n.code,{children:"FXMLLoader"}),"\n\xfcberf\xfchrt das angegebene FXML-Dokument in einen Szenegraphen und gibt den\ndazugeh\xf6rigen Wurzelknoten vom Typ ",(0,i.jsx)(n.code,{children:"Parent"})," zur\xfcck, mit dessen Hilfe\nanschlie\xdfend die Szene erstellt und angezeigt werden kann. Zus\xe4tzlich\ninstanziiert der FXML-Loader den Controller und ruft bei der Anzeige der Szene\ndie (optionale) Methode\n",(0,i.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," der entsprechenden\nEreignisbehandler-Klasse auf."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass extends Application {\n\n   public static void main(String[] args) {\n      launch(args);\n   }\n\n   @Override\n   public void start(Stage primaryStage) throws Exception {\n      Parent root = FXMLLoader.load(getClass().getResource("InputView.fxml"));\n      Scene scene = new Scene(root);\n      primaryStage.setTitle("JavaFX");\n      primaryStage.setScene(scene);\n      primaryStage.show();\n   }\n\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"implementierung-von-ereignisbehandler-klassen",children:"Implementierung von Ereignisbehandler-Klassen"}),"\n",(0,i.jsxs)(n.p,{children:["In den Ereignisbehandler-Klassen (Controller) werden die Behandlermethoden\nimplementiert. Diese m\xfcssen zwingend einen Parameter vom Typ des Ereignisses\nbesitzen (z.B. ",(0,i.jsx)(n.code,{children:"ActionEvent"}),"), mit dessen Hilfe auf das ausgel\xf6ste Ereignis\nzugegriffen werden kann. Das Verkn\xfcpfen von Attributen der\nEreignisbehandler-Klasse mit den Elementen des FXML-Dokuments erfolgt \xfcber die\nAnnotation ",(0,i.jsx)(n.code,{children:"@FXML"})," und der Namensgleichheit zwischen den Attributen der\nEreignisbehandler-Klasse sowie den festgelegten Ids der entsprechenden Elemente\ndes FXML-Dokuments."]}),"\n",(0,i.jsxs)(n.p,{children:["Der Wechsel von Szenen erfolgt \xfcber die Methode ",(0,i.jsx)(n.code,{children:"void setScene(value: Scene)"}),"\nder Klasse ",(0,i.jsx)(n.code,{children:"Window"}),". Die Methode ",(0,i.jsx)(n.code,{children:"Object getSource()"})," der Klasse ",(0,i.jsx)(n.code,{children:"ActionEvent"}),"\ngibt das Bildschirmelement zur\xfcck, welches das Ereignis ausgel\xf6st hat; die\nMethode ",(0,i.jsx)(n.code,{children:"Window getWindow()"})," der Klasse ",(0,i.jsx)(n.code,{children:"Scene"})," die B\xfchne, auf der die aktuelle\nSzene aufgef\xfchrt wird."]}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"a",label:"InputController",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="InputController.java" showLineNumbers',children:'public class InputController implements Initializable {\n\n   @FXML\n   private TextField valueTextField;\n   private Model model;\n\n   @Override\n   public void initialize(URL location, ResourceBundle resources) {\n      model = Model.getInstance();\n   }\n\n   @FXML\n   public void goToOutput(ActionEvent actionEvent) throws IOException {\n      String value = valueTextField.getText();\n      model.setValue(value);\n\n      Parent root = FXMLLoader.load(getClass().getResource("OutputView.fxml"));\n      Scene scene = new Scene(root);\n      Node node = (Node) actionEvent.getSource();\n      Stage stage = (Stage) node.getScene().getWindow();\n      stage.setScene(scene);\n      stage.show();\n   }\n\n}\n'})})}),(0,i.jsx)(s.Z,{value:"b",label:"OutputController",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="OutputController.java" showLineNumbers',children:"public class OutputController implements Initializable {\n\n   @FXML\n   private Label valueLabel;\n   private Model model;\n\n   @Override\n   public void initialize(URL location, ResourceBundle resources) {\n      model = Model.getInstance();\n\n      String value = model.getValue();\n      outputLabel.setText(value);\n   }\n\n}\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," der\nSchnittstelle ",(0,i.jsx)(n.code,{children:"Initializable"})," wird vom FXML-Loader vor Anzeige der dazugeh\xf6rigen\nSzene aufgerufen und erm\xf6glicht es, die Szene dynamisch anzupassen."]})}),"\n",(0,i.jsx)(n.h2,{id:"implementierung-von-model-klassen",children:"Implementierung von Model-Klassen"}),"\n",(0,i.jsxs)(n.p,{children:["Model-Klassen sind f\xfcr die zentrale Verwaltung der Daten zust\xe4ndig. Da die\nverschiedenen Klassen einer JavaFX-Anwendung nur lose miteiander gekoppelt sind,\nkann \xfcber das Entwurfsmuster ",(0,i.jsx)(n.em,{children:"Singleton"})," sichergestellt werden, dass zur\nModel-Klasse genau ein Objekt, das sogenannte Singleton, zur Laufzeit existiert."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Model.java" showLineNumbers',children:"public class Model {\n\n   private static Model instance;\n   private String value;\n\n   private Model() {}\n\n   public static Model getInstance() {\n      if (instance == null) {\n         instance = new Model();\n      }\n      return instance;\n   }\n\n   public String getValue() {\n      return value;\n   }\n\n   public void setValue(String value) {\n      this.value = value;\n   }\n\n}\n"})})]})}function g(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,n,t){t.d(n,{Z:()=>a});var r=t("85893");t("67294");var i=t("67026");function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",a),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>b});var r=t("85893"),i=t("67294"),a=t("67026"),l=t("34718"),s=t("16550"),o=t("8714"),d=t("89207"),u=t("69413"),c=t("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("6735");function p(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{let n=e.currentTarget,t=o[d.indexOf(n)].value;t!==i&&(u(n),s(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{d.push(e)},onKeyDown:h,onClick:c,...l,className:(0,a.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function v(e){let{lazy:n,children:t,selectedValue:l}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[p,v]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(a),(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,a]=(0,c.Nk)(t);return[r,(0,i.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:r}),x=(()=>{let e=p??f;return g({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{x&&m(x)},[x]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!g({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),v(e),b(e)},[v,b,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(p,{...n,...e}),(0,r.jsx)(v,{...n,...e})]})}function b(e){let n=(0,m.Z)();return(0,r.jsx)(f,{...e,children:h(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var r=t(67294);let i={},a=r.createContext(i);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);