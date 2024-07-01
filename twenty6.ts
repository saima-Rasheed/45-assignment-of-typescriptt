// by following  exc25.if the alien color is green .print a message that player just earned 5 points for shooting the alien
// if alien color is not green print a message that the player just earned 10 points
// write one version of this program that runs the if block and another that runsthe else block.
let alien_color1 = "green";
if(alien_color1 == "green"){
    console.log("the player just earned 5 points  for shooting the alien")
};
// if alien color is not green .run the else block
let alien_color2 = "red";
if(alien_color2 == "green"){
    console.log("player earned 5 points");
}
else{
    console.log("player just earned 10 points");
};
// runs only if.
let alien_color3 = "yellow";
if(alien_color3 == "yellow"){
    console.log("congratulations!")
}
let alien_color4 = "red";
if(alien_color4 != "red"){
    console.log("try again");


}
else{
    console.log("good attempt");
}