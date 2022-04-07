const numberBtns = document.querySelectorAll(".number-btn")
const operatorBtns = document.querySelectorAll(".operator-btn")
const equalsBtn = document.querySelector(".equals-btn")
const display = document.querySelector(".numberDisplay")

let displayValue = "0";
let storedNumber = undefined;
let currentOperator = undefined;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  if (operator === "+") return add(a, b)
  if (operator === "-") return subtract(a, b)
  if (operator === "*") return multiply(a, b)
  if (operator === "/") return divide(a, b)
}

const tryOperation = () => {
  if(currentOperator && storedNumber){
    let result = operate(currentOperator, parseInt(storedNumber), parseInt(displayValue))
    storedNumber = undefined
    resetDisplay()
    populateDisplay(result)
  }
}

const populateDisplay = number => {
  displayValue = display.innerText = parseInt(displayValue + number,10)
}

const resetDisplay = () => {
  displayValue = display.innerText = "0"
}

const storeOperator = operator => {
  currentOperator = operator
  console.log(currentOperator)
}

const storeDisplayNumber = () => {
  storedNumber = displayValue
  resetDisplay()
}

const processNumberBtn = value => {
  if(currentOperator && !storedNumber) storeDisplayNumber()
  populateDisplay(value)
} 

const processOperatorBtn = value => {
  tryOperation()
  storeOperator(value)
}

const processEqualsBtn = () =>{
  tryOperation()
}

for(btn of numberBtns){
  btn.addEventListener("click", e => processNumberBtn(e.target.value))
}

for(btn of operatorBtns){
  btn.addEventListener("click", e => processOperatorBtn(e.target.value))
}

equalsBtn.addEventListener("click", () => processEqualsBtn())
