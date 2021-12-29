

var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){

  //if isPurple = false change background to white
  if(isPurple){
    document.body.style.background = "white";
    isPurple = false;
    // if is purple is now change background to white
  } else {
    document.body.style.background = "purple";
    isPurple = true;
  }

});
