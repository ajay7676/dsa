let arr =[4,2,0,10,8,30];
function  searchElement (arr,num){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;

}

// console.log(searchElement(arr,2));  /1
// console.log(searchElement(arr,8)); // 4
// console.log(searchElement(arr,6)); // -1

// 2. Write a function that returns the number of negative numbers in an array
 let arr2=[2,-9,17,0,1,-10,-4,8, -4,-8]

function countNegative(arr2){
    let count = 0;
    for(let i =0; i < arr2.length ; i++){
        if(arr2[i] < 0){
           count += 1;
        }
    }
    return count;

}
//  console.log(countNegative(arr2));

// 3.Write a function  that return the largest number in an array
let arr3=[5,0,120,8,17,1,28]

function findLargestElement(arr3){
    let maxElement = arr3[0];
     for(let i =1; i < arr3.length; i++){
         if(arr3[i] > maxElement){
            maxElement = arr3[i]
         }
     }
     return maxElement;

}

//  console.log(findLargestElement(arr3)); // 120

// 3.Write a function  that return the smallest number in an array
let arr4=[5,-20,120,-8,17,-1,28]

function findSmallestElement(arr4){
    // let smallElement = arr4[0];
    //  for(let i =1; i < arr4.length; i++){
    //      if(arr4[i] < smallElement){
    //         smallElement = arr4[i]
    //      }
    //  }
    //  return smallElement;
    // Using Infinity
     let smallElement = Infinity;
     for(let i =0; i < arr4.length; i++){
         if(arr4[i] < smallElement){
            smallElement = arr4[i]
         }
     }
     return smallElement;

}
// console.log(findSmallestElement(arr4));// -20


// Write a function  to find the second largest number

let arr5=[4,9,0,2,8,12,7,12,1];

function findSecondLargestNum(arr5){
     if(arr5.length < 2)return null;
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0 ; i < arr5.length ; i ++ ){
         if(arr5[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr5[i];
         }else if(arr5[i] > secondLargest && arr5[i] !== firstLargest){
            secondLargest = arr5[i]
         }
    } 
    
    return secondLargest;
}

 console.log(findSecondLargestNum(arr5))