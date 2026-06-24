---
title: Komponententests (Unit Tests)
description: ''
sidebar_position: 320
tags: [unit-tests]
---

Komponententests (Unit Tests) testen einzelne, abgeschlossene Softwarebausteine
isoliert. JUnit ist das am weitesten verbreitete Framework für Unit Tests in
Java. Die aktuelle Version _JUnit 5_ setzt sich aus den Modulen _JUnit
Platform_, _JUnit Jupiter_ und _JUnit Vintage_ zusammen. Als Framework gibt
JUnit die Architektur und den Kontrollfluss der Tests vor (_Inversion of
Control_): Die Testmethoden werden beim Framework registriert, und JUnit ruft
sie auf — nach dem Hollywood-Prinzip: _Don't call us, we'll call you_.

## Implementieren einer Testklasse

JUnit-Testklassen werden durch spezielle Annotationen gesteuert:

- Die Annotationen `@Test` und `@ParameterizedTest` definieren einfache bzw.
  parametrisierte Testmethoden
- Die Annotationen `@BeforeAll` und `@AfterAll` definieren statische Methoden,
  die aufgerufen werden, wenn die Klasse für den Test initialisiert wird bzw.
  wenn alle Tests abgeschlossen sind
- Die Annotationen `@BeforeEach` und `@AfterEach` definieren Methoden, die vor
  bzw. nach jeder Testmethode aufgerufen werden
- Die Annotation `@Disabled` bewirkt, dass eine Testmethode beim Testen nicht
  ausgeführt wird
- Mit Hilfe der Annotation `@DisplayName` kann einer Testklasse bzw. einer
  Testmethode ein Anzeigename zugewiesen werden

## Zusicherungen (Assertions)

Die Klasse `Assertions` stellt Methoden bereit, die einen `AssertionError`
auslösen, wenn das tatsächliche Ergebnis nicht dem erwarteten Ergebnis
entspricht. Schlägt eine Zusicherung fehl, wird der Test als nicht erfolgreich
gewertet.

| Assert-Methode                                                   | Bedeutung                                   |
| ---------------------------------------------------------------- | ------------------------------------------- |
| `void assertTrue(condition: boolean)`                            | Prüft, ob eine Bedingung erfüllt ist        |
| `void assertFalse(condition: boolean)`                           | Prüft, ob eine Bedingung nicht erfüllt ist  |
| `void assertNull(actual: Object)`                                | Prüft, ob etwas `null` ist                  |
| `void assertNotNull(actual: Object)`                             | Prüft, ob etwas nicht `null` ist            |
| `void assertSame(expected: Object, actual: Object)`              | Prüft, ob zwei Objekte identisch sind       |
| `void assertNotSame(expected: Object, actual: Object)`           | Prüft, ob zwei Objekte nicht identisch sind |
| `void assertEquals(expected: Object, actual: Object)`            | Prüft, ob zwei Objekte gleich sind          |
| `void assertNotEquals(expected: Object, actual: Object)`         | Prüft, ob zwei Objekte nicht gleich sind    |
| `T assertThrows(expectedType: Class<T>, executable: Executable)` | Prüft, ob eine Ausnahme ausgelöst wird      |

## Beispiel

Die Klasse `Calculator` stellt einfache mathematische Operationen bereit, die
mit JUnit getestet werden sollen.

```java title="Calculator.java" showLineNumbers
public class Calculator {

   public Calculator() {}

   public int abs(int a) {
      return a >= 0 ? a : a * -1;
   }

   public int divide(int a, int b) {
      return a / b;
   }

   public int multiply(int a, int b) {
      return a * b;
   }

}
```

Die Methode `setUp()` der Testklasse `CalculatorTest` initialisiert das
Taschenrechner-Objekt vor allen Tests. Die Testmethoden decken verschiedene
Szenarien ab, darunter die Multiplikation mit null, Absolutwerte und die
Division durch null.

```java title="MainClass.java" showLineNumbers
public class CalculatorTest {

   private static Calculator calculator;

   @BeforeAll
   static void setUp() {
      calculator = new Calculator();
   }

   @Test
   @DisplayName("Multiplication with Zero")
   void multiply_withZero_Zero() {
      assertEquals(0, calculator.multiply(0, 5));
      assertEquals(0, calculator.multiply(5, 0));
   }

   @ParameterizedTest
   @DisplayName("Absolute Values of positive and negative Values")
   @ValueSource(ints = {-1, 0, 1})
   void abs_positiveAndNegativeValues_AbsoluteValues(int a) {
      assertTrue(calculator.abs(a) >= 0);
   }

   @Test
   @DisplayName("Division by Zero")
   void divide_byZero_ArithmeticException() {
      assertThrows(ArithmeticException.class, () -> calculator.divide(5, 0));
   }

}
```

:::info

Für die Benennung von Testmethoden hat sich das Muster
`methodName_zustand_erwartung` bewährt (z.B.
`divide_byZero_ArithmeticException`). Zusätzlich können Schlüsselwörter wie
_should_, _when_ oder _then_ eingesetzt werden.

:::
