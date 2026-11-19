import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '@site/src/components/Slides/nkr';

export default function FunctionalProgramming(): React.JSX.Element {
  return (
    <Slides title="Funktionale Programmierung">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Funktionale Programmierung</h1>
          <p>
            Funktionen als Werte nutzen, Lambdafunktionen schreiben und
            Methodenreferenzen einsetzen.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Funktionale Programmierung</li>
            <li className="fragment">Lambdafunktionen</li>
            <li className="fragment">Lambda-Syntax</li>
            <li className="fragment">Funktionale Interfaces der Java-API</li>
            <li className="fragment">Methodenreferenzen</li>
          </ul>
        </section>
      </section>

      <section data-topic="Funktionale Programmierung">
        <section className="divider">
          <p className="kicker">Grundlagen</p>
          <h2>Funktionale Programmierung</h2>
          <p>
            Was funktionale Programmierung ist, was Seiteneffekte sind und warum
            Funktionen als Werte wichtig sind.
          </p>
        </section>

        <section>
          <h2>Definition</h2>
          <div className="callout">
            <p>
              Funktionale Programmierung ist ein <b>Programmierparadigma</b>,
              bei dem Funktionen als Werte behandelt werden und möglichst ohne
              Seiteneffekte gearbeitet wird.
            </p>
          </div>
        </section>

        <section>
          <h2>Funktionen als Werte</h2>
          <ul>
            <li className="fragment">können in Variablen gespeichert werden</li>
            <li className="fragment">können als Argumente übergeben werden</li>
            <li className="fragment">
              können als Rückgabewerte zurückgegeben werden
            </li>
            <li className="fragment">
              In Java übernehmen Lambdafunktionen diese Rolle
            </li>
          </ul>
        </section>

        <section>
          <h2>Seiteneffekt</h2>
          <p className="fragment">
            Ein Seiteneffekt ist eine beobachtbare Wirkung nach außen, z.B. eine
            Zustandsänderung, eine Ausgabe oder eine Exception.
          </p>
        </section>

        <section>
          <h2>Beispiele Seiteneffekte</h2>
          <pre className="fragment">
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Human {\n' +
                  '  private int age;\n' +
                  '  \n' +
                  '  public void setAge(int age) {\n' +
                  '    // Seiteneffekt: verändert den Zustand des Objekts.\n' +
                  '    this.age = age;\n' +
                  '  }\n' +
                  '  public int getAge() {\n' +
                  '    // Kein Seiteneffekt: liest nur den Zustand.\n' +
                  '    return age;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/functionalprogramming">
              Demo: Vom Comparator zur Lambdafunktion
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>AgeComparator</code>-Klasse
            </li>
            <li className="fragment">
              <Link to="/documentation/inner-classes">Anonyme Klasse*</Link>
            </li>
            <li className="fragment">
              Lambdafunktion (lange und kurze Syntax)
            </li>
            <li className="fragment">Lambdafunktion als Referenzvariable</li>
          </ul>
          <NKR />
        </section>
      </section>

      <section data-topic="Lambdafunktionen">
        <section className="divider">
          <p className="kicker">Lambdas</p>
          <h2>Lambdafunktionen</h2>
          <p>
            Anonyme Funktionen, ihre Typisierung über funktionale Interfaces und
            eigene Interfaces in der Praxis.
          </p>
        </section>

        <section>
          <h2>Lambdafunktion</h2>
          <p className="fragment">
            Eine Lambdafunktion ist eine anonyme Funktion, die als Wert
            verwendet werden kann.
          </p>
          <pre className="fragment">
            <code
              data-line-numbers="2-5"
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Comparator&lt;Human&gt; sortAge;\n' +
                  'sortAge = (h1, h2) -&gt;\n' +
                  '  h1.getAge() &lt; h2.getAge() ? -1\n' +
                  '    : h1.getAge() &gt; h2.getAge() ? 1\n' +
                  '    : 0;\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium">
            Auch anonyme Funktion, anonymous function oder arrow function
            genannt. Ähnliche Konzepte: arrow functions in JavaScript, Closures
            in Rust.
          </p>
        </section>

        <section>
          <h2>Typisierung</h2>
          <p className="fragment">
            Der Zieltyp einer Lambdafunktion ist ein funktionales Interface. Aus{' '}
            <code>Comparator&lt;Human&gt;</code> leitet der Compiler ab, dass{' '}
            <code>h1</code> und <code>h2</code> vom Typ <code>Human</code> sind
            und <code>int</code> zurückgegeben wird.
          </p>
          <pre className="fragment">
            <code
              data-line-numbers="1"
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Comparator&lt;Human&gt; sortAge;\n' +
                  'sortAge = (h1, h2) -&gt;\n' +
                  '  h1.getAge() &lt; h2.getAge() ? -1\n' +
                  '    : h1.getAge() &gt; h2.getAge() ? 1\n' +
                  '    : 0;\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium">
            Ein funktionales Interface hat genau eine abstrakte Methode.
          </p>
        </section>

        <section>
          <h2>Funktionales Interface</h2>
          <p className="fragment">
            Funktionale Interfaces können mit <code>@FunctionalInterface</code>{' '}
            markiert werden, z.B.{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html">
              Comparator
            </Link>
            .
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  '@FunctionalInterface\n' +
                  'public interface Comparator&lt;T&gt; {\n' +
                  '  public int compare(T o1, T o2);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium">
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Comparable.html">
              Comparable
            </Link>{' '}
            ist ebenfalls ein funktionales Interface, aber nicht annotiert. Für
            Lambdas ist <code>Comparator</code> praktischer, weil{' '}
            <code>compare</code> beide Objekte entgegennimmt.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/functionalinterfaces/owninterfaces">
              Demo: Eigene funktionale Interfaces
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>ShoppingList</code> mit eigenen funktionalen Interfaces
            </li>
            <li className="fragment">
              Problem 1: Auf Warenkorb-Änderungen reagieren
            </li>
            <li className="fragment">
              Problem 2: Produkt beim Hinzufügen prüfen
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Lambda-Syntax">
        <section className="divider">
          <p className="kicker">Lambdas</p>
          <h2>Lambda-Syntax</h2>
          <p>
            Sechs Formen im Überblick — von keinen Parametern bis zur{' '}
            <code>return</code>-Anweisung.
          </p>
        </section>

        <section>
          <h2>Sechs Formen</h2>
          <ul>
            <li className="fragment">Kein Parameter</li>
            <li className="fragment">Ein Parameter</li>
            <li className="fragment">Mehrere Parameter</li>
            <li className="fragment">Eine Anweisung</li>
            <li className="fragment">Mehrere Anweisungen</li>
            <li className="fragment">
              <code>return</code>-Anweisung
            </li>
          </ul>
        </section>

        <section>
          <h2>Kein Parameter</h2>
          <p className="fragment">
            Hat das funktionale Interface keinen Parameter, sind die runden
            Klammern verpflichtend.
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface NoParamFunction {\n' +
                  ' public void do();\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'NoParamFunction function = () -&gt; {\n' +
                  '  System.out.println("Kein Parameter");\n' +
                  '};\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Ein Parameter</h2>
          <p className="fragment">
            Hat das funktionale Interface genau einen Parameter, können die
            runden Klammern weggelassen werden.
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface OneParamFunction {\n' +
                  ' public void do(String one);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'OneParamFunction function = one -&gt; {\n' +
                  '  System.out.println("Ein Parameter: " + one);\n' +
                  '};\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Mehrere Parameter</h2>
          <p className="fragment">
            Hat das funktionale Interface mehrere Parameter, sind die runden
            Klammern verpflichtend.
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface MultiParamFunction {\n' +
                  ' public void do(String one, String two);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'MultiParamFunction function = (one, two) -&gt; {\n' +
                  '  System.out.println("Zwei Parameter: " + one + two);\n' +
                  '};\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Eine Anweisung</h2>
          <p className="fragment">
            Besteht die Lambdafunktion aus einer Anweisung, sind keine
            geschweiften Klammern notwendig.
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'MultiParamFunction function = (one, two) -&gt; \n' +
                  '  System.out.println("Zwei Parameter: " + one + two);\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Mehrere Anweisungen</h2>
          <p className="fragment">
            Besteht die Lambdafunktion aus mehreren Anweisungen, sind
            geschweifte Klammern notwendig.
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'MultiParamFunction function = (one, two) -&gt; {\n' +
                  '  System.out.println("Parameter Eins: " + one);\n' +
                  '  System.out.println("Parameter Zwei: " + two);\n' +
                  '};\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>
            <code>return</code>-Anweisung
          </h2>
          <p className="fragment">
            Besteht die Lambdafunktion aus einer einzelnen <code>return</code>
            -Anweisung, sind keine geschweiften Klammern notwendig, und das{' '}
            <code>return</code>-Statement kann weggelassen werden.
          </p>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface OneParamReturnFunction {\n' +
                  ' public boolean validate(Human human);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'OneParamReturnFunction function = h -&gt; h.getAge() &gt; 10;\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Funktionale Interfaces der Java-API">
        <section className="divider">
          <p className="kicker">Java-API</p>
          <h2>Funktionale Interfaces der Java-API</h2>
          <p>
            Consumer, Function, Predicate und Supplier — die vorgefertigten
            Interfaces aus <code>java.util.function</code>.
          </p>
        </section>

        <section>
          <h2>Grundkategorien funktionaler Interfaces</h2>
          <ul>
            <li className="fragment">Consumer</li>
            <li className="fragment">Function</li>
            <li className="fragment">Predicate</li>
            <li className="fragment">Supplier</li>
          </ul>
        </section>

        <section>
          <h2>Consumer</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Consumer&lt;T&gt; {\n' +
                  '  public void accept(T t);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BiConsumer&lt;T, U&gt; {\n' +
                  '  public void accept(T t, U u);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Daten entgegennehmen, ohne ein Ergebnis zurückzugeben.
          </p>
        </section>

        <section>
          <h2>Function und BiFunction</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Function&lt;T, R&gt; {\n' +
                  '  public R apply(T t);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BiFunction&lt;T, U, R&gt; {\n' +
                  '  public R apply(T t, U u);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Daten transformieren und ein Ergebnis zurückgeben.
          </p>
        </section>

        <section>
          <h2>UnaryOperator und BinaryOperator</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface UnaryOperator&lt;T&gt; {\n' +
                  '  public T apply(T t);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BinaryOperator&lt;T&gt; {\n' +
                  '  public T apply(T t1, T t2);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Spezialisierungen von <code>Function</code>, bei denen Eingabe- und
            Rückgabetyp gleich sind.
          </p>
        </section>

        <section>
          <h2>Predicate</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Predicate&lt;T&gt; {\n' +
                  '  public boolean test(T t);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BiPredicate&lt;T, U&gt; {\n' +
                  '  public boolean test(T t, U u);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Daten prüfen und <code>true</code> oder <code>false</code>{' '}
            zurückgeben.
          </p>
        </section>

        <section>
          <h2>Supplier*</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Supplier&lt;T&gt; {\n' +
                  '  public T get();\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Ohne Eingabe Daten vom Typ <code>T</code> liefern.
          </p>
          <div className="fragment">
            <NKR />
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/functionalinterfaces/knowninterfaces">
              Demo: Consumer und BiPredicate
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>Consumer</code> statt <code>ProductsChangedConsumer</code>
            </li>
            <li className="fragment">
              <code>BiPredicate</code> statt <code>AddAllowedChecker</code>
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Methodenreferenzen">
        <section className="divider">
          <p className="kicker">Lambdas</p>
          <h2>Methodenreferenzen</h2>
          <p>
            Lambdafunktionen, die nur eine bestehende Methode aufrufen, kürzer
            schreiben.
          </p>
        </section>

        <section>
          <h2>Warum Methodenreferenzen?</h2>
          <ul>
            <li className="fragment">
              Eine Methodenreferenz ist die Kurzform für eine Lambdafunktion,
              die nur eine bestehende Methode aufruft.
            </li>
            <li className="fragment">
              <code>System.out::println</code> statt{' '}
              <code>name -&gt; System.out.println(name)</code>.
            </li>
            <li className="fragment">
              Passt die Signatur der Methode zur erwarteten funktionalen
              Schnittstelle, kann sie direkt referenziert werden.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            Beispiel:{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html#forEach(java.util.function.Consumer)">
              ArrayList.forEach
            </Link>
          </h2>
          <pre>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;(List.of("Hans", "Peter", "Lisa"));\n' +
                  '    \n' +
                  '    // Lambda-Funktion\n' +
                  '    names.forEach((name) -&gt; System.out.println(name));\n' +
                  '    \n' +
                  '    // Methodenreferenz\n' +
                  '    names.forEach(System.out::println);\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Methodenreferenzen verwenden</h2>
          <ul>
            <li className="fragment">
              Statt die Methode aufzurufen (
              <code>System.out.println(name)</code>), verweist{' '}
              <code>System.out::println</code> auf sie.
            </li>
            <li className="fragment">
              Mit <code>new</code> nach dem doppelten Doppelpunkt wird ein
              Konstruktor referenziert, z.B. <code>OneTimePrinter::new</code>.*
            </li>
          </ul>
          <NKR />
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/functionalinterfaces/methodreferences">
              Demo: Methodenreferenzen
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>System.out::println</code>
            </li>
            <li className="fragment">
              <code>OneTimePrinter::new</code>
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/lambdas/">Lambdas Aufgaben</Link>
            </li>
          </ul>
          <p className="fragment font-medium">
            Bei Lambdas 01 kann die Teilaufgabe mit anonymer Klasse ignoriert
            werden.
          </p>
        </section>
      </section>
    </Slides>
  );
}
