//First timer
//Load Question
//Third Buttons with answers
//Fourth make them interchangable
//Fifth Clean up
var totalTime = 30;
function startTimer() {
  setInterval(function () {
    totalTime--;
    $("#timeDisplay").text(totalTime);
  }, 1000);
}

$("#startButton").click(function () {
  setInterval(function () {
    totalTime--;
    $("#timeDisplay").text(totalTime);
  }, 1000);
  $("#startButton").attr("style", "visibility:hidden");
  startQuiz();
});
var questionArray = [
  "First Question",
  "Second Question",
  "Third Question",
  "Fourth Question",
  "Fifth Question",
];
var answerArray = [
  { "The wofj owfjo": true, op: false, yo: false, omk: false },
  { pop: false, ye: true, lp: false, mm: false },
];

questionNumber = 0;
function startQuiz() {
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
    alert("You are correct");
  }
}
