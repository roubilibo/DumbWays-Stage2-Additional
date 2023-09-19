function Arirtmatic(a: number, b: number): number {
	return a + b; // addition = 7
	// return a - b // subtraction = 1
	// return a * b // multiplication = 12
	// return a / b // division = 1.33
	// return a % b // modulus = 1
}

// >, <, >=, <=, ==, !=, ===, !==, ?
function Comparation(a: number, b: any): boolean {
	return a !== b;
}
// console.log(Comparation(4, "4"));

// =, ==, ===

function Logical(b: boolean): boolean {
	// return a && b // AND
	// return a || b // OR
	return !b; // NOT
}

console.log(Logical(true));
