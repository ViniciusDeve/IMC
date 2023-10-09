const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isBroken() {
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn() {

    if(!isBroken()) {
        lamp.src = './assets/ligada.jpg'
    }

}

function lampOff() {

    if(!isBroken()) {
        lamp.src = './assets/desligada.jpg'
    }

}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

lamp.addEventListener('dblclick', () => {
    lamp.src = './assets/quebrada.jpg';
})