// checking username: do the following to creat aprogram that simulates how websites ensure
// that everyone has a unique username.
// make list of five or more username called current _user
var current_user = ["sir", "madam", "teacher", "Hina", "ALi"];
var new_user = ["sir", "madom", "saima", "hooria", "ali"];
new_user.forEach(function (myUser) {
    var condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === myUser.toLowerCase(); });
    if (condition) {
        console.log("sorry ".concat(myUser, ",is already taken"));
    }
    else {
        console.log("this username ".concat(myUser, ",is available"));
    }
});
