document.getElementById("start").addEventListener("click", tickTock);
var secondsRemain = 60;
var counter = document.querySelector(".timer");

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
  }, 1000); // make sure this is set to 1000 before turn in (currently set to run each second as 10 seconds i think)
}
