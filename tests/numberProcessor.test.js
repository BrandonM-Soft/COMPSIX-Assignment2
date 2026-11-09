const { sum, highLow, average } = require('/src/numberProcessor.js');

test('Calculates the sum of all numbers from a given text file.', () => {
    const result = sum('./data/sample-numbers.txt')
    expect(result).toBe(2597);
});

test('Finds the highest and lowest numbers from a given text file.', () => {
    const result = highLow('./data/sample-numbers.txt')
    expect(result).toBe('96, 73');
});

test('Calculates the average of all numbers from a given text file.', () => {
    const result = average('./data/sample-numbers.txt')
    expect(result).toBe(2597/30);
});