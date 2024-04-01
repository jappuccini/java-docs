import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function GenericsAndMaps(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Generics</li>
            <li className="fragment">Maps</li>
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
          <h2>Beispiele Generische Klassen</h2>
          <ul>
            <li className="fragment">ArrayList</li>
            <li className="fragment">Optional</li>
          </ul>
          <p className="fragment">
            Beide Klassen stellen immer die gleiche Funktionalität bereit, egal
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
          <h2>Beispiel Optional</h2>
          <p className="fragment">
            Egal ob wir Objekte vom Typ Human, Dog, String oder Integer mit
            Optional.of, Optional.ofNullable oder Optional.empty erstellen, wir
            haben immer die gleichen Methoden zur verfügung.
          </p>
          <p className="fragment">isPresent, isEmpty, get</p>
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n' +
                  '    Optional&ltHuman&gt; human = Optional.empty();\n' +
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
            in spitzen Klammern der Platzhalter für einen Typ angegeben.
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
          <h2>Typplatzhalter I</h2>
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
            Der Namen des Platzhalters kann frei gewählt werden.
          </p>
        </section>
        <section>
          <h2>Typplatzhalter II</h2>
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
            Es können mehrere Platzhalter kommagetrennt angegeben werden.
          </p>
        </section>
        <section>
          <h2>Verwenden von Typplatzhaltern I</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Team&lt;T&gt; {\n' +
                  '  private String teamName;\n' +
                  '  private ArrayList&lt;T&gt; teamMembers = new ArrayList&lt;&gt;();\n' +
                  '  \n' +
                  '  public String teamName() {\n' +
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
          <h2>Verwenden von Typplatzhaltern II</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Team&lt;FootballPlayer&gt; scfreiburg = new Team&lt;&gt;();\n' +
                  '    Team&lt;HockeyPlayer&gt; wildwings  = new Team&lt;&gt;();\n' +
                  '    \n' +
                  '    scfreiburg.addMember(new FootballPlayer("Steffen");\n' +
                  '    scfreiburg.addMember(new HockeyPlayer("Mirco"); // fails\n' +
                  '    wildwings.addMember(new HockeyPlayer("Mirco");\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Football- und Hockeyteam</li>
            <li className="fragment">Generische Team Klasse</li>
            <li className="fragment">Spieler eines Teams ausgeben</li>
          </ul>
        </section>
        <section>
          <h2>Einschränken von Typplatzhaltern I</h2>
          <p>
            Um noch mehr Funktionalitäten in eine generische Klasse auszulagern
            ist es notwendig den Typ einzuschränken.
          </p>
        </section>
        <section>
          <h2>Einschränken von Typplatzhaltern II</h2>
          <p>
            Mit <b>extends</b> und <b>super</b> können die möglichen Typen
            eingeschränkt werden.
          </p>
        </section>
        <section>
          <h2>Einschränken von Typplatzhaltern III</h2>
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
      <section>
        <section>
          <h2>Maps</h2>
        </section>
        <section>
          <h2>Maps</h2>
          <p>
            Wir kennen das Array oder die ArrayList als Datenstruktur. Hierbei
            greifen wir über den Index auf Elemente zu.
          </p>
          <p className="fragment">
            Mithilfe einer HashMap lassen sich Daten in Form von
            Schlüssel-Wert-Paaren effizient speichern und abrufen.
          </p>
        </section>
        <section>
          <h4>Beispiel Schlüssel-Wert-Paare</h4>
          <ul>
            <li className="fragment">
              Studentendaten &rarr; MatrikelNummer, Student
            </li>
            <li className="fragment">Produktinventar &rarr; Produkt, Anzahl</li>
            <li className="fragment">StadtInfos &rarr; Stadtname, CityInfo</li>
            <li className="fragment">Hauptstädte &rarr; Land, Hauptstadt</li>
          </ul>
        </section>
        <section>
          <h2>Erzeugen einer HashMap</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Student steffen = new Student("Steffen");\n' +
                  '    HashMap&lt;Integer, Student&gt; students = new HashMap&lt;&gt;();\n' +
                  '    students.put(4545, steffen); // add value to map\n' +
                  '    students.get(4545); // get value from map\n' +
                  '    students.remove(4545); // remove value from map\n' +
                  '    students.clear(); // clear map\n' +
                  '    students.size(); // number of items in map\n' +
                  '    students.containsKey(4545); // check if key exists\n' +
                  '    students.containsValue(steffen); // check if value exists\n' +
                  '    students.keySet(); // get all keys as Set\n' +
                  '    students.entrySet(); // get all entries as Set-Entry\n' +
                  '    students.values(); // get all entries as Collection\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Studentendaten</li>
            <li className="fragment">Daten liegen unsortiert vor</li>
            <li className="fragment">Objekte als Schlüssel</li>
          </ul>
        </section>
        <section>
          <h2>Maps</h2>
          <p>Daten liegen unsortiert vor.</p>
          <p className="fragment">
            Maps mit Objekten als Schlüssel müssen je nach Anwendungsfall
            richtig implementiert werden.
          </p>
          <p className="fragment">
            equals - Methode muss zusätzlich zu hashCode implementiert werden
          </p>
          <p className="fragment">performance outlook</p>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <h2>Rest of the Day</h2>
        <ul>
          <li className="fragment">Generics</li>
          <li className="fragment">Maps</li>
        </ul>
      </section>
    </Slides>
  );
}
