console.log("remove Element")

let nums = [3,2,2,3]
let val = 3;

function removeElement(nums,val){
   let x = 0;
    for( let i = 0 ; i < nums.length ; i ++){
         if(nums[i] != val){
             nums[x] = nums[i]
            x = x + 1;

         }

    }
    return x;




}
console.log(removeElement(nums , val))