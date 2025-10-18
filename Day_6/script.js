// Closure counter function
function createCalculator() {
    let result = 0; // internal state

    return {
        add: (x) => { result += x; return result; },
        subtract: (x) => { result -= x; return result; },
        multiply: (x) => { result *= x; return result; },
        divide: (x) => { 
            if (x === 0) {
                alert("Cannot divide by zero!");
                return result;
            }
            result /= x; 
            return result; 
        },
        reset: () => { result = 0; return result; },
        getResult: () => result
    };
}

// Create calculator instance
const calculator = createCalculator();

// DOM Elements
const inputValue = document.getElementById('inputValue');
const resultDisplay = document.getElementById('result');

// Helper function to parse input
function getInput() {
    return parseFloat(inputValue.value) || 0;
}

// Button functions
function add() {
    const val = getInput();
    resultDisplay.textContent = calculator.add(val);
}

function subtract() {
    const val = getInput();
    resultDisplay.textContent = calculator.subtract(val);
}

function multiply() {
    const val = getInput();
    resultDisplay.textContent = calculator.multiply(val);
}

function divide() {
    const val = getInput();
    resultDisplay.textContent = calculator.divide(val);
}

function reset() {
    resultDisplay.textContent = calculator.reset();
    inputValue.value = '';
}
