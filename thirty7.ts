// large shirt:Modify the make_shirt ( )function so that shirts are larg
// e by default with amessage rhat reads  i love TypeScript.make a large shirt and a medium shirt with the default message and    any size with a differnt
// message.
function make_shirt(size: string = "large", message:string = "Hard time is not forever"){
    console.log(`make a shirt  ${size} size with a  ${message} printed on it`);

}
make_shirt()