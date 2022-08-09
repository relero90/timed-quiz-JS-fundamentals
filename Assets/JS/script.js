// Variable Declarations
var start = document.querySelector("#start");
var correct = document.querySelectorAll("#correct");
var incorrect = document.querySelectorAll("#incorrect");
var feedback = document.querySelectorAll("#user-feedback");
var userScore = 0;
// Functions

// Event Listeners
// < ---------------------------------------- >
// When user clicks on the start button
start.addEventListener("click", function () {
  console.log("hello");
  // start timer function
  // disappear start screen
  // display question 1
});

// When user clicks on a correct answer
// For each button in the correct array - run scoreUp function

correct.forEach((correct) => {
  correct.addEventListener("click", function handleClick(event) {
    // add points to value of userScore
    userScore = userScore + 17;
    // alert user
    // feedback = feedback.textContent(
    //   "Correct! Your current score is " + userScore
    // );
    console.log(userScore);
    correct.setAttribute(
      "style",
      "background-color: var(--green); color: var(--navy)"
    );
    // (function??) remove question from display & display next question
  });
});

// When user clicks on an incorrect answer
incorrect.forEach((incorrect) => {
  incorrect.addEventListener("click", function handleClick(event) {
    // alert user
    feedback.forEach((feedback) => {
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
