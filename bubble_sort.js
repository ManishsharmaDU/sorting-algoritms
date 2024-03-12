function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  var len = arr.length;
  var swapped;
  do {
      swapped = false;
      for (var i = 0; i < len - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              swap(arr, i, i + 1);
              swapped = true;
          }
      }
      len--;
  } while (swapped);
}

function printArray(arr) {
  console.log(arr.join(' '));
}

var arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: " + arr.join(' '));

bubbleSort(arr);

console.log("Sorted array: " + arr.join(' '));
