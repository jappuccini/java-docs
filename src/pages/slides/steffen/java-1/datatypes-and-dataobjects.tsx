import Link from '@docusaurus/Link';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';
import { NKR } from '../../../../components/Slides/nkr';

export default function DataTypesAndDataObjects(): React.JSX.Element {
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
            <li className="fragment">Operationen mit Datentypen</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Demo Hello World</h2>
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
          <h2>git clone</h2>
          <p>Kopieren eines Repositories</p>
          <pre>
            <code
              className="bash"
              dangerouslySetInnerHTML={{
                __html:
                  '# Syntax: git clone &lt;url&gt;\n' +
                  'git clone https://github.com/jappuccini/java-exercises.git\n',
              }}
            ></code>
          </pre>
          <NKR />
        </section>
        <section>
          <h2>git branch</h2>
          <p>Name des aktuellen Branches anzeigen</p>
          <pre>
            <code
              className="bash"
              dangerouslySetInnerHTML={{
                __html: 'git branch',
              }}
            ></code>
          </pre>
          <NKR />
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
                  'git switch exe/class-structure-01\n' +
                  'git switch sol/class-structure-01\n',
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
        <section>
          <h2>Vorgehensweise Aufgaben</h2>
          <ul>
            <li className="fragment">git switch EXERCISE</li>
            <li className="fragment">Aufgabe bearbeiten</li>
            <li className="fragment">git add .</li>
            <li className="fragment">git stash</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Datentypen?</h2>
        </section>
        <section>
          <h2>Beispiel Registrierung</h2>
          <ul>
            <li className="fragment">Vorname, Nachname</li>
            <li className="fragment">Hausnummer, PLZ</li>
            <li className="fragment">AGB akzeptiert, Newsletter abonniert</li>
            <li className="fragment">Geburtsdatum</li>
          </ul>
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
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/dataobjects/Example.java">
              Demo - Datenobjekte
            </Link>
          </h2>
          <ul>
            <li className="fragment">AGB akzeptieren</li>
            <li className="fragment">Alter</li>
            <li className="fragment">Größe</li>
            <li className="fragment">Geschlecht</li>
            <li className="fragment">Name</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Operationen mit Datentypen</h2>
        </section>
        <section>
          <h2>double in int konvertieren</h2>
          <p>Beim Konvertieren von double zu int wird immer abgerundet.</p>
        </section>
        <section>
          <h2>Beispiel double in int</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'double doubleNumber = 3.5;\n' +
                  'int intNumber = (int) doubleNumber;\n' +
                  'System.out.println(intNumber); // gibt 3 aus',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Hilfsmethoden der Klasse String</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'String name = "Steffen";\n' +
                  'char buchstabe = name.charAt(2);\n' +
                  'System.out.println(buchstabe); // gibt "e" aus',
              }}
            ></code>
          </pre>
        </section>
      </section>
      <section>
        <h2>Zusammenfassung</h2>
        <ul>
          <li className="fragment">
            <Link to="/documentation/class-structure#die-main-methode">
              Die main Methode
            </Link>
          </li>
          <li className="fragment">
            <Link to="/documentation/data-types">Datentypen</Link>
          </li>
          <li className="fragment">
            <Link to="/documentation/data-objects">Datenobjekte</Link>
          </li>
        </ul>
      </section>
    </Slides>
  );
}
