import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '../../../../components/Slides/nkr';

export default function MethodsAndOperators(): React.JSX.Element {
  return (
    <Slides title="Methoden und Operatoren">
      <section>
        <section className="cover">
          <p className="kicker">Grundlagen der Programmierung</p>
          <h1>Methoden und Operatoren</h1>
          <p>Methoden definieren und Werte mit Operatoren verarbeiten.</p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">
              Wiederholung: Datentypen und Datenobjekte
            </li>
            <li className="fragment">Was sind Methoden?</li>
            <li className="fragment">Was sind Operatoren?</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>

      <section data-topic="Datentypen und Datenobjekte">
        <section className="divider">
          <p className="kicker">Wiederholung</p>
          <h2>Datentypen und Datenobjekte</h2>
          <p>
            Datentypen und Datenobjekte aus der letzten Einheit wiederholen.
          </p>
        </section>

        <section>
          <h2>Datentypen</h2>
          <ul>
            <li className="fragment">Wahrheitswerte (boolean)</li>
            <li className="fragment">
              Zeichen (char) und Zeichenketten (String)
            </li>
            <li className="fragment">Ganzzahlen (byte, short, int, long)</li>
            <li className="fragment">Gleitkommazahlen (float, double)</li>
          </ul>
        </section>

        <section>
          <h2>Datenobjekte</h2>
          <ul>
            <li className="fragment">
              Platzhalter, um Werte zwischenzuspeichern
            </li>
            <li className="fragment">
              <pre>
                <code
                  className="language-java"
                  dangerouslySetInnerHTML={{
                    __html: 'int age = 42;\n' + 'String name = "Ada";\n',
                  }}
                ></code>
              </pre>
            </li>
            <li className="fragment">
              Standard für Ganzzahlen: <code>int</code>
            </li>
            <li className="fragment">
              Standard für Gleitkommazahlen: <code>double</code>
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Methoden">
        <section className="divider">
          <p className="kicker">Grundlagen</p>
          <h2>Was sind Methoden?</h2>
          <p>Wiederverwendbare Logik mit Namen, Parametern und Rückgabewert.</p>
        </section>

        <section>
          <h2>Beispiele für Methoden</h2>
          <ul>
            <li className="fragment">Addieren von zwei Zahlen</li>
            <li className="fragment">
              Zusammensetzen von Titel, Vorname und Nachname
            </li>
            <li className="fragment">Brief in den Briefkasten werfen</li>
            <li className="fragment">aktuelle Uhrzeit nennen</li>
          </ul>
        </section>

        <section>
          <h2>Aufbau einer Methode</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public static int add(int numberOne, int numberTwo) {\n' +
                  '  return numberOne + numberTwo;\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              <b>int</b> ist der Rückgabetyp.
            </li>
            <li className="fragment">
              <b>add</b> ist der Methodenname.
            </li>
            <li className="fragment">
              <b>int numberOne, int numberTwo</b> sind die Parameter.
            </li>
            <li className="fragment">
              <b>{'{ ... }'}</b> ist der Methodenrumpf.
            </li>
          </ul>
          <p className="foot-note">public und static werden später erklärt.</p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/methods/Example.java">
              Demo: Methoden
            </Link>
          </h2>
          <ul>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Addieren von zwei Zahlen"
            >
              add
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Titel, Vorname und Nachname zusammensetzen"
            >
              getFullName
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Brief in den Briefkasten werfen"
            >
              sendLetter
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Aktuelle Uhrzeit nennen"
            >
              getCurrentTime
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Operatoren">
        <section className="divider">
          <p className="kicker">Grundlagen</p>
          <h2>Was sind Operatoren?</h2>
          <p>Werte mit Operatoren zu Ausdrücken verknüpfen.</p>
        </section>

        <section>
          <h2>Operanden und Operatoren</h2>
          <div className="two-column">
            <div>
              <pre>
                <code
                  className="language-java"
                  dangerouslySetInnerHTML={{
                    __html: 'int sum = 1 + 2;\n',
                  }}
                ></code>
              </pre>
            </div>
            <div>
              <ul>
                <li className="fragment">
                  1 und 2 sind <b>Operanden</b>.
                </li>
                <li className="fragment">
                  + ist der <b>Operator</b>.
                </li>
                <li className="fragment">
                  1 + 2 ist ein <b>Ausdruck</b>.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Arithmetische Operatoren</h2>
          <table>
            <thead>
              <tr>
                <th>Ausdruck</th>
                <th>Bedeutung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>x + y</td>
                <td>Addiere y zu x</td>
              </tr>
              <tr className="fragment">
                <td>x - y</td>
                <td>Subtrahiere y von x</td>
              </tr>
              <tr className="fragment">
                <td>x * y</td>
                <td>Multipliziere x mit y</td>
              </tr>
              <tr className="fragment">
                <td>x / y</td>
                <td>Dividiere x durch y</td>
              </tr>
              <tr className="fragment">
                <td>x % y</td>
                <td>Divisionsrest von x / y</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Inkrement und Dekrement</h2>
          <table style={{ fontSize: '0.8em' }}>
            <thead>
              <tr>
                <th>Ausdruck</th>
                <th>Bedeutung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>x++</td>
                <td>
                  Inkrementiere x und gib den alten Wert an den Ausdruck zurück
                </td>
              </tr>
              <tr className="fragment">
                <td>++x</td>
                <td>
                  Inkrementiere x und gib den neuen Wert an den Ausdruck zurück
                </td>
              </tr>
              <tr className="fragment">
                <td>x--</td>
                <td>
                  Dekrementiere x und gib den alten Wert an den Ausdruck zurück
                </td>
              </tr>
              <tr className="fragment">
                <td>--x</td>
                <td>
                  Dekrementiere x und gib den neuen Wert an den Ausdruck zurück
                </td>
              </tr>
            </tbody>
          </table>
          <div className="fragment">
            <NKR />
          </div>
        </section>

        <section>
          <h2>Vergleichsoperatoren</h2>
          <table>
            <thead>
              <tr>
                <th>Ausdruck</th>
                <th>Bedeutung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>x == y</td>
                <td>x ist gleich y</td>
              </tr>
              <tr className="fragment">
                <td>x != y</td>
                <td>x ist ungleich y</td>
              </tr>
              <tr className="fragment">
                <td>x &gt; y</td>
                <td>x ist größer als y</td>
              </tr>
              <tr className="fragment">
                <td>x &lt; y</td>
                <td>x ist kleiner als y</td>
              </tr>
              <tr className="fragment">
                <td>x &gt;= y</td>
                <td>x ist größer oder gleich y</td>
              </tr>
              <tr className="fragment">
                <td>x &lt;= y</td>
                <td>x ist kleiner oder gleich y</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Logische Operatoren</h2>
          <table>
            <thead>
              <tr>
                <th>Ausdruck</th>
                <th>Bedeutung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>x && y</td>
                <td>Logische AND-Verknüpfung</td>
              </tr>
              <tr className="fragment">
                <td>x || y</td>
                <td>Logische OR-Verknüpfung</td>
              </tr>
              <tr className="fragment">
                <td>!x</td>
                <td>Logisches NOT</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Bitweise Operatoren</h2>
          <table>
            <thead>
              <tr>
                <th>Ausdruck</th>
                <th>Bedeutung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>x & y</td>
                <td>Bitweise AND-Verknüpfung</td>
              </tr>
              <tr className="fragment">
                <td>x | y</td>
                <td>Bitweise OR-Verknüpfung</td>
              </tr>
              <tr className="fragment">
                <td>x ^ y</td>
                <td>Bitweise XOR-Verknüpfung</td>
              </tr>
              <tr className="fragment">
                <td>~x</td>
                <td>Bitweises NOT</td>
              </tr>
            </tbody>
          </table>
          <div className="fragment">
            <NKR />
          </div>
        </section>
      </section>

      <section data-topic="Zusammenfassung">
        <section className="divider">
          <p className="kicker">Abschluss</p>
          <h2>Zusammenfassung</h2>
          <p>Das Wichtigste zu Methoden und Operatoren.</p>
        </section>

        <section>
          <h2>Methoden auf einen Blick</h2>
          <p className="fragment">Methodenname, Parameter, Rückgabetyp</p>
          <p className="fragment">Methodenrumpf enthält die Logik</p>
        </section>

        <section>
          <h2>Operatoren auf einen Blick</h2>
          <p className="fragment">Arithmetische Operatoren</p>
          <p className="fragment">Vergleichsoperatoren</p>
          <p className="fragment">Logische Operatoren</p>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/data-objects/data-objects01">
                DataObjects 01
              </Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/data-objects/data-objects02">
                DataObjects 02 (optional)
              </Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/data-objects/data-objects03">
                DataObjects 03
              </Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/operators/operators01">Operators 01</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/operators/operators02">
                Operators 02 (optional)
              </Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/operators/operators03">
                Operators 03 (optional)
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
