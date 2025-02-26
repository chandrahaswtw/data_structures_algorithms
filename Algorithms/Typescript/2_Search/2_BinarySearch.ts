/*
Binary search requires the array to be sorted before it can be applied. Here’s how it works:
    - The algorithm starts by checking the middle element of the array.
    - If the target element is greater than the middle element, it discards the left half of the array and focuses on the right half. The process then repeats, halving the remaining portion of the array each time.
    - If the target element is smaller than the middle element, it discards the right half and focuses on the left half. The search continues in this manner until the element is found or the search space is exhausted.

This approach allows binary search to locate an element much faster than linear search, as it repeatedly halves the search space. However, it’s important to note that the array must be sorted before applying binary search, which adds an overhead in time.
*/

/*
- offset is nothing but tracking the starting position wrt the original array.
- If we are considering the left array, no change in offset. 
- If we are considering the right array, the offset should be adjusted
For example:

[10, 21, 34, 49, 57, 59, 84, 100, 101] Say the target element is 59

- Target element 59 > Median element 57 so we consider the right array excluding median. 
- The right array excluding 57 will become [59, 84, 100, 101] and the offset will become 5 (The index of 59 the starting element in new array). That's median + 1
   
- Now in array [59, 84, 100, 101] the median is 1 and 59 < 84 and hence we consider the left array.
- The left array will be [59] and we don't need to change the offset as the index of starting element (with ref to original array) doesn't change as we considered left array.

- Now we are left with [59] and median is 0.
- Since we got the element, the actual index is the offset + current median. 
- We may argue that why not consider only offset as median is 0. In some cases, median may not be 0 if we are left with array as [12, 59, 100]. In this case median will be 1 and desired position will be 1 + offset.
*/

function binarySearch(arr: number[], target: number, offset: number = 0) {
  // We are considering ceil of middle element, we subtracted 1 as array index start with 0.
  let median = Math.ceil(arr.length / 2) - 1;

  if (target < arr[median]) {
    // Consider left array -> no change in offset -> sliced the array excluding the median element -> slice takes care of that.
    // We can consider median element as well but no use as it didn't match.
    return binarySearch(arr.slice(0, median), target, offset);
  } else if (target > arr[median]) {
    // Consider right array -> increased the offset -> sliced the array excluding the median element -> While slicing the element we incremented by 1
    // We increased the offset by 1 -> median + offset + 1 -> The extra + 1 is because we are slicing + 1 to avoid the median element.
    return binarySearch(arr.slice(median + 1), target, median + offset + 1);
  } else {
    // Found the element, return the element.
    return median + offset;
  }
}

var targetArray = [1, 2, 20, 46, 65, 78, 89, 92, 101];

// Sort the array, ascending direction.
targetArray.sort((a, b) => a - b);

var binaryPos = binarySearch(targetArray, 101);

console.log(binaryPos);
