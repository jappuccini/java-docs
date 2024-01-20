import Slides from '../../../components/Slides';
import { NKR } from '../../../components/Slides/nkr';
import { defaultInitSlides } from '../../../components/Slides/initSlides';
import Link from '@docusaurus/Link';

export default function DataTypesAndDataObjects(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Besprechung Aufgabe</li>
            <li className="fragment">Einführung Git</li>
            <li className="fragment">Datentypen</li>
            <li className="fragment">Datenobjekte</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Besprechung Aufgabe</h2>
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
              <code className="java">
                public static void main(String[] args){}
              </code>
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
          <h2>Demo main-Methode</h2>
          <ul>
            <li className="fragment">main2 erstellen</li>
            <li className="fragment">main löschen</li>
          </ul>
        </section>
        <section>
          <Link to="/documentation/coding">Programmausführung</Link>
          <NKR />
        </section>
      </section>
      <section>
        <section>
          <h2>Einführung Git</h2>
        </section>
        <section>
          <h2>git switch</h2>
          <p>Wechseln zwischen Branches</p>
          <pre>
            <code
              className="bash"
              dangerouslySetInnerHTML={{
                __html:
                  '# Syntax: git switch &lt;branchname&gt;\n' +
                  'git switch exercises/class-structure/01\n' +
                  'git switch solutions/class-structure/01\n',
              }}
            ></code>
          </pre>
          <NKR />
        </section>
        <section>
          <h2>git stash</h2>
          <p>aktuelle Änderungen verstecken und wiederherstellen</p>
          <pre>
            <code
              className="bash"
              dangerouslySetInnerHTML={{
                __html:
                  'git stash # alles verstecken\n' +
                  'git stash apply # das zuletzt versteckte wiederherstellen\n' +
                  'git stash save "wip" # alles unter dem Namen "wip" verstecken\n' +
                  'git stash list # alle stashes anzeigen\n' +
                  'git stash apply 3 # stash 3 wiederherstellen\n' +
                  'git stash apply stash^{/wip} # "wip" wiederherstellen\n',
              }}
            ></code>
          </pre>
          <NKR />
        </section>
        <section>
          <h2>Demo Git stash</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Datentypen?</h2>
        </section>
        <section>
          <h2>Beispiel Registrierung</h2>
          <aside className="notes">
            <ul>
              <li>Vorname, Nachname</li>
              <li>Hausnummer, PLZ</li>
              <li>AGB akzeptiert, Newsletter abonniert</li>
              <li>Geburtsdatum</li>
            </ul>
          </aside>
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
                <td>1 Byte</td>
                <td>true, false</td>
              </tr>
            </tbody>
          </table>
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
                <td>-2.1 Mrd bis +2.1 Mrd</td>
              </tr>
              <tr>
                <td>long</td>
                <td>8 Byte</td>
                <td>-9.2 Trill bis + 9.2 Trill</td>
              </tr>
            </tbody>
          </table>
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
                  -3,4*10<sup>38</sup> bis 3,4*10<sup>38</sup>
                </td>
              </tr>
              <tr>
                <td>double</td>
                <td>8 Byte</td>
                <td>
                  -1,7*10<sup>308</sup> bis 1,7*10<sup>308</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Zeichen</h2>
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
                <td>char</td>
                <td>2 Byte</td>
                <td>\u0000 bis \uFFFF</td>
              </tr>
              <tr>
                <td>String</td>
                <td>variable Größe</td>
                <td>jedes einzelne Zeichen wie bei char</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Primitive und komplexe Datentypen</h2>
          <p className="fragment">Primitive Datentypen haben keine Methoden.</p>
          <p className="fragment">
            <strong>String</strong> ist kein primitiver Datentyp
          </p>
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Datenobjekte?</h2>
        </section>
        <section>
          <h2>Eigenschaften</h2>
          <ul>
            <li className="fragment">
              Platzhalter, um Werte zwischenzuspeichern
            </li>
            <li className="fragment">
              werden durch einen Bezeichner und Datentyp deklariert
            </li>
            <li className="fragment">werden durch einen Wert initialisiert</li>
          </ul>
        </section>
        <section>
          <h2>Realisierung</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'String myName; // &rarr; Deklaration\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'myName = "Steffen"; // &rarr; Initialisierung\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'String myName = "Steffen"; // &rarr; Zusammenfassung\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo Deklaration & Initialisierung</h2>
        </section>
      </section>
      <section>
        <h2>Zusammenfassung</h2>
        <ul>
          <li className="fragment">
            <Link to={'/documentation/class-structure#die-main-methode'}>
              Die main Methode
            </Link>
          </li>
          <li className="fragment">
            <Link to={'/documentation/data-types'}>Datentypen</Link>
          </li>
          <li className="fragment">
            <Link to={'/documentation/data-objects'}>Datenobjekte</Link>
          </li>
        </ul>
      </section>
    </Slides>
  );
}
