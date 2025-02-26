// Navigate through deep structure of the JSON and recursively find all filenames.

import filesData from "./../../Files/files.json" with { type: "json" };
function getFiles(data : any, files : any[] = []){
    for(let key in data){
        if(key === "files"){
            //returning the array
            return [...files, ...data[key]];
        } 

        // We should rewrite files = .... as will be used in next loop else an empty array will be sent.
        files = getFiles(data[key], files)
    }
    return files;
}

console.log(getFiles(filesData))