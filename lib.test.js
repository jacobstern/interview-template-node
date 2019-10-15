const { add } = require('./lib')

test('can add two numbers', () => {
  expect(add(1, 2)).toBe(3)
})
