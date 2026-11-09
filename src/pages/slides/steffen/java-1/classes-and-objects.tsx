import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '../../../../components/Slides/nkr';

export default function ClassesAndObjects(): React.JSX.Element {
  return (
    <Slides title="Klassen und Objekte">
      <section>
        <section className="cover">
          <p className="kicker">Grundlagen der Programmierung</p>
          <h1>Klassen und Objekte</h1>
          <p>
            Was Klassen und Objekte sind und wie Modifier den Zugriff steuern.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Von Objekten zu Klassen</li>
            <li className="fragment">Klassen und Objekte in Java</li>
            <li className="fragment">Modifier</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>

      <section data-topic="Wiederholung">
        <section className="divider">
          <p className="kicker">Wiederholung</p>
          <h2>Wiederholung</h2>
          <p>Die Grundlagen aus den letzten Einheiten im Überblick.</p>
        </section>

        <section>
          <h2>Datentypen und Datenobjekte</h2>
          <div className="two-column">
            <div>
              <h3>Datentypen</h3>
              <ul>
                <li className="fragment">
                  <code>boolean</code>
                </li>
                <li className="fragment">
                  <code>char</code> / <code>String</code>
                </li>
                <li className="fragment">
                  <code>byte</code>, <code>short</code>, <code>int</code>,{' '}
                  <code>long</code>
                </li>
                <li className="fragment">
                  <code>float</code>, <code>double</code>
                </li>
              </ul>
            </div>
            <div>
              <h3>Datenobjekte</h3>
              <ul>
                <li className="fragment">Platzhalter für Werte</li>
                <li className="fragment">
                  Standardtypen:
                  <ul style={{ fontSize: '0.9em' }}>
                    <li>
                      Ganzzahlen: <code>int</code>
                    </li>
                    <li>
                      Gleitkommazahlen: <code>double</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Methoden und Operatoren</h2>
          <div className="two-column">
            <div>
              <h3>Methoden</h3>
              <ul>
                <li className="fragment">Rückgabetyp</li>
                <li className="fragment">Bezeichner</li>
                <li className="fragment">Parameter</li>
                <li className="fragment">Methodenrumpf</li>
              </ul>
            </div>
            <div>
              <h3>Operatoren</h3>
              <ul>
                <li className="fragment">arithmetisch</li>
                <li className="fragment">Vergleich</li>
                <li className="fragment">logisch</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Fallunterscheidungen und Schleifen</h2>
          <div className="two-column">
            <div>
              <h3>Fallunterscheidungen</h3>
              <ul>
                <li className="fragment">
                  <code>if-else</code>
                </li>
                <li className="fragment">
                  <code>switch</code>
                </li>
              </ul>
            </div>
            <div>
              <h3>Schleifen</h3>
              <ul>
                <li className="fragment">
                  <code>while</code>
                </li>
                <li className="fragment">
                  <code>do-while</code>
                </li>
                <li className="fragment">
                  <code>for</code>
                </li>
                <li className="fragment">
                  <code>for-each</code>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Arrays und ArrayList</h2>
          <table>
            <thead>
              <tr>
                <th>Arrays</th>
                <th>ArrayList</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>Elemente eines Typs</td>
                <td>Elemente eines Typs</td>
              </tr>
              <tr className="fragment">
                <td>Feste Länge</td>
                <td>Dynamische Länge</td>
              </tr>
              <tr className="fragment">
                <td>Index ab 0</td>
                <td>Index ab 0</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      <section data-topic="Von Objekten zu Klassen">
        <section className="divider">
          <p className="kicker">Objektorientierung</p>
          <h2>Von Objekten zu Klassen</h2>
          <p>Wie aus konkreten Objekten eine Klasse als Bauplan wird.</p>
        </section>

        <section>
          <h2>Objekte in unserer Umgebung</h2>
          <ul>
            <li className="fragment">
              Handy<strong>s</strong>
            </li>
            <li className="fragment">
              Mensch<strong>en</strong>
            </li>
            <li className="fragment">
              Auto<strong>s</strong>
            </li>
          </ul>
        </section>

        <section>
          <h2>Welche Eigenschaften hat ein spezifischer Mensch?</h2>
          <ul>
            <li className="fragment">blaue Augen</li>
            <li className="fragment">blonde Haare</li>
            <li className="fragment">hat Brille</li>
          </ul>
        </section>

        <section>
          <h2>Welche Verhaltensweisen hat jeder Mensch?</h2>
          <ul>
            <li className="fragment">essen</li>
            <li className="fragment">trinken</li>
            <li className="fragment">laufen</li>
            <li className="fragment">ganzen Namen sagen</li>
          </ul>
        </section>

        <section>
          <h2>Welche Eigenschaften hat ein spezifisches Auto?</h2>
          <ul>
            <li className="fragment">schwarze Farbe</li>
            <li className="fragment">177 PS</li>
            <li className="fragment">Elektromotor</li>
          </ul>
        </section>

        <section>
          <h2>Welche Funktionen hat jedes Auto?</h2>
          <ul>
            <li className="fragment">bremsen</li>
            <li className="fragment">beschleunigen</li>
            <li className="fragment">Laufleistung anzeigen</li>
          </ul>
        </section>

        <section>
          <h2>Abstrahieren von spezifischen Menschen</h2>
          <div className="two-column">
            <div>
              <h3>Attribute</h3>
              <ul>
                <li className="fragment">Augenfarbe</li>
                <li className="fragment">Haarfarbe</li>
                <li className="fragment">hat Brille</li>
              </ul>
            </div>
            <div>
              <h3>Methoden</h3>
              <ul>
                <li className="fragment">essen</li>
                <li className="fragment">trinken</li>
                <li className="fragment">laufen</li>
                <li className="fragment">ganzen Namen sagen</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Abstrahieren von spezifischen Autos</h2>
          <div className="two-column">
            <div>
              <h3>Attribute</h3>
              <ul>
                <li className="fragment">Autofarbe</li>
                <li className="fragment">Anzahl PS</li>
                <li className="fragment">Motorart</li>
              </ul>
            </div>
            <div>
              <h3>Methoden</h3>
              <ul>
                <li className="fragment">bremsen</li>
                <li className="fragment">beschleunigen</li>
                <li className="fragment">Laufleistung anzeigen</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Was sind Klassen?</h2>
          <p>
            Abstraktion von <strong>gleichartigen</strong> Objekten durch:
          </p>
          <ul>
            <li className="fragment">Attribute</li>
            <li className="fragment">Methoden</li>
          </ul>
        </section>
      </section>

      <section data-topic="Klassen und Objekte in Java">
        <section className="divider">
          <p className="kicker">Objektorientierung</p>
          <h2>Klassen und Objekte in Java</h2>
          <p>Klassen definieren, Objekte erzeugen und Referenzen verstehen.</p>
        </section>

        <section>
          <h2>Demo: Klassen</h2>
          <ul>
            <li className="fragment">
              <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/classes/human/Human.java">
                Mensch
              </Link>
            </li>
            <li className="fragment">
              <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/classes/car/Car.java">
                Auto
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Beispiel: Klasse Mensch</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Human {\n' +
                  '  public String firstName;\n' +
                  '  public String lastName;\n' +
                  '\n' +
                  '  public String getFullName() {\n' +
                  '    return firstName + " " + lastName;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Demo: Objekte</h2>
          <ul>
            <li className="fragment">
              <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/classes/human/Exercise.java">
                Human: Steffen, Marianna, Mirco
              </Link>
            </li>
            <li className="fragment">
              <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/classes/car/Exercise.java">
                Car: Audi A3, Fiat 500, BMW 335i
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Was ist ein Objekt?</h2>
          <div className="callout">
            <span className="callout-title">Definition</span>
            <p>
              Ein Objekt ist die konkrete Ausprägung (Instanz) einer Klasse.
            </p>
          </div>
          <ul>
            <li className="fragment">konkreter Wert für ein Attribut</li>
            <li className="fragment">konkretes Verhalten einer Methode</li>
          </ul>
        </section>

        <section>
          <h2>Beispiel: Objekt erzeugen</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'Human steffen = new Human();\n' +
                  'steffen.firstName = "Steffen";\n' +
                  'steffen.lastName = "Merk";\n' +
                  'System.out.println(steffen.getFullName());\n' +
                  '\n' +
                  'Human marianna = new Human();\n' +
                  'marianna.firstName = "Marianna";\n' +
                  'marianna.lastName = "Maglio";\n' +
                  'System.out.println(marianna.getFullName());',
              }}
            ></code>
          </pre>
          <p className="foot-note">
            Den Konstruktor behandeln wir in der nächsten Einheit.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/classes/human/Exercise.java">
              Demo: Referenzvariable
            </Link>
          </h2>
          <ul>
            <li className="fragment">Lesen und Schreiben von Attributen</li>
            <li className="fragment">
              Unterschied Referenzvariable und Variable (Kopie)
            </li>
            <li className="fragment">Was ist null?</li>
          </ul>
        </section>

        <section>
          <h2>Referenzvariablen</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'Human steffen = new Human();\n' +
                  'steffen.firstName = "Steffen";\n' +
                  '\n' +
                  'Human kopie = steffen;\n' +
                  'kopie.firstName = "Stefan";\n' +
                  '\n' +
                  'System.out.println(steffen.firstName); // Stefan',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              Eine Referenzvariable zeigt auf ein Objekt.
            </li>
            <li className="fragment">
              Eine Zuweisung kopiert die Referenz, nicht das Objekt.
            </li>
            <li className="fragment">
              Ohne Objekt ist der Wert <code>null</code>.
            </li>
          </ul>
          <p className="foot-note">
            Primitive Variablen speichern den Wert direkt.
          </p>
        </section>
      </section>

      <section data-topic="Modifier">
        <section className="divider">
          <p className="kicker">Sichtbarkeit</p>
          <h2>Modifier</h2>
          <p>Wer darf Klassen, Attribute und Methoden sehen und ändern?</p>
        </section>

        <section>
          <h2>Arten von Modifiern</h2>
          <ul>
            <li className="fragment">
              Access Modifier <strong>heute relevant</strong>
            </li>
            <li className="fragment">Non-Access Modifier</li>
          </ul>
          <p className="foot-note">
            static und final folgen in den nächsten Einheiten.
          </p>
        </section>

        <section>
          <h2>Was machen Access Modifier?</h2>
          <p className="fragment">Steuern den Zugriff auf:</p>
          <ul>
            <li className="fragment">Klassen</li>
            <li className="fragment">Attribute</li>
            <li className="fragment">Methoden</li>
            <li className="fragment">
              Konstruktoren (werden später behandelt)
            </li>
          </ul>
        </section>

        <section>
          <h2>Welche Access Modifier gibt es?</h2>
          <ul>
            <li className="fragment">public</li>
            <li className="fragment">private</li>
            <li className="fragment">protected</li>
            <li className="fragment">default (kein Modifier)*</li>
          </ul>
          <p className="foot-note">
            default = kein Modifier angegeben; Zugriff nur im gleichen Paket.
          </p>
          <div className="fragment">
            <NKR />
          </div>
        </section>

        <section>
          <h2>Wann verwendet man public?</h2>
          <ul>
            <li className="fragment">
              um Funktionalität von außen nutzbar zu machen
            </li>
          </ul>
        </section>

        <section>
          <h2>Wann verwendet man private?</h2>
          <ul>
            <li className="fragment">
              um direkten Zugriff auf Attribute zu verhindern
            </li>
            <li className="fragment">
              um Implementierungsdetails zu verstecken
            </li>
            <li className="fragment">
              um Änderungen kontrolliert über Methoden zu steuern
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/classes/modifier">
              Demo: Modifiers
            </Link>
          </h2>
          <ul>
            <li className="fragment">age setzen und ausgeben (Exercise)</li>
            <li className="fragment">age: public → private</li>
            <li className="fragment">age: Getter ergänzen</li>
            <li className="fragment">age: Setter mit this ergänzen</li>
            <li className="fragment">
              <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/classes/overload">
                Überladen von Methoden (Calculator)
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>private</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'public class Human {\n' + '  private int age;\n' + '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              <code>private</code> verhindert den direkten Zugriff von außen.
            </li>
            <li className="fragment">
              Zugriff erfolgt kontrolliert über Methoden.
            </li>
          </ul>
        </section>

        <section>
          <h2>Getter und Setter</h2>
          <pre style={{ fontSize: '20px' }}>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public int getAge() {\n' +
                  '  return age;\n' +
                  '}\n' +
                  '\n' +
                  'public void setAge(int age) {\n' +
                  '  if (age &gt; 0 &amp;&amp; age &lt; 124) {\n' +
                  '    this.age = age;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">Getter liefert den Wert des Attributs.</li>
            <li className="fragment">Setter setzt den Wert kontrolliert.</li>
            <li className="fragment">
              <code>this</code> unterscheidet Parameter und Attribut.
            </li>
          </ul>
        </section>

        <section>
          <h2>Methoden überladen</h2>
          <pre style={{ fontSize: '20px', marginTop: '0.5em' }}>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Calculator {\n' +
                  '  public int add(int a, int b) {\n' +
                  '    return a + b;\n' +
                  '  }\n' +
                  '\n' +
                  '  public double add(double a, double b) {\n' +
                  '    return a + b;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">gleicher Methodenname</li>
            <li className="fragment">unterschiedliche Parameterliste</li>
            <li className="fragment">Compiler wählt anhand der Argumente</li>
          </ul>
          <p className="foot-note">
            Der Rückgabetyp unterscheidet Überladungen nicht.
          </p>
        </section>
      </section>

      <section data-topic="Zusammenfassung">
        <section className="divider">
          <p className="kicker">Abschluss</p>
          <h2>Zusammenfassung</h2>
          <p>Das Wichtigste zu Klassen, Objekten und Modifiern.</p>
        </section>

        <section>
          <h2>Klasse</h2>
          <ul>
            <li className="fragment">Bauplan für Objekte</li>
            <li className="fragment">definiert durch Attribute und Methoden</li>
          </ul>
        </section>

        <section>
          <h2>Objekt</h2>
          <ul>
            <li className="fragment">Instanz einer Klasse</li>
            <li className="fragment">
              konkrete Werte für Attribute, konkretes Verhalten der Methoden
            </li>
            <li className="fragment">
              wird über eine Referenzvariable angesprochen
            </li>
            <li className="fragment">
              Referenzvariable hat den Standardwert <code>null</code>
            </li>
          </ul>
        </section>

        <section>
          <h2>Modifiers</h2>
          <ul>
            <li className="fragment">
              <code>public</code> und <code>private</code>
            </li>
            <li className="fragment">Getter und Setter</li>
            <li className="fragment">
              <code>this</code>
            </li>
            <li className="fragment">Überladen von Methoden</li>
          </ul>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/oo/oo01">OO01</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
