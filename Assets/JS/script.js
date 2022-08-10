// Variable Declarations
var start = document.querySelector("#start");
var startScrn = document.querySelector("#start-container");
var questions = document.querySelectorAll("#question-container");
// Arrays of correct/incorrect buttons
var rigButton = document.querySelectorAll("#correct");
var wrgButton1 = document.querySelectorAll("#incorrect-1");
var wrgButton2 = document.querySelectorAll("#incorrect-2");
var wrgButton3 = document.querySelectorAll("#incorrect-3");
// User feedback string
var feedback = document.querySelectorAll("#user-feedback");
var userInit = document.querySelector("#initials");
var savButton = document.querySelector("#save");
var userScore = 0;
var savdScores = [];
var scorBrd = document.querySelector("#score-board");
// Functions
// Timer Function - display a timer and count down
function keepTime() {}
// Timer Function - remove time when the user answers incorrectly
function timeDown() {}

// Event Listeners
// When user clicks on the start button
start.addEventListener("click", function () {
  // disappear start screen & show question 1
  startScrn.setAttribute("class", "hidden");
  questions[0].setAttribute("class", "visible");
  // start timer function
  keepTime();
});
// When user clicks on a correct answer
rigButton.forEach((correct, i) => {
  correct.addEventListener("click", function handleClick() {
    // add points to value of userScore & stores value locally
    userScore = userScore + 27;
    localStorage.setItem("score", userScore);
    // alert user (any question but last)
    if (i < rigButton.length - 1) {
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
wrgButton1.forEach((incorrect, i) => {
  incorrect.addEventListener("click", function handleClick() {
    // alert user (any question but last)
    if (i < wrgButton1.length - 1) {
      feedback[i + 1].textContent = "Oops! Time deducted!";
      // Deduct time from timer

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
wrgButton2.forEach((wrong, i) => {
  wrong.addEventListener("click", function handleClick() {
    // alert user (any question but last)
    if (i < wrgButton2.length - 1) {
      feedback[i + 1].textContent = "Oops! Time deducted!";
      // Deduct time from timer

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
wrgButton3.forEach((wayOff, i) => {
  wayOff.addEventListener("click", function handleClick() {
    // alert user (any question but last)
    if (i < wrgButton3.length - 1) {
      feedback[i + 1].textContent = "Oops! Time deducted!";
      // Deduct time from timer

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
savButton.addEventListener("click", function (event) {
  event.preventDefault();
  // put user inputs into an object
  var userInputs = {
    initials: userInit.value.trim(),
    score: localStorage.getItem("score"),
  };

  savdScores.push(userInputs);

  // send user inputs as a string to local storage
  localStorage.setItem("savdScores", JSON.stringify(savdScores));

  // run next function
  pullScoreLog();
});

// Grabs stored score & initial information and adds it to the current savdScores array
function pullScoreLog() {
  // Grabs any items from the scoreLog string that are stored in local storage and changes them into array items in the array scoreBank
  var scoreBank = JSON.parse(localStorage.getItem("savdScores"));
  console.log(scoreBank);
  // If there is something in scoreBank (value not equal to null), add that something to the savdScores array.
  // if (scoreBank !== null) {
  //   savdScores.push(scoreBank);
  // }
  console.log(savdScores);
  // call the next function
  renderScoreLog();
}

function renderScoreLog() {
  // For each item in the savdScores array, create a list item equal to the value of that item; append the li to scorBrd
  for (var i = 0; i < savdScores.length; i++) {
    var element = savdScores[i];

    var scorRcrd = document.createElement("li");
    // not successfully inserting text content
    scorRcrd.textContent = element.initials + "--" + element.score;
    scorRcrd.setAttribute("data-index", i);
    scorBrd.appendChild(scorRcrd);
  }
}
