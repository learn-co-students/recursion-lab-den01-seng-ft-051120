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