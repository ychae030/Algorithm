const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    let [a,b] = line.split(' ');
    a = Number(a)
    b = Number(b)
    console.log(`${a} + ${b} = ${a+b}`);
})