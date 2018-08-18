let killFly = (i) => {
  arrayOfFlies[i].myImage = Images.getImage("yellowgreensplat"); //changing source image
  arrayOfFlies[i].xSpeed = 0; //stops movement
  arrayOfFlies[i].ySpeed = 0;
  arrayOfSwattedFlies.push(arrayOfFlies[i]);
  arrayOfFlies.splice(i, 1);
  Sounds.getSound(targetAudio).pause();
  splat.play(); //plays splat audio tag
}

function handleCanvasClick(evt) {

  numberOfAttempts++;
  screenShake(10);


  for (let i = 0; i<arrayOfFlies.length; i++) {
    console.log(arrayOfFlies[i].myLetter, arrayOfFlies[i].target);
    if (evt.pageX >= arrayOfFlies[i].leftEdge + 30 && evt.pageX<=arrayOfFlies[i].rightEdge - 30 && evt.pageY >= arrayOfFlies[i].topEdge + 30 &&
        evt.pageY <= arrayOfFlies[i].bottomEdge - 30 && arrayOfFlies[i].target) {//checks for correct swat based on coordinates and target sound
      correctAnswers++;
      calculateOverallAccuracy();
      killFly(i);//at the top of this page, replaces image with yellowgreensplat, stops motion, clears fly from collision detection
      temporaryArrayOfQuestions.splice(0,1);
      checkForLevelResetOrAdvancement();//in adaptivedifficulty.js
      assignTargetAudioWithPhonic();//in phonics.js
      assignTargetFlies();//in phonics.js
      playPhonic();//in phonics.js
    }/*end of correct answers*/ else {
      calculateOverallAccuracy();
    }//end of incorrect answers
  }//end of looping through flies
}//end of canvas click

let vowelButton = document.getElementById("vowelButton");
let accuracyDiv = document.getElementById("accuracyDiv");
vowelButton.onclick = function() {
  temporarySubset = vowelTrackLevels[0];
  resetLevelFromUIClick();
}

let consonantButton = document.getElementById("consonantButton");
consonantButton.onclick = function() {
  temporarySubset = consonantTrackLevels[0];
  resetLevelFromUIClick();
}

let eoButton = document.getElementById("eo");
eoButton.index = 0;
eoButton.onclick = function() {
  temporarySubset = vowelTrackLevels[0];
  resetLevelFromUIClick();
}

let iuButton = document.getElementById("iu");
iuButton.index = 1;
iuButton.onclick = function() {
  temporarySubset = vowelTrackLevels[1];
  resetLevelFromUIClick();
}

let eoiButton = document.getElementById("eoi");
eoiButton.index = 2;
eoiButton.onclick = function() {
  temporarySubset = vowelTrackLevels[2];
  resetLevelFromUIClick();
}

let aiButton = document.getElementById("ai");
aiButton.index = 3;
aiButton.onclick = function() {
  temporarySubset = vowelTrackLevels[3];
  resetLevelFromUIClick();
}

let aeButton = document.getElementById("ae");
aeButton.index = 4;
aeButton.onclick = function() {
  temporarySubset = vowelTrackLevels[4];
  resetLevelFromUIClick();
}

let aeiButton = document.getElementById("aei");
aeiButton.index = 5;
aeiButton.onclick = function() {
  temporarySubset = vowelTrackLevels[5];
  resetLevelFromUIClick();
}

let ouButton = document.getElementById("ou");
ouButton.index = 6;
ouButton.onclick = function() {
  temporarySubset = vowelTrackLevels[6];
  resetLevelFromUIClick();
}

let aoButton = document.getElementById("ao");
aoButton.index = 7;
aoButton.onclick = function() {
  temporarySubset = vowelTrackLevels[7];
  resetLevelFromUIClick();
}

let aouButton = document.getElementById("aou");
aouButton.index = 8;
aouButton.onclick = function() {
  temporarySubset = vowelTrackLevels[8];
  resetLevelFromUIClick();
}

let aouiButton = document.getElementById("aoui");
aouiButton.index = 9;
aouiButton.onclick = function() {
  temporarySubset = vowelTrackLevels[9];
  resetLevelFromUIClick();
}

let aeioButton = document.getElementById("aeio");
aeioButton.index = 10;
aeioButton.onclick = function() {
  temporarySubset = vowelTrackLevels[10];
  resetLevelFromUIClick();
}

let aeiouButton = document.getElementById("aeiou");
aeiouButton.index = 11;
aeiouButton.onclick = function() {
  temporarySubset = vowelTrackLevels[11];
  resetLevelFromUIClick();
}

let bcButton = document.getElementById("bc");
bcButton.index = 0;
bcButton.onclick = function() {
  temporarySubset = consonantTrackLevels[0];
  resetLevelFromUIClick();
}

let cdButton = document.getElementById("cd");
cdButton.index = 1;
cdButton.onclick = function() {
  temporarySubset = consonantTrackLevels[1];
  resetLevelFromUIClick();
}

let bdButton = document.getElementById("bd");
bdButton.index = 2;
bdButton.onclick = function() {
  temporarySubset = consonantTrackLevels[2];
  resetLevelFromUIClick();
}

let bcdButton = document.getElementById("bcd");
bcdButton.index = 3;
bcdButton.onclick = function() {
  temporarySubset = consonantTrackLevels[3];
  resetLevelFromUIClick();
}

let cxButton = document.getElementById("cx");
cxButton.index = 4;
cxButton.onclick = function() {
  temporarySubset = consonantTrackLevels[4];
  resetLevelFromUIClick();
}

let cxdButton = document.getElementById("cxd");
cxdButton.index = 5;
cxdButton.onclick = function() {
  temporarySubset = consonantTrackLevels[5];
  resetLevelFromUIClick();
}

let cxbdButton = document.getElementById("cxbd");
cxbdButton.index = 6;
cxbdButton.onclick = function() {
  temporarySubset = consonantTrackLevels[6];
  resetLevelFromUIClick();
}

let bpButton = document.getElementById("bp");
bpButton.index = 7;
bpButton.onclick = function() {
  temporarySubset = consonantTrackLevels[7];
  resetLevelFromUIClick();
}

let bpdButton = document.getElementById("bpd");
bpdButton.index = 8;
bpdButton.onclick = function() {
  temporarySubset = consonantTrackLevels[8];
  resetLevelFromUIClick();
}

let bpdcxButton = document.getElementById("bpdcx");
bpdcxButton.index = 9;
bpdcxButton.onclick = function() {
  temporarySubset = consonantTrackLevels[9];
  resetLevelFromUIClick();
}

let kxButton = document.getElementById("kx");
kxButton.index = 10;
kxButton.onclick = function() {
  temporarySubset = consonantTrackLevels[10];
  resetLevelFromUIClick();
}

let bpdkxButton = document.getElementById("bpdkx");
bpdkxButton.index = 11;
bpdkxButton.onclick = function() {
  temporarySubset = consonantTrackLevels[11];
  resetLevelFromUIClick();
}

let fvButton = document.getElementById("fv");
fvButton.index = 12;
fvButton.onclick = function() {
  temporarySubset = consonantTrackLevels[12];
  resetLevelFromUIClick();
}

let fvbButton = document.getElementById("fvb");
fvbButton.index = 13;
fvbButton.onclick = function() {
  temporarySubset = consonantTrackLevels[13];
  resetLevelFromUIClick();
}

let fvbpButton = document.getElementById("fvbp");
fvbpButton.index = 14;
fvbpButton.onclick = function() {
  temporarySubset = consonantTrackLevels[14];
  resetLevelFromUIClick();
}

let fvbpcButton = document.getElementById("fvbpc");
fvbpcButton.index = 15;
fvbpcButton.onclick = function() {
  temporarySubset = consonantTrackLevels[15];
  resetLevelFromUIClick();
}

let fvbpcxButton = document.getElementById("fvbpcx");
fvbpcxButton.index = 16;
fvbpcxButton.onclick = function() {
  temporarySubset = consonantTrackLevels[16];
  resetLevelFromUIClick();
}

let fvbpcxdButton = document.getElementById("fvbpcxd");
fvbpcxButton.index = 17;
fvbpcxButton.onclick = function() {
  temporarySubset = consonantTrackLevels[17];
  resetLevelFromUIClick();
}

let gkButton = document.getElementById("gk");
gkButton.index = 18;
gkButton.onclick = function() {
  temporarySubset = consonantTrackLevels[18];
  resetLevelFromUIClick();
}

let jgButton = document.getElementById("jg");
jgButton.index = 19;
jgButton.onclick = function() {
  temporarySubset = consonantTrackLevels[19];
  resetLevelFromUIClick();
}

let gjkButton = document.getElementById("gjk");
gjkButton.index = 20;
gjkButton.onclick = function() {
  temporarySubset = consonantTrackLevels[20];
  resetLevelFromUIClick();
}

let ghButton = document.getElementById("gh");
ghButton.index = 21;
ghButton.onclick = function() {
  temporarySubset = consonantTrackLevels[21];
  resetLevelFromUIClick();
}

let ghjButton = document.getElementById("ghj");
ghjButton.index = 22;
ghjButton.onclick = function() {
  temporarySubset = consonantTrackLevels[22];
  resetLevelFromUIClick();
}

let ghjkButton = document.getElementById("ghjk");
ghjkButton.index = 23;
ghjkButton.onclick = function() {
  temporarySubset = consonantTrackLevels[23];
  resetLevelFromUIClick();
}

let ghjkxButton = document.getElementById("ghjkx");
ghjkxButton.index = 24;
ghjkxButton.onclick = function() {
  temporarySubset = consonantTrackLevels[24];
  resetLevelFromUIClick();
}

let lnButton = document.getElementById("ln");
lnButton.index = 25;
lnButton.onclick = function() {
  temporarySubset = consonantTrackLevels[25];
  resetLevelFromUIClick();
}

let lngButton = document.getElementById("lng");
lngButton.index = 26;
lngButton.onclick = function() {
  temporarySubset = consonantTrackLevels[26];
  resetLevelFromUIClick();
}

let lngkButton = document.getElementById("lngk");
lngkButton.index = 27;
lngkButton.onclick = function() {
  temporarySubset = consonantTrackLevels[27];
  resetLevelFromUIClick();
}

let lngkjButton = document.getElementById("lngkj");
lngkjButton.index = 28;
lngkjButton.onclick = function() {
  temporarySubset = consonantTrackLevels[28];
  resetLevelFromUIClick();
}

let mnButton = document.getElementById("mn");
mnButton.index = 28;
mnButton.onclick = function() {
  temporarySubset = consonantTrackLevels[28];
  resetLevelFromUIClick();
}

let lmnButton = document.getElementById("lmn");
lmnButton.index = 29;
lmnButton.onclick = function() {
  temporarySubset = consonantTrackLevels[29];
  resetLevelFromUIClick();
}

let lmngkButton = document.getElementById("lmngk");
lmngkButton.index = 30;
lmngkButton.onclick = function() {
  temporarySubset = consonantTrackLevels[30];
  resetLevelFromUIClick();
}

let lmngkjButton = document.getElementById("lmngkj");
lmngkjButton.index = 31;
lmngkjButton.onclick = function() {
  temporarySubset = consonantTrackLevels[31];
  resetLevelFromUIClick();
}

let fvbpcxdlmngkjButton = document.getElementById("fvbpcxdlmngkj");
fvbpcxdlmngkjButton.index = 32;
fvbpcxdlmngkjButton.onclick = function() {
  temporarySubset = consonantTrackLevels[32];
  resetLevelFromUIClick();
}

let qwButton = document.getElementById("qw");
qwButton.index = 33;
qwButton.onclick = function() {
  temporarySubset = consonantTrackLevels[33];
  resetLevelFromUIClick();
}

let qwrButton = document.getElementById("qwr");
qwrButton.index = 34;
qwrButton.onclick = function() {
  temporarySubset = consonantTrackLevels[34];
  resetLevelFromUIClick();
}

let rlButton = document.getElementById("rl");
rlButton.index = 35;
rlButton.onclick = function() {
  temporarySubset = consonantTrackLevels[35];
  resetLevelFromUIClick();
}

let rlmButton = document.getElementById("rlm");
rlmButton.index = 36;
rlmButton.onclick = function() {
  temporarySubset = consonantTrackLevels[36];
  resetLevelFromUIClick();
}

let rlmnButton = document.getElementById("rlmn");
rlmnButton.index = 37;
rlmnButton.onclick = function() {
  temporarySubset = consonantTrackLevels[37];
  resetLevelFromUIClick();
}

let rlmnqwButton = document.getElementById("rlmnqw");
rlmnqwButton.index = 38;
rlmnqwButton.onclick = function() {
  temporarySubset = consonantTrackLevels[38];
  resetLevelFromUIClick();
}

let szButton = document.getElementById("sz");
szButton.index = 39;
szButton.onclick = function() {
  temporarySubset = consonantTrackLevels[39];
  resetLevelFromUIClick();
}

let dtButton = document.getElementById("dt");
dtButton.index = 40;
dtButton.onclick = function() {
  temporarySubset = consonantTrackLevels[40];
  resetLevelFromUIClick();
}

let dtbButton = document.getElementById("dtb");
dtbButton.index = 40;
dtbButton.onclick = function() {
  temporarySubset = consonantTrackLevels[40];
  resetLevelFromUIClick();
}

let dtbpButton = document.getElementById("dtbp");
dtbpButton.index = 41;
dtbpButton.onclick = function() {
  temporarySubset = consonantTrackLevels[41];
  resetLevelFromUIClick();
}

let vwButton = document.getElementById("vw");
vwButton.index = 42;
vwButton.onclick = function() {
  temporarySubset = consonantTrackLevels[42];
  resetLevelFromUIClick();
}

let vwfButton = document.getElementById("vwf");
vwfButton.index = 43;
vwfButton.onclick = function() {
  temporarySubset = consonantTrackLevels[43];
  resetLevelFromUIClick();
}

let xyButton = document.getElementById("xy");
xyButton.index = 44;
xyButton.onclick = function() {
  temporarySubset = consonantTrackLevels[44];
  resetLevelFromUIClick();
}

let wxyButton = document.getElementById("wxy");
wxyButton.index = 45;
wxyButton.onclick = function() {
  temporarySubset = consonantTrackLevels[45];
  resetLevelFromUIClick();
}

let vwyButton = document.getElementById("vwy");
vwyButton.index = 46;
vwyButton.onclick = function() {
  temporarySubset = consonantTrackLevels[46];
  resetLevelFromUIClick();
}

let vwyfButton = document.getElementById("vwyf");
vwyfButton.index = 47;
vwyfButton.onclick = function() {
  temporarySubset = consonantTrackLevels[47];
  resetLevelFromUIClick();
}

let rlmnqwszButton = document.getElementById("rlmnqwsz");
rlmnqwszButton.index = 48;
rlmnqwszButton.onclick = function() {
  temporarySubset = consonantTrackLevels[48];
  resetLevelFromUIClick();
}

let vwfdtbpButton = document.getElementById("vwfdtbp");
vwfdtbpButton.index = 49;
vwfdtbpButton.onclick = function() {
  temporarySubset = consonantTrackLevels[49];
  resetLevelFromUIClick();
}

let cghjkxyButton = document.getElementById("cghjkxy");
cghjkxyButton.index = 50;
cghjkxyButton.onclick = function() {
  temporarySubset = consonantTrackLevels[50];
  resetLevelFromUIClick();
}

let bcdfghjklmnpqrstvwxyzButton = document.getElementById("bcdfghjklmnpqrstvwxyz");
bcdfghjklmnpqrstvwxyzButton.index = 51;
bcdfghjklmnpqrstvwxyzButton.onclick = function() {
  temporarySubset = consonantTrackLevels[51];
  resetLevelFromUIClick();
}

let resetLevelFromUIClick = () => {
  chooseBackground();
  clearFlies();//in flies.js
  initializeArrayOfFlies();
  assignFlaps();
  resetAccuracy();
  resetTemporaryArrayOfQuestions();
  resetPhonicAudioAndTargetFlies();
}

let bigLetters = document.getElementById("bigLetters");
bigLetters.onclick = function() {
  temporarySubset = bigLettersTrackLevels[0];
  resetLevelFromUIClickWithBigLetters();
  console.log(arrayOfFlies[0].myLetterNameAudio);
}

let resetLevelFromUIClickWithBigLetters = () => {
  chooseBackground();
  clearFlies();//in flies.js
  initializeArrayOfFlies();
  assignFlaps();
  resetAccuracy();
  resetTemporaryArrayOfQuestionsWithBigLetters();//in adaptivedifficulty.js
  resetTargetBigLetterNameAndTargetFlies();//in adaptivedifficulty.js
  console.log(targetAudio);
}
