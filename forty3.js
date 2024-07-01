"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* unchanged magicians;start with ur work from exc 40 .call the function
make_great()with a copy of the array of magician's names.Because the original
array will b unchnged,return the new array  and store it in separate array.call
show_magicians() with each array to show thatu have one array of the original names
and one array with the Great added to each magicians's name.*/
var magicians = ["Aalto", "Simo", "Dvid", "Balducci"];
function show_magicians(magicians) {
    console.log(magicians);
}
function makeGreat(magicians) {
    return magicians.map(function (magicians) { return "".concat(magicians, " the Great"); });
}
var magicianscopy = ["Aalto", "Simo", "Dvid", "Balducci"];
var greatMagicians = makeGreat(magicianscopy);
console.log("\nGreat Magicians");
show_magicians(greatMagicians);
