let readline = require('readline')
let rl = readline.createInterface(process.stdin, process.stdout)

let questionArray = []
let answerArray = []

let createCards = input => {
    switch (input) {
        case "yes":
            rl.question("Front:\n",addFront)
            break;
        case "no":
            rl.question("Test?\n",testCards)
            break;
        default:
            rl.question("New flashcard?\n",createCards)
    }
}
let addFront = front => {
    questionArray.push(front)
    rl.question("Back:\n",addBack)
}
let addBack = back => {
    answerArray.push(back)
    rl.question("New flashcard?\n",createCards)
}
let testCards = wantToTest => {
    switch (wantToTest) {
        case "no":
            rl.close()
            break;
        case "yes":
            actualTest()
            break;
        default:
            rl.question("Test?\n",testCards)
    }
}
let i=0
let actualTest = () => {
    if (questionArray.length === 0) {
        rl.close()
        return console.log("Done, champ!")
    }
    if (i===questionArray.length) {
        i=0
    }
    rl.question("Front: "+questionArray[i]+"\nBack?\n",answer => {
        if (answer === answerArray[i]) {
            answerArray.splice(i,1)
            questionArray.splice(i,1)
            console.log("Correctemundo\n")
        } else {
            console.log("So sad\n")
            i++
        }
        actualTest()
    })
}


rl.question("New flashcard?\n",createCards)