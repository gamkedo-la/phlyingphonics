let overallAccuracy = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let numberOfAttempts = 0;

let temporarySubset = [];
let temporaryArrayOfQuestions = new Array();

function fillTemporaryArrayOfQuestions() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].myLetter.toLowerCase());
  }
}

function fillTemporaryArrayOfQuestionsWithBigLetters() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].myLetter);
  }
}

function randomLetterWithinSubset () {
  let randomLetterIndex = getRandomInt(0, temporarySubset.length - 1);
  let letter = temporarySubset[randomLetterIndex];
  return letter;
}

function checkForLevelResetOrAdvancement() {
  if (arrayOfFlies.length === 0 && overallAccuracy >= 80) {
    arrayOfSwattedFlies = [];
    chooseBackground();
    consonantTrackLevelIndex++//vowelTrackLevelIndex++;
    temporarySubset = consonantTrackLevels[consonantTrackLevelIndex];//vowelTrackLevels[vowelTrackLevelIndex];
    resetAccuracy();
    initializeArrayOfFlies();
    assignFlaps();
    fillTemporaryArrayOfQuestions();

  } else if (arrayOfFlies.length === 0 && overallAccuracy < 80) {
    arrayOfSwattedFlies = [];
    resetAccuracy();
    chooseBackground();
    initializeArrayOfFlies();
    assignFlaps();
    fillTemporaryArrayOfQuestions();
  }
}

function calculateOverallAccuracy() {
  overallAccuracy = Math.round( (correctAnswers/numberOfAttempts)*100 );
  overallAccuracy = overallAccuracy ? overallAccuracy : 0;
  accuracyDiv.innerHTML = overallAccuracy + "%";
}

function resetAccuracy() {
  overallAccuracy = 0;
  numberOfAttempts = 0;//offset the increase in handleCanvasClick from final attempt on a level
  correctAnswers = 0;
  accuracyDiv.innerHTML = "";
}

let resetTemporaryArrayOfQuestionsWithBigLetters = () => {
  temporaryArrayOfQuestions = [];
  fillTemporaryArrayOfQuestionsWithBigLetters();
  for (let i = 0; i<arrayOfFlies.length; i++) {
    console.log(arrayOfFlies[i].myLetter);
  }
}

let resetTemporaryArrayOfQuestions = () => {
  temporaryArrayOfQuestions = [];
  fillTemporaryArrayOfQuestions();
}
