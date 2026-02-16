// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

/* The reason is that equality check (==) ans comparision > < >= <=
work differently.
comparisons convert null to a number, treating it as 0
thats why null >= 0 is true while null > 0 is false and null == 0 is also false
*/

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// === (strict check)

console.log("2" === 2) // false ( check datatype too )
console.log("2" == 2) // true