// Hello admin: make an array of five or more username,including the name of 'admin'
// imagime u r writing a code that will print agreetingto each user after they loggeg into a websiteLoop through the rray,and print greetiin to each.
// 1.if the username is admin.print special greeting such as Hello admin,would u like to see the status repot.
// otherwise print ageneric greetings ,
//  as Hello Eric.thank you for logging in again.
var userName = ["admin", "friend", "user", "member", "staff"];
userName.forEach(function (userName1) {
    if (userName1 === "admin") {
        console.log("Hello ".concat(userName1, ",would u like to see the status report"));
    }
    else {
        console.log("Hello ".concat(userName1, ",thank you for logging in again"));
    }
});
