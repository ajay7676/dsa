console.log("Moves Zero")

let nums=[0,1,0,3,12]
function movesZeroAtEnd(nums){

    let index = 0;
     for(let i =0 ; i < nums.length; i++){
         if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
         }
       
     }
      for(let i = index ; i < nums.length; i++){
          nums[i] = 0;
      }

   return nums;
  


}

 console.log(movesZeroAtEnd(nums))