// for (let i = 10; i > 5; i--) {
//   console.log("Saya tampan");
// }

const obj = {
	name: "Dandi",
	gender: "Sangat Lelaki",
	status: "lajang",
};

for (const key in obj) {
	console.log(key);
}

let arr = [1, 2, 3, 4];
for (const key of arr) {
	console.log(key);
}

// npm install -g typescript
// tsc --version
// npm i -g ts-node
// ts-node name file
