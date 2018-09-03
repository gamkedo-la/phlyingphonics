//canvas definitions
let canvas;
let canvasContext;
let canvasWidth;
let canvasHeight;
let canvasTopEdge;
let canvasRightEdge;
let canvasBottomEdge;
let canvasLeftEdge;

// set to false to turn off ss when you swat
const USE_SCREENSHAKE = true;

//used by the fly swatter
let mouseX = 0;
let mouseY = 0;

//loop declarations
let updateEverything;
let drawEverything;
let drawFlySwatter;
let gameLoop;

let backgroundMusic = document.getElementById("backgroundMusic");

//randomizer function
let getRandomInt;
getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let initialize = () => {
  backgroundMusic.play();
  initializeCurrentPracticeSessionNumber();
  currentTrack = vowelTrackLevels;
  temporarySubset = currentTrack[trackIndex];//consonantTrackLevels[consonantTrackLevelIndex];
  updateIndividualTargetsPreviousPracticeSessionNumbers();
  initializeArrayOfFlies();//in adaptivedifficulty.js
  assignMyLetterToCheck();
  assignFlaps();//in flies.js
  fillTemporaryArrayOfQuestions();//in adaptivedifficulty.js
  assignTargetAudio();
  playTargetAudio();
  assignTargetFlies();//in flies.js
  fillArrayOfTargetsToPractice();
  for (let i = 0; i<arrayOfPhonicResults.length; i++) {
    console.log(arrayOfPhonicResults[i].previousPracticeDate);
  }
}

let launchGame;
launchGame = () => {
  initialize();
  setInterval(gameLoop, 1000/30);
}

window.onload = () => {
  //initialize canvas
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  window.onresize();
  backgroundMusic.volume = 0.1;
  chooseBackground();

  // gathers mouse coordinates for debugging potential debugging,
  // used in canvasContext.fillText in drawEverything part of gameLoop
  // used to move the fly swatter sprite
  canvas.onmousemove = (evt) => {
    mouseX = evt.pageX;
    mouseY = evt.pageY;
  }

  canvas.addEventListener("click", handleCanvasClick); //defined in Input.js, this function splats the flies

  //part of gameLoop
  updateEverything = () => {

    handleFlyWallCollisions();
    handleFlyToFlyCollisions();
    handleFliesOffScreen();
    moveFlies();
    updateFlyProperties();
    updateScreenshake();

  }

  drawFlySwatter = () => {
    if (chosenBackground == 'BabyRoomBG') {
      canvasContext.drawImage(Images.getImage("BabyHand"), mouseX - 50, mouseY - 50);
    } else {
      canvasContext.drawImage(Images.getImage("flySwatter"), mouseX - 50, mouseY - 50);
    }
  }

  //part of game loop, maybe have the splats disappear over with a setTimeout
  //so the canvas doesn't get too cluttered when the game has lots of flies
  drawEverything = () => {
    if (isMenu) {
      drawMenu();
      return;
    }

    canvasContext.clearRect(canvasLeftEdge,canvasTopEdge, canvasRightEdge,canvasBottomEdge);
    if (USE_SCREENSHAKE) {
      canvasContext.save();
      canvasContext.translate(screenshakeX, screenshakeY);
    }

    canvasContext.clearRect(canvasLeftEdge, canvasTopEdge, canvasRightEdge, canvasBottomEdge);

    canvasContext.fillText("loading", canvas.width / 2, canvas.height / 2); // FIXME: only draw when actually loading


    // drawn a bit bigger than the screen to avoid white edges during screenshakes
    canvasContext.drawImage(Images.getImage(chosenBackground), canvasLeftEdge - 16, canvasTopEdge - 16, canvasRightEdge + 16, canvasBottomEdge + 16);

    //canvasContext.fillText(mouseX + " " + mouseY, mouseX, mouseY);
    //drawTestFlyWithCapitalLetter();
    //testFly.draw();
    //  drawA();
    drawSwattedFlies();
    drawFlies();
    drawFlySwatter();

    if (USE_SCREENSHAKE) { canvasContext.restore(); }
  }

  gameLoop = () => {
    updateEverything();
    drawEverything();
  }

  Images.loadImages();
  Sounds.loadSounds();
}

window.onresize = () => {
  canvasRightEdge = canvas.width = window.innerWidth*0.8;
  canvasBottomEdge = canvas.height = window.innerHeight*0.65;
  canvasTopEdge = 0;
  canvasLeftEdge = 0;
}
