// Febiniocci with memoization

interface Imemo {
  [key: number]: number;
}

function fibonacci(n: number, memo: Imemo = {}) {
  if (n <= 1) {
    return n;
  }

  let memoValue = memo[n];

  if (memoValue) {
    return memo[n];

    // We are not printing memoValue but just returning it as we below creating the memo value and printing it.
    // Printing here memo value will print duplicate value.
  }

  const feb = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = feb;
  console.log(feb);
  return feb;
}

fibonacci(5);
