

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(let i=0;i<s.length;i++){
        let c = s[i]
        if(c === 'a' || c==='e' || c==='i' || c==='o' || c==='u'){
            console.log(c);
        }
    }
    
    for(let i=0;i<s.length;i++){
        let c = s[i]
        if(c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u'){
            console.log(c)
        }
    }
    
  
}


