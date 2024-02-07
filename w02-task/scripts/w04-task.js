/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Patrick Juarez",
    photo: "images/oghenefuyere.jpg",
    favoriteFoods: [
        'Rice',
        'Tikka Masala',
        'Prioshki',
        'Shrimp',
        'Banana Cream Pie'
    ],
    hobbies: ['Reading', 'Playing guitar', 'Hiking'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

// Add items to placesLived array
myProfile.placesLived.push(
    {
        place: 'San Francisco, CA',
        length: '1 year'
    },
    {
        place: 'New York, NY',
        length: '2 years'
    }
);



/* DOM Manipulation - Output */
document.addEventListener("DOMContentLoaded", function () {
    // Assign name property to HTML element with ID of name
    document.querySelector('#name').textContent = myProfile.name;

    // Assign photo property to src attribute of HTML <img> with ID of photo
    /* Photo with attributes */
    let photoElement = document.querySelector('#photo');
    photoElement.setAttribute('src', myProfile.photo);
    /* Name */
    photoElement.setAttribute('alt', myProfile.name);


    /* Photo with attributes */


    /* Favorite Foods List*/

    let favoriteFoodsList = document.querySelector('#favorite-foods');
    myProfile.favoriteFoods.forEach(food => {
        let li = document.createElement('li');
        li.textContent = food;
        favoriteFoodsList.appendChild(li);
    });


    /* Hobbies List */
    // Create and append list items for hobbies
    let hobbiesList = document.querySelector('#hobbies');
    myProfile.hobbies.forEach(hobby => {
        let li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });
    /* Places Lived DataList */
    // Create and append definition list items for places lived
    let placesLivedList = document.querySelector('#places-lived');
    myProfile.placesLived.forEach(place => {
        let dt = document.createElement('dt');
        dt.textContent = place.place;
        let dd = document.createElement('dd');
        dd.textContent = place.length;
        placesLivedList.appendChild(dt);
        placesLivedList.appendChild(dd);
    });
});
