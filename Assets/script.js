// Query Selector variables
var startButton = document.querySelector("#startButton");
var timeDisplay = document.querySelector("#timeDisplay");
var quizFramework = document.querySelector("#quizBox");
var questionText = document.createElement("h1");
var answerButtonFramework = document.createElement("div");
//Global element creating variables
var resetButton = document.createElement("button");
var highScore = document.createElement("button");
var submitButton = document.createElement("button");
var initialsInput = document.createElement("input");
//Retrieve data from local storage
var userInitials = localStorage.getItem("initial");

//Work around for if local storage is empty.  Cannot create array with empty local storage variable.
if (userInitials === null) {
  //Creates empty array and replaces getItem element so items can be added
  var userInitials = [];
} else {
  //If local storage contains info.  Creates array.
  userInitials = Array.from(userInitials);
  //Temporary variables
  var tempArray = [];
  var tempString = "";
  var tempArrayLocation = 0;
  //Local storage array creates index for every element rather than just elements divided by commas.  This loop pushes elements up to commas into temp array using a temp string
  for (var i = 0; i < userInitials.length; i++) {
    if (userInitials[i] === ",") {
      tempArray.push(tempString);
      tempString = "";
    } else {
      tempString = tempString + userInitials[i];
    }
  }
  //Pushes last stored variable
  tempArray.push(tempString);
  //Replaces userInitials array
  userInitials = tempArray;
}

//Global variables created for time, timer, question, answer, and user response counter
var totalTime = 200;
var quizTimer = "";
var correctAnswer = 0;
var wrongAnswer = 0;
var questionNumber = 0;
var questionArray = [
  "With what can you style a page?",
  "What element does javascript need on an html page?",
  "What method creates an element in javascript?",
  "How do you create an object in javascript?",
];
var answerArray = [
  { css: false, html: false, javascript: false, "All of the above": true },
  { "<div>": false, "<script>": true, "<link>": false, "<head>": false },
  {
    ".createElement": true,
    ".newElement": false,
    ".setElement": false,
    ".Element": false,
  },
  {
    "var obj = 0": false,
    "var obj = {}": true,
    "var obj = []": false,
    'var obj = ""': false,
  },
];

//Event listener for start button click.
startButton.addEventListener("click", function () {
  beginQuiz();
});

//Function to track score/time and start countdown
function beginQuiz() {
  //Start timer/score countdown.  Reduces every second.
  var quizTimer = setInterval(function () {
    //Reduce time/score
    totalTime--;
    //Updates on screen display
    timeDisplay.textContent = "Score: " + totalTime;
    //Stops countdown and returns results
    if (totalTime === 0) {
      clearInterval(quizTimer);
      showResult();
    }
    //Stops countdown if all questions are answered
    if (questionNumber === questionArray.length) {
      clearInterval(quizTimer);
      return;
    }
  }, 1000);
  startQuiz();
}

//Function append question format and load first question.
function startQuiz() {
  //Removes start button
  while (quizFramework.hasChildNodes()) {
    quizFramework.removeChild(quizFramework.firstChild);
  }
  //Creates element for question, set attribute, and adds bootstrap grid
  var rowCreator = document.createElement("section");
  rowCreator.setAttribute("class", "row");
  questionText.textContent = questionArray[0];
  questionText.setAttribute("class", "col-12");
  questionText.setAttribute("id", "questionText");
  rowCreator.appendChild(questionText);
  quizFramework.appendChild(rowCreator);
  //For loop to create answer button and add bootstrap formatting
  for (var i = 0; i < 4; i++) {
    var rowCreator = document.createElement("section");
    rowCreator.setAttribute("class", "row pt-2 justify-content-center");
    quizFramework.appendChild(rowCreator);
    var answerButtons = document.createElement("button");
    answerButtons.textContent = Object.keys(answerArray[0])[i];
    answerButtons.setAttribute("id", "button" + [i]);
    answerButtons.setAttribute("class", "col-8 btn btn-secondary");
    rowCreator.appendChild(answerButtons);
  }
  //Increments question counter
  questionNumber++;
  grabAnswer();
}

//Function to check answer
function grabAnswer() {
  //Query selector variable for buttions
  var selectedAnswer0 = document.querySelector("#button0");
  var selectedAnswer1 = document.querySelector("#button1");
  var selectedAnswer2 = document.querySelector("#button2");
  var selectedAnswer3 = document.querySelector("#button3");

  //Event listeners for all buttons repeated for each button
  selectedAnswer0.addEventListener("click", function () {
    //Gets key from button clicked
    var userAnswer = button0.textContent;
    //Checks boolean value of selected answer and adds to appropriate counter
    if (answerArray[questionNumber - 1][userAnswer]) {
      correctAnswer++;
    } else {
      wrongAnswer++;
      totalTime -= 10;
    }
    //If all questions are answered moves to results function
    if (questionNumber === questionArray.length) {
      //Ensure proper score is displayed
      timeDisplay.textContent = "Score: " + totalTime;
      showResult();
      return;
    } else {
      NextQuestion();
    }
  });

  //Repeat of above
  selectedAnswer1.addEventListener("click", function () {
    var userAnswer = button1.textContent;
    if (answerArray[questionNumber - 1][userAnswer]) {
      correctAnswer++;
    } else {
      wrongAnswer++;
      totalTime -= 10;
    }
    if (questionNumber === questionArray.length) {
      timeDisplay.textContent = "Score: " + totalTime;
      showResult();
      return;
    } else {
      NextQuestion();
    }
  });

  //Repeat of above
  selectedAnswer2.addEventListener("click", function () {
    var userAnswer = button2.textContent;
    if (answerArray[questionNumber - 1][userAnswer]) {
      correctAnswer++;
    } else {
      wrongAnswer++;
      totalTime -= 10;
    }
    if (questionNumber === questionArray.length) {
      timeDisplay.textContent = "Score: " + totalTime;
      showResult();
      return;
    } else {
      NextQuestion();
    }
  });

  //Repeat of above
  selectedAnswer3.addEventListener("click", function () {
    var userAnswer = button3.textContent;
    if (answerArray[questionNumber - 1][userAnswer]) {
      correctAnswer++;
    } else {
      wrongAnswer++;
      totalTime -= 10;
    }
    if (questionNumber === questionArray.length) {
      timeDisplay.textContent = "Score: " + totalTime;
      showResult();
      return;
    } else {
      NextQuestion();
    }
  });
}

//Function to replace values in question and answers
function NextQuestion() {
  //Selects and replaces question text
  var newQuestion = document.querySelector("#questionText");
  newQuestion.textContent = questionArray[questionNumber];

  //Replace text content of answer buttons
  for (var i = 0; i < 4; i++) {
    var newAnswer = document.querySelector("#button" + [i]);
    newAnswer.textContent = Object.keys(answerArray[questionNumber])[i];
  }
  //Increments question counter
  questionNumber++;
}

//Function to display results page
function showResult() {
  //Removes question format
  while (quizFramework.hasChildNodes()) {
    while (answerButtonFramework.hasChildNodes()) {
      answerButtonFramework.removeChild(answerButtonFramework.firstChild);
    }
    quizFramework.removeChild(quizFramework.firstChild);
  }

  //Array for results text
  var resultsDisplay = [];
  //for loop to add all elements to results page and add bootstrap formatting
  for (var i = 0; i < 5; i++) {
    //Creates all necessary rows and appends to DOM
    var rowCreator = document.createElement("section");
    rowCreator.setAttribute("class", "row justify-content-center pt-3");
    quizFramework.appendChild(rowCreator);
    //Appends counters
    if (i < 2) {
      resultsDisplay[i] = document.createElement("h3");
      resultsDisplay[i].setAttribute("id", "result" + [i]);
      rowCreator.appendChild(resultsDisplay[i]);
      //Appends high score and reset buttons and set attributes and format
    } else if (i === 2) {
      resetButton.textContent = "Reset";
      resetButton.setAttribute("class", "btn btn-secondary");
      //Turns button off until initials are entered
      resetButton.disabled = true;
      rowCreator.appendChild(resetButton);
      //Creates column to space reset and high score button
      var columnCreator = document.createElement("div");
      columnCreator.setAttribute("class", "col-1");
      rowCreator.appendChild(columnCreator);
      //Turns off button until initial are entered
      highScore.disabled = true;
      highScore.textContent = "High Score";
      highScore.setAttribute("class", "btn btn-secondary");
      rowCreator.appendChild(highScore);
      //Creates text box for initials, set attributes and appends
    } else if (i === 3) {
      initialsInput.setAttribute("type", "text");
      initialsInput.setAttribute("placeholder", "Enter initials");
      initialsInput.setAttribute("style", "text-align: center");
      rowCreator.appendChild(initialsInput);
      //Adds submit button, adds bootstrap classes, and appends
    } else if (i === 4) {
      submitButton.textContent = "Submit";
      submitButton.setAttribute("class", "btn btn-secondary");
      rowCreator.appendChild(submitButton);
    }
  }
  //Adds text content to correct answer display
  resultsDisplay[0].textContent =
    "Your total number correct was " + correctAnswer;
  //Adds text content to wrong answer display
  resultsDisplay[1].textContent = "Your total number wrong was " + wrongAnswer;
}

//Reset button event listener
resetButton.addEventListener("click", function () {
  //Reset variables
  totalTime = 200;
  questionNumber = 0;
  correctAnswer = 0;
  wrongAnswer = 0;
  //Return placerholder to initial box
  initialsInput.value = initialsInput.defaultValue;
  //Removes Results page elements
  while (quizFramework.hasChildNodes()) {
    quizFramework.removeChild(quizFramework.firstChild);
  }
  //Reset score display
  timeDisplay.textContent = "Score: " + totalTime;
  //Readds start button and start button characteristics
  var rowCreator = document.createElement("section");
  rowCreator.setAttribute("class", "row justify-content-center");
  quizFramework.appendChild(rowCreator);
  rowCreator.appendChild(startButton);
  //Initial text box and submit button returned to visible
  initialsInput.setAttribute("style", "visibility:visible");
  submitButton.setAttribute("style", "visibility:visible");
});

//Submit button event listener
submitButton.addEventListener("click", function () {
  //Prevents operator from moving until initials are submitted
  if (initialsInput.value === "") {
    return;
  } else {
    //Enables high score and reset buttons
    highScore.disabled = false;
    resetButton.disabled = false;
    //Pushes values to initial and score array
    userInitials.push(initialsInput.value);
    userInitials.push(String(totalTime));
    //Replaces or adds array to local storage
    localStorage.setItem("initial", userInitials);
    //Hides button and text box to prevent more than one entry
    initialsInput.setAttribute("style", "visibility:hidden");
    submitButton.setAttribute("style", "visibility:hidden");
  }
});

//High score button event listener
highScore.addEventListener("click", function () {
  //Removes correct and wrong answer displays to make room for scoreboard
  for (var i = 0; i < 2; i++) {
    document.getElementById("result" + [i]).remove();
  }
  //Variables and attributes for bootstrap table to display high score
  var tableCreator = document.createElement("section");
  tableCreator.setAttribute("class", "table");
  var tableHeadCreator = document.createElement("thead");
  var tableRow = document.createElement("tr");
  quizFramework.appendChild(tableCreator);
  tableCreator.appendChild(tableHeadCreator);
  tableHeadCreator.appendChild(tableRow);
  //For loop to add titles for columns on table
  for (var i = 0; i < 2; i++) {
    var tableColumn = document.createElement("th");
    tableColumn.setAttribute("scope", "col");
    if (i === 0) {
      tableColumn.textContent = "Name";
    } else {
      tableColumn.textContent = "Score";
    }
    tableRow.appendChild(tableColumn);
  }
  //Adding table body
  var tableBody = document.createElement("tbody");
  tableCreator.appendChild(tableBody);
  //Arrays used to divide local storage array into users and scores
  var userNames = [];
  var userScore = [];

  //Splits the local storage array and saves into new arrays
  for (var i = 0; i < userInitials.length; i++) {
    userNames.push(userInitials[i]);
    i++;
    userScore.push(Number(userInitials[i]));
  }

  //Creates elements for table with user score and initials and displays top 5 scores
  for (var i = 0; i < 5; i++) {
    //Initials table elements
    var tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    var rowHead = document.createElement("th");
    rowHead.setAttribute("scope", "row");
    //User name determined based on high score.  Uses index position of highest score to find initials in other array.  Adds it to table
    rowHead.textContent =
      userNames[userScore.indexOf(Math.max.apply(null, userScore))];
    tableRow.appendChild(rowHead);
    //Score table element
    var scoreColumn = document.createElement("td");
    //Locates highest score and adds it to element text
    scoreColumn.textContent =
      userScore[userScore.indexOf(Math.max.apply(null, userScore))];
    tableRow.appendChild(scoreColumn);
    //Removes highest score and initials attached with it
    userNames.splice(userScore.indexOf(Math.max.apply(null, userScore)), 1);
    userScore.splice(userScore.indexOf(Math.max.apply(null, userScore)), 1);
  }
});
