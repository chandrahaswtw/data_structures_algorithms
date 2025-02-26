<?php

// Febiniocci with memoization

declare(strict_types=1);

function fibonacci(int $n, array &$memo = [])
{

    if ($n <= 1) {
        return $n;
    }

    if (isset($memo[$n])) {
        return $memo[$n];
    }

    $feb = fibonacci($n - 1, $memo) + fibonacci($n - 2, $memo);
    echo $feb . "<br/>";
    $memo[$n] = $feb;
    return $feb;
}

fibonacci(5);
