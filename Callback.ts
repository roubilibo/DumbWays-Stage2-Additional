// function checkingVip(user: string, callback: (isVip: boolean) => void) : string {
//   return `Hello Mr. ${user}, He is member ${callback(true)}`
// }

// function vipCondtional(isVip: boolean) : string {
//   if(!isVip) return "Reguler"

//   return "VIP"
// }

// console.log(checkingVip("Ferdin Sambo", vipCondtional))




// CALLBACK WITH INTERFACE
// interface isVip {
//   (isVip: boolean) : void
// }


// function checkingVip(user: string, callback: isVip) : string {
//   return `Hello Mr. ${user}, He is member ${callback(true)}`
// }

// function vipCondtional(isVip: boolean) : string {
//   if(!isVip) return "Reguler"

//   return "VIP"
// }

// console.log(checkingVip("Ferdin Sambo", vipCondtional))