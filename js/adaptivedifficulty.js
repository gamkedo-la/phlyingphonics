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
  ["B","C"],
  ["C","D"],
  ["B","D"],
  ["B","C","D"],
  ["C","X"],
  ["C","X","D"],
  ["C","X","B","D"],
  ["B","P",],
  ["B","P","D"],
  ["B","P","D","C","X"],
  ["K","X"],
  ["B","P","D","K","X"],
  ["F","V"],
  ["F","V","B"],
  ["F","V","B","P"],
  ["F","V","B","P","C"],
  ["F","V","B","P","C","X"],
  ["F","V","B","P","C","X","D"],
  ["G","K"],
  ["J","G"],
  ["J","G","K"],
  ["G","H"],
  ["G","H","J"],
  ["G","H","J","K"],
  ["G","H","J","K","X"],
  ["L","N"],
  ["L","N","G"],
  ["L","N","G","K"],
  ["L","N","G","K","J"],
  ["M","N"],
  ["L","M","N"],
  ["L","M","N","G","K"],
  ["L","M","N","G","K","J"],
  ["F","V","B","P","C","X","D","L","M","N","G","K","J"],
  ["Q","W"],
  ["Q","W","R"],
  ["R","L"],
  ["R","L","M"],
  ["R","L","M","N"],
  ["R","L","M","N","Q","W"],
  ["S","Z"],
  ["D","T"],
  ["D","T","B"],
  ["D","T","B","P"],
  ["V","W"],
  ["V","W","F"],
  ["X","Y"],
  ["W","X","Y"],
  ["V","W","Y"],
  ["V","W","Y","F"],
  ["R","L","M","N","Q","W","S","Z"],
  ["V","W","F","D","T","B","P"],
  ["C","G","H","J","K","X","Y"],
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
  document.getElementById("accuracy").innerHTML = overallAccuracy + "%";
}

function resetAccuracy() {
  overallAccuracy = 0;
  numberOfAttempts = 0;//offset the increase in handleCanvasClick from final attempt on a level
  correctAnswers = 0;
  document.getElementById("accuracy").innerHTML = "";
}
