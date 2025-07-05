//  function printHelloWorld(){
//      console.log("Hello World")
//  }

//  printHelloWorld();

// function  greet(name) {
//      console.log("Namaste" , name )
// }
//  greet("ajay")
//  greet("himanshu")

// function eligibleToVote (age) {
//      if(age < 0){
//          console.log(`Invalid Input`)
//      }
//      else if(age < 18){
//         console.log(`Not Eligible`)
//      }else{
//          console.log("Eligible")
//      }

// }
//  eligibleToVote(13)
//  eligibleToVote(18)
//  eligibleToVote(23)
//  eligibleToVote(-1)

// create a fuunction to check if number is Even or odd

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is Even Number`);
  } else {
    console.log(`${number} is Odd Number`);
  }
}

checkEvenOdd(14);
checkEvenOdd(7);
checkEvenOdd(7343333674);
