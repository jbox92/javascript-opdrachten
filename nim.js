let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let matchesLeft = 11;

let removeMatches = (matchesTaken) => {
    matchesLeft -= 5;
    console.log("Computer takes "+(5-matchesTaken)+" matches.")
    if (matchesLeft > 0) {
        rl.question("There are "+matchesLeft+" matches left. Take? ",removeMatches);
    } else {
        console.log("You took the last match, you lost!");
        rl.close();
    }
}

rl.question("There are "+matchesLeft+" matches left. Take? ",removeMatches);