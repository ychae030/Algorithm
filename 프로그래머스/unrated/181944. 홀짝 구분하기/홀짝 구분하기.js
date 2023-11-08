const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    let input = line.split(' ');
    n = Number(input[0]);
    const evenOrOdd = n % 2 ? 'odd' : 'even'
    console.log(`${n} is ${evenOrOdd}`)
})