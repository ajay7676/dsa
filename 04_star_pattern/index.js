 /*    
    *
   **
  ***
 ****
*****
*/
let n =5;
 for(let i = 0 ; i < n ; i++){
    let row = "";
     for(let j =0 ; j < n -(i+1) ; j++ ){
         row += " "
     }
     for(let k =0 ; k < i+1 ; k++){
         row += "*"
     }
    //   console.log(row)
 }
 /*
1 
1 0 
1 0 1 
1 0 1 0 
1 0 1 0 1 
1 0 1 0 1 0 
*/

  for(let i = 0 ; i <= n ; i++){
    let row = "";
    let switcher = 1;
     for(let j =0 ; j <= i  ; j++ ){
         row += `${switcher} `;
         if(switcher === 1){
             switcher = 0;
         }else{
            switcher = 1;
         }
          
     }
    
    //   console.log(row)
 }
     
//  Question : 3
 
/*
1 
0 1 
0 1 0 
1 0 1 0 
1 0 1 0 1 
0 1 0 1 0 1
*/
 
 let switcher = 1;

 for(let i = 0 ; i <= n ; i++){
    let row = "";
     for(let j =0 ; j <= i  ; j++ ){
         row += `${switcher} `;
         if(switcher === 1){
             switcher = 0;
         }else{
            switcher = 1;
         }
          
     }
    
    //   console.log(row)
 }

 //PRACTICE QUESTOIN
//  1. Right-Angle Triangle (Left-Aligned)

/*
*
* *
* * *
* * * *
* * * * *
*/

 for (let i =0 ; i < n ; i++ ){
     let row = "";
      for(let j = 0 ; j <= i ; j++){
         row += "* "
      }
    //    console.log(row)
}

// Question 2. Pyramid Pattern

/*
    *
   * *
  * * *
 * * * *
* * * * *
*/


  for (let i = 0 ; i < n ; i++){
      let row = "";
       for(let j = 0 ; j < n - (i+1) ; j++){
          row += " "

       }
        for(let k = 0 ; k <= i ; k++){
             row += " *"
        }
        // console.log(row)
  }

// Question 3. Inverted Triangle
/*
* * * * *
* * * *
* * *
* *
*
*/


 for (let i = n ; i > 0 ; i--){
     let row = "";
      for (let j = 0 ; j < i ; j++){
        row += " *"
      }
    //   console.log(row)
 }

 
//  5. Diamond Pattern

//     *
//    * *
//   * * *
//    * *
//     *

for (let i = 0 ; i < 3 ; i++){
      let row = "";
       for(let j = 0 ; j < n - (i+1) ; j++){
          row += " "

       }
        for(let k = 0 ; k <= i ; k++){
             row += " *"
        }
        console.log(row)
  }
//   let n3 = 3
// for (let i = n3 - 1; i >= 1; i--) {
//   let str = '';

//   // spaces
//   for (let j = 1; j <= n3 - i; j++) {
//     str += ' ';
//   }

//   // stars
//   for (let k = 1; k <= i; k++) {
//     str += ' *';
//   }

//   console.log(str);
// }
  
 
