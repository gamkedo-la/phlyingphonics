let targetBigLetterName;
let targetAudio;


let assignTargetAudio = () => {
    targetAudio = temporaryArrayOfQuestions[0];
    console.log("targetAudio", targetAudio);
}


let playTargetAudio = () => {
  var thisSound = Sounds.getSound(targetAudio);
  if (thisSound !== null) {
    thisSound.loop = true;
    thisSound.volume = masterVolume;
    thisSound.play();
    arrayOfAudios.push(thisSound);
  }
}

let stopTargetAudio = () => {
  var thisSound = Sounds.getSound(targetAudio);
    if (thisSound !== null) {
    thisSound.pause();
  }
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
  assignTargetFlies();
  playTargetAudio();
}
