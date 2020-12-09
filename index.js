function printString(string) {
  if (string.length === 1) return console.log(string.charAt(0));
  console.log(string.charAt(0));
  printString(string.slice(1));
  return "";
}

function reverseString(string) {
  if (string.length === 1) return string.charAt(string.length-1);
  const lastCharacter = string.charAt(string.length-1);
  return lastCharacter + reverseString(string.slice(0, string.length-1));
}

function isPalindrome(string) {
  if (string.length === 0) return true;
  const firstCharacter = string.charAt(0);
  const lastCharacter = string.charAt(string.length-1);
  return firstCharacter === lastCharacter
    ? isPalindrome(string.slice(1, string.length-1))
    : false
}

function addUpTo(integers, index) {
  return index === 0
    ? integers[index]
    : integers[index] + addUpTo(integers, index-1);
}

function maxOf(integers) {
  if (integers.length === 1) return integers[0];
  const integer1 = integers.shift();
  const integer2 = maxOf(integers);
  return integer1 > integer2 ? integer1 : integer2;
}

function includesNumber(integers, intToFind) {
  const integer = integers.shift();
  if (integer === intToFind) return true;
  return integers.length ? includesNumber(integers, intToFind) : false;
}