var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var myArray = [1]
var someArray = ['black', 'gray', 'white', 'blue']

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

function accessElementInArray(someArray) {
  return someArray[3];
}