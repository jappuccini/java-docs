import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

public class Exam {
    private final List<ExamResult> examResults;

    public Exam() {
        examResults = new ArrayList<ExamResult>();
    }

    private Set<Human> getFemale() {
        return examResults.stream()
                .filter(examResult -> examResult.person().gender() == 'f')
                .map(examResult -> examResult.person())
                .collect(Collectors.toSet());
    }

    private Set<Human> getAgeLowerThan(int upperAge) {
        return examResults.stream()
                .filter(examResults -> examResults.person().age() < upperAge)
                .map(examResults -> examResults.person())
                .collect(Collectors.toSet());
    }

    private Set<Human> passed() {
        return examResults.stream()
                .filter(examResults -> examResults.passed() == true)
                .map(examResults -> examResults.person())
                .collect(Collectors.toSet());
    }

}
