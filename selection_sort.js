function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function selectionSort(arr) {
  var size = arr.length;
  for (var i = 0; i < size - 1; i++) {
      var min_index = i;
      for (var j = i + 1; j < size; j++) {
          if (arr[j] < arr[min_index]) {
              min_index = j;
          }
      }
      swap(arr, min_index, i);
  }
}

function printArray(arr) {
  console.log(arr.join(' '));
}

var arr = [64, 25, 12, 22, 11];
console.log("Original array: " + arr.join(' '));

selectionSort(arr);

console.log("Sorted array: " + arr.join(' '));
