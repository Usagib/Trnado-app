import './view/css/style.css';
import header from './view/header.js';
import content from './view/content.js';

const main = document.getElementById('main-container');
main.innerHTML = header;
const weatherContainer = document.createElement('div');
weatherContainer.setAttribute('class', 'container');
weatherContainer.innerHTML = content;
main.appendChild(weatherContainer);

const apiKey = '48edfbeefc2786e75b112e9fc0536b00';
