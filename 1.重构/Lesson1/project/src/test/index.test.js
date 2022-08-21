import { describe, it, expect } from "vitest";
import invoice from "../invoices.js";
import play from "../play.js";
import { statement, htmlStatement } from "../statement.js";
describe("happy path", () => {
  it("test text", () => {
    expect(statement(invoice, play)).toMatchSnapshot();
  });
  it("test HTML", () => {
    expect(htmlStatement(invoice, play)).toMatchSnapshot();
  });
});
