const fs = require('fs');
const quotes = './data/quotes.txt'
const sampleText = './data/sample-text.txt'

function wordcount(file) {
    const content = fs.readFileSync(file, 'utf8');
    const words = content.split(' ');
    return words.length;
}

function linecount(file) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    return lines.length;
}

function longestword(file) {
    const content = fs.readFileSync(file, 'utf8');
    const words = content.split(' ');
    var lgth = 0;
    var longest;

    for (var i = 0; i < words.length; i++) { // This searches through the entire word array to find the longest word
        if (words[i].length > lgth) {
            var lgth = words[i].length;
            var longest = words[i];
        }
    }

    return longest
}

module.exports = {
    wordcount,
    linecount,
    longestword
};

// Function tests with `quotes.txt`
console.log('Number of words in ' + quotes + ' : ' + wordcount(quotes))
console.log('Number of lines in ' + quotes + ' : ' + linecount(quotes))
console.log('Longest word in ' + quotes + ' : ' + longestword(quotes))

// Function tests with `sample-text.txt`
console.log('Number of words in ' + sampleText + ' : ' + wordcount(sampleText))
console.log('Number of lines in ' + sampleText + ' : ' + linecount(sampleText))
console.log('Longest word in ' + sampleText + ' : ' + longestword(sampleText))