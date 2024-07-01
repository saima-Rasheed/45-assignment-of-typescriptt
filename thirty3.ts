// ques 33.ordinal number: ordinal number indicate their position in an arrya such as 
// 1st,2nd...most ordinal number ends with "th".
//  except 1,2 and 3
// store num,ber 1 to 9 in an array.
// loop through array
// use if -else chain inside the loop to print the proper ending.
let num = [1,2,3,4,5,6,7,8,9];
num.forEach(num => {
    let suffix = "th";
    if(num === 1){
        suffix ="st";
    }
    else if(num === 2){
        suffix = "nd";
    }else if(num === 3){
        suffix = "rd";

    }
        console.log(`${num}${suffix}`);
        
    


})

    
