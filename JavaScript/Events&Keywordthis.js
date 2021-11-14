const randomeColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}


const buttons = document.querySelectorAll('button');


for (let button of buttons) {
    button.style.backgroundColor = randomeColor();
    button.style.color = randomeColor();
    button.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomeColor();

}