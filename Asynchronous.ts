// function member() : Promise<string> {
//   return new Promise((resolve, reject) => {
//     const time: number = 6000

//     if(time < 5000) {
//       resolve("Member is running")
//     } else {
//       reject("Time's up")
//     }
//   })
// } 


// async function runMember() {
//   try {
//     const data = await member()
//     console.log(data)
//   } catch (error) {
//     console.log(error) 
//   }
// }

// runMember()

async function FetchAPI() {
  try {
    const response: Response = await fetch("https://api.dazelpro.com/mobile-legends/hero")
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

FetchAPI()