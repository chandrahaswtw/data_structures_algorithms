<?php

declare(strict_types=1);

function factorial(int $n)
{
    if ($n === 1) {
        return 1;
    }
    return $n * factorial($n - 1);
}

$val =  factorial(5);

var_dump($val);
