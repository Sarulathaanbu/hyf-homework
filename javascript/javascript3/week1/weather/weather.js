const city = document.getElementById('city-name');
const button = document.getElementById('btn');
const msg = document.getElementById('errorMsg')
const weather = document.querySelector(".weather")
button.addEventListener('click', () => {
  if (city.value === "") {
    msg.innerHTML = 'Please enter the city';
    return false;
  } else {
    const cityName = city.value;
    url =
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName} &appid=19a22c19916855a97938c4084c52be58`;
    fetch(url)
      .then(response => response.json())
      .then(data => renderCityWeatherInfo(data));
  }
});

function renderCityWeatherInfo(data) {

  weather.innerHTML =
    ` Temperature: ${Math.floor(data.main.temp - 273)} F ${data.weather[0].description} <BR/>
            Icon for the weather type: <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"> <BR/>
            Wind speed: ${data.wind.speed} <BR/>
            How clowdy it is: ${data.clouds.all}%<BR/>
            sunrise is: ${data.sys.sunrise} and sunset is: ${data.sys.sunset}`
}
