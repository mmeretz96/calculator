const numberBtns = document.querySelectorAll(".number-btn")
const operatorBtns = document.querySelectorAll(".operator-btn")
const equalsBtn = document.querySelector(".equals-btn")
const resetBtn = document.querySelector(".reset-btn")
const display = document.querySelector(".number-display")


let displayValue = "0"
let storedCalculation = []

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

const populateDisplay = number => { 
  if(displayValue == "0") displayValue = ""
  displayValue = display.innerText = displayValue + number
}

const resetDisplay = () => {
  displayValue = display.innerText = "0"
}

const processNumberBtn = value => {
  if(value == "." && displayValue.indexOf(".") != -1) return
  if(storedCalculation.length == 2 && displayValue == storedCalculation[0]) resetDisplay()
  populateDisplay(value)
} 

const storeOperatorAndDisplay = (operator, display) => {
  storedCalculation.push(display)
  storedCalculation.push(operator)
}

const processOperatorBtn = operator => {
  if(storedCalculation.length == 0){
    storeOperatorAndDisplay(operator, displayValue)
  }
  if (storedCalculation.length == 2 && storedCalculation[0] != displayValue){
    calculate()
    storeOperatorAndDisplay(operator, displayValue)
  }
  if (storedCalculation.length == 2){
    storedCalculation[1] = operator
  }
  console.log(storedCalculation)
}

const calculate = () => {
  let result = operate(storedCalculation[1],parseFloat(storedCalculation[0]),parseFloat(displayValue))
  reset()
  populateDisplay(result)
}

const processEqualsBtn = () =>{
  if (storedCalculation.length == 2){
    calculate()
  }
}

const reset = () => {
  storedCalculation = []
  resetDisplay()
}

for(btn of numberBtns){
  btn.addEventListener("click", e => processNumberBtn(e.target.value))
}

for(btn of operatorBtns){
  btn.addEventListener("click", e => processOperatorBtn(e.target.value))
}

equalsBtn.addEventListener("click", processEqualsBtn)

resetBtn.addEventListener("click", reset)



