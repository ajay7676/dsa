//  console.log("Panildrome")

 let number = 121 ;
   function findPanildromeNumber (n) {
       if(n < 0 ) return "Please Enter Vaild Number"
       const originalNum = n;
       let revsereNum = 0;
       while(n > 0){
          let  lastdigit = n % 10;
          revsereNum = (revsereNum * 10) + lastdigit
          n =  Math.floor(n / 10);

       }         
       return originalNum === revsereNum;

   }

  const result =  findPanildromeNumber(number);
   console.log(result)