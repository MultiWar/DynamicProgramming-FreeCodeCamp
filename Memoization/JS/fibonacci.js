// Just fibonacci's sequence

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(3)) // 2
console.log(fib(6)) // 8
console.log(fib(10)) // 55
console.log(fib(15)) // 610
console.log(fib(50)) // 12586269025