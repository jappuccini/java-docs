import Link from '@docusaurus/Link';
import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function Lambda(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Innere Klassen</li>
            <li className="fragment">Lambdafunktionen</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Innere Klassen</h2>
        </section>
        <section>
          <h2>Innere Klassen</h2>
          <p className="fragment">
            Dateien die ausschließlich eine einzige Klasse beinhalten nennt man
            <span> Äußere Klassen</span>.
          </p>
          <p className="fragment">
            Wird eine Klasse innerhalb einer anderen Klasse definiert, nennt man
            diese <span> Innere Klasse </span>.
          </p>
        </section>
        <section>
          <h2>Arten von Inneren Klassen</h2>
          <ul>
            <li className="fragment">Geschachtelte Klassen</li>
            <li className="fragment">Element Klassen</li>
            <li className="fragment">Lokale Klassen</li>
            <li className="fragment">Anonyme Klassen</li>
          </ul>
        </section>
        <section>
          <h2>Geschachtelte Klasse - Definition</h2>
          <p className="fragment">
            Die innere Klasse wird innerhalb der Klassendefinition erstellt und
            mit dem Schlüsselwort <span> static</span> markiert.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class HumanComparator {\n' +
                  ' //...\n' +
                  ' public static class AgeDescComparator \n' +
                  '   implements Comparator&lt;Human&gt; {\n' +
                  '   //...\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Geschachtelte Klasse - Verwendung</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n' +
                  '\n' +
                  'HumanComparator.AgeDescComparator comparator;\n' +
                  'comparator = new HumanComparator.AgeDescComparator();\n' +
                  '\n' +
                  'Collections.sort(humans, comparator);\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Element Klasse - Definition</h2>
          <p className="fragment">
            Die innere Klasse wird innerhalb der Klassendefinition erstellt.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class HumanComparator {\n' +
                  ' //...\n' +
                  ' public class AgeDescComparator \n' +
                  '   implements Comparator&lt;Human&gt; {\n' +
                  '   //...\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Element Klasse - Verwendung</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n' +
                  '\n' +
                  'HumanComparator humanComparator = new HumanComparator();\n' +
                  '\n' +
                  'Collections.sort(humans, humanComparator.new AgeDescComparator());\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Lokale Klasse</h2>
          <p className="fragment">
            Die lokale Klasse wird innerhalb einer Methode erstellt und mit
            keinem Schlüsselwort markiert. Sie kann nur in der erstellten
            Methode verwendet verwendet.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  ' //...\n' +
                  ' public static void main(String[] args) {\n' +
                  '   class AgeDescComparator implements Comparator&lt;Human&gt; {\n' +
                  '     //...\n' +
                  '   }\n' +
                  '   AgeDescComparator comparator = new AgeDescComparator();\n' +
                  ' }\n' +
                  ' //...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Anonyme Klasse</h2>
          <p className="fragment">
            Die innere Klasse wird innerhalb des Methodenaufrufs definiert und
            instanziiert.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Collections.sort(humans, new Comparator&lt;Human&gt;() {\n' +
                  '  public int compare(Human h1, Human h2) {\n' +
                  '    // Implementierung der Comparatorlogik\n' +
                  '  }\n' +
                  '});\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Geschachtelte Klassen</li>
            <li className="fragment">Element Klassen</li>
            <li className="fragment">Lokale Klassen</li>
            <li className="fragment">Anonyme Klassen</li>
            <li className="fragment">Ausblick Lambdafunktion</li>
          </ul>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Lambdafunktionen</h2>
        </section>
        <section>
          <h2>Lambdafunktion</h2>
          <p className="fragment">
            Eine Lambdafunktion ist eine Methode ohne Name, die wie eine
            Referenzvariable verwendet werden kann.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    BinaryOperator&lt;Integer&gt; add = (x, y) -> x + y;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Funktionales Interface</h2>
          <p className="fragment">
            Ein funktionales Interface ist ein Interface mit genau einer
            abstrakten Methode.
          </p>
          <p className="fragment">
            Das funkionale Interface wird für die Typisierung einer
            Lambdafunktion verwendet.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    BinaryOperator&lt;Integer&gt; add = (x, y) -> x + y;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Nicht Funktionales Interface</h2>
          <p className="fragment">
            Nicht jedes Interface mit einer einzigen abstrakten Methode ist
            funktional, z.B.{' '}
            <Link to="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Comparable.html">
              Comparable
            </Link>
          </p>
          <p className="fragment">
            Funktionale Interfaces werden mit @FunctionalInterface markiert,
            z.B.{' '}
            <Link to="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html">
              Comparator
            </Link>
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '@FunctionalInterface\n' +
                  'public interface NameChangesConsumer {\n' +
                  '  public void nameChanges(String changedName);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Syntax Lambdafunktion - Kein Parameter</h2>
          <p className="fragment">
            Hat das funktionale Interface keinen Parameter, werden runde
            Klammern benötigt.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'shoppingList.cleared(() -&gt; {\n' +
                  '  System.out.println("Liste wurde geleert.");\n' +
                  '});\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Syntax Lambdafunktion - Ein Parameter</h2>
          <p className="fragment">
            Hat das funktionale Interface einen Parameter, werden keine runden
            Klammern benötigt.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'shoppingList.itemAdded(item -&gt; {\n' +
                  '  System.out.println(item.getName() + " wurde hinzugefügt.");\n' +
                  '});\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Syntax Lambdafunktion - Mehrere Parameter</h2>
          <p className="fragment">
            Hat das funktionale Interface mehrere Parameter, werden runden
            Klammern benötigt.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'shoppingList.getData((int sum, int count) -&gt; {\n' +
                  '  System.out.println("Warenwert: " + sum);\n' +
                  '  System.out.println("Artikelanzahl: " + count);\n' +
                  '});\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Syntax Lambdafunktion - Mehrere Anweisungen</h2>
          <p className="fragment">
            Besteht die Lambdafunktion aus mehrern Anweisungen sind geschweifte
            Klammern notwendig.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'shoppingList.getData((int sum, int count) -&gt; {\n' +
                  '  System.out.println("Warenwert: " + sum);\n' +
                  '  System.out.println("Artikelanzahl: " + count);\n' +
                  '});\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Syntax Lambdafunktion - Eine Anweisung</h2>
          <p className="fragment">
            Besteht die Lambdafunktion aus einer Anweisung sind keine
            geschweifte Klammern notwendig.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'shoppingList.getData((int sum, int count) -&gt; \n' +
                  '  System.out.println("Wert: " + sum + " Anzahl: " + count);\n' +
                  ');\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Syntax Lambdafunktion - return-Anweisung</h2>
          <p className="fragment">
            Besteht die Lambdafunktion aus einer einzelnen return Anweisung,
            sind keine geschweifte Klammern notwendig und das return Statement
            kann weggelassen werden.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'shoppingList.calculate((int a, int b) -&gt; a + b);\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Intro Shopping List Example</li>
            <li className="fragment">After List Printed (kein Parameter)</li>
            <li className="fragment">After Item Added (ein Parameter)</li>
            <li className="fragment">Items Changed (mehrere Parameter)</li>
          </ul>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <h2>Rest of the Day</h2>
        <ul>
          <li className="fragment">Java I Wiederholung</li>
          <li className="fragment">Aufgaben: Innere Klassen</li>
        </ul>
      </section>
    </Slides>
  );
}
