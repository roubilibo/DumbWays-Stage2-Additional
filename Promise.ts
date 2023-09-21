// When will we use single promise
// const isVip: boolean = false
// const checkingVip: Promise<string> = new Promise((resolve, reject) => {
//   if(isVip) {
//     resolve("Member is VIP")
//   } else {
//     reject("Member isnt VIP")
//   }
// })

// checkingVip
//   .then((response: string) => console.log("yes " + response))
//   .catch((response: string) => console.log("no "+ response))

// When will we use promises in all() method
// interface Member {
//   id: number
//   name: string
//   isVip: boolean
// }

// interface Product {
//   id: number
//   name: string
//   price: number
// }

// const member = new Promise<Member[]> (resolve => {
//   setTimeout(() => {
//     resolve([
//       {
//         id: 1,
//         name: "Jhon doe",
//         isVip: true
//       }
//     ])
//   }, 1000)
// })

// const product = new Promise<Product[]> (resolve => {
//   setTimeout(() => {
//     resolve([
//       {
//         id: 1,
//         name: "Jhon doe",
//         price: 599000
//       }
//     ])
//   }, 2000)
// })

// Promise.all([member, product]).then(response => console.log(response))