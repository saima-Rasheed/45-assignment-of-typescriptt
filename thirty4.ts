// pizzas: think of at least three kind of ur fav pizza.store these pizza name
// in an array,and then use for loop to print the name of each pizza.
// modify ur loop to print a sentence using the name of pizza .
// for each pizzau should have one line of out put containinga simple sentencelike .i like pepproni pizza
// add a line at the end of ur program,outside the for loopthat states how much u like pizza .
// the output should consist of three or more lines about the kind of pizza .
// u like.and then an additional sentence .such as i really ;ove pizza.
let pizza = ["pepproni","tikka","fajita"] ;
pizza.forEach(pizza =>{
    if(pizza === "pepproni" ){
        console.log(`i like ${pizza} pizza`);
    }else if(pizza === "tikka"){
        console.log(`i like ${pizza}pizza`);

    }else{
        console.log(`i like ${pizza}pizza`)
    }
});
console.log(`i really love pizza`);