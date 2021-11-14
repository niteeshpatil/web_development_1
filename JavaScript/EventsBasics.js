const btn2 = document.querySelector('#V2');


btn2.onclick = function () {
    console.log("hello i am btn2")
}

btn2.onmouseenter = function () {
    console.log("u are on this content")
}

const btn3 = document.querySelector('#V3');
btn3.addEventListener('mouseup', function () {
    console.log("i am btn3")
})

function twist() {
    console.log("Twist");
}

function shout() {
    console.log("shout!");
}

const twistShoutbtn = document.querySelector('#V4');

// twistShoutbtn.onclick = shout;
// twistShoutbtn.onclick = twist;

twistShoutbtn.addEventListener('click', shout, { once: true });
twistShoutbtn.addEventListener('click', twist);



