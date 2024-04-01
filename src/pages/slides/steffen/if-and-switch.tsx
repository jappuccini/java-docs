import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';
import { NKR } from '../../../components/Slides/nkr';

export default function MethodsAndOperators(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Kontrollstrukturen</li>
            <li className="fragment">Arrays</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Methoden</h2>
          <ul>
            <li className="fragment">Rückgabetyp (primitiv, komplex, void)</li>
            <li className="fragment">Bezeichner</li>
            <li className="fragment">Parameter</li>
            <li className="fragment">Methodenrumpf</li>
          </ul>
        </section>
        <section>
          <h2>Operatoren</h2>
          <ul>
            <li className="fragment">
              Arithmetische Operatoren (+, -, *, /, %, ++, --)
            </li>
            <li className="fragment">Vergleichsoperatoren (==, !=, etc.)</li>
            <li className="fragment">Logische Operatoren (&&, ||, !)</li>
            <li className="fragment">Bitweise Operatoren (&, |, ^, ~)</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Kontrollstrukturen</h2>
        </section>
        <section>
          <h2>Beispiele für Fallunterscheidung</h2>
          <ul>
            <li className="fragment">
              wenn unter 16 Jahre alt, dann kein Alkohol
            </li>
            <li className="fragment">
              wenn weiblich, dann ist die Anrede "Frau"
            </li>
            <li className="fragment">
              wenn PIN falsch, dann keine Bargeldausgabe
            </li>
          </ul>
        </section>
        <section>
          <h2>Aufbau einer If-Anweisung</h2>
          <ul>
            <li className="fragment">if Schlüsselwort</li>
            <li className="fragment">Bedingung</li>
            <li className="fragment">Code Block</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel If-Anweisung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'if ( Bedingung ) {\n' + '  // Quellcode\n' + '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo If-Anweisung</h2>
          <ul>
            <li>wenn unter 16 Jahre alt, dann kein Alkohol</li>
            <li>wenn weiblich, dann ist die Anrede "Frau"</li>
          </ul>
        </section>
        <section>
          <h2>Wie behandelt man den anderen Fall?</h2>
          <ul>
            <li className="fragment">else Schlüsselwort</li>
            <li className="fragment">Code Block</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel Else-Anweisung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'else {\n' + '  // Quellcode\n' + '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo If-Else-Anweisung</h2>
          <ul>
            <li>
              wenn unter 16 Jahre alt, dann kein Alkohol, ansonsten Alkohol
            </li>
            <li>wenn weiblich, dann ist die Anrede "Frau", ansonsten "Mann"</li>
          </ul>
        </section>
        <section>
          <h2>Wie behandelt man weitere Fälle?</h2>
          <ul>
            <li className="fragment">else if Schlüsselwort</li>
            <li className="fragment">Bedingung</li>
            <li className="fragment">Code Block</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel Else-If-Anweisung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'else if ( Bedingung ) {\n' + '  // Quellcode\n' + '}',
              }}
            ></code>
          </pre>
          <p>
            else bezieht sich immer nur auf die aktuelle
            if-else-if-Verschachtelung
          </p>
        </section>
        <section>
          <h2>Demo If-Else-Anweisung</h2>
          <ul>
            <li>
              wenn unter 16 Jahre alt, dann kein Alkohol, wenn unter 18 Jahre
              alt, dann Bier, ansonsten jeden Alkohol
            </li>
            <li>
              wenn weiblich, dann ist die Anrede "Frau", wenn männlich, dann ist
              die Anrede "Herr", ansonsten Vor- und Nachname
            </li>
          </ul>
        </section>
        <section>
          <h2>Verschachtelungen</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'if ( Bedingung ) {\n' +
                  '  if ( Bedingung ) {\n' +
                  '    if ( Bedingung ) {\n' +
                  '      ...\n' +
                  '    } else if ( Bedingung ) {\n' +
                  '      ...\n' +
                  '    } else \n' +
                  '      ...\n' +
                  '    }\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Mit Verschachtelungen können jegliche Fälle abgedeckt werden.
          </p>
        </section>
        <section>
          <h2>switch</h2>
          <ul>
            <li className="fragment">switch Schlüsselwort</li>
            <li className="fragment">Datenobjekt, das geprüft werden soll</li>
            <li className="fragment">Code Block</li>
            <li className="fragment">case Schlüsselwort mit Wert</li>
            <li className="fragment">Code Block</li>
            <li className="fragment">break Schlüsselwort</li>
          </ul>
          <p className="fragment">
            switch kann als Alternative zur If-Anweisung verwendet werden.
          </p>
        </section>
        <section>
          <h2>Beispiel Switch-Anweisung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'switch ( Datenobjekt ) {\n' +
                  '  case 1:\n' +
                  '    // Code Block\n' +
                  '    break;\n' +
                  '  case 2:\n' +
                  '    // Code Block\n' +
                  '    break;\n' +
                  '  default:\n' +
                  '    // Code Block\n' +
                  '    break;\n' +
                  '}',
              }}
            ></code>
          </pre>
          <div className="fragment">
            switch geht nur mit <strong>int</strong>, <strong>char</strong>,{' '}
            <strong>String</strong> & <strong>Enum</strong>
          </div>
        </section>
        <section>
          <h2>Demo Switch-Anweisung</h2>
          <ul>
            <li>
              wenn unter 16 Jahre alt, dann kein Alkohol, wenn unter 18 Jahre
              alt, dann Bier, ansonsten jeden Alkohol
            </li>
            <li>
              wenn "w", "W", "f", "F", dann ist die Anrede "Frau", wenn "m",
              "M", dann ist die Anrede "Herr", ansonsten Vor- und Nachname
            </li>
          </ul>
        </section>
        <section>
          <h2>switch vs if</h2>
          <ul>
            <li className="fragment">switch performanter als if-else-if</li>
            <li className="fragment">
              switch kann erst ab Java 7 Stringvergleiche
            </li>
            <li className="fragment">
              keine Methodenaufrufe in case statement
            </li>
            <li className="fragment">
              Mehrfachbehandlung deutlich lesbarer mit switch
            </li>
          </ul>
        </section>
        <section>
          <h2>Ternary Operator</h2>
          <NKR />
          <ul>
            <li className="fragment">Kurzform von if-else</li>
            <li className="fragment">macht in return statement Sinn</li>
            <li className="fragment">Demo Ternary Operator</li>
          </ul>
        </section>
        <section>
          <h2>Warum braucht man Schleifen?</h2>
          <ul>
            <li className="fragment">zum Bearbeiten von Listen</li>
            <li className="fragment">zum wiederholten Ausführen von Code</li>
          </ul>
        </section>
        <section>
          <h2>Beispiele für Schleifen</h2>
          <ul>
            <li className="fragment">
              Liste von Klausuren, um Durchschnittsnote zu ermitteln
            </li>
            <li className="fragment">
              Liste von Artikeln im Warenkorb, um Summe zu ermitteln
            </li>
            <li className="fragment">
              Solange kein Film mit einer Bewertung von 4+, gehe zu nächstem
              Film
            </li>
          </ul>
        </section>
        <section>
          <h2>Arten von Schleifen</h2>
          <ul>
            <li className="fragment">while-Schleife</li>
            <li className="fragment">do-while-Schleife</li>
            <li className="fragment">for-Schleife</li>
            <li className="fragment">for-each-Schleife</li>
          </ul>
        </section>
        <section>
          <h2>while-Schleife</h2>
          <ul>
            <li className="fragment">while Schlüsselwort</li>
            <li className="fragment">Bedingung</li>
            <li className="fragment">Code Block</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel while-Schleife</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'while ( Bedingung ) {\n' + '  // Quellcode\n' + '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo while-Schleife</h2>
          <ul>
            <li>Zahlen von 0 bis 4 ausgeben.</li>
          </ul>
        </section>
        <section>
          <h2>do-while-Schleife</h2>
          <ul>
            <li className="fragment">do Schlüsselwort</li>
            <li className="fragment">Code Block</li>
            <li className="fragment">while Schlüsselwort</li>
            <li className="fragment">Bedingung</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel do-while-Schleife</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'do {\n' +
                  '  // Quellcode\n' +
                  '}\n' +
                  'while ( Bedingung ) \n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Code Block wird mindestends einmal ausgeführt
          </p>
        </section>
        <section>
          <h2>Demo do-while-Schleife</h2>
          <ul>
            <li>Zahlen von 0 bis 4 ausgeben.</li>
          </ul>
        </section>
        <section>
          <h2>for-Schleife</h2>
          <ul>
            <li className="fragment">for Schlüsselwort</li>
            <li className="fragment">Einmal Statement (vor der Schleife)</li>
            <li className="fragment">Bedingung</li>
            <li className="fragment">Statement (nach jedem Code Block)</li>
            <li className="fragment">Code Block</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel for-Schleife</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'for (int i = 0; i &lt; 5; i++) {\n' +
                  '  // Quellcode\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo for-Schleife</h2>
          <ul>
            <li>Zahlen von 0 bis 4 ausgeben.</li>
          </ul>
        </section>
        <section>
          <h2>for-each-Schleife</h2>
          <ul>
            <li className="fragment">for Schlüsselwort</li>
            <li className="fragment">
              Typ eines einzelnen Elements von einer Liste
            </li>
            <li className="fragment">Bezeichner des Datenobjekts</li>
            <li className="fragment">Datenobjekt mit einer Liste</li>
          </ul>
          <p className="fragment">Kann erst mit Arrays verstanden werden.</p>
        </section>
        <section>
          <h2>Beispiel for-each-Schleife</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = { 0, 1, 2, 3, 4};\n' +
                  'for (int number : numbers) {\n' +
                  '  // Quellcode\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo for-each-Schleife</h2>
          <ul>
            <li>Zahlen von 0 bis 4 ausgeben.</li>
          </ul>
        </section>
        <section>
          <h2>break Schlüsselwort</h2>
          <p>
            beendet die <strong>komplette</strong> Schleife
          </p>
        </section>
        <section>
          <h2>Demo break</h2>
          <ul>
            <li>Beende Schleife, wenn durch 2 teilbar.</li>
          </ul>
        </section>
        <section>
          <h2>continue Schlüsselwort</h2>
          <p>
            beendet den <strong>aktuellen</strong> Code Block
          </p>
        </section>
        <section>
          <h2>Demo continue</h2>
          <ul>
            <li>Überspringe alle ungeraden Zahlen</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Arrays</h2>
        </section>
        <section>
          <h2>Eigenschaften eines Arrays</h2>
          <ul>
            <li className="fragment">
              speichert mehrere Datenobjekte eines gleichen Typs
            </li>
            <li className="fragment">
              speichert eine definierte Anzahl an Datenobjekten
            </li>
          </ul>
        </section>
        <section>
          <h2>Beispiele</h2>
          <ul>
            <li className="fragment">
              die Namen von mir, meiner Freundin und meines besten Freundes
            </li>
            <li className="fragment">
              die Noten von mir, meiner Freundin und meines besten Freundes
            </li>
          </ul>
        </section>
        <section>
          <h2>Wie deklariert man ein Array?</h2>
          <ul>
            <li className="fragment">Datentyp der zu speichernden Elemente</li>
            <li className="fragment">eckige Klammern []</li>
            <li className="fragment">Bezeichner</li>
            <li className="fragment">Zuweisungsoperator =</li>
            <li className="fragment">
              Elemente kommagetrennt in geschweiften Klammern
            </li>
          </ul>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'int[] numbers = { 0, 1, 2, 3, 4 }',
              }}
            ></code>
          </pre>
          <div className="fragment">das Array hat eine feste Länge von 5</div>
        </section>
        <section>
          <h2>Wie kann man Daten aus einem Array lesen?</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = { 0, 1, 2, 3, 4 } \n' +
                  'int dasVierteElement = numbers[3];',
              }}
            ></code>
          </pre>
          <div className="fragment">
            der Index bei Arrays beginnt immer bei 0
          </div>
        </section>
        <section>
          <h2>Wie kann man Daten in einem Array speichern?</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = { 0, 1, 2, 3, 4 } \n' + 'numbers[3] = 9;',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Wie kann ich ein Array ohne Werte initialisieren?</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = new int[4]; \n' +
                  'Integer[] numbers = new Integer[4]; \n' +
                  'numbers[3] = 9;',
              }}
            ></code>
          </pre>
          <p className="fragment">Schlüsselwort new ignorieren</p>
        </section>
        <section>
          <table className="fragment">
            <thead>
              <tr>
                <th>Primitiver Datentyp</th>
                <th>Komplexer Datentyp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>boolean</td>
                <td>Boolean</td>
              </tr>
              <tr className="fragment">
                <td>char</td>
                <td>Character</td>
              </tr>
              <tr className="fragment">
                <td>byte</td>
                <td>Byte</td>
              </tr>
              <tr className="fragment">
                <td>short</td>
                <td>Short</td>
              </tr>
              <tr className="fragment">
                <td>int</td>
                <td>Integer</td>
              </tr>
              <tr className="fragment">
                <td>long</td>
                <td>Long</td>
              </tr>
              <tr className="fragment">
                <td>float</td>
                <td>Float</td>
              </tr>
              <tr className="fragment">
                <td>double</td>
                <td>Double</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Wie macht man Arrays größer?</h2>
          <ul>
            <li className="fragment">Größe des neuen Arrays ermittlen</li>
            <li className="fragment">neues Array mit neuer Größe erstellen</li>
            <li className="fragment">
              mit einer Schleife die Elemente aus dem alten Array kopieren
            </li>
          </ul>
        </section>
        <section>
          <h2>Wie fügt man ein Element an einer bestimmten Stelle ein?</h2>
          <ul>
            <li className="fragment">Größe des neuen Arrays ermittlen</li>
            <li className="fragment">neues Array mit neuer Größe erstellen</li>
            <li className="fragment">
              mit einer Schleife die Elemente vor der neuen Stelle aus dem alten
              Array kopieren
            </li>
            <li className="fragment">neues Element hinzufügen</li>
            <li className="fragment">
              mit einer Schleife die Elemente nach der neuen Stelle aus dem
              alten Array kopieren
            </li>
          </ul>
        </section>
        <section>
          <h2>ArrayList</h2>
          <ul>
            <li className="fragment">neue Elemente hinzufügen</li>
            <li className="fragment">
              neue Elemente an bestimmter Stelle hinzufügen
            </li>
            <li className="fragment">komplette Liste leeren</li>
            <li className="fragment">
              prüfen ob Liste ein bestimmtes Element enthält
            </li>
            <li className="fragment">...</li>
          </ul>
        </section>
        <section>
          <h2>ArrayList</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();',
              }}
            ></code>
          </pre>
          <p className="fragment">
            &lt;Integer&gt; sind Generics --&gt; Java 2
          </p>
          <p className="fragment">
            new kann erst mit Objekten verstanden werden
          </p>
        </section>
        <section>
          <h2>Demo Array und ArrayList</h2>
          <p>for-Schleife mit Array und ArrayList</p>
        </section>
        <section>
          <h2>Was sind jetzt die args in der main Methode?</h2>
          <p className="fragment">Demo</p>
        </section>
      </section>
      <section>
        <section>
          <h2>Variable Argumentlisten*</h2>
          <p className="fragment foot-note">
            werden auch als VarArgs bezeichnet
          </p>
          <NKR />
        </section>
        <section>
          <h2>Variable Argumentlisten</h2>
          <p>
            Damit eine Methode eine variable Anzahl von Argumenten eines
            gleichen Datentyps verarbeiten kann, muss ein Parameter als variable
            Argumentliste definiert werden.
          </p>
        </section>
        <section>
          <h2>Beispiel Verwendung</h2>
          <pre>
            <code
              className="java"
              data-line-numbers="1-5|2|3|4"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(Stirng[] args) {\n' +
                  '  int twoParameters   = Example.sum(1, 2);\n' +
                  '  int threeParameters = Example.sum(1, 2, 3);\n' +
                  '  int fourParameters  = Example.sum(1, 2, 3, 4);\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Beispiel Implementierung</h2>
          <pre>
            <code
              className="java"
              data-line-numbers="|1-2|3-7"
              dangerouslySetInnerHTML={{
                __html:
                  'public static int sum(int... numbers) {\n' +
                  '  // numbers ist ein Array\n' +
                  '  int sum = 0;\n' +
                  '  for(int number : numbers) {\n' +
                  '    sum = sum + number;\n' +
                  '  }\n' +
                  '  return sum;\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>VarArgs</h2>
          <ul>
            <li className="fragment">stehen am Ende der Parameterliste</li>
            <li className="fragment">nur ein VarArgs Parameter je Methode</li>
            <li className="fragment">VarArgs Parameter ist ein Array</li>
            <li className="fragment">
              Argumente werden kommagetrennt definiert
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
