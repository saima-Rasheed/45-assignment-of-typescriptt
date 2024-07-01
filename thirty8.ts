/* cities:write a function describe_city()that accept the name of the city 
and its country .the function should print a simple sentence ,such as karachi is in Pakistan
Give the parameter for the country a default value.call ur funtion  for three
different cities atleast one of which is not  in the default country*/
function describe_city(city:string,country:string ="Pakistan"){
    console.log(`${city} is in ${country}`);


}
describe_city("Islamabad");
describe_city("karachi");
describe_city("Dubai");


