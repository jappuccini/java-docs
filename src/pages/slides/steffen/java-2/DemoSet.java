import java.util.*;
import java.util.stream.*;

public class DemoSet {

    public static void main(String[] args) {
        Set<Integer> a = new HashSet<Integer>(Stream.of(1, 2, 3, 4).collect(Collectors.toSet()));
        Set<Integer> b = new HashSet<Integer>(Stream.of(2, 3, 5).collect(Collectors.toSet()));

        Set<Integer> union = new HashSet<Integer>(a);
        union.addAll(b);
        union.forEach(System.out::println);

        Set<Integer> intersection = new HashSet<Integer>(a);
        intersection.retainAll(b);
        intersection.forEach(System.out::println);

        Set<Integer> difference = new HashSet<Integer>(a);
        difference.removeAll(b);
        difference.forEach(System.out::println);
    }
}
