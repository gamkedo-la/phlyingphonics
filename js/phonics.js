let targetPhonic;

let assignTargetPhonic = () => {
  targetPhonic = temporaryArrayOfQuestions[0].toLowerCase();
}

let playPhonic = () => {
  Sounds.getSound(targetPhonic).loop = true;
  Sounds.getSound(targetPhonic).play();
}

let stopPhonic = () => {
  Sounds.getSound(targetPhonic).pause();
}

let resetPhonicAudioAndTargetFlies = () => {
  stopPhonic();
  assignTargetPhonic();
  assignTargetFlies();
  playPhonic();
}
