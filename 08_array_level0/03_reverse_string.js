
function reverseString (s) {
    //  console.log(s)
    let revString = "";
    //  }
     for( let i= s.length - 1 ; i >=0 ; i--){
         revString  += s[i] 
     }
      return revString.split("")

}    
let s = ["h","e","l","l","o"]
//  console.log(reverseString(s))

var reverseString2 = function(s) {
     let  len = s.length;
      let  half = Math.floor(len/2);
     for( let i= 0 ; i < half ; i++){
            let temp = s[i];
            s[i] = s[len - 1 - i]
           s[len - 1 - i] = temp
     }
     return s 

};

 console.log(reverseString2(s));