/*sandwiche:swrite a function that aceepts an array of items a person wants on a sndwiche.the persould have one
parameter that collects as many items as the function call provide,and it should print a 
summary of sandwich that is being ordered. call the function three times,using a different  number of argument each time.*/
function orderSandwich (order:string[]):void{
    console.log(`you order a sandwich with ${order} on it.`)
}
orderSandwich([`pizza`,`mayo`]);
orderSandwich([`ham`,`cheese`]);
orderSandwich([`faluda`,`jelly`]);