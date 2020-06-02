import './view/css/style.css';
const container = document.getElementById('container');
container.classList.add("bg-primary");
container.setAttribute("style", "height:100px;")
container.innerText = 'Hello webpack';
