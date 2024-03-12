public class bubble_sort {
    static void swap(int[] arr, int idx1, int idx2) {
        int temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    static void bubbleSort(int[] arr) {
        int len = arr.length;
        boolean swapped;
        do {
            swapped = false;
            for (int i = 0; i < len - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1);
                    swapped = true;
                }
            }
            len--;
        } while (swapped);
    }

    static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.print("Original array: ");
        printArray(arr);

        bubbleSort(arr);

        System.out.print("Sorted array: ");
        printArray(arr);
    }
}
