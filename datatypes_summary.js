// Primitive datatypes

// 7 types : String, Number, Boolean, Null, undefined, BigInt, Symbol

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean

const outsideTemp = null //null

let userEmail = undefined // or let userEmail; //undefined

const id = Symbol('123')  // symbol
const anotherId = Symbol('123') //symbol
// result of both will be different 
console.log(id === anotherId)

const bigNumber = 2374739840892n //BigInt

// Reference datatypes(Non-primitive)

// arrays, objects, functions

const heroes = ["shaktiman", "nagraaj", "doga"] //array

let obj = {
    name:"Lakshay",
    age: 22,
} //objects

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof bigNumber)
