const para = document.querySelector("#show-weather");
const humidity = document.querySelector("#show-humidity");
const feeling = document.querySelector("#show-feeling");
const wind = document.querySelector("#show-wind");
const country = document.querySelector("#show-country");
const province = document.querySelector("#show-province");
const cityName = document.querySelector("#show-city");

async function getWeather(event) {
  event.preventDefault();

  const city = document.querySelector("#city-input").value;
  const button = document.querySelector("button");
   try {
    const response = await axios(
      `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`
    );

    console.log(response.data);

    para.innerHTML =
      "Temperature: " + response.data.current.temp_c + "°C";

    humidity.innerHTML =
      "Humidity: " + response.data.current.humidity + "%";

    feeling.innerHTML =
      "Feeling: " + response.data.current.feelslike_c + "°C";

    wind.innerHTML =
      "Wind: " + response.data.current.wind_kph + " kph";

    country.innerHTML =
      "Country: " + response.data.location.country;

    province.innerHTML =
      "Province: " + response.data.location.region;

    cityName.innerHTML =
      "City: " + response.data.location.name;

  } catch (error) {
    console.log(error);

    para.innerHTML = "Weather not found";
  }
  }