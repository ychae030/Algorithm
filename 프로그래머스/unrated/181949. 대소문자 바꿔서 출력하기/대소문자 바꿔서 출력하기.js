const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const answer = [...line].map(v => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join('')
    console.log(answer)
})