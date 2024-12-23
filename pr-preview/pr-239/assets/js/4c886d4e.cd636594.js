"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4432"],{80231:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>p,assets:()=>o,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/shopping-portal","title":"Einkaufsportal","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/shopping-portal.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/shopping-portal","permalink":"/java-docs/pr-preview/pr-239/exam-exercises/exam-exercises-java2/class-diagrams/shopping-portal","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/shopping-portal.md","tags":[{"inline":true,"label":"interfaces","permalink":"/java-docs/pr-preview/pr-239/tags/interfaces"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-239/tags/records"},{"inline":true,"label":"inner-classes","permalink":"/java-docs/pr-preview/pr-239/tags/inner-classes"},{"inline":true,"label":"generics","permalink":"/java-docs/pr-preview/pr-239/tags/generics"}],"version":"current","frontMatter":{"title":"Einkaufsportal","description":"","tags":["interfaces","records","inner-classes","generics"]},"sidebar":"examExercisesSidebar","previous":{"title":"Kartenspieler","permalink":"/java-docs/pr-preview/pr-239/exam-exercises/exam-exercises-java2/class-diagrams/player"},"next":{"title":"Raumstation","permalink":"/java-docs/pr-preview/pr-239/exam-exercises/exam-exercises-java2/class-diagrams/space-station"}}'),r=s("85893"),a=s("50065");let l={title:"Einkaufsportal",description:"",tags:["interfaces","records","inner-classes","generics"]},t=void 0,o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Item</em>",id:"hinweis-zur-klasse-item",level:2},{value:"Hinweise zur Klasse <em>ShoppingCart</em>",id:"hinweise-zur-klasse-shoppingcart",level:2},{value:"Hinweise zur Klasse <em>ShoppingPortal</em>",id:"hinweise-zur-klasse-shoppingportal",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Sellable <|.. Product : implements\n    ShoppingPortal o-- ShoppingCart~T extends Sellable~\n    ShoppingCart *-- Item\n\n    class ShoppingCart~T extends Sellable~ {\n        -items: List~Item~ #123;final#125;\n        +ShoppingCart()\n        +addItem(sellable: T, amount: int) void\n        +removeItem(sellable: T) void\n        +getTotalInEuro() double\n    }\n\n    class Item {\n        -sellable: T #123;final#125;\n        -amount: int #123;final#125;\n        -Item(sellable: T, amount: int)\n        +getSubTotalInEuro() double\n    }\n\n    class Sellable {\n        <<interface>>\n        +priceInEuro() double\n    }\n\n    class Product {\n        <<record>>\n        description: String\n        priceInEuro: double\n    }\n\n    class ShoppingPortal {\n        <<record>>\n        user: String\n        shoppingCart: ShoppingCart~Product~\n        +addProductToShoppingCart(product: Product, amount: int) void\n        +removeProductFromShoppingCart(product: Product) void\n        +clearShoppingCart() void\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-item",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"Item"})]}),"\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getSubTotalInEuro()"})," soll die Zwischensumme des\nWarenkorbeintrags als Produkt aus dem Produktpreis und der Anzahl zur\xfcckgeben."]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-shoppingcart",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ShoppingCart"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addItem(sellable: T, amount: int)"})," soll den Eintr\xe4gen des\nWarenkorbs (",(0,r.jsx)(n.code,{children:"items"}),") das eingehende verk\xe4ufliche Objekt und die eingehende\nAnzahl als Eintrag hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void removeItem(sellable: T)"})," soll das eingehende verk\xe4ufliche\nObjekt aus den Eintr\xe4gen des Warenkorbs (",(0,r.jsx)(n.code,{children:"items"}),") entfernen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getTotalInEuro()"})," soll die Gesamtsumme des Warenkorbs\nzur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-shoppingportal",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ShoppingPortal"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addProductToShoppingCart(product: Product, amount: int)"}),"\nsoll dem Warenkorb (",(0,r.jsx)(n.code,{children:"shoppingCart"}),") das eingehende Produkt und die eingehende\nAnzahl als Eintrag hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void removeProductFromShoppingCart(product: Product)"})," soll das\neingehende Produkt aus dem Warenkorb (",(0,r.jsx)(n.code,{children:"shoppingCart"}),") entfernen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void clearShoppingCart()"})," soll alle Eintr\xe4ge des Warenkorbs\n(",(0,r.jsx)(n.code,{children:"shoppingCart"}),") entfernen"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var i=s(67294);let r={},a=i.createContext(r);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);