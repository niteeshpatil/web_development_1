const button = document.querySelector('button');
const container = document.querySelector('#container');
button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

container.addEventListener('click', function () {
    container.classList.toggle('hide');
})