var startButton = document.querySelector("#startButton");
var timeDisplay = document.querySelector("#timeDisplay");
var quizFramework = document.querySelector("#quizBox");
var questionText = document.createElement("h1");
var answerButtonFramework = document.createElement("div");
var resetButton = document.createElement("button");
var highScore = document.createElement("button");
var startButtonReturn = document.createElement("button");
var highScoreBoard = [];
var submitButton = document.createElement("button");
initialsInput = document.createElement("input");

//First timer
//Load Question
//Third Buttons with answers
//Fourth make them interchangable
//Fifth Clean up
var totalTime = 30;
var userScore = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var questionNumber = 0;
var questionArray = [
  "First Question",
  "Second Question",
  "Third Question",
  "Fourth Question",
  "Fifth Question",
  "Sixth Question",
  "7th Question",
  "8th Question",
  "9th Question",
  "10th Question",
];
var answerArray = [
  { "The wofj owfjo": true, op: false, yo: false, omk: false },
  { pop: false, ye: true, lp: false, mm: false },
  { pop: false, ye: true, lp: false, megm: false },
  { pop: false, ye: true, lp: false, mm: false },
  { pop: false, ye: true, lp: false, mmeg: false },
  { pop: false, ye: true, lp: false, mm: false },
  { pop: false, ye: true, lp: false, megm: false },
  { pop: false, ye: true, lp: false, mm: false },
  { pop: false, ye: true, lp: false, mm: false },
  { pop: false, ye: true, lp: false, mm: false },
];

startButton.addEventListener("click", function () {
  console.log("Start Clicked");
  beginQuiz();
});

function beginQuiz() {
  var quizTimer = setInterval(function () {
    totalTime--;
    timeDisplay.textContent = totalTime;

    if (totalTime === 0) {
      clearInterval(quizTimer);
      showResult();
    }

    if (questionNumber === questionArray.length + 1) {
      clearInterval(quizTimer);
      showResult();
    }
  }, 1000);
  startQuiz();
}

function startQuiz() {
  quizFramework.removeChild(startButton);
  questionText.textContent = questionArray[0];
  questionText.setAttribute("id", "questionText");
  quizFramework.appendChild(questionText);
  answerButtonFramework.setAttribute("class", "answerButtonDiv");
  quizFramework.appendChild(answerButtonFramework);
  for (var i = 0; i < 4; i++) {
    var answerButtons = document.createElement("button");
    answerButtons.textContent = Object.keys(answerArray[0])[i];
    answerButtons.setAttribute("id", "button" + [i]);
    answerButtonFramework.appendChild(answerButtons);
  }

  questionNumber++;
  grabAnswer();
}

function grabAnswer() {
  var selectedAnswer0 = document.querySelector("#button0");
  var selectedAnswer1 = document.querySelector("#button1");
  var selectedAnswer2 = document.querySelector("#button2");
  var selectedAnswer3 = document.querySelector("#button3");

  selectedAnswer0.addEventListener("click", function () {
    var userAnswer = button0.textContent;
    if (answerArray[questionNumber - 1][userAnswer]) {
      userScore = userScore + 5;
      correctAnswer++;
    } else {
      wrongAnswer++;
    }

    // CheckCorrect();
    NextQuestion();
  });

  selectedAnswer1.addEventListener("click", function () {
    var userAnswer = button1.textContent;
    if (answerArray[questionNumber - 1][userAnswer]) {
      userScore = userScore + 5;
      correctAnswer++;
    } else {
      wrongAnswer++;
    }
    // CheckCorrect();
    NextQuestion();
  });

  selectedAnswer2.addEventListener("click", function () {
    var userAnswer = button2.textContent;
    if (answerArray[questionNumber - 1][userAnswer]) {
      userScore = userScore + 5;
      correctAnswer++;
    } else {
      wrongAnswer++;
    }
    NextQuestion();
  });

  selectedAnswer3.addEventListener("click", function () {
    var userAnswer = button3.textContent;
    if (answerArray[questionNumber - 1][userAnswer]) {
      userScore = userScore + 5;
      correctAnswer++;
    } else {
      wrongAnswer++;
    }
    NextQuestion();
  });
}

function NextQuestion() {
  var newQuestion = document.querySelector("#questionText");

  if (questionNumber === questionArray.length) {
    questionNumber++;
    return;
  }
  newQuestion.textContent = questionArray[questionNumber];

  for (var i = 0; i < 4; i++) {
    var newAnswer = document.querySelector("#button" + [i]);

    newAnswer.textContent = Object.keys(answerArray[questionNumber])[i];
  }
  questionNumber++;
}

function showResult() {
  totalTime = 30;
  questionNumber = 0;
  timeDisplay.setAttribute("style", "visibility:hidden");
  while (quizFramework.hasChildNodes()) {
    while (answerButtonFramework.hasChildNodes()) {
      answerButtonFramework.removeChild(answerButtonFramework.firstChild);
    }
    quizFramework.removeChild(quizFramework.firstChild);
  }

  var resultsDisplay = [];
  for (var i = 0; i < 3; i++) {
    resultsDisplay[i] = document.createElement("h3");
    resultsDisplay[i].setAttribute("id", "result" + [i]);
    quizFramework.appendChild(resultsDisplay[i]);
  }
  resultsDisplay[0].textContent = "Your total score was " + userScore;
  // quizFramework.appendChild(resultsDisplay);
  // quizFramework.appendChild(lineBreak);
  resultsDisplay[1].textContent =
    "Your total number correct was " + correctAnswer;
  // quizFramework.appendChild(lineBreak);
  // quizFramework.appendChild(resultsDisplay);
  resultsDisplay[2].textContent = "Your total number wrong was " + wrongAnswer;
  resetButton.textContent = "Reset";
  resetButton.setAttribute("id", "resetQuiz");
  quizFramework.appendChild(resetButton);
  highScore.textContent = "High Score";
  quizFramework.appendChild(highScore);
  submitButton.textContent = "Submit";
  submitButton.setAttribute("id", "submitButton");
  quizFramework.appendChild(submitButton);
  initialsInput.setAttribute("id", "initials");
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("placeholder", "Enter initials");
  quizFramework.appendChild(initialsInput);
  console.log("Before the click");

  // return;
}
console.log("Main");
resetButton.addEventListener("click", function () {
  userScore = 0;
  correctAnswer = 0;
  wrongAnswer = 0;

  while (quizFramework.hasChildNodes()) {
    quizFramework.removeChild(quizFramework.firstChild);
  }
  // resetButton.remove();
  // highScore.remove();
  // resultsDisplay[0].remove();
  // resultsDisplay[1].remove();
  // resultsDisplay[2].remove();
  timeDisplay.setAttribute("style", "visibility:visible");
  timeDisplay.textContent = 30;
  quizFramework.appendChild(startButton);
  // return;
  // document
  //   .getElementById("startButton")
  //   .addEventListener("click", function () {
  //     console.log("startButton click");
  //     beginQuiz();
  //   });
});

highScore.addEventListener("click", function () {
  for (var i = 0; i < highScoreBoard.length; i++) {
    var initialDisplay = document.createElement("h2");
  }
});
