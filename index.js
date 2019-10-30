function addAll() {
  return [...arguments].reduce((acc, val) => acc + val, 0);
}

console.log('\naddAll()\n', addAll());
console.log('\naddAll(1, 2, 3, 4, 5, 6)\n', addAll(1, 2, 3, 4, 5, 6));
console.log('\naddAll(2, 5, 6, 7)\n', addAll(2, 5, 6, 7));
