const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
document.body.style.backgroundColor = `rgb(${7}, ${145}, ${226})`;

btn.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.innerText = `rgb(${r},${g},${b})`;
})
