// function greet(Person) {
//     console.log(`Hi ${Person}!`);
// }


// function repeat(msg, num) {
//     let result = " ";
//     for (let i = 0; i < num; i++) {
//         result += msg;
//     }
//     console.log(result);
// }


// function multiplay(x, y) {
//     return x * y;
// }

// function lastElement(a) {
//     if (a == 0)
//         return null;
//     return a[a.length - 1];
// }

// function capitalize(msg) {
//     let result = msg[0].toUpperCase();
//     for (let i = 1; i < msg.length; i++) {
//         result += msg[i];
//     }
//     return result;
// }

// function sumArray(a) {
//     let result = 0;
//     for (let i = 0; i < a.length; i++) {
//         result += a[i];
//     }
//     return result;
// }

// function returnDay(num) {
//     if (num > 7 || num < 1) {
//         return null;
//     }

//     if (num == 1) {
//         return "Monday";
//     }
//     else if (num == 2) {
//         return "Tuesday";
//     }
//     else if (num == 3) {
//         return "Wendnesday";
//     }
//     else if (num == 4) {
//         return "Thursday";
//     }
//     else if (num == 5) {
//         return "Friday";
//     }
//     else if (num == 6) {
//         return "Saturday";
//     }
//     else if (num == 7) {
//         return "Sunday";
//     }
// }


//higer order function
// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// //defing the methods
// const mymath = {
//     PI: 3.1415,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }
// // mymath
// // {PI: 3.1415, square: ƒ, cube: ƒ}
// // mymath.cube(3);
// // 27
// // mymath.square(7);
// // 49


// const cat = {
//     name: 'cabishi',
//     color: 'grey',
//     meow() {
//         console.log("Meow Meow Meow");
//         console.log(this.name)
//     }
// }

// const hen =
// {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount++;
//         return "EGG"
//     }
// }

//try catch

// try {
//     hello.toUpperCase();
// }
// catch {
//     console.log("Error!");
// }

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3))
//     }
//     catch (e) {
//         console.log(e);
//         console.log("Please pass a string next time")
//     }
// }