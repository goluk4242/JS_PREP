const name = "lakshay"
const repoCount = 50

// console.log(name + repoCount + " Value") 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('clashofclans')
// gives length property, so many methods which can be useful while doing the code

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-11, 4)
console.log(anotherString)

const newStringOne = "  lakshay"
console.log(newStringOne.trim())

const newStringTwo = "https://lakshay.com/lakshay%20kumar"
console.log(newStringTwo.replace('%20','-'))

console.log(newStringTwo.includes('%20'))

const str = "abc-def-efg"

console.log(str.split('-'))