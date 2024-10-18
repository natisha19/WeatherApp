document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '8cfba885284fb8f79e7a968ca9cda528'; //OpenWeatherMap API key
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById('weather').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather').innerHTML = '<p>City not found!</p>';
            }
        });
});
