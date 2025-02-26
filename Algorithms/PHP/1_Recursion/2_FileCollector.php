<?php

// Navigate through deep structure of the JSON and recursively find all filenames.

declare(strict_types=1);

$fileContent = file_get_contents(__DIR__ . "/../../Files/Files.json");

$filesData = json_decode($fileContent, true);

function getFiles(array $data = [], array $files = [])
{
    foreach ($data as $key => $value) {
        if ($key == "files") {
            return [...$files, ...$value];
        };
        $files = getFiles($value, $files);
    }

    return $files;
}

var_dump(getFiles($filesData));
