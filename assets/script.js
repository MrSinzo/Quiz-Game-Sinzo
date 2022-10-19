var counter = document.querySelector(".timer");
var welcome = document.querySelector(".pageOpen");
var secondsRemain = 500;
var quiz1stQuestion = [0];
var listEl = document.createElement("ol", []);
var answer1 = document.createElement("li", [0]);
var answer2 = document.createElement("li", [1]);
var answer3 = document.createElement("li", [2]);
var answer4 = document.createElement("li", [3]);
document.getElementById("start").addEventListener("click", tickTock, runGame); // activates timer when "start" button is clicked

function runGame(event) {
  // not sure why this function wont bring up the questions , may need appends
  // var state = element.getAttribute("data-state"); 
  choices.addEventListener("click", theQuestions++); // theQuestions ++; method not working?
  if (event) {
    welcome.setAttribute("style", "display:none")
  }
    


  var theQuestions = [
    {
      title:
        "1. Fill in the blank!:\nI assigned a ______ of 4 to my variable named numbers!",
      choices: ["A. declartion", "B. value", "C. tag", "D. index"],
      answer: "B. value",
      
    },
    {
      title: "2. What is the purpose of Html for a web browser?",
      choices: [
        "A. It makes things look pretty.",
        "B. It will run functions in the browser.",
        "C. It helps provide structure to a browser.",
        "D. It will create a grid for my browser to lay out text and images.",
      ],
      answer: "C. It helps provide structure to a browser.",
    },
    {
      title: "3. What does the operator += do in JavaScript?",
      choices: [
        "A. It subtracts values",
        "B. It disables a block of code",
        "C. It adds to a value or string",
        "D. It is used to multiply numbers",
      ],
      answer: "C. It adds to a value or string",
    },
    title.appendChild(listEl),
    theQuestions.choices.appendChild(li)
  ];

  // need to append titles/choices/answers in here i think?
}

function tickTock() {
  // function to count down seconds, needs seperate variable with number value for 'seconds'
  var timerInterval = setInterval(function () {
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
