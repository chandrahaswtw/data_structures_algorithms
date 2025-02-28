/*
We have a pivot element which is normally the first element.
We split the entire array in 3:
    - Left array which contains all the elements less than the pivot. 
    - Right array which contains all the elements greater than the pivot.
    - Center array which contains the pivot element and all the other elements which are equal to pivot.
We in turn split the above array (left and right) into simpler pieces till it’s divided into single element array.

Explanation image under root -> Explanation -> Algorithms -> 1_QuickSort.jpg

Time complexity: 
-	Best case: O(nlogn)
-	Worst case: O(n^2)  When we perform on sorted array.
-	Average case: O(nlogn)

*/

function quickSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr: number[] = [];
  let pivotArr: number[] = [];
  let rightArr: number[] = [];

  for (let i of arr) {
    if (i < pivot) {
      leftArr.push(i);
    } else if (i > pivot) {
      rightArr.push(i);
    } else {
      pivotArr.push(i);
    }
  }

  let sortedLeftArr = quickSort(leftArr);
  let sortedRightArr = quickSort(rightArr);
  return [...sortedLeftArr, ...pivotArr, ...sortedRightArr];
}

let quickSortedArray = quickSort([-5, 1001, 181, 900, 5, 46, -190]);
console.log(quickSortedArray);
