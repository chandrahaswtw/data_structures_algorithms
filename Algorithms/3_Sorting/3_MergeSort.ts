/*
We divide the array into 2 pieces. Until they are reduced to 1 or 2 elements.
If array has 2 elements we re-arrange them in ascending order within the array.
And then we start to merge. While merging, we make sure that they are merged in ascending order.
Merging will happen between 2 arrays which are already in ascending order.

Explanation image under root -> Explanation -> Algorithms -> 2_MergeSort.png

Time complexity: 
-	In all cases: O(nlogn) is guarenteed 
*/

function mergeSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  // Rearranging the array with 2 elements in incresing order.
  if (arr.length == 2) {
    return arr[0] < arr[1] ? arr : [arr[1], arr[0]];
  }

  let median = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, median));
  let rightArr = mergeSort(arr.slice(median));

  let sortedArr: number[] = [];

  let leftIndex = 0;
  let leftMaxIndex = leftArr.length - 1;
  let rightIndex = 0;
  let rightMaxIndex = rightArr.length - 1;

  // Infinite loop until one of the leftArr or rightArr exhaust.
  while (true) {
    /* 
     The > (greater than) ensures that one or the array is completely exhausted and all the remaining array elements are greater in value.
     We don't know which array is exhausted so we are appending both towards the end. And the break the loop.
    */
    if (leftIndex > leftMaxIndex || rightIndex > rightMaxIndex) {
      sortedArr = [
        ...sortedArr,
        ...leftArr.slice(leftIndex),
        ...rightArr.slice(rightIndex),
      ];
      break;
    }

    /*
     All we are doing below is taking 2 arrays of different number of elements and sorting in ascending order.
     We took 2 counters and based on what value is being put into sorted array we are increaing the counter of one of them.
     Since we get 2 ascending arrays in recursion, this appoach make sure to sort everthing in increasing order.
    */

    let leftElement: number = leftArr[leftIndex];
    let rightElement: number = rightArr[rightIndex];
    if (leftElement < rightElement) {
      sortedArr.push(leftElement);
      leftIndex++;
    } else if (leftElement > rightElement) {
      sortedArr.push(rightElement);
      rightIndex++;
    }
  }

  return sortedArr;
}

let mergeSortedArray = mergeSort([-5, 1001, 181, 900, 5, 46, -190]);
console.log(mergeSortedArray);
