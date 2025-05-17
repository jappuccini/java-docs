import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';
import { NKR } from '@site/src/components/Slides/nkr';

export default function FunctionalProgramming(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Funktionale Programmierung</li>
            <li className="fragment">Lambdafunktionen</li>
            <li className="fragment">Allgemeine Funktionale Interfaces</li>
            <li className="fragment">Methodenreferenzen</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Funktionale Programmierung</h2>
        </section>
        <section>
          <p>
            Funktionale Programmierung ist ein <b>Programmierparadigma</b>, bei
            dem Funktionen als Werte behandelt werden und auf Seiteneffekte
            verzichtet wird.
          </p>
        </section>
        <section>
          <h2>Funktionen als Werte</h2>
          Funktionen...
          <ul>
            <li className="fragment">sind Methoden</li>
            <li className="fragment">können als Parameter definiert werden</li>
            <li className="fragment">können als Argument definiert werden</li>
            <li className="fragment">können als Variable definiert werden</li>
          </ul>
        </section>
        <section>
          <h2>Seiteneffekt</h2>
          <p className="fragment">
            Ein Seiteneffekt beschreibt eine Zustandsänderung
          </p>
        </section>
        <section>
          <h2>Beispiele Seiteneffekte</h2>
          <pre className="fragment">
            <code
              data-line-numbers
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Human {\n' +
                  '  private int age;\n' +
                  '  \n' +
                  '  public void setAge(age) {\n' +
                  '    this.age = age;\n' +
                  '    /*Seiteneffekt, da Wert außerhalb\n' +
                  '     der Funktion verändert wird */ \n' +
                  '  }\n' +
                  '  public int getAge() {\n' +
                  '    return age;\n' +
                  '    /*Kein Seiteneffekt, da Wert nicht außerhalb\n' +
                  '     der Funktion verändert wird */ \n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/functionalprogramming">
              Demo - Lambda Funktionen
            </Link>
          </h2>
          <ul>
            <li className="fragment">Age Comparator</li>
            <li className="fragment">
              <Link to="/documentation/inner-classes">Anonyme Klasse*</Link>
            </li>
            <li className="fragment">Anonyme Funktion</li>
          </ul>
          <NKR />
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
              data-line-numbers="4"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Comparator&lt;Human&gt; sortAge;\n' +
                  '    sortAge = (h1, h2) -> h1.age() > h2.age() ? 1 : -1;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <span className="fragment foot-note">
            Lambdafunktionen werden auch anonyme Funktion, anonymous function
            oder arrow function genannt.
          </span>
        </section>
        <section>
          <h2>Typisierung</h2>
          <p className="fragment">
            Ein funkionales Interface wird für die Typisierung einer
            Lambdafunktion verwendet.
          </p>
          <pre className="fragment">
            <code
              data-line-numbers="3"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Comparator&lt;Human&gt; sortAge;\n' +
                  '    sortAge = (h1, h2) -> h1.age() > h2.age() ? 1 : -1;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment foot-note">
            Ein funktionales Interface ist ein Interface mit genau einer
            abstrakten Methode und einer speziellen Annotation.
          </p>
        </section>
        <section>
          <h2>Funktionales Interface</h2>
          <p className="fragment">
            Funktionale Interfaces werden mit @FunctionalInterface markiert,
            z.B.{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html">
              Comparator
            </Link>
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '@FunctionalInterface\n' +
                  'public interface Comparator&lt;T&gt; {\n' +
                  '  public int compare(T o1, T o2);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment foot-note">
            Nicht jedes Interface mit einer einzigen abstrakten Methode ist
            funktional, z.B.{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Comparable.html">
              Comparable
            </Link>
          </p>
        </section>
        <section>
          <h2>Syntax Lambdafunktion</h2>
          <ul>
            <li className="fragment">Kein Parameter</li>
            <li className="fragment">Ein Parameter</li>
            <li className="fragment">Mehrere Parameter</li>
            <li className="fragment">Eine Anweisung</li>
            <li className="fragment">Mehrere Anweisungen</li>
            <li className="fragment">Return Anweisung</li>
          </ul>
        </section>
        <section>
          <h2>Kein Parameter</h2>
          <p className="fragment">
            Hat das funktionale Interface keinen Parameter, werden runde
            Klammern benötigt.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface NoParamFunction {\n' +
                  ' public void do();\n' +
                  '};\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
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
            Hat das funktionale Interface einen Parameter, werden keine runden
            Klammern benötigt.
          </p>
          <pre className="fragment">
            <code
              className="java"
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
              className="java"
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
            Hat das funktionale Interface mehrere Parameter, werden runden
            Klammern benötigt.
          </p>
          <pre className="fragment">
            <code
              className="java"
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
              className="java"
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
            Besteht die Lambdafunktion aus einer Anweisung sind keine
            geschweifte Klammern notwendig.
          </p>
          <pre className="fragment">
            <code
              className="java"
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
            Besteht die Lambdafunktion aus mehrern Anweisungen sind geschweifte
            Klammern notwendig.
          </p>
          <pre className="fragment">
            <code
              className="java"
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
          <h2>return-Anweisung</h2>
          <p className="fragment">
            Besteht die Lambdafunktion aus einer einzelnen return Anweisung,
            sind keine geschweifte Klammern notwendig und das return Statement
            kann weggelassen werden.
          </p>
          <pre className="fragment">
            <code
              className="java"
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'OneParamReturnFunction function = h -&gt; h.age() > 10;\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/functionalinterfaces/owninterfaces">
              Demo - Eigene Funktionale Interfaces
            </Link>
          </h2>
          <ul>
            <li className="fragment">Intro Shopping List Example</li>
            <li className="fragment">Problem 1</li>
            <li className="fragment">Problem 2</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Allgemeine Funktionale Interfaces</h2>
        </section>
        <section>
          <h2>Grundkategorien von Funktionalen Interfaces</h2>
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
              className="java"
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BiConsumer&lt;T, U&gt; {\n' +
                  '  public void accept(T t, U u);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">Code ausführen ohne Daten weiterzugeben.</p>
        </section>
        <section>
          <h2>Function</h2>
          <pre className="fragment">
            <code
              className="java"
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BiFunction&lt;T, U, R&gt; {\n' +
                  '  public R apply(T t, U u);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
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
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BinaryOperator&lt;T&gt; {\n' +
                  '  public T apply(T t1, T t2);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">Code ausführen, der Daten zurückgibt.</p>
        </section>
        <section>
          <h2>Predicate</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Predicate&lt;T&gt; {\n' +
                  '  public boolean test(T t);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Code ausführen, der true oder false zurückgibt.
          </p>
        </section>
        <section>
          <h2>Supplier*</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Supplier&lt;T&gt; {\n' +
                  '  public T get();\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Code ausführen, der Daten vom Typ T zurückgibt.
          </p>
          <div className="fragment">
            <NKR />
          </div>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/functionalinterfaces/knowninterfaces">
              Demo - Allgemeine Funktionale Interfaces
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              Consumer anstatt ProductsChangedConsumer
            </li>
            <li className="fragment">Predicate anstatt AddAllowedChecker</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Methodenreferenzen</h2>
        </section>
        <section>
          <h2>Warum Methodenreferenzen?</h2>
          <p className="fragment">
            Mit Methodenreferenzen kann man noch weniger Code schreiben.
          </p>
          <p className="fragment">
            Hat ein Parameter die gleiche Signatur, wie eine statische Methode,
            kann diese Methode als Methodenreferenz übergeben werden.
          </p>
        </section>
        <section>
          <h2>
            Beispiel ArrayList -{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html#forEach(java.util.function.Consumer)">
              For Each
            </Link>
          </h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n' +
                  '    \n' +
                  '    // lambda funktion\n' +
                  '    names.forEach((name) -&gt; System.out.println(name));\n' +
                  '    \n' +
                  '    // methodenreferenz\n' +
                  '    names.forEach(System.out::println);\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Verwenden von Methodenreferenzen?</h2>
          <p className="fragment">
            Anstatt die Methode über einen Punkt aufzurufen, wird ein zweifacher
            Doppelpunkt verwendet.
          </p>
          <p className="fragment">
            Mit dem "new" nach dem zweifachen Doppelpunkt kann auch der
            Konstruktor einer Klasse referenziert werden.
          </p>
          <NKR />
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/functionalinterfaces/methodreferences">
              Demo - Methodenreferenzen
            </Link>
          </h2>
          <ul>
            <li className="fragment">Methodensignatur System.out.println</li>
            <li className="fragment">OneTimePrinter</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Rest of the Day</h2>
        <ul>
          <li className="fragment">
            <Link to="/exercises/lambdas/">Lambdas</Link>
          </li>
        </ul>
        <p className="fragment font-medium">
          Bei Lambdas 01 kann die Teilaufgabe mit anonymer Klasse ignoriert
          werden.
        </p>
      </section>
    </Slides>
  );
}
