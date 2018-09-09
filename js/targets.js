let targetBigLetterName;
let targetAudio;


let assignTargetAudio = () => {
    targetAudio = temporaryArrayOfQuestions[0];
}

let playTargetAudio = () => {
  Sounds.getSound(targetAudio).loop = true;
  Sounds.getSound(targetAudio).volume = 1;
  Sounds.getSound(targetAudio).play();
}

let stopTargetAudio = () => {
  Sounds.getSound(targetAudio).pause();
}

let resetTargetAudioAndTargetFlies = () => {
  stopTargetAudio();
  assignTargetAudio();
  assignTargetFlies();
  playTargetAudio();
}


let resetTargetBigOrSmallLetterNameAndTargetFlies = () => {
  stopTargetAudio();
  assignTargetAudio();
  //assignMyLetterToCheck();
  assignTargetFlies();
  playTargetAudio();
}
