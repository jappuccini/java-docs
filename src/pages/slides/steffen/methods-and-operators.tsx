import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';
import { NKR } from '../../../components/Slides/nkr';

export default function MethodsAndOperators(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>Fragen oder Probleme?</section>
        <section>Gitpod: Parameter Hints deaktivieren</section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Datentypen</h2>
          <ul className="fragment">
            <li>Wahrheitswerte (boolean)</li>
            <li>Zeichen (char, String)</li>
            <li>Ganzzahlen (byte, short, int, long)</li>
            <li>Gleitkommazahlen (float, double)</li>
          </ul>
        </section>
        <section>
          <h2>Datenobjekte</h2>
          <ul>
            <li className="fragment">
              Platzhalter, um Werte zwischenzuspeichern
            </li>
            <li className="fragment">Datentyp Bezeichner = Wert;</li>
            <li className="fragment">Standard für Ganzzahlen: int</li>
            <li className="fragment">Standard für Gleitkommazahlen: double</li>
          </ul>
        </section>
        <section>
          <h2>Warum 'f' und 'd' bei float / double?</h2>
          <NKR />
        </section>
        <section>
          <h2>Escapen von speziellen Zeichen</h2>
          <NKR />
        </section>
        <section>
          <h2>Casten von Datentypen</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Methoden?</h2>
        </section>
        <section>
          <h2>Beispiele für Methoden</h2>
          <ul>
            <li className="fragment">Addieren von zwei Zahlen</li>
            <li className="fragment">
              Berechnen von Titel, Vorname und Nachname
            </li>
            <li className="fragment">Brief zu Briefkasten bringen</li>
            <li className="fragment">aktuelle Uhrzeit nennen</li>
          </ul>
        </section>
        <section>
          <h2>Aufbau einer Methode</h2>
          <ul>
            <li className="fragment">Rückgabewert</li>
            <li className="fragment">Bezeichner</li>
            <li className="fragment">Parameter</li>
            <li className="fragment">Methodenrumpf</li>
          </ul>
        </section>
        <section>
          <h2>Demo zu den 4 Beispielen</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Operatoren?</h2>
        </section>
        <section>
          <h2>Beispiele</h2>
          <ul>
            <li className="fragment">Addieren von zwei Zahlen</li>
            <li className="fragment">
              Berechnen von Titel, Vorname und Nachname
            </li>
          </ul>
        </section>
        <section>
          <h2>Arithmetische Operatoren</h2>
          <table className="fragment">
            <thead>
              <tr>
                <th>Beispiel</th>
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
          <h2>Arithmetische Operatoren</h2>
          <table className="fragment">
            <thead>
              <tr>
                <th>Beispiel</th>
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
          <table className="fragment">
            <thead>
              <tr>
                <th>Beispiel</th>
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
                <td>x ist größer y</td>
              </tr>
              <tr className="fragment">
                <td>x &lt; y</td>
                <td>x ist kleiner y</td>
              </tr>
              <tr className="fragment">
                <td>x &gt;= y</td>
                <td>x ist größer gleich y</td>
              </tr>
              <tr className="fragment">
                <td>x &lt;= y</td>
                <td>x ist kleiner gleich y</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Logische Operatoren</h2>
          <table className="fragment">
            <thead>
              <tr>
                <th>Beispiel</th>
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
          <table className="fragment">
            <thead>
              <tr>
                <th>Beispiel</th>
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
      <section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Was sind Methoden?</li>
            <li className="fragment">Was sind Operatoren?</li>
          </ul>
        </section>
        <section>
          <h2>Aufgaben</h2>
          <ul>
            <li>DataObjects 01</li>
            <li>DataObjects 02 (optional)</li>
            <li>Operators 01</li>
            <li>Operators 02 (optional)</li>
            <li>Operators 03 (optional)</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
