import Slides from '../../../components/Slides';
import { NKR } from '../../../components/Slides/nkr';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function Inheritance(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Vererbung</li>
            <li className="fragment">Konstruktoren II</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Java API</h2>
          <ul>
            <li className="fragment">Wrapper Klassen</li>
            <li className="fragment">LocalDateTime</li>
            <li className="fragment">File</li>
          </ul>
        </section>
        <section>
          <h2>final modifier</h2>
          <ul>
            <li className="fragment">Attribute</li>
            <li className="fragment">Variablen</li>
          </ul>
        </section>
        <section>
          <h2>Enumeration</h2>
          <ul>
            <li className="fragment">Gruppe von Konstanten</li>
            <li className="fragment">switch</li>
            <li className="fragment">isBinary</li>
            <li className="fragment">values, ordinal</li>
          </ul>
        </section>
        <section>
          <h2>Klassendiagramm</h2>
          <ul>
            <li className="fragment">Bereiche</li>
            <li className="fragment"> + - * ~ </li>
            <li className="fragment">
              {' '}
              <u>static</u>{' '}
            </li>
            <li className="fragment"> &#123; final &#125;</li>
            <li className="fragment"> &lt;&lt; enumeration &gt;&gt;</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Vererbung</h2>
        </section>
        <section>
          <h2>Gemeinsamkeiten von Unterschiedlichen Klassen</h2>
          <ul>
            <li className="fragment">Auto & Truck</li>
            <li className="fragment">Baby, Kind & Erwachsener</li>
            <li className="fragment">Samsung Galaxy S1, S2,... S21</li>
          </ul>
        </section>
        <section>
          <h2>Vererbung ermöglicht die Wiederverwendung von:</h2>
          <ul>
            <li className="fragment">Attributen</li>
            <li className="fragment">Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Generalisierung</h2>
          <p className="fragment">
            Generalisierung bedeutet alle gemeinsamen Attribute und Methoden
            mehrerer Klassen in eine weitere Klasse zu extrahieren.
          </p>
          <p className="fragment">z.B. von Cat/Dog in die Klasse Animal</p>
        </section>
        <section>
          <h2>Vererbung</h2>
          <p className="fragment">
            Vererbung bedeutet alle Attribute und Methoden einer Klasse einer
            anderen Klasse zu übertragen.
          </p>
          <p className="fragment">
            z.B. Cat und Dog bekommen alle Attribute und Methoden der Klasse
            Animal
          </p>
        </section>
        <section>
          <h2>Beispiel extends</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog extends Animal {\n' +
                  '  public void bark() {\n' +
                  '   System.out.println("Wuff");\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo Vererbung</h2>
          <ul>
            <li className="fragment">Generalisierung von Dog und Cat</li>
            <li className="fragment">Vererbung an Dog und Cat</li>
          </ul>
        </section>
        <section>
          <h2>
            Das Schlüsselwort <strong>super</strong>
          </h2>
          <ul>
            <li className="fragment">
              wird verwendet um den Konstruktor der vererbenden Klasse
              auszuführen
            </li>
            <li className="fragment">
              muss als erste Methode im Konstruktor ausgeführt werden
            </li>
          </ul>
        </section>
        <section>
          <h2>Beispiel super</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Animal {\n' +
                  '  public Animal(String name) {\n' +
                  '    this.name = name;\n' +
                  '  }\n' +
                  '}\n' +
                  '\n' +
                  'public class Dog extends Animal {\n' +
                  '  public Dog(String name) {\n' +
                  '    super(name);\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo super</h2>
          <ul>
            <li className="fragment">super call mit Animal</li>
          </ul>
        </section>
        <section>
          <h2>der protected modifier</h2>
          <ul>
            <li className="fragment">
              weiterer Access modifier wie public und private
            </li>
            <li className="fragment">
              kann angewendet werden auf Attribute, Methoden und Konstruktoren
            </li>
          </ul>
        </section>
        <section>
          <h2>Auswirkung von protected</h2>
          <p>
            Methoden, Attribute und Konstructoren die mit protected markiert
            sind können ausgeführt werden von:
          </p>
          <ul>
            <li className="fragment">erbenden Klassen</li>
            <li className="fragment">Klassen im gleichen Package🤯*</li>
          </ul>
          <div className="fragment">
            <NKR />
          </div>
        </section>
        <section>
          <h2>Demo protected</h2>
          <ul>
            <li className="fragment">public name</li>
            <li className="fragment">private name</li>
            <li className="fragment">protected name</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Konstruktoren II</h2>
        </section>
        <section>
          <h2>Konstruktoren II</h2>
          <ul>
            <li className="fragment">spezifische Konstruktoren</li>
            <li className="fragment">unspezifische Konstruktoren</li>
          </ul>
        </section>
        <section>
          <h2>spezifische Konstruktoren</h2>
          <ul>
            <li className="fragment">initialisieren alle Attribute</li>
            <li className="fragment">(fast) alle Attribute als Parameter</li>
          </ul>
        </section>
        <section>
          <h2>spezifischer Konstruktor</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Car {\n' +
                  '  public int hp;\n' +
                  '  public char engineType;\n' +
                  '  \n' +
                  '  public Car(int hp, char engineType) {\n' +
                  '   this.hp = hp;\n' +
                  '   this.engineType = engineType;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>unspezifische Konstruktoren</h2>
          <ul>
            <li className="fragment">verwenden spezifischen Konstruktor</li>
            <li className="fragment">nicht alle Attribute als Parameter</li>
          </ul>
        </section>
        <section>
          <h2>unspezifischer Konstruktor</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Car {\n' +
                  '  public int hp;\n' +
                  '  public char engineType;\n' +
                  '  \n' +
                  '  public Car(int hp) {\n' +
                  '   this.hp = hp;\n' +
                  "   this.engineType = 'b'\n" +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Konstruktor wiederverwenden</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Car {\n' +
                  '  public int hp;\n' +
                  '  public char engineType;\n' +
                  '  \n' +
                  '  public Car(int hp) {\n' +
                  "   this(hp, 'b');\n" +
                  '  }\n' +
                  '  public Car(int hp, char engineType) {\n' +
                  '   this.hp = hp;\n' +
                  '   this.engineType = engineType;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Attribut age in Dog (default 0)</li>
            <li className="fragment">Attribut age in Animal</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Gemeinsamkeiten mehrerer Klassen</li>
            <li className="fragment">Generalisierung</li>
            <li className="fragment">Vererbung</li>
            <li className="fragment">protected</li>
            <li className="fragment">super</li>
          </ul>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">Polymorphy 01 & 02</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
