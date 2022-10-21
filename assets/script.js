var counter = document.querySelector(".timer");
var secondsRemain = 500;
var body = document.body;

var welcome = document.querySelector(".pageOpen"); //same as? (without const becuase we want to change the visbility of this variable) const quizContainer = document.getElementById('quiz');
var startBtnBox = document.getElementById("startBtn");

var qBox = document.getElementById("quizBox"); //qBox hook to html
qBox.setAttribute("style", "text-align:center"); // slight styling for qBox element

var theQuestions = [
  {
    title:
      "1. Fill in the blank!:   I assigned a ______ of 4 to my variable named numbers!",
    choices: ["A. declartion", " B. value", " C. tag", " D. index"],
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
];
var q1Answer = theQuestions[0].choices[1];
var q2Answer = theQuestions[1].choices[2];
var q3Answer = theQuestions[2].choices[3];

// var scoreBox = document.getElementById("showScore");

pageIntro();
document.getElementById("startBtn").addEventListener("click", runGame); // activates timer and runGame function when "start" button is clicked

function pageIntro() {
  // THIS WORKED!!!!!! // need to center button somehow
  body.appendChild(welcome);
  welcome.textContent =
    "Welcome to the coding quiz! Click 'Start' to begin your timed quiz!";
  welcome.setAttribute(
    "style",
    "font-weight: 700; background:yellow; padding: 20px; display:flex; justify-content:center"
  );
  body.appendChild(startBtnBox);
  startBtnBox.textContent = "Start";
  startBtnBox.setAttribute(
    "style",
    "justify-content:center; color:yellow; background:gray; width:200px; height:50px;"
  );
} // DONT TOUCH THIS CODE BLOCK! ^ (excluding the styles for the start button)

function runGame() { // function will run once start button is clicked
  welcome.setAttribute("style", "display:none"); // Removes intro text
  startBtnBox.setAttribute("style", "display:none"); // removes start button
  question1(); // procs 1st question
  function question1() { // function for 1st question
    body.appendChild(qBox); // applies container to body
    qBox.textContent = theQuestions[0].title; // this is working // shows 1st question txt 
    var choice1 = document.createElement("li"); // var choice1-4 create the <li>'s for the choices 
    var choice2 = document.createElement("li");
    var choice3 = document.createElement("li");
    var choice4 = document.createElement("li");
    choice1.textContent = theQuestions[0].choices[0]; // puts the choices text content into <li>'s
    choice2.textContent = theQuestions[0].choices[1];
    choice3.textContent = theQuestions[0].choices[2];
    choice4.textContent = theQuestions[0].choices[3];
// event listeners for click-able answers
    choice1.addEventListener("click", function handleClick(ev) {
      console.log("Clicked choice 1", ev);
    });
    choice2.addEventListener("click", function handleClick(ev) {
      console.log("Clicked choice 2", ev);
    });
    choice3.addEventListener("click", function handleClick(ev) {
      console.log("Clicked choice 3", ev);
    });
    choice4.addEventListener("click", function handleClick(ev) {
      console.log("Clicked choice 4", ev);
    });


    // if () {
    //   question2()
    // } else {
    //   secondsRemain -= 100
    // }

    qBox.appendChild(choice1);
    qBox.appendChild(choice2);
    qBox.appendChild(choice3);
    qBox.appendChild(choice4);
  }
  // question2()  /* Reactivate once you figured out how to get the correct answer from question1 to move onto next question */

  // qBox.textContent = theQuestionsTitle1 + "    Am i showing?";
  // var ans1 = document.createElement("li")

  // console.log(qBox);
  // qBox.textContent = theQuestions; //this line is presenting the [object, Object.. text while active, its grabbing something but keeps declaring it undefined

  // qBox.textContent = theQuestions[0].title;
  // answerBox.textContent = theQuestions[0].choices; // this overwirtes the previous line of code

  // console.log(answerBox)
  // qBox.appendChild(theQuestions) doesnt work
  // theQuestions++ may need an if-statement
  // need to append titles/choices/answers in here i think?
  // for (i= 0; i < theQuestions; theQuestions++)
  // {
  // }
  tickTock();
}

function question2() {
  console.log("succesfully moved on to 2nd question");
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
// function showScore() {
//   counter.textContent = " ";
// }

// var quiz1stQuestion = [0];
// var listEl = document.createElement("ol", []);
// var answer1 = document.createElement("li");
// var answer2 = document.createElement("li");
// var answer3 = document.createElement("li");
// var answer4 = document.createElement("li");

// This code originally inside the runGame Func not sure why this function wont bring up the questions , may need appends?
// var state = element.getAttribute("data-state");
// answer1.addEventListener("click", theQuestions);
// answer2.addEventListener("click", theQuestions);
// answer3.addEventListener("click", theQuestions);
// answer4.addEventListener("click", theQuestions); // theQuestions ++; does not go in the event listener bit

// function runGame() {
//   welcome.setAttribute("style", "display:none");
//   startBtnBox.setAttribute("style", "display:none");
//   var ans1

//   // console.log(qBox);
//   // qBox.textContent = theQuestions; //this line is presenting the [object, Object.. text while active, its grabbing something but keeps declaring it undefined
//   // qBox.textContent = theQuestionsTitle1;
//   // qBox.textContent = theQuestions[0].title;
//   // answerBox.textContent = theQuestions[0].choices; // this overwirtes the previous line of code

//   // console.log(answerBox)
//   // qBox.appendChild(theQuestions) doesnt work
//   // theQuestions++ may need an if-statement
//   // need to append titles/choices/answers in here i think?
//   // for (i= 0; i < theQuestions; theQuestions++)
//   // {
//   // }
//   tickTock();
// }

// var theQuestionsTitle1 =
//   "1. Fill in the blank!:\nI assigned a ______ of 4 to my variable named numbers!";
// var question1Choices = ["A. declartion", " B. value", " C. tag", " D. index"];
// var question1Answer = question1Choices[1];
// var theQuestionsTitle2 = "2. What is the purpose of Html for a web browser?";
