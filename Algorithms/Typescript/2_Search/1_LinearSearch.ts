/*
As the term "linear search" suggests, this method searches for a specific element by iterating through each item in the array. The array does not need to be sorted and can be in any form. Below is the implementation:
We aim to find the index of a given element by passing the array and the target element as parameters to the function.
*/

function linearSearch(arr: number[], num: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
}

let pos = linearSearch([1, 2, 45, 6, 788], 788);

console.log(pos);
