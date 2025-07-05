

let arr = [4 , 2, 0 , 10 , 8 , 30];

 function findElemnent (arr , num) {
    // let findIndex = "";
    // for(let i = 0 ; i < arr.length ; i++){
    //     if(arr[i] === num){
    //          findIndex = i;
    //          return findIndex;
             
    //     }else{
    //          findIndex = -1;
    //     }
    // }
   
    //  return findIndex;

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === num){
             return i;
        }
    }
     return -1;

 }


// console.log( findElemnent(arr , 30));
// console.log( findElemnent(arr , 1));
// console.log( findElemnent(arr , 8));


// Write a function  thar returns the number of  negative vnumbers in an array
   

let  arrNegative = [2, -9 , 17 , -26 , -67, 0 , 1 , -10, -4 , -7,-35, 8];
  function countNagativeNUmber  (arr){
    let count = 0;
     for(let i =0 ; i < arr.length ; i++){
            if(arr[i] < 0){
                count ++;
            }

     }

     return count;

  }

//  console.log( countNagativeNUmber(arrNegative))


// Write a function find largest element  from an array
 let arrLarge = [5,0,10 , 305, 8 , 17 , 1];

 function findLargeElement  (arr) {
    let largeElement = arr[0];
     for(let i =1 ; i < arr.length ; i++){
         if(arr[i] > largeElement){
            largeElement = arr[i];
         }

     }

     return largeElement;


 }

//   console.log(findLargeElement (arrLarge));

// Write a function find minimum element  from an array

let arrElement = [5,0,10 , 305, 8 , , -232 ,17 , 1];

 function findMinimumElement ( arr) {
    // let minimumElem = arr[0];
    //  for(let i = 1 ; i < arr.length ; i ++){
    //     if(arr[i] < minimumElem){
    //         minimumElem = arr[i]
    //     }
    //  }
    //  return minimumElem;
     let minimumElem = Infinity;
     for(let i = 1 ; i < arr.length ; i ++){
        if(arr[i] < minimumElem){
            minimumElem = arr[i]
        }
     }
     return minimumElem;

 }

//   console.log(findMinimumElement(arrElement))


// Write a function find second largest element from an array
  let secondlarge =[10 , 20 , 20]
  function findSecondLargeElem (arr) {
   if(arr == "" ||  arr.length < 2) return null;
    let largeElement = -Infinity;
    let secondElement = -Infinity;
     for ( let i = 0 ; i < arr.length ;  i ++){
         if(arr[i] > largeElement){
             secondElement = largeElement;
             largeElement = arr[i]
         }else if ( arr[i] > secondElement && arr[i] !== largeElement){
             secondElement = arr[i]
         }
     }
      return {largeElement ,secondElement};

  }
  console.log(findSecondLargeElem(secondlarge));

