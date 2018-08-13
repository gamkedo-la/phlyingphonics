let overallAccuracy = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let numberOfAttempts = 0;
let vowelTrackLevelIndex = 0;
let vowelTrackLevels = [
   ["E","O"],
   ["I","U"],
   ["A","I"],
   ["A","E"],
   ["O","U"],
   ["E","I"],
   ["A","O"],
   ["A","E","O"],
   ["E","I","U"],
   ["A","E","I","O","U"]
];

let temporarySubset = [];
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

function checkForLevelReset() {
  if (arrayOfFlies.length === 0) {
    arrayOfSwattedFlies = [];
    chooseBackground();
    vowelTrackLevelIndex++;
    temporarySubset = vowelTrackLevels[vowelTrackLevelIndex];
    initializeArrayOfFlies();
    assignFlaps();
    fillTemporaryArrayOfQuestions();
  }
}

function calculateOverallAccuracy() {
  overallAccuracy = Math.round( (correctAnswers/numberOfAttempts)*100 );
  document.getElementById("accuracy").innerHTML = overallAccuracy + "%";
}
