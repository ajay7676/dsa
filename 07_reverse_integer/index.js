// console.log("Reverse Integer Numbers")

let number = -1234;

  
function reverseIntergerNumbers (num){
    let copyNumbers = num;
     num = Math.abs(num)
    let reverseNum = 0;
      while(num > 0){
         let rem = num % 10;
         reverseNum = (reverseNum * 10) + rem;
        num = Math.floor(num/10);
      }
      return (copyNumbers < 0) ? -reverseNum : reverseNum;

}

 console.log(reverseIntergerNumbers(number));