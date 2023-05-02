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

//  // I defined my array of things for the cat to say
// const kittyTalk = [
//   "...human, why you taking pictures of me?..",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...",
// ];

//  // I initiate the control panel for my for loop
// for (let i = 0; i < 21; i++) {
//     // I create a conditional of even
//   if (i % 2 === 0) {
//      // I define a variable that takes items from the array and randomizes them
//     const randomTalk = Math.floor(Math.random() * kittyTalk.length);
//      // I print out the array items randomly per even number
//     console.log(kittyTalk[randomTalk]);
//   } else {
//      // anything else, I log the hard coded message
//     console.log("love me, Pet me! HSSSSSS!");
//   }
// }

// =======================================================================

// Find the Median

// const nums = [
//   14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
//   17, 12, 71, 18, 15, 12,
// ];

// // I sort the array into numerical order
// nums.sort();

// // I define a variable that will display the median when I console log
// let median;

// // I create a conditional to check for odd or even
// if (nums.length % 2 !== 0) {
//   // In the case of odd
//   // I define a variable that targets the middle object in the array
//   let middleValue = Math.floor(nums.length / 2);
//   // I set that the middleValue to the median variable
//   median = nums[middleValue];
//   // In the case of even
// } else {
//   // to find the middleValue
//   let middleValue = Math.floor(nums.length / 2);
//   // to find the median
//   median = (nums[middleValue] + nums[middleValue - 1]) / 2;
// }
// // I log the median value of the array in the console log
// console.log(median);

// =======================================================================

// Alien Attire

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   let kristynsShoe = kristynsCloset[0];
//   kristynsCloset.shift();
  
//   thomsCloset[2].push(kristynsShoe)
//   console.log(kristynsCloset)
//   console.log(thomsCloset)

// Dress Up

//combine the arrays into a single container
const outfits = [...kristynsCloset, ...thomsCloset[1]];

// define a empty array where out outfit choices will be stored
const randomOutfit = [];

// iterate over every item in the new outfits array
for (let i = 0; i < 3; i++) {
    // I create a random index for each item in the array
    const outfitItems = Math.floor(Math.random() * outfits.length);
    // I now push the random items to the new array to make my list of outfit outcomes
    randomOutfit.push(outfits[outfitItems]);
}

// I create a variable that prevents duplicate prints of items
const noDuplicates = randomOutfit.filter((item, index) => randomOutfit.indexOf(item) === index);
// I console log my three items
console.log(noDuplicates)

