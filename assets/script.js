// var quizCarousel = document.querySelector("quiz"); // dont seem to need this code 
var counter = document.querySelector(".timer");
// var start = document.querySelector("start"); // dont seem to need this code 

var secondsRemain = 500;
var question1 =
  "1. Fill in the blank!:\nI assigned a ______ of 4 to my variable named numbers!"; // does the \n (newline) not work in JavaScript?
var qBoxAnswers1 = ["A. declartion", "B. value", "C. tag", "D. index"]; // would assume i need to link answers by index to buttons

document.getElementById("start").addEventListener("click", tickTock); // activates timer when "start" button is clicked

function runQuiz() {
  quizCarousel.textContent = "Welcome to the quiz!";
  quizCarousel.textContent;
}


function tickTock() {
  var timerInterval = setInterval(function () {
    // may need if statement for staring the clock when user clicks on start quiz
    
    secondsRemain--;

    counter.textContent = secondsRemain;
    //probably need another if statement here to get timer to stop if all questions were answered. may need a return to call the remaining second to the variable secondsRemain, or create new variable with updated timer
    if (secondsRemain === 0) {
      clearInterval(timerInterval);

      // showScore();
    }
  }, 1000); // make sure this is set to 1000 before turn in 
}

//Will need a function to showscore at end of quiz, and place to inputuser intials and save it to local storage with "score"
function showScore() {
  counter.textContent = " ";
}
// runQuiz();
