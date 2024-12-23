"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["398"],{8841:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>m,assets:()=>u,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"additional-material/daniel/java2/sample-exam","title":"Klausur","description":"","source":"@site/docs/additional-material/daniel/java2/sample-exam.md","sourceDirName":"additional-material/daniel/java2","slug":"/additional-material/daniel/java2/sample-exam","permalink":"/java-docs/pr-preview/pr-239/additional-material/daniel/java2/sample-exam","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/java2/sample-exam.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Klausur","description":"","sidebar_position":10,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"Programmierung 2","permalink":"/java-docs/pr-preview/pr-239/additional-material/daniel/java2/"},"next":{"title":"Klausurergebnisse","permalink":"/java-docs/pr-preview/pr-239/additional-material/daniel/java2/exam-results"}}'),r=i("85893"),a=i("50065");let l={title:"Klausur",description:"",sidebar_position:10,tags:[]},t=void 0,u={},o=[{value:"Hinweise zur Klausur",id:"hinweise-zur-klausur",level:2},{value:"Aufgabe 1 (16 Punkte)",id:"aufgabe-1-16-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:3},{value:"Hinweise zur Klasse <em>SuperLeague</em>",id:"hinweise-zur-klasse-superleague",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:3},{value:"Aufgabe 2 (14 Punkte)",id:"aufgabe-2-14-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-1",level:3},{value:"Hinweise zur Klasse <em>SuperLeagueTest</em>",id:"hinweise-zur-klasse-superleaguetest",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-1",level:3},{value:"Aufgabe 3 (22 Punkte)",id:"aufgabe-3-22-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-2",level:3},{value:"Hinweise zur Klasse <em>SingleQueries</em>",id:"hinweise-zur-klasse-singlequeries",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-2",level:3}];function d(e){let n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"hinweise-zur-klausur",children:"Hinweise zur Klausur"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Die in dieser Klausur verwendeten Personenbezeichnungen beziehen sich \u2013 sofern\nnicht anders kenntlich gemacht \u2013 auf alle Geschlechter"}),"\n",(0,r.jsx)(n.li,{children:"Pakete und Klassenimporte m\xfcssen nicht angegeben werden"}),"\n",(0,r.jsx)(n.li,{children:"Es kann davon ausgegangen werden, dass s\xe4mtliche Klassen entsprechende\nImplementierungen der Object-Methoden besitzen"}),"\n",(0,r.jsxs)(n.li,{children:["Der Stereotyp ",(0,r.jsx)(n.code,{children:"enumeration"})," impliziert, dass die Aufz\xe4hlung einen passenden\nKonstruktor sowie gegebenenfalls passende Getter f\xfcr alle Attribute besitzt"]}),"\n",(0,r.jsxs)(n.li,{children:["Der Stereotyp ",(0,r.jsx)(n.code,{children:"record"})," impliziert, dass die Datenklasse einen passenden\nKonstruktor, Getter zu allen Attributen sowie entsprechende Implementierungen\nder Object-Methoden besitzt"]}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie in der Vorlesung gezeigt implementiert werden"}),"\n",(0,r.jsx)(n.li,{children:"Annotationen der Lombok-Bibliothek d\xfcrfen verwendet werden"}),"\n",(0,r.jsxs)(n.li,{children:["Die Konsolenausgaben-Methoden der Klasse ",(0,r.jsx)(n.code,{children:"PrintStream"})," d\xfcrfen sinnvoll gek\xfcrzt\ngeschrieben werden (zum Beispiel ",(0,r.jsx)(n.em,{children:'syso("Hello World")'})," statt\n",(0,r.jsx)(n.em,{children:'System.out.println("Hello World")'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Methoden- und Attributsbezeichner d\xfcrfen sinnvoll gek\xfcrzt geschrieben werden\n(zum Beispiel ",(0,r.jsx)(n.em,{children:"getLWMCP()"})," statt ",(0,r.jsx)(n.em,{children:"getLectureWithMostCreditPoints()"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"aufgabe-1-16-punkte",children:"Aufgabe 1 (16 Punkte)"}),"\n",(0,r.jsxs)(n.p,{children:["Erstelle die Klasse ",(0,r.jsx)(n.code,{children:"SuperLeague<T extends SuperHuman>"})," anhand des abgebildeten\nKlassendiagrams."]}),"\n",(0,r.jsx)(n.h3,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    SuperHuman <|-- Villain : extends\n    SuperHuman <|-- Hero : extends\n    Universe --o SuperHuman\n    SuperLeague~T extends SuperHuman~ o-- Universe\n    WrongUniverseException <.. SuperLeague~T extends SuperHuman~ : throws\n\n    class SuperHuman {\n        <<abstract>>\n        -name: String #123;final#125;\n        -universe: Universe #123;final#125;\n        -power: int #123;final#125;\n        +SuperHuman(name: String, universe: Universe, power: int)\n        +name() String\n        +universe() Universe\n        +power() int\n    }\n\n    class Villain {\n        +Villain(name: String, universe: Universe, power: int)\n    }\n\n    class Hero {\n        +Hero(name: String, universe: Universe, power: int)\n    }\n\n    class Universe {\n        <<enumeration>>\n        MARVEL\n        DC\n    }\n\n    class WrongUniverseException {\n        <<exception>>\n    }\n\n    class SuperLeague~T extends SuperHuman~ {\n        -name: String #123;final#125;\n        -universe: Universe #123;final#125;\n        -members: Map~T, Boolean~ #123;final#125;\n        +SuperLeague(name: String, universe: Universe, members: Map~T, Boolean~)\n        +addSuperHuman(t: T) void\n        +getAllAvailableSuperHumans() List~T~\n        +getMembers() Map~T, Boolean~\n        +getMostPowerfulSuperHuman() Optional~T~\n        +getName() String\n        +getUniverse() Universe\n        +sendSuperHumanOnMission(t: T) void\n    }"}),"\n",(0,r.jsxs)(n.h3,{id:"hinweise-zur-klasse-superleague",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"SuperLeague"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Die Schl\xfcssel-Werte-Paare des Assoziativspeichers beinhalten als Schl\xfcssel die\n\xdcbermenschen der Liga sowie als Wert deren Verf\xfcgbarkeit"}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Optional<T> getMostPowerfulSuperHuman()"})," soll den st\xe4rksten\n\xdcbermenschen der Liga zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addSuperHuman(t: T)"})," soll der Liga den eingehenden\n\xdcbermenschen als verf\xfcgbares Mitglied hinzuf\xfcgen. F\xfcr den Fall, dass das\nUniversum des eingehenden \xdcbermenschen nicht dem Universum der Liga\nentspricht, soll die Ausnahme ",(0,r.jsx)(n.code,{children:"WrongUniverseException"})," ausgel\xf6st werden"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<T> getAllAvailableSuperHumans()"})," soll alle verf\xfcgbaren\n\xdcbermenschen der Liga zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void sendSuperHumanOnMission(t: T)"})," soll die Verf\xfcgbarkeit des\neingehenden \xdcbermenschen auf ",(0,r.jsx)(n.em,{children:"nicht verf\xfcgbar"})," setzen"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="SuperLeage.java" showLineNumbers',children:"/* Option A */\npublic record SuperLeague<T extends SuperHuman>\n  (String name, Universe universe, Map<T, Boolean> members) { // 1\n/* Option A */\n\n/* Option B */\n@Data // 0,5\npublic class SuperLeague<T extends SuperHuman> { // 0,125\n  private final String name; // 0,125\n  private final Universe universe; // 0,125\n  private final Map<T, Boolean> members; // 0,125\n/* Option B */\n\n/* Option C */\npublic class SuperLeague<T extends SuperHuman> { // 0,125\n  private final String name; // 0,125\n  private final Universe universe; // 0,125\n  private final Map<T, Boolean> members; // 0,125\n  public SuperLeague(String name, Universe universe, Map<T, Boolean> members) {\n    this.name = name;\n    this.universe = universe;\n    this.members = members;\n  } // 0,125\n  public String getName() { return name; } // 0,125\n  public Universe getUniverse() { return universe; } // 0,125\n  public Map<T, Boolean> getMembers() { return members; } // 0,125\n/* Option C */\n\n  public Optional<T> getMostPowerfulSuperHuman() { // 0,5\n    T mostPowerfulSuperHuman = null; // 0,5\n    int power = 0; // 0,5\n    for (T t : members.keySet()) { // 1\n      if (t.power() > power) { // 0,5\n        power = t.power(); // 0,5\n        mostPowerfulSuperHuman = t; // 0,5\n      }\n    }\n    return Optional.ofNullable(mostPowerfulSuperHuman); // 1\n  } // 5\n\n  public void addSuperHuman(T t) throws WrongUniverseException { // 1\n    if (!t.universe().equals(universe)) { // 1\n      throw new WrongUniverseException(); // 1\n    }\n\n    members.put(t, true); // 1\n  } // 4\n\n  public List<T> getAllAvailableSuperHumans() { // 0,5\n    List<T> allAvailableSuperHumans = new ArrayList<>(); // 0,5\n    for (Entry<T, Boolean> entry : members.entrySet()) { // 1\n      if (entry.getValue().equals(true)) { // 1\n        allAvailableSuperHumans.add(entry.getKey()); // 1\n      }\n    }\n    return allAvailableSuperHumans; // 0,5\n  } // 4,5\n\n  public void sendSuperHumanOnMission(T t) { // 0,5\n    members.put(t, false); // 1\n  } // 1,5\n\n} // 16\n"})}),"\n",(0,r.jsx)(n.h2,{id:"aufgabe-2-14-punkte",children:"Aufgabe 2 (14 Punkte)"}),"\n",(0,r.jsxs)(n.p,{children:["Erstelle die JUnit-5-Testklasse ",(0,r.jsx)(n.code,{children:"SuperLeagueTest"})," anhand des abgebildeten\nKlassendiagramms."]}),"\n",(0,r.jsx)(n.h3,{id:"klassendiagramm-1",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    SuperLeagueTest o-- Hero\n    SuperLeagueTest o-- SuperLeague\n    SuperHuman <|-- Villain : extends\n    SuperHuman <|-- Hero : extends\n    Universe --o SuperHuman\n    SuperLeague~T extends SuperHuman~ o-- Universe\n    WrongUniverseException <.. SuperLeague~T extends SuperHuman~ : throws\n\n    class SuperHuman {\n        <<abstract>>\n        -name: String #123;final#125;\n        -universe: Universe #123;final#125;\n        -power: int #123;final#125;\n        +SuperHuman(name: String, universe: Universe, power: int)\n        +name() String\n        +universe() Universe\n        +power() int\n    }\n\n    class Villain {\n        +Villain(name: String, universe: Universe, power: int)\n    }\n\n    class Hero {\n        +Hero(name: String, universe: Universe, power: int)\n    }\n\n    class Universe {\n        <<enumeration>>\n        MARVEL\n        DC\n    }\n\n    class WrongUniverseException {\n        <<exception>>\n    }\n\n    class SuperLeague~T extends SuperHuman~ {\n        -name: String #123;final#125;\n        -universe: Universe #123;final#125;\n        -members: Map~T, Boolean~ #123;final#125;\n        +SuperLeague(name: String, universe: Universe, members: Map~T, Boolean~)\n        +addSuperHuman(t: T) void\n        +getAllAvailableSuperHumans() List~T~\n        +getMembers() Map~T, Boolean~\n        +getMostPowerfulSuperHuman() Optional~T~\n        +getName() String\n        +getUniverse() Universe\n        +sendSuperHumanOnMission(t: T) void\n    }\n\n    class SuperLeagueTest {\n        <<test>>\n        -avengers: SuperLeague~Hero~\n        -superman: Hero\n        -ironman: Hero\n        -spiderman: Hero\n        +setUp() void\n        +testAddSuperHuman() void\n        +testGetAllAvailableSuperHumans() void\n        +testGetMostPowerfulSuperHuman() void\n    }"}),"\n",(0,r.jsxs)(n.h3,{id:"hinweise-zur-klasse-superleaguetest",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"SuperLeagueTest"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Lebenszyklus-Methode ",(0,r.jsx)(n.code,{children:"void setUp()"})," soll den Superhelden ",(0,r.jsx)(n.em,{children:"Superman"})," (Name:\nSuperman, Universum: DC, St\xe4rke: 10), den Superhelden ",(0,r.jsx)(n.em,{children:"Iron Man"})," (Name: Iron\nMan, Universum: MARVEL, St\xe4rke: 7), den Superhelden ",(0,r.jsx)(n.em,{children:"Spider-Man"})," (Name:\nSpider-Man, Universum: MARVEL, St\xe4rke: 8) sowie die Superheldenliga ",(0,r.jsx)(n.em,{children:"Avengers"}),"\n(Name: Avengers, Universum: MARVEL) erstellen und den entsprechenden\nAttributen zuweisen und die Superhelden ",(0,r.jsx)(n.em,{children:"Iron Man"})," sowie ",(0,r.jsx)(n.em,{children:"Spider-Man"})," der\nSuperheldenliga ",(0,r.jsx)(n.em,{children:"Avengers"})," als verf\xfcgbare Superhelden hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Testmethode ",(0,r.jsx)(n.code,{children:"void testAddSuperHuman()"})," soll pr\xfcfen, ob beim Aufruf der\nMethode ",(0,r.jsx)(n.code,{children:"void addSuperHuman(t: T)"})," mit dem Superhelden ",(0,r.jsx)(n.em,{children:"Superman"})," die Ausnahme\n",(0,r.jsx)(n.code,{children:"WrongUniverseException"})," ausgel\xf6st wird"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Testmethode ",(0,r.jsx)(n.code,{children:"void testGetAllAvailableSuperHumans()"})," soll den Superheld\n",(0,r.jsx)(n.em,{children:"Spider-Man"})," auf eine Mission schicken und pr\xfcfen, ob beim Aufruf der Methode\n",(0,r.jsx)(n.code,{children:"List<T> getAllAvailableSuperHumans()"})," eine Liste der Gr\xf6\xdfe 1 zur\xfcckgegeben\nwird"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Testmethode ",(0,r.jsx)(n.code,{children:"void testGetMostPowerfulSuperHuman()"})," soll pr\xfcfen, ob beim\nAufruf der Methode ",(0,r.jsx)(n.code,{children:"Optional<T> getMostPowerfulSuperHuman()"})," der Superheld\n",(0,r.jsx)(n.em,{children:"Spider-Man"})," als Optional zur\xfcckgegeben wird"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"musterl\xf6sung-1",children:"Musterl\xf6sung"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="SuperLeagueTest.java" showLineNumbers',children:'public class SuperLeagueTest { // 0,5\n\n  private SuperLeague<Hero> avengers; // 0,25\n  private Hero superman; // 0,25\n  private Hero ironman; // 0,25\n  private Hero spiderman; // 0,25\n\n  @BeforeEach // 0,25\n  void setUp() { throws WrongUniverseException { // 0,25 +0,5 (bei Option A)\n    superman = new Hero("Superman", Universe.DC, 10); // 1\n    ironman = new Hero("Iron Man", Universe.MARVEL, 7); // 1\n    spiderman = new Hero("Spider-Man", Universe.MARVEL, 8); // 1\n    avengers = new SuperLeague<>("Avengers", Universe.MARVEL, new HashMap<>()); // 1\n\n    /* Option A */\n    avengers.addSuperHuman(ironman); // 1\n    avengers.addSuperHuman(spiderman); // 1\n    /* Option A */\n\n    /* Option B */\n    avengers.members().put(ironman, true); // 1\n    avengers.members().put(spiderman, true); // 1\n    /* Option B */\n  } // 6,5\n\n  @Test // 0,25\n  void testAddSuperHuman() { // 0,25\n    assertThrows(WrongUniverseException.class, () -> avengers.addSuperHuman(superman)); // 1,5\n  } // 2\n\n  @Test // 0,25\n  void testGetAllAvailableSuperHumans() { // 0,25\n    avengers.sendSuperHumanOnMission(spiderman); // 0,5\n    List<Hero> heroes = avengers.getAllAvailableSuperHumans(); // 0,5\n    assertEquals(1, heroes.size()); // 1\n  } // 2,5\n\n  @Test // 0,25\n  void testGetMostPowerfulSuperHuman() { // 0,25\n    /* Option A */\n    assertEquals(spiderman, avengers.getMostPowerfulSuperHuman().get()); // 1\n    /* Option A */\n\n    /* Option B */\n    assertEquals(Optional.of(spiderman), avengers.getMostPowerfulSuperHuman()); // 1\n    /* Option B */\n  } // 1,5\n\n} // 14\n'})}),"\n",(0,r.jsx)(n.h2,{id:"aufgabe-3-22-punkte",children:"Aufgabe 3 (22 Punkte)"}),"\n",(0,r.jsxs)(n.p,{children:["Erstelle die Klasse ",(0,r.jsx)(n.code,{children:"SingleQueries"})," anhand des abgebildeten Klassendiagramms."]}),"\n",(0,r.jsx)(n.h3,{id:"klassendiagramm-2",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Single o-- Artist\n    Artist o-- Country\n    SingleQueries o-- Single\n\n    class Single {\n        <<record>>\n        name: String\n        artist: Artist\n        salesInMillions: int\n        publishingYear: String\n    }\n\n    class Artist {\n        <<record>>\n        name: String\n        country: Country\n        birthdate: LocalDate\n        isAlive: boolean\n    }\n\n    class Country {\n        <<enumeration>>\n        BRB\n        CHN\n        FRA\n        GBR\n        ITA\n        PRI\n        USA\n    }\n\n    class SingleQueries {\n        <<record>>\n        singles: List~Single~\n        +printAllSinglesWithMoreThan25MillionSalesPerCountry() void\n        +printAverageBirthYearOfAllDeceasedArtists() void\n        +isAnySingleFromChinaWithMoreThan10MillionSales() boolean\n        +getTop3SinglesOfThisCenturyBySalesInMillions() List~String~\n        +getAllSinglesFromEdSheeran() List~Single~\n    }"}),"\n",(0,r.jsxs)(n.h3,{id:"hinweise-zur-klasse-singlequeries",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"SingleQueries"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void printAllSinglesWithMoreThan25MillionSalesPerCountry()"})," soll\nalle Singles, die sich mehr als 25 Millionen mal verkauft haben, gruppiert\nnach dem Land in der Form ",(0,r.jsx)(n.em,{children:"Artist.country: [Single, Single,...]"})," ausgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void printAverageBirthYearOfAllDeceasedArtists()"})," soll das\ndurchschnittliche Geburtsjahr aller verstorbenen K\xfcnstler bzw. aller\nverstorbenen K\xfcnstlerinnen ausgeben. F\xfcr den Fall, dass es keinen verstorbenen\nK\xfcnstler bzw. keine verstorbene K\xfcnstlerin gibt, soll der Wert -1 ausgegeben\nwerden"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"boolean isAnySingleFromChinaWithMoreThan10MillionSales()"})," soll\nzur\xfcckgeben, ob es eine Single eines K\xfcnstlers bzw. einer K\xfcnstlerin aus China\ngibt, welches sich mehr als 10 Millionen Mal verkauft hat"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<String> getTop3SinglesOfThisCenturyBySalesInMillions()"})," soll\ndie 3 am h\xe4ufigsten verkauften Singles des jetzigen Jahrtausends sortiert nach\nder Anzahl Verk\xe4ufe in Millionen in der Form ",(0,r.jsx)(n.em,{children:"Single.name: Artist.name,\nSingle.salesInMillions Millionen"})," zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<Single> getAllSinglesFromEdSheeran()"})," soll alle Singles des\nK\xfcnstlers Ed Sheeran (Land: Gro\xdfbritannien, Geburtstag: 17.02.1991, Status:\nlebendig) zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"musterl\xf6sung-2",children:"Musterl\xf6sung"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="SingleQueries" showLineNumbers',children:'public record SingleQueries(List<Single> singles) { // 1\n\n  public void printAllSinglesWithMoreThan25MillionSalesPerCountry() { // 0,5\n    Map<Country, List<Single>> allSinglesWithMoreThan25MillionSalesPerCountry; // 0,25\n    allSinglesWithMoreThan25MillionSalesPerCountry = singles.stream() // 0,5\n      .filter(s -> s.salesInMillions() > 25) // 0,5\n      .collect(Collectors.groupingBy(s -> s.artist().country())); // 1\n\n    allSinglesWithMoreThan25MillionSalesPerCountry\n      .forEach((c, sl) -> System.out.println(c + ": " + sl)); // 1,25\n  } // 4\n\n  public void printAverageBirthYearOfAllDeceasedArtists() { // 0,5\n    OptionalDouble averageBirthYearOfAllDeceasedArtists; // 0,25\n    averageBirthYearOfAllDeceasedArtists = singles.stream() // 0,5\n      .map(Single::artist) // 0,5\n      .distinct() // 0,5\n      .filter(a -> !a.isAlive()) // 0,5\n      .mapToInt(a -> a.birthdate().getYear()) // 1\n      .average(); // 0,5\n\n    averageBirthYearOfAllDeceasedArtists\n      .ifPresentOrElse(System.out::println, () -> System.out.println(-1)); // 1,25\n  } // 5,5\n\n  public boolean isAnySingleFromChinaWithMoreThan10MillionSales() { // 0,5\n    boolean isAnySingleFromChinaWithMoreThan10MillionSales; // 0,25\n    isAnySingleFromChinaWithMoreThan10MillionSales = singles.stream() // 0,5\n      .filter(s -> s.salesInMillions() > 10) // 0,5\n      .anyMatch(s -> s.artist().country().equals(Country.CHN)); // 1\n    return isAnySingleFromChinaWithMoreThan10MillionSales; // 0,25\n  } // 3\n\n  public List<String> getTop3SinglesOfThisCenturyBySalesInMillions() { // 0,5\n    List<String> top3SinglesOfThisCenturyBySalesInMillions; // 0,25\n    top3SinglesOfThisCenturyBySalesInMillions = singles.stream() // 0,5\n      .filter(s -> s.publishingYear().compareTo("2000") >= 0) // 1\n      .sorted((s1, s2) -> Integer.valueOf(s2.salesInMillions()).compareTo(s1.salesInMillions())) // 1\n      .map(s -> s.name() + ": " + s.artist().name() + ", " + s.salesInMillions() + " Millionen") // 1\n      .limit(3) // 0,5\n      .toList(); // 0,5\n    return top3SinglesOfThisCenturyBySalesInMillions; // 0,25\n  } // 5\n\n  public List<Single> getAllSinglesFromEdSheeran() { // 0,5\n    List<Single> allSinglesFromEdSheeran; // 0,25\n    Artist sheeran = new Artist("Ed Sheeran", Country.GBR, LocalDate.of(1991, 2, 17), true); // 1\n    allSinglesFromEdSheeran = singles.stream() // 0,5\n      .filter(s -> s.artist().equals(sheeran)) // 0,5\n      .toList(); // 0,5\n    return allSinglesFromEdSheeran; // 0,25\n  } // 3,5\n\n} // 22\n'})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return l}});var s=i(67294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);