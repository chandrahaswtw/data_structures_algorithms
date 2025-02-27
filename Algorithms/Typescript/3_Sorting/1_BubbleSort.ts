/*
- This checks each element at the index with remaining all elements and make the swap if necessary. After checking with one element, it repeats the process by considering next element. 
- After going through the entire list once, the largest number will have "bubbled" up to the end of the list.

Time complexity: O(N^2)
- Best case: O(N) if it’s already been sorted & worst case it’s O(N^2). 
- Average case is O(N^2).
*/

function bubbleSort(arr: number[]) {
  arr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let bubbleSortedArray = bubbleSort([-5, 1001, 181, 900, 5, 46, -190]);
console.log(bubbleSortedArray);
