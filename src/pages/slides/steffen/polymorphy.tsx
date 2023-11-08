import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function Polymorphy(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>Fragen oder Probleme?</section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
          <ul>
            <li className="fragment">Gemeinsamkeiten mehrerer Klassen</li>
            <li className="fragment">Generalisierung</li>
            <li className="fragment">Vererbung</li>
            <li className="fragment">protected</li>
            <li className="fragment">super</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Polymorphie</h2>
        </section>
        <section>
          <p>Bezeichner kann unterschiedliche Datentypen annehmen</p>
          <ul>
            <li className="fragment">Vehicle -&gt; Car oder Truck</li>
            <li className="fragment">Human -&gt; Baby, Child oder Adult</li>
            <li className="fragment">
              Smartphone -&gt; Samsung Galaxy, Apple iPhone
            </li>
          </ul>
        </section>
        <section>
          <h2>Limitationen der Polymorphie</h2>
          <ul>
            <li className="fragment">
              spezifische Klasse muss generische Klasse erweitern
            </li>
            <li className="fragment">
              nur public Methoden/Attribute der generischen Klasse verwendbar
            </li>
          </ul>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Methode makeSound</li>
            <li className="fragment">Animal Array mit Dog und Cat</li>
          </ul>
        </section>
        <section>
          <h2>Upcast</h2>
          <p>
            Der Referenzvariable einer Oberklasse wird eine Referenzvariable
            einer Unterklasse zugewiesen.
          </p>
        </section>
        <section>
          <h2>Upcast</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Animal bello = new Dog();\n' +
                  'Animal merlin = new Cat();\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Downcast</h2>
          <p>
            Die Referenzvariable einer Oberklasse wird in eine Referenzvariable
            einer Unterklasse umgewandelt.
          </p>
        </section>
        <section>
          <h2>Downcast</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Animal bello = new Dog();\n' + 'Dog bello2 = (Dog) bello;\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Downcast von Animal zu Dog</li>
          </ul>
        </section>
        <section>
          <p>
            Der <strong>instanceof</strong> Operator
          </p>
          <ul>
            <li className="fragment">
              prüft, ob eine Referenzvariable eine Instanz einer bestimmten
              Klasse ist.
            </li>
          </ul>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Animal bello = new Dog();\n' +
                  'if (bello instanceof Dog) {\n ' +
                  '  // dog specific coding\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Dog und Cat spezifische Methoden</li>
            <li className="fragment">instanceof mit Downcast in Array</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Polymorphie</li>
            <li className="fragment">Upcast</li>
            <li className="fragment">Downcast</li>
            <li className="fragment">instanceof</li>
          </ul>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">Polymorphy 03 & 04</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
