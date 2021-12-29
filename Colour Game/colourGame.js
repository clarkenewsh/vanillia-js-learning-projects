
//Varible array of colours
var colors = generateRandomColors(6);
//varible gets all div squares
var squares = document.querySelectorAll(".square");
//varibale to store the picked colour
var pickedColor = pickColor();
//display rgb color in span H1
var colorDisplay = document.getElementById("colorDisplay");
//variable to display feedback message
var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector('h1');

var resetButton= document.querySelector('#reset');




colorDisplay.textContent = pickedColor;

//loop through each div using [i] [1,2,3,4,5,6] and assign a color based on varibales
for(var i = 0; i < squares.length; i++){
  //add initial colours to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares using same loop
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare clicked  color to picked color
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });

}
//function to change all square to picked colour
function changeColor(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to the picked color on guessing correctly
    squares[i].style.backgroundColor = color;

  }
}

function pickColor(){
  //js function to pick a random number between amount of colors in array
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];

}


function generateRandomColors(num) {
  //make an array
  var arr = []
  //repeat number of times
  for(var i = 0; i < num; i++){
    //get random color and push into array below
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a red from 0 - 256
  var r = Math.floor(Math.random() * 256);
  //pick a red from 0 - 256
  var g = Math.floor(Math.random() * 256);
  //pick a red from 0 - 256
  var b = Math.floor(Math.random() * 256);
  //return random colors and places in a string to diplay random colors
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
