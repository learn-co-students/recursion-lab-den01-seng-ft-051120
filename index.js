// Code your solution here

function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    const newString = string.substring(1)
    printString(newString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return string.substring(string.length - 1) + reverseString(string.substring(0, string.length - 1))
  } else {
    return string
  }
}