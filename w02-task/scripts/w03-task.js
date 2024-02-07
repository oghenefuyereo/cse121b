/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

// Function Declaration - Addition Feature
function add(number1, number2) {
    return number1 + number2;
}

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

// Arrow Function - Multiplication Feature
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Function Declaration & Function Expression Combination - Division Feature
function divide(number1, number2) {
    if (number2 === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return number1 / number2;
}

const divideNumbers = function () {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    try {
        document.querySelector('#quotient').value = divide(dividend, divisor);
    } catch (error) {
        alert(error.message);
    }
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Selection Structures
document.querySelector('#getTotal').addEventListener('click', () => {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
    let discount = isMember ? subtotal * 0.2 : 0;
    let total = subtotal - discount;
    document.querySelector('#total').innerText = `Total Due: $${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').innerText = numbersArray;

document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 !== 0);

document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0);

document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number);

document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2);

document.querySelector('#sumOfMultiplied').innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
