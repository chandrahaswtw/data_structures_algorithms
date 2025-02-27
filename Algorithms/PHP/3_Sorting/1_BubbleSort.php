<?php

/*
- This checks each element at the index with remaining all elements and make the swap if necessary. After checking with one element, it repeats the process by considering next element. 
- After going through the entire list once, the largest number will have "bubbled" up to the end of the list.

Time complexity: O(N^2)
- Best case: O(N) if it’s already been sorted & worst case it’s O(N^2). 
- Average case is O(N^2).
*/

declare(strict_types=1);

function bubbleSort(array $arr)
{
    for ($i = 0; $i < count($arr); $i++) {
        for ($j = $i; $j < count($arr); $j++) {
            if ($arr[$i] > $arr[$j]) {
                $temp = $arr[$i];
                $arr[$i] = $arr[$j];
                $arr[$j] = $temp;
            }
        }
    }

    return $arr;
}

$bubbleSortedArray = bubbleSort([-5, 1001, 181, 900, 5, 46, -190]);
var_dump($bubbleSortedArray);
