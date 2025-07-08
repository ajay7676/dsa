// console.log("Count Digitssss")


// Q -1 

 //let numbers= 259  Output = 3;

   function  findNumberofDigits (numbers){
     let str = String(numbers);
      const splitnum =  str.split("");
     return splitnum.length;

   }
    let numbers= -2345
    // const result = findNumberofDigits(numbers);
    //  console.log(result)


    function  countDigits(n) {
         if(n === 0) return 1;
         n = Math.abs(n);
         let count = 0;
          while( n > 0 ){
             n = Math.floor(n / 10);
              count ++;
          }
           return count;

        
    }
    const result =  countDigits(numbers);
     console.log(result);