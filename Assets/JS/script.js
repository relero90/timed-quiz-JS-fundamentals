// Variable Declarations
var start = document.querySelector("#start");
var startScrn = document.querySelector("#start-container");
var questions = document.querySelectorAll("#question-container");
// Arrays of correct/incorrect buttons
var rigButton = document.querySelectorAll("#correct");
var wrgButton = document.querySelectorAll("#incorrect");
// User feedback string
var feedback = document.querySelectorAll("#user-feedback");

var userScore = 0;

// Functions
// Timer Function - display a timer and count down
function keepTime() {}
// Timer Function - remove time when the user answers incorrectly
function timeDown() {}

// Event Listeners
// < ---------------------------------------- >
// When user clicks on the start button
start.addEventListener("click", function () {
  // disappear start screen & show question 1
  startScrn.setAttribute("class", "hidden");
  questions[0].setAttribute("class", "visible");
  // start timer function
  keepTime();
});

// When user clicks on a correct answer
// For each button in the correct array - run handleClick function
rigButton.forEach((correct, i) => {
  correct.addEventListener("click", function handleClick(event) {
    // add points to value of userScore
    userScore = userScore + 27;
    localStorage.setItem("score", userScore);
    // alert user
    // give new feedback
    // If this is the first question,
    if (i < rigButton.length - 1) {
      feedback[i + 1].textContent =
        "Correct! Your current score is " + userScore + ".";
      correct.setAttribute(
        "style",
        "background-color: var(--green); color: var(--navy)"
      );
    }
    // If this is the last question,
    else {
      feedback[i].textContent =
        "Correct! Your final score is " + userScore + ".";
      correct.setAttribute(
        "style",
        "background-color: var(--green); color: var(--navy)"
      );
      // display score & initial recorder
    }

    feedback[i].textContent =
      "Correct! Your current score is " + userScore + ".";
    correct.setAttribute(
      "style",
      "background-color: var(--green); color: var(--navy)"
    );

    // Disappear current question & display next question
    questions[i].setAttribute("class", "hidden");
    questions[i + 1].setAttribute("class", "visible");
    // feedback[i].textContent = "";
  });
});

// When user clicks on an incorrect answer
wrgButton.forEach((incorrect, i) => {
  incorrect.addEventListener("click", function handleClick(event) {
    // alert user
    feedback.forEach((feedback) => {
      // JS returning error feedback.textContent
      feedback = feedback.textContent(
        "Correct! Your current score is " + userScore
      );
      console.log(userScore);
      correct.setAttribute(
        "style",
        "background-color: var(--white); color: var(--green)"
      );
      // (function??) remove question from display & display next question
    });
  });
});

// incorrect.addEventListener("click", function () {
//   // deduct time from the timer
//   // alert user
//   feedback.textContent("Oops! That's not quite it. Where does the time go?");
//   // reveal correct answer
// });
