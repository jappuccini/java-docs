"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7856"],{88692:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/example-tree-a5de5278072dd201e94bb92d7a5de8fc.png"},42709:function(e,s,n){n.d(s,{Z:function(){return a}});var i=n(85893),r=n(67294);function a(e){let{children:s,initSlides:n,width:a=null,height:l=null}=e;return(0,r.useEffect)(()=>{n()}),(0,i.jsx)("div",{className:"reveal reveal-viewport",style:{width:a??"100vw",height:l??"100vh"},children:(0,i.jsx)("div",{className:"slides",children:s})})}},91242:function(e,s,n){n.d(s,{O:function(){return i}});let i=()=>{let e=n(42199),s=n(87251),i=n(60977),r=n(12489);new(n(29197))({plugins:[e,s,i,r]}).initialize({hash:!0})}},46014:function(e,s,n){n.r(s),n.d(s,{default:function(){return c}});var i=n(85893),r=n(53367),a=n(42709),l=n(91242);function c(){return(0,i.jsxs)(a.Z,{initSlides:l.O,children:[(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Trees"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Agenda"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Intro"}),(0,i.jsx)("li",{className:"fragment",children:"Binary Tree"}),(0,i.jsx)("li",{className:"fragment",children:"Binary Search Tree"}),(0,i.jsx)("li",{className:"fragment",children:"Heap (Optional)"})]})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Intro"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Was ist ein Tree?"}),(0,i.jsx)("p",{className:"fragment",children:"Ein Tree (Baum) ist eine hierarchische Datenstruktur. Dies erm\xf6glicht eine effiziente Navigation und Suche durch den Baum."}),(0,i.jsx)("p",{className:"fragment",children:"Es handelt sich um eine Sammlung von Knoten, die durch Kanten verbunden sind und eine hierarchische Beziehung zwischen den Knoten aufweisen."}),(0,i.jsx)("p",{className:"foot-note fragment",children:(0,i.jsx)(r.Z,{target:"_blank",rel:"noopener noreferrer",to:n(88692).Z,children:"Beispiel Baum"})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Begriffe I"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Wurzelknoten",className:"fragment",children:"Root Node"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Kindknoten",className:"fragment",children:"Child Node"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Elternknoten",className:"fragment",children:"Parent Node"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Blatt",className:"fragment",children:"Leaf Node"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Tiefe",className:"fragment",children:"Level"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Begriffe II"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Vorg\xe4nger",className:"fragment",children:"Ancestor Node"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Nachfolger",className:"fragment",children:"Descendant Node"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Geschwister",className:"fragment",children:"Sibling"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Nachbar",className:"fragment",children:"Neighbor"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Teilbaum",className:"fragment",children:"Subtree"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Anwendungen von B\xe4umen"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Dateisystem \u2192 ls -la | dir"}),(0,i.jsx)("li",{className:"fragment",children:"DOM \u2192 F12"}),(0,i.jsx)("li",{className:"fragment",children:"Abstract Syntax Tree"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Arten"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Binary tree (Bin\xe4rbaum)"}),(0,i.jsx)("li",{className:"fragment",children:"Ternary tree (Tern\xe4rer Baum)"}),(0,i.jsx)("li",{className:"fragment",children:"Quadtree (Quatern\xe4rbaum)"}),(0,i.jsx)("li",{className:"fragment",children:"N-Tree/Generic Tree"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Trees vs Arrays vs Lists"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Access Time: Arrays < Tree < LinkedList"}),(0,i.jsx)("li",{className:"fragment",children:"Modify Time: LinkedList < Tree < Array"}),(0,i.jsx)("li",{className:"fragment",children:"Space Limit: LinkedList & Tree > Array"})]})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Binary Tree"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Was ist ein Binary Tree?"}),(0,i.jsx)("p",{className:"fragment",children:"Bei einem Binary Tree kann jeder Node maximal zwei Child Nodes haben. Sie werden als left und right bezeichnet."})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Node Struktur"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"java",dangerouslySetInnerHTML:{__html:"public class Node {\n  public int number;\n  public Node left;\n  public Node right;\n}"}})}),(0,i.jsx)("p",{className:"foot-note fragment",children:"\xe4hnlich wie Linked List"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Binary Tree Eigenschaften"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{tabIndex:0,className:"fragment","data-tooltip":"Kein, Ein oder Zwei Child Nodes",children:"0 bis 2 Knoten"}),(0,i.jsx)("li",{tabIndex:0,"data-tooltip":"Elemente innerhalb des Baumes haben keine Ordnung",className:"fragment",children:"Keine Ordnung innerhalb des Baumes"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Binary Tree Operationen"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"traverse \u2192 alle Elemente besuchen"}),(0,i.jsx)("li",{className:"fragment",children:"insert \u2192 Element hinzuf\xfcgen"}),(0,i.jsx)("li",{className:"fragment",children:"delete \u2192 Element entfernen"}),(0,i.jsx)("li",{className:"fragment",children:"search \u2192 Element suchen"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Tree Traversals"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Depth First Search"}),(0,i.jsx)("li",{className:"fragment",children:"Breadth First Search"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Depth First Search (DFS)"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Pre-Order-Traversal"}),(0,i.jsx)("li",{className:"fragment",children:"In-Order-Traversal"}),(0,i.jsx)("li",{className:"fragment",children:"Post-Order-Traversal"})]}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Beispiel Tafel: 7, 23, 3, 5, 4, 18, 21"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:(0,i.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/trees/bt/dfs",children:"Demo - Binary Tree DFS"})}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Welche Datenstruktur haben wir implizit benutzt?"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Breadth First Search (BFS)"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Gegenteil von DFS"}),(0,i.jsx)("li",{className:"fragment",children:"Beispiel Tafel"})]}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Welche Datenstruktur werden wir nutzen?"})]}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:(0,i.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/trees/bt/bfs",children:"Demo - Binary Tree BFS"})})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Vergleichen von Binary Trees"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Werte"}),(0,i.jsx)("li",{className:"fragment",children:"Struktur"})]}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Compare Beispiel: 1, 4, 9 an der Tafel BFS & DFS"})]}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"DFS bewahrt die Struktur des Baumes"})}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:(0,i.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/trees/bt/compare",children:"Demo - Binary Tree Compare DFS"})})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Binary Search Tree"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Was ist ein Binary Search Tree (BST)?"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Binary Tree mit Sortierung"}),(0,i.jsx)("li",{className:"fragment",children:"Left <= Node"}),(0,i.jsx)("li",{className:"fragment",children:"Node < Right"})]}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Beispiel: BST an der Tafel 17, 15, 50, 4, 16, 25, 21, 30"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"BST Operationen"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Search"}),(0,i.jsx)("li",{className:"fragment",children:"Insert"}),(0,i.jsx)("li",{className:"fragment",children:"Delete"})]})]}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:(0,i.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/trees/bst",children:"Demo - Binary Search Tree"})})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:"Heap"})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Was ist ein Heap?"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Binary Tree mit schwacher Sortierung"}),(0,i.jsx)("li",{className:"fragment",children:"jeder Nachfolger ist kleiner (MaxHeap)"}),(0,i.jsx)("li",{className:"fragment",children:"jeder Nachfolger ist gr\xf6\xdfer (MinHeap)"})]}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Beispiel: MinHeap an der Tafel 50, 71, 100, 101, 80, 200, 101"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Heap Eigenschaften"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Nennt man auch Priotity Queue"}),(0,i.jsx)("li",{className:"fragment",children:"Kein Traversieren"}),(0,i.jsx)("li",{className:"fragment",children:"Root ist immer Max/Min"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Heap Operationen"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"insert \u2192 Baum anpassen"}),(0,i.jsx)("li",{className:"fragment",children:"delete \u2192 Baum anpassen"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Heap Insert"}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{className:"fragment",children:"Am Ende einf\xfcgen"}),(0,i.jsx)("li",{className:"fragment",children:"nach oben verschieben"})]}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Beispiel: Insert 3"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Heap Delete"}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{className:"fragment",children:"root zwischenspeichern"}),(0,i.jsx)("li",{className:"fragment",children:"letztes Element mit root tauschen"}),(0,i.jsx)("li",{className:"fragment",children:"nach unten verschieben"})]}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Beispiel: Delete"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Heap Probleme"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Wie kommen wir an das Ende?"}),(0,i.jsx)("li",{className:"fragment",children:"Wie bekommen wir Parent?"}),(0,i.jsx)("li",{className:"fragment",children:"Wie bekommen wir Childs?"})]}),(0,i.jsx)("p",{className:"foot-note fragment",children:"Array to the rescue!"})]}),(0,i.jsx)("section",{children:(0,i.jsx)("h2",{children:(0,i.jsx)(r.Z,{to:"https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/trees/heap",children:"Demo - Heap"})})})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Rest of the day"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"fragment",children:"Heute Abgabe!"}),(0,i.jsx)("li",{className:"fragment",children:"Nachschreiber Fragen!"})]})]})]})}}}]);