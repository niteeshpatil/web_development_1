// console.log("hello from our fist");
// let total = 3 + 4;


// let random=Math.random();
// if (random<0.5) {
//     console.log("Num is less the 0.5");
// }


// const dayOfWeek = (Math.random() * 6);


// if (Math.floor(dayOfWeek % 7) == 0) {
//     console.log("SUN");
// }
// else if (Math.floor(dayOfWeek % 7) == 1) {
//     console.log("Mon");
// }
// else if (Math.floor(dayOfWeek % 7) == 2) {
//     console.log("Tue");
// }
// else if (Math.floor(dayOfWeek % 7) == 3) {
//     console.log("Whe");
// }
// else if (Math.floor(dayOfWeek % 7) == 4) {
//     console.log("The");
// }
// else if (Math.floor(dayOfWeek % 7) == 5) {
//     console.log("Fri");
// }
// else if (Math.floor(dayOfWeek % 7) == 6) {
//     console.log("Sat");
// }



// let password = prompt("enter a Password");

// if (password) {
//     console.log("valid Password");
// }
// else {
//     prompt("enter a valid Password");
// }

// const password = prompt("Enter The Password");
// if
//     (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password");
// }
// else {
//     prompt("Invalid Password!");
// }

// 0-5free
// 5-18 $10
// 18-60 $20
// 60++ $10

// const age = prompt("enter your age");

// if (age < 5 && age > 0) {
//     console.log("FREE");
// }
// else if ((age >= 5 && age <= 18) || (age >= 60)) {
//     console.log("$10");
// }
// else {
//     console.log("$20");
// }


// const firstname = prompt("Enter the first Name");

// while (!firstname) {
//     firstname = prompt("Enter the first Name");
// }

// const day = prompt("Choice day of ur exam from 1-10th of july")

// switch (day) 
// {
//     case '1':
//         console.log("ON 1-7-2021");
//         break;
//     case '2':
//         console.log("ON 2-7-2021");
//         break;
//     case '3':
//         console.log("ON 3-7-2021");
//         break;
//     case '4':
//         console.log("ON 4-7-2021");
//         break;
//     case '5':
//         console.log("ON 5-7-2021");
//         break;
//     case '6':
//         console.log("ON 6-7-2021");
//         break;
//     case '7':
//         console.log("ON 7-7-2021");
//         break;
//     case '8':
//         console.log("ON 8-7-2021");
//         break;
//     case '9':
//         console.log("ON 9-7-2021");
//         break;
//     case '10':
//         console.log("ON 10-7-2021");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// } 

// for (let i = 1; i <= 11; i++) {
//     console.log(i);
// }

// i*=10 i-- i-=10 i%=2
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());

// }


// for (let i = 1; i <= 10; i++) {
//    console.log(i);
//    for (let j = 1; j <= i; j++) {
//       console.log(1);
//    }
// }

const seatingChart = [
   ["Niteesh", "cat"], ["sateesh", "dog"], ["rahul", "Rabit"], ["ravi", "cow"]

]

for (let i = 0; i < seatingChart.length; i++) {
   const row = seatingChart[i];
   for (let j = 0; j < row.length; j++) {
      console.log(row[j]);
   }
}