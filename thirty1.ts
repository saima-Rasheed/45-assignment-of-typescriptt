// no user:add an if test to exc 30 to make sure that list of users is not empty.
// if the list is empty.print the msg We need to find some users!.
// remove all of the usres from the array and make sure  the correct msg is printed.
let  userName2 = ["admin","friend","user","member","staff"];
userName2 =[]
if(userName2.length === 0){
    console.log("we need to find some users!")
}else{
    userName2.forEach(userName4 =>{
        if(userName4 === "admin"){
            console.log(`Hello ${userName4},would you like to see the status report`)
    
        
        }else{
           console.log(`Hello ${userName4},thank you for logging in again`)
        }

})
}
