public class App {
    public static void main(String[] args) throws Exception {
        ClonedArrayList arr = new ClonedArrayList();
        System.out.println(arr);
        arr.add(70);
        System.out.println(arr);
        arr.addAll(new int[] { 20, 40, 3, 4, 5 });
        System.out.println(arr);
        int deletedValue =  arr.remove(2);
        System.out.println("Deleted value: " + deletedValue);
        System.out.println(arr);
        arr.removeAll();
        System.out.println(arr);
    }
}
