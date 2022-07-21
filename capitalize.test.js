const capitalize = require("./capitalize");

test("If first character of string  capitalized", () => {
  expect(capitalize("jumbo")).toBe("Jumbo");
});
