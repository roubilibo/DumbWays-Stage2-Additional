// high order function
// HOF IS MOSTLY USED => forEach, Map, Filter, Reduce, Sort, Find, Some and Every, IndexOf and Includes, Concat, Push and Pop, Shift and Unshift.

// Backend ? RESTful API (JSON) => Array of Objects = Array Manipulation.
// I wanna be frontend developer 
// Frontend get a data from backend ?


// [
//   {
//     ...
//     ...: [
//       {

//       },
//       {

//       }
//     ]
//   },
//   {
//     ...
//   },
//   {
//     ...
//   },
//   {
//     ...
//   },
// ]

// Array.map() => Array is not a function ?

// forEach()
// Iterating through array elements and running function on each element
// const number = [3, 2, 1, 4, 7]
// number.forEach((num) => {
//   if(num % 2 === 0) {
//     console.log(num)
//   }
// })

// Map
//  Creating a array in every element of array
// const number = [3, 2, 1, 4, 7]
// const doubled = number.map((num) => {
//   return num * 2
// })

// console.log(number)
// console.log(doubled)


// Filter
// Creating a new array by fullfiled condition.
// const number = [3, 2, 1, 4, 7]
// const evenNumber = number.filter((num) => num % 2 === 0)
// console.log(evenNumber)


// REDUCE
// Creating a new array from calculation element array
// const number = [3, 2, 1, 4, 7]
// const sum = number.reduce((previous, current) => previous - current, 10)
// console.log(sum)


// FIND
// Return first element of array by fullfiled condition
// const number = [2, 1, 4, 3, 7]
// const found = number.find(num => num > 2)
// console.log(found)


// SOME & EVERY
// Checks 
// const number = [2, 1, 4, 3, 7]
// const hasEven = number.some(num => num % 2 === 0) // at least one element is even
// const allEven = number.every(num => num % 2 === 0) // all elements are even
// console.log(allEven)


//  INDEXOF & INCLUDES
// Search for the index or presence of an element in an array
// const number = [2, 1, 4, 3, 7]
// const index = number.indexOf(7) // search index array
// const includes = number.includes(6) // is 6 in the array
// console.log(includes)

// PUSH & POP
// POP removes elements from the end of the array
// const number: number[] = [2, 1, 4, 3, 7]
// const item = number.pop() // removes and returns the last element
// console.log(item)

// SHIFT & UNSHIFT