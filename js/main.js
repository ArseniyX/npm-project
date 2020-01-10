const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3));
console.log('Class: , Line:   ', );
console.log('Class: , Line: 6  ', );



const p = document.querySelector('p');
const colorLeft = document.querySelector('.input-left');
const colorRight = document.querySelector('.input-right');
const bodyStyle = document.body.style;

window.onload = () => {
    bodyStyle.background = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let setGradient = () => {
    bodyStyle.background = `linear-gradient(to right, ${colorLeft.value}, ${colorRight.value})`;
    p.textContent = bodyStyle.background;
};