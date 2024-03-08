import java.util.HashSet;
import java.util.Set;

public class Test {
    public static void main(String[] args) {
        Set<String> a = new HashSet<String>();
        a.add("");
        a.size();
        a.remove(" ");
        a.contains(" ");
        a.clear();
    }
}