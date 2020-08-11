var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var myArray = [1]

function addElementToBeginningOfArray(myArray) {
  return ['foo', ...myArray]
}

function destructivelyAddElementToBeginningOfArray(myArray) {
  myArray.unshift('foo')
  return myArray
}

function addElementToEndOfArray() {
  return [...myArray, 'foo']
}

function destructivelyAddElementToEndOfArray(myArray) {
  myArray.push('foo')
  return myArray
}

function accessElementInArray() {
  var someArray = ['black', 'blue', 'red', 'green']
  var someColor = someArray[3]
  return someColor
}