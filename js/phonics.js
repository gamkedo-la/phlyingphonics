let targetPhonic;
let targetBigLetterName;
let targetAudio;

let assignTargetAudioWithPhonic = () => {
  targetAudio = temporaryArrayOfQuestions[0].toLowerCase();
}

let assignTargetAudioWithBigLetter = () => {
  targetAudio = "big" + temporaryArrayOfQuestions[0];
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
  console.log(temporaryArrayOfQuestions, targetAudio);
  assignTargetFlies();
  playTargetAudio();
}

let resetTargetBigLetterNameAndTargetFlies = () => {
  stopTargetAudio();
  assignTargetAudioWithBigLetter();
  console.log(targetAudio);
  assignTargetFlies();
  
  playTargetAudio();
}
