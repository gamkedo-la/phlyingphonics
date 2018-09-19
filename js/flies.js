let numberOfFliesAtStartOfLevel; //flies to be used in game, should eventually be coordinated with student choices or training mode instead of just random
let initializeArrayOfFlies;
let arrayOfFlies = []; //flies to be used in game

let targetFly;
let assignTargetFlies = () => {
  for (let i = 0; i < arrayOfFlies.length; i++) {
    if (arrayOfFlies[i].rawTargetData === targetAudio) {
      arrayOfFlies[i].target = true;
    } else {
      arrayOfFlies[i].target = false;
    }
  }
}

let arrayOfSwattedFlies = [];
let testFly;
let drawFlies;
let moveFlies;
let handleFlyWallCollisions;

const ROTATE_FLIES = true; // do the fly sprites rotate while flying?

let flySpeedX = 5;
let flySpeedY = 5;


let randomDirection = () => { //helps randomize the gameplay so students can't rely too heavily on visual patterns to beat the level, they actually have to pay attention
  let randomInt = getRandomInt(0, 1);
  if (randomInt < 0.5) {
    return 1;
  } else {
    return -1;
  }
}

let clearFlies = () => {
  arrayOfFlies = [];
  arrayOfSwattedFlies = [];
}

drawSwattedFlies = () => {
  for (let i = 0; i < arrayOfSwattedFlies.length; i++) {
    arrayOfSwattedFlies[i].draw();
  }
}

drawFlies = () => {
  for (let flyDrawingIteration = 0; flyDrawingIteration < numberOfFliesAtStartOfLevel; flyDrawingIteration++) {
    //  canvasContext.drawImage(fly, arrayOfFlies[flyDrawingIteration].x, arrayOfFlies[flyDrawingIteration].y,
    //                          arrayOfFlies[flyDrawingIteration].width, arrayOfFlies[flyDrawingIteration].height);

    if (arrayOfFlies[flyDrawingIteration]) { // does this fly still exist? (can be undefined after a sucessful swat)
      arrayOfFlies[flyDrawingIteration].draw();
    }
  }
}



//sets which flies are to be used at the start of the game, after level completion, or after student customization
initializeArrayOfFlies = (temporarySubset) => {

  if (temporarySubset.length < 6) {
    numberOfFliesAtStartOfLevel = 6;//getRandomInt(1,26);
  } else {
    numberOfFliesAtStartOfLevel = temporarySubset.length;
  }


  for (let i = 0; i < numberOfFliesAtStartOfLevel; i++) {
    let newFly = new flyClass(i, temporarySubset);
    arrayOfFlies.push(newFly);
  }

  assignFlaps();//in flies.js
  fillTemporaryArrayOfQuestions();//in adaptivedifficulty.js
  assignTargetAudio();
  playTargetAudio();
  assignTargetFlies();//in flies.js
}


moveFlies = () => {
  for (let i = 0; i < arrayOfFlies.length; i++) {
    arrayOfFlies[i].x += arrayOfFlies[i].xSpeed;
    arrayOfFlies[i].y += arrayOfFlies[i].ySpeed;
  }
}

//helps maintain collision detection
updateFlyProperties = () => {
  for (let i = 0; i < arrayOfFlies.length; i++) {
    arrayOfFlies[i].topEdge = arrayOfFlies[i].y;
    arrayOfFlies[i].rightEdge = arrayOfFlies[i].x + arrayOfFlies[i].width;
    arrayOfFlies[i].bottomEdge = arrayOfFlies[i].y + arrayOfFlies[i].height;
    arrayOfFlies[i].leftEdge = arrayOfFlies[i].x;
    if (arrayOfFlies[i].xSpeed < 0) {
      arrayOfFlies[i].currentXDirection = "left";
    } else {
      arrayOfFlies[i].currentXDirection = "right";
    }
    if (arrayOfFlies[i].ySpeed < 0) {
      arrayOfFlies[i].currentYDirection = "up";
    } else {
      arrayOfFlies[i].currentYDirection = "down";
    };
  }
}

handleFlyWallCollisions = () => {
  for (let i = 0; i < arrayOfFlies.length; i++) {
    if (arrayOfFlies[i].topEdge <= canvasTopEdge || arrayOfFlies[i].bottomEdge >= canvasBottomEdge) {

      if (arrayOfFlies[i].currentYDirection = "up") { //push back into play from top or bottom of canvas to avoid infinite delta situations
        arrayOfFlies[i].y += 5;
      }
      if (arrayOfFlies[i].currentYDirection = "down") {
        arrayOfFlies[i].y -= 5;
      }
      arrayOfFlies[i].ySpeed *= -1;//change directions
    }
    if (arrayOfFlies[i].rightEdge >= canvasRightEdge || arrayOfFlies[i].leftEdge <= canvasLeftEdge) {

      if (arrayOfFlies[i].currentXDirection = "right") { //push back into play from right or left of canvas to avoid infinite delta situations
        arrayOfFlies[i].x -= 5;
      }
      if (arrayOfFlies[i].currentXDirection = "left") {
        arrayOfFlies[i].x += 5;
      }
      arrayOfFlies[i].xSpeed *= -1;//change directions
    }
  }
}

handleFliesOffScreen = () => {
  for (let i = 0; i < arrayOfFlies.length; i++) {
    if (arrayOfFlies[i].topEdge < canvasTopEdge - 50 || arrayOfFlies[i].bottomEdge > canvasBottomEdge + 50 || arrayOfFlies[i].leftEdge < canvasLeftEdge - 50 ||
      arrayOfFlies[i].rightEdge > canvasRightEdge + 50) {
      arrayOfFlies[i].x = getRandomInt(canvasLeftEdge, canvasRightEdge - arrayOfFlies[i].width);
      arrayOfFlies[i].y = getRandomInt(canvasTopEdge, canvasBottomEdge - arrayOfFlies[i].height);
    }
  }
}



let arrayOfPossibleLetters = new Array(arrayOfFlies.length);

function randomLowerCaseLetter() {
  let randomLetterIndex = getRandomInt(0, arrayOfLowerCaseLetters.length - 1);
  let letter = arrayOfLowerCaseLetters[randomLetterIndex];
  arrayOfLowerCaseLetters.splice(randomLetterIndex, 1);
}

let arrayOfLowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arrayOfCapitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randomLowerCaseLetter() {
  let randomLetterIndex = getRandomInt(0, arrayOfPossibleLetters.length - 1);
  let letter = arrayOfLowerCaseLetters[randomLetterIndex];
  arrayOfLowerCaseLetters.splice(randomLetterIndex, 1);
  return letter;
}

function randomCapitalLetter() {
  let randomLetterIndex = getRandomInt(0, arrayOfCapitalLetters.length - 1);
  let letter = arrayOfCapitalLetters[randomLetterIndex];
  arrayOfCapitalLetters.splice(randomLetterIndex, 1);
  return letter;
}

function drawBitmapCenteredWithRotationScale(useBitmap, atX, atY, withAng, withScale) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(useBitmap,
    -useBitmap.width * withScale / 2,
    -useBitmap.height * withScale / 2,
    useBitmap.width * withScale,
    useBitmap.height * withScale);
  canvasContext.restore();
}

function drawBitmapWithRotationScale(useBitmap, atX, atY, withAng, withScale) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(useBitmap,
    0,
    0,
    useBitmap.width * withScale,
    useBitmap.height * withScale);
  canvasContext.restore();
}

let arrayOfStartingFlyImages = ["cartoonFly", "fly_version_1", "dragon_bee_v1"];
let arrayOfStartingButterflyImages = ["blackNorange", "bluebutterfly1", "croppedpink1"];
let arrayOfStartingMobileImages = ["mobileOne", "mobileTwo", "mobileThree"];
let randomizeStartingSpriteImage = () => {
  let startingSprieImage;
  if (chosenBackground === "tree2") {
    startingSpriteImage = arrayOfStartingButterflyImages[getRandomInt(0, arrayOfStartingButterflyImages.length - 1)];
    return startingSpriteImage;
  } else if (chosenBackground === "honeycomb") {
    startingSpriteImage = "dragon_bee_v1";
    return startingSpriteImage;
  } else if (chosenBackground === "BabyRoomBG") {
    startingSpriteImage = arrayOfStartingMobileImages[getRandomInt(0, arrayOfStartingMobileImages.length - 1)];
    return startingSpriteImage;
  } else {
  startingSpriteImage = arrayOfStartingFlyImages[getRandomInt(0, arrayOfStartingFlyImages.length - 1)];
  return startingSpriteImage;
  }
}
let assignFlyImageB = () => {
  if (this.myImage === "fly_version_1") {
    return "fly_version_1b"
  } else if (this.myImage === "cartoonFly") {
    return "cartoonFlyB"
  } else if (this.myImage === "dragon_bee_v1" ) {
    return "dragon_bee_b"
  } else if (this.myImage === "blackNorange" || this.myImage === "bluebutterfly1" || this.myImage === "croppedpink1") {
    return this.myImage;
  }
}



function flyClass(i, temporarySubset) {

  this.width = 200;
  this.height = 200;
  this.x = getRandomInt(canvasLeftEdge, canvasRightEdge - this.width);
  this.y = getRandomInt(canvasTopEdge, canvasBottomEdge - this.height);
  this.xSpeed = 5 * randomDirection();//randomizing gameplay so students have to pay attention and not rely on patterns too much
  this.ySpeed = 5 * randomDirection();//randomizing gameplay so students have to pay attention and not rely on patterns too much
  this.currentXDirection = checkCurrentFlyDirectionX();
  this.currentYDirection = checkCurrentFlyDirectionY();
  this.topEdge = this.y;
  this.rightEdge = this.x + this.width;
  this.bottomEdge = this.y + this.height;
  this.leftEdge = this.x;
  this.myImage = Images.getImage(randomizeStartingSpriteImage());
  this.stringImage = Images.getImage("stringImage");
  this.myImageB = undefined; // flapping
  this.rawTargetData = assignRawTargetData(i, temporarySubset);
  this.mySound = Sounds.getSound(this.rawTargetData);
  this.myVisualLetter = assignVisualLetter(this.rawTargetData);//in adaptivedifficulty.js
  this.myLetterToCheck = undefined;
  this.target = false;
  this.drawCount = 0;
  this.hasFlyCollisionWith = new Set();

  this.draw = () => { // draw the fly!

    if (chosenBackground === "BabyRoomBG") { // do we want strings (for a baby mobile above the crib) BabyRoomBG
      drawBitmapCenteredWithRotationScale(this.stringImage,
        this.x + this.width / 2, this.y + (this.width / 2) - (this.stringImage.height / 2), 0, 1);
    }

    if (ROTATE_FLIES &&
      (this.xSpeed != 0 || this.ySpeed != 0)) { // only wobble back and forth if moving (not when dead)

      let scale = this.width / this.myImage.width;

      //point in the direction we are moving
      let angle = Math.atan2(this.ySpeed, this.xSpeed) - 90 * (180 / Math.PI); // degrees away from east

      // look back and forth a little
      let wobble = Math.sin(performance.now() / 500) * 0.5;

      // centered at x,y? no in this game x,y is the top left corner of the sprite
      //drawBitmapCenteredWithRotationScale(this.myImage, this.x, this.y, angle + wobble, scale);

      // this would rotate by the corner pivot
      // drawBitmapWithRotationScale(this.myImage, this.x, this.y, angle + wobble, scale);

      this.drawCount++;

      drawBitmapCenteredWithRotationScale(this.drawCount % 3 > 0 ? this.myImage : this.myImageB,
        this.x + this.width / 2, this.y + this.width / 2, angle + wobble, scale);

    }
    else { // always facing up
      canvasContext.drawImage(this.myImage, this.x, this.y, this.width, this.height);
    }

    // draw the letter
    if ( (currentTrack === bigLettersTrackLevels) || (currentTrack === mixedSizeLetterNameLevels || currentTrack === customTrack) ) {
      if (this.myVisualLetter === "bigO" || this.myVisualLetter === "bigC") {
        canvasContext.drawImage(Images.getImage(this.myVisualLetter), this.x + 80, this.y + 60, 65, 65);
      } else {
        canvasContext.drawImage(Images.getImage(this.myVisualLetter), this.x + 80, this.y + 60, 50, 50);
      }
    } else if ( (currentTrack === smallLettersTrackLevels) || (currentTrack === vowelTrackLevels) ||
               (currentTrack === consonantTrackLevels) || (currentTrack === customTrack) ) {
      canvasContext.drawImage(Images.getImage(this.myVisualLetter.toLowerCase()), this.x + 80, this.y + 60, 50, 50);
    }
  }
}



checkCurrentFlyDirectionX = () => {
  if (this.xSpeed < 0) {
    return "left"
  } else {
    return "right"
  };
}

checkCurrentFlyDirectionY = () => {
  if (this.ySpeed < 0) {
    return "up"
  } else {
    return "down"
  };
}


handleFlyToFlyCollisions = () => {

  for (let progressiveFlyAnchor = 0; progressiveFlyAnchor < arrayOfFlies.length; progressiveFlyAnchor++) {
    for (let remainingFliesInArray = progressiveFlyAnchor + 1; remainingFliesInArray < arrayOfFlies.length; remainingFliesInArray++) {
      if (progressiveFlyAnchor === remainingFliesInArray) { continue; }
      let fly1 = arrayOfFlies[progressiveFlyAnchor]
      let fly2 = arrayOfFlies[remainingFliesInArray]
      const { left, right, top, bottom } = detactCollisionDir(fly1, fly2)

      if ((right || left) && !fly1.hasFlyCollisionWith.has(fly2)) {
        fly1.hasFlyCollisionWith.add(fly2)
        fly2.hasFlyCollisionWith.add(fly1)
        fly1.xSpeed *= -1;
        fly2.xSpeed *= -1;
        if (fly1.currentXDirection = "right") {
          fly1.x += -1;
          fly2.x += 5;
        }
        else {
          fly1.x += 5;
          fly2.x += -5;
        }
      } //end of left/right conditional
      if ((top || bottom) && !fly1.hasFlyCollisionWith.has(fly2)) {
        fly1.hasFlyCollisionWith.add(fly2)
        fly2.hasFlyCollisionWith.add(fly1)
        fly1.ySpeed *= -1;
        fly2.ySpeed *= -1;
        if (fly1.currentYDirection = "up") {
          fly1.y += -5;
          fly2.y += 5;
        }
        else {
          fly1.y += 5;
          fly2.y += -5;
        }
      } //end of top/bottom conditional

      if (!top & !bottom && !right && !left) {
        fly1.hasFlyCollisionWith.delete(fly2)
        fly2.hasFlyCollisionWith.delete(fly1)
      }

    }//end of inner part of nested for loop
  }//end of outer part of nested for loop
}


function detactCollisionDir(fly1, fly2) {

  const res = { right: false, left: false, top: false, bottom: false };
  // detact horizontal collision
  if (fly1.rightEdge >= fly2.leftEdge &&
    fly1.topEdge <= fly2.bottomEdge &&
    fly1.bottomEdge >= fly2.topEdge &&
    fly1.leftEdge <= fly2.leftEdge) {
    res.right = true;
  }
  else if (fly1.leftEdge <= fly2.rightEdge &&
    fly1.topEdge <= fly2.bottomEdge &&
    fly1.bottomEdge >= fly2.topEdge &&
    fly1.rightEdge >= fly2.rightEdge) {

    res.left = true;
  }

  // detact vertical collision
  if (fly1.topEdge <= fly2.bottomEdge && //these two lines dictate top/bottom collision
    fly1.bottomEdge >= fly2.bottomEdge &&
    fly1.leftEdge <= fly2.rightEdge &&
    fly1.rightEdge >= fly2.leftEdge) {
    res.top = true;
  }
  else if (fly1.bottomEdge >= fly2.topEdge &&
    fly1.topEdge <= fly2.topEdge &&
    fly1.leftEdge <= fly2.rightEdge &&
    fly1.rightEdge >= fly2.leftEge) {
    res.bottom = true;
  }
  return res
}

let killFly = (i) => {
  if (chosenBackground == "BabyRoomBG") {
    arrayOfFlies[i].myImage = Images.getImage("starsplat"); //changing source image
  } else {
    arrayOfFlies[i].myImage = Images.getImage("yellowgreensplat"); //changing source image
  }
  arrayOfFlies[i].xSpeed = 0; //stops movement
  arrayOfFlies[i].ySpeed = 0;
  arrayOfSwattedFlies.push(arrayOfFlies[i]);
  arrayOfFlies.splice(i, 1);
  Sounds.getSound(targetAudio).pause();
  let randomCorrectSoundIndex = getRandomInt(0,arrayOfCorrectSounds.length - 1);
  let correctSound = document.getElementById("correctSound");
  correctSound.src = arrayOfCorrectSounds[randomCorrectSoundIndex];
  correctSound.play();
  if (currentTrack === customTrack && trackIndex === customTrack.length - 1 && arrayOfFlies.length === 0) {
    alert(language.congratulations);
    currentTrack = vowelTrackLevels;
    trackIndex = 0;
    temporarySubset = currentTrack[trackIndex];
  }
}
