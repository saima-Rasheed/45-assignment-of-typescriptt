import { clearScreenDown } from "readline";

/* unchanged magicians;start with ur work from exc 40 .call the function
make_great()with a copy of the array of magician's names.Because the original 
array will b unchnged,return the new array  and store it in separate array.call 
show_magicians() with each array to show thatu have one array of the original names
and one array with the Great added to each magicians's name.*/
const magicians = ["Aalto","Simo","Dvid","Balducci"];
function show_magicians(magicians:any){
    console.log(magicians)

}
function makeGreat(magicians:any){
    return magicians.map((magicians:any) =>`${magicians} the Great`);

}
const magicianscopy =["Aalto","Simo","Dvid","Balducci"];
const greatMagicians = makeGreat(magicianscopy);
console.log("\nGreat Magicians");
show_magicians(greatMagicians);