// Replace with your WeatherAPI key
const apiKey = "xxxx";
const weddingDate = "dates";
const weddingLocation = "city"; 

async function getWeather() {
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${weddingLocation}&dt=${weddingDate}`;

  console.log("API URL:", apiUrl); 

  try {
    const response = await fetch(apiUrl);
    console.log("Response status:", response.status); 

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Weather Data:", data); 

    if (data.forecast && data.forecast.forecastday.length > 0) {
      const forecast = data.forecast.forecastday[0];
      const temp = forecast.day.avgtemp_c; 
      const condition = forecast.day.condition.text; 
      const icon = forecast.day.condition.icon; 

      document.getElementById("weather-info").innerHTML = `
        <img src="${icon}" alt="${condition}">
        <p><strong>${weddingLocation}</strong>: <br> ${condition}, ${temp}°C</p>
      `;
    } else {
      document.getElementById("weather-info").innerText = "Weather data not available for your wedding date.";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-info").innerText = "Unable to load weather data.";
  }
}

getWeather();
