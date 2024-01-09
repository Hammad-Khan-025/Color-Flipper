const colors = ["green", "red", "yellow", "pink", "blueviolet", "orange", "blue"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');
const bgBody = document.querySelector('.div-body')

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();

    bgBody.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);
