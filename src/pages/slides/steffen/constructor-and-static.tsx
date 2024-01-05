import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function ConstructorAndStatic(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Konstruktor</li>
            <li className="fragment">static Modifier</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
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
      </section>
      <section>
        <section>
          <h2>Konstruktor</h2>
        </section>
        <section>
          <h2>Zweck des Konstruktors</h2>
          <ul>
            <li className="fragment">Initialisierung eines Objekts</li>
            <li className="fragment">Verschiedene Initialisierungen</li>
          </ul>
        </section>
        <section>
          <h2>Aufbau eines Konstruktors</h2>
          <ul>
            <li className="fragment">Access Modifier</li>
            <li className="fragment">Klassenname</li>
            <li className="fragment">Parameterliste</li>
            <li className="fragment">Methodenrumpf</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel Konstruktor</h2>
          <pre>
            <code
              className="java"
              data-line-numbers="5-8"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Car {\n' +
                  '  private String color;\n' +
                  '  private char engineType;\n' +
                  '\n' +
                  '  public Car(String color, char engineType) {\n' +
                  '    this.color = color;\n' +
                  '    this.engineType = engineType;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Wie erstelle ich mehrere Konstruktoren?</h2>
          <ul>
            <li className="fragment">
              gleiche Regeln wie beim Überladen von Methoden
            </li>
          </ul>
        </section>
        <section>
          <h2>Beispiel mehrere Konstruktoren</h2>
          <pre>
            <code
              className="java"
              data-line-numbers="5-13"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Car {\n' +
                  '  private String color;\n' +
                  '  private char engineType;\n' +
                  '\n' +
                  '  public Car(String color) {\n' +
                  '    this.color = color;\n' +
                  "    this.engineType = 'b';\n" +
                  '  }\n' +
                  '\n' +
                  '  public Car(String color, char engineType) {\n' +
                  '    this.color = color;\n' +
                  '    this.engineType = engineType;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo Konstruktor</h2>
          <ul>
            <li className="fragment">Human</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>static Modifier</h2>
        </section>
        <section>
          <h2>Kann angewendet werden auf</h2>
          <ul>
            <li className="fragment">Attribute</li>
            <li className="fragment">Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Statische Attribute</h2>
          <ul>
            <li className="fragment">
              keine Unterscheidung zwischen Objekten notwendig, z.B. die Zahl Pi
            </li>
            <li className="fragment">Zugriff über Klassenname, z.B. Math.PI</li>
          </ul>
        </section>
        <section>
          <h2>Statische Methoden</h2>
          <ul>
            <li className="fragment">
              kein Zugriff auf Objektattribute möglich, z.B. berechnen des
              Betrags
            </li>
            <li className="fragment">
              Zugriff über Klassenname, z.B. Math.abs()
            </li>
          </ul>
        </section>
        <section>
          <h2>Demo static mit private & public</h2>
          <ul>
            <li className="fragment">Humans</li>
          </ul>
        </section>
        <section data-background-iframe="https://giphy.com/embed/lMVNl6XxTvXgs"></section>
        <section>Finally public static void main verstanden 🥳</section>
      </section>
      <section>
        <section>
          <h2>Zusammenfassung</h2>
        </section>
        <section>
          <h2>Konstruktor</h2>
          <ul>
            <li className="fragment">Initialisierung von Objekten</li>
            <li className="fragment">Mehrere Konstruktoren</li>
          </ul>
        </section>
        <section>
          <h2>static Modifier</h2>
          <ul>
            <li className="fragment">Methoden und Attribute</li>
            <li className="fragment">kein Zugriff auf Instanzattribute</li>
          </ul>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">Aufgabe Objects 02 - 07</li>
            <li className="fragment">Tutego</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
