export function createStatementData(invoice, plays) {
  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance), // 做一次神拷贝
  };
  statementData.totalAmount = totalAmount();
  statementData.totalVolumeCredits = totalVolumeCredits();
  return statementData;
  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }
  function playFor(perf) {
    return plays[perf.playID];
  }
  function totalAmount() {
    return statementData.performances.reduce(
      (result, perf) => result + perf.amount,
      0
    );
  }
  function totalVolumeCredits() {
    return statementData.performances.reduce(
      (result, perf) => result + perf.volumeCredits,
      0
    );
  }
}
class PerformanceCalculator {
  constructor(aPerformance, aplay) {
    this.performances = aPerformance;
    this.play = aplay;
  }
  get amount() {
    throw new Error(`unknown type:${this.play.type}`);
  }
  get volumeCredits() {
    return Math.max(this.performances.audience - 30, 0); // 防止人数不够 30
  }
}
class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performances.audience > 30) {
      result += 1000 * (this.performances.audience - 30);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performances.audience > 20) {
      result += 1000 + 500 * (this.performances.audience - 20);
    }
    result += 300 * this.performances.audience;
    return result;
  }
  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performances.audience / 5);
  }
}
function createPerformanceCalculator(aPerformance, play) {
  // 进行多态判断
  switch (play.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, play);
    case "comedy":
      return new ComedyCalculator(aPerformance, play);
    default:
      throw new Error(`unknown type:${this.play.type}`);
  }
}
