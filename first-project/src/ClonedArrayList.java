public class ClonedArrayList {
    private int count = 0;
    private int[] numbers = new int[100];

    public ClonedArrayList() {
    }

    public void add(int number) {
        numbers[count] = number;
        count++;
    }

    public void addAll(int[] numbers) {
        for (int num : numbers) {
            add(num);
        }
    }

    public int remove(int index) {
        // Get value at index
        int value = numbers[index];
        // Remove value at index
        for (int i = index; i < count - 1; i++) {
            numbers[i] = numbers[i + 1];
        }
        // Remove last value
        numbers[count - 1] = 0;
        // Decrease count
        count--;
        // Return
        return value;
    }

    public void removeAll() {
        count = 0;
        numbers = new int[100];
    }

    @Override
    public String toString() {
        String result = "[";
        for (int i = 0; i < count; i++) {
            result += numbers[i];
            if (i < count - 1) {
                result += ", ";
            }
        }
        return result + "]";
    }
}
