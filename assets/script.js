var counter = document.querySelector(".timer");
var secondsRemain = 70;
var body = document.body;

var welcome = document.querySelector(".pageOpen"); //same as? (without const becuase we want to change the visbility of this variable) const quizContainer = document.getElementById('quiz');
var startBtnBox = document.getElementById("startBtn");
var initialsBox = document.createElement("form")
var scoreBoardEl = document.getElementById("scoreBoard");
var qBox = document.getElementById("quizBox"); //qBox hook to html
qBox.setAttribute("style", "text-align:center"); // slight styling for qBox element
var theQuestions = [
  {
    title:
      "1. Fill in the blank!:   I assigned a ______ of 4 to my variable named numbers!",
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
  {
    title: "4. What kind of things will a CSS code do for your HTML?",
    choices: [
      "A. Add mathmatical functions",
      "B. Creates event Listeners",
      "C. Puts your browser into sleep mode",
      "D. Lets you add properties to style your browser",
    ],
    answer: "D. Lets you add properties to style your browser",
  },
];

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
    "font-weight: 700; background:yellow; padding: 20px; display:flex; flex-direction:column; justify-content:center; font-size:30px;"
  );
  body.appendChild(startBtnBox);
  startBtnBox.textContent = "Start";
  startBtnBox.setAttribute(
    "style",
    "font-size:30px; color:yellow; background:gray; width:200px; height:50px;"
  );
} // DONT TOUCH THIS CODE BLOCK! ^ (excluding the styles for the start button)

function runGame() {
  // function will run once start button is clicked
  welcome.setAttribute("style", "display:none"); // Removes intro text
  startBtnBox.setAttribute("style", "display:none"); // removes start button

  question1(); // procs 1st question
  function question1() {
    // function for 1st question
    body.appendChild(qBox); // applies container to body
    qBox.textContent = theQuestions[0].title; // this is working // shows 1st question txt
    qBox.setAttribute(
      "style",
      "font-size:30px; padding:20px; background:yellow; display:flex; align-items:center; flex-direction:column;"
    );
    var choice1 = document.createElement("button"); // var choice1-4 create the <button>'s for the choices
    var choice2 = document.createElement("button");
    var choice3 = document.createElement("button");
    var choice4 = document.createElement("button");
    choice1.textContent = theQuestions[0].choices[0]; // puts the choices text content into <button>'s
    choice2.textContent = theQuestions[0].choices[1];
    choice3.textContent = theQuestions[0].choices[2];
    choice4.textContent = theQuestions[0].choices[3];
    qBox.appendChild(choice1);
    qBox.appendChild(choice2);
    qBox.appendChild(choice3);
    qBox.appendChild(choice4);
    choice1.setAttribute(
      "style",
      "font-size:30px; color:white; background:purple"
    );
    choice2.setAttribute(
      "style",
      "font-size:30px; color:white; background:purple"
    );
    choice3.setAttribute(
      "style",
      "font-size:30px; color:white; background:purple"
    );
    choice4.setAttribute(
      "style",
      "font-size:30px; color:white; background:purple"
    );
    // event listeners for click-able answers
    choice1.addEventListener("click", function handleClick(ev) {
      console.log(ev.target.textContent);
      secondsRemain -= 15;
      question2();
    });
    choice2.addEventListener("click", function handleClick(ev) {
      console.log(ev.target.textContent);
      question2();
    });
    choice3.addEventListener("click", function handleClick(ev) {
      console.log(ev.target.textContent);
      secondsRemain -= 15;
      question2();
    });
    choice4.addEventListener("click", function handleClick(ev) {
      console.log(ev.target.textContent);
      secondsRemain -= 15;
      question2();
    });
  }
  tickTock();
}

function question2() {
  body.appendChild(qBox);
  qBox.textContent = theQuestions[1].title;
  qBox.setAttribute(
    "style",
    "font-size:30px; padding:20px; background:yellow; display:flex; align-items:center; flex-direction:column;"
  );
  var choice1 = document.createElement("button"); // var choice1-4 create the <button>'s for the choices
  var choice2 = document.createElement("button");
  var choice3 = document.createElement("button");
  var choice4 = document.createElement("button");
  choice1.textContent = theQuestions[1].choices[0]; // puts the choices text content into <button>'s
  choice2.textContent = theQuestions[1].choices[1];
  choice3.textContent = theQuestions[1].choices[2];
  choice4.textContent = theQuestions[1].choices[3];
  qBox.appendChild(choice1);
  qBox.appendChild(choice2);
  qBox.appendChild(choice3);
  qBox.appendChild(choice4);
  choice1.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice2.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice3.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice4.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  //
  choice1.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;
    question3();
  });
  choice2.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;
    question3();
  });
  choice3.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    question3();
  });
  choice4.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;
    question3();
  });
}

function question3() {
  body.appendChild(qBox);
  qBox.textContent = theQuestions[2].title;
  qBox.setAttribute(
    "style",
    "font-size:30px; padding:20px; background:yellow; display:flex; align-items:center; flex-direction:column;"
  );
  var choice1 = document.createElement("button"); // var choice1-4 create the <button>'s for the choices
  var choice2 = document.createElement("button");
  var choice3 = document.createElement("button");
  var choice4 = document.createElement("button");
  choice1.textContent = theQuestions[2].choices[0]; // puts the choices text content into <button>'s
  choice2.textContent = theQuestions[2].choices[1];
  choice3.textContent = theQuestions[2].choices[2];
  choice4.textContent = theQuestions[2].choices[3];
  qBox.appendChild(choice1);
  qBox.appendChild(choice2);
  qBox.appendChild(choice3);
  qBox.appendChild(choice4);
  choice1.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice2.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice3.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice4.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice1.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;
    question4();
  });
  choice2.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;
    question4();
  });
  choice3.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    question4();
  });
  choice4.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;
    question4();
  });
}
function question4() {
  body.appendChild(qBox);
  qBox.textContent = theQuestions[3].title;
  qBox.setAttribute(
    "style",
    "font-size:30px; padding:20px; background:yellow; display:flex; align-items:center; flex-direction:column;"
  );
  var choice1 = document.createElement("button"); // var choice1-4 create the <button>'s for the choices
  var choice2 = document.createElement("button");
  var choice3 = document.createElement("button");
  var choice4 = document.createElement("button");
  choice1.textContent = theQuestions[3].choices[0]; // puts the choices text content into <button>'s
  choice2.textContent = theQuestions[3].choices[1];
  choice3.textContent = theQuestions[3].choices[2];
  choice4.textContent = theQuestions[3].choices[3];
  qBox.appendChild(choice1);
  qBox.appendChild(choice2);
  qBox.appendChild(choice3);
  qBox.appendChild(choice4);
  choice1.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice2.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice3.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );
  choice4.setAttribute(
    "style",
    "font-size:30px; color:white; background:purple"
  );

  choice1.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;

    showScore();
  });
  choice2.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;

    showScore();
  });
  choice3.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);
    secondsRemain -= 15;

    showScore();
  });
  choice4.addEventListener("click", function handleClick(ev) {
    console.log(ev.target.textContent);

    showScore();
  });
  score = secondsRemain;
  console.log(score);
}

function tickTock() {
  // function to count down seconds, needs seperate variable with number value for 'seconds'
  var timerInterval = setInterval(function () {
    secondsRemain--;

    counter.textContent = secondsRemain;
    /*probably need another if statement here to get timer to stop if all questions were answered. 
May need a return to call the remaining seconds to the variable secondsRemain, or create new variable with updated timer*/

    if (secondsRemain === 0 || secondsRemain < -1) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
}

//Will need a function to showscore at end of quiz, and place to inputuser intials and save it to local storage with "score"
function showScore() {
  qBox.setAttribute("style", "display:none");
  body.appendChild(scoreBoardEl)
  scoreBoardEl.setAttribute("style", "font-size:26px; text-align:center")
  body.appendChild(initialsBox)
  scoreBoardEl.textContent = "Thanks for playing! Input your initials to track your High Scores!"
  score = counter.textContent;
  console.log(score)
}
//check activities for the local storage set up 
// will need these inputted somehow
// JSON.parse(window.localStorage.getItem("highscores")) 
// window.localStorage.setItem("highscores", JSON.stringify(highscores))