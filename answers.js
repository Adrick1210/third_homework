// Easy Going

// HTML and CSS Comfort Level: 4

// =======================================================================

// Reps
// for (let i = 1; i < 21; i++) {
//   console.log(i);
// }

// =======================================================================

// Get Even
// for (let i = 0; i < 202; i += 2) {
//     console.log(i)
// }

// =======================================================================

// fizzBuzz

// for (let i = 1; i < 100; i++) {
//   if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// =======================================================================

// Wild Wild Life

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// plantee.splice(2, 1, 5001);

// wolfy.splice(3, 1, "Gotham City");
// wolfy.splice(0, 1, "gameboy");

// dart.push("Hawkins");

// console.log(wolfy, sharky, plantee, porgee, dart);

// =======================================================================

// Yell at the ninja turtles

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// const yellTurtle = [];

// for (let name of ninjaTurtles) {
//    const upper = name.toUpperCase();
//    yellTurtle.push(upper);
// }
// console.log(yellTurtle);

// For this exercise I researched stack overflow for the answer I was
// looking for. I found this method and decided to decipher and try it out.
// In my solution, I took my original array, and also created a empty array
// of yellTurtle. (Had to refresh on for of loops) I designated name as the
// value of each item in the original array. I created a new variable of
// upper that invokes the toUpperCase function. By doing so, I took the items
// from ninjaTurtle and converted them to uppercase and placed them inside of the
// new array yellTurtle. (Needed a place for my thoughts and hope I was on the
// correct thought process for this solution)

// =======================================================================

// Methods Revisited

// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
//   "Cloud Atlas",
//   "The Usual Suspects",
//   "Toy Story",
//   "Conan the Barbarian",
//   "Titanic",
//   "Harry Potter",
//   "Fried Green Tomatoes",
//   "Volver",
//   "Oculus",
//   "Seven",
//   "Black Panther",
//   "Harry Potter",
//   "Imitation of Life",
//   "Snatch",
//   "Fast and Furious",
// ];

// console.log(favMovies[8]);

// // 1.
// favMovies.sort();
// console.log(favMovies)

// // 2.
// favMovies.pop();
// console.log(favMovies);

// // 3.
// favMovies.push('Guardians of the Galaxy');
// console.log(favMovies);

// // 4.
// favMovies.reverse();
// console.log(favMovies);

// // 5.
// favMovies.shift();
// console.log(favMovies);

// // 6.
// favMovies.unshift('Scott Pilgrim', 'Monty Python', 'The Adam Project')
// console.log(favMovies);

// // 7.
// favMovies.splice(3, 1, 'Avatar');
// console.log(favMovies);

// // 8.
// let someMovies = favMovies.slice(11,19);
// console.log(someMovies);

// console.log(favMovies[18])

// When trying to console log the index of 'Fast and the Furious', after removing the object
// with pop, I used the index where it would have been and it logged 'undefined'.

// =======================================================================

// Where is Waldo?

// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];

// whereIsWaldo.splice(1, 1, " ");
// console.log(whereIsWaldo);

// whereIsWaldo[2].splice(2, 1, "No One");
// console.log(whereIsWaldo)

// console.log(whereIsWaldo[3][1][1]);

// =======================================================================

// Excited Kitten

// I defined my array of things for the cat to say
// const kittyTalk = [
//   "...human, why you taking pictures of me?..",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...",
// ];

//  I initiate the control panel for my for loop
// for (let i = 0; i < 21; i++) {
//      I define a conditional of if even
//   if (i % 2 === 0) {
//        I define a variable that takes items from the array and randomizes them
//     const randomTalk = Math.floor(Math.random() * kittyTalk.length);
//        I print out the array items randomly per even number
//     console.log(kittyTalk[randomTalk]);
//   } else {
//        anything else, I log the hard coded message
//     console.log("love me, Pet me! HSSSSSS!");
//   }
// }

// =======================================================================
