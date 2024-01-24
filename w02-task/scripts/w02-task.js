/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
const fullName = 'Oghenefuyere Okiotorhoro';

/* Step 2 - Variables */
const currentYear = new Date().getFullYear();
const nameElement = document.getElementById('name');
const profilePicture = "images/oghenefuyere.jpg";

/* Step 3 - Element Variables */
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ['Rice', 'Jollof', 'Beans', 'Akara', 'Eba', 'Fried Rice'];
const newFavoriteFood = 'NewFood';
favFoods.push(newFavoriteFood);

// Remove the first element
favFoods.shift();
foodElement.innerHTML = favFoods.join(', '); // Use comma for a cleaner display

// Remove the last element
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`; // Add <br> for the final join
