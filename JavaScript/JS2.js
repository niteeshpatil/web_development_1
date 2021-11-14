//while loop
// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }
// const code = "niteesh@1";
// let guess = prompt("enter the code...");
// while (guess !== code) {
//     guess = prompt("enter the correct  code...");
// }
// console.log("U entered correct password");

// let input = prompt("Hey hello!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying") {
//         break;
//     }
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));

// const targetNum = Math.floor(Math.random() * maximum);
// let guess = prompt(targetNum);
// while (guess != targetNum) {

//     if (guess > targetNum) {
//         guess = prompt("enter the smaller number");
//     }
//     else
//         guess = prompt("enter the larger number");

// }
// const Names = ['Niteesh', 'sateesh', 'hello']

// for (let i = 0; i < Names.length; i++) {
//     console.log(`Visit Niteesh.com/r${Names[i]}`)
// }

// for (let char of "hello world") {
//     console.log(char);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let int of numbers) {
//     console.log(int * int)
// }
const testscorce = { niteesh: 30, sateesh: 40 }

let total = 0;
let scorce = Object.values(testscorce)
for (let score of scorce) {
    total += score;
}
console.log(total / scorce.length)
