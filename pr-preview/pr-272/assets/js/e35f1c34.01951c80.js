"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5281"],{97501:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>s,assets:()=>u,toc:()=>d,contentTitle:()=>t});var s=JSON.parse('{"id":"additional-material/daniel/coding2-wi/sample-exam","title":"Musterklausur","description":"","source":"@site/docs/additional-material/daniel/coding2-wi/sample-exam.md","sourceDirName":"additional-material/daniel/coding2-wi","slug":"/additional-material/daniel/coding2-wi/sample-exam","permalink":"/java-docs/pr-preview/pr-272/additional-material/daniel/coding2-wi/sample-exam","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/coding2-wi/sample-exam.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Musterklausur","description":"","sidebar_position":10,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"Programmierung II (WI)","permalink":"/java-docs/pr-preview/pr-272/additional-material/daniel/coding2-wi/"},"next":{"title":"Klausurergebnisse","permalink":"/java-docs/pr-preview/pr-272/additional-material/daniel/coding2-wi/exam-results"}}'),i=r("85893"),l=r("50065");let a={title:"Musterklausur",description:"",sidebar_position:10,tags:[]},t=void 0,u={},d=[{value:"Hinweise zur Klausur",id:"hinweise-zur-klausur",level:2},{value:"Aufgabe 1 (16 Punkte)",id:"aufgabe-1-16-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:3},{value:"Hinweise zur Klasse <em>SuperLeague</em>",id:"hinweise-zur-klasse-superleague",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:3},{value:"Aufgabe 2 (18 Punkte)",id:"aufgabe-2-18-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-1",level:3},{value:"Hinweise zur Klasse <em>SuperLeagueTest</em>",id:"hinweise-zur-klasse-superleaguetest",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-1",level:3},{value:"Aufgabe 3 (18 Punkte)",id:"aufgabe-3-18-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-2",level:3},{value:"Hinweise zur Klasse <em>SingleQueries</em>",id:"hinweise-zur-klasse-singlequeries",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-2",level:3}];function o(e){let n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"hinweise-zur-klausur",children:"Hinweise zur Klausur"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die in dieser Klausur verwendeten Personenbezeichnungen beziehen sich \u2013 sofern\nnicht anders kenntlich gemacht \u2013 auf alle Geschlechter"}),"\n",(0,i.jsx)(n.li,{children:"Pakete und Klassenimporte m\xfcssen nicht angegeben werden"}),"\n",(0,i.jsxs)(n.li,{children:["Die Klassen und Annotationen der Bibliotheken ",(0,i.jsx)(n.em,{children:"Lombok"}),", ",(0,i.jsx)(n.em,{children:"JUnit 5"})," und\n",(0,i.jsx)(n.em,{children:"Mockito"})," d\xfcrfen verwendet werden"]}),"\n",(0,i.jsx)(n.li,{children:"Es kann davon ausgegangen werden, dass s\xe4mtliche Klassen entsprechende\nImplementierungen der Object-Methoden besitzen"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie in der Vorlesung gezeigt implementiert werden"}),"\n",(0,i.jsxs)(n.li,{children:["Die Konsolenausgaben-Methoden der Klasse ",(0,i.jsx)(n.code,{children:"PrintStream"})," d\xfcrfen sinnvoll gek\xfcrzt\ngeschrieben werden (zum Beispiel ",(0,i.jsx)(n.em,{children:'syso("Hello World")'})," statt\n",(0,i.jsx)(n.em,{children:'System.out.println("Hello World")'}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Methoden- und Attributsbezeichner d\xfcrfen sinnvoll gek\xfcrzt geschrieben werden\n(zum Beispiel ",(0,i.jsx)(n.em,{children:"getLWMCP()"})," statt ",(0,i.jsx)(n.em,{children:"getLectureWithMostCreditPoints()"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-1-16-punkte",children:"Aufgabe 1 (16 Punkte)"}),"\n",(0,i.jsxs)(n.p,{children:["Erstelle die Klasse ",(0,i.jsx)(n.code,{children:"SuperLeague<T extends SuperHuman>"})," anhand des abgebildeten\nKlassendiagrams."]}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n   SuperHuman <|-- Villain : extends\n   SuperHuman <|-- Hero : extends\n   Universe --o SuperHuman\n   SuperLeague~T extends SuperHuman~ o-- Universe\n   class SuperHuman {\n      <<abstract>>\n      -name: String #123;final#125;\n      -universe: Universe #123;final#125;\n      -power: int #123;final#125;\n      +SuperHuman(name: String, universe: Universe, power: int)\n      +name() String\n      +universe() Universe\n      +power() int\n   }\n   class Villain {\n      +Villain(name: String, universe: Universe, power: int)\n   }\n   class Hero {\n      +Hero(name: String, universe: Universe, power: int)\n   }\n   class Universe {\n      <<enumeration>>\n      MARVEL\n      DC\n   }\n   class SuperLeague~T extends SuperHuman~ {\n      <<record>>\n      name: String\n      universe: Universe\n      members: Map~T, Boolean~\n      +addSuperHuman(t: T) void\n      +getAllAvailableSuperHumans() List~T~\n      +getMostPowerfulSuperHuman() Optional~T~\n   }"}),"\n",(0,i.jsxs)(n.h3,{id:"hinweise-zur-klasse-superleague",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"SuperLeague"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die Schl\xfcssel-Werte-Paare des Assoziativspeichers beinhalten als Schl\xfcssel die\n\xdcbermenschen der Liga sowie als Wert deren Verf\xfcgbarkeit"}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Optional<T> getMostPowerfulSuperHuman()"})," soll den st\xe4rksten\n\xdcbermenschen der Liga zur\xfcckgeben (5,5 Punkte)"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addSuperHuman(t: T)"})," soll der Liga den eingehenden\n\xdcbermenschen als verf\xfcgbares Mitglied hinzuf\xfcgen. F\xfcr den Fall, dass das\nUniversum des eingehenden \xdcbermenschen nicht dem Universum der Liga\nentspricht, soll die Ausnahme ",(0,i.jsx)(n.code,{children:"WrongUniverseException"})," ausgel\xf6st werden (4\nPunkte)"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<T> getAllAvailableSuperHumans()"})," soll alle verf\xfcgbaren\n\xdcbermenschen der Liga zur\xfcckgeben (4,5 Punkte)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="SuperLeage.java" showLineNumbers',children:"public record SuperLeague<T extends SuperHuman>(String name, Universe universe,\n      Map<T, Boolean> members) { // 2\n\n   public Optional<T> getMostPowerfulSuperHuman() { // 0,5\n      T mostPowerfulSuperHuman = null; // 0,5\n      int power = 0; // 0,5\n      for (T t : members.keySet()) { // 1\n         if (t.power() > power) { // 1\n            power = t.power(); // 0,5\n            mostPowerfulSuperHuman = t; // 0,5\n         }\n      }\n      return Optional.ofNullable(mostPowerfulSuperHuman); // 1\n   } // 5,5\n\n   public void addSuperHuman(T t) throws WrongUniverseException { // 1\n      if (!t.universe().equals(universe)) { // 1\n         throw new WrongUniverseException(); // 1\n      }\n      members.put(t, true); // 1\n   } // 4\n\n   public List<T> getAllAvailableSuperHumans() { // 0,5\n      List<T> allAvailableSuperHumans = new ArrayList<>(); // 0,5\n      for (Entry<T, Boolean> entry : members.entrySet()) { // 1\n         if (entry.getValue().equals(true)) { // 1\n            allAvailableSuperHumans.add(entry.getKey()); // 1\n         }\n      }\n      return allAvailableSuperHumans; // 0,5\n   } // 4,5\n\n} // 16\n"})}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-2-18-punkte",children:"Aufgabe 2 (18 Punkte)"}),"\n",(0,i.jsxs)(n.p,{children:["Erstelle die JUnit-5-Testklasse ",(0,i.jsx)(n.code,{children:"SuperLeagueTest"})," anhand des abgebildeten\nKlassendiagramms."]}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm-1",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n   SuperLeagueTest o-- Hero\n   SuperLeagueTest o-- SuperLeague\n   SuperHuman <|-- Villain : extends\n   SuperHuman <|-- Hero : extends\n   Universe --o SuperHuman\n   SuperLeague~T extends SuperHuman~ o-- Universe\n   class SuperHuman {\n      <<abstract>>\n      -name: String #123;final#125;\n      -universe: Universe #123;final#125;\n      -power: int #123;final#125;\n      +SuperHuman(name: String, universe: Universe, power: int)\n      +name() String\n      +universe() Universe\n      +power() int\n   }\n   class Villain {\n      +Villain(name: String, universe: Universe, power: int)\n   }\n   class Hero {\n      +Hero(name: String, universe: Universe, power: int)\n   }\n   class Universe {\n      <<enumeration>>\n      MARVEL\n      DC\n   }\n   class SuperLeague~T extends SuperHuman~ {\n      <<record>>\n      name: String\n      universe: Universe\n      members: Map~T, Boolean~\n      +addSuperHuman(t: T) void\n      +getAllAvailableSuperHumans() List~T~\n      +getMostPowerfulSuperHuman() Optional~T~\n   }\n   class SuperLeagueTest {\n      <<test>>\n      -avengers: SuperLeague~Hero~\n      -superman: Hero #123;Mock#125;\n      -ironman: Hero #123;Mock#125;\n      -spiderman: Hero #123;Mock#125;\n      +setUp() void\n      +testAddSuperHuman() void\n      +testGetAllAvailableSuperHumans() void\n      +testGetMostPowerfulSuperHuman() void\n   }"}),"\n",(0,i.jsxs)(n.h3,{id:"hinweise-zur-klasse-superleaguetest",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"SuperLeagueTest"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Lebenszyklus-Methode ",(0,i.jsx)(n.code,{children:"void setUp()"})," soll s\xe4mtliche Mock-Objekte sowie die\nSuperheldenliga ",(0,i.jsx)(n.em,{children:"Avengers"})," (Name: Avengers, Universum: MARVEL) erstellen und\nden entsprechenden Attributen zuweisen und der Superheldenliga ",(0,i.jsx)(n.em,{children:"Avengers"})," den\nSuperhelden ",(0,i.jsx)(n.em,{children:"Iron Man"})," als verf\xfcgbaren sowie den Superhelden ",(0,i.jsx)(n.em,{children:"Spider-Man"})," als\nnicht verf\xfcgbaren Superhelden hinzuf\xfcgen (5 Punkte)"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testAddSuperHuman()"})," soll pr\xfcfen, ob beim Aufruf der\nMethode ",(0,i.jsx)(n.code,{children:"void addSuperHuman(t: T)"})," mit dem Superhelden ",(0,i.jsx)(n.em,{children:"Superman"})," die Ausnahme\n",(0,i.jsx)(n.code,{children:"WrongUniverseException"})," ausgel\xf6st wird. Hierzu soll das Mock-Objekt\n",(0,i.jsx)(n.em,{children:"Superman"})," beim Aufruf der Methode ",(0,i.jsx)(n.code,{children:"Universe universe()"})," den Wert ",(0,i.jsx)(n.em,{children:"DC"}),"\nzur\xfcckgeben (3 Punkte)"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testGetAllAvailableSuperHumans()"})," soll pr\xfcfen, ob beim\nAufruf der Methode ",(0,i.jsx)(n.code,{children:"List<T> getAllAvailableSuperHumans()"})," eine Liste der Gr\xf6\xdfe\n1 zur\xfcckgegeben wird (2,5 Punkte)"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testGetMostPowerfulSuperHuman()"})," soll pr\xfcfen, ob beim\nAufruf der Methode ",(0,i.jsx)(n.code,{children:"Optional<T> getMostPowerfulSuperHuman()"})," der Superheld\n",(0,i.jsx)(n.em,{children:"Spider-Man"})," als Optional zur\xfcckgegeben wird. Hierzu soll das Mock-Objekt\n",(0,i.jsx)(n.em,{children:"Iron Man"})," beim Aufruf der Methode ",(0,i.jsx)(n.code,{children:"int power()"})," den Wert 7 und das\nMock-Objekt ",(0,i.jsx)(n.em,{children:"Spider-Man"})," den Wert 8 zur\xfcckgeben (3,5 Punkte)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"musterl\xf6sung-1",children:"Musterl\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="SuperLeagueTest.java" showLineNumbers',children:'public class SuperLeagueTest { // 0,5\n\n   private SuperLeague<Hero> avengers; // 0,5\n   @Mock // 0,5\n   private Hero superman; // 0,5\n   @Mock // 0,5\n   private Hero ironman; // 0,5\n   @Mock // 0,5\n   private Hero spiderman; // 0,5\n\n   @BeforeEach // 0,5\n   void setUp() { // 0,5\n      MockitoAnnotations.openMocks(this); // 1\n      avengers = new SuperLeague<>("Avengers", Universe.MARVEL, new HashMap<>()); // 1\n      avengers.getMembers().put(ironman, true); // 1\n      avengers.getMembers().put(spiderman, false); // 1\n   } // 5\n\n   @Test // 0,5\n   void testAddSuperHuman() { // 0,5\n      when(superman.universe()).thenReturn(Universe.DC); // 0,5\n      assertThrows(WrongUniverseException.class, () -> avengers.addSuperHuman(superman)); // 1,5\n   } // 3\n\n   @Test // 0,5\n   void testGetAllAvailableSuperHumans() { // 0,5\n      List<Hero> heroes = avengers.getAllAvailableSuperHumans(); // 0,5\n      assertEquals(1, heroes.size()); // 1\n   } // 2,5\n\n   @Test // 0,5\n   void testGetMostPowerfulSuperHuman() { // 0,5\n      when(ironman.power()).thenReturn(7); // 0,5\n      when(spiderman.power()).thenReturn(8); // 0,5\n      assertEquals(Optional.of(spiderman), avengers.getMostPowerfulSuperHuman()); // 1,5\n   } // 3,5\n\n} // 18\n'})}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-3-18-punkte",children:"Aufgabe 3 (18 Punkte)"}),"\n",(0,i.jsxs)(n.p,{children:["Erstelle die Klasse ",(0,i.jsx)(n.code,{children:"SingleQueries"})," anhand des abgebildeten Klassendiagramms."]}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm-2",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n   Single o-- Artist\n   Artist o-- Country\n   SingleQueries o-- Single\n   class Single {\n      <<record>>\n      name: String\n      artist: Artist\n      salesInMillions: int\n      publishingYear: String\n   }\n   class Artist {\n      <<record>>\n      name: String\n      country: Country\n      birthdate: LocalDate\n      isAlive: boolean\n   }\n   class Country {\n      <<enumeration>>\n      BRB\n      CHN\n      FRA\n      GBR\n      ITA\n      PRI\n      USA\n  }\n   class SingleQueries {\n      <<record>>\n      singles: List~Single~\n      +printAllSinglesWithMoreThan25MillionSalesPerCountry() void\n      +printAverageBirthYearOfAllDeceasedArtists() void\n      +isAnySingleFromChinaWithMoreThan10MillionSales() boolean\n      +getAllSinglesFromEdSheeran() List~Single~\n   }"}),"\n",(0,i.jsxs)(n.h3,{id:"hinweise-zur-klasse-singlequeries",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"SingleQueries"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void printAllSinglesWithMoreThan25MillionSalesPerCountry()"})," soll\nalle Singles, die sich mehr als 25 Millionen mal verkauft haben, gruppiert\nnach dem Land in der Form ",(0,i.jsx)(n.em,{children:"[Land des K\xfcnstlers]: [Singles]"})," ausgeben (4\nPunkte)"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void printAverageBirthYearOfAllDeceasedArtists()"})," soll das\ndurchschnittliche Geburtsjahr aller verstorbenen K\xfcnstler ausgeben. F\xfcr den\nFall, dass es keinen verstorbenen K\xfcnstler gibt, soll der Wert -1 ausgegeben\nwerden (5,5 Punkte)"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"boolean isAnySingleFromChinaWithMoreThan10MillionSales()"})," soll\nzur\xfcckgeben, ob es eine Single eines K\xfcnstlers aus China (3,5 Punkte) gibt,\nwelche sich mehr als 10 Millionen Mal verkauft hat"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<Single> getAllSinglesFromEdSheeran()"})," soll alle Singles des\nK\xfcnstlers Ed Sheeran (Land: Gro\xdfbritannien, Geburtstag: 17.02.1991, Status:\nlebendig) zur\xfcckgeben (4 Punkte)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"musterl\xf6sung-2",children:"Musterl\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="SingleQueries" showLineNumbers',children:'public record SingleQueries(List<Single> singles) { // 1\n\n   public void printAllSinglesWithMoreThan25MillionSalesPerCountry() { // 0,5\n      Map<Country, List<Single>> allSinglesWithMoreThan25MillionSalesPerCountry; // 0,5\n      allSinglesWithMoreThan25MillionSalesPerCountry = singles.stream() // 0,5\n            .filter(s -> s.salesInMillions() > 25) // 0,5\n            .collect(Collectors.groupingBy(s -> s.artist().country())); // 1\n      allSinglesWithMoreThan25MillionSalesPerCountry\n            .forEach((c, sl) -> System.out.println(c + ": " + sl)); // 1\n   } // 4\n\n   public void printAverageBirthYearOfAllDeceasedArtists() { // 0,5\n      OptionalDouble averageBirthYearOfAllDeceasedArtists; // 0,5\n      averageBirthYearOfAllDeceasedArtists = singles.stream() // 0,5\n            .map(Single::artist) // 0,5\n            .distinct() // 0,5\n            .filter(a -> !a.isAlive()) // 0,5\n            .mapToInt(a -> a.birthdate().getYear()) // 1\n            .average(); // 0,5\n      averageBirthYearOfAllDeceasedArtists.ifPresentOrElse(System.out::println,\n            () -> System.out.println(-1)); // 1\n   } // 5,5\n\n   public boolean isAnySingleFromChinaWithMoreThan10MillionSales() { // 0,5\n      boolean isAnySingleFromChinaWithMoreThan10MillionSales; // 0,5\n      isAnySingleFromChinaWithMoreThan10MillionSales = singles.stream() // 0,5\n            .filter(s -> s.salesInMillions() > 10) // 0,5\n            .anyMatch(s -> s.artist().country().equals(Country.CHN)); // 1\n      return isAnySingleFromChinaWithMoreThan10MillionSales; // 0,5\n   } // 3,5\n\n   public List<Single> getAllSinglesFromEdSheeran() { // 0,5\n      List<Single> allSinglesFromEdSheeran; // 0,5\n      Artist sheeran = new Artist("Ed Sheeran", Country.GBR, LocalDate.of(1991, 2, 17), true); // 1\n      allSinglesFromEdSheeran = singles.stream() // 0,5\n            .filter(s -> s.artist().equals(sheeran)) // 0,5\n            .toList(); // 0,5\n      return allSinglesFromEdSheeran; // 0,5\n   } // 4\n\n} // 18\n'})})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return a}});var s=r(67294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);