/* magicians: make an array of magicians'name.pass the array to a function
called show _ magicians(),which prints the name of each magician in the array.*/
function show_Magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}
const magiciansNames:string[] = ['Amna','Ayat','Faheem'];
show_Magicians(magiciansNames);