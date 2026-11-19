import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '@site/src/components/Slides/nkr';

export default function GenericsOptional(): React.JSX.Element {
  return (
    <Slides title="Generics und Optional">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Generics und Optional</h1>
          <p>
            Generische Klassen verstehen und NullPointerExceptions mit Optional
            vermeiden.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Generics</li>
            <li className="fragment">Optional</li>
            <li className="fragment">Record I</li>
          </ul>
        </section>
      </section>

      <section data-topic="Generics verwenden">
        <section className="divider">
          <p className="kicker">Generics</p>
          <h2>Generics verwenden</h2>
          <p>Funktionalität unabhängig vom konkreten Typ nutzen.</p>
        </section>

        <section>
          <h2>Generische Typen</h2>
          <p className="fragment">
            In Java können Klassen und Interfaces generisch sein.
          </p>
          <p className="fragment">
            Generisch heißt, dass Funktionalität unabhängig von einem Typ
            implementiert werden kann.
          </p>
        </section>

        <section>
          <h2>Generische Klassen in der Java-API</h2>
          <ul>
            <li className="fragment">ArrayList</li>
            <li className="fragment">Comparator</li>
            <li className="fragment">Comparable</li>
          </ul>
          <p className="fragment">
            Alle Klassen stellen immer die gleiche Funktionalität bereit, egal
            welchen Typ wir verwenden.
          </p>
        </section>

        <section>
          <h2>Gleiche Methoden für jeden Typ</h2>
          <p className="fragment">
            Egal ob Human, Dog, String oder Integer — die Methoden sind immer
            die gleichen.
          </p>
          <ul>
            <li className="fragment">ArrayList: add, remove, size</li>
            <li className="fragment">
              Comparator und Comparable: <code>Collections.sort</code>
            </li>
          </ul>
        </section>

        <section>
          <h2>Typargumente angeben</h2>
          <p className="fragment">
            Der Typ steht in spitzen Klammern nach dem Klassennamen.
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers="3|6"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n' +
                  '  }\n' +
                  '}\n' +
                  'public class HumanComp implements Comparator&lt;Human&gt; {\n' +
                  '  public int compare(Human h1, Human h2) {\n' +
                  '    // implementation details\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Generische Klassen implementieren">
        <section className="divider">
          <p className="kicker">Generics</p>
          <h2>Generische Klassen implementieren</h2>
          <p>
            Mit einem Typparameter wird eine Klasse unabhängig vom konkreten
            Typ.
          </p>
        </section>

        <section>
          <h2>Typparameter benennen</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T&gt; {\n' +
                  '  // implementierung der Klasse\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;BLIBLABLUBB&gt; {\n' +
                  '  // implementierung der Klasse\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Der Bezeichner des Typparameters kann frei gewählt werden.
          </p>
        </section>

        <section>
          <h2>Mehrere Typparameter</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T, U&gt; {\n' +
                  '  // implementierung der Klasse\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T, U, V&gt; {\n' +
                  '  // implementierung der Klasse\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Es können mehrere Typparameter kommagetrennt angegeben werden.
          </p>
        </section>

        <section>
          <h2>Typparameter im Einsatz</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers="1-10|1|3|3,7"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T&gt; {\n' +
                  '  private String teamName;\n' +
                  '  private ArrayList&lt;T&gt; teamMembers = new ArrayList&lt;&gt;();\n' +
                  '  public Team(String teamName) {\n' +
                  '    this.teamName = teamName;\n' +
                  '  }\n' +
                  '  public void addMember(T member) {\n' +
                  '    this.teamMembers.add(member);\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Typargumente im Einsatz</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers="1-10|3|4|6-7|8"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Team&lt;FootballPlayer&gt; scf = new Team&lt;&gt;("SC Freiburg");\n' +
                  '    Team&lt;HockeyPlayer&gt; wildwings = new Team&lt;&gt;("Wildwings");\n' +
                  '\n' +
                  '    scf.addMember(new FootballPlayer("Steffen"));\n' +
                  '    scf.addMember(new HockeyPlayer("Mirco")); // fails\n' +
                  '    wildwings.addMember(new HockeyPlayer("Mirco"));\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Parameter und Argumente</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers="1-8|2|6"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static int add(int a, int b) { // Parameter\n' +
                  '    return a + b;\n' +
                  '  }\n' +
                  '  public static void main(String[] args) {\n' +
                  '    int result = Main.add(1, 2); // Argumente\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Typparameter und Typargumente</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers="1-6|1|2|5"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T&gt; { // Typparameter\n' +
                  '  public ArrayList&lt;T&gt; members; // Typargument\n' +
                  '}\n' +
                  '//...\n' +
                  'Team&lt;Human&gt; humanTeam = new Team&lt;&gt;(); // Typargument\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Typparameter einschränken">
        <section className="divider">
          <p className="kicker">Generics</p>
          <h2>Typparameter einschränken</h2>
          <p>
            Für mehr Funktionalität in generischen Klassen muss der Typ
            eingeschränkt werden.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/generics">
              Demo: Warum Typparameter einschränken?
            </Link>
          </h2>
          <ul>
            <li className="fragment">spezifisches Football- und Hockeyteam</li>
            <li className="fragment">Generische Team Klasse</li>
            <li className="fragment">Problem: Spieler eines Teams ausgeben</li>
          </ul>
        </section>

        <section>
          <h2>Eingrenzen mit extends und super</h2>
          <p>
            Mit <b>extends</b> und <b>super</b> können die möglichen Typen
            eingeschränkt werden.
          </p>
        </section>

        <section>
          <h2>Beispiele: extends und super</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T extends Player&gt; {\n' +
                  '  // Player und Subtypen von Player erlaubt\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T super Player&gt; {\n' +
                  '  // Player und Supertypen von Player erlaubt\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Erlaubte Typargumente</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Player {}\n' +
                  'public class BaseballPlayer extends Player {}\n' +
                  'public class FootballPlayer extends Player {}\n' +
                  'public class ExtremeFootballPlayer extends FootballPlayer {}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T extends Player&gt; {} // PBFE erlaubt\n' +
                  'public class Team&lt;T extends FootballPlayer&gt; {} // FE erlaubt\n' +
                  'public class Team&lt;T super Player&gt; {} // P erlaubt\n' +
                  'public class Team&lt;T super FootballPlayer&gt; {} // PF erlaubt',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/generics">
              Demo: Einschränken in der Praxis
            </Link>
          </h2>
          <p>Spieler eines generischen Teams ausgeben</p>
          <ul>
            <li className="fragment">Vererbung</li>
            <li className="fragment">Interface</li>
          </ul>
        </section>
      </section>

      <section data-topic="Optional">
        <section className="divider">
          <p className="kicker">NullPointerExceptions</p>
          <h2>Optional</h2>
          <p>Fehlende Werte sauber behandeln.</p>
        </section>

        <section>
          <h2>Die Klasse Optional</h2>
          <p className="fragment">
            Mit der Klasse Optional lassen sich NullPointerExceptions einfach
            behandeln.
          </p>
          <p className="fragment">Was sind NullPointerExceptions?</p>
        </section>

        <section>
          <h2>Beispielklasse Dog</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public String name;\n' +
                  '  public Dog(String name) {\n' +
                  '    this.name = name;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Auftreten einer NullPointerException</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Dog doggo = new Dog(null);\n' +
                  '    doggo.name.equals("Bello"); // funktioniert nicht\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Lösung mit Optional</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public Optional&lt;String&gt; name;\n' +
                  '  public Dog(String name) {\n' +
                  '    this.name = Optional.ofNullable(name);\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Optional als Wrapper</h2>
          <p className="fragment">
            Die Optional Klasse verpackt den echten Wert hinter Methoden.
          </p>
          <p className="fragment">
            Mithilfe von Methoden kann überprüft werden, ob ein Wert Null ist
            oder nicht.
          </p>
        </section>

        <section>
          <h2>Werte prüfen und lesen</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers="3-9|3|4|5|7|8"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Optional&lt;String&gt; name = Optional.of("Hans");\n' +
                  '    if(name.isPresent()) {\n' +
                  '      System.out.println(name.get());\n' +
                  '    }\n' +
                  '    if(name.isEmpty()) {\n' +
                  '      System.out.println("No Name");\n' +
                  '    }\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>ifPresent und ifPresentOrElse*</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Optional&lt;String&gt; name = Optional.of("Hans");\n' +
                  '    name.ifPresent((value) -> System.out.println(value));\n' +
                  '    name.ifPresentOrElse(\n' +
                  '      (value) -> System.out.println(value),\n' +
                  '      () -> System.out.println("No Name")\n' +
                  '    );\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <div className="fragment">
            <NKR />
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/optional">
              Demo: Optional in der Praxis
            </Link>
          </h2>
          <ul>
            <li className="fragment">Human Middlename</li>
            <li className="fragment">University Search Student</li>
          </ul>
        </section>
      </section>

      <section data-topic="Record I">
        <section className="divider">
          <p className="kicker">Datenklassen</p>
          <h2>Record I</h2>
          <p>Unveränderliche Datenklassen mit wenig Code.</p>
        </section>

        <section>
          <h2>Records</h2>
          <p className="fragment">
            Ein Record ist eine Datenklasse, deren Attribute nicht verändert
            werden können.
          </p>
          <p className="fragment">
            Eine Datenklasse hat somit finale Attribute und Getter.
          </p>
        </section>

        <section>
          <h2>Beispiel Record Dog</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'public record Dog(String name, int age) {}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Verwendung Record Dog</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Dog bello = new Dog("Bello", 12);\n' +
                  '    String name = bello.name();\n' +
                  '    int age = bello.age();\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/generics/">Generics Aufgaben</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/optionals/">Optional Aufgaben</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
