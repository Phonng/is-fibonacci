require("jest");

const isFibonacci = require("./index").default;

test("should be return true if number is fibonacci", () => {
  expect(isFibonacci(0)).toBeTruthy();
  expect(isFibonacci(55)).toBeTruthy();
  expect(isFibonacci(2584)).toBeTruthy();
  expect(isFibonacci(4181)).toBeTruthy();
  expect(isFibonacci(233)).toBeTruthy();
});

test("should be return false ", () => {
  expect(isFibonacci(312321)).toBeFalsy();
  expect(isFibonacci(3241234234)).toBeFalsy();
  expect(isFibonacci(25543534584)).toBeFalsy();
  expect(isFibonacci(4123312381)).toBeFalsy();
  expect(isFibonacci(2213212333)).toBeFalsy();
});

it("should work with strings:", () => {
  expect(!isFibonacci("0")).toBeFalsy();
  expect(!isFibonacci("2")).toBeFalsy();
  expect(isFibonacci("1")).toBeTruthy();
  expect(isFibonacci("3")).toBeTruthy();
  expect(isFibonacci("1.0e0")).toBeTruthy();
  expect(isFibonacci("9007199254740991")).toBeFalsy();
});
