import { createStatementData } from "./createStatementData.js";
// create text statement
export function statement(invoice, plays) {
  const statementData = createStatementData(invoice, plays);
  return renderPlainText(statementData);
}
function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    result += ` ${perf.play.name}:${usd(perf.amount)}(${
      perf.audience
    } seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  console.log(result);
  return result;
}
// create html statement
export function htmlStatement(invoice, plays) {
  return renderPlainHTML(createStatementData(invoice, plays));
}
function renderPlainHTML(data) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  result += `<table>\n`;
  result += `<tr><th>player</th><th>amount</th><th>audience</th></tr>`;
  for (let perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td><td>${usd(perf.amount)}</td><td>${
      perf.audience
    } seats</td></tr></td>\n`;
  }
  result += `</table> \n`;
  result += `<p>Amount owed is ${usd(data.totalAmount)}</p>\n`;
  result += `<p>You earned ${data.totalVolumeCredits} credits</p>\n`;
  console.log(result);
  return result;
  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}
function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}
