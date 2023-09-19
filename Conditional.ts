// let x = 10, y = 20;

// if (x > y) {
//   console.log('x is greater than y.');
// } else {
//   console.log('x is less than or equal to y.'); 
// }


// function compareNumber(x: number, y: number) : string {
//   if (x > y) return 'x is greater than y.'
  
//   return 'x is less than or equal to y.' 
// }
// console.log(compareNumber(40, 20));


function compareNumber(x: number, y: number) : string {
  return x > y ? 'x is greater than y.' : 'x is less than or equal to y.'
}
console.log(compareNumber(40, 20));