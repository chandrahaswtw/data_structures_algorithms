<?php

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
