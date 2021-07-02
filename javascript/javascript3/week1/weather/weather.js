const city = document.getElementById('city-name');
const button = document.getElementById('btn');
const msg = document.getElementById('errorMsg')
const weather = document.querySelector(".weather")
button.addEventListener('click', () => {
  if (city.value === "") {
    msg.innerHTML = 'Please enter the city';

  } else {
    const cityName = city.value;
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName} &appid=19a22c19916855a97938c4084c52be58`;
    fetch(url)
      .then(response => response.json())
      .then(data => renderCityWeatherInfo(data));
  }
});

function renderCityWeatherInfo(data) {
  const cityName = city.value;
  document.querySelector('.city').innerText = `Weather in ${cityName}`;
  document.querySelector('.icon').innerHTML =
    `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
  document.querySelector('.temp').innerText =
    `${Math.floor(data.main.temp - 273)} F ${data.weather[0].description}°C`;
  document.querySelector('.wind').innerHTML =
    `Wind Speed: ${data.wind.speed} m/s`;
  document.querySelector('.humidity').innerHTML =
    `Humidity: ${data.clouds.all}%`;
  document.querySelector('.sunrise').innerHTML = `Sunrise: ${data.sys.sunrise}`;
  document.querySelector('.sunset').innerHTML = `Sunset: ${data.sys.sunset}`;
}
