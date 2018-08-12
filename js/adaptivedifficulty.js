let overallAccuracy = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let numberOfAttempts = 0;

let temporarySubset = ["E","O"];
let temporaryArrayOfQuestions = new Array();

function fillTemporaryArrayOfQuestions() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].myLetter.toLowerCase());
  }
}

function randomLetterWithinSubset () {
  let randomLetterIndex = getRandomInt(0, temporarySubset.length - 1);
  let letter = temporarySubset[randomLetterIndex];
  return letter;
}

function checkForLevelReset(temporarySubset) {
  if (temporarySubset === ["E","O"] && temporaryArrayOfQuestions.length === 0) {
    arrayOfSwattedFlies = [];
    temporarySubset = ["I","U"];
    initializeArrayOfFlies();
    assignFlaps();
    fillTemporaryArrayOfQuestions();
    console.log(temporaryArrayOfQuestions);
  }
}

function calculateOverallAccuracy() {
  overallAccuracy = Math.round( (correctAnswers/numberOfAttempts)*100 );
  document.getElementById("accuracy").innerHTML = overallAccuracy + "%";
}
