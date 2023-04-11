import React from 'react';
import Slides from '../../../components/Slides';
import { NKR } from '../../../components/Slides/nkr';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function Inheritance() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>Fragen oder Probleme?</section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
          <ul>
            <li className='fragment'>Java API</li>
            <li className='fragment'>final modifier</li>
            <li className='fragment'>Enumerations</li>
            <li className='fragment'>Klassendiagramme</li>
            <li className='fragment'>Aktivitätsdiagramme</li>
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
            <li className='fragment'>Auto & Truck</li>
            <li className='fragment'>Baby, Kind & Erwachsener</li>
            <li className='fragment'>Samsung Galaxy S1, S2,... S21</li>
          </ul>
        </section>
        <section>
          <h2>Vererbung ermöglicht die Wiederverwendung von:</h2>
          <ul>
            <li className='fragment'>Attributen</li>
            <li className='fragment'>Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Generalisierung</h2>
          <p className='fragment'>
            Generalisierung bedeutet alle gemeinsamen Attribute und Methoden
            mehrerer Klassen in eine weitere Klasse zu extrahieren.
          </p>
          <p className='fragment'>
            z.B. von Cat/Dog in die Klasse Animal
          </p>
        </section>
        <section>
          <h2>Vererbung</h2>
          <p className='fragment'>
            Vererbung bedeutet alle Attribute und Methoden
            einer Klasse einer anderen Klasse zu übertragen.
          </p>
          <p className='fragment'>
            z.B. Cat und Dog bekommen alle Attribute und Methoden
            der Klasse Animal
          </p>
        </section>
        <section>
          <h2>Das Schlüsselwort <strong>extends</strong></h2>
          <pre className='fragment'>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'public class Dog extends Animal {\n' +
              '  public void bark() {\n' +
              '   System.out.println("Wuff");\n' +
              '  }\n' +
              '}'
              }}>
            </code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className='fragment'>Generalisierung von Dog und Cat</li>
            <li className='fragment'>Vererbung an Dog und Cat</li>
          </ul>
        </section>
        <section>
          <h2>Das Schlüsselwort <strong>super</strong></h2>
          <ul>
            <li className='fragment'>wird verwendet um den Konstruktor der vererbenden Klasse auszuführen</li>
            <li className='fragment'>muss als erste Methode im Konstruktor ausgeführt werden</li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
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
              '}'
              }}>
            </code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className='fragment'>super call mit Animal</li>
          </ul>
        </section>
        <section>
          <h2>der protected modifier</h2>
          <ul>
            <li className='fragment'>weiterer Access modifier wie public und private</li>
            <li className='fragment'>kann angewendet werden auf Attribute, Methoden und Konstruktoren</li>
          </ul>
        </section>
        <section>
          <h2>Auswirkung von protected</h2>
          <p>
            Methoden, Attribute und Konstructoren die mit protected markiert
            sind können ausgeführt werden von:
          </p>
          <ul>
            <li className='fragment'>erbenden Klassen</li>
            <li className='fragment'>Klassen im gleichen Package🤯*</li>
          </ul>
          <div className='fragment'>
            <NKR/>
          </div>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className='fragment'>protected name</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className='fragment'>Gemeinsamkeiten mehrerer Klassen</li>
            <li className='fragment'>Generalisierung</li>
            <li className='fragment'>Vererbung</li>
            <li className='fragment'>protected</li>
            <li className='fragment'>super</li>
          </ul>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className='fragment'>Polymorphy 01 & 02</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
