// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function with divisor check
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

// Main calculate function
function calculate() {
    // Get elements using getElementById()
    const num1Input = document.getElementById('number1');
    const num2Input = document.getElementById('number2');
    const operatorSelect = document.getElementById('operator');
    const resultDiv = document.getElementById('result');
    const calcButton = document.querySelector('.calculate-btn');
    
    // Get values
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;
    
    // Update button text based on operator
    const operatorNames = {
        '+': 'Add',
        '-': 'Subtract',
        '*': 'Multiply',
        '/': 'Divide'
    };
    calcButton.textContent = operatorNames[operator];
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Error: Please enter valid numbers!';
        return;
    }
    
    let result;
    
    try {
        // Perform calculation based on operator
        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                throw new Error('Invalid operator');
        }
        
        // Round to 2 decimal places
        result = Math.round(result * 100) / 100;
        
        // Display result
        resultDiv.textContent = `Result = ${result}`;
        
    } catch (error) {
        // Handle errors (e.g., division by zero)
        resultDiv.textContent = `Error: ${error.message}`;
    }
}

// Update button text when operator changes
document.addEventListener('DOMContentLoaded', function() {
    const operatorSelect = document.getElementById('operator');
    const calcButton = document.querySelector('.calculate-btn');
    
    operatorSelect.addEventListener('change', function() {
        const operatorNames = {
            '+': 'Add',
            '-': 'Subtract',
            '*': 'Multiply',
            '/': 'Divide'
        };
        calcButton.textContent = operatorNames[this.value];
    });
});