function multiples(x) {
  if (x % 49 === 0 && x % 3 === 0) return "Fang";
  if (x % 7 === 0) return "Fizz";
  if (x % 15 === 0) return "Foo";
  return "Far";
}
