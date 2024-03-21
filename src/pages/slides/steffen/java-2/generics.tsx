import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function Generics(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Generics</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Generics</h2>
        </section>
        <section>
          <h2>Generische Typen</h2>
          <p className="fragment">
            In Java können Klassen und Interfaces generisch sein.
          </p>
          <p className="fragment">
            Generisch heißt, dass Funktionalität unabhängig von einem Typ
            implementiert werden können.
          </p>
        </section>
        <section>
          <h2>Beispiele Generische Klassen/Interfaces</h2>
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
          <h2>Beispiele ArrayList</h2>
          <p className="fragment">
            Egal ob wir Objekte vom Typ Human, Dog, String oder Integer in einer
            ArrayList abspeichern, wir haben immer die gleichen Methoden zur
            verfügung.
          </p>
          <p className="fragment">add, remove, size etc.</p>
        </section>
        <section>
          <h2>Beispiel Comparator</h2>
          <p className="fragment">
            Egal ob wir Comparator oder Comparable Klassen vom Typ Human, Dog,
            String oder Integer erstellen, wir haben immer die gleichen Methoden
            zur verfügung.
          </p>
          <p className="fragment">Collections.sort</p>
        </section>
        <section>
          <h2>Verwendung Generics I</h2>
          <p className="fragment">
            Will man in seiner Anwendung eine Liste von Menschen abspeichern ist
            der <b>spezifische</b> Typ bekannt.
          </p>
          <p className="fragment">
            Nach dem Klassennamen wird innerhalb von spitzen Klammern, der{' '}
            <b>spezifische</b> Typ angegeben.
          </p>
        </section>
        <section>
          <h2>Verwendung Generics II</h2>
          <pre className="fragment">
            <code
              data-line-numbers="3|6"
              className="java"
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
        <section>
          <h2>Implementierung Generics I</h2>
          <p className="fragment">
            Um eine generische Klasse zu erstellen, wird nach dem Klassennamen
            in spitzen Klammern der Typparameter angegeben.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T&gt; {\n' +
                  '  // implementierung der Klasse\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Typparameter I</h2>
          <pre>
            <code
              className="java"
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;A&gt; {\n' +
                  '  // implementierung der Klasse\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;HANS&gt; {\n' +
                  '  // implementierung der Klasse\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
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
          <h2>Typparameter II</h2>
          <pre>
            <code
              className="java"
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T,U&gt; {\n' +
                  '  // implementierung der Klasse\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
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
          <h2>Verwenden von Typparameter I</h2>
          <pre>
            <code
              data-line-numbers="1-15|1|3,12"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T&gt; {\n' +
                  '  private String teamName;\n' +
                  '  private ArrayList&lt;T&gt; teamMembers = new ArrayList&lt;&gt;();\n' +
                  '  public Team(String teamName) {\n' +
                  '    this.teamName = teamName;\n' +
                  '  }\n' +
                  '  \n' +
                  '  public String getTeamName() {\n' +
                  '    return this.teamName;\n' +
                  '  }\n' +
                  '  \n' +
                  '  public void addMember(T member) {\n' +
                  '    this.teamMembers.add(member);\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Verwenden von Typargumenten</h2>
          <pre>
            <code
              data-line-numbers="1-10|3|4|6-7|8"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Team&lt;FootballPlayer&gt; scf = new Team&lt;&gt;();\n' +
                  '    Team&lt;HockeyPlayer&gt; wildwings  = new Team&lt;&gt;();\n' +
                  '    \n' +
                  '    scf.addMember(new FootballPlayer("Steffen");\n' +
                  '    scf.addMember(new HockeyPlayer("Mirco"); // fails\n' +
                  '    wildwings.addMember(new HockeyPlayer("Mirco");\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Unterschied Parameter und Argument</h2>
          <pre>
            <code
              data-line-numbers="1-8|2|6"
              className="java"
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
          <h2>Unterschied Typparameter und Typargument</h2>
          <pre>
            <code
              data-line-numbers="1-6|1|2|5"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T&gt; { // Typparameter\n' +
                  '  public ArrayList&lt;T&gt; members; // Typargument\n' +
                  '}\n' +
                  '//...\n' +
                  'Team&lt;Human&gt; humanTeam = new Team&lt;&gt;();// Typargument\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">spezifisches Football- und Hockeyteam</li>
            <li className="fragment">Generische Team Klasse</li>
            <li className="fragment">Spieler eines Teams ausgeben</li>
          </ul>
        </section>
        <section>
          <h2>Einschränken von Typparametern I</h2>
          <p>
            Um noch mehr Funktionalitäten in eine generische Klasse auszulagern
            ist es notwendig den Typ einzuschränken.
          </p>
        </section>
        <section>
          <h2>Einschränken von Typparametern II</h2>
          <p>
            Mit <b>extends</b> und <b>super</b> können die möglichen Typen
            eingeschränkt werden.
          </p>
        </section>
        <section>
          <h2>Einschränken von Typparametern III</h2>
          <pre>
            <code
              className="java"
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T super Player&gt; {\n' +
                  '  // Player und Supertypen von Player erlaubt \n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Einschränken von Typplatzhaltern IV</h2>
          <pre>
            <code
              className="java"
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T extends Player&gt; {} //PBFE erlaubt\n' +
                  'public class Team&lt;T extends FootballPlayer&gt; {} //FE erlaubt\n' +
                  'public class Team&lt;T super Player&gt; {} // P erlaubt\n' +
                  'public class Team&lt;T super FootballPlayer&gt; {} //PF erlaubt',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">
              Spieler eines Generischen Teams ausgeben
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
