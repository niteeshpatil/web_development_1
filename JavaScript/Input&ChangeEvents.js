const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// h1 = "Enter Your Username";
// input.addEventListener('change', function (e) {
//     console.log("kahf")
// })

// input.addEventListener('input', function (e) {
//     console.log("typing")
//     h1.innerText = input.value;
//     console.log(e);
// })

input.addEventListener('input', function (e) {
    h1.innerText = "Welcome," + input.value;
    if (input.value == "") {
        h1.innerText = "Enter Your Username";
    }
})
