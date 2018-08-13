let killFly = (i) => {
  arrayOfFlies[i].myImage = Images.getImage("yellowgreensplat"); //changing source image
  arrayOfFlies[i].xSpeed = 0; //stops movement
  arrayOfFlies[i].ySpeed = 0;
  arrayOfSwattedFlies.push(arrayOfFlies[i]);
  arrayOfFlies.splice(i, 1);
  Sounds.getSound(targetPhonic).pause();
  splat.play(); //plays splat audio tag
}

function handleCanvasClick(evt) {

  numberOfAttempts++;
  screenShake(10);

  for (let i = 0; i<arrayOfFlies.length; i++) {
    if (evt.pageX >= arrayOfFlies[i].leftEdge + 30 && evt.pageX<=arrayOfFlies[i].rightEdge - 30 && evt.pageY >= arrayOfFlies[i].topEdge + 30 &&
        evt.pageY <= arrayOfFlies[i].bottomEdge - 30 && arrayOfFlies[i].target) {//checks for correct swat based on coordinates and target sound
      correctAnswers++;
      calculateOverallAccuracy();
      killFly(i);//at the top of this page, replaces image with yellowgreensplat, stops motion, clears fly from collision detection
      temporaryArrayOfQuestions.splice(0,1);
      checkForLevelResetOrAdvancement();//in adaptivedifficulty.js
      assignTargetPhonic();//in phonics.js
      assignTargetFlies();//in phonics.js
      playPhonic();//in phonics.js
    }/*end of correct answers*/ else {
      calculateOverallAccuracy();
    }//end of incorrect answers
  }//end of looping through flies
}//end of canvas click
