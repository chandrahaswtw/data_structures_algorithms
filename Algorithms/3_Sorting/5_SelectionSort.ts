/*
  Explanation video under root -> Algorithms -> Explanation -> 4_Selection Sort.mp4
*/

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let leastValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      leastValueIndex = arr[leastValueIndex] < arr[j] ? leastValueIndex : j;
      if (i == 2) {
        console.log(leastValueIndex);
      }
    }
    //Swap here
    let temp = arr[i];
    arr[i] = arr[leastValueIndex];
    arr[leastValueIndex] = temp;
  }
  return arr;
}

let selectionSortedArray = selectionSort([-5, 1001, 181, 900, 5, 46, -190]);
console.log(selectionSortedArray);
