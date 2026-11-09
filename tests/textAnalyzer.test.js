const { wordcount, linecount, longestword } = require('/src/textAnalyzer.js');

test('Counts the ammount of words in the quotes.txt file', () => {
    const result = wordcount('./data/quotes.txt')
    expect(result).toBe(108);
});

test('Finds the highest and lowest numbers from a given text file.', () => {
    const result = linecount('./data/quotes.txt')
    expect(result).toBe(10);
});

test('Calculates the average of all numbers from a given text file.', () => {
    const result = longestword('./data/quotes.txt')
    expect(result).toBe('sophistication');
});

test('Counts the ammount of words in the sample-text.txt file', () => {
    const result = wordcount('./data/sample-text.txt')
    expect(result).toBe(207);
});

test('Finds the highest and lowest numbers from a given text file.', () => {
    const result = linecount('./data/sample-text.txt')
    expect(result).toBe(1);
});

test('Calculates the average of all numbers from a given text file.', () => {
    const result = longestword('./data/sample-text.txt')
    expect(result).toBe('infrastructure');
});