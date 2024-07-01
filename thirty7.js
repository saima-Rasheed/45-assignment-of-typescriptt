// large shirt:Modify the make_shirt ( )function so that shirts are larg
// e by default with amessage rhat reads  i love TypeScript.make a large shirt and a medium shirt with the default message and    any size with a differnt
// message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "Hard time is not forever"; }
    console.log("make a shirt of".concat(size, " size with a  ").concat(message, "printed on it"));
}
make_shirt();
