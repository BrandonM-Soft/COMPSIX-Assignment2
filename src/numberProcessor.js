const fs = require('fs');
const { constrainedMemory } = require('process');
const file = './data/sample-numbers.txt'

function sum(file) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    let total = 0;

    for (var i = 0; i < lines.length; i++) {
        const number = parseInt(lines[i]);
        total = (number + total);
    }
    return total;
}

function highLow(file) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split(/\r?\n/);
    let low = parseInt(lines[0]);
    let high = parseInt(lines[0]);
    for (var i = 0; i < lines.length; i++) {
        const number = parseInt(lines[i])
        if (number < low) {
            low = number;
        }
        if (number > high) {
            high = number;
        }
    }
    return (high + ", " + low);
}

function average(file) {
   const content = fs.readFileSync(file, 'utf8');
    const lines = content.split(/\r?\n/);
    let total = 0;

    for (var i = 0; i < lines.length; i++) {
        const number = parseInt(lines[i]);
        total = (number + total);
    }
    return (total / lines.length);
}

module.exports = {
    sum,
    highLow,
    average
};

console.log('The sum of all numbers: ' + sum(file));
console.log('The highest and lowest numbers: ' + highLow(file));
console.log('The calculated average of all numbers: ' + average(file));