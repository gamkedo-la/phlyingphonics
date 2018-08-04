let numberOfFlies; //flies to be used in game, should eventually be coordinated with student choices or training mode instead of just random
let initializeArrayOfFlies;
let arrayOfFlies = []; //flies to be used in game
let arrayOfSwattedFlies = [];
let drawFlies;
let moveFlies;
let handleFlyWallCollisions;

let flySpeedX = 5;
let flySpeedY = 5;


let randomDirection = () => { //helps randomize the gameplay so students can't rely too heavily on visual patterns to beat the level, they actually have to pay attention

  let randomInt = getRandomInt(0,1);
  if (randomInt < 0.5) {
    return 1;
  } else {
    return -1;
  }

}

drawSwattedFlies = () => {
  for (let i = 0; i<arrayOfSwattedFlies.length; i++) {
    arrayOfSwattedFlies[i].draw();
  }
}

drawFlies = () => {
  for (let flyDrawingIteration = 0; flyDrawingIteration<numberOfFlies; flyDrawingIteration++) {
  //  canvasContext.drawImage(fly, arrayOfFlies[flyDrawingIteration].x, arrayOfFlies[flyDrawingIteration].y,
  //                          arrayOfFlies[flyDrawingIteration].width, arrayOfFlies[flyDrawingIteration].height);
  arrayOfFlies[flyDrawingIteration].draw();
  }
}



//sets which flies are to be used at the start of the game, should probably be updated beyond just a random number between 1 and 26, should be based on student customization
//or 'training mode'
initializeArrayOfFlies = () => {
  numberOfFlies = 10;//getRandomInt(1,26);
  arrayOfFlies = new Array(numberOfFlies);
  for (let i = 0; i<numberOfFlies; i++) {
    arrayOfFlies[i] = new flyClass();
    arrayOfFlies[i].index = i;
  }
}


moveFlies = () => {
  for (let i=0;i<arrayOfFlies.length;i++) {
    arrayOfFlies[i].x+=arrayOfFlies[i].xSpeed;
    arrayOfFlies[i].y+=arrayOfFlies[i].ySpeed;
  }
}

//helps maintain collision detection
updateFlyProperties = () => {
  for (let i=0;i<arrayOfFlies.length;i++) {
    arrayOfFlies[i].topEdge=arrayOfFlies[i].y;
    arrayOfFlies[i].rightEdge=arrayOfFlies[i].x+arrayOfFlies[i].width;
    arrayOfFlies[i].bottomEdge=arrayOfFlies[i].y+arrayOfFlies[i].height;
    arrayOfFlies[i].leftEdge=arrayOfFlies[i].x;
    if (arrayOfFlies[i].xSpeed<0) {
      arrayOfFlies[i].currentXDirection = "left";
    } else{
      arrayOfFlies[i].currentXDirection = "right";
    }
    if (arrayOfFlies[i].ySpeed<0) {
      arrayOfFlies[i].currentYDirection = "up";
    } else {
      arrayOfFlies[i].currentYDirection = "down";
    };
  }
}

handleFlyWallCollisions = () => {
  for (let i=0;i<arrayOfFlies.length;i++) {
    if (arrayOfFlies[i].topEdge<=canvasTopEdge || arrayOfFlies[i].bottomEdge>=canvasBottomEdge) {
      arrayOfFlies[i].ySpeed*=-1;
    }
    if (arrayOfFlies[i].rightEdge>=canvasRightEdge || arrayOfFlies[i].leftEdge<=canvasLeftEdge) {
      arrayOfFlies[i].xSpeed*=-1;
    }
  }
}

handleFliesOffScreen = () => {
  for (let i=0;i<arrayOfFlies.length;i++) {
    if (arrayOfFlies[i].topEdge<canvasTopEdge - 50 || arrayOfFlies[i].bottomEdge>canvasBottomEdge + 50 || arrayOfFlies[i].leftEdge<canvasLeftEdge - 50 ||
        arrayOfFlies[i].rightEdge>canvasRightEdge + 50) {
          arrayOfFlies[i].x = getRandomInt(canvasLeftEdge, canvasRightEdge - arrayOfFlies[i].width);
          arrayOfFlies[i].y = getRandomInt(canvasTopEdge, canvasBottomEdge - arrayOfFlies[i].height);
          console.log(arrayOfFlies[i].x, arrayOfFlies[i].y);
        }
  }
}

let arrayOfPossibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function randomLetter() {
  let randomLetterIndex = getRandomInt(0,arrayOfPossibleLetters.length-1);
  var letter = arrayOfPossibleLetters[randomLetterIndex];
  arrayOfPossibleLetters.splice(randomLetterIndex,1);
  return letter;
}

function flyClass() {

    this.width = 200;
    this.height = 200;
    this.x = getRandomInt(canvasLeftEdge, canvasRightEdge - this.width);
    this.y = getRandomInt(canvasTopEdge, canvasBottomEdge - this.height);
    this.xSpeed = 5*randomDirection();//randomizing gameplay so students have to pay attention and not rely on patterns too much
    this.ySpeed = 5*randomDirection();//randomizing gameplay so students have to pay attention and not rely on patterns too much
    this.currentXDirection = checkCurrentFlyDirectionX();
    this.currentYDirection = checkCurrentFlyDirectionY();
    this.topEdge = this.y;
    this.rightEdge = this.x+this.width;
    this.bottomEdge = this.y+this.height;
    this.leftEdge = this.x;
    this.myImage = Images.getImage("fly")
    this.myLetter = randomLetter();
    this.myPhonic = "file:///C:/Users/stebs/Desktop/gamkedo/phlyingphonics/audio/phonics/" + this.myLetter + ".mp3";
    this.draw = () => {
      canvasContext.drawImage(this.myImage, this.x, this.y, this.width,this.height);
      canvasContext.font = "30px Arial";
      canvasContext.fillText(this.myLetter, this.x + this.width/2,this.y + this.height/2);
    }

}

checkCurrentFlyDirectionX = () => {
  if (this.xSpeed<0) {
    return "left"
  } else {
    return "right"
  };
}

checkCurrentFlyDirectionY = () => {
  if (this.ySpeed<0) {
    return "up"
  } else {
    return "down"
  };
}


handleFlyToFlyCollisions = () => {
  for (let progressiveFlyAnchor = 0; progressiveFlyAnchor<arrayOfFlies.length; progressiveFlyAnchor++) {
    for (let remainingFliesInArray = progressiveFlyAnchor+1; remainingFliesInArray<arrayOfFlies.length; remainingFliesInArray++) {
      if ( progressiveFlyAnchor === remainingFliesInArray ) {continue;}
      //bottom/top collision
      if ( (arrayOfFlies[progressiveFlyAnchor].topEdge<=arrayOfFlies[remainingFliesInArray].bottomEdge  && //these two lines dictate top/bottom collision
            arrayOfFlies[progressiveFlyAnchor].bottomEdge>=arrayOfFlies[remainingFliesInArray].bottomEdge &&
            arrayOfFlies[progressiveFlyAnchor].leftEdge<=arrayOfFlies[remainingFliesInArray].rightEdge &&
            arrayOfFlies[progressiveFlyAnchor].rightEdge>=arrayOfFlies[remainingFliesInArray].leftEdge )
             ||
          ( arrayOfFlies[progressiveFlyAnchor].bottomEdge>=arrayOfFlies[remainingFliesInArray].topEdge &&
            arrayOfFlies[progressiveFlyAnchor].topEdge<=arrayOfFlies[remainingFliesInArray].topEdge &&
            arrayOfFlies[progressiveFlyAnchor].leftEdge<=arrayOfFlies[remainingFliesInArray].rightEdge &&
            arrayOfFlies[progressiveFlyAnchor].rightEdge>=arrayOfFlies[remainingFliesInArray].leftEge ) ) {

              arrayOfFlies[progressiveFlyAnchor].ySpeed*=-1;
              arrayOfFlies[remainingFliesInArray].ySpeed*=-1;
              if (arrayOfFlies[progressiveFlyAnchor].currentYDirection = "up") {
                arrayOfFlies[progressiveFlyAnchor].y += -5;
                arrayOfFlies[remainingFliesInArray].y += 5;
              } else {
                arrayOfFlies[progressiveFlyAnchor].y += 5;
                arrayOFlies[remainingFliesInArray].y += -5;
              }
            }
            //left/right collision
     if ( (arrayOfFlies[progressiveFlyAnchor].rightEdge>=arrayOfFlies[remainingFliesInArray].leftEdge &&
          arrayOfFlies[progressiveFlyAnchor].topEdge<=arrayOfFlies[remainingFliesInArray].bottomEdge &&
          arrayOfFlies[progressiveFlyAnchor].bottomEdge>=arrayOfFlies[remainingFliesInArray].topEdge &&
          arrayOfFlies[progressiveFlyAnchor].leftEdge<=arrayOfFlies[remainingFliesInArray].leftEdge)
              ||
          ( arrayOfFlies[progressiveFlyAnchor].leftEdge<=arrayOfFlies[remainingFliesInArray].rightEdge &&
            arrayOfFlies[progressiveFlyAnchor].topEdge<=arrayOfFlies[remainingFliesInArray].bottomEdge &&
            arrayOfFlies[progressiveFlyAnchor].bottomEdge>=arrayOfFlies[remainingFliesInArray].topEdge  &&
            arrayOfFlies[progressiveFlyAnchor].rightEdge>=arrayOfFlies[remainingFliesInArray].rightEdge) ) {

              arrayOfFlies[progressiveFlyAnchor].xSpeed*=-1;
              arrayOfFlies[remainingFliesInArray].xSpeed*=-1;
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
