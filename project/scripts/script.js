function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = '840506ed917a4d36b2344516241802'; // Your WeatherAPI API key

    // Check if location is provided
    if (locationInput.trim() === '') {
        alert('Please enter a location');
        return;
    }

    // Fetch weather data from API
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}&aqi=no`)
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
    const { location, current } = data;

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
