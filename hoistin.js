function thisIsWeird () {
  var result;

  function secret(){
    var unused3;
  }
  

  function secret(){
    var unused1;
  }
  
  result = secret;

  function secret(){
    var unused2;
  }
  
  return result;
}