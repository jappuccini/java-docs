"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5071"],{42709:function(e,s,n){n.d(s,{Z:function(){return l}});var r=n(85893),i=n(67294);function l(e){let{children:s,initSlides:n,width:l=null,height:c=null}=e;return(0,i.useEffect)(()=>{n()}),(0,r.jsx)("div",{className:"reveal reveal-viewport",style:{width:l??"100vw",height:c??"100vh"},children:(0,r.jsx)("div",{className:"slides",children:s})})}},91242:function(e,s,n){n.d(s,{O:function(){return r}});let r=()=>{let e=n(42199),s=n(87251),r=n(60977),i=n(12489);new(n(29197))({plugins:[e,s,r,i]}).initialize({hash:!0})}},46141:function(e,s,n){n.r(s),n.d(s,{default:function(){return d}});var r=n(85893),i=n(53367),l=n(42709),c=n(91242);function d(){return(0,r.jsxs)(l.Z,{initSlides:c.O,children:[(0,r.jsxs)("section",{children:[(0,r.jsx)("section",{children:(0,r.jsx)("h2",{children:"Iterativ und Rekursiv"})}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Agenda"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"fragment",children:"Intro"}),(0,r.jsx)("li",{className:"fragment",children:"Rekursion"}),(0,r.jsx)("li",{className:"fragment",children:"Fun With Mazes"})]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("section",{children:(0,r.jsx)("h2",{children:"Intro"})}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Was ist Iterativ"}),(0,r.jsx)("p",{className:"fragment",children:"mehrmaliges ausf\xfchren einer Aktion, w\xe4hrend eine Bedingung wahr ist."})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Schleifen sind Iterativ"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"fragment",children:"while \u2192 solange bedingung true"}),(0,r.jsx)("li",{className:"fragment",children:"do-while \u2192 solange bedingung true"}),(0,r.jsx)("li",{className:"fragment",children:"for \u2192 solange bedingung true"}),(0,r.jsx)("li",{className:"fragment",children:"for-each \u2192 bis break oder alle Elemente"})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Was ist Rekursiv?"}),(0,r.jsx)("p",{className:"fragment",children:"mehrmaliges selbstausf\xfchren einer Aktion"}),(0,r.jsx)("p",{className:"fragment",children:"die Aktion definiert selber, wann Sie sich nicht mehr selbst aufruft"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:(0,r.jsx)(i.Z,{to:"https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/recursion/sum",children:"Demo - Zahlen summieren"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"fragment",children:"Iterativ"}),(0,r.jsx)("li",{className:"fragment",children:"Rekursiv"})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Rekursion - Callstack"}),(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Aufruf Ort"}),(0,r.jsx)("th",{children:"Aufruf"}),(0,r.jsx)("th",{children:"Aufruf Wert"}),(0,r.jsx)("th",{children:"R\xfcckgabewert"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:"fragment",children:[(0,r.jsx)("td",{children:"Main"}),(0,r.jsx)("td",{children:"sum(5)"}),(0,r.jsx)("td",{children:"5"}),(0,r.jsx)("td",{children:"?"})]}),(0,r.jsxs)("tr",{className:"fragment",children:[(0,r.jsx)("td",{children:"sum(5)"}),(0,r.jsx)("td",{children:"sum(4)"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"?"})]}),(0,r.jsxs)("tr",{className:"fragment",children:[(0,r.jsx)("td",{children:"sum(4)"}),(0,r.jsx)("td",{children:"sum(3)"}),(0,r.jsx)("td",{children:"3"}),(0,r.jsx)("td",{children:"?"})]}),(0,r.jsxs)("tr",{className:"fragment",children:[(0,r.jsx)("td",{children:"sum(3)"}),(0,r.jsx)("td",{children:"sum(2)"}),(0,r.jsx)("td",{children:"2"}),(0,r.jsx)("td",{children:"?"})]}),(0,r.jsxs)("tr",{className:"fragment",children:[(0,r.jsx)("td",{children:"sum(2)"}),(0,r.jsx)("td",{children:"sum(1)"}),(0,r.jsx)("td",{children:"1"}),(0,r.jsx)("td",{children:"1"})]})]})]}),(0,r.jsx)("p",{className:"fragment foot-note",children:"Unterste Zeile ist der Base Case Fall"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Rekursion - Callstack II"}),(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Aufruf Ort"}),(0,r.jsx)("th",{children:"Aufruf"}),(0,r.jsx)("th",{children:"Aufruf Wert"}),(0,r.jsx)("th",{children:"R\xfcckgabewert"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Main"}),(0,r.jsx)("td",{children:"sum(5)"}),(0,r.jsx)("td",{children:"5"}),(0,r.jsx)("td",{className:"fragment","data-fragment-index":"4",children:"5 + 10 \u2192 15"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"sum(5)"}),(0,r.jsx)("td",{children:"sum(4)"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{className:"fragment","data-fragment-index":"3",children:"4 + 6 \u2192 10"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"sum(4)"}),(0,r.jsx)("td",{children:"sum(3)"}),(0,r.jsx)("td",{children:"3"}),(0,r.jsx)("td",{className:"fragment","data-fragment-index":"2",children:"3 + 3 \u2192 6"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"sum(3)"}),(0,r.jsx)("td",{children:"sum(2)"}),(0,r.jsx)("td",{children:"2"}),(0,r.jsx)("td",{className:"fragment","data-fragment-index":"1",children:"2 + 1 \u2192 3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"sum(2)"}),(0,r.jsx)("td",{children:"sum(1)"}),(0,r.jsx)("td",{children:"1"}),(0,r.jsx)("td",{children:"1"})]})]})]}),(0,r.jsx)("p",{className:"fragment foot-note",children:"Bonus: throw Error in Base Case"})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("section",{children:(0,r.jsx)("h2",{children:"Rekursion"})}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Bestandteile"}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{className:"fragment",children:"Base Case(s)"}),(0,r.jsx)("li",{className:"fragment",children:"Recurse"})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Base Case(s)"}),(0,r.jsx)("p",{children:"Alle Bedingungen, welche ein Endergebnis haben."})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Recursion"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"fragment",children:"Pre Recurse"}),(0,r.jsx)("li",{className:"fragment",children:"Recurse"}),(0,r.jsx)("li",{className:"fragment",children:"Post Recurse"})]}),(0,r.jsx)("p",{className:"fragment foot-note",children:"revisit iterative sum"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:(0,r.jsx)(i.Z,{to:"https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/recursion/search/BinarySearch.java",children:"Demo - Binary Search Recursion"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"fragment",children:"Base Cases"}),(0,r.jsx)("li",{className:"fragment",children:"recursion to inner"}),(0,r.jsx)("li",{className:"fragment",children:"Recurse Steps"})]})]})]}),(0,r.jsx)("section",{children:(0,r.jsx)("section",{children:(0,r.jsx)("h2",{children:"Fun with Mazes"})})}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Rest of the day"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"fragment",children:"Problem und Datensatz"}),(0,r.jsx)("li",{className:"fragment",children:"Search mit eigenem Problem Recursiv(Optional)"})]})]})]})}}}]);