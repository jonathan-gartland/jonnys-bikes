import { sum } from "@/mathadd";

import { describe, test, expect } from "@jest/globals";

describe("Sum function", () => {
  test("Returns correct value", () => {
    let sum1: number = 0;
    sum1 = sum(2, 3);
    expect(sum1).toEqual(5);
  });

  test("Returns correct value", () => {
    let sum1: number = 0;
    sum1 = sum(5, 3);
    expect(sum1).toEqual(8);
  });

});
