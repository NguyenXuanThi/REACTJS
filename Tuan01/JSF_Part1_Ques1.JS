let massMark = 78
let heightMark = 1.69
let massJohn = 93
let heightJohn = 1.95

let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)

let markHigherBMI = BMIMark > BMIJohn
console.log("Test data1: ")
console.log("Mark cao hon John: ", markHigherBMI)
console.log("BMI Mark = ", BMIMark)
console.log("BMI John = ", BMIJohn)

let massMark1 = 95
let heightMark1 = 1.88
let massJohn1 = 85
let heightJohn1 = 1.76

let BMIMark1 = massMark1 / (heightMark1 * heightMark1)
let BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1)

let markHigherBMI1 = BMIMark1 > BMIJohn1
console.log("Test data2: ")
console.log("Mark cao hon John: ", markHigherBMI1)
console.log("BMI Mark = ", BMIMark1)
console.log("BMI John = ", BMIJohn1)