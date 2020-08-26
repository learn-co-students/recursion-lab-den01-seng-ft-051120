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

function isPalindrome(string) {
  if (string[0] === string[string.length - 1]) {
    if (string.length < 2) {
      return true
    }
    else if (string.length > 0) {
      return isPalindrome(string.substring(1, string.length - 1))
    }
  } else {
    return false
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, index - 1)
  } else return array[0]
}

function maxOf(array, max = 0) {
  if (array.length > 1) {
    const current = array.pop()
    if (current > max) {
      return maxOf(array, current)
    } else return maxOf(array, max)
  } else {
    return max > array[0] ? max : array[0]
  }
}