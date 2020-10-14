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
// var startButton = document.querySelector("#startButton");
// console.log(startButton);
// startButton.addEventListener("click", function () {
//   startTimer();
//   startButton.setAttribute("style", "width:500px");
// });

$("#startButton").click(function () {
  startTimer();
  $("#startButton").attr("style", "visibility:hidden");
  startQuiz();
});
var questionArray = ["First Question", "Second Question", "Third Question"];
var answerArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(answerArray[0]);

function questionFunction(value) {
  console.log(value);
}

function startQuiz() {
  $("#quizBox").append("<h1>" + questionArray[0] + "</h1>");
  var answerButtonHolder = $("<div>");
  var button1 = $("<button>");
  button1.attr("id", "button1");
  var button2 = $("<button>");
  button2.attr("id", "button2");
  var button3 = $("<button>");
  button3.attr("id", "button3");
  var button4 = $("<button>");
  button4.attr("id", "button4");
  answerButtonHolder.attr("class", "answerButton");
  $("#quizBox").append(answerButtonHolder);
  $(".answerButton").append(button1);
  $(".answerButton").append(button2);
  $(".answerButton").append(button3);
  $(".answerButton").append(button4);
}

$("#quizBox").on("click", ".answerButton", function () {
  NextQuestion();
});

var questionNumber = 1;
function NextQuestion() {
  console.log(questionNumber);
  if (questionNumber === questionArray.length) {
    return;
  }
  $("h1").text(questionArray[questionNumber]);
  questionNumber++;
}
