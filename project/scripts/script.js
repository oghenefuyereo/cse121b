// Function to fetch weather data from the WeatherAPI
function getWeather() {
    // Get the location input value
    const locationInput = document.getElementById('locationInput').value;
    // Replace 'bb8735b4cda34f059d661716241802' with your actual WeatherAPI API key
    const apiKey = 'bb8735b4cda34f059d661716241802';

    // Check if location input is provided
    if (locationInput.trim() === '') {
        alert('Please enter a location');
        return;
    }

    // Fetch weather data from the WeatherAPI
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}&aqi=no`)
        .then(response => {
            // Check if response is ok
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            // Call displayWeather function to display weather data
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch weather data. Please try again later.');
        });
}

// Function to display weather data on the webpage
function displayWeather(data) {
    // Get the weather display element
    const weatherDisplay = document.getElementById('weatherDisplay');
    const { location, current } = data; // Destructure location and current weather data from the API response

    // Clear previous weather data
    weatherDisplay.innerHTML = '';

    // Display location name
    const locationElement = document.createElement('h2');
    locationElement.textContent = `Weather in ${location.name}, ${location.region}, ${location.country}`;
    weatherDisplay.appendChild(locationElement);

    // Display weather description and temperature
    const weatherDescElement = document.createElement('p');
    weatherDescElement.textContent = `Condition: ${current.condition.text}, Temperature: ${current.temp_c}°C`;
    weatherDisplay.appendChild(weatherDescElement);

    // Display additional weather details
    const detailsElement = document.createElement('div');
    detailsElement.innerHTML = `
        <p>Wind: ${current.wind_kph} km/h ${current.wind_dir}</p>
        <p>Pressure: ${current.pressure_mb} mb</p>
        <p>Precipitation: ${current.precip_mm} mm</p>
        <p>Humidity: ${current.humidity}%</p>
        <p>Cloud Cover: ${current.cloud}%</p>
        <p>Feels Like: ${current.feelslike_c}°C</p>
        <p>Visibility: ${current.vis_km} km</p>
        <p>UV Index: ${current.uv}</p>
    `;
    weatherDisplay.appendChild(detailsElement);
}
