//canvas definitions
  let canvas;
  let canvasContext;
  let canvasWidth;
  let canvasHeight;
  let canvasTopEdge;
  let canvasRightEdge;
  let canvasBottomEdge;
  let canvasLeftEdge;

//for drawing mouse coordinates on the screen for possible debugging help
  let mouseX;
  let mouseY;

//loop declarations
  let updateEverything;

  let drawEverything;

  let gameLoop;

//randomizer function
  let getRandomInt;
  getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let launchGame;
  launchGame = () => {

    //Images.loadImages();
    initializeArrayOfFlies();
    console.log(arrayOfFlies[0].myImage);
    //console.log(arrayOfFlies);
    initializeArrayOfPhonics();
    //console.log(arrayOfPhonics);
    initializeArraysOfQuestionsAndAnswers();
    console.log(arrayOfPossibleQuestions);
    setPhonicAudioTagSource();
    //console.log(arrayOfFliesLetters, arrayOfPossibleQuestions, arrayOfFliesPhonics);

    //setTargetPhonic();
    phonic.play();
    setInterval(gameLoop, 1000/30);
  }




  window.onload = () => {
//initialize canvas
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    canvasRightEdge = canvas.width = window.innerWidth;
    canvasBottomEdge = canvas.height = window.innerHeight;
    canvasTopEdge = 0;
    canvasLeftEdge = 0;


//gathers mouse coordinates for debugging potential debugging, used in canvasContext.fillText in drawEverything part of gameLoop
    canvas.onmousemove = (evt) => {
       mouseX = evt.pageX;
       mouseY = evt.pageY;
    }

    canvas.addEventListener("click", handleCanvasClick); //defined in Input.js, this function splats the flies

//part of gameLoop
    updateEverything = () => {
      moveFlies();
      updateFlyProperties();
      handleFlyWallCollisions();
      handleFlyToFlyCollisions();
    }

//part of game loop, maybe have the splats disappear over with a setTimeout so the canvas doesn't get too cluttered when the game has lots of flies... or maybe
//re-order the draw order so flies that are still alive are drawn on top of splats
    drawEverything = () => {
        canvasContext.clearRect(canvasLeftEdge,canvasTopEdge, canvasRightEdge,canvasBottomEdge);
        canvasContext.fillText("loading", canvas.width/2,canvas.height/2);
        canvasContext.drawImage(Images.getImage("table"), canvasLeftEdge,canvasTopEdge, canvasRightEdge,canvasBottomEdge);
        canvasContext.fillText(mouseX + " " + mouseY, mouseX, mouseY);
        drawFlies();
    }

    gameLoop = () => {
      updateEverything();
      drawEverything();
    }
    Images.loadImages();



//needs to be called before launch of game so the visual part of the game loads all at once instead of images popping up one at a time




}
