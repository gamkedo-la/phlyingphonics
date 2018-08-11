let overallAccuracy = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let numberOfAttempts = 0;

let temporarySubset = ["E","O"];
let temporaryArrayOfQuestions = new Array();

function fillTemporaryArrayOfQuestions() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].myLetter);
  }
}

function randomLetterWithinSubset () {
  let randomLetterIndex = getRandomInt(0, temporarySubset.length - 1);
  let letter = temporarySubset[randomLetterIndex];
  return letter;
}
