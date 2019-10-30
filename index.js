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

function seekAndDestroy(array, ...items) {
  return array.filter(item => items.indexOf(item) === -1);
}

function sortByHeight(array) {
  let orderedItems = array.filter(item => item > -1).sort((a, b) => a - b);
  return array.map(item => (item === -1 ? item : orderedItems.shift()));
}

function missingLetters(string) {
  let res;
  let diff = 1;
  for (let i = 1; i < string.length; i++) {
    diff = string.charCodeAt(i) - string.charCodeAt(i - 1);
    while (diff > 1) {
      if (res === undefined) res = [];
      res.unshift(String.fromCharCode(string.charCodeAt(i - 1) + diff - 1));
      diff -= 1;
    }
  }
  return res;
}

// console.log('\naddAll()\n', addAll());
// console.log('\naddAll(1, 2, 3, 4, 5, 6)\n', addAll(1, 2, 3, 4, 5, 6));
// console.log('\naddAll(2, 5, 6, 7)\n', addAll(2, 5, 6, 7));

// console.log('\nsumAllPrimes(10)\n', sumAllPrimes(10));

// console.log(
//   "\nseekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6)\n",
//   seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6)
// );

// console.log(
//   '\nsortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])\n',
//   sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
// );

console.log("\nmissingLetters('abce')\n", missingLetters('abce'));
console.log("\nmissingLetters('abe')\n", missingLetters('abe'));
console.log(
  "\nmissingLetters('abcdefghjklmno')\n",
  missingLetters('abcdefghjklmno')
);
console.log(
  "\nmissingLetters('abcdefghijklmnopqrstuvwxyz')\n",
  missingLetters('abcdefghijklmnopqrstuvwxyz')
);
