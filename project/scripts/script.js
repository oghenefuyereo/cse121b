function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = '8c69e35966006ee4625d59e5f1bed11f';

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

    // Clear previous weather data
    weatherDisplay.innerHTML = '';

    // Display location name
    const locationElement = document.createElement('h2');
    locationElement.textContent = `Weather in ${data.name}, ${data.sys.country}`;
    weatherDisplay.appendChild(locationElement);

    // Display weather description and temperature
    const weatherDescElement = document.createElement('p');
    weatherDescElement.textContent = `Condition: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
    weatherDisplay.appendChild(weatherDescElement);

    // Display additional weather details
    const detailsElement = document.createElement('div');
    detailsElement.innerHTML = `
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
    weatherDisplay.appendChild(detailsElement);
}
