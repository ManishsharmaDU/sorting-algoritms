public class SelectionSort {
  static void swap(int[] arr, int idx1, int idx2) {
      int temp = arr[idx1];
      arr[idx1] = arr[idx2];
      arr[idx2] = temp;
  }

  static void selectionSort(int[] arr) {
      int len = arr.length;
      for (int i = 0; i < len - 1; i++) {
          int minIndex = i;
          for (int j = i + 1; j < len; j++) {
              if (arr[j] < arr[minIndex]) {
                  minIndex = j;
              }
          }
          if (minIndex != i) {
              swap(arr, i, minIndex);
          }
      }
  }

  static void printArray(int[] arr) {
      for (int i = 0; i < arr.length; i++) {
          System.out.print(arr[i] + " ");
      }
      System.out.println();
  }

  public static void main(String[] args) {
      int[] arr = {64, 25, 12, 22, 11};

      System.out.print("Original array: ");
      printArray(arr);

      selectionSort(arr);

      System.out.print("Sorted array: ");
      printArray(arr);
  }
}
