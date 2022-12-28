"use strict";

function isSquare(x) {
  let square = parseInt(Math.sqrt(x));
  return square * square == x;
}

function isNumber(value) {
  if (typeof value === "number") {
    return value - value === 0;
  }
  if (typeof value === "string" && value.trim() !== "") {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }
  return false;
}

module.exports = function isFibonacci(value) {
  const n = Math.abs(value);
  if (!isNumber(n)) {
    throw new TypeError("expected a number");
  }
  if (!Number.isInteger(n)) {
    throw new Error("expected an integer");
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error("value exceeds maximum safe integer");
  }
  if (isSquare(5 * (value * value) - 4) || isSquare(5 * (value * value) + 4)) {
    return true;
  }
  {
    return false;
  }
}
