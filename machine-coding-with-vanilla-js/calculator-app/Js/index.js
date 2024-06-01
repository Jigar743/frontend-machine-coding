// import { Calculator } from "./calculatorClass";

const addBtn = document.querySelector("[data-plus]");
const divideBtn = document.querySelector("[data-divide]");
const substractBtn = document.querySelector("[data-minus]");
const multiplyBtn = document.querySelector("[data-multiply");
const resetBtn = document.querySelector("[data-reset]");
const deleteBtn = document.querySelector("[data-delete]");

const numbers = document.querySelectorAll("[data-number]");
const prevDisplay = document.querySelector("[data-prev-display]");
const currDisplay = document.querySelector("[data-curr-display]");
const equalBtn = document.querySelector("[data-equal]");

const calc = new Calculator(prevDisplay, currDisplay);

const keyArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "=",
  "Enter",
];

document.addEventListener("keydown", (ev) => {
  const key = ev.key;

  if (key === "Backspace" || key === "Delete") {
    calc.deleteNumber();
    calc.updateDisplay();
  }
});

document.addEventListener("keypress", (ev) => {
  const key = ev.key;
  // console.log({key})

  if (keyArr.includes(key)) {
    switch (key) {
      case "+":
        calc.addNumber(key);
        break;
      case "-":
        calc.substractNumber(key);
        break;
      case "/":
        calc.divideNumber(key);
        break;
      case "*":
        calc.multiplyNumber(key);
        break;
      case "Enter":
      case "=":
        calc.calculate();
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        calc.appendNumbers(key);
        break;
      default:
        break;
    }
    calc.updateDisplay();
  }
});

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc.appendNumbers(btn.innerText);
    calc.updateDisplay();
  });
});

addBtn.addEventListener("click", () => {
  calc.addNumber(addBtn.innerText);
  calc.updateDisplay();
});

multiplyBtn.addEventListener("click", () => {
  calc.multiplyNumber(multiplyBtn.innerText);
  calc.updateDisplay();
});

divideBtn.addEventListener("click", () => {
  calc.divideNumber(divideBtn.innerText);
  calc.updateDisplay();
});

substractBtn.addEventListener("click", () => {
  calc.substractNumber(substractBtn.innerText);
  calc.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calc.deleteNumber();
  calc.updateDisplay();
});

resetBtn.addEventListener("click", () => {
  calc.clear();
  calc.updateDisplay();
});

equalBtn.addEventListener("click", () => {
  calc.calculate();
  calc.updateDisplay();
});
