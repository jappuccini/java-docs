import Link from '@docusaurus/Link';
import { NKR } from '@site/src/components/Slides/nkr';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function GenericsAndOptional(): React.JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
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
                  '    Team&lt;FootballPlayer&gt; scf = new Team&lt;&gt;("SC Freiburg");\n' +
                  '    Team&lt;HockeyPlayer&gt; wildwings  = new Team&lt;&gt;("Wildwings");\n' +
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
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/generics">
              Demo - Generics
            </Link>
          </h2>
          <ul>
            <li className="fragment">spezifisches Football- und Hockeyteam</li>
            <li className="fragment">Generische Team Klasse</li>
            <li className="fragment">Problem: Spieler eines Teams ausgeben</li>
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
          <h2>Einschränken von Typparametern IV</h2>
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
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/generics">
              Demo - Generics
            </Link>
          </h2>
          <span>Spieler eines Generischen Teams ausgeben </span>
          <ul>
            <li className="fragment">Vererbung</li>
            <li className="fragment">Interface</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Optional</h2>
        </section>
        <section>
          <h2>Optional - Klasse</h2>
          <p className="fragment">
            Mit Hilfe der Optional Klasse kann man NullPointerExceptions einfach
            behandeln.
          </p>
          <p className="fragment">Was sind NullPointerExceptions?</p>
        </section>
        <section>
          <h2>Null Pointer Exception I</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  ' public String name;\n' +
                  ' public Dog(String name) {\n' +
                  '  this.name = name;\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Null Pointer Exception II</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Dog doggo = new Dog(null);\n' +
                  '    doggo.name.equals("Bello"); // funktioniert nicht\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Optional als Lösung</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  ' public Optional&lt;String&gt; name;\n' +
                  ' public Dog(String name) {\n' +
                  '  this.name = Optional.ofNullable(name);\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Optional - Wrapper um den echten Wert</h2>
          <p className="fragment">
            Die Optional Klasse verpackt den echten Wert hinter Methoden.
          </p>
          <p className="fragment">
            Mithilfe von Methoden kann überprüft werden, ob ein Wert Null ist
            oder nicht.
          </p>
        </section>
        <section>
          <h2>Optional - Methoden I</h2>
          <pre className="fragment">
            <code
              className="java"
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
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Optional - Methoden II*</h2>
          <pre className="fragment">
            <code
              className="java"
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
              Demo - Optional
            </Link>
          </h2>
          <ul>
            <li className="fragment">Human Middlename</li>
            <li className="fragment">University Search Student</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Record I</h2>
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
              className="java"
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
              className="java"
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
    </Slides>
  );
}
