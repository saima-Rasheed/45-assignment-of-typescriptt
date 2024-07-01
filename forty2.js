"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Great Magicians:start with a copy of ur program from exc 39.write a function
called make_great()that modifies the array of magicians by adding  the pharase
the Great to each magician'name.call show_magicians()to see that the list
has actually been modified.*/
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
function show_magician(magicians) {
    console.log(magicians);
}
var magicians = ['Arifa', 'Shabana', 'Faheem', 'Hayat', 'Shehzad', 'Rose'];
make_great(magicians);
show_magician(magicians);
