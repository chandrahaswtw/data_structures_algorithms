<?php

// Febiniocci with memoization

function febinocci(int $n, array &$memo = [])
{

    if ($n <= 1) {
        return $n;
    }

    if (isset($memo[$n])) {
        return $memo[$n];
    }

    $feb = febinocci($n - 1, $memo) + febinocci($n - 2, $memo);
    echo $feb . "<br/>";
    $memo[$n] = $feb;
    return $feb;
}

febinocci(5);
