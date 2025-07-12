function a() {
  var x = 10;
  return function b() {
    //   let y =20;
    console.log(x);
  };
}


var outer= a();
  outer();