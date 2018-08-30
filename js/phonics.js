let targetBigLetterName;
let targetAudio;

let a = new phonicClass("a");
let b = new phonicClass("b");
let c = new phonicClass("c");
let d = new phonicClass("d");
let e = new phonicClass("e");
let f = new phonicClass("f");
let g = new phonicClass("g");
let h = new phonicClass("h");
let i = new phonicClass("i");
let j = new phonicClass("j");
let k = new phonicClass("k");
let l = new phonicClass("l");
let m = new phonicClass("m");
let n = new phonicClass("n");
let o = new phonicClass("o");
let p = new phonicClass("p");
let q = new phonicClass("q");
let r = new phonicClass("r");
let s = new phonicClass("s");
let t = new phonicClass("t");
let u = new phonicClass("u");
let v = new phonicClass("v");
let w = new phonicClass("w");
let x = new phonicClass("x");
let y = new phonicClass("y");
let z = new phonicClass("z");

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

let arrayOfPhonicResults = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,
                            A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];


function phonicClass(phonicString){
  this.phonicString = phonicString;
  this.correctAnswers = 0;
  this.unCorrectAnswers = 0;
  this.accuracy = 0;
  this.numberOfAttempts = 0;

  this.calculateAccuracy = function() {
    let reviousAccuracy = this.accuracy;
    this.accuracy = Math.round( (this.correctAnswers/this.numberOfAttempts)*100 );
    this.accuracy = this.accuracy ? this.accuracy : 0;
  }
}

let assignTargetAudio = () => {
  if ( currentTrack === bigLettersTrackLevels ) {
    assignTargetAudioWithBigLetter();
  } else if ( currentTrack === smallLettersTrackLevels ) {
    assignTargetAudioWithSmallLetter();
  } else if ( currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels ) {
    assignTargetAudioWithPhonic();
  } else if ( currentTrack === mixedSizeLetterNameLevels ) {
    assignTargetAudioWithBigOrSmallLetter();
  }
}

let assignTargetAudioWithPhonic = () => {
  targetAudio = temporaryArrayOfQuestions[0].toLowerCase();
}

let assignTargetAudioWithBigLetter = () => {
  targetAudio = "big" + temporaryArrayOfQuestions[0];
}

let assignTargetAudioWithSmallLetter = () => {
  targetAudio = "small" + temporaryArrayOfQuestions[0].toUpperCase();
}

let assignTargetAudioWithBigOrSmallLetter = () => {
  console.log(temporaryArrayOfQuestions);
  targetAudio = temporaryArrayOfQuestions[0];
}

let assignTargetBigLetterName = () => {
  targetBigLetterName = "big" + temporaryArrayOfQuestions[0];
}

let playTargetAudio = () => {
  Sounds.getSound(targetAudio).loop = true;
  Sounds.getSound(targetAudio).play();
}

let stopTargetAudio = () => {
  Sounds.getSound(targetAudio).pause();
}

let resetPhonicAudioAndTargetFlies = () => {
  stopTargetAudio();
  assignTargetAudioWithPhonic();
  assignTargetFlies();
  playTargetAudio();
}

let resetTargetBigLetterNameAndTargetFlies = () => {
  stopTargetAudio();
  assignTargetAudioWithBigLetter();
  assignMyLetterToCheck();
  assignTargetFlies();
  playTargetAudio();
}

let resetTargetSmallLetterNameAndTargetFlies = () => {
  stopTargetAudio();
  assignTargetAudioWithSmallLetter();
  assignMyLetterToCheck();
  assignTargetFlies();
  playTargetAudio();
}

let resetTargetBigOrSmallLetterNameAndTargetFlies = () => {
  stopTargetAudio();
  assignTargetAudioWithBigOrSmallLetter();
  assignMyLetterToCheck();
  assignTargetFlies();
  playTargetAudio();
}

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
