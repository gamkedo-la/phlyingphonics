let overallAccuracy = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let numberOfAttempts = 0;

let temporarySubset = [];
let temporaryArrayOfQuestions = new Array();



function fillTemporaryArrayOfQuestions() {
  if ( currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithPhonics();
  } else if ( currentTrack === bigLettersTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithBigLetters();
  } else if ( currentTrack === smallLettersTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithSmallLetters();
  } else if ( currentTrack === mixedSizeLetterNameLevels ) {
    fillTemporaryArrayOfQuestionsWithBigAndSmallLetters();
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

function fillTemporaryArrayOfQuestionsWithBigAndSmallLetters() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].myLetterToCheck);
  }
}

function randomLetterWithinSubset () {
  let randomLetterIndex = getRandomInt(0, temporarySubset.length - 1);
  let letter = temporarySubset[randomLetterIndex];
  if (currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels) {
    letter = letter.charAt(6);
  }
  return letter
}

function updateLettersThatHaveBeenPracticed() {
  console.log("temporarySubset", temporarySubset);
  console.log("phonicString", arrayOfPhonicResults[0].phonicString);
  for (let temporarySubsetIndex = 0; temporarySubsetIndex<temporarySubset.length; temporarySubsetIndex++) {
    for (let arrayOfPhonicResultsIndex = 0; arrayOfPhonicResultsIndex<arrayOfPhonicResults.length; arrayOfPhonicResultsIndex++) {
      if (temporarySubset[temporarySubsetIndex] === arrayOfPhonicResults[arrayOfPhonicResultsIndex].phonicString) {
        console.log("hello world");
        arrayOfPhonicResults[arrayOfPhonicResultsIndex].hasBeenPracticed = true;
      }
    }
  }
  for (let i = 0;i<arrayOfPhonicResults.length;i++) {
    if (arrayOfPhonicResults[i].hasBeenPracticed) {
      console.log(arrayOfPhonicResults[i].phonicString + ".hasBeenPracticed", arrayOfPhonicResults[i].hasBeenPracticed);
    }
  }
}

function checkForLevelResetOrAdvancement() {
  if (arrayOfFlies.length === 0 && overallAccuracy >= 80) {
    updateLettersThatHaveBeenPracticed();
    updateIndividualTargetsPreviousPracticeSessionNumbers();
    updateIndividualTargetsPreviousPracticeDate();
    adjustPracticeFrequencyAtEndOfLevel(temporarySubset);//in input.js line 22
    fillArrayOfTargetsToPractice();//playerProfile.js 292
    arrayOfSwattedFlies = [];
    chooseBackground();
    trackIndex++;
    temporarySubset = currentTrack[trackIndex];
    resetAccuracy();
    initializeArrayOfFlies(temporarySubset);
    assignFlaps();
    assignMyLetterToCheck();
    fillTemporaryArrayOfQuestions();
    for (let i = 0; i<arrayOfPhonicResults.length;i++) {
      if (arrayOfPhonicResults[i].previousPracticeDate !== undefined) {
        console.log(arrayOfPhonicResults[i].phonicString + ".previousPracticeDate", arrayOfPhonicResults[i].previousPracticeDate);
        console.log("currentPracticeDateInDays", currentPracticeDateInDays);
      }
    }

  } else if (arrayOfFlies.length === 0 && overallAccuracy < 80) {
    updateLettersThatHaveBeenPracticed();
    updateIndividualTargetsPreviousPracticeSessionNumbers();
    updateIndividualTargetsPreviousPracticeDate();
    adjustPracticeFrequencyAtEndOfLevel(temporarySubset);//in input.js line 22
    fillArrayOfTargetsToPractice();//playerProfile.js 292
    arrayOfSwattedFlies = [];
    resetAccuracy();
    chooseBackground();
    initializeArrayOfFlies(temporarySubset);
    assignFlaps();
    assignMyLetterToCheck();
    fillTemporaryArrayOfQuestions();
    for (let i = 0; i<arrayOfPhonicResults.length;i++) {
      if (arrayOfPhonicResults[i].previousPracticeDate !== undefined) {
        console.log(arrayOfPhonicResults[i].phonicString + ".previousPracticeDate", arrayOfPhonicResults[i].previousPracticeDate);
        console.log("currentPracticeDateInDays", currentPracticeDateInDays);
      }
    }
  }
}

function calculateOverallAccuracy() {
  let previousAccuracy = overallAccuracy;
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

let resetTemporaryArrayOfQuestions = () => {
  temporaryArrayOfQuestions = [];
  fillTemporaryArrayOfQuestions();
}

let resetTemporaryArrayOfQuestionsWithBigLetters = () => {
  temporaryArrayOfQuestions = [];
  fillTemporaryArrayOfQuestionsWithBigLetters();
}

let resetTemporaryArrayOfQuestionsWithSmallLetters = () => {
  temporaryArrayOfQuestions = [];
  fillTemporaryArrayOfQuestionsWithSmallLetters();
}

let resetTemporaryArrayOfQuestionsWithBigAndSmallLetters = () => {
  temporaryArrayOfQuestions = [];
  fillTemporaryArrayOfQuestionsWithBigAndSmallLetters();
}

let assignMyLetterToCheck = () => {
  for ( let i = 0; i < arrayOfFlies.length; i++ ) {
    if ( currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels ) {
      arrayOfFlies[i].myLetterToCheck = "phonic" + arrayOfFlies[i].myLetter.toLowerCase();
    } else if ( currentTrack === bigLettersTrackLevels ) {
       arrayOfFlies[i].myLetterToCheck = "big" + arrayOfFlies[i].myLetter;
     } else if ( currentTrack === smallLettersTrackLevels ) {
       arrayOfFlies[i].myLetterToCheck = "small" + arrayOfFlies[i].myLetter.toUpperCase();
     } else if ( currentTrack === mixedSizeLetterNameLevels ) {
       if ( arrayOfFlies[i].myLetter === arrayOfFlies[i].myLetter.toLowerCase() ) {
         arrayOfFlies[i].myLetterToCheck = "small" + arrayOfFlies[i].myLetter.toUpperCase();
       } else {
         arrayOfFlies[i].myLetterToCheck = "big" + arrayOfFlies[i].myLetter.toUpperCase();
       }
     }
  }
}
