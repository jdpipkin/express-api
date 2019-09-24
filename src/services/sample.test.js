const sum = require('./sample');

test('returns the sum of 7 and 6', () => {
    expect(sum(7,6)).toBe(13);
});

