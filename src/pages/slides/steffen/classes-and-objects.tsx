import Slides from '../../../components/Slides';
import { NKR } from '../../../components/Slides/nkr';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function ClassesAndObjects(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>Fragen oder Probleme?</section>
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
          <ul className="fragment">
            <li>Platzhalter, um Werte zwischenzuspeichern</li>
            <li>Datentyp Bezeichner = Wert;</li>
            <li>Standard für Ganzzahlen: int</li>
            <li>Standard für Gleitkommazahlen: double</li>
          </ul>
        </section>
        <section>
          <h2>Methoden</h2>
          <ul className="fragment">
            <li>Rückgabetyp (primitiv, komplex, void)</li>
            <li>Bezeichner</li>
            <li>Parameter</li>
            <li>Methodenrumpf</li>
          </ul>
        </section>
        <section>
          <h2>Operatoren</h2>
          <ul className="fragment">
            <li>Arithmetische Operatoren (+, -, *, /, %, ++, --)</li>
            <li>Vergleichsoperatoren (==, !=, etc.)</li>
            <li>Logische Operatoren (&&, ||, !)</li>
            <li>Bitweise Operatoren (&, |, ^, ~)</li>
          </ul>
        </section>
        <section>
          <h2>Fallunterscheidung</h2>
          <ul className="fragment">
            <li>if-else</li>
            <li>switch</li>
          </ul>
        </section>
        <section>
          <h2>Schleifen</h2>
          <ul className="fragment">
            <li>while-Schleife</li>
            <li>do-while-Schleife</li>
            <li>for-Schleife</li>
            <li>for-each-Schleife</li>
          </ul>
        </section>
        <section>
          <h2>Arrays</h2>
          <ul className="fragment">
            <li>Elemente eines Typs</li>
            <li>Feste Länge</li>
            <li>index beginnt bei 0</li>
          </ul>
        </section>
        <section>
          <h2>ArrayList</h2>
          <ul className="fragment">
            <li>Elemente eines Typs</li>
            <li>Dynamische Länge</li>
            <li>index beginnt bei 0</li>
            <li>Hilfsmethoden</li>
          </ul>
        </section>
        <section>
          <h2>Helper Klassen</h2>
          <ul className="fragment">
            <li>Math</li>
            <li>Random</li>
            <li>Scanner</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Einführung in die Objektorientierung</h2>
        </section>
        <section>
          <h2>Was sind Beispiele für Objekte in unserer Umgebung?</h2>
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
          <h2>Was für Eigenschaften hat ein spezifischer Mensch?</h2>
          <ul>
            <li className="fragment">blaue Augen</li>
            <li className="fragment">blonde Haare</li>
            <li className="fragment">hat Brille</li>
          </ul>
        </section>
        <section>
          <h2>Was für Verhaltensweisen hat jeder Mensch?</h2>
          <ul>
            <li className="fragment">essen</li>
            <li className="fragment">trinken</li>
            <li className="fragment">laufen</li>
            <li className="fragment">ganzen Namen sagen</li>
          </ul>
        </section>
        <section>
          <h2>Was für Eigenschaften hat ein spezifisches Auto?</h2>
          <ul>
            <li className="fragment">schwarze Farbe</li>
            <li className="fragment">177 PS</li>
            <li className="fragment">Elektromotor</li>
          </ul>
        </section>
        <section>
          <h2>Was für Funktionen hat jedes Auto?</h2>
          <ul>
            <li className="fragment">bremsen</li>
            <li className="fragment">beschleunigen</li>
            <li className="fragment">Laufleistung anzeigen</li>
          </ul>
        </section>
        <section>
          <h2>Abstrahieren von spezifischen Menschen</h2>
          <ul>
            <li className="fragment">Augenfarbe</li>
            <li className="fragment">Haarfarbe</li>
            <li className="fragment">hat Brille</li>
          </ul>
        </section>
        <section>
          <h2>Abstrahieren von spezifischen Autos</h2>
          <ul>
            <li className="fragment">Autofarbe</li>
            <li className="fragment">Anzahl PS</li>
            <li className="fragment">Motorart</li>
          </ul>
        </section>
        <section>
          <h2>Demo Klasse</h2>
          <ul>
            <li className="fragment">Mensch</li>
            <li className="fragment">Auto</li>
          </ul>
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
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Human {\n' +
                  '  public String firstName;\n' +
                  '  public String lastName;\n' +
                  ' \n' +
                  '  public String getFullName() {\n' +
                  '    return firstName + lastName;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo Objekte</h2>
          <li className="fragment">Steffen, Marianna, Mirco</li>
          <li className="fragment">Audi A3, Fiat 500, BMW 335i</li>
        </section>
        <section>
          <h2>Was ist ein Objekt?</h2>
          <p></p>
          <ul>
            <li className="fragment">
              Instanz/Ausprägung <strong>einer</strong> Klasse
            </li>
          </ul>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '//...\n' +
                  'Human steffen = new Human();\n' +
                  'steffen.firstName = "Steffen"\n' +
                  'steffen.lastName = "Merk"\n' +
                  ' \n' +
                  'Human marianna = new Human();\n' +
                  'marianna.firstName = "Marianna"\n' +
                  'marianna.lastName = "Maglio"\n' +
                  '//...',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Lesen und Schreiben von Attributen</li>
            <li className="fragment">
              Unterschied Referenzvariable und Variable
            </li>
            <li className="fragment">Was ist null?</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Modifier?</h2>
        </section>
        <section>
          <h2>Arten von Modifiern</h2>
          <ul>
            <li className="fragment">
              Access Modifier <strong>heute relevant</strong>
            </li>
            <li className="fragment">Non-Access Modifier</li>
          </ul>
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
          <h2>Was für Access Modifier gibt es?</h2>
          <ul>
            <li className="fragment">public</li>
            <li className="fragment">private</li>
            <li className="fragment">protected</li>
            <li className="fragment">default*</li>
          </ul>
          <p className="fragment">
            <NKR />
          </p>
        </section>
        <section>
          <h2>Wann verwendet man public?</h2>
          <ul>
            <li className="fragment">
              um Funktionalität zur Verfügung zu stellen
            </li>
          </ul>
        </section>
        <section>
          <h2>Wann verwendet man private?</h2>
          <ul>
            <li className="fragment">
              um Modifikation von Attributen zu verhindern
            </li>
            <li className="fragment">
              um Implementierungsdetails zu verstecken
            </li>
            <li className="fragment">Organisation von Code</li>
          </ul>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">public/private</li>
            <li className="fragment">Getter- und Settermethoden</li>
            <li className="fragment">
              Schlüsselwort <strong>this</strong>
            </li>
            <li className="fragment">Überladen von Methoden</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Zusammenfassung</h2>
        </section>
        <section>
          <h2>Klasse</h2>
          <ul>
            <li className="fragment">Abstraktion von Objekten</li>
            <li className="fragment">definiert durch Methoden und Attribute</li>
          </ul>
        </section>
        <section>
          <h2>Objekt</h2>
          <ul>
            <li className="fragment">Instanz einer Klasse</li>
            <li className="fragment">Verhalten abhängig von der Instanz</li>
            <li className="fragment">ist eine Referenzvariable</li>
            <li className="fragment">hat den default Wert null</li>
          </ul>
        </section>
        <section>
          <h2>Modifiers</h2>
          <ul>
            <li className="fragment">public/private</li>
            <li className="fragment">Getter- und Settermethoden</li>
            <li className="fragment">this</li>
            <li className="fragment">Überladen von Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">Aufgabe Objects 01</li>
            <li className="fragment">Wiederholen</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
