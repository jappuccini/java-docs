import React from 'react';
import Slides from '../../../components/Slides';
import { NKR } from '../../../components/Slides/nkr';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function Interfaces() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Wiederholung</h2>
          <ul>
            <li className="fragment">abstrakte Klassen</li>
            <li className="fragment">abstrakte Methoden</li>
            <li className="fragment">finale Klassen</li>
            <li className="fragment">finale Methoden</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Variable Argumentlisten*</h2>
          <p className="fragment">werden als VarArgs bezeichnet</p>
          <NKR />
        </section>
        <section>
          <h2>VarArgs</h2>
          <ul>
            <li className="fragment">stehen am Ende der Parameterliste</li>
            <li className="fragment">nur ein VarArgs Parameter je Methode</li>
            <li className="fragment">
              VarArgs Parameter ist ein Array von einem Datentyp
            </li>
            <li className="fragment">
              Argumente werden kommagetrennt definiert
            </li>
          </ul>
        </section>
        <section>
          <p>Implementieren einer Methode mit VarArgs</p>
          <pre>
            <code
              className="java"
              data-line-numbers="1-5|1|2-4"
              dangerouslySetInnerHTML={{
                __html:
                  'public void addCars(Car... cars) {\n' +
                  '  for(Car car : cars) {\n' +
                  '    System.out.println(car.getBrand());\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <p>Verwenden einer Methode mit VarArgs</p>
          <pre>
            <code
              className="java"
              data-line-numbers="1-5|3-4"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  //...\n' +
                  '  carManager.addCars(new Car(), new Car());\n' +
                  '  carManager.addCars(new Car());\n' +
                  '  //...\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
      </section>
      <section>
        <section>
          <h2>Interfaces</h2>
        </section>
        <section>
          <p>Wie kann man Dogs und Cats in einer Liste speichern?</p>
        </section>
        <section>
          <p>Wie kann man Baby, Child und Adult in einer Liste speichern?</p>
        </section>
        <section>
          <p>
            Wie kann man Dogs, Cats, Baby, Child und Adult in einer Liste
            speichern?
          </p>
        </section>
        <section>
          <p>Limitierungen von abstrakten Klassen</p>
          <ul>
            <li className="fragment">komplexe Vererbungshierarchie</li>
            <li className="fragment">keine Mehrfachvererbung</li>
          </ul>
        </section>
        <section>
          <h2>Interfaces</h2>
          <ul>
            <li className="fragment">definieren Methoden und Attribute</li>
            <li className="fragment">werden von Klassen implementiert</li>
          </ul>
        </section>
        <section>
          <h2>Zweck von Interfaces</h2>
          <ul>
            <li className="fragment">Unabhängig von Vererbung</li>
            <li className="fragment">Verstecken von Implementierungsdetails</li>
            <li className="fragment">
              Schnittstelle zwischen Ersteller und Verwender
            </li>
          </ul>
        </section>
        <section>
          <h2>Ersteller des Warenkorbs</h2>
          <ul>
            <li className="fragment">Beschreibung anzeigen</li>
            <li className="fragment">Einzelpreis ermitteln</li>
          </ul>
        </section>
        <section>
          <h2>Realisierung des Warenkorbs</h2>
          <ul>
            <li className="fragment">Warenkorb Modul definiert Interface</li>
            <li className="fragment">Artikel implementieren das Interface</li>
          </ul>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">ShoppingCart</li>
            <li className="fragment">Dog und Cat implementieren Interface</li>
            <li className="fragment">ToDo Liste</li>
            <li className="fragment">Dog und Cat implementieren Interface</li>
          </ul>
        </section>
        <section>
          <h2>weitere Anwendungsgebiete*</h2>
          <ul>
            <li className="fragment">Dependency Injection</li>
            <li className="fragment">Unit Tests</li>
          </ul>
          <div>
            <NKR />
          </div>
        </section>
      </section>
      <section>
        <section>
          <h2>Komparatoren</h2>
        </section>
        <section>
          <h2>Zweck von Komparatoren</h2>
          <p>Sortieren von Listen</p>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <ul>
            <li className="fragment">Vergleichen von zwei Objekten</li>
            <li className="fragment">Element davor einordnen: 1</li>
            <li className="fragment">Element dahinter einordnen: -1</li>
            <li className="fragment">Elemente gleich einordnen: 0</li>
          </ul>
        </section>
        <section>
          <h2>Welche Interfaces gibt es?</h2>
          <ul>
            <li className="fragment">Comparable</li>
            <li className="fragment">Comparator</li>
          </ul>
        </section>
        <section>
          <h2>Comparable</h2>
          <ul>
            <li className="fragment">definiert die Standardsortierung</li>
            <li className="fragment">Implementierung in der Datenklasse</li>
            <li className="fragment">Bsp. Human nach Alter sortieren</li>
          </ul>
        </section>
        <section>
          <h2>Comparator</h2>
          <ul>
            <li className="fragment">definiert eine Sortierung</li>
            <li className="fragment">Implementierung in eigener Klasse</li>
            <li className="fragment">Bsp. AgeComparator, NameComparator</li>
          </ul>
        </section>
        <section>
          <h2>Wie sortiert man eine Liste?</h2>
          <pre className="fragment">
            <code
              className="java"
              data-line-numbers="2|3|4"
              dangerouslySetInnerHTML={{
                __html:
                  '// ...\n' +
                  'ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n' +
                  'Collections.sort(humans);\n' +
                  'Collections.sort(humans, new AgeComparator());\n' +
                  '// ...',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Human Comparable</li>
            <li className="fragment">AgeComparator</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">Interfaces 01</li>
            <li className="fragment">Comparators 01 - 02</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
