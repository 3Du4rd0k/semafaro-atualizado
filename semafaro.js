const img = document.getElementById('img'); // documento obter elemento por id
const buttons = document.getElementById('buttons');
let colorindex = 0;
let intervalid = null;

const trafficlight = ( event ) => {
    stopAutomatic();
    turnon[event.target.id]();
}

const nextindex = () => colorindex = colorindex < 2 ? ++colorindex : 0;

const changecolor = () => {
    const colors =['red', 'yellow', 'green']
    const color = colors[colorindex];
    turnon[color]();
    nextindex();
}

const stopAutomatic = () => {
    clearInterval (intervalid);
}

const turnon = {
    'red' : () => img.src = './img/vermelho.png',
    'yellow' : () => img.src = './img/amarelo.png',
    'green' : () => img.src = './img/verde.png',
    'automatic' : () => intervalid = setInterval( changecolor, 1000 )
}

buttons.addEventListener('click', trafficlight);