import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';

export default function SetsMapsHashesRecords(): React.JSX.Element {
  return (
    <Slides title="Sets, Maps, Hashes und Records">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Sets, Maps, Hashes und Records</h1>
          <p>
            Mengen, Schlüssel-Wert-Paare und Hashing verstehen und Records als
            Map-Schlüssel einsetzen.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Set</li>
            <li className="fragment">Map</li>
            <li className="fragment">Hashes</li>
            <li className="fragment">HashCode und Equals</li>
            <li className="fragment">Records im Detail</li>
          </ul>
        </section>
      </section>

      <section data-topic="Set">
        <section className="divider">
          <p className="kicker">Datenstrukturen</p>
          <h2>Set</h2>
          <p>Eine Menge speichert jedes Element höchstens einmal.</p>
        </section>

        <section>
          <h2>Was ist ein Set?</h2>
          <ul>
            <li className="fragment">
              <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html">
                Set
              </Link>{' '}
              ist ein Interface
            </li>
            <li className="fragment">Realisiert eine Menge</li>
            <li className="fragment">Keine doppelten Elemente</li>
            <li className="fragment">Vereinigung (Union)</li>
            <li className="fragment">Durchschnitt (Intersection)</li>
            <li className="fragment">Differenz (Difference)</li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashSet.html">
              HashSet
            </Link>
          </h2>
          <p className="fragment">implementiert das Set-Interface</p>
          <p className="fragment">hat einen Typparameter</p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/hashcollection/hashset/Example.java">
              Demo: HashSet
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              Zwei Mengen erstellen: (1, 2, 3, 4) und (2, 3, 5)
            </li>
            <li className="fragment">Vereinigung (Union)</li>
            <li className="fragment">Durchschnitt (Intersection)</li>
            <li className="fragment">Differenz (Difference)</li>
          </ul>
        </section>

        <section>
          <h2>Methoden</h2>
          <pre className="fragment">
            <code
              data-line-numbers="2-3|4-7|8|9-11"
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  '// ...\n' +
                  '  Set&lt;Integer&gt; numbers = new HashSet&lt;&gt;();\n' +
                  '  Set&lt;Integer&gt; otherNumbers = new HashSet&lt;&gt;();\n' +
                  '  numbers.add(4545); // add entry\n' +
                  '  numbers.remove(4545); // remove entry\n' +
                  '  numbers.clear(); // remove all entries\n' +
                  '  numbers.size(); // number of entries\n' +
                  '  numbers.contains(4545); // entry exists\n' +
                  '  numbers.addAll(otherNumbers); // union\n' +
                  '  numbers.retainAll(otherNumbers); // intersection\n' +
                  '  numbers.removeAll(otherNumbers); // difference\n' +
                  '// ...\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Map">
        <section className="divider">
          <p className="kicker">Datenstrukturen</p>
          <h2>Map</h2>
          <p>Jedem Schlüssel wird genau ein Wert zugeordnet.</p>
        </section>

        <section>
          <h2>Was ist eine Map?</h2>
          <ul>
            <li className="fragment">
              <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html">
                Map
              </Link>{' '}
              ist ein Interface
            </li>
            <li className="fragment">Speichert Schlüssel-Wert-Paare</li>
            <li className="fragment">
              Jeder Schlüssel kommt höchstens einmal vor
            </li>
            <li className="fragment">
              Prüfen, ob ein Schlüssel oder Wert existiert
            </li>
            <li className="fragment">
              Zugriff auf alle Schlüssel, Werte oder Schlüssel-Wert-Paare
            </li>
          </ul>
        </section>

        <section>
          <h2>Beispiele für Schlüssel-Wert-Paare</h2>
          <ul>
            <li className="fragment">
              Studentendaten &rarr; Matrikelnummer, Student
            </li>
            <li className="fragment">Produktinventar &rarr; Produkt, Anzahl</li>
            <li className="fragment">Stadtinfos &rarr; Stadtname, CityInfo</li>
            <li className="fragment">Hauptstädte &rarr; Land, Hauptstadt</li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html">
              HashMap
            </Link>
          </h2>
          <p className="fragment">implementiert das Map-Interface</p>
          <p className="fragment">hat zwei Typparameter</p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/hashcollection/hashmap/studentgrades/Example.java">
              Demo: HashMap
            </Link>
          </h2>
          <ul>
            <li className="fragment">Map erstellen (Name/Note)</li>
            <li className="fragment">
              Noten hinzufügen, überschreiben, lesen und löschen
            </li>
            <li className="fragment">Schlüssel, Werte und Einträge ausgeben</li>
          </ul>
        </section>

        <section>
          <h2>Methoden</h2>
          <pre className="fragment">
            <code
              data-line-numbers="2-13|3|4-8|9-10|11-13"
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  '// ...\n' +
                  '  Student steffen = new Student("Steffen");\n' +
                  '  Map&lt;Integer, Student&gt; students = new HashMap&lt;&gt;();\n' +
                  '  students.put(4545, steffen); // add entry\n' +
                  '  students.get(4545); // get entry\n' +
                  '  students.remove(4545); // remove entry\n' +
                  '  students.clear(); // remove all entries\n' +
                  '  students.size(); // number of entries\n' +
                  '  students.containsKey(4545); // key exists\n' +
                  '  students.containsValue(steffen); // value exists\n' +
                  '  students.keySet(); // get all keys as Set\n' +
                  '  students.values(); // get all values as Collection\n' +
                  '  students.entrySet(); // get all entries as Set\n' +
                  '// ...\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Hashes">
        <section className="divider">
          <p className="kicker">Hashing</p>
          <h2>Hashes</h2>
          <p>
            Wie aus Daten ein Index wird – und warum Kollisionen dazugehören.
          </p>
        </section>

        <section>
          <h2>Was ist ein Hashwert?</h2>
          <ul>
            <li className="fragment">Ergebnis einer Hashfunktion</li>
            <li className="fragment">Dient als Index in einer Hash-Tabelle</li>
          </ul>
        </section>

        <section>
          <h2>Was ist eine Hashfunktion?</h2>
          <p>
            Eine Hashfunktion bildet aus einer großen Menge von Daten eine
            geringere Menge von Daten ab.
          </p>
        </section>

        <section>
          <h2>Eigenschaften einer Hashfunktion</h2>
          <ul>
            <li className="fragment">Deterministisch</li>
            <li className="fragment">Gleichmäßige Verteilung</li>
            <li className="fragment">Kollisionsbehaftet</li>
            <li className="fragment">Nicht eindeutig umkehrbar</li>
          </ul>
        </section>

        <section>
          <h2>Was ist eine Hashkollision?</h2>
          <p className="fragment">
            Eine Hashkollision tritt auf, wenn zwei unterschiedliche
            Eingabedaten denselben Hashwert erzeugen.
          </p>
        </section>

        <section>
          <h2>Beispiel: Hashfunktion</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Summe</th>
                <th>Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fragment">Steffen</td>
                <td
                  data-tooltip="S:83 t:116 e:101 f:102 f:102 e:101 n:110"
                  tabIndex={0}
                  className="fragment"
                >
                  715
                </td>
                <td data-tooltip="715 % 4" tabIndex={0} className="fragment">
                  3
                </td>
              </tr>
              <tr>
                <td className="fragment">Mirco</td>
                <td
                  data-tooltip="M:77 i:105 r:114 c:99 o:111"
                  tabIndex={0}
                  className="fragment"
                >
                  506
                </td>
                <td data-tooltip="506 % 4" tabIndex={0} className="fragment">
                  2
                </td>
              </tr>
              <tr>
                <td className="fragment">Marianna</td>
                <td
                  data-tooltip="M:77 a:97 r:114 i:105 a:97 n:110 n:110 a:97"
                  tabIndex={0}
                  className="fragment"
                >
                  807
                </td>
                <td data-tooltip="807 % 4" tabIndex={0} className="fragment">
                  3
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <span className="fragment">Deterministisch, </span>
            <span className="fragment">Kollisionsbehaftet, </span>
            <span className="fragment">Nicht eindeutig umkehrbar</span>
          </p>
        </section>

        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Reduktion auf einen Wert</li>
            <li className="fragment">Kollisionen</li>
          </ul>
        </section>
      </section>

      <section data-topic="HashCode und Equals">
        <section className="divider">
          <p className="kicker">Hashing</p>
          <h2>HashCode und Equals</h2>
          <p>
            Warum <code>HashMap</code> und <code>HashSet</code> ohne{' '}
            <code>hashCode</code> und <code>equals</code> keine Schlüssel
            finden.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/hashcollection/hashmap/dogowners/bug">
              Demo: Hunde als Map-Schlüssel
            </Link>
          </h2>
          <ul>
            <li className="fragment">Hund als Schlüssel, Besitzer als Wert</li>
            <li className="fragment">
              <code>get</code> mit einem neuen Hund gleichen Namens
            </li>
            <li className="fragment">
              <code>get</code> liefert <code>null</code>
            </li>
            <li className="fragment">
              <code>size</code> ist trotzdem <code>1</code>
            </li>
          </ul>
          <p className="fragment">
            Die Map arbeitet korrekt – <code>Dog</code> legt nur nicht fest,
            wann zwei Hunde gleich sind.
          </p>
        </section>

        <section>
          <h2>Funktionsweise der put-Methode einer HashMap</h2>
          <ol>
            <li className="fragment">
              Hashwert des Schlüssels berechnen &rarr; Index
            </li>
            <li className="fragment">
              Falls kein Eintrag am Index &rarr; einfügen
            </li>
            <li className="fragment">
              Falls Eintrag am Index &rarr; Schlüssel vergleichen
            </li>
            <li className="fragment">
              Falls Schlüssel gleich &rarr; Wert ersetzen
            </li>
            <li className="fragment">
              Falls Schlüssel ungleich &rarr; Eintrag im Bucket anhängen
            </li>
            <li className="fragment">
              Falls der Bucket zu voll wird &rarr;{' '}
              <span
                data-tooltip="Tabelle verdoppeln und Einträge neu verteilen."
                tabIndex={0}
              >
                Tabelle vergrößern und Einträge neu verteilen
              </span>
            </li>
          </ol>
        </section>

        <section>
          <h2>
            Die Klasse{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html">
              Object
            </Link>
          </h2>
          <ul>
            <li className="fragment" tabIndex={0}>
              <code>hashCode</code>
            </li>
            <li
              data-tooltip="Referenzvergleich"
              tabIndex={0}
              className="fragment"
            >
              <code>equals</code>
            </li>
            <li
              data-tooltip="Gibt die Speicheradresse aus"
              tabIndex={0}
              className="fragment"
            >
              <code>toString</code>
            </li>
          </ul>
          <p className="fragment">
            <code>HashSet</code> und <code>HashMap</code> verwenden{' '}
            <code>hashCode</code> und <code>equals</code>. Was dabei gleich
            bedeutet, legt die Klasse fest.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/hashcollection/hashmap/dogowners/hashcodeandequals">
              Demo: HashCode und Equals
            </Link>
          </h2>
          <ul>
            <li className="fragment">hashCode überschreiben und loggen</li>
            <li className="fragment">equals überschreiben und loggen</li>
            <li className="fragment">alle Fälle erzeugen</li>
            <li className="fragment">hashCode implementieren</li>
            <li className="fragment">equals implementieren</li>
          </ul>
        </section>
      </section>

      <section data-topic="Records im Detail">
        <section className="divider">
          <p className="kicker">Datenklassen</p>
          <h2>Records im Detail</h2>
          <p>
            Was Records von Datenklassen unterscheiden – und warum sie sich als
            Map-Schlüssel eignen.
          </p>
        </section>

        <section>
          <h2>Records: Kurzfassung</h2>
          <p className="fragment">
            Ein Record ist eine unveränderliche Datenklasse.
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'public record Dog(String name, int age) {}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Im Detail: Datenklasse vs. Record, Vererbung und erzeugte Methoden.
          </p>
        </section>

        <section>
          <h2>Datenklasse Dog: Attribute und Konstruktor</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  ' final String name;\n' +
                  ' final int age;\n' +
                  '\n' +
                  ' public Dog(String name, int age) {\n' +
                  '  this.name = name;\n' +
                  '  this.age = age;\n' +
                  ' }\n' +
                  '\n' +
                  ' public String getName() {\n' +
                  '  return name;\n' +
                  ' }\n' +
                  '// ...\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Datenklasse Dog: Getter</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  '// ...\n' +
                  ' public int getAge() {\n' +
                  '  return age;\n' +
                  ' }\n' +
                  '// weitere Methoden siehe Doku\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Record Dog</h2>
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
          <h2>Vererbung und Interfaces</h2>
          <p className="fragment">
            Da ein Record von der Klasse <code>Record</code> erbt, kann er keine
            andere Klasse erweitern.
          </p>
          <p className="fragment">
            Records sind final und können nicht selbst erweitert werden.
          </p>
          <p className="fragment">
            Ein Record kann weitere Methoden haben und beliebig viele Interfaces
            implementieren.
          </p>
        </section>

        <section>
          <h2>Gratis-Methoden</h2>
          <ul>
            <li className="fragment">Kanonischer Konstruktor</li>
            <li className="fragment">Accessor-Methoden</li>
            <li className="fragment">
              <code>equals</code>
            </li>
            <li className="fragment">
              <code>hashCode</code>
            </li>
            <li className="fragment">
              <code>toString</code>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/hashcollection/hashmap/dogowners/records">
              Demo: Record vs Class
            </Link>
          </h2>
          <ul>
            <li className="fragment">Cat Klasse &rarr; Cat Record</li>
            <li className="fragment">equals</li>
            <li className="fragment">toString</li>
            <li className="fragment">height - weiteres Attribut</li>
            <li className="fragment">isOld - weitere Methode </li>
            <li className="fragment">HashMap - Cat Inventory</li>
          </ul>
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
              <Link to="/exercises/maps/">Maps Aufgaben</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
