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

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee.splice(2, 1, 5001);

wolfy.splice(3, 1, "Gotham City");
wolfy.splice(0, 1, "gameboy");

dart.push("Hawkins");

console.log(wolfy, sharky, plantee, porgee, dart);

// =======================================================================