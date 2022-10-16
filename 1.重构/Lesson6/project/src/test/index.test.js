import { describe, it, expect } from "vitest";
import { printOwing } from "../test1";
describe("happy path", () => {
  it("test text", () => {
    const invoice = {
      customer:'Justin',
      orders:[
        {
          amount:10
        },
        {
          amount:11
        },
        {
          amount:20
        }
      ]
    }
    expect(printOwing(invoice)).toBe(41)
  });
});
