let compare, readline, rl, answer;

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

answer = Math.floor((Math.random() * 100) + 1);

compare = (guess) => {
    if (guess == answer) {
        rl.close();
        return console.log("Correct");
    } else if (guess < answer) {
        console.log("Higher");
    } else {
        console.log("Lower");
    }
    rl.question("Guess a number: ",compare);
};

rl.question("Guess a number: ",compare);