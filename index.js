function addAll() {
  return [...arguments].reduce((acc, val) => acc + val, 0);
}

function sumAllPrimes(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      res += i;
    }
  }
  return res;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}

// console.log('\naddAll()\n', addAll());
// console.log('\naddAll(1, 2, 3, 4, 5, 6)\n', addAll(1, 2, 3, 4, 5, 6));
// console.log('\naddAll(2, 5, 6, 7)\n', addAll(2, 5, 6, 7));

// console.log('\nsumAllPrimes(10)\n', sumAllPrimes(10));
