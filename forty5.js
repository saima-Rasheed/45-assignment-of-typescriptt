/* cars: write a function that stores information about a car in a object.the function
should always receive a mnufacture and amodel name .it should then accept an arbitary number
ofkeyword argument.call the function with the required informtion and two
other name - value pairs such as color or an optional features.print the objectthats returned
to make sure all the information stor correctly.*/
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("toyota", "corrola", ["color", "red"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof ", true]));
