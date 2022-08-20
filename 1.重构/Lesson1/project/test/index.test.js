import {describe,it,expect} from 'vitest'
import invoice from "./invoices.js";
import play from "./play.js";
import statement from "./main.js";
describe("happy path", () => {
  it("test",()=>{
    // 第一步创建可靠的测试
    expect(statement(invoice, play)).toMatchSnapshot()
  })
});
