import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';

export default function AbstractAndFinal(): React.JSX.Element {
  return (
    <Slides title="Abstrakte und finale Klassen und Methoden">
      <section>
        <section className="cover">
          <p className="kicker">Grundlagen der Programmierung</p>
          <h1>Abstrakte und finale Klassen und Methoden</h1>
          <p>Wann Vererbung vorgeschrieben und wann sie ausgeschlossen ist.</p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">
              Wiederholung: Vererbung und Polymorphie
            </li>
            <li className="fragment">abstract Modifier</li>
            <li className="fragment">final Modifier</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>

      <section data-topic="Vererbung und Polymorphie">
        <section className="divider">
          <p className="kicker">Wiederholung</p>
          <h2>Vererbung und Polymorphie</h2>
          <p>Die Grundlagen aus der letzten Einheit wiederholen.</p>
        </section>

        <section>
          <h2>Vererbung</h2>
          <ul>
            <li className="fragment">
              Mit <code>extends</code> erben Unterklassen Attribute und
              Methoden.
            </li>
            <li className="fragment">
              Methoden der Oberklasse können überschrieben werden.
            </li>
            <li className="fragment">
              <code>super</code> ruft die Implementierung der Oberklasse auf.
            </li>
          </ul>
        </section>

        <section>
          <h2>Polymorphie</h2>
          <ul>
            <li className="fragment">
              Eine Referenzvariable kann ein Objekt einer Unterklasse
              referenzieren.
            </li>
            <li className="fragment">
              Upcast: <code>Animal animal = new Cat();</code>
            </li>
            <li className="fragment">
              Downcast nur nach <code>instanceof</code>-Prüfung.
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="abstract Modifier">
        <section className="divider">
          <p className="kicker">Vererbung</p>
          <h2>abstract Modifier</h2>
          <p>
            Klassen und Methoden, die erweitert oder überschrieben werden
            müssen.
          </p>
        </section>

        <section>
          <h2>Abstrakte Klassen</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public abstract class Animal {\n' +
                  '  public void eat() {\n' +
                  '    System.out.println("mampf");\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <div className="two-column">
            <div>
              <div className="callout fragment">
                <span className="callout-title">Nicht instanziierbar</span>
                <p>
                  <code>new Animal()</code> kompiliert nicht.
                </p>
              </div>
            </div>
            <div>
              <ul>
                <li className="fragment">
                  Unterklassen müssen <code>extends Animal</code> verwenden.
                </li>
                <li className="fragment">
                  Implementierte Methoden werden geerbt.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/abstraction/Animal.java">
              Demo: abstrakte Klasse
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>Animal</code> abstrakt machen.
            </li>
            <li className="fragment">
              <code>new Animal()</code> erzeugen und den Compilerfehler zeigen.
            </li>
          </ul>
        </section>

        <section>
          <h2>Abstrakte Methoden</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'public abstract void makeSound();\n',
              }}
            ></code>
          </pre>
          <div className="two-column">
            <div>
              <div className="callout fragment">
                <span className="callout-title">Nur Signatur</span>
                <p>Die Methode hat keinen Rumpf.</p>
              </div>
            </div>
            <div>
              <ul>
                <li className="fragment">
                  Sie steht nur in abstrakten Klassen.
                </li>
                <li className="fragment">
                  Unterklassen müssen sie implementieren.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/abstraction/Example.java">
              Demo: abstrakte Methode
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              Was passiert, wenn man die abstrakte Methode{' '}
              <code>makeSound()</code> hinzufügt?
            </li>
            <li className="fragment">
              <code>Cat</code> und <code>Dog</code> implementieren{' '}
              <code>makeSound()</code>.
            </li>
            <li className="fragment">
              Der Aufruf erfolgt über <code>Animal</code>-Referenzen.
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="final Modifier">
        <section className="divider">
          <p className="kicker">Vererbung</p>
          <h2>final Modifier</h2>
          <p>
            Klassen und Methoden, die nicht erweitert oder überschrieben werden
            dürfen.
          </p>
        </section>

        <section>
          <h2>Finale Klassen</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public final class Cat extends Animal {\n' +
                  '  public void makeSound() {\n' +
                  '    System.out.println("Miau!");\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <div className="two-column">
            <div>
              <div className="callout fragment">
                <span className="callout-title">Nicht erweiterbar</span>
                <p>Eine finale Klasse kann nicht erweitert werden.</p>
              </div>
            </div>
            <div>
              <ul>
                <li className="fragment">
                  Sie kann selbst von einer anderen Klasse erben.
                </li>
                <li className="fragment">
                  Weitere Ableitung nicht vorgesehen.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/abstraction/Cat.java">
              Demo: finale Klasse
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>SuperCat</code> anlegen, das <code>Cat</code> erweitern
              soll.
            </li>
            <li className="fragment">
              Compilerfehler zeigen, weil <code>Cat</code> final ist.
            </li>
          </ul>
        </section>

        <section>
          <h2>Finale Methoden</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public final void bark() {\n' +
                  '  System.out.println("Wuff!");\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <div className="two-column">
            <div>
              <div className="callout fragment">
                <span className="callout-title">Nicht überschreibbar</span>
                <p>Eine finale Methode kann nicht überschrieben werden.</p>
              </div>
            </div>
            <div>
              <ul>
                <li className="fragment">
                  Implementierung wird unverändert geerbt.
                </li>
                <li className="fragment">
                  Sie erzwingt ein bestimmtes Verhalten.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/abstraction/Dackel.java">
              Demo: finale Methode
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>Dackel</code> überschreibt <code>bark()</code>.
            </li>
            <li className="fragment">
              Compilerfehler zeigen, weil <code>bark()</code> in{' '}
              <code>Dog</code> final ist.
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Zusammenfassung">
        <section className="divider">
          <p className="kicker">Abschluss</p>
          <h2>Zusammenfassung</h2>
          <p>Abstrakte und finale Klassen und Methoden im Vergleich.</p>
        </section>

        <section>
          <h2>Abstract und final im Vergleich</h2>
          <table style={{ fontSize: '0.7em' }}>
            <thead>
              <tr>
                <th>Element</th>
                <th>abstract</th>
                <th>final</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>Klasse</td>
                <td>muss erweitert werden</td>
                <td>nicht erweiterbar</td>
              </tr>
              <tr className="fragment">
                <td>Methode</td>
                <td>muss überschrieben werden</td>
                <td>nicht überschreibbar</td>
              </tr>
              <tr className="fragment">
                <td>Attribut</td>
                <td>–</td>
                <td>einmalige Zuweisung</td>
              </tr>
              <tr className="fragment">
                <td>Variable</td>
                <td>–</td>
                <td>einmalige Zuweisung</td>
              </tr>
            </tbody>
          </table>
          <p className="fragment font-medium">
            finale Attribute und Variablen wurden bereits behandelt; für
            dasselbe Element schließen sich abstract und final aus.
          </p>
        </section>

        <section className="statement">
          <p>abstract erzwingt, was final verbietet.</p>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/abstract-and-final/abstract-and-final01">
                Abstract and Final 01
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
