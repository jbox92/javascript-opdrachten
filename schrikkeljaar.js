let readline = require('readline')
let rl = readline.createInterface(process.stdin, process.stdout)

let leapYear = (year) => {
    if ((year%4 === 0 && year%100 !== 0) || year%400 === 0) {
        console.log("leapyear")
    } else {
        console.log("not a leapyear")
    }
}2012

let handleInput = (input) => {
    if (input === "stop") {
        console.log("Bye")
        rl.close()
    } else {
        leapYear(input)
        rl.question("Year: ",handleInput)
    }
}

rl.question("Year: ",handleInput)