let splat = document.getElementById("splat"); //binding for referencing splat tag in html file

//changes fly image source to splat and stops movement if a mouse click happens within 'reasonable' coordinates of a flies borders, 'reasonable' to help prevent unintended
//splats of other flies... this may be unnecessary with properly made image files... my flies were made before I knew how to make them properly

let killFly = (i) => {
  console.log(i);
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
    if (evt.pageX >= arrayOfFlies[i].leftEdge + 30 && evt.pageX<=arrayOfFlies[i].rightEdge - 30 && evt.pageY >= arrayOfFlies[i].topEdge + 30 && //reasonable clicking coordinates
        evt.pageY <= arrayOfFlies[i].bottomEdge - 30 && arrayOfFlies[i].target) {
      correctAnswers++;
      killFly(i);
      temporaryArrayOfQuestions.splice(0,1);
      console.log(temporaryArrayOfQuestions.length, temporarySubset);
      checkForLevelReset(temporarySubset);//in adaptivedifficulty.js
      assignTargetPhonic();
      assignTargetFlies();
      playPhonic();
    }/*end of correct answers*/ //else {
    //}//end of incorrect answers
  }//end of looping through flies
      numberOfAttempts++;
      calculateOverallAccuracy();//in adaptivedifficulty.js
}//end of canvas click

      //console.log(temporarySubset, temporaryArrayOfQuestions.length);
      //if (temporaryArrayOfQuestions.length === 0 && temporarySubset === ["E","O"]) {
        //arrayOfSwattedFlies = [];
        //temporarySubset = ["I","U"];
        //initializeArrayOfFlies();
        //assignFlaps();
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

      //temporaryArrayOfQuestions.splice(0,1);
      /*for (let i = 0; i<arrayOfPossibleQuestions.length; i++) {
        if (arrayOfPossibleQuestions[i] === targetFly.myPhonic)
        arrayOfPossibleQuestions.splice(i,1);
      }//makes sure not to repeat questions*/
