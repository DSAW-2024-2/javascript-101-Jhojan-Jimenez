// Sum of Two Numbers
function sum(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (!isNumber(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Find the Largest Number
function findLargest(arr) {
  let largestNumber = isNumber(arr[0])
    ? arr[0]
    : console.log("Los datos de entrada no son adecuados");
  for (let index = 1; index < arr.length; index++) {
    if (!isNumber(arr[index])) {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
    if (arr[index] > largestNumber) {
      largestNumber = arr[index];
    }
  }
  return largestNumber;
}

// Count Vowels in a String
function countVowels(str) {
  if (!isString(str)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  const vowels = ["a", "e", "i", "o", "u"];
  let nvowels = 0;
  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index].toLowerCase())) {
      nvowels++;
    }
  }
  return nvowels;
}

// Check if a Number is Prime
function isPrime(n) {
  if (isString(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n % index == 0) {
      return false;
    }
  }
  return true;
}
function isNumber(number) {
  return isNaN(number) ? false : true;
}
function isString(string) {
  return typeof string === "string" ? true : false;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
