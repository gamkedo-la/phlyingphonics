let overallAccuracy = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let numberOfAttempts = 0;

let vowelTrackLevelIndex = 0;
let vowelTrackLevels = [
   ["E","O"],
   ["I","U"],
   ["E","O","I"],
   ["A","I"],
   ["A","E"],
   ["A","E","I"],
   ["O","U"],
   ["A","O"],
   ["A","O","U"],
   ["A","O","U","I"],
   ["A","E","I","O"],
   ["A","E","I","O","U"]
];

let consonantTrackLevelIndex = 0;
let consonantTrackLevels = [
  ["B","D"],
  ["C","X"],
  ["K","X"],
  ["F","V"],
  ["G","K"],
  ["J","G"],
  ["L","N"],
  ["M","N"],
  ["P","B"],
  ["Q","W"],
  ["R","L"],
  ["S","Z"],
  ["D","T"],
  ["V","W"],
  ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"]
]

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

function checkForLevelResetOrAdvancement() {
  if (arrayOfFlies.length === 0 && overallAccuracy >= 80) {
    arrayOfSwattedFlies = [];
    chooseBackground();
    /*consonantTrackLevelIndex++*/vowelTrackLevelIndex++;
    temporarySubset = /*consonantTrackLevels[consonantTrackLevelIndex];*/vowelTrackLevels[vowelTrackLevelIndex];
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
  document.getElementById("accuracy").innerHTML = overallAccuracy + "%";
}

function resetAccuracy() {
  overallAccuracy = 0;
  numberOfAttempts = 0;//offset the increase in handleCanvasClick from final attempt on a level
  correctAnswers = 0;
  document.getElementById("accuracy").innerHTML = "";
}
