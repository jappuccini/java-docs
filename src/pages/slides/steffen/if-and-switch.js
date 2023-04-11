import React from 'react';
import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function MethodsAndOperators() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
       <section>Fragen oder Probleme?</section>
       <section>
         Escapezeichen nicht konfigurierbar
       </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Methoden</h2>
          <ul>
            <li className='fragment'>Rückgabetyp (primitiv, komplex, void)</li>
            <li className='fragment'>Bezeichner</li>
            <li className='fragment'>Parameter</li>
            <li className='fragment'>Methodenrumpf</li>
          </ul>
        </section>
        <section>
          <h2>Operatoren</h2>
          <ul>
            <li className='fragment'>Arithmetische Operatoren (+, -, *, /, %, ++, --)</li>
            <li className='fragment'>Vergleichsoperatoren (==, !=, etc.)</li>
            <li className='fragment'>Logische Operatoren (&&, ||, !)</li>
            <li className='fragment'>Bitweise Operatoren (&, |, ^, ~)</li>
          </ul>
        </section>
        <section>
          .equals Methode für Stringvergleiche benutzen
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Kontrollstrukturen?</h2>
        </section>
        <section>
          <h2>Beispiele für Fallunterscheidung</h2>
          <ul>
            <li className='fragment'>wenn unter 16 Jahre alt, dann kein Alkohol</li>
            <li className='fragment'>wenn weiblich, dann ist die Anrede "Frau"</li>
            <li className='fragment'>wenn PIN falsch, dann keine Bargeldausgabe</li>
          </ul>
        </section>
        <section>
          <h2>Aufbau einer If-Anweisung</h2>
          <ul>
            <li className='fragment'>if Schlüsselwort</li>
            <li className='fragment'>Bedingung</li>
            <li className='fragment'>Code Block</li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'if ( Bedingung ) {\n' +
              '  // Quellcode\n' +
              '}'
              }}>
            </code>
          </pre>
        </section>
        <section>
          <h2>Demo zu den ersten zwei Beispielen</h2>
          <ul>
            <li>wenn unter 16 Jahre alt, dann kein Alkohol</li>
            <li>wenn weiblich, dann ist die Anrede "Frau"</li>
          </ul>
        </section>
        <section>
          Wie behandelt man den anderen Fall?
          <ul>
            <li className='fragment'>else Schlüsselwort</li>
            <li className='fragment'>Code Block</li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'else {\n' +
              '  // Quellcode\n' +
              '}'
              }}>
            </code>
          </pre>
        </section>
        <section>
          Wie behandelt man weitere Fälle?
          <ul>
            <li className='fragment'>else if Schlüsselwort</li>
            <li className='fragment'>Bedingung</li>
            <li className='fragment'>Code Block</li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'else if ( Bedingung ) {\n' +
              '  // Quellcode\n' +
              '}'
              }}>
            </code>
          </pre>
          <p>else bezieht sich immer nur auf die aktuelle if-else-if-Leiter</p>
        </section>
        <section>
          Verschachtelungen, um jegliche Fälle abzuprüfen.
          <pre className='fragment'>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'if ( Bedingung ) {\n' +
              '  if ( Bedingung ) {\n' +
              '    if ( Bedingung ) {\n' +
              '      ...\n' +
              '    }\n' +
              '  }\n' +
              '}'
              }}>
            </code>
          </pre>
        </section>
        <section>
          <h4>switch als "Alternative" zur If-Anweisung</h4>
          <ul>
            <li className='fragment'>switch Schlüsselwort</li>
            <li className='fragment'>Datenobjekt, das geprüft werden soll</li>
            <li className='fragment'>Code Block</li>
            <li className='fragment'>case Schlüsselwort mit Wert</li>
            <li className='fragment'>Code Block</li>
            <li className='fragment'>break Schlüsselwort</li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
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
              '}'
              }}>
            </code>
          </pre>
          <div className='fragment'>
            switch geht nur mit <strong>int</strong>, <strong>String</strong> & <strong>Enum</strong>
          </div>
        </section>
        <section>
          <h2>Demo zu switch mit Gender</h2>
        </section>
        <section>
          <h2>switch vs if</h2>
          <ul>
            <li className='fragment'>switch performanter als if-else-if</li>
            <li className='fragment'>switch kann erst ab Java 7 Stringvergleiche</li>
            <li className='fragment'>keine Methodenaufrufe in case statement</li>
            <li className='fragment'>Mehrfachbehandlung deutlich lesbarer mit switch</li>
          </ul>
        </section>
        <section>
          <h2>Warum braucht man Schleifen?</h2>
          <ul>
            <li className='fragment'>zum Bearbeiten von Listen</li>
            <li className='fragment'>zum wiederholten Ausführen von Code</li>
          </ul>
        </section>
        <section>
          <h2>Beispiele für Schleifen</h2>
          <ul>
            <li className='fragment'>Liste von Klausuren, um Durchschnittsnote zu ermitteln</li>
            <li className='fragment'>Liste von Artikeln im Warenkorb, um Summe zu ermitteln</li>
            <li className='fragment'>Solange kein Film mit einer Bewertung von 4+, gehe zu nächstem Film</li>
          </ul>
        </section>
        <section>
          <h2>Welche Arten von Schleifen gibt es?</h2>
          <ul>
            <li className='fragment'>while-Schleife</li>
            <li className='fragment'>do-while-Schleife</li>
            <li className='fragment'>for-Schleife</li>
            <li className='fragment'>for-each-Schleife</li>
          </ul>
          <p className='fragment'>
            Wir machen alle Schleifen, um die Zahlen 0 bis 4 auszugeben.
          </p>
        </section>
        <section>
          <h2>while-Schleife</h2>
          <ul>
            <li className='fragment'>while Schlüsselwort</li>
            <li className='fragment'>Bedingung</li>
            <li className='fragment'>Code Block</li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'while ( Bedingung ) {\n' +
              '  // Quellcode\n' +
              '}'
              }}>
            </code>
          </pre>
        </section>
        <section>
          <h2>do-while-Schleife</h2>
          <ul>
            <li className='fragment'>do Schlüsselwort</li>
            <li className='fragment'>Code Block</li>
            <li className='fragment'>while Schlüsselwort</li>
            <li className='fragment'>Bedingung</li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'do {\n' +
              '  // Quellcode\n' +
              '}\n' +
              'while ( Bedingung ) \n'
              }}>
            </code>
          </pre>
          <p className='fragment'>
            Code Block wird mindestends einmal ausgeführt
          </p>
        </section>
        <section>
          <h2>for-Schleife</h2>
          <ul>
            <li className='fragment'>for Schlüsselwort</li>
            <li className='fragment'>Einmal Statement (vor der Schleife)</li>
            <li className='fragment'>Bedingung</li>
            <li className='fragment'>Statement (nach jedem Code Block)</li>
            <li className='fragment'>Code Block</li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'for (int i = 0; i &lt; 5; i++) {\n' +
              '  // Quellcode\n' +
              '}'
              }}>
            </code>
          </pre>
        </section>
        <section>
          <h2>for-each-Schleife</h2>
          <ul>
            <li className='fragment'>for Schlüsselwort</li>
            <li className='fragment'>Typ eines einzelnen Elements von einer Liste</li>
            <li className='fragment'>Bezeichner des Datenobjekts</li>
            <li className='fragment'>Datenobjekt mit einer Liste</li>
          </ul>
          <p className='fragment'>
            Kann erst mit Arrays verstanden werden.
          </p>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'int[] numbers = { 0, 1, 2, 3, 4};\n' +
              'for (int number : numbers) {\n' +
              '  // Quellcode\n' +
              '}'
              }}>
            </code>
          </pre>
        </section>
        <section>
          <h2>break Schlüsselwort</h2>
          <p>
            beendet die <strong>komplette</strong> Schleife
          </p>
        </section>
        <section>
          <h2>continue Schlüsselwort</h2>
          <p>
            beendet den <strong>aktuellen</strong> Code Block
          </p>
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Arrays?</h2>
        </section>
        <section>
          <h2>Eigenschaften eines Arrays</h2>
          <ul>
            <li className='fragment'>speichert mehrere Datenobjekte eines gleichen Typs</li>
            <li className='fragment'>speichert eine definierte Anzahl an Datenobjekten</li>
          </ul>
        </section>
        <section>
          <h2>Beispiele</h2>
          <ul>
            <li className='fragment'>
              die Namen von mir, meiner Freundin und meines besten Freundes
            </li>
            <li className='fragment'>
              die Noten von mir, meiner Freundin und meines besten Freundes
            </li>
          </ul>
        </section>
        <section>
          <h2>Wie deklariert man ein Array?</h2>
          <ul>
            <li className='fragment'>
              Datentyp der zu speichernden Elemente
            </li>
            <li className='fragment'>
              eckige Klammern []
            </li>
            <li className='fragment'>
              Bezeichner
            </li>
            <li className='fragment'>
              Zuweisungsoperator =
            </li>
            <li className='fragment'>
              Elemente kommagetrennt in geschweiften Klammern
            </li>
          </ul>
        </section>
        <section>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'int[] numbers = { 0, 1, 2, 3, 4 }'
              }}>
            </code>
          </pre>
          <div className='fragment'>
            das Array hat eine feste Länge von 5
          </div>
        </section>
        <section>
          <h2>Wie kann man Daten aus einem Array lesen?</h2>
          <pre className='fragment'>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'int[] numbers = { 0, 1, 2, 3, 4 } \n' +
              'int dasVierteElement = numbers[3];'
              }}>
            </code>
          </pre>
          <div className='fragment'>
            der Index bei Arrays beginnt immer bei 0
          </div>
        </section>
        <section>
          <h2>Wie kann man Daten in einem Array speichern?</h2>
          <pre className='fragment'>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'int[] numbers = { 0, 1, 2, 3, 4 } \n' +
              'numbers[3] = 9;'
              }}>
            </code>
          </pre>
        </section>
        <section>
          <h2>Wie kann ich ein Array ohne Werte initialisieren?</h2>
          <pre className='fragment'>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'int[] numbers = new int[4]; \n' +
              'Integer[] numbers = new Integer[4]; \n' +
              'numbers[3] = 9;'
              }}>
            </code>
          </pre>
          <p className='fragment'>Schlüsselwort new ignorieren</p>
        </section>
        <section>
          <table className='fragment'>
            <thead>
              <tr>
                <th>Primitiver Datentyp</th>
                <th>Komplexer Datentyp</th>
              </tr>
            </thead>
            <tbody>
              <tr className='fragment'>
                <td>boolean</td>
                <td>Boolean</td>
              </tr>
              <tr className='fragment'>
                <td>char</td>
                <td>Character</td>
              </tr>
              <tr className='fragment'>
                <td>byte</td>
                <td>Byte</td>
              </tr>
              <tr className='fragment'>
                <td>short</td>
                <td>Short</td>
              </tr>
              <tr className='fragment'>
                <td>int</td>
                <td>Integer</td>
              </tr>
              <tr className='fragment'>
                <td>long</td>
                <td>Long</td>
              </tr>
              <tr className='fragment'>
                <td>float</td>
                <td>Float</td>
              </tr>
              <tr className='fragment'>
                <td>double</td>
                <td>Double</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Wie macht man Arrays größer?</h2>
          <ul>
            <li className='fragment'>
              Größe des neuen Arrays ermittlen
            </li>
            <li className='fragment'>
              neues Array mit neuer Größe erstellen
            </li>
            <li className='fragment'>
              mit einer Schleife die Elemente aus dem alten Array kopieren
            </li>
          </ul>
        </section>
        <section>
          <h2>Wie fügt man ein Element an einer bestimmten Stelle ein?</h2>
          <ul>
            <li className='fragment'>
              Größe des neuen Arrays ermittlen
            </li>
            <li className='fragment'>
              neues Array mit neuer Größe erstellen
            </li>
            <li className='fragment'>
              mit einer Schleife die Elemente vor der neuen Stelle aus dem alten Array kopieren
            </li>
            <li className='fragment'>
              neues Element hinzufügen
            </li>
            <li className='fragment'>
              mit einer Schleife die Elemente nach der neuen Stelle aus dem alten Array kopieren
            </li>
          </ul>
        </section>
        <section>
          <h2>ArrayList</h2>
          <ul>
            <li className='fragment'>
              neue Elemente hinzufügen
            </li>
            <li className='fragment'>
              neue Elemente an bestimmter Stelle hinzufügen
            </li>
            <li className='fragment'>
              komplette Liste leeren
            </li>
            <li className='fragment'>
              prüfen ob Liste ein bestimmtes Element enthält
            </li>
            <li className='fragment'>
              ...
            </li>
          </ul>
        </section>
        <section>
          <h2>ArrayList</h2>
          <pre>
            <code className='java'  dangerouslySetInnerHTML={{ __html: 
              'ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();'
              }}>
            </code>
          </pre>
          <p className='fragment'>
            &lt;Integer&gt; sind Generics --&gt; Java 2
          </p>
          <p className='fragment'>
            new kann erst mit Objekten verstanden werden
          </p>
        </section>
        <section>
          <h2>Demo</h2>
          <p>
            for-Schleife mit Array und ArrayList
          </p>
        </section>
        <section>
          <h2>Was sind jetzt die args in der main Methode?</h2>
          <p className='fragment'>
            Demo
          </p>
        </section>
      </section>
    </Slides>
  );
}
