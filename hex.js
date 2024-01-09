const colors = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "D"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');
const bgBody = document.querySelector('.div-body')

btn.addEventListener('click', () => {
    let hexColor = "#";

    for(let i=0; i<6; i++){
        hexColor += colors[getRandomNumber()];
    }

    bgBody.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);