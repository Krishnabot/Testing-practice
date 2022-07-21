const stringLength = require("./stringLength");

test("check the length of the string", () => {
  expect(stringLength("Hello")).toBe(5);
});

test("If string legth is less than 0", () => {
  expect(stringLength("")).toBe("Testing Error");
});

test("If string length is more than 10", () => {
  expect(stringLength("Congratulations")).toBe("Testing Error");
});
