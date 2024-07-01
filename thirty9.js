/*city  Name :writa a function called city_country()that takes in the name of a city and its country.the function  should return
 a sring formatted like this:
 "lahore,Pakistan"call ur function with atleast three  city -country pairs
 and print the value that returned.*/
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
console.log(city_country("islamabad", "Pakistan"));
console.log(city_country("mumbai", "India"));
console.log(city_country("dhaka", "Bangladesh"));
