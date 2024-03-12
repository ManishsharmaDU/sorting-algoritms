function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;
  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++)
      L[i] = arr[l + i];
  for (let j = 0; j < n2; j++)
      R[j] = arr[m + 1 + j];

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      } else {
          arr[k] = R[j];
          j++;
      }
      k++;
  }

  while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
  }

  while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
      let m = Math.floor((l + r) / 2);
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
      merge(arr, l, m, r);
  }
}

function print(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++)
      result += arr[i] + " ";
  console.log(result);
}

let arr = [12, 11, 13, 5, 6, 7];
console.log("Given array is");
print(arr);
mergeSort(arr, 0, arr.length - 1);
console.log("\nSorted array is");
print(arr);
