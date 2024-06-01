class Calculator {
  constructor(prevTextElement, currTextElement) {
    this.previousTextElement = prevTextElement;
    this.calculatedTextElement = currTextElement;
    this.clear();
  }

  clear() {
    this.operation = undefined;
    this.currDisp = "";
    this.prevDisp = "";
  }

  appendNumbers(num) {
    this.currDisp = this.currDisp.toString() + num.toString();
  }

  deleteNumber() {
    this.currDisp = this.currDisp.toString().slice(0, -1);
  }

  addNumber(val) {
    this.operation = val;
    this.prevDisp = this.currDisp;
    this.currDisp = "";
  }

  multiplyNumber(val) {
    this.operation = val;
    this.prevDisp = this.currDisp;
    this.currDisp = "";
  }

  divideNumber(val) {
    this.operation = val;
    this.prevDisp = this.currDisp;
    this.currDisp = "";
  }

  substractNumber(val) {
    this.operation = val;
    this.prevDisp = this.currDisp;
    this.currDisp = "";
  }

  calculate() {
    let computation;
    let prev = parseInt(this.prevDisp);
    let curr = parseInt(this.currDisp);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      case "/":
        computation = prev / curr;
        break;
      case "*":
        computation = prev * curr;
        break;
      default:
        return;
    }
    this.currDisp = computation;
    this.operation = undefined;
    this.prevDisp = "";
  }

  updateDisplay() {
    this.calculatedTextElement.innerText = this.currDisp;
    if (this.operation != null) {
      this.previousTextElement.innerText = `${this.prevDisp} ${this.operation}`;
    } else this.previousTextElement.innerText = "";
  }
}
