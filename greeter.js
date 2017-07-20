let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let greet = (naam) => {
    console.log("Hello "+naam);
    rl.close();
};

rl.question("Hoe heet je? ", greet);