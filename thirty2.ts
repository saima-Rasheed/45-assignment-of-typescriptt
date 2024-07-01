// checking username: do the following to creat aprogram that simulates how websites ensure
// that everyone has a unique username.
// make list of five or more username called current _user
let current_user = ["sir","madam","teacher","Hina","ALi"];
let new_user = ["sir","madom","saima","hooria","ali"];

 new_user.forEach(myUser =>{
    let condition = current_user.some(current_one_user => current_one_user.toLowerCase() === myUser.toLowerCase() )
    if(condition){
      console.log(`sorry ${myUser},is already taken`) 

    }else{
      console.log(`this username ${myUser},is available`)
    }
 })