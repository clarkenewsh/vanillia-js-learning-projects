
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input")
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector(" p span")
var gameOver = false;
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;


p1Button.addEventListener("click", function(){
  if(!gameOver) {
    //add to player 1 Score
    p1Score++;
    //check if player 1 socre is winning score of 5, if so game over
    if(p1Score === winningScore){
      p1Display.classList.add("winner");
      //stops game at score 5
      gameOver = true;
    }
    //display  player 1 score
    p1Display.textContent = p1Score;

  }

});


p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    //check if player 2 socre is winning score of 5, if so game over
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      //stops game at score 5
      gameOver = true;
    }
    //display  player 2 score
    p2Display.textContent = p2Score;

  }

});


resetButton.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false; //enables the game is back to false and    platers can replay


});


numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value); //changes score dispalay value from the number inut box - value changed to string otherwise score winning score will not update according to the score set


});
