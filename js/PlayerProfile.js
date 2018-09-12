let currentProfile = undefined;
let arrayOfTargetsToPractice = [];
let previousPracticeDate = undefined;
let currentPracticeDate = Date.now();
let oneDayInMilliseconds = 24 * 60 * 60 * 1000;
let currentPracticeDateInDays = currentPracticeDate/oneDayInMilliseconds;
let currentPracticeSessionNumber;


function initializeCurrentPracticeSessionNumber() {
  if (localStorage.getItem("currentPracticeSessionNumber") === null) {
    localStorage.setItem("currentPracticeSessionNumber", 1);
    currentPracticeSessionNumber = localStorage.getItem("currentPracticeSessionNumber");
  } else {
    currentPracticeSessionNumber = localStorage.getItem("currentPracticeSessionNumber");
    currentPracticeSessionNumber++;
    localStorage.setItem("currentPracticeSessionNumber", currentPracticeSessionNumber);
  }
}

function updateIndividualTargetsPreviousPracticeSessionNumbers() {
  for (let temporarySubsetIndex = 0; temporarySubsetIndex<temporarySubset.length; temporarySubsetIndex++) {
    for (let arrayOfTargetResultsIndex = 0; arrayOfTargetResultsIndex<arrayOfTargetResults.length; arrayOfTargetResultsIndex++) {
      if (temporarySubset[temporarySubsetIndex] === arrayOfTargetResults[arrayOfTargetResultsIndex].targetString) {
        arrayOfTargetResults[arrayOfTargetResultsIndex].previousSessionNumber = currentPracticeSessionNumber;
      }
    }
  }
}

function updateIndividualTargetsPreviousPracticeDate() {
  for (let temporarySubsetIndex = 0; temporarySubsetIndex<temporarySubset.length; temporarySubsetIndex++) {
    for (let arrayOfTargetResultsIndex = 0; arrayOfTargetResultsIndex<arrayOfTargetResults.length; arrayOfTargetResultsIndex++) {
      if (temporarySubset[temporarySubsetIndex] === arrayOfTargetResults[arrayOfTargetResultsIndex].targetString) {
        arrayOfTargetResults[arrayOfTargetResultsIndex].previousPracticeDate = currentPracticeDateInDays;
      }
    }
  }
}

let storedTargetResults;
if  (localStorage.getItem("storedTargetResults") === null) {
  storedTargetResults = undefined;
} else {
  storedTargetResults = localStorage.getItem("storedTargetResults");
}

if (localStorage.getItem("currentDate") === null) {
  previousPracticeDate = undefined;
} else {
  previousPracticeDate = localStorage.getItem("currentDate");
}


let date = new Date();
localStorage.setItem("currentDate", currentPracticeDate);
//fillArrayOfTargetsToPractice();

function shouldPracticeTargetToday(letter) {


  let previousPracticeDate = new Date(letter.previousPracticeDate);
  let daysSincePracticed = currentPracticeDateInDays - letter.previousPracticeDate;

  if (letter.hasBeenPracticed && daysSincePracticed >= letter.practiceFrequency) {
    return letter;
  }
}


function targetClass(targetString){
  this.targetString = targetString;
  this.correctAnswers = 0;
  this.unCorrectAnswers = 0;
  this.accuracy = 100;
  this.numberOfAttempts = 0;

  this.hasBeenPracticed = false;
  this.practiceFrequency = undefined;
  this.previousSessionNumber = 1;
  this.previousPracticeDate = undefined;

  this.calculateAccuracy = function() {
    let reviousAccuracy = this.accuracy;
    this.accuracy = Math.round( (this.correctAnswers/this.numberOfAttempts)*100 );
    this.accuracy = this.accuracy ? this.accuracy : 0;
  }

  this.adjustPracticeFrequency = function() {
    if (this.accuracy > 80) {
      this.practiceFrequency = 2.5;
    } else if (this.accuracy > 65 && this.accuracy <= 80) {
        this.practiceFrequency = 2;
      } else if (this.accuracy > 50 && this.accuracy <= 65) {
        this.practiceFrequency = 1.5;
      } else if (this.accuracy <= 50) {
        this.practiceFrequency = 1;
      }
    }
  }


let phonica = new targetClass("phonica");
let phonicb = new targetClass("phonicb");
let phonicc = new targetClass("phonicc");
let phonicd = new targetClass("phonicd");
let phonice = new targetClass("phonice");
let phonicf = new targetClass("phonicf");
let phonicg = new targetClass("phonicg");
let phonich = new targetClass("phonich");
let phonici = new targetClass("phonici");
let phonicj = new targetClass("phonicj");
let phonick = new targetClass("phonick");
let phonicl = new targetClass("phonicl");
let phonicm = new targetClass("phonicm");
let phonicn = new targetClass("phonicn");
let phonico = new targetClass("phonico");
let phonicp = new targetClass("phonicp");
let phonicq = new targetClass("phonicq");
let phonicr = new targetClass("phonicr");
let phonics = new targetClass("phonics");
let phonict = new targetClass("phonict");
let phonicu = new targetClass("phonicu");
let phonicv = new targetClass("phonicv");
let phonicw = new targetClass("phonicw");
let phonicx = new targetClass("phonicx");
let phonicy = new targetClass("phonicy");
let phonicz = new targetClass("phonicz");

let smallA = new targetClass("smallA");
let smallB = new targetClass("smallB");
let smallC = new targetClass("smallC");
let smallD = new targetClass("smallD");
let smallE = new targetClass("smallE");
let smallF = new targetClass("smallF");
let smallG = new targetClass("smallG");
let smallH = new targetClass("smallH");
let smallI = new targetClass("smallI");
let smallJ = new targetClass("smallJ");
let smallK = new targetClass("smallK");
let smallL = new targetClass("smallL");
let smallM = new targetClass("smallM");
let smallN = new targetClass("smallN");
let smallO = new targetClass("smallO");
let smallP = new targetClass("smallP");
let smallQ = new targetClass("smallQ");
let smallR = new targetClass("smallR");
let smallS = new targetClass("smallS");
let smallT = new targetClass("smallT");
let smallU = new targetClass("smallU");
let smallV = new targetClass("smallV");
let smallW = new targetClass("smallW");
let smallX = new targetClass("smallX");
let smallY = new targetClass("smallY");
let smallZ = new targetClass("smallZ");

let bigA = new targetClass("bigA");
let bigB = new targetClass("bigB");
let bigC = new targetClass("bigC");
let bigD = new targetClass("bigD");
let bigE = new targetClass("bigE");
let bigF = new targetClass("bigF");
let bigG = new targetClass("bigG");
let bigH = new targetClass("bigH");
let bigI = new targetClass("bigI");
let bigJ = new targetClass("bigJ");
let bigK = new targetClass("bigK");
let bigL = new targetClass("bigL");
let bigM = new targetClass("bigM");
let bigN = new targetClass("bigN");
let bigO = new targetClass("bigO");
let bigP = new targetClass("bigP");
let bigQ = new targetClass("bigQ");
let bigR = new targetClass("bigR");
let bigS = new targetClass("bigS");
let bigT = new targetClass("bigT");
let bigU = new targetClass("bigU");
let bigV = new targetClass("bigV");
let bigW = new targetClass("bigW");
let bigX = new targetClass("bigX");
let bigY = new targetClass("bigY");
let bigZ = new targetClass("bigZ");



let arrayOfTargetResults = [phonica,phonicb,phonicc,phonicd,phonice,phonicf,phonicg,phonich,phonici,phonicj,phonick,phonicl,phonicm,phonicn,
                            phonico,phonicp,phonicq,phonicr,phonics,phonict,phonicu,phonicv,phonicw,phonicx,phonicy,phonicz,
                            bigA,bigB,bigC,bigD,bigE,bigF,bigG,bigH,bigI,bigJ,
                            bigK,bigL,bigM,bigN,bigO,bigP,bigQ,bigR,bigS,bigT,
                            bigU,bigV,bigW,bigX,bigY,bigZ,
                            smallA,smallB,smallC,smallD,smallE,smallF,smallG,
                            smallH,smallI,smallJ,smallK,smallL,smallM,smallN,
                            smallO,smallP,smallQ,smallR,smallS,smallT,smallU,
                            smallV,smallW,smallX,smallY,smallZ];

function fillArrayOfTargetsToPractice() {
  arrayOfTargetsToPractice = [];
  if (currentProfile === undefined) {
    return;
  } else {
    currentProfile.targetsToPractice = []; // FIXME this can be undefined at startup
  }
  arrayOfTargetResults.forEach(function(letter) {
    if(shouldPracticeTargetToday(letter)){//PlayerProfile.js line 48
      currentProfile.targetsToPractice.push(letter.targetString);
      arrayOfTargetsToPractice.push(letter.targetString);
      localStorage.setItem("arrayOfTargetsToPractice", arrayOfTargetsToPractice);
      localStorage.setItem("storedArrayOfProfiles", JSON.stringify(arrayOfProfiles));
    }
  });
}
