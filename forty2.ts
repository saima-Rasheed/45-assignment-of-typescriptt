import { clearScreenDown } from "readline";

/*Great Magicians:start with a copy of ur program from exc 39.write a function
called make_great()that modifies the array of magicians by adding  the pharase
the Great to each magician'name.call show_magicians()to see that the list 
has actually been modified.*/
function make_great(magicians:string[]){
    for (let i = 0;  i < magicians.length; i++){
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

function show_magician(magicians: string[]){
    console.log(magicians);
}
let magicians:string[]= ['Arifa','Shabana','Faheem','Hayat','Shehzad','Rose'];
make_great(magicians);
show_magician(magicians);
