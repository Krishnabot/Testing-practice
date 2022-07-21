const Calculator = require("./calculator");

describe("Calculator", () => {
  test("addition", () => {
    expect(Calculator.addition(0, 1)).toBe(1);
    expect(Calculator.addition(0, 2)).not.toBe(1);
    expect(Calculator.addition(2, 2)).toEqual(4);
  });

  test("subtract numbers", () => {
    expect(Calculator.substraction(1, 0)).toBe(1);
    expect(Calculator.substraction(2, 2)).toEqual(0);
  });

  test("mulity numbers", () => {
    expect(Calculator.multiplication(1, 0)).toBe(0);
    expect(Calculator.multiplication(1, 1)).toBe(1);
    expect(Calculator.multiplication(2, 5)).not.toBe(1);
  });

  test("divide numbers", () => {
    expect(Calculator.division(1, 1)).toBe(1);
    expect(Calculator.division(10, 2)).toBe(5);
    expect(Calculator.division(8, 2)).not.toBe(5);
  });
});
