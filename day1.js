const FS = require('fs');

const input = "day1.txt";
const data = FS.readFileSync(input, 'utf8');

const calories = data.split('\n\n').map(x => x.split('\n').map(Number).reduce((a, b) => a+b)).sort((a, b) => b-a)

console.log("Part1: ", calories[0])
console.log("Part2: ", calories.slice(0, 3).reduce((a, b) => a + b))
