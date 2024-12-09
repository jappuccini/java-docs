"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9414"],{8629:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"documentation/activity-diagrams","title":"Aktivit\xe4tsdiagramme","description":"","source":"@site/docs/documentation/activity-diagrams.md","sourceDirName":"documentation","slug":"/documentation/activity-diagrams","permalink":"/java-docs/pr-preview/pr-235/documentation/activity-diagrams","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/activity-diagrams.md","tags":[{"inline":true,"label":"uml","permalink":"/java-docs/pr-preview/pr-235/tags/uml"},{"inline":true,"label":"activity-diagrams","permalink":"/java-docs/pr-preview/pr-235/tags/activity-diagrams"}],"version":"current","sidebarPosition":165,"frontMatter":{"title":"Aktivit\xe4tsdiagramme","description":"","sidebar_position":165,"tags":["uml","activity-diagrams"]},"sidebar":"documentationSidebar","previous":{"title":"Klassendiagramme","permalink":"/java-docs/pr-preview/pr-235/documentation/class-diagrams"},"next":{"title":"Vererbung","permalink":"/java-docs/pr-preview/pr-235/documentation/inheritance"}}'),a=t("85893"),s=t("50065");let r={title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:165,tags:["uml","activity-diagrams"]},l=void 0,o={},d=[];function c(e){let n={li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Aktivit\xe4tsdiagramme sind ein Diagrammtyp der UML und geh\xf6ren dort zum Bereich\nder Verhaltensdiagramme. Der Fokus von Aktivit\xe4tsdiagrammen liegt auf\nimperativen Verarbeitungsaspekten. Eine Aktivit\xe4t stellt einen gerichteten\nGraphen dar, der \xfcber Knoten (Aktionen, Datenknoten und Kontrollknoten) und\nKanten (Kontrollfl\xfcsse und Datenfl\xfcsse) verf\xfcgt:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aktionen sind elementare Bausteine f\xfcr beliebiges, benutzerdefiniertes\nVerhalten"}),"\n",(0,a.jsxs)(n.li,{children:["Kontrollknoten steuern den Kontroll- und Datenfluss in einer Aktivit\xe4t:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Startknoten: legen den Beginn der Aktivit\xe4t fest"}),"\n",(0,a.jsx)(n.li,{children:"Endknoten: legen das Ende der Aktivit\xe4t fest"}),"\n",(0,a.jsx)(n.li,{children:"Ablaufendknoten: legen das Ende eines Ablaufes fest"}),"\n",(0,a.jsx)(n.li,{children:"Verzweigungsknoten: erm\xf6glichen die Verzweigung von Abl\xe4ufen"}),"\n",(0,a.jsx)(n.li,{children:"Zusammenf\xfchrungsknoten: erm\xf6glichen die Zusammenf\xfchrung von Abl\xe4ufen"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Datenknoten sind Hilfsknoten, die als ein- oder ausgehende Parameter einer\nAktion verwendet werden k\xf6nnen"}),"\n",(0,a.jsx)(n.li,{children:"Kontroll- und Datenfl\xfcsse legen Abl\xe4ufe zwischen Vorg\xe4nger- und\nNachfolger-Knoten fest"}),"\n"]}),"\n",(0,a.jsx)(n.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Zahl 1 eingeben" as state1\n    state "Eingabe: [Zahl 1]" as state2\n    state "Ausgabe: Zahl 2 eingeben" as state3\n    state "Eingabe: [Zahl 2]" as state4\n    state "R\xfcckgabe: [Zahl 1] / [Zahl 2]" as state5\n\n    state if <<choice>>\n\n    state "Division zweier Zahlen" as main {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e state4\n        state4 --\x3e if\n        if --\x3e state3: [Zahl 2] = 0\n        if --\x3e state5: sonst\n        state5 --\x3e [*]\n    }'})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(67294);let a={},s=i.createContext(a);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);