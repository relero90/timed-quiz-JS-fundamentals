// Variable Declarations
var startBtn = document.querySelector("#start");
var timeLeft = 20;
var rtnStartBtn = document.querySelector("#rtn-start");
var saveBtn = document.querySelector("#save");
var timerEl = document.querySelector("#countdown-display");
var startScrn = document.querySelector("#start-container");
var questions = document.querySelectorAll("#question-container");
// Arrays of correct/incorrect buttons
var rightBtn = document.querySelectorAll("#correct");
var wrongBtn1 = document.querySelectorAll("#incorrect-1");
var wrongBtn2 = document.querySelectorAll("#incorrect-2");
var wrongBtn3 = document.querySelectorAll("#incorrect-3");
var feedback = document.querySelectorAll("#user-feedback");
// User information gathering & storage
var userInitials = document.querySelector("#initials");
var userScore = 0;
var savedScores = [];
var scoreBoardEl = document.querySelector("#score-board");
var timeInterval;

// Functions
// to always start by pulling local storage memory into savedScores array
function setSavedScores() {
  if (JSON.parse(localStorage.getItem("storedDataString")) !== null) {
    renderScoreLog();
    console.log(savedScores);
  }
}
setSavedScores();

function captureUserInputs() {
  var input1 = userInitials.value.trim();
  var input2 = localStorage.getItem("score");
  var scoreRecord = input1 + " -- " + input2;
  savedScores.push(scoreRecord);
  // console.log(savedScores);

  var storedStringInput = JSON.stringify(savedScores);
  localStorage.setItem("storedDataString", storedStringInput);
}
// Grabs stored score & initial information and adds it to the current savedScores array
function renderScoreLog() {
  scoreBoardEl.textContent = "";
  // Grabs items from the "storedDataString" that are stored in local storage and changes them back into object items in the array savedScores
  savedScores = JSON.parse(localStorage.getItem("storedDataString"));
  // For each item in the savedScores array, create a list item equal to the value of that item; append the li to scoreBoardEl
  for (var i = 0; i < savedScores.length; i++) {
    // troubleshoot -
    // array duplicates old entries when adding new ones (first submit results in 1 <li>, next one 2, then 3...)
    var pulledScore = savedScores[i];
    var printedScore = document.createElement("li");
    printedScore.textContent = pulledScore;
    printedScore.setAttribute("data-index", i);
    scoreBoardEl.appendChild(printedScore);
  }
}
// Resets game without impacting scores stored locally
function returnToStart() {
  clearInterval(timeInterval);
  userScore = 0;
  timeLeft = 20;
  timerEl.textContent = "Time Left: " + timeLeft + " sec";
  $('input[type="text"]').val("");
  startScrn.setAttribute("class", "visible");
  questions[questions.length - 1].setAttribute("class", "hidden");
  renderScoreLog();
}
// Timer Function - display a timer and count down

function keepTime() {
  // setInterval()calls a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft + " sec";
    // exit condition
    if (timeLeft === 0 || timeLeft <= 0) {
      clearInterval(timeInterval);
      // jump to end screen
      startScrn.setAttribute("class", "hidden");
      questions[questions.length - 1].setAttribute("class", "visible");
      for (var i = 0; i < questions.length - 1; i++) {
        questions[i].setAttribute("class", "hidden");
      }
      // display time's up message
      feedback[feedback.length - 1].textContent =
        "Time is up! Your final score is " + userScore + ".";
    } else if (
      // if user reaches the end before timeLeft=0
      questions[questions.length - 1].classList.contains("visible") === true
    ) {
      // multiply timeLeft by 5 and add it to userScore
      userScore = userScore + timeLeft * 5;
      localStorage.setItem("score", userScore);
      clearInterval(timeInterval);
      // display the bonus points message
      feedback[feedback.length - 1].textContent =
        "Extra time bonus! Your final score is " + userScore + ".";
    }
  }, 1000);
}

// Timer Function - remove time when the user answers incorrectly
function timeDown() {
  if (timeLeft < 3) {
    timeLeft = 0;
  } else {
    timeLeft = timeLeft - 3;
  }
}

// Event Listeners
// When user clicks on the start button
startBtn.addEventListener("click", function () {
  // disappear start screen & show question 1
  startScrn.setAttribute("class", "hidden");
  questions[0].setAttribute("class", "visible");
  // start timer function
  keepTime();
});
// When user clicks on a correct answer
rightBtn.forEach((correct, i) => {
  correct.addEventListener("click", function handleClick() {
    // add points to value of userScore & stores value locally
    userScore = userScore + 27;
    localStorage.setItem("score", userScore);
    // alert user (any question but last)
    if (i < rightBtn.length - 1) {
      feedback[i + 1].textContent =
        "Correct! Your current score is " + userScore + ".";
    }
    // If this is the last question,
    else {
      // display textContent feedback message
      feedback[i + 1].textContent =
        "Correct! Your final score is " + userScore + ".";
    }
    // Disappear current question & display next question
    questions[i].setAttribute("class", "hidden");
    questions[i + 1].setAttribute("class", "visible");
  });
});
// When user clicks on an incorrect answer
wrongBtn1.forEach((incorrect, i) => {
  incorrect.addEventListener("click", function handleClick() {
    // Save userScore to local Storage without changing its value
    userScore = userScore;
    localStorage.setItem("score", userScore);
    // alert user (any question but last)
    if (i < wrongBtn1.length - 1) {
      feedback[i + 1].textContent = "Oops! Time deducted!";
      // Deduct time from timer
      timeDown();
      // Disappear current question & display next question
      questions[i].setAttribute("class", "hidden");
      questions[i + 1].setAttribute("class", "visible");
    } else {
      feedback[i + 1].textContent =
        "Oops! Your final score is " + userScore + ".";
      // Disappear current question & display next question
      questions[i].setAttribute("class", "hidden");
      questions[i + 1].setAttribute("class", "visible");
    }
  });
});
wrongBtn2.forEach((wrong, i) => {
  wrong.addEventListener("click", function handleClick() {
    // Save userScore to local Storage without changing its value
    userScore = userScore;
    localStorage.setItem("score", userScore);
    // alert user (any question but last)
    if (i < wrongBtn2.length - 1) {
      feedback[i + 1].textContent = "Oops! Time deducted!";
      // Deduct time from timer
      timeDown();
      // Disappear current question & display next question
      questions[i].setAttribute("class", "hidden");
      questions[i + 1].setAttribute("class", "visible");
    } else {
      feedback[i + 1].textContent =
        "Oops! Your final score is " + userScore + ".";
      // Disappear current question & display next question
      questions[i].setAttribute("class", "hidden");
      questions[i + 1].setAttribute("class", "visible");
    }
  });
});
wrongBtn3.forEach((wayOff, i) => {
  wayOff.addEventListener("click", function handleClick() {
    // Save userScore to local Storage without changing its value
    userScore = userScore;
    localStorage.setItem("score", userScore);
    // alert user (any question but last)
    if (i < wrongBtn3.length - 1) {
      feedback[i + 1].textContent = "Oops! Time deducted!";
      // Deduct time from timer
      timeDown();
      // Disappear current question & display next question
      questions[i].setAttribute("class", "hidden");
      questions[i + 1].setAttribute("class", "visible");
    } else {
      feedback[i + 1].textContent =
        "Oops! Your final score is " + userScore + ".";
      // Disappear current question & display next question
      questions[i].setAttribute("class", "hidden");
      questions[i + 1].setAttribute("class", "visible");
    }
  });
});

// When user clicks Save Score button...
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // captures user inputs into an object, stringifies them, and stores in local storage
  captureUserInputs();

  renderScoreLog();
  // need a different function? - print only the one user addition OR replace existing <lis> with new ones
});

rtnStartBtn.addEventListener("click", function () {
  returnToStart();
});
