---
title: Komponententests (Unit Tests)
description: ''
sidebar_position: 320
tags: [unit-tests]
---

Komponententests (Unit Tests) werden zum Testen einzelner, abgeschlossener Softwarebausteine verwendete. JUnit ist ein weit verbreitetes Framework zur Erstellung von Komponententests bzw. zum automatisierten Testen von Klassen und Methoden in Java. Die aktuelle 
Version _JUnit 5_ stellt eine Kombination verschiedener Module der Projekte _JUnit Platform_, _JUnit Jupiter_ sowie _JUnit Vintage_ dar.

## Implementieren einer Testklasse
JUnit-Testklassen werden mit Hilfe entsprechender Annotationen implementiert:
- Die Annotationen `@Test` und `@ParameterizedTest` definieren einfache bzw. parametrisierte Testmethoden
- Die Annotationen `@BeforeAll` und `@AfterAll` definieren statische Methoden, die aufgerufen werden, wenn die Klasse für den Test initialisiert wird bzw. wenn alle Tests abgeschlossen sind
- Die Annotationen `@BeforeEach` und `@AfterEach` definieren Methoden, die vor bzw. nach jeder Testmethode aufgerufen werden
- Die Annotation `@Disabled` bewirkt, dass eine Testmethode beim Testen nicht ausgeführt wird
- Mit Hilfe der Annotation `@DisplayName` kann einer Testklasse bzw. einer Testmethode ein Anzeigename zugewiesen werden

## Zusicherungen (Assertions)
Die Klasse `Assertions` stellt verschiedene Methoden bereit, die immer dann eine Ausnahme vom Typ `AssertionError` auslösen, wenn das Ergebnis eines Methodenaufrufs nicht wie erwartet ausgefallen ist. Eine Ausnahme vom Typ `AssertionError` führt dazu, dass der Test als nicht erfolgreich gewertet wird.

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
Die Klasse `Calculator` stellt mehrere Methoden bereit, die getestet werden sollen.

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

Die statische Methode `setUp()` der Testklasse `CalculatorTest` stellt sicher, dass vor der Ausführung der Testmethoden ein Taschenrechner-Objekt erzeugt wird. In den Testmethoden werden verschiedene Testfälle wie z.B. die Division durch Null getestet.

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
