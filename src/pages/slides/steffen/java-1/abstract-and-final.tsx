import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function AbstractAndFinal(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">abstract Modifier</li>
            <li className="fragment">final Modifier</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Polymorphie</h2>
          <ul>
            <li className="fragment">Polymorphie</li>
            <li className="fragment">Upcast</li>
            <li className="fragment">Downcast</li>
            <li className="fragment">instanceof</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>abstract Modifier</h2>
        </section>
        <section>
          <h2>Kann angewendet werden auf</h2>
          <ul>
            <li className="fragment">Klassen</li>
            <li className="fragment">Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Abstrakte Klassen</h2>
          <ul>
            <li className="fragment">kann kein Objekt davon erzeugt werden</li>
            <li className="fragment">
              muss erweitert werden von einer anderen Klasse
            </li>
          </ul>
        </section>
        <section>
          <h2>Zweck von abstrakten Klassen</h2>
          <ul>
            <li className="fragment">Wiederverwendung von Code</li>
            <li className="fragment">
              Erzwingen von spezifischen Implementierungen
            </li>
          </ul>
        </section>
        <section>
          <h2>Demo abstrakte Klasse</h2>
          <ul>
            <li className="fragment">Animal Klasse abstrakt machen</li>
          </ul>
        </section>
        <section>
          <h2>Abstrakte Methode</h2>
          <ul>
            <li className="fragment">
              kann nur in abstrakten Klassen definiert werden
            </li>
            <li className="fragment">definiert Signatur</li>
            <li className="fragment">
              muss von erbenden Klassen implementiert werden
            </li>
          </ul>
        </section>
        <section>
          <h2>Zweck von abstrakten Methoden</h2>
          <ul>
            <li className="fragment">Erzwingen von spezifischen Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Demo abstrakte Methode</h2>
          <ul>
            <li className="fragment">abstrakte Methode makeSound</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>final Modifier</h2>
        </section>
        <section>
          <h2>Kann angewendet werden auf</h2>
          <ul>
            <li className="fragment">Klassen</li>
            <li className="fragment">Methoden</li>
            <li className="fragment">Attribute</li>
            <li className="fragment">Variablen</li>
          </ul>
        </section>
        <section>
          <h2>Finale Klassen</h2>
          <ul>
            <li className="fragment">kann man nicht ableiten</li>
          </ul>
        </section>
        <section>
          <h2>Zweck von finalen Klassen</h2>
          <ul>
            <li className="fragment">weitere Ableitungen machen keinen Sinn</li>
            <li className="fragment">
              Klasse ist nicht zur Erweiterung gedacht
            </li>
          </ul>
        </section>
        <section>
          <h2>Demo finale Klasse</h2>
          <ul>
            <li className="fragment">Dog Klasse final machen</li>
          </ul>
        </section>
        <section>
          <h2>Finale Methode</h2>
          <ul>
            <li className="fragment">kann nicht überschrieben werden</li>
          </ul>
        </section>
        <section>
          <h2>Zweck von finalen Methoden</h2>
          <ul>
            <li className="fragment">Verhalten erzwingen</li>
          </ul>
        </section>
        <section>
          <h2>Demo finale Methode</h2>
          <ul>
            <li className="fragment">finale Methode bark</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">abstrakte Klassen</li>
            <li className="fragment">abstrakte Methoden</li>
            <li className="fragment">finale Klassen</li>
            <li className="fragment">finale Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">Abstract and Final 01</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
