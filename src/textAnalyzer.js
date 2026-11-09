const fs = require('fs');

function wordcount(file) {
    const content = fs.readFileSync(file, 'utf8');
    let words = content.trim().replace(/\s+/g,' ').split(' ');
    return words.length;
}

function linecount(file) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    return lines.length;
}

function longestword(file) {
    const content = fs.readFileSync(file, 'utf8');
    let words = content.trim().replace(/\s+/g,' ').split(' ');
    var lgth = 0;
    var longest;

    for (var i = 0; i < words.length; i++) { // This searches through the entire word array to find the longest word
        if (words[i].replace('.','').replace(',','').length > lgth) {
            var lgth = words[i].replace('.','').replace(',','').length;
            var longest = words[i].replace('.','').replace(',','');
        }
    }

    return longest
}

module.exports = {
    wordcount,
    linecount,
    longestword
};