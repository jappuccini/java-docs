import Link from '@docusaurus/Link';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';
import { NKR } from '../../../../components/Slides/nkr';

export default function MethodsAndOperators(): React.JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Was sind Methoden?</li>
            <li className="fragment">Was sind Operatoren?</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
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
            <li className="fragment">Rückgabetyp</li>
            <li className="fragment">Bezeichner</li>
            <li className="fragment">Parameter</li>
            <li className="fragment">Methodenrumpf</li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/methods/Example.java">
              Demo - Methoden
            </Link>
          </h2>
          <ul>
            <li className="fragment">Addieren von zwei Zahlen</li>
            <li className="fragment">
              Berechnen von Titel, Vorname und Nachname
            </li>
            <li className="fragment">Brief zu Briefkasten bringen</li>
            <li className="fragment">aktuelle Uhrzeit nennen</li>
          </ul>
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
        </section>
        <section>
          <h2>Was sind Methoden?</h2>
          <p className="fragment">Bezeichner, Parameter, Rückgabetyp</p>
          <p className="fragment">beinhaltet Logik im Methodenrumpf</p>
        </section>
        <section>
          <h2>Was sind Operatoren?</h2>
          <p className="fragment">Arithmetische Operatoren</p>
          <p className="fragment">Vergleichsoperatoren</p>
          <p className="fragment">Logische Operatoren</p>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li>
              <Link to="/exercises/data-objects/data-objects01">
                DataObjects 01
              </Link>
            </li>
            <li>
              <Link to="/exercises/data-objects/data-objects02">
                DataObjects 02 (optional)
              </Link>
            </li>
            <li>
              <Link to="/exercises/data-objects/data-objects03">
                DataObjects 03
              </Link>
            </li>
            <li>
              <Link to="/exercises/operators/operators01">Operators 01</Link>
            </li>
            <li>
              <Link to="/exercises/operators/operators02">
                Operators 02 (optional)
              </Link>
            </li>
            <li>
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
