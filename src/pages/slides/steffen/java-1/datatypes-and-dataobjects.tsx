import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';

export default function DatatypesAndDataobjects(): React.JSX.Element {
  return (
    <Slides title="Datentypen und Datenobjekte">
      <section>
        <section className="cover">
          <p className="kicker">Grundlagen der Programmierung</p>
          <h1>Datentypen und Datenobjekte</h1>
          <p>
            Welche Datentypen Java kennt und wie Datenobjekte Werte speichern.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Besprechung Aufgabe</li>
            <li className="fragment">Datentypen</li>
            <li className="fragment">Datenobjekte</li>
            <li className="fragment">Operationen mit Datentypen</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>

      <section data-topic="Besprechung Aufgabe">
        <section>
          <h2>Demo: Hello World</h2>
          <ul>
            <li className="fragment">Konsolenausgabe</li>
            <li className="fragment">kompilieren und ausführen</li>
          </ul>
        </section>
        <section>
          <h2>Hello World</h2>
          <p className="fragment">
            Die Schlüsselwörter <strong>public</strong>, <strong>class</strong>{' '}
            und <strong>static</strong> werden später behandelt.
          </p>
          <div className="fragment">
            <p>Aber warum braucht man:</p>
            <pre>
              <code
                className="language-java"
                dangerouslySetInnerHTML={{
                  __html: 'public static void main(String[] args){}',
                }}
              ></code>
            </pre>
          </div>
          <aside className="notes">
            <ul>
              <li>main2 erstellen</li>
              <li>main löschen</li>
            </ul>
          </aside>
        </section>
        <section>
          <h2>Demo: main-Methode</h2>
          <ul>
            <li className="fragment">main2 erstellen</li>
            <li className="fragment">main löschen</li>
          </ul>
        </section>
      </section>

      <section data-topic="Datentypen">
        <section className="divider">
          <p className="kicker">Grundlagen</p>
          <h2>Datentypen</h2>
          <p>
            Primitive Datentypen, ihre Wertebereiche und der Unterschied zu
            komplexen Typen.
          </p>
        </section>

        <section>
          <h2>Beispiel Registrierung</h2>
          <table style={{ fontSize: '0.9em', marginTop: '0.4em' }}>
            <thead>
              <tr>
                <th>Feld</th>
                <th>Datentyp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fragment">AGB akzeptiert</td>
                <td className="fragment">boolean</td>
              </tr>
              <tr>
                <td className="fragment">Alter</td>
                <td className="fragment">int</td>
              </tr>
              <tr>
                <td className="fragment">Größe</td>
                <td className="fragment">double</td>
              </tr>
              <tr>
                <td className="fragment">Geschlecht</td>
                <td className="fragment">char</td>
              </tr>
              <tr>
                <td className="fragment">Name</td>
                <td className="fragment">String</td>
              </tr>
            </tbody>
          </table>
          <div
            className="callout fragment"
            style={{ fontSize: '0.8em', marginTop: '0.6em' }}
          >
            <p>
              PLZ wäre ebenfalls ein <code>String</code> (führende Nullen).
            </p>
          </div>
        </section>

        <section>
          <h2>Wahrheitswerte</h2>
          <table>
            <thead>
              <tr>
                <th>Datentyp</th>
                <th>Größe</th>
                <th>Wertebereich</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>boolean</td>
                <td>-</td>
                <td>true, false</td>
              </tr>
            </tbody>
          </table>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'boolean agbAkzeptiert = true;',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Ganzzahlen</h2>
          <table>
            <thead>
              <tr>
                <th>Datentyp</th>
                <th>Größe</th>
                <th>Wertebereich</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>byte</td>
                <td>1 Byte</td>
                <td>-128 bis +127</td>
              </tr>
              <tr>
                <td>short</td>
                <td>2 Byte</td>
                <td>-32.768 bis +32.767</td>
              </tr>
              <tr>
                <td>int</td>
                <td>4 Byte</td>
                <td>
                  -2.147.483.648
                  <br />
                  bis +2.147.483.647
                </td>
              </tr>
              <tr>
                <td>long</td>
                <td>8 Byte</td>
                <td>
                  -9.223.372.036.854.775.808
                  <br />
                  bis +9.223.372.036.854.775.807
                </td>
              </tr>
            </tbody>
          </table>
          <p className="foot-note">Standardtyp für ganze Zahlen ist int.</p>
        </section>

        <section>
          <h2>Gleitkommazahlen</h2>
          <table>
            <thead>
              <tr>
                <th>Datentyp</th>
                <th>Größe</th>
                <th>Wertebereich</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>float</td>
                <td>4 Byte</td>
                <td>
                  ±1,4 × 10<sup>-45</sup> bis ±3,4 × 10<sup>38</sup>
                </td>
              </tr>
              <tr>
                <td>double</td>
                <td>8 Byte</td>
                <td>
                  ±4,9 × 10<sup>-324</sup> bis ±1,8 × 10<sup>308</sup>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="foot-note">
            Standardtyp für Gleitkommazahlen ist double.
          </p>
        </section>

        <section>
          <h2>Zeichen und Strings</h2>
          <table>
            <thead>
              <tr>
                <th>Datentyp</th>
                <th>Bedeutung</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>char</td>
                <td>ein einzelnes Zeichen</td>
                <td>
                  <code>'m'</code>
                </td>
              </tr>
              <tr>
                <td>String</td>
                <td>eine Zeichenkette (variable Länge)</td>
                <td>
                  <code>"Steffen"</code>
                </td>
              </tr>
            </tbody>
          </table>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'char geschlecht = \'m\';\nString name = "Steffen";',
              }}
            ></code>
          </pre>
          <div className="callout fragment" style={{ fontSize: '0.8em' }}>
            <p>
              Primitive Datentypen wie <code>char</code> (2 Byte,{' '}
              <code>\u0000</code> bis <code>\uFFFF</code>) haben keine Methoden;{' '}
              <code>String</code> ist eine Klasse und damit ein komplexer
              Datentyp.
            </p>
          </div>
        </section>
      </section>

      <section data-topic="Datenobjekte">
        <section className="divider">
          <p className="kicker">Variablen</p>
          <h2>Datenobjekte</h2>
          <p>
            Deklaration, Initialisierung und der erste Umgang mit Variablen.
          </p>
        </section>

        <section>
          <h2>Eigenschaften</h2>
          <p>
            Ein Datenobjekt ist ein Platzhalter für einen Wert im
            Arbeitsspeicher.
          </p>
          <ul>
            <li className="fragment">
              Es wird durch einen Bezeichner und einen Datentyp deklariert.
            </li>
            <li className="fragment">
              Es wird durch einen Wert initialisiert.
            </li>
            <li className="fragment">
              Der Wert kann sich im Programmablauf ändern; dann ist es eine
              Variable.
            </li>
          </ul>
        </section>

        <section>
          <h2>Deklaration und Initialisierung</h2>
          <div className="two-column">
            <div>
              <h3>Schrittweise</h3>
              <p className="code-caption">Deklaration, dann Initialisierung</p>
              <pre>
                <code
                  className="language-java"
                  dangerouslySetInnerHTML={{
                    __html: 'String myName;\n' + 'myName = "Steffen";\n',
                  }}
                ></code>
              </pre>
            </div>
            <div>
              <h3>Zusammengefasst</h3>
              <p className="code-caption">
                Deklaration und Initialisierung in einer Zeile
              </p>
              <pre>
                <code
                  className="language-java"
                  dangerouslySetInnerHTML={{
                    __html: 'String myName = "Steffen";\n',
                  }}
                ></code>
              </pre>
            </div>
          </div>
          <p className="fragment">
            Beide Varianten erzeugen dasselbe Datenobjekt.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/dataobjects/Example.java">
              Demo: Datenobjekte
            </Link>
          </h2>
          <p>
            Wir setzen die Registrierung aus dem Beispiel als Datenobjekte um.
          </p>
          <ul>
            <li className="fragment">AGB akzeptieren</li>
            <li className="fragment">Alter</li>
            <li className="fragment">Größe</li>
            <li className="fragment">Geschlecht</li>
            <li className="fragment">Name</li>
          </ul>
        </section>
      </section>

      <section data-topic="Operationen mit Datentypen">
        <section className="divider">
          <p className="kicker">Umwandlung</p>
          <h2>Operationen mit Datentypen</h2>
          <p>double in int umwandeln und Zeichen aus einem String lesen.</p>
        </section>

        <section>
          <h2>double in int konvertieren</h2>
          <p>
            Beim Konvertieren von <code>double</code> zu <code>int</code> werden
            die Nachkommastellen abgeschnitten. Die Zahl wird nicht gerundet,
            sondern in Richtung null gekürzt.
          </p>
          <p className="fragment">
            Der Cast <code>(int)</code> ist erforderlich; Java wandelt{' '}
            <code>double</code> nicht automatisch in <code>int</code> um.
          </p>
        </section>

        <section>
          <h2>Beispiel: double in int</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'double doubleNumber = 3.9;\n' +
                  'int intNumber = (int) doubleNumber;      // 3\n' +
                  'double negativeNumber = -3.9;\n' +
                  'int negativeInt = (int) negativeNumber;  // -3\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Zeichen aus einem String lesen</h2>
          <p>Strings sind 0-indiziert: Das erste Zeichen hat den Index 0.</p>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'String name = "Steffen";\n' +
                  "char erster = name.charAt(0);   // 'S'\n" +
                  "char dritter = name.charAt(2);  // 'e'\n" +
                  'System.out.println(dritter);    // gibt "e" aus\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Zusammenfassung">
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">
              Java kennt 8 primitive Datentypen; <code>char</code> ist eines
              davon, <code>String</code> ist eine Klasse.
            </li>
            <li className="fragment">
              Ein Datenobjekt wird durch Bezeichner und Datentyp deklariert und
              durch einen Wert initialisiert.
            </li>
            <li className="fragment">
              Beim Cast von <code>double</code> zu <code>int</code> werden
              Nachkommastellen abgeschnitten.
            </li>
          </ul>
        </section>

        <section>
          <h2>Weiterlesen</h2>
          <div className="two-column">
            <div>
              <h3>Datentypen</h3>
              <ul>
                <li>
                  <Link to="/documentation/data-types">Datentypen</Link>
                </li>
                <li>
                  <Link to="/documentation/data-objects">Datenobjekte</Link>
                </li>
                <li>
                  <Link to="/documentation/strings">Strings</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Grundlagen</h3>
              <ul>
                <li>
                  <Link to="/documentation/class-structure#die-main-methode">
                    Die main Methode
                  </Link>
                </li>
                <li>
                  <Link to="/documentation/coding">Programmausführung</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </Slides>
  );
}
