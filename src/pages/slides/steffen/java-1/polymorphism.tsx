import Link from '@docusaurus/Link';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function Polymorphism(): React.JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Polymorphie</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Vererbung</h2>
          <ul>
            <li className="fragment">Generalisierung in Oberklasse</li>
            <li className="fragment">Vererbung an Unterklasse</li>
            <li className="fragment">super</li>
            <li className="fragment">protected</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Polymorphie</h2>
        </section>
        <section>
          <p>Eine Referenzvariable kann abgeleitetes Objekt referenzieren</p>
          <ul>
            <li className="fragment">Vehicle &rarr; Car oder Truck</li>
            <li className="fragment">Human &rarr; Baby, Child oder Adult</li>
            <li className="fragment">
              Smartphone &rarr; Samsung Galaxy, Apple iPhone
            </li>
          </ul>
        </section>
        <section>
          <h2>Limitationen der Polymorphie</h2>
          <ul>
            <li className="fragment">Unterklasse muss Oberklasse erweitern</li>
            <li className="fragment">nur public der Oberklasse verwendbar</li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/polymorphy">
              Demo - Polymorphie
            </Link>
          </h2>
          <ul>
            <li className="fragment">Oberklassenmethode makeSound</li>
            <li className="fragment">ArrayList mit Dog und Cat</li>
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
          <h2>Beispiel Upcast</h2>
          <pre>
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
          <h2>Beispiel Downcast</h2>
          <pre>
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
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/polymorphy">
              Demo - Downcast
            </Link>
          </h2>
          <ul>
            <li className="fragment">Animal zu Dog</li>
          </ul>
        </section>
        <section>
          <h2>instanceof Operator</h2>
          <ul>
            <li className="fragment">
              prüft, ob eine Referenzvariable eine Instanz einer bestimmten
              Klasse ist.
            </li>
          </ul>
        </section>
        <section>
          <h2>Beispiel instanceof</h2>
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
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/polymorphy">
              Demo - instanceof
            </Link>
          </h2>
          <ul>
            <li className="fragment">Dog und Cat spezifische Methoden</li>
            <li className="fragment">instanceof mit Downcast in ArrayList</li>
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
            <li className="fragment">
              <Link to="/exercises/polymorphism">Polymorphism 03 & 04</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
