//  NAMED FUNCTION,
function sayHello() {
  return "ternyata mas ahmad yusri juga wibu dan wota garis keras"
}
// console.log(sayHello())

// ################### IF FUNCTION CAN ALSO INCLUDE PARAMETER TYPES
function sum(a: number, b: any) {
  return a + b
}

// ################### IF FUNCTION CAN ALSO INCLUDE PARAMETER TYPES AND RETURN
function greeting(name: string) : string {
  return `Ohayo gozaimasu sensei ${name}`
}
// console.log(greeting("Guswandi"))


// ################### ARROW FUNCTION
const sayHello2 = (name: string) : string => `Irasshimase ${name}-san`


// console.log(sayHello2("Arya"))

// ################### FUNCTION OVERLOADING
function add(a: string, b: string) : string;
function add(a: number, b: number) : number;
function add(a: any, b: any) : any {
  return a + b
}

console.log(add("Rebbecca ", "Eltra"))
console.log(add(20, 40))







// function warnUser(): void {
//   console.log("This is my warning message");
// }

// console.log(warnUser())