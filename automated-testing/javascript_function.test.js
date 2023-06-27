const calculator = require("./function");

// add testing
test("Checks add is working", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

// Subtract Testing
test("Checks Subtract is working", () => {
  expect(calculator.Subtract(1, 2)).toBe(-1);
});

// Multiply Testing
test("Checks Multiply is working", () => {
  expect(calculator.Multiply(10, 2)).toBe(20);
});

// Divide testing
test("Checks Divide is working", () => {
  expect(calculator.Divide(10, 2)).toBe(5);
});
