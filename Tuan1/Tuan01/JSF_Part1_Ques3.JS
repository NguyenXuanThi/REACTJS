let teamAOne = 96
let teamATwo = 108
let teamAThree = 89
let teamBOne = 88
let teamBTwo = 91
let teamBThree = 110

let teamAavg = (teamAOne + teamATwo + teamAThree) / 3
let teamBavg = (teamBOne + teamBTwo + teamBThree) / 3

console.log("Data 1: ")
if (teamAavg > teamBavg) {
    console.log("team A thang cuoc!")
} else if (teamBavg > teamAavg) {
    console.log("team B thang cuoc!")
} else {
    console.log("hai team hoa!")
}


console.log("Data bonus 1: ")