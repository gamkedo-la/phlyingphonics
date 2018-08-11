let splat = document.getElementById("splat"); //binding for referencing splat tag in html file

//changes fly image source to splat and stops movement if a mouse click happens within 'reasonable' coordinates of a flies borders, 'reasonable' to help prevent unintended
//splats of other flies... this may be unnecessary with properly made image files... my flies were made before I knew how to make them properly
function handleCanvasClick(evt) {

  screenShake(10);


  for (let i = 0; i<arrayOfFlies.length; i++) {
    if (evt.pageX >= arrayOfFlies[i].leftEdge + 30 && evt.pageX<=arrayOfFlies[i].rightEdge - 30 && evt.pageY >= arrayOfFlies[i].topEdge + 30 && //reasonable clicking coordinates
        evt.pageY <= arrayOfFlies[i].bottomEdge - 30 && arrayOfFlies[i] === targetFly) {
          //console.log(arrayOfFlies[i].myPhonic, phonic.src);
          correctAnswers++;
      arrayOfFlies[i].myImage = Images.getImage("yellowgreensplat"); //changing source image
      arrayOfFlies[i].xSpeed = 0; //stops movement
      arrayOfFlies[i].ySpeed = 0;
      arrayOfSwattedFlies.push(arrayOfFlies[i]);

      arrayOfFlies.splice(i, 1);

      targetFly.myPhonic.pause();
      splat.play(); //plays splat audio tag
      //console.log(arrayOfPossibleQuestions[i],arrayOfFlies[i].myLetter);

      for (let i = 0; i<arrayOfPossibleQuestions.length; i++) {
        if (arrayOfPossibleQuestions[i] === targetFly.myPhonic)
        arrayOfPossibleQuestions.splice(i,1);
      }//makes sure not to repeat questions

      assignTargetFly();
      targetFly.myPhonic.loop = true;
      targetFly.myPhonic.play();
    }/*end of correct answers*/ else {

    }//end of incorrect answers
  }//end of looping through flies
  numberOfAttempts++;
  overallAccuracy = Math.round( (correctAnswers/numberOfAttempts)*100 );
  console.log(numberOfAttempts, correctAnswers, overallAccuracy);
}//end of canvas click
