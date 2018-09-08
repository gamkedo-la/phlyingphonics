let overallAccuracy = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let numberOfAttempts = 0;

let temporarySubset = [];
let temporaryArrayOfQuestions = new Array();



function fillTemporaryArrayOfQuestions() {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    console.log("arrayOfFlies[i].myVisualLetter", arrayOfFlies[i].myVisualLetter);
  }
  if ( currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithPhonics();
  } else if ( currentTrack === bigLettersTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithBigLetters();
  } else if ( currentTrack === smallLettersTrackLevels ) {
    fillTemporaryArrayOfQuestionsWithSmallLetters();
  } else if ( currentTrack === mixedSizeLetterNameLevels ) {
    fillTemporaryArrayOfQuestionsWithBigAndSmallLetters();
  } else if ( currentTrack === customTrack ) {
    //console.log("arrayOfFlies", arrayOfFlies);
    fillTemporaryArrayOfQuestionWithAnyPossibleTarget();

  }
}

function fillTemporaryArrayOfQuestionsWithPhonics() {
  temporaryArrayOfQuestions = [];
  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].rawTargetData);
  }
}

function fillTemporaryArrayOfQuestionsWithBigLetters() {
  temporaryArrayOfQuestions = [];

  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].rawTargetData);
  }
}

function fillTemporaryArrayOfQuestionsWithSmallLetters() {
  temporaryArrayOfQuestions = [];

  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].rawTargetData);
  }
}

function fillTemporaryArrayOfQuestionsWithBigAndSmallLetters() {
  temporaryArrayOfQuestions = [];

  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].rawTargetData);
  }
}

function fillTemporaryArrayOfQuestionWithAnyPossibleTarget() {
  temporaryArrayOfQuestions = [];

  for (let i = 0; i<arrayOfFlies.length; i++) {
    temporaryArrayOfQuestions.push(arrayOfFlies[i].rawTargetData);
  }
}

function assignVisualLetter(rawTargetData) {
  let visualLetter;
  if (currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels) {
    visualLetter = "small" + rawTargetData.charAt(6);
  } else if (currentTrack === smallLettersTrackLevels || currentTrack === bigLettersTrackLevels || currentTrack === mixedSizeLetterNameLevels) {
    visualLetter = rawTargetData;
  } else if (currentTrack === customTrack) {
      console.log("rawTargetData", rawTargetData);
      if (rawTargetData.length === 7) {
        visualLetter = "small" + rawTargetData.charAt(6);
      } else {
        visualLetter = rawTargetData;
      }
    }
  return visualLetter;
}

function assignTargetSoundForSprite() {
  let targetSoundForSprite = randomTargetWithinSubset();
  return targetSoundForSprite;
}

function assignRawTargetData() {
  let rawTargetData = randomTargetWithinSubset();
  return rawTargetData;
}

function randomTargetWithinSubset () {
  console.log("temporarySubset", temporarySubset);
  let randomTargetIndex = getRandomInt(0, temporarySubset.length - 1);
  let target = temporarySubset[randomTargetIndex];
  return target
}
//if ( (currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels || currentTrack === customTrack ) && letter.length === 4 ) {
//  letter = letter;
//} else if ( (currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels || currentTrack === customTrack ) && letter.length === 6 ) {
//  letter = letter.charAt(5);}
//}

function updateLettersThatHaveBeenPracticed() {
  //console.log("temporarySubset", temporarySubset);
  //console.log("myTargetString", arrayOfTargetResults[0].targetString);
  for (let temporarySubsetIndex = 0; temporarySubsetIndex<temporarySubset.length; temporarySubsetIndex++) {
    for (let arrayOfTargetResultsIndex = 0; arrayOfTargetResultsIndex<arrayOfTargetResults.length; arrayOfTargetResultsIndex++) {
      if (temporarySubset[temporarySubsetIndex] === arrayOfTargetResults[arrayOfTargetResultsIndex].targetString) {
        //console.log("hello world");
        arrayOfTargetResults[arrayOfTargetResultsIndex].hasBeenPracticed = true;
      }
    }
  }
  for (let i = 0;i<arrayOfTargetResults.length;i++) {
    if (arrayOfTargetResults[i].hasBeenPracticed) {
      //console.log(arrayOfTargetResults[i].targetString + ".hasBeenPracticed", arrayOfTargetResults[i].hasBeenPracticed);
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
    //console.log("temporarySubset", temporarySubset);
    resetAccuracy();
    //console.log("trackIndex", trackIndex);
    //console.log("currentTrack", currentTrack);
    //console.log("temporarySubset", temporarySubset);
    initializeArrayOfFlies(temporarySubset);
    assignFlaps();
    //assignMyLetterToCheck();
    for (let i = 0; i<arrayOfTargetResults.length;i++) {
      if (arrayOfTargetResults[i].previousPracticeDate !== undefined) {
        //console.log(arrayOfTargetResults[i].targetString + ".previousPracticeDate", arrayOfTargetResults[i].previousPracticeDate);
        //console.log("currentPracticeDateInDays", currentPracticeDateInDays);
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
    //assignMyLetterToCheck();
    for (let i = 0; i<arrayOfTargetResults.length;i++) {
      if (arrayOfTargetResults[i].previousPracticeDate !== undefined) {
        //console.log(arrayOfTargetResults[i].targetString + ".previousPracticeDate", arrayOfTargetResults[i].previousPracticeDate);
        //console.log("currentPracticeDateInDays", currentPracticeDateInDays);
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
      arrayOfFlies[i].myLetterToCheck = "phonic" + arrayOfFlies[i].myVisualLetter.toLowerCase();
    } else if ( currentTrack === bigLettersTrackLevels ) {
       arrayOfFlies[i].myLetterToCheck = "big" + arrayOfFlies[i].myVisualLetter;
     } else if ( currentTrack === smallLettersTrackLevels ) {
       arrayOfFlies[i].myLetterToCheck = "small" + arrayOfFlies[i].myVisualLetter.toUpperCase();
     } else if ( currentTrack === mixedSizeLetterNameLevels ) {
       if ( arrayOfFlies[i].myVisualLetter === arrayOfFlies[i].myVisualLetter.toLowerCase() ) {
         arrayOfFlies[i].myLetterToCheck = "small" + arrayOfFlies[i].myVisualLetter.toUpperCase();
       } else {
         arrayOfFlies[i].myLetterToCheck = "big" + arrayOfFlies[i].myVisualLetter.toUpperCase();
       }
     } else if ( currentTrack === customTrack ) {
       arrayOfFlies[i].myLetterToCheck = "phonic" + arrayOfFlies[i].myVisualLetter.toLowerCase();
     }
  }
}
