

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
      var  s2 = s.split("").reverse().join("");
    } catch(err){
        console.log(err.message);
    } finally {
        console.log(s2 || s);
    }
    
 
}

