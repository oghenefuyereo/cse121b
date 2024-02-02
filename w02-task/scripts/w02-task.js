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
const removedFirstFood = favFoods.shift();
foodElement.innerHTML = `Removed First Element: ${removedFirstFood}<br>`;
foodElement.innerHTML += `Remaining Foods: ${favFoods.join(', ')}`;

// Remove the last element
const removedLastFood = favFoods.pop();
foodElement.innerHTML += `<br><br>Removed Last Element: ${removedLastFood}<br>`;
foodElement.innerHTML += `Remaining Foods: ${favFoods.join(', ')}`;
