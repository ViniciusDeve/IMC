const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficlight = (event) => {
    
    stopAutomatic();
    turnOn[event.target.id]();
    
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changeColor = () => {
    const colors = ['red', 'green', 'yellow'];
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const time = () => {
    
    if (colorIndex === 0){
        return 3000;
    }else if (colorIndex === 1){
        return 6000;
    }else {
        return 500;
    }

}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOn = {
     
    'red': () => img.src = './assets/vermelho.png',
    'yellow': () => img.src = './assets/amarelo.png',
    'green': () => img.src = './assets/verde.png',  
    'automatic': () => intervalId = setInterval(changeColor, time())

}

buttons.addEventListener('click', trafficlight);