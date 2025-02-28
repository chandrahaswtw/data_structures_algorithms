/*
  Explanation video under root -> Explanation -> Algorithms -> 3_Insertion Sort.mp4
*/

function insertionSort(arr: number[]) {
  let counter = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

let insertionSortedArray = insertionSort([-5, 1001, 181, 900, 5, 46, -190]);
console.log(insertionSortedArray);
