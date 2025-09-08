let massMark = 78
let heightMark = 1.69
let massJohn = 93
let heightJohn = 1.95

let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)

let markHigherBMI = BMIMark > BMIJohn

let msg1 = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}) !`
let msg2 = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}) !`

console.log("Test data1: ")

if (markHigherBMI) {
    console.log(msg1)
} else {
    console.log(msg2)
}
console.log("BMI Mark = ", BMIMark)
console.log("BMI John = ", BMIJohn)

let massMark1 = 95
let heightMark1 = 1.88
let massJohn1 = 85
let heightJohn1 = 1.76

let BMIMark1 = massMark1 / (heightMark1 * heightMark1)
let BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1)

let markHigherBMI1 = BMIMark1 > BMIJohn1
let msg3 = `Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1}) !`
let msg4 = `John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1}) !`
console.log("Test data2: ")

if (markHigherBMI1) {
    console.log(msg3)
} else {
    console.log(msg4)
}
console.log("BMI Mark = ", BMIMark1)
console.log("BMI John = ", BMIJohn1)