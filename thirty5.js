/* Animals: think of at least three animal ,that have a common characterstic
.store the names of these animals in a listand then use for loop  to print out
the names of each animal.modify ur programm to print a statement about each animal.such as A dog would make
a great pet.add a line at the end of ur programm stating what these animal have in common .u could print a sentence .
*/
var animals = ["cat", "dog", "tiger"];
animals.forEach(function (animals) {
    if (animals === "cat") {
        console.log("".concat(animals, " is a great pet"));
    }
    else if (animals === "dog") {
        console.log("".concat(animals, " is faithful animal"));
    }
    else {
        console.log("".concat(animals, " is wild animal"));
    }
});
console.log("all animals are created by God");