let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  // Print Space First
  for (let j = 0; j < n - i; j++) {
    string += "-";
  }
  // Print Asterisk Second
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);