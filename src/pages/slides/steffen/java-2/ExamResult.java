public record ExamResult(int points, Human person) {

    public boolean passed() {
        return points > 50;
    }
    
}
