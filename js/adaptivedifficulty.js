let overallAccuracy = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let numberOfAttempts = 0;

let temporarySubset = [];
let temporaryArrayOfQuestions = new Array();

function fillTemporaryArrayOfQuestions() {
  if ( currentTrack === vowelTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithPhonics();
  } else if ( currentTrack === bigLettersTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithBigLetters();
  } else if ( currentTrack === smallLettersTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithSmallLetters();
  } else if ( currentTrack === consonantTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithPhonics();
  }
}

function fillTemporaryArrayOfQuestionsWithPhonics() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].myLetter.toLowerCase());
  }
}

function fillTemporaryArrayOfQuestionsWithBigLetters() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].myLetter);
  }
}

function fillTemporaryArrayOfQuestionsWithSmallLetters() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].myLetter.toLowerCase());
  }
}

function randomLetterWithinSubset () {
  let randomLetterIndex = getRandomInt(0, temporarySubset.length - 1);
  let letter = temporarySubset[randomLetterIndex];
  return letter
}

function checkForLevelResetOrAdvancement() {
  if (arrayOfFlies.length === 0 && overallAccuracy >= 80) {
    arrayOfSwattedFlies = [];
    chooseBackground();
    trackIndex++
    temporarySubset = currentTrack[trackIndex];//vowelTrackLevels[vowelTrackLevelIndex];
    resetAccuracy();
    initializeArrayOfFlies();
    assignFlaps();
    assignMyLetterToCheck();
    fillTemporaryArrayOfQuestions();

  } else if (arrayOfFlies.length === 0 && overallAccuracy < 80) {
    arrayOfSwattedFlies = [];
    resetAccuracy();
    chooseBackground();
    initializeArrayOfFlies();
    assignFlaps();
    assignMyLetterToCheck();
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
}

let resetTemporaryArrayOfQuestions = () => {
  temporaryArrayOfQuestions = [];
  fillTemporaryArrayOfQuestions();
}

let assignMyLetterToCheck = () => {
  for ( let i = 0; i < arrayOfFlies.length; i++ ) {
    if ( currentTrack === vowelTrackLevels) {
      arrayOfFlies[i].myLetterToCheck = arrayOfFlies[i].myLetter.toLowerCase();
    } else if ( currentTrack === consonantTrackLevels ) {
       arrayOfFlies[i].myLetterToCheck = arrayOfFlies[i].myLetter.toLowerCase();
     } else if ( currentTrack === bigLettersTrackLevels ) {
       arrayOfFlies[i].myLetterToCheck = "big" + arrayOfFlies[i].myLetter;
     } else if ( currentTrack === smallLettersTrackLevels ) {
       arrayOfFlies[i].myLetterToCheck = "small" + arrayOfFlies[i].myLetter;
     }
  }
}
