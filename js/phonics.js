let targetPhonic;
let targetBigLetterName;
let targetAudio;

let assignTargetAudio = () => {
  if ( currentTrack === bigLettersTrackLevels ) {
    assignTargetAudioWithBigLetter();
  } else if ( currentTrack === smallLettersTrackLevels ) {
    assignTargetAudioWithSmallLetter();
  } else if ( currentTrack === vowelTrackLevels ) {
    assignTargetAudioWithPhonic();
  } else if ( currentTrack === consonantTrackLevels ) {
    assignTargetAudioWithPhonic();
  }
}

let assignTargetAudioWithPhonic = () => {
  targetAudio = temporaryArrayOfQuestions[0].toLowerCase();
}

let assignTargetAudioWithBigLetter = () => {
  targetAudio = "big" + temporaryArrayOfQuestions[0];
}

let assignTargetAudioWithSmallLetter = () => {
  targetAudio = "small" + temporaryArrayOfQuestions[0];
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
