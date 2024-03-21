import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function SetsMapsHashesRecords(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Set</li>
            <li className="fragment">Map</li>
            <li className="fragment">Hashes</li>
            <li className="fragment">Records</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Set</h2>
        </section>
        <section>
          <h2>Konzept</h2>
          <ul>
            <li className="fragment">Set ist ein Interface</li>
            <li className="fragment">Realisiert eine Menge</li>
            <li className="fragment">Vereinigung (Union)</li>
            <li className="fragment">Durchschnitt (Intersection)</li>
            <li className="fragment">Differenz (Difference)</li>
          </ul>
        </section>
        <section>
          <h2>HashSet - Klasse</h2>
          <p className="fragment">implementiert das Set interface</p>
          <p className="fragment">hat einen Typparameter</p>
        </section>
        <section>
          <h2>Demo - HashSet</h2>
          <ul>
            <li className="fragment">Mengen erstellen (1-4) und (2,3,5)</li>
            <li className="fragment">Vereinigung (Union)</li>
            <li className="fragment">Durchschnitt (Intersection)</li>
            <li className="fragment">Differenz (Difference)</li>
          </ul>
        </section>
        <section>
          <h2>Methoden eines Sets</h2>
          <pre className="fragment">
            <code
              data-line-numbers="2-3|4-7|8|9-11"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '// ...\n' +
                  '  Set&lt;Integer&gt; numbers = new HashSet&lt;&gt;();\n' +
                  '  Set&lt;Integer&gt; otherNumbers = new HashSet&lt;&gt;();\n' +
                  '  numbers.add(4545); // add entry\n' +
                  '  numbers.remove(4545); // remove entry\n' +
                  '  numbers.clear(); // remove all entries\n' +
                  '  numbers.size(); // number of entries\n' +
                  '  students.contains(4545); // entry exists\n' +
                  '  students.addAll(otherNumbers); // union\n' +
                  '  students.retainAll(otherNumbers); // intersection\n' +
                  '  students.removeAll(otherNumbers); // difference\n' +
                  '// ...\n',
              }}
            ></code>
          </pre>
        </section>
      </section>
      <section>
        <section>
          <h2>Map</h2>
        </section>
        <section>
          <h2>Konzept</h2>
          <ul>
            <li className="fragment">Map ist ein Interface</li>
            <li className="fragment">Realisiert ein Schlüssel-Wert-Paar</li>
            <li className="fragment">Keine doppelten Schlüssel möglich</li>
            <li className="fragment">Existiert ein Schlüssel oder Wert</li>
            <li className="fragment">
              Alle Schlüssel, Werte oder Schlüssel-Wert-Paare
            </li>
          </ul>
        </section>
        <section>
          <h2>Beispiele Schlüssel-Wert-Paare</h2>
          <ul>
            <li className="fragment">
              Studentendaten -&gt; MatrikelNummer, Student
            </li>
            <li className="fragment">Produktinventar -&gt; Produkt, Anzahl</li>
            <li className="fragment">StadtInfos -&gt; Stadtname, CityInfo</li>
            <li className="fragment">Hauptstädte -&gt; Land, Hauptstadt</li>
          </ul>
        </section>
        <section>
          <h2>HashMap - Klasse</h2>
          <p className="fragment">implementiert das Map interface</p>
          <p className="fragment">hat zwei Typparameter</p>
        </section>
        <section>
          <h2>Demo - HashMap</h2>
          <ul>
            <li className="fragment">Map erstellen (Student/Note)</li>
            <li className="fragment">Hinzufügen und Löschen von Noten</li>
          </ul>
        </section>
        <section>
          <h2>Methoden einer Map</h2>
          <pre className="fragment">
            <code
              data-line-numbers="2-13|3|4-8|9-10|11-13"
              className="java"
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
      <section>
        <section>
          <h2>Hashes</h2>
        </section>
        <section>
          <h2>Demo HashMap</h2>
          <ul>
            <li className="fragment">ein Hund und deren Besitzer</li>
            <li className="fragment">Besitzer des Hundes ändern</li>
          </ul>
        </section>
        <section>
          <h2>Was ist ein Hash(wert)?</h2>
          <ul>
            <li className="fragment">Ergebnis einer Hashfunktion</li>
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
            <li className="fragment">Einwegsfunktion</li>
            <li className="fragment">Deterministisch</li>
            <li className="fragment">Kollisionsbehaftet</li>
          </ul>
        </section>
        <section>
          <h2>Was sind Hashkollisionen?</h2>
          <p className="fragment">
            Eine Hashkollision tritt auf, wenn zwei unterschiedliche
            Eingabedaten denselben Hashwert erzeugen.
          </p>
        </section>
        <section>
          <h2>Beispiel Hashfunktion</h2>
          <p>
            <table>
              <th>Name</th>
              <th>Summe</th>
              <th>Hash</th>
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
            </table>
          </p>
        </section>
        <section>
          <h2>Zusammenfassung Hash</h2>
          <ul>
            <li className="fragment">Reduktion auf einen Wert</li>
            <li className="fragment">Kollisionen</li>
          </ul>
        </section>
        <section>
          <h2>funktionsweise der put-Methode einer HashMap</h2>
          <ol>
            <li className="fragment">
              Hashwert des Schlüssels berechnen &rarr; Index
            </li>
            <li className="fragment">
              falls kein Wert an diesem Index &rarr; Einfügen
            </li>
            <li className="fragment">
              falls Wert an diesem Index &rarr; Werte vergleichen
            </li>
            <li className="fragment">
              falls Werte gleich --&gt; Wert ersetzen
            </li>
            <li className="fragment">
              falls Werte ungleich --&gt;{' '}
              <span
                data-tooltip="Array vergrößern, Schlüssel neu berechnen, umsortieren"
                tabIndex={0}
              >
                Speicher vergrößern
              </span>
            </li>
          </ol>
        </section>
        <section>
          <h2>Die Klasse Object</h2>
          <ul>
            <li className="fragment" tabIndex={0}>
              hashCode
            </li>
            <li
              data-tooltip="Referenzvergleich"
              tabIndex={0}
              className="fragment"
            >
              equals
            </li>
            <li
              data-tooltip="Gibt die Speicheradresse aus"
              tabIndex={0}
              className="fragment"
            >
              toString
            </li>
          </ul>
          <p className="fragment">
            HashSet und HashMap verwenden die Methoden hashCode und equals
          </p>
        </section>
        <section>
          <h2>Demo HashCode und Equals</h2>
          <ul>
            <li className="fragment">hashCode überschreiben und loggen</li>
            <li className="fragment">equals überschreiben und loggen</li>
            <li className="fragment">alle Fälle erzeugen</li>
            <li className="fragment">hashCode implementieren</li>
            <li className="fragment">equals implementieren</li>
          </ul>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Records</h2>
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
          <h2>Beispiel Datenklasse Dog I</h2>
          <pre className="fragment">
            <code
              className="java"
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
          <h2>Beispiel Datenklasse Dog II</h2>
          <pre className="fragment">
            <code
              className="java"
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
          <h2>Record</h2>
          <p className="fragment">
            Da ein Record von der Record-Klasse erbt, kann nicht von einer
            anderen Klasse geerbt werden.
          </p>
          <p className="fragment">
            Ein Record kann jedoch weitere Methoden haben und beliebig viele
            Schnittstellen implementieren.
          </p>
        </section>
        <section>
          <h2>Record - Gratis Methoden</h2>
          <ul>
            <li className="fragment">Konstruktor</li>
            <li className="fragment">Getter</li>
            <li className="fragment">Equals</li>
            <li className="fragment">hashCode</li>
            <li className="fragment">toString</li>
          </ul>
        </section>
        <section>
          <h2>Demo - Record vs Class</h2>
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
      <section>
        <h2>Rest of the Day</h2>
        <ul>
          <li className="fragment">Generics</li>
          <li className="fragment">Maps</li>
          <li className="fragment">Records</li>
        </ul>
      </section>
    </Slides>
  );
}
