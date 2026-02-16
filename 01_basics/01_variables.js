const accountId = 234567
let accountEmail = "abc@gmail.com"
var accountPass = "123456"
accountCity = " Jaipur"

// Prefer not to use var bcoz of issue in block scope and functional scope.

//accountId = 2 // not allowed -- can not change the const variable

accountEmail = "lakshay@gmail.com"
accountPass = "212121"
accountCity = "Bengaluru"

console.log(accountId)

console.table({accountId, accountEmail, accountPass, accountCity})