const numberButtons = document.querySelectorAll("[data-numberbutton]");
const operands = document.querySelectorAll("[data-operands]");
const displayPreviousOperation = document.querySelector("[data-previousOperation]");
const displayCurrentOperation = document.querySelector("[data-currentOperation]");
const deleteAll = document.querySelector("[data-all-delete]");
const backspace = document.querySelector("[data-backspace]");
const results = document.querySelector("[data-answer]")

let displayNumber = number => {
    if (number.textContent == "."){
        if(!displayCurrentOperation.textContent.includes(".")){
            displayCurrentOperation.textContent += number.textContent
        }
        
    }
    else{
       displayCurrentOperation.textContent += number.textContent;
    }
    
}

let calculatorOperations = (operand, firstNumber, secondNumber) => {
    if (operand == "+") return parseFloat(firstNumber) + parseFloat(secondNumber)
}


numberButtons.forEach(number => {
    number.addEventListener("click", () => {
        displayNumber(number);
    })
})

operands.forEach(element => {
    element.addEventListener("click", () => {
        displayPreviousOperation.textContent = `${displayCurrentOperation.textContent}${element.textContent}`
        displayPreviousOperation.style = "font-size: small;background-color: rgba(80, 114, 102, .75); padding: 3px;"
        displayCurrentOperation.textContent = ''
        
    })
})

backspace.addEventListener("click", () => {
    displayCurrentOperation.textContent = displayCurrentOperation.textContent.slice(0, -1);
})

deleteAll.addEventListener('click', () => {
    displayCurrentOperation.textContent = "";
    displayPreviousOperation.textContent = "";
    displayPreviousOperation.style = "none"
})

results.addEventListener("click", () => {
    const operator = displayPreviousOperation.textContent.slice(-1)
    const first = displayPreviousOperation.textContent.slice(0, -1)
    const second = displayCurrentOperation.textContent
    displayPreviousOperation.textContent = `${displayPreviousOperation.textContent}${displayCurrentOperation.textContent}`;
    displayCurrentOperation.textContent = `${calculatorOperations(operator, first, second)}`;
})

