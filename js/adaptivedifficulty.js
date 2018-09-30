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
  } else if ( currentTrack === customTrack ) {
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

function assignRawTargetData(i, temporarySubset) {
  let rawTargetData;

  if (i < temporarySubset.length) {
    rawTargetData = temporarySubset[i];
  } else {
    rawTargetData = randomTargetWithinSubset();
  }

  return rawTargetData;
}

function randomTargetWithinSubset () {
  //console.log("temporarySubset", temporarySubset);
  let randomTargetIndex = getRandomInt(0, temporarySubset.length - 1);
  let target = temporarySubset[randomTargetIndex];
  return target
}


function updateLettersThatHaveBeenPracticed() {
  for (let temporarySubsetIndex = 0; temporarySubsetIndex<temporarySubset.length; temporarySubsetIndex++) {
    for (let arrayOfTargetResultsIndex = 0; arrayOfTargetResultsIndex<arrayOfTargetResults.length; arrayOfTargetResultsIndex++) {
      if (temporarySubset[temporarySubsetIndex] === arrayOfTargetResults[arrayOfTargetResultsIndex].targetString) {
        arrayOfTargetResults[arrayOfTargetResultsIndex].hasBeenPracticed = true;
      }
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
    chooseBackgroundSong();
    trackIndex++;
    temporarySubset = currentTrack[trackIndex];
    resetAccuracy();
    initializeArrayOfFlies(temporarySubset);
    assignFlaps();

  } else if (arrayOfFlies.length === 0 && overallAccuracy < 80) {
    updateLettersThatHaveBeenPracticed();
    updateIndividualTargetsPreviousPracticeSessionNumbers();
    updateIndividualTargetsPreviousPracticeDate();
    adjustPracticeFrequencyAtEndOfLevel(temporarySubset);//in input.js line 22
    fillArrayOfTargetsToPractice();//playerProfile.js 292
    arrayOfSwattedFlies = [];
    resetAccuracy();
    chooseBackground();
    chooseBackgroundSong();
    initializeArrayOfFlies(temporarySubset);
    assignFlaps();
  }
}

function chooseBackgroundSong() {
  if (chosenBackground === "tree2") {
    backgroundMusic.pause();
    backgroundMusic.src = "audio/butterflylevelsong.mp3";
    backgroundMusic.volume = 0.3;
    backgroundMusic.play();
  } else if (chosenBackground === "BabyRoomBG") {
    backgroundMusic.pause();
    backgroundMusic.src = "audio/babyroomsong.mp3";
    backgroundMusic.volume = 0.5;
    backgroundMusic.play();
  }
  else {
    backgroundMusic.pause();
    backgroundMusic.src = "audio/flightOfTheABCs.mp3";
    backgroundMusic.volume = 0.1;
    backgroundMusic.play();
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
