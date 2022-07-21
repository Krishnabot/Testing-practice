const reverseString = require('./reverseString');

test('If string is reversed', () => {
  expect(reverseString('Jumbo')).toBe('obmuJ');
});
