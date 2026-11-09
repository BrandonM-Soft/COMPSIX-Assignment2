const fs = require('fs');

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