function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = 'YOUR_ACTUAL_API_KEY'; // Replace 'YOUR_ACTUAL_API_KEY' with your actual API key from OpenWeatherMap

    // Check if location is provided
    if (locationInput.trim() === '') {
        alert('Please enter a location');
        return;
    }

    // Fetch weather data from API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch weather data. Please try again later.');
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const { name, weather, main } = data;

    // Clear previous weather data
    weatherDisplay.innerHTML = '';

    // Display city name
    const cityElement = document.createElement('h2');
    cityElement.textContent = name;
    weatherDisplay.appendChild(cityElement);

    // Display weather description and temperature
    const weatherDescElement = document.createElement('p');
    weatherDescElement.textContent = `Weather: ${weather[0].description}, Temperature: ${main.temp}°C`;
    weatherDisplay.appendChild(weatherDescElement);
}
