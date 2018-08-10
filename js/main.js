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

// unused debug:



let gameLoop;

let backgroundMusic = document.getElementById("backgroundMusic");

//randomizer function
let getRandomInt;
getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


  let launchGame;
  launchGame = () => {
    backgroundMusic.play();


    initializeArrayOfFlies();
    for (let i = 0; i < arrayOfFlies.length; i++) {
        if ( arrayOfFlies[i].myImage === Images.getImage("fly_version_1") ) {
          arrayOfFlies[i].myImageB = Images.getImage("fly_version_1b");
        } else if ( arrayOfFlies[i].myImage === Images.getImage("cartoonFly") ) {
            arrayOfFlies[i].myImageB = Images.getImage("cartoonFlyB");
          }
          console.log(arrayOfFlies[i].myImage, arrayOfFlies[i].myImageB);
        }


    assignTargetFly();


    initializeArrayOfPhonics();

    initializeArrayOfPossibleQuestions();

    setPhonicAudioTagSource();

    targetFly.myPhonic.loop = true;
    targetFly.myPhonic.play();
    setInterval(gameLoop, 1000/30);
  }

window.onload = () => {
  //initialize canvas
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  canvasRightEdge = canvas.width = window.innerWidth*0.8;
  canvasBottomEdge = canvas.height = window.innerHeight*0.75;
  canvasTopEdge = 0;
  canvasLeftEdge = 0;
  backgroundMusic.volume = 0.25;
  //console.log(canvas.width,canvas.height);
  let arrayOfBackgroundStrings = ["table", "tableWithFilter", "bowlOfFruit"];
  let chosenBackground;
  let chooseBackground = () => {
    chosenBackground = arrayOfBackgroundStrings[getRandomInt(0, arrayOfBackgroundStrings.length - 1)];
    //console.log(chosenBackground);

  }
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
    //console.log('fly swatter at: ' + mouseX + ',' + mouseY);
    canvasContext.drawImage(Images.getImage("flySwatter"), mouseX - 50, mouseY - 50);
  }

  //part of game loop, maybe have the splats disappear over with a setTimeout so the canvas doesn't get too cluttered when the game has lots of flies... or maybe
  //re-order the draw order so flies that are still alive are drawn on top of splats
  drawEverything = () => {

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

  //needs to be called before launch of game so the visual part of the game loads all at once instead of images popping up one at a time

}
