const apiKey = '5658b8966eb2f537d9d45bcb84e4ea59';  

async function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("City not found or API issue.");
        }
        const data = await response.json();

        const cityName = data.name;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;

        document.getElementById('city-name').innerText = `Weather in ${cityName}`;
        document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
        document.getElementById('description').innerText = `Description: ${description}`;
        document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
        document.getElementById('pressure').innerText = `Pressure: ${pressure} hPa`;
    } catch (error) {
        alert("An error occurred: " + error.message);
        console.error(error);
    }
}
