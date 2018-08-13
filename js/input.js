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

  screenShake(10);

  for (let i = 0; i<arrayOfFlies.length; i++) {
    if (evt.pageX >= arrayOfFlies[i].leftEdge + 30 && evt.pageX<=arrayOfFlies[i].rightEdge - 30 && evt.pageY >= arrayOfFlies[i].topEdge + 30 &&
        evt.pageY <= arrayOfFlies[i].bottomEdge - 30 && arrayOfFlies[i].target) {//checks for correct swat based on coordinates and target sound
      correctAnswers++;
      killFly(i);//at the top of this page, replaces image with yellowgreensplat, stops motion, clears fly from collision detection
      temporaryArrayOfQuestions.splice(0,1);
      console.log(temporaryArrayOfQuestions.length, temporarySubset);
      checkForLevelReset(temporarySubset);//in adaptivedifficulty.js
      console.log(temporarySubset);
      assignTargetPhonic();//in phonics.js
      assignTargetFlies();//in phonics.js
      playPhonic();//in phonics.js
    }/*end of correct answers*/ //else {
    //}//end of incorrect answers
  }//end of looping through flies
      numberOfAttempts++;
      calculateOverallAccuracy();//in adaptivedifficulty.js
}//end of canvas click

      //console.log(temporarySubset, temporaryArrayOfQuestions.length);
      //if (temporaryArrayOfQuestions.length === 0 && temporarySubset === ["E","O"]) {
        //arrayOfSwattedFlies = [];
        //chooseBackground();
        //temporarySubset = ["I","U"];
        //initializeArrayOfFlies();
        //assignFlaps();//in Images.js
        //fillTemporaryArrayOfQuestions();
        //assignTargetPhonic();
        //playPhonic();
        //assignTargetFlies();
      //}
      /* else if (temporaryArrayOfQuestions.length === 0 && temporarySubset === ["I","U"]) {
        arrayOfSwattedFlies = [];
        temporarySubset = ["I","U"];
        initializeArrayOfFlies();
        assignFlaps();
        fillTemporaryArrayOfQuestions();
        console.log(temporaryArrayOfQuestions);
        assignTargetPhonic();
        console.log(targetPhonic);
        playPhonic();
        assignTargetFlies();
      }*/
