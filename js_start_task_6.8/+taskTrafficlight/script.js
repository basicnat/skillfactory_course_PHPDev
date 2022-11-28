const greenLight = document.querySelector('#green');
const yellowLight = document.querySelector('#yellow');
const redLight = document.querySelector('#red');

const trafficLights = document.querySelector('.trafficLights')

function makeGreen() {
    yellowLight.style.background = ('black');
    redLight.style.background = ('black');
    greenLight.style.background = ('green');
    trafficLights.removeEventListener('click', makeGreen);
    trafficLights.addEventListener('click', makeYellow);
}

function makeYellow() {
    greenLight.style.background = ('black');
    yellowLight.style.background = ('yellow');
    redLight.style.background = ('black');
    trafficLights.removeEventListener('click', makeYellow);
    trafficLights.addEventListener('click', makeRed)
}

function makeRed() {
    greenLight.style.background = ('black');
    yellowLight.style.background = ('black');
    redLight.style.background = ('red');
    trafficLights.removeEventListener('click', makeRed);
    trafficLights.addEventListener('click', makeGreen)
}

trafficLights.addEventListener('click', makeGreen)