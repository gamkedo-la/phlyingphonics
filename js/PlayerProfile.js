let arrayOfTargetsToPractice = [];
let previousPracticeDay = undefined;
let currentPracticeDay = undefined;
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
  console.log(currentPracticeSessionNumber);
}

function updateIndividualTargetsPreviousPracticeSessionNumbers() {
  for (let temporarySubsetIndex = 0; temporarySubsetIndex<temporarySubset.length; temporarySubsetIndex++) {
    for (let arrayOfPhonicResultsIndex = 0; arrayOfPhonicResultsIndex<arrayOfPhonicResults.length; arrayOfPhonicResultsIndex++) {
      if (temporarySubset[temporarySubsetIndex] === arrayOfPhonicResults[arrayOfPhonicResultsIndex].phonicString) {
        arrayOfPhonicResults[arrayOfPhonicResultsIndex].previousSessionNumber = currentPracticeSessionNumber;
      }
    }
  }
}

let storedPhonicResults = localStorage.getItem("storedPhonicResults");

previousPracticeDay = localStorage.getItem("currentDay");
let date = new Date();
currentPracticeDay = date.getDay();
localStorage.setItem("currentDay", currentPracticeDay);
fillArrayOfTargetsToPractice();


function fillArrayOfTargetsToPractice() {
  arrayOfTargetsToPractice = [];
  if (storedPhonicResults === null) {
    return;
  }
  for (let i = 0; i<storedPhonicResults.length; i++) {
    if (storedPhonicResults[i].practiceFrequency === Math.abs(currentPracticeSessionNumber - storedPhonicResults[i].previousSessionNumber)) {
      arrayOfTargetsToPractice.push(arrayOfPhonicResults[i].phonicString);
    }
  }
}

function phonicClass(phonicString){
  this.phonicString = phonicString;
  this.correctAnswers = 0;
  this.unCorrectAnswers = 0;
  this.accuracy = 100;
  this.numberOfAttempts = 0;

  this.practiceFrequency = 1;
  this.previousSessionNumber = 1;

  this.calculateAccuracy = function() {
    let reviousAccuracy = this.accuracy;
    this.accuracy = Math.round( (this.correctAnswers/this.numberOfAttempts)*100 );
    this.accuracy = this.accuracy ? this.accuracy : 0;
  }

  this.adjustPracticeFrequency = function() {
    if (this.accuracy > 80) {
      this.practiceFrequency = 4;
    } else if (this.accuracy > 65 && this.accuracy <= 80) {
        this.practiceFrequency = 3;
      } else if (this.accuracy > 50 && this.accuracy <= 65) {
        this.practiceFrequency = 2;
      } else if (this.accuracy <= 50) {
        this.practiceFrequency = 1;
      }
    }
  }


let a = new phonicClass("phonica");
let b = new phonicClass("phonicb");
let c = new phonicClass("phonicc");
let d = new phonicClass("phonicd");
let e = new phonicClass("phonice");
let f = new phonicClass("phonicf");
let g = new phonicClass("phonicg");
let h = new phonicClass("phonich");
let i = new phonicClass("phonici");
let j = new phonicClass("phonicj");
let k = new phonicClass("phonick");
let l = new phonicClass("phonicl");
let m = new phonicClass("phonicm");
let n = new phonicClass("phonicn");
let o = new phonicClass("phonico");
let p = new phonicClass("phonicp");
let q = new phonicClass("phonicq");
let r = new phonicClass("phonicr");
let s = new phonicClass("phonics");
let t = new phonicClass("phonict");
let u = new phonicClass("phonicu");
let v = new phonicClass("phonicv");
let w = new phonicClass("phonicw");
let x = new phonicClass("phonicx");
let y = new phonicClass("phonicy");
let z = new phonicClass("phonicz");

let A = new phonicClass("A");
let B = new phonicClass("B");
let C = new phonicClass("C");
let D = new phonicClass("D");
let E = new phonicClass("E");
let F = new phonicClass("F");
let G = new phonicClass("G");
let H = new phonicClass("H");
let I = new phonicClass("I");
let J = new phonicClass("J");
let K = new phonicClass("K");
let L = new phonicClass("L");
let M = new phonicClass("M");
let N = new phonicClass("N");
let O = new phonicClass("O");
let P = new phonicClass("P");
let Q = new phonicClass("Q");
let R = new phonicClass("R");
let S = new phonicClass("S");
let T = new phonicClass("T");
let U = new phonicClass("U");
let V = new phonicClass("V");
let W = new phonicClass("W");
let X = new phonicClass("X");
let Y = new phonicClass("Y");
let Z = new phonicClass("Z");

let bigA = new phonicClass("bigA");
let bigB = new phonicClass("bigB");
let bigC = new phonicClass("bigC");
let bigD = new phonicClass("bigD");
let bigE = new phonicClass("bigE");
let bigF = new phonicClass("bigF");
let bigG = new phonicClass("bigG");
let bigH = new phonicClass("bigH");
let bigI = new phonicClass("bigI");
let bigJ = new phonicClass("bigJ");
let bigK = new phonicClass("bigK");
let bigL = new phonicClass("bigL");
let bigM = new phonicClass("bigM");
let bigN = new phonicClass("bigN");
let bigO = new phonicClass("bigO");
let bigP = new phonicClass("bigP");
let bigQ = new phonicClass("bigQ");
let bigR = new phonicClass("bigR");
let bigS = new phonicClass("bigS");
let bigT = new phonicClass("bigT");
let bigU = new phonicClass("bigU");
let bigV = new phonicClass("bigV");
let bigW = new phonicClass("bigW");
let bigX = new phonicClass("bigX");
let bigY = new phonicClass("bigY");
let bigZ = new phonicClass("bigZ");

let smallA = new phonicClass("smallA");
let smallB = new phonicClass("smallB");
let smallC = new phonicClass("smallC");
let smallD = new phonicClass("smallD");
let smallE = new phonicClass("smallE");
let smallF = new phonicClass("smallF");
let smallG = new phonicClass("smallG");
let smallH = new phonicClass("smallH");
let smallI = new phonicClass("smallI");
let smallJ = new phonicClass("smallJ");
let smallK = new phonicClass("smallK");
let smallL = new phonicClass("smallL");
let smallM = new phonicClass("smallM");
let smallN = new phonicClass("smallN");
let smallO = new phonicClass("smallO");
let smallP = new phonicClass("smallP");
let smallQ = new phonicClass("smallQ");
let smallR = new phonicClass("smallR");
let smallS = new phonicClass("smallS");
let smallT = new phonicClass("smallT");
let smallU = new phonicClass("smallU");
let smallV = new phonicClass("smallV");
let smallW = new phonicClass("smallW");
let smallX = new phonicClass("smallX");
let smallY = new phonicClass("smallY");
let smallZ = new phonicClass("smallZ");

let InitializePhonics = () => {
   a = new phonicClass("a");
   b = new phonicClass("b");
   c = new phonicClass("c");
   d = new phonicClass("d");
   e = new phonicClass("e");
   f = new phonicClass("f");
   g = new phonicClass("g");
   h = new phonicClass("h");
   i = new phonicClass("i");
   j = new phonicClass("j");
   k = new phonicClass("k");
   l = new phonicClass("l");
   m = new phonicClass("m");
   n = new phonicClass("n");
   o = new phonicClass("o");
   p = new phonicClass("p");
   q = new phonicClass("q");
   r = new phonicClass("r");
   s = new phonicClass("s");
   t = new phonicClass("t");
   u = new phonicClass("u");
   v = new phonicClass("v");
   w = new phonicClass("w");
   x = new phonicClass("x");
   y = new phonicClass("y");
   z = new phonicClass("z");

   A = new phonicClass("A");
   B = new phonicClass("B");
   C = new phonicClass("C");
   D = new phonicClass("D");
   E = new phonicClass("E");
   F = new phonicClass("F");
   G = new phonicClass("G");
   H = new phonicClass("H");
   I = new phonicClass("I");
   J = new phonicClass("J");
   K = new phonicClass("K");
   L = new phonicClass("L");
   M = new phonicClass("M");
   N = new phonicClass("N");
   O = new phonicClass("O");
   P = new phonicClass("P");
   Q = new phonicClass("Q");
   R = new phonicClass("R");
   S = new phonicClass("S");
   T = new phonicClass("T");
   U = new phonicClass("U");
   V = new phonicClass("V");
   W = new phonicClass("W");
   X = new phonicClass("X");
   Y = new phonicClass("Y");
   Z = new phonicClass("Z");
}

let arrayOfPhonicResults = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,
                            A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,
                            bigA,bigB,bigC,bigD,bigE,bigF,bigG,bigH,bigI,bigJ,
                            bigK,bigL,bigM,bigN,bigO,bigP,bigQ,bigR,bigS,bigT,
                            bigU,bigV,bigW,bigX,bigY,bigZ,
                            smallA,smallB,smallC,smallD,smallE,smallF,smallG,
                            smallH,smallI,smallJ,smallK,smallL,smallM,smallN,
                            smallO,smallP,smallQ,smallR,smallS,smallT,smallU,
                            smallV,smallW,smallX,smallY,smallZ];
