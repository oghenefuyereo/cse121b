// Function Declaration - Addition Feature
function add(number1, number2) {
    return number1 + number2;
}

// Function Declaration - Add Numbers Feature
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Function Expression - Subtraction Feature
const subtract = function (number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Arrow Functions - Multiplication Feature
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Function Declaration and Arrow Function - Division Feature
function divide(number1, number2) {
    return number1 / number2;
}

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Selection Structures - Get Total Due Button
document.querySelector('#getTotalDue').addEventListener('click', () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let membershipCheckbox = document.querySelector('#membership').checked;

    if (membershipCheckbox) {
        subtotal *= 0.8; // Applying 20% discount
    }

    let total = subtotal.toFixed(2);
    document.querySelector('#total').textContent = `Total Due: $${total}`;
});

// Array Methods - Functional Programming
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray;

const odds = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = odds;

const evens = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evens;

const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

const multiplied = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multiplied;

const sumOfMultiplied = multiplied.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
