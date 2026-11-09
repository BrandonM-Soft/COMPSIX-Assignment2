const { wordcount, linecount, longestword } = require('/src/textAnalyzer.js');

test('Counts the amount of words in the quotes.txt file', () => {
    const result = wordcount('./data/quotes.txt')
    expect(result).toBe(108);
});

test('Counts the number of lines in the quotes.txt file.', () => {
    const result = linecount('./data/quotes.txt')
    expect(result).toBe(10);
});

test('Finds the longest word in the quotes.txt file.', () => {
    const result = longestword('./data/quotes.txt')
    expect(result).toBe('sophistication');
});

test('Counts the amount of words in the sample-text.txt file', () => {
    const result = wordcount('./data/sample-text.txt')
    expect(result).toBe(207);
});

test('Counts the number of lines in the sample-text.txt file.', () => {
    const result = linecount('./data/sample-text.txt')
    expect(result).toBe(1);
});

test('Finds the longest word in the sample-text.txt file.', () => {
    const result = longestword('./data/sample-text.txt')
    expect(result).toBe('infrastructure');
});