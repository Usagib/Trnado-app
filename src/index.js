import './view/css/style.css';
import header from './view/header.js';
import content from './view/content.js';

const main = document.getElementById('main-container');
const weatherContainer = document.createElement('div');
weatherContainer.setAttribute('class', 'container');
main.innerHTML = header;
weatherContainer.innerHTML = content;
main.appendChild(weatherContainer);


const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('city');
const apiKey = '48edfbeefc2786e75b112e9fc0536b00';
const degrees = document.getElementsByName('degree');
let unit = 'metric';


form.addEventListener('submit', e => {
  e.preventDefault();

  degrees.forEach((metric) => {
    if (metric.checked) unit = metric.value;
  });

  const cityName = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;
  fetch(url, { mode: 'cors' }).then(response => response.json())
    .then(data => {
      const {
        weather, main, wind, sys, name,
      } = data;

      const showCity = document.getElementById('showCity');
      const showTemperature = document.getElementById('showTemp');
      const showWeather = document.getElementById('showWeather');
      const showMinMax = document.getElementById('showMinMax');
      const showWind = document.getElementById('showWind');
      const showHumidity = document.getElementById('showHumid');

      let symbol = null;
      if (unit === 'metric') {
        symbol = 'C°';
      } else {
        symbol = 'F°';
      }

      showCity.innerText = `${name}, ${sys.country}`;
      showTemperature.innerText = `${main.temp} ${symbol} : Feels like: ${main.feels_like}`;
      showWeather.innerText = `${weather[0].main}, ${weather[0].description}`;
      showMinMax.innerText = `Max: ${main.temp_max}, Min: ${main.temp_min}`;
      showWind.innerText = `Wind speed: ${wind.speed} mph`;
      showHumidity.innerText = `Humidity: ${main.humidity}`;

      switch (weather[0].main) {
        case 'Clouds':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1581788945370-3fe92ade72db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        case 'Rain':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        default:
          return false;
      }

      switch (weather[0].description) {
        case 'clear sky':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1506588345361-5e12b7840845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        case 'broken clouds':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1474218861938-d6b14818c8e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        case 'scattered clouds':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1543226862-39202f29696f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        case 'shower rain':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        case 'thunderstorm':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        case 'snow':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1465220183275-1faa863377e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        case 'mist':
          document.body.style.background = "#ffffff url('https://images.unsplash.com/photo-1438803235109-d737bc3129ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80') no-repeat center center fixed";
          document.body.style.backgroundSize = "cover";
          break;
        default:
          return false;
      }
      return true;
    })
    .catch(() => {
      alert('We could not locate the city'); // eslint-disable-line no-alert
    });
});
