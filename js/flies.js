let numberOfFlies; //flies to be used in game, should eventually be coordinated with student choices or training mode instead of just random
let initializeArrayOfFlies;
let arrayOfFlies = []; //flies to be used in game
let targetFly;
let assignTargetFly = () => {
  let randomFlyIndex = getRandomInt(0, arrayOfFlies.length-1);
  targetFly = arrayOfFlies[randomFlyIndex];
}
let arrayOfSwattedFlies = [];
let testFly;
let drawFlies;
let moveFlies;
let handleFlyWallCollisions;



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



drawSwattedFlies = () => {
  for (let i = 0; i < arrayOfSwattedFlies.length; i++) {
    arrayOfSwattedFlies[i].draw();
  }
}

drawFlies = () => {
  for (let flyDrawingIteration = 0; flyDrawingIteration < numberOfFlies; flyDrawingIteration++) {
    //  canvasContext.drawImage(fly, arrayOfFlies[flyDrawingIteration].x, arrayOfFlies[flyDrawingIteration].y,
    //                          arrayOfFlies[flyDrawingIteration].width, arrayOfFlies[flyDrawingIteration].height);

    if (arrayOfFlies[flyDrawingIteration]) { // does this fly still exist? (can be undefined after a sucessful swat)
      arrayOfFlies[flyDrawingIteration].draw();
    }
  }
}



//sets which flies are to be used at the start of the game, should probably be updated beyond just a random number between 1 and 26, should be based on student customization
//or 'training mode'
initializeArrayOfFlies = () => {
  numberOfFlies = 10;//getRandomInt(1,26);
  arrayOfFlies = new Array(numberOfFlies);
  for (let i = 0; i < numberOfFlies; i++) {
    arrayOfFlies[i] = new flyClass();
    arrayOfFlies[i].index = i;
  }
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
      //console.log(arrayOfFlies[i].x, arrayOfFlies[i].y);
    }
  }
}


let arrayOfLowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let arrayOfCapitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let arrayOfPossibleLetters = new Array(arrayOfFlies.length);

function randomLowerCaseLetter() {
  let randomLetterIndex = getRandomInt(0,arrayOfLowerCaseLetters.length-1);
  var letter = arrayOfLowerCaseLetters[randomLetterIndex];
  arrayOfLowerCaseLetters.splice(randomLetterIndex,1);

let arrayOfLowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arrayOfCapitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randomLowerCaseLetter() {
  let randomLetterIndex = getRandomInt(0, arrayOfPossibleLetters.length - 1);
  var letter = arrayOfLowerCaseLetters[randomLetterIndex];
  arrayOfLowerCaseLetters.splice(randomLetterIndex, 1);

  return letter;
}

function randomCapitalLetter() {
  let randomLetterIndex = getRandomInt(0, arrayOfCapitalLetters.length - 1);
  var letter = arrayOfCapitalLetters[randomLetterIndex];
  arrayOfCapitalLetters.splice(randomLetterIndex, 1);
  return letter;
}

function flyClass() {


    this.width = 200;
    this.height = 200;
    this.x = getRandomInt(canvasLeftEdge, canvasRightEdge - this.width);
    this.y = getRandomInt(canvasTopEdge, canvasBottomEdge - this.height);
    this.xSpeed = 3*randomDirection();//randomizing gameplay so students have to pay attention and not rely on patterns too much
    this.ySpeed = 3*randomDirection();//randomizing gameplay so students have to pay attention and not rely on patterns too much
    this.currentXDirection = checkCurrentFlyDirectionX();
    this.currentYDirection = checkCurrentFlyDirectionY();
    this.topEdge = this.y;
    this.rightEdge = this.x+this.width;
    this.bottomEdge = this.y+this.height;
    this.leftEdge = this.x;
    this.myImage = Images.getImage("fly_version_1")
    this.myLetter = randomCapitalLetter();//randomLowerCaseLetter();
    this.myPhonic = Sounds.getSound(this.myLetter.toLowerCase());
    this.draw = () => {
      canvasContext.drawImage(this.myImage, this.x, this.y, this.width,this.height);
      canvasContext.drawImage(Images.getImage(this.myLetter), this.x + 80,this.y + 60, 50,50);
      //canvasContext.font = "30px Arial";
      //canvasContext.fillStyle = "orange";
      //canvasContext.fillText(this.myLetter, this.x + this.width/2,this.y + this.height/2);
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
      //bottom/top collision
      if ((arrayOfFlies[progressiveFlyAnchor].topEdge <= arrayOfFlies[remainingFliesInArray].bottomEdge && //these two lines dictate top/bottom collision
        arrayOfFlies[progressiveFlyAnchor].bottomEdge >= arrayOfFlies[remainingFliesInArray].bottomEdge &&
        arrayOfFlies[progressiveFlyAnchor].leftEdge <= arrayOfFlies[remainingFliesInArray].rightEdge &&
        arrayOfFlies[progressiveFlyAnchor].rightEdge >= arrayOfFlies[remainingFliesInArray].leftEdge)
        ||
        (arrayOfFlies[progressiveFlyAnchor].bottomEdge >= arrayOfFlies[remainingFliesInArray].topEdge &&
          arrayOfFlies[progressiveFlyAnchor].topEdge <= arrayOfFlies[remainingFliesInArray].topEdge &&
          arrayOfFlies[progressiveFlyAnchor].leftEdge <= arrayOfFlies[remainingFliesInArray].rightEdge &&
          arrayOfFlies[progressiveFlyAnchor].rightEdge >= arrayOfFlies[remainingFliesInArray].leftEge)) {

        arrayOfFlies[progressiveFlyAnchor].ySpeed *= -1;
        arrayOfFlies[remainingFliesInArray].ySpeed *= -1;
        if (arrayOfFlies[progressiveFlyAnchor].currentYDirection = "up") {
          arrayOfFlies[progressiveFlyAnchor].y += -5;
          arrayOfFlies[remainingFliesInArray].y += 5;
        } else {
          arrayOfFlies[progressiveFlyAnchor].y += 5;
          arrayOFlies[remainingFliesInArray].y += -5;
        }
      }
      //left/right collision
      if ((arrayOfFlies[progressiveFlyAnchor].rightEdge >= arrayOfFlies[remainingFliesInArray].leftEdge &&
        arrayOfFlies[progressiveFlyAnchor].topEdge <= arrayOfFlies[remainingFliesInArray].bottomEdge &&
        arrayOfFlies[progressiveFlyAnchor].bottomEdge >= arrayOfFlies[remainingFliesInArray].topEdge &&
        arrayOfFlies[progressiveFlyAnchor].leftEdge <= arrayOfFlies[remainingFliesInArray].leftEdge)
        ||
        (arrayOfFlies[progressiveFlyAnchor].leftEdge <= arrayOfFlies[remainingFliesInArray].rightEdge &&
          arrayOfFlies[progressiveFlyAnchor].topEdge <= arrayOfFlies[remainingFliesInArray].bottomEdge &&
          arrayOfFlies[progressiveFlyAnchor].bottomEdge >= arrayOfFlies[remainingFliesInArray].topEdge &&
          arrayOfFlies[progressiveFlyAnchor].rightEdge >= arrayOfFlies[remainingFliesInArray].rightEdge)) {

        arrayOfFlies[progressiveFlyAnchor].xSpeed *= -1;
        arrayOfFlies[remainingFliesInArray].xSpeed *= -1;
        if (arrayOfFlies[progressiveFlyAnchor].currentXDirection = "right") {
          arrayOfFlies[progressiveFlyAnchor].x += -5;
          arrayOfFlies[remainingFliesInArray].x += 5;
        } else {
          arrayOfFlies[progressiveFlyAnchor].x += 5;
          arrayOFlies[remainingFliesInArray].x += -5;
        }
      }//end of left/right conditional
    }//end of inner part of nested for loop
  }//end of outer part of nested for loop
}//end of fly to fly collision function
