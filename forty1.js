/* magicians: make an array of magicians'name.pass the array to a function
called show _ magicians(),which prints the name of each magician in the array.*/
function show_Magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
var magiciansNames = ['Amna', 'Ayat', 'Faheem'];
show_Magicians(magiciansNames);
