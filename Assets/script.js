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

$("body").on("click", "#startButton", function () {
  var quizTimer = setInterval(function () {
    totalTime--;
    $("#timeDisplay").text(totalTime);

    if (totalTime === 0) {
      clearInterval(quizTimer);
      showResult();
    }

    if (questionNumber === questionArray.length + 1) {
      clearInterval(quizTimer);
      showResult();
    }
  }, 1000);
  $("#startButton").attr("style", "visibility:hidden");
  startQuiz();
});

function startQuiz() {
  $("#startButton").remove();
  $("#quizBox").append("<h1>" + questionArray[0] + "</h1>");
  var answerButtonHolder = $("<div>");
  var button1 = $("<button>");
  button1.attr("id", "button0");
  var button2 = $("<button>");
  button2.attr("id", "button1");
  var button3 = $("<button>");
  button3.attr("id", "button2");
  var button4 = $("<button>");
  button4.attr("id", "button3");
  answerButtonHolder.attr("class", "answerButton");
  $("#quizBox").append(answerButtonHolder);
  $(".answerButton").append(button1);
  $(".answerButton").append(button2);
  $(".answerButton").append(button3);
  $(".answerButton").append(button4);
  for (var i = 0; i < 4; i++) {
    stringI = "#button" + String(i);
    $(stringI).text(Object.keys(answerArray[questionNumber])[i]);
  }
  questionNumber++;
}

$("#quizBox").on("click", "#button0", function () {
  selectedAnswer = $(button0).text();
});

$("#quizBox").on("click", "#button1", function () {
  selectedAnswer = $(button1).text();
});

$("#quizBox").on("click", "#button2", function () {
  selectedAnswer = $(button2).text();
});

$("#quizBox").on("click", "#button3", function () {
  selectedAnswer = $(button3).text();
});

$("#quizBox").on("click", ".answerButton", function () {
  CheckCorrect();
  NextQuestion();
});

function NextQuestion() {
  if (questionNumber === questionArray.length) {
    questionNumber++;
    return;
  }
  $("h1").text(questionArray[questionNumber]);

  for (var i = 0; i < 4; i++) {
    stringI = "#button" + String(i);
    $(stringI).text(Object.keys(answerArray[questionNumber])[i]);
  }
  questionNumber++;
}

function CheckCorrect() {
  if (answerArray[questionNumber - 1][selectedAnswer]) {
    userScore = userScore + 5;
    correctAnswer++;
  } else {
    wrongAnswer++;
  }
}

function showResult() {
  $("#timeDisplay").attr("style", "visibility:hidden");
  $(".answerButton").remove();
  var resultDisplay = $(
    "<h3>" +
      "Your total score was " +
      userScore +
      "</h3>" +
      "<h3>" +
      "Your total number correct was " +
      correctAnswer +
      "</h3>" +
      "<h3>" +
      "Your total number wrong was " +
      wrongAnswer +
      "</h3>"
  );
  $("body").append(resultDisplay);
  resetButton = $("<button>");
  resetButton.text("Reset Quiz");
  resetButton.attr("id", "resetButton");
  $("#quizBox").append(resetButton);
  highScore = $("<button>");
  highScore.text("High Score Board");
  highScore.attr("id", "highScore");
  $("#quizBox").append(highScore);
}

$("#quizBox").on("click", "#resetButton", function () {
  $("#resetButton").remove();
  $("#highScore").remove();
  $("h1").remove();
  $("h3").remove();
  $("h2").attr("style", "visibility:visible");
  var startButton = $("<button>");
  startButton.text("Start");
  startButton.attr("id", "startButton");
  $("#quizBox").append(startButton);
  questionNumber = 0;
  totalTime = 30;
});
