const numbers = [1, 2, 3, 4];
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

const oddNumbers = numbers.filter(num => num % 2);
console.log(oddNumbers);
const double = oddNumbers.map(x => x * 2);
console.log("The doubled numbers are", double);
