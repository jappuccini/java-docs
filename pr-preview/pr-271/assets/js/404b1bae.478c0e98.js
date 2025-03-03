"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7395"],{26768:function(e,i,n){n.r(i),n.d(i,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/library","title":"Bibliothek","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/library.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/library","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java2/class-diagrams/library","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/library.md","tags":[{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-271/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-271/tags/polymorphism"},{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-271/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-271/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-271/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-271/tags/optionals"}],"version":"current","frontMatter":{"title":"Bibliothek","description":"","tags":["inheritance","polymorphism","exceptions","records","maps","optionals"]},"sidebar":"examExercisesSidebar","previous":{"title":"Lego-Baustein","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java2/class-diagrams/lego-brick"},"next":{"title":"Kartenspieler","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java2/class-diagrams/player"}}'),a=n("85893"),r=n("50065");let t={title:"Bibliothek",description:"",tags:["inheritance","polymorphism","exceptions","records","maps","optionals"]},l=void 0,o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>EBook</em>",id:"hinweis-zur-klasse-ebook",level:2},{value:"Hinweise zur Klasse <em>Library</em>",id:"hinweise-zur-klasse-library",level:2}];function d(e){let i={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,a.jsx)(i.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(i.mermaid,{value:"classDiagram\n    Library o-- Book\n    Status --o Library\n    Book <|-- EBook : extends\n    Book <|-- PaperBook : extends\n    Author --o Book\n    EBook o-- FileFormat\n\n    class Library {\n        <<record>>\n        name: String #123;final#125;\n        books: Map~Book, Status~ #123;final#125;\n        +addBook(book: Book) void\n        +getBookByTitle(title: String) Optional~Book~\n        +getPaperBooksByStatus(status: Status) List~PaperBook~\n    }\n\n    class Status {\n        <<enumeration>>\n        AVAILABLE = verf\xfcgbar\n        LENT = verliehen\n        -description: String #123;final#125;\n    }\n\n    class Book {\n        <<abstract>>\n        -id: UUID #123;final#125;\n        -author: Author #123;final#125;\n        -title: String #123;final#125;\n        +Book(author: Author, title: String)\n    }\n\n    class EBook {\n        -fileFormat: FileFormat #123;final#125;\n        -fileSizeInKb: int #123;final#125;\n        +EBook(author: Author, title: String, fileFormat: FileFormat, fileSizeInKb: int)\n    }\n\n    class PaperBook {\n        -pages: int #123;final#125;\n        +PaperBook(author: Author, title: String, pages: int)\n    }\n\n    class Author {\n        <<record>>\n        name: String\n        nationality: String\n    }\n\n    class FileFormat {\n        <<enumeration>>\n        AZW = Amazon Kindle\n        EPUB = Electronic Publication\n        LRF = Portable Reader File\n        -description: String #123;final#125;\n    }"}),"\n",(0,a.jsx)(i.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(i.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n",(0,a.jsxs)(i.li,{children:["Die statische Methode ",(0,a.jsx)(i.code,{children:"UUID randomUUID()"})," der Klasse ",(0,a.jsx)(i.code,{children:"UUID"})," gibt eine zuf\xe4llig\nerstellte UUID zur\xfcck"]}),"\n"]}),"\n",(0,a.jsxs)(i.h2,{id:"hinweis-zur-klasse-ebook",children:["Hinweis zur Klasse ",(0,a.jsx)(i.em,{children:"EBook"})]}),"\n",(0,a.jsxs)(i.p,{children:["Der Konstruktor soll alle Attribute initialisieren. F\xfcr den Fall, dass die\neingehende Dateigr\xf6\xdfe kleiner gleich Null ist, soll die Ausnahme\n",(0,a.jsx)(i.code,{children:"WrongFileSizeException"})," ausgel\xf6st werden."]}),"\n",(0,a.jsxs)(i.h2,{id:"hinweise-zur-klasse-library",children:["Hinweise zur Klasse ",(0,a.jsx)(i.em,{children:"Library"})]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"void addBook(book: Book)"})," soll der B\xfccherliste (",(0,a.jsx)(i.code,{children:"books"}),") das\neingehende Buch mit dem Status ",(0,a.jsx)(i.code,{children:"verf\xfcgbar"})," hinzuf\xfcgen"]}),"\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"Optional<Book> getBookByTitle(title: String)"})," soll das Buch zum\neingehenden Titel als Optional zur\xfcckgeben"]}),"\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"List<PaperBook> getPaperBooksByStatus(status: Status)"})," soll alle\ngedruckten B\xfccher zum eingehenden Status zur\xfcckgeben"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return t}});var s=n(67294);let a={},r=s.createContext(a);function t(e){let i=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);