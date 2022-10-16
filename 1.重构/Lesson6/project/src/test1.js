import day from "dayjs";
export function printOwing(invoice) {
  printBanner();
  const outstanding = calclateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
  return outstanding;
}
function recordDueDate(invoice) {
  const today = day();
  invoice.dueDate = today.add(30, "d");
}
function calclateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
function printBanner() {
  console.log("----------------");
  console.log("- Custome Owes -");
  console.log("----------------");
}
function printDetails(invoice, outstanding) {
  console.log(`name:${invoice.customer}`);
  console.log(`amount:${outstanding}`);
  console.log(`due:${invoice.dueDate.format("YYYY/MM/DD")}`);
}
