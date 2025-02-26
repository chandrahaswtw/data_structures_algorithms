function linearSearch(arr: number[], num: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
}

let pos = linearSearch([1, 2, 45, 6, 788], 788);

console.log(pos);
