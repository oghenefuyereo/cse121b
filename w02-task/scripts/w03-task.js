/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
// Function Declaration - addNumbers function
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
// Add a "click" event listener to the HTML button with an ID of addNumbers
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
};

// Function Expression - subtractNumbers function
const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// Add a "click" event listener to the HTML button with an ID of subtractNumbers
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

// Arrow Functions - multiplyNumbers function
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

// Add a "click" event listener to the HTML button with an ID of multiplyNumbers
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Division Feature - Using a combination of function declaration types
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Selection Structures
document.querySelector('#getTotalDue').addEventListener('click', () => {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let membershipCheckbox = document.querySelector('#membership').checked;
    let discount = membershipCheckbox ? subtotal * 0.2 : 0;
    let total = subtotal - discount;
    document.querySelector('#total').innerText = `Total Due: $${total.toFixed(2)}`;
});
/* Decision Structure */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// ARRAY METHODS - Functional Programming

// Output Source Array
document.querySelector('#array').innerText = numbersArray;

// Output Odds Only Array
document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 !== 0);

// Output Evens Only Array
document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0);

// Output Sum of Org. Array
document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number);

// Output Multiplied by 2 Array
document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2);

// Output Sum of Multiplied by 2 Array
document.querySelector('#sumOfMultiplied').innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
