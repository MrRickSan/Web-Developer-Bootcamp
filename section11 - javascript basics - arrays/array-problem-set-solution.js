function printReverse (myArray) {
  for (var i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i])
  }
}

function isUniform (arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false
    }
  }
  return true
}

function sumArray (arr) {
  var total = 0
  arr.forEach((element) => {
    total += element
  })
  console.log(total)
  return total
}

function max (arr) {
  var max = arr[0]
  arr.forEach((element) => {
    if (element > max) {
      max = element
    }
  })
  console.log(max)
  return max
}

printReverse([1, 2, 3, 4])
console.log(isUniform([1, 1, 1, 2]))
sumArray([1, 5, 40, 1, 5])
max([1, 10, 2, 3, 50, 4])
