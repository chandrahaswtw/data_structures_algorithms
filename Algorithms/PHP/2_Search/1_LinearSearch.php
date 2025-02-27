<?php

/*
As the term "linear search" suggests, this method searches for a specific element by iterating through each item in the array. The array does not need to be sorted and can be in any form. Below is the implementation:
We aim to find the index of a given element by passing the array and the target element as parameters to the function.

Time complexity = O(n)
- Best case: O(1) if element is located at the first.
- Worst case: O(n) if element is located at the end.
- Average case: tends to O(n).
*/

declare(strict_types=1);

function linearSearch(array $arr, int $num)
{
  for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] === $num) {
      return $i;
    }
  }
}

$pos = linearSearch([1, 2, 45, 6, 788], 788);

echo $pos;
