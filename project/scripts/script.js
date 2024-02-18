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

    // Display air quality data if available
    if (current.air_quality) {
        const airQualityElement = document.createElement('div');
        airQualityElement.innerHTML = `
            <h3>Air Quality</h3>
            <p>CO: ${current.air_quality.co}</p>
            <p>NO2: ${current.air_quality.no2}</p>
            <p>O3: ${current.air_quality.o3}</p>
            <p>SO2: ${current.air_quality.so2}</p>
            <p>PM2.5: ${current.air_quality.pm2_5}</p>
            <p>PM10: ${current.air_quality.pm10}</p>
            <p>US EPA Index: ${current.air_quality['us-epa-index']}</p>
            <p>GB DEFRA Index: ${current.air_quality['gb-defra-index']}</p>
        `;
        weatherDisplay.appendChild(airQualityElement);
    }
}

// Sample data from the WeatherAPI response
const sampleData = {
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1708229648,
        "localtime": "2024-02-18 4:14"
    },
    "current": {
        "last_updated_epoch": 1708228800,
        "last_updated": "2024-02-18 04:00",
        "temp_c": 11.0,
        "temp_f": 51.8,
        "is_day": 0,
        "condition": {
            "text": "Light rain",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/296.png",
            "code": 1183
        },
        "wind_mph": 9.4,
        "wind_kph": 15.1,
        "wind_degree": 210,
        "wind_dir": "SSW",
        "pressure_mb": 1024.0,
        "pressure_in": 30.24,
        "precip_mm": 1.28,
        "precip_in": 0.05,
        "humidity": 94,
        "cloud": 100,
        "feelslike_c": 9.0,
        "feelslike_f": 48.2,
        "vis_km": 8.0,
        "vis_miles": 4.0,
        "uv": 1.0,
        "gust_mph": 15.0,
        "gust_kph": 24.1,
        "air_quality": {
            "co": 237.0,
            "no2": 8.7,
            "o3": 65.1,
            "so2": 3.7,
            "pm2_5": 2.7,
            "pm10": 3.1,
            "us-epa-index": 1,
            "gb-defra-index": 1
        }
    }
};

// Display sample data
displayWeather(sampleData);
