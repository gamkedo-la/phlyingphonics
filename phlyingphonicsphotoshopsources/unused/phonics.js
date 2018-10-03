let targetBigLetterName;
let targetAudio;


let assignTargetAudio = () => {
  if ( currentTrack === bigLettersTrackLevels ) {
    assignTargetAudioWithBigLetter();
  } else if ( currentTrack === smallLettersTrackLevels ) {
    assignTargetAudioWithSmallLetter();
  } else if ( currentTrack === vowelTrackLevels || currentTrack === consonantTrackLevels ) {
    assignTargetAudioWithPhonic();
  } else if ( currentTrack === mixedSizeLetterNameLevels ) {
    assignTargetAudioWithBigOrSmallLetter();
  } else if ( currentTrack === customTrack ) {
    assignTargetAudioWithPhonic();
  }
}

let assignTargetAudioWithPhonic = () => {
  //console.log("targetAudio");
  console.log("temporaryArrayOfQuestions", temporaryArrayOfQuestions);
  targetAudio = "phonic" + temporaryArrayOfQuestions[0].toLowerCase();
}

let assignTargetAudioWithBigLetter = () => {
  targetAudio = "big" + temporaryArrayOfQuestions[0].toUpperCase();
  console.log("targetAudio", targetAudio);
}

let assignTargetAudioWithSmallLetter = () => {
  targetAudio = "small" + temporaryArrayOfQuestions[0].toUpperCase();
}

let assignTargetAudioWithBigOrSmallLetter = () => {
  targetAudio = temporaryArrayOfQuestions[0];
}

let assignTargetBigLetterName = () => {
  targetBigLetterName = "big" + temporaryArrayOfQuestions[0];
}

let assignTargetAudioWithPhonicOrLetterName = () => {

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
