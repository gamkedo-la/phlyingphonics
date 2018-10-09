function increaseIndividualTargetAccuracy() {
  for (let i = 0; i<arrayOfTargetResults.length; i++) {
    if (targetAudio === arrayOfTargetResults[i].targetString) {
      arrayOfTargetResults[i].correctAnswers++;
      arrayOfTargetResults[i].numberOfAttempts++;
      arrayOfTargetResults[i].calculateAccuracy();
    }
  }
}

function decreaseIndividualTargetAccuracy() {
  for (let i = 0; i<arrayOfTargetResults.length; i++) {
    if (targetAudio === arrayOfTargetResults[i].targetString) {
      arrayOfTargetResults[i].unCorrectAnswers++;
      arrayOfTargetResults[i].numberOfAttempts++;
      arrayOfTargetResults[i].calculateAccuracy();
    }
  }
}

function adjustPracticeFrequencyAtEndOfLevel(temporarySubset) {
  for (let temporarySubsetIndex = 0; temporarySubsetIndex<temporarySubset.length; temporarySubsetIndex++) {
    for (let arrayOfTargetResultsIndex = 0; arrayOfTargetResultsIndex<arrayOfTargetResults.length; arrayOfTargetResultsIndex++) {
      if (temporarySubset[temporarySubsetIndex] === arrayOfTargetResults[arrayOfTargetResultsIndex].targetString) {
      arrayOfTargetResults[arrayOfTargetResultsIndex].adjustPracticeFrequency();
      }
    }
  }
}

function handleMousedown(evt) {
  inputX = evt.pageX;
  inputY = evt.pageY;
  inputPressed = true;
  console.log("inputPressed", inputPressed);
  console.log("mousedown X/Y", inputX,inputY);
  console.log("left mouse button pressed", inputPressed);
}

function handleMouseup(evt) {
  inputX = evt.pageX;
  inputY = evt.pageY;
  inputPressed = false;
  console.log("mouseup X/Y", inputX,inputY);
  console.log("left mouse button pressed", inputPressed);
}


function handleTouchstart(evt) {

  inputX = evt.changedTouches[0].pageX;
  inputY = evt.changedTouches[0].pageY;
  inputPressed = true;
  console.log("finger touchstart X/Y", inputX,inputY)
  console.log("inputPressed", inputPressed);
}

function handleTouchend(evt) {

  inputX = evt.changedTouches[evt.changedTouches.length - 1].pageX;
  inputY = evt.changedTouches[evt.changedTouches.length - 1].pageY;
  inputPressed = false;
  console.log("finger touchend X/Y", inputX,inputY);
  console.log("inputPressed", inputPressed);
}


let clickCount = 0;
let inputPressed = false;

function handleCanvasClick(evt, inputX,inputY) {//inputX,inputY,
  console.log(evt);
  goSoundPlayed = false;
  if (intro) {
    handleIntroInput(evt.pageX,evt.pageY);//inputX,inputY,
    return;
  } else if (isOpeningLanguageSelector) {
    handleOpeningLanguageSelectorInput(inputX,inputY);//inputX,inputY,
    return;
  } else if (isProfileMenu) {
    handleProfileMenuInput(evt.pageX,evt.pageY);//inputX,inputY,
  } else if (isShowingExistingProfiles) {
    handleExistingProfileMenuInput(evt.pageX,evt.pageY);//inputX,inputY,
  } else if (isSettingsMenu) {
    handleSettingsMenuInput(evt.pageX,evt.pageY);//inputX,inputY,
  } else if (isCreditsMenu) {
    handleCreditsMenuInput(evt.pageX,evt.pageY);//inputX,inputY,
  } else if (levelCompletedAnimation || tryAgainAnimation) {
    handleLevelCompletedInput(evt.pageX,evt.pageY);//inputX,inputY,
  }
    else { //gameplay click info

    if (!tutorial) {
  clickCount++;

  numberOfAttempts++;


  let hits = 0;
  let incorrectAnswer = false;
  let correctAnswer = false;



    for (let i = 0; i<arrayOfFlies.length; i++) {
      //correct answers
      if (evt.pageX >= arrayOfFlies[i].leftEdge + 30 && evt.pageX <= arrayOfFlies[i].rightEdge - 30 &&
          evt.pageY >= arrayOfFlies[i].topEdge + 30 && evt.pageY <= arrayOfFlies[i].bottomEdge - 30 && arrayOfFlies[i].target) {
        increaseIndividualTargetAccuracy();
        correctAnswer = true;
        incorrectAnswer = false;
        correctAnswers++;
        hits++;
        calculateOverallAccuracy();
        killFly(i);//at the top of this page, replaces image with yellowgreensplat, stops motion, clears fly from collision detection, and plays correct answer sound
        temporaryArrayOfQuestions.splice(0,1);
        checkForLevelResetOrAdvancement(temporarySubset);//in adaptivedifficulty.js
        assignTargetAudio();//in targets.js
        assignTargetFlies(i);//in targets.js
        playTargetAudio();//in targets.js
        return;
        /*end of correct answers*/
      } else if (evt.pageX >= arrayOfFlies[i].leftEdge + 30 && evt.pageX <= arrayOfFlies[i].rightEdge - 30 &&
                 evt.pageY >= arrayOfFlies[i].topEdge + 30 && evt.pageY <= arrayOfFlies[i].bottomEdge - 30 && !arrayOfFlies[i].target) {
        calculateOverallAccuracy();
        screenShake(7);
        correctAnswer = false;
        incorrectAnswer = true;
        let randomIncorrectSoundIndex = getRandomInt(0,arrayOfIncorrectSounds.length - 1);
        let incorrectSound = document.getElementById("incorrectSound");
        incorrectSound.src = arrayOfIncorrectSounds[randomIncorrectSoundIndex];
        if (!tutorial) {
          incorrectSound.play();
        }


      }//end of incorrect answers
    }//end of looping through flies
    if (hits === 0 && !correctAnswer && !incorrectAnswer) {
      decreaseIndividualTargetAccuracy();
      let randomMissedSoundIndex = getRandomInt(0,arrayOfMissedSounds.length - 1);
      let missedSound = document.getElementById("missedSound");
      missedSound.src = arrayOfMissedSounds[randomMissedSoundIndex];
      if (!tutorial) {
        missedSound.play();
      }

    }//end of complete miss

}//end of mouse clicks
}
}


function setupKeyboardDateHackInput() {
    document.addEventListener("keydown", keyPressed);
};

const NUMBER_PAD_PLUS = 107; // to increase currentDate;
const NUMBER_PAD_MINUS = 109; // to decrease currentDate;
const KEYBOARD_PLUS = 187; // to increase all previous practice dates;
const KEYBOARD_MINUS = 189; // to decrease all previous practice dates;
const ENTER = 13; // to hack calculate targets to be practiced, to check that the srs algorithm is behaving properly;
const UP_ARROW = 38; // master volume up
const DOWN_ARROW = 40; // master volume down

function keyPressed(evt) {
    switch (evt.keyCode) {
      case KEYBOARD_PLUS:
        increasePreviousPracticeDates();
        break;
      case KEYBOARD_MINUS:
        decreasePreviousPracticeDates();
        break;
      case NUMBER_PAD_PLUS:
        increaseCurrentPracticeDateInDays();
        break;
      case NUMBER_PAD_MINUS:
        decreaseCurrentPracticeDateInDays();
        break;
      case ENTER:
        hackulateTargetsToBePracticed();
        break;
      case UP_ARROW:
        masterVolumeUp();
        break;
      case DOWN_ARROW:
        masterVolumeDown();
        break;
      }
    }

function increasePreviousPracticeDates() {
  for (let i = 0; i<arrayOfTargetResults.length;i++) {
    if (arrayOfTargetResults[i].hasBeenPracticed) {
      arrayOfTargetResults[i].previousPracticeDate += 0.1;//by only a tenth of a day to give more precise testing of algorithm
      console.log("*****");
      console.log(arrayOfTargetResults[i].targetString + ".previousPracticeDate", arrayOfTargetResults[i].previousPracticeDate);
      console.log("*****");

    }
  }
}

function decreasePreviousPracticeDates(temporarySubset) {
  for (let i = 0; i<arrayOfTargetResults.length;i++) {
    if (arrayOfTargetResults[i].hasBeenPracticed) {
      arrayOfTargetResults[i].previousPracticeDate -= 0.1;//by only a tenth of a day to give more precise testing of algorithm
      console.log("*****");
      console.log(arrayOfTargetResults[i].targetString + ".previousPracticeDate", arrayOfTargetResults[i].previousPracticeDate);
      console.log("*****");
    }
  }
}

function increaseCurrentPracticeDateInDays() {//by only a tenth of a day to give more precise testing of algorithm

  currentPracticeDateInDays = ( (currentPracticeDateInDays*oneDayInMilliseconds) + (oneDayInMilliseconds*0.1) ) / oneDayInMilliseconds;
  console.log("currentPracticeDateInDays",currentPracticeDateInDays);
}

function decreaseCurrentPracticeDateInDays() {//by only a tenth of a day to give more precise testing of algorithm
  currentPracticeDateInDays = ( (currentPracticeDateInDays*oneDayInMilliseconds) - (oneDayInMilliseconds*0.1) ) / oneDayInMilliseconds;
  console.log("currentPracticeDateInDays",currentPracticeDateInDays);
}

function hackulateTargetsToBePracticed() {
  console.log("arrayOfTargetResults", arrayOfTargetResults);
  for (let i = 0; i<arrayOfTargetResults.length;i++) {
    if ( arrayOfTargetResults[i].hasBeenPracticed && shouldPracticeTargetToday(arrayOfTargetResults[i]) ) {
      console.log(arrayOfTargetResults[i].targetString + "should be practiced");
      fillArrayOfTargetsToPractice();
      console.log("arrayOfTargetsToPractice", arrayOfTargetsToPractice);
    }
  }
}

let vowelButton = document.getElementById("vowelButton");
let accuracyDiv = document.getElementById("accuracyDiv");
vowelButton.onclick = function() {
  stopTargetAudio();
  currentTrack = vowelTrackLevels;
  temporarySubset = vowelTrackLevels[0];
  resetLevelFromUIClick();
}

let consonantButton = document.getElementById("consonantButton");
consonantButton.onclick = function() {
  stopTargetAudio();
  currentTrack = consonantTrackLevels;
  temporarySubset = consonantTrackLevels[0];
  resetLevelFromUIClick();
}

let resetLevelFromUIClick = () => {
  chooseBackground();
  stopTargetAudio();
  clearFlies();//in flies.js
  initializeArrayOfFlies(temporarySubset);
  assignFlaps();
  resetAccuracy();
  resetTemporaryArrayOfQuestions();
  resetTargetAudioAndTargetFlies();
}

let bigLetters = document.getElementById("bigLetters");
bigLetters.onclick = function() {
  stopTargetAudio();
  currentTrack = bigLettersTrackLevels;
  trackIndex = 0;
  temporarySubset = bigLettersTrackLevels[trackIndex];
  resetLevelFromUIClickWithBigLetters();
}

let resetLevelFromUIClickWithBigLetters = () => {
  stopTargetAudio();
  chooseBackground();
  clearFlies();//in flies.js
  initializeArrayOfFlies(temporarySubset);
  assignFlaps();
  resetAccuracy();
  resetTargetAudioAndTargetFlies();//in adaptivedifficulty.js
}

let smallLetters = document.getElementById("smallLetters");
smallLetters.onclick = function() {
  stopTargetAudio();
  currentTrack = smallLettersTrackLevels;
  trackIndex = 0;
  temporarySubset = smallLettersTrackLevels[trackIndex];
  resetLevelFromUIClickWithSmallLetters();
}

let resetLevelFromUIClickWithSmallLetters = () => {
  stopTargetAudio();
  chooseBackground();
  clearFlies();//in flies.js
  initializeArrayOfFlies(temporarySubset);
  assignFlaps();
  resetAccuracy();
  resetTemporaryArrayOfQuestionsWithSmallLetters();//in adaptivedifficulty.js
  resetTargetSmallLetterNameAndTargetFlies();//in targets.js
}

let bigAndSmallLetters = document.getElementById("bigAndSmallLetters");
bigAndSmallLetters.onclick = function() {
  stopTargetAudio();
  currentTrack = mixedSizeLetterNameLevels;
  trackIndex = 0;
  temporarySubset = currentTrack[trackIndex];
  resetLevelFromUIClickWithBigAndSmallLetters();
}

let resetLevelFromUIClickWithBigAndSmallLetters = () => {
  chooseBackground();
  clearFlies();//in flies.js
  initializeArrayOfFlies(temporarySubset);
  assignFlaps();
  resetAccuracy();
  resetTemporaryArrayOfQuestionsWithBigAndSmallLetters();//in adaptivedifficulty.js
  resetTargetBigOrSmallLetterNameAndTargetFlies();//in targets.js
}

//ridiculously long list of onclick functions for individual levels, don't look unless you have to!!! haha
let eoButton = document.getElementById("eo");
eoButton.index = 0;
eoButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 0;
  temporarySubset = vowelTrackLevels[0];
  resetLevelFromUIClick();
}

let iuButton = document.getElementById("iu");
iuButton.index = 1;
iuButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 1;
  temporarySubset = vowelTrackLevels[1];
  resetLevelFromUIClick();
}

let eoiButton = document.getElementById("eoi");
eoiButton.index = 2;
eoiButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 2;
  temporarySubset = vowelTrackLevels[2];
  resetLevelFromUIClick();
}

let aiButton = document.getElementById("ai");
aiButton.index = 3;
aiButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 3;
  temporarySubset = vowelTrackLevels[3];
  resetLevelFromUIClick();
}

let aeButton = document.getElementById("ae");
aeButton.index = 4;
aeButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 4;
  temporarySubset = vowelTrackLevels[4];
  resetLevelFromUIClick();
}

let aeiButton = document.getElementById("aei");
aeiButton.index = 5;
aeiButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 5;
  temporarySubset = vowelTrackLevels[5];
  resetLevelFromUIClick();
}

let ouButton = document.getElementById("ou");
ouButton.index = 6;
ouButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 6;
  temporarySubset = vowelTrackLevels[6];
  resetLevelFromUIClick();
}

let aoButton = document.getElementById("ao");
aoButton.index = 7;
aoButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 7;
  temporarySubset = vowelTrackLevels[7];
  resetLevelFromUIClick();
}

let aouButton = document.getElementById("aou");
aouButton.index = 8;
aouButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 8;
  temporarySubset = vowelTrackLevels[8];
  resetLevelFromUIClick();
}

let aouiButton = document.getElementById("aoui");
aouiButton.index = 9;
aouiButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 9;
  temporarySubset = vowelTrackLevels[9];
  resetLevelFromUIClick();
}

let aeioButton = document.getElementById("aeio");
aeioButton.index = 10;
aeioButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 10;
  temporarySubset = vowelTrackLevels[10];
  resetLevelFromUIClick();
}

let aeiouButton = document.getElementById("aeiou");
aeiouButton.index = 11;
aeiouButton.onclick = function() {
  currentTrack = vowelTrackLevels;
  trackIndex = 11;
  temporarySubset = vowelTrackLevels[11];
  resetLevelFromUIClick();
}

let bcButton = document.getElementById("bc");
bcButton.index = 0;
bcButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 0;
  temporarySubset = consonantTrackLevels[0];
  resetLevelFromUIClick();
}

let cdButton = document.getElementById("cd");
cdButton.index = 1;
cdButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 1;
  temporarySubset = consonantTrackLevels[1];
  resetLevelFromUIClick();
}

let bdButton = document.getElementById("bd");
bdButton.index = 2;
bdButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 2;
  temporarySubset = consonantTrackLevels[2];
  resetLevelFromUIClick();
}

let bcdButton = document.getElementById("bcd");
bcdButton.index = 3;
bcdButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 3;
  temporarySubset = consonantTrackLevels[3];
  resetLevelFromUIClick();
}

let cxButton = document.getElementById("cx");
cxButton.index = 4;
cxButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 4;
  temporarySubset = consonantTrackLevels[4];
  resetLevelFromUIClick();
}

let cxdButton = document.getElementById("cxd");
cxdButton.index = 5;
cxdButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 5;
  temporarySubset = consonantTrackLevels[5];
  resetLevelFromUIClick();
}

let cxbdButton = document.getElementById("cxbd");
cxbdButton.index = 6;
cxbdButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 6;
  temporarySubset = consonantTrackLevels[6];
  resetLevelFromUIClick();
}

let bpButton = document.getElementById("bp");
bpButton.index = 7;
bpButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 7;
  temporarySubset = consonantTrackLevels[7];
  resetLevelFromUIClick();
}

let bpdButton = document.getElementById("bpd");
bpdButton.index = 8;
bpdButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 8;
  temporarySubset = consonantTrackLevels[8];
  resetLevelFromUIClick();
}

let bpdcxButton = document.getElementById("bpdcx");
bpdcxButton.index = 9;
bpdcxButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 9;
  temporarySubset = consonantTrackLevels[9];
  resetLevelFromUIClick();
}

let kxButton = document.getElementById("kx");
kxButton.index = 10;
kxButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 10;
  temporarySubset = consonantTrackLevels[10];
  resetLevelFromUIClick();
}

let bpdkxButton = document.getElementById("bpdkx");
bpdkxButton.index = 11;
bpdkxButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 11;
  temporarySubset = consonantTrackLevels[11];
  resetLevelFromUIClick();
}

let fvButton = document.getElementById("fv");
fvButton.index = 12;
fvButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 12;
  temporarySubset = consonantTrackLevels[12];
  resetLevelFromUIClick();
}

let fvbButton = document.getElementById("fvb");
fvbButton.index = 13;
fvbButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 13;
  temporarySubset = consonantTrackLevels[13];
  resetLevelFromUIClick();
}

let fvbpButton = document.getElementById("fvbp");
fvbpButton.index = 14;
fvbpButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 14;
  temporarySubset = consonantTrackLevels[14];
  resetLevelFromUIClick();
}

let fvbpcButton = document.getElementById("fvbpc");
fvbpcButton.index = 15;
fvbpcButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 15;
  temporarySubset = consonantTrackLevels[15];
  resetLevelFromUIClick();
}

let fvbpcxButton = document.getElementById("fvbpcx");
fvbpcxButton.index = 16;
fvbpcxButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 16;
  temporarySubset = consonantTrackLevels[16];
  resetLevelFromUIClick();
}

let fvbpcxdButton = document.getElementById("fvbpcxd");
fvbpcxdButton.index = 17;
fvbpcxdButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 17;
  temporarySubset = consonantTrackLevels[17];
  resetLevelFromUIClick();
}

let gkButton = document.getElementById("gk");
gkButton.index = 18;
gkButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 18;
  temporarySubset = consonantTrackLevels[18];
  resetLevelFromUIClick();
}

let jgButton = document.getElementById("jg");
jgButton.index = 19;
jgButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 19;
  temporarySubset = consonantTrackLevels[19];
  resetLevelFromUIClick();
}

let gjkButton = document.getElementById("gjk");
gjkButton.index = 20;
gjkButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 20;
  temporarySubset = consonantTrackLevels[20];
  resetLevelFromUIClick();
}

let ghButton = document.getElementById("gh");
ghButton.index = 21;
ghButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 21;
  temporarySubset = consonantTrackLevels[21];
  resetLevelFromUIClick();
}

let ghjButton = document.getElementById("ghj");
ghjButton.index = 22;
ghjButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 22;
  temporarySubset = consonantTrackLevels[22];
  resetLevelFromUIClick();
}

let ghjkButton = document.getElementById("ghjk");
ghjkButton.index = 23;
ghjkButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 23;
  temporarySubset = consonantTrackLevels[23];
  resetLevelFromUIClick();
}

let ghjkxButton = document.getElementById("ghjkx");
ghjkxButton.index = 24;
ghjkxButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 24;
  temporarySubset = consonantTrackLevels[24];
  resetLevelFromUIClick();
}

let lnButton = document.getElementById("ln");
lnButton.index = 25;
lnButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 25;
  temporarySubset = consonantTrackLevels[25];
  resetLevelFromUIClick();
}

let lngButton = document.getElementById("lng");
lngButton.index = 26;
lngButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 26;
  temporarySubset = consonantTrackLevels[26];
  resetLevelFromUIClick();
}

let lngkButton = document.getElementById("lngk");
lngkButton.index = 27;
lngkButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 27;
  temporarySubset = consonantTrackLevels[27];
  resetLevelFromUIClick();
}

let lngkjButton = document.getElementById("lngkj");
lngkjButton.index = 28;
lngkjButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 28;
  temporarySubset = consonantTrackLevels[28];
  resetLevelFromUIClick();
}

let mnButton = document.getElementById("mn");
mnButton.index = 29;
mnButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 29;
  temporarySubset = consonantTrackLevels[29];
  resetLevelFromUIClick();
}

let lmnButton = document.getElementById("lmn");
lmnButton.index = 30;
lmnButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 30;
  temporarySubset = consonantTrackLevels[30];
  resetLevelFromUIClick();
}

let lmngkButton = document.getElementById("lmngk");
lmngkButton.index = 31;
lmngkButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 31;
  temporarySubset = consonantTrackLevels[31];
  resetLevelFromUIClick();
}

let lmngkjButton = document.getElementById("lmngkj");
lmngkjButton.index = 32;
lmngkjButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 32;
  temporarySubset = consonantTrackLevels[32];
  resetLevelFromUIClick();
}

let fvbpcxdlmngkjButton = document.getElementById("fvbpcxdlmngkj");
fvbpcxdlmngkjButton.index = 33;
fvbpcxdlmngkjButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 33;
  temporarySubset = consonantTrackLevels[33];
  resetLevelFromUIClick();
}

let qwButton = document.getElementById("qw");
qwButton.index = 34;
qwButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 34;
  temporarySubset = consonantTrackLevels[34];
  resetLevelFromUIClick();
}

let qwrButton = document.getElementById("qwr");
qwrButton.index = 35;
qwrButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 35;
  temporarySubset = consonantTrackLevels[35];
  resetLevelFromUIClick();
}

let rlButton = document.getElementById("rl");
rlButton.index = 36;
rlButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 36;
  temporarySubset = consonantTrackLevels[36];
  resetLevelFromUIClick();
}

let rlmButton = document.getElementById("rlm");
rlmButton.index = 37;
rlmButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 37;
  temporarySubset = consonantTrackLevels[37];
  resetLevelFromUIClick();
}

let rlmnButton = document.getElementById("rlmn");
rlmnButton.index = 38;
rlmnButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 38;
  temporarySubset = consonantTrackLevels[38];
  resetLevelFromUIClick();
}

let rlmnqwButton = document.getElementById("rlmnqw");
rlmnqwButton.index = 39;
rlmnqwButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 39;
  temporarySubset = consonantTrackLevels[39];
  resetLevelFromUIClick();
}

let szButton = document.getElementById("sz");
szButton.index = 40;
szButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 40;
  temporarySubset = consonantTrackLevels[40];
  resetLevelFromUIClick();
}

let dtButton = document.getElementById("dt");
dtButton.index = 41;
dtButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 41;
  temporarySubset = consonantTrackLevels[41];
  resetLevelFromUIClick();
}

let dtbButton = document.getElementById("dtb");
dtbButton.index = 42;
dtbButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 42;
  temporarySubset = consonantTrackLevels[42];
  resetLevelFromUIClick();
}

let dtbpButton = document.getElementById("dtbp");
dtbpButton.index = 43;
dtbpButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 43;
  temporarySubset = consonantTrackLevels[43];
  resetLevelFromUIClick();
}

let vwButton = document.getElementById("vw");
vwButton.index = 44;
vwButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 44;
  temporarySubset = consonantTrackLevels[44];
  resetLevelFromUIClick();
}

let vwfButton = document.getElementById("vwf");
vwfButton.index = 45;
vwfButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 45;
  temporarySubset = consonantTrackLevels[45];
  resetLevelFromUIClick();
}

let xyButton = document.getElementById("xy");
xyButton.index = 46;
xyButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 46;
  temporarySubset = consonantTrackLevels[46];
  resetLevelFromUIClick();
}

let wxyButton = document.getElementById("wxy");
wxyButton.index = 47;
wxyButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 47;
  temporarySubset = consonantTrackLevels[47];
  resetLevelFromUIClick();
}

let vwyButton = document.getElementById("vwy");
vwyButton.index = 48;
vwyButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 48;
  temporarySubset = consonantTrackLevels[48];
  resetLevelFromUIClick();
}

let vwyfButton = document.getElementById("vwyf");
vwyfButton.index = 49;
vwyfButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 49;
  temporarySubset = consonantTrackLevels[49];
  resetLevelFromUIClick();
}

let rlmnqwszButton = document.getElementById("rlmnqwsz");
rlmnqwszButton.index = 50;
rlmnqwszButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 50;
  temporarySubset = consonantTrackLevels[50];
  resetLevelFromUIClick();
}

let vwfdtbpButton = document.getElementById("vwfdtbp");
vwfdtbpButton.index = 51;
vwfdtbpButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 51;
  temporarySubset = consonantTrackLevels[51];
  resetLevelFromUIClick();
}

let cghjkxyButton = document.getElementById("cghjkxy");
cghjkxyButton.index = 52;
cghjkxyButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 52;
  temporarySubset = consonantTrackLevels[52];
  resetLevelFromUIClick();
}

let bcdfghjklmnpqrstvwxyzButton = document.getElementById("bcdfghjklmnpqrstvwxyz");
bcdfghjklmnpqrstvwxyzButton.index = 53;
bcdfghjklmnpqrstvwxyzButton.onclick = function() {
  currentTrack = consonantTrackLevels;
  trackIndex = 53;
  temporarySubset = consonantTrackLevels[53];
  resetLevelFromUIClick();
}
