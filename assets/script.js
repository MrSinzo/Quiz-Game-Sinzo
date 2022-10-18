// 1. Vars for the code
var body = document.body;
var quizCarousel = document.querySelector("quiz");
var counter = document.querySelector(".timer");
var start = document.querySelector("start")


var secondsRemain = 500;
var question1 = "1. Fill in the blank!:\nI assigned a ______ of 4 to my variable named numbers!";
var qBoxAnswers1 = ["A. declartion", "B. value", "C. tag", "D. index"];
//2. Text content;



// 3. Appends
// body.appendChild(quizCarousel);


//4. Set Attributes
// quizCarousel.setAttribute("style", "text-align:center; background: lightgrey; height:300px");



//5. Functions

// start.addEventListener("click", function(event){

// })



function runQuiz () {
  quizCarousel.textContent = "Welcome to the quiz!"
  quizCarousel.textContent;

  
}


function tickTock(){
  var timerInterval = setInterval(function (){
  // may need if statement for staring the clock when user clicks on start quiz
    secondsRemain--;

    counter.textContent = secondsRemain;
//probably need another if statement here to get timer to stop if all questions were answered. may need a return to call the remaining second to the variable secondsRemain, or create new variable with updated timer 
    if (secondsRemain === 0) {
      clearInterval(timerInterval);

      // showScore();
    }
  }, 1000) // make sure this is set to 1000 before turn in (currently set to run each second as 10 seconds i think)
}

//Will need a function to showscore at end of quiz, and place to inputuser intials and save it to local storage with "score"
function showScore() {
  counter.textContent = " "

}
// runQuiz();
tickTock();