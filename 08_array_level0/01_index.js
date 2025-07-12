
// Question
 function removeDuplicateElemennt(arr){
    let uniqueArr = [];
     for(let i = 0 ; i < arr.length ; i ++){

         if(!uniqueArr.includes(arr[i])){
               uniqueArr.push(arr[i])
         }

     }
    //  return uniqueArr;
     return  uniqueArr.length;

 }
let arr = [0 ,0 , 1, 1, 1,2,2,3,3,4]

//  console.log( removeDuplicateElemennt(arr))

function removeDuplicateElemennt1(arr ){

     let x = 0;
      for(let i = 0 ; i< arr.length ; i++){
         if(arr[i] > arr[x]){
            x = x +1;
            arr[x] = arr[i]

         }
      }

      return (x +1);


}

 console.log(removeDuplicateElemennt1(arr))