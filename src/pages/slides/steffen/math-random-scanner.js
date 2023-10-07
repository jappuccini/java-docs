import ScannerError from '@site/static/img/scanner-error.png';
import React from 'react';
import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function MethodsAndOperators() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>Fragen oder Probleme?</section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Fallunterscheidung</h2>
          <ul>
            <li className="fragment">if-else</li>
            <li className="fragment">switch</li>
          </ul>
        </section>
        <section>
          <h2>Schleifen</h2>
          <ul>
            <li className="fragment">while-Schleife</li>
            <li className="fragment">do-while-Schleife</li>
            <li className="fragment">for-Schleife</li>
            <li className="fragment">for-each-Schleife</li>
          </ul>
        </section>
        <section>
          <h2>Arrays</h2>
          <ul>
            <li className="fragment">Elemente eines Typs</li>
            <li className="fragment">Feste Länge</li>
            <li className="fragment">index beginnt bei 0</li>
          </ul>
        </section>
        <section>
          <h2>ArrayList</h2>
          <ul>
            <li className="fragment">Elemente eines Typs</li>
            <li className="fragment">Dynamische Länge</li>
            <li className="fragment">index beginnt bei 0</li>
            <li className="fragment">Hilfsmethoden</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Ready for Hustle?</h2>
        </section>
        <section data-background-iframe="https://giphy.com/embed/m3864rBwwBTKMAbpn3"></section>
        <section>
          <h2>Hilfsmethoden der Klasse Math</h2>
          <ul>
            <li className="fragment">Math.abs // Betrag</li>
            <li className="fragment">Math.pow // Potenzen</li>
            <li className="fragment">Math.sqrt // Wurzel ziehen</li>
          </ul>
        </section>
        <section>
          <h2>Hilfsmethoden der Klasse String</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'String name = "Steffen";\n' +
                  'char buchstabe = name.charAt(2);\n' +
                  'System.out.println(buchstabe); // gibt "e" aus',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Zufallszahlen generieren</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Random random = new Random();\n' +
                  'int randomNumber = random.nextInt(100) + 1\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Konsoleneingaben verarbeiten</h2>
          <p>Demo gh pr create</p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Scanner sc = new Scanner(System.in);\n' +
                  'int numberInput = sc.nextInt();\n' +
                  'double doubleInput = sc.nextDouble();\n' +
                  'String textInput = sc.next();\n' +
                  'String textInput = sc.nextLine();\n' +
                  'boolean boolInput = sc.nextBoolean();',
              }}
            ></code>
          </pre>
        </section>
        <section data-background-image={ScannerError}></section>
      </section>
      <section>
        <section data-background-iframe="https://giphy.com/embed/VZXTThO4dxllIEQKTr"></section>
        <section>
          <h2>Aufgaben</h2>
          <ul>
            <li className="fragment">Konsolenanwendungen</li>
            <li className="fragment">Kontrollstrukturen - Cases 05 optional</li>
            <li className="fragment">Felder - Arrays 04 optional</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
