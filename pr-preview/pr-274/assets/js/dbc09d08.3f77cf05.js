"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["860"],{72705:function(e,i,n){n.r(i),n.d(i,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>t,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/video-collection","title":"Videosammlung","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/video-collection.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/video-collection","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java2/class-diagrams/video-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/video-collection.md","tags":[{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-274/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-274/tags/polymorphism"},{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-274/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-274/tags/records"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-274/tags/optionals"},{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-274/tags/io-streams"}],"version":"current","frontMatter":{"title":"Videosammlung","description":"","tags":["inheritance","polymorphism","exceptions","records","optionals","io-streams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Team","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java2/class-diagrams/team"},"next":{"title":"Abfragen","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java2/queries/"}}'),a=n("85893"),r=n("50065");let l={title:"Videosammlung",description:"",tags:["inheritance","polymorphism","exceptions","records","optionals","io-streams"]},o=void 0,t={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>VideoCollection</em>",id:"hinweise-zur-klasse-videocollection",level:2},{value:"Beispielhafter Aufbau der Videodatei",id:"beispielhafter-aufbau-der-videodatei",level:2}];function c(e){let i={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,a.jsx)(i.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(i.mermaid,{value:"classDiagram\n    VideoCollection o-- Video\n    Video <|-- BluRay : extends\n    Video <|-- Vhs : extends\n    Movie --o Video\n    Movie o-- Genre\n\n    class VideoCollection {\n        <<record>>\n        videos: List~Video~\n        +addVideo(video: Video) void\n        +importVideos(file: File) void\n        +getVideoByMovieTitle(title: String) Optional~Video~\n    }\n\n    class Video {\n        <<abstract>>\n        -movie: Movie #123;final#125;\n        +Video(movie: Movie)\n    }\n\n    class Vhs {\n        -isRewritable: boolean #123;final#125;\n        +Vhs(movie: Movie, isRewritable: boolean)\n    }\n\n    class BluRay {\n        -capacityInGb: double #123;final#125;\n        +BluRay(movie: Movie, capacityInGb: double)\n    }\n\n    class Movie {\n        <<record>>\n        title: String\n        genre: Genre\n        publishingYear: short\n    }\n\n    class Genre {\n        <<enumeration>>\n        SCIFI = Science Fiction\n        HORROR = Horror\n        ACTION = Action\n        COMEDY = Kom\xf6die\n        -description: String #123;final#125;\n    }"}),"\n",(0,a.jsx)(i.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(i.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(i.h2,{id:"hinweise-zur-klasse-videocollection",children:["Hinweise zur Klasse ",(0,a.jsx)(i.em,{children:"VideoCollection"})]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"void addVideo(video: Video)"})," soll der Videoliste (",(0,a.jsx)(i.code,{children:"videos"}),") das\neingehende Video hinzuf\xfcgen"]}),"\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"void importVideos(file: File)"})," soll der Videoliste (",(0,a.jsx)(i.code,{children:"videos"}),") die\nVideos der eingehenden Datei hinzuf\xfcgen. Die Ausnahme ",(0,a.jsx)(i.code,{children:"FileNotFoundException"}),"\nsoll dabei weitergeleitet werden"]}),"\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"Optional<Video> getVideoByTitle(title: String)"})," soll das Video\nzum eingehenden Titel als Optional zur\xfcckgeben"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"beispielhafter-aufbau-der-videodatei",children:"Beispielhafter Aufbau der Videodatei"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"The Matrix;SCIFI;1999;VHS;false\nEvil Dead;HORROR;1981;BLURAY;25\n"})})]})}function m(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return l}});var s=n(67294);let a={},r=s.createContext(a);function l(e){let i=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);