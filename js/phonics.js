let randomPhonicIndex = function() {return getRandomInt(0, arrayOfPhonics.length);} // randomizing target phonics for training purposes
let arrayOfPossiblePhonics = new Array(numberOfFliesAtStartOfLevel); // needs to be set up in a way where the student can choose which phonics to train
let phonic = document.getElementById("phonic"); //variable for audio tag
let initializeTargetPhonic = function() {arrayOfPhonics[randomPhonicIndex]; } // picks first target phonic at start of game
let targetPhonic;

//file paths for phonics
let arrayOfPhonics = ["audio/phonics/a.mp3", "audio/phonics/b.mp3", "audio/phonics/c.mp3", "audio/phonics/d.mp3", "audio/phonics/e.mp3", "audio/phonics/f.mp3",
"audio/phonics/g.mp3", "audio/phonics/h.mp3","audio/phonics/i.mp3", "audio/phonics/j.mp3", "audio/phonics/k.mp3", "audio/phonics/l.mp3", "audio/phonics/m.mp3",
"audio/phonics/n.mp3", "audio/phonics/o.mp3", "audio/phonics/p.mp3", "audio/phonics/q.mp3", "audio/phonics/r.mp3","audio/phonics/s.mp3", "audio/phonics/t.mp3",
"audio/phonics/u.mp3", "audio/phonics/v.mp3", "audio/phonics/w.mp3", "audio/phonics/x.mp3", "audio/phonics/y.mp3", "audio/phonics/z.mp3"];

// fills array of possible phonics, should be adapted for student customization, as in students should have an option for choosing which letters they want to practice
let initializeArrayOfPhonics = () => {
  for (let i = 0; i<numberOfFliesAtStartOfLevel; i++) {
    arrayOfPossiblePhonics[i] = arrayOfPhonics[i];
  }
}

let arrayOfPossibleQuestions = [];
let initializeArrayOfPossibleQuestions = () => {
  for (let i = 0; i<arrayOfFlies.length; i++) {
    arrayOfPossibleQuestions.push(arrayOfFlies[i].myPhonic);
  }
}

let assignTargetPhonic = () => {
  targetPhonic = temporaryArrayOfQuestions[0].toLowerCase();
}

let playPhonic = () => {
  Sounds.getSound(targetPhonic).loop = true;
  Sounds.getSound(targetPhonic).play();
}
