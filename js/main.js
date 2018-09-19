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

//for touch input
let fingerX = 0;
let fingerY = 0;

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

  initializeArrayOfProfiles();
  initializeExistingProfilesMenuButtonList();



  if (localStorage.getItem("arrayOfTargetsToPractice") === null) {
    fillArrayOfTargetsToPractice();
  } else {
    arrayOfTargetsToPractice = localStorage.getItem("arrayOfTargetsToPractice");
  }

  setupKeyboardDateHackInput();
  initializeCurrentPracticeSessionNumber();
  currentTrack = vowelTrackLevels;
  temporarySubset = currentTrack[trackIndex];//consonantTrackLevels[consonantTrackLevelIndex];
  updateIndividualTargetsPreviousPracticeSessionNumbers();
  updateIndividualTargetsPreviousPracticeDate();
  console.log("languageSelectorButtonList", languageSelectorButtonList);

}

let launchGame;
launchGame = () => {
  //console.log("mainMenuButtonList", mainMenuButtonList);
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
  canvas.addEventListener("mousedown", function(evt) {
    mousePressed = true;
  });
  canvas.addEventListener("mouseup", function(evt) {
    mousePressed = false;
  });
  canvas.addEventListener("touchstart", function(evt) {
    evt.preventDefault();
    fingerPressed = true;
    fingerX = evt.touches[0].pageX;
    fingerY = evt.touches[0].pageY;

    //console.log("buttonCoordinates", languageSelectorButtonList[0].x, languageSelectorButtonList[0].y, buttonWidth, buttonHeight);
  console.log("fingerX/Y", fingerX,fingerY);
    console.log("fingerPressed");
  });
  canvas.addEventListener("touchend", handleCanvasClick);// {

    //console.log("evt", evt);
    //console.log("fingerX/Y", fingerX,fingerY);
  //  console.log("buttonCoordinates", languageSelectorButtonList[0].x, languageSelectorButtonList[0].y, buttonWidth, buttonHeight);
  //  console.log("mouseX/Y", mouseX,mouseY);
    //fingerPressed = false;
  //  console.log("fingerUp");
//});

  //part of gameLoop
  updateEverything = () => {

    handleFlyWallCollisions();
    handleFlyToFlyCollisions();
    handleFliesOffScreen();
    if (!useStationaryMode) {
      moveFlies();
    }
    updateFlyProperties();
    updateScreenshake();

  }

  drawFlySwatter = () => {
    if (chosenBackground == 'BabyRoomBG') { // baby room with mobile
      canvasContext.drawImage(Images.getImage("BabyHand"), mouseX - 50, mouseY - 50);
    } else if (chosenBackground == 'tree2') { // FIXME: add other levels here in the future if they contain butterflies
      canvasContext.drawImage(Images.getImage("butterflyNet"), mouseX - 50, mouseY - 50);
    } else if (chosenBackground === "honeycomb") {
      canvasContext.drawImage(Images.getImage("HoneyJar"), mouseX - 50, mouseY - 50);
    } else {
      canvasContext.drawImage(Images.getImage("flySwatter"), mouseX - 50, mouseY - 50);
    }
  }

  //part of game loop, maybe have the splats disappear over with a setTimeout
  //so the canvas doesn't get too cluttered when the game has lots of flies
  drawEverything = () => {

    if (isMainMenu) {
      drawMainMenu();
      return;
    } else if (isOpeningLanguageSelector) {
      drawOpeningLanguageSelector();
      return;
    } else if (isProfileMenu) {
      drawProfileMenu();
      return;
    } else if (isShowingExistingProfiles) {
      drawExistingProfilesMenu();
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

    //text info button
    //colorRect(canvas.width - 100,canvas.height - 50, 100,50, "blue");
    if ( (mousePressed || fingerPressed) && ( (mouseX > canvas.width - 100 && mouseX < canvas.width && mouseY > canvas.height - 50 && mouseY < canvas.height) ||
         (fingerX > canvas.width - 100 && fingerX < canvas.width && fingerY > canvas.height - 50 && fingerY < canvas.height) ) ) {
           console.log("mouseX/Y", mouseX, mouseY);
      canvasContext.drawImage(Images.getImage("gui_button_down"), canvas.width - 100, canvas.height - 50);
      colorText(language.information, canvas.width - 90, canvas.height - 20, "white", "18px papyrus");
    } else {
    canvasContext.drawImage(Images.getImage("gui_button"), canvas.width - 100, canvas.height - 50);
    colorText(language.information, canvas.width - 90, canvas.height - 20, "white", "18px papyrus");
    }

    //video info button
    //colorRect(0, canvas.height - 50, 100, 50, "blue");
    if ( (mousePressed || fingerPressed) && (mouseX > 0 && mouseX < 100 && mouseY > canvas.height - 50 && mouseY < canvas.height) ||
          (fingerX > 0 && fingerX < 100 && fingerY > canvas.height - 50 && fingerY < canvas.height) ) {
      canvasContext.drawImage(Images.getImage("gui_button_down"), canvas.width - 100, canvas.height - 50);
      colorText(language.videoButton, 10,canvas.height - 20, "white", "18x papyrus");
    } else {
      canvasContext.drawImage(Images.getImage("gui_button"), 0, canvas.height - 50);
      colorText(language.videoButton, 10,canvas.height - 20, "white", "18x papyrus");
    }

    //exit game button
    //colorRect(canvas.width - 100,0, 100,50, "blue");
    if ( (mousePressed || fingerPressed) && (mouseX > canvas.width - 100 && mouseX < canvas.width && mouseY > 0 && mouseY < 50) ||
          (fingerX > canvas.width - 100 && fingerX < canvas.width && fingerY > 0 && fingerY < 50) ) {
            console.log("mouseX/Y", mouseX, mouseY);

            canvasContext.drawImage(Images.getImage("gui_button_down"), canvas.width - 100, canvas.height - 50);
            colorText(language.exit, canvas.width - 90, 30, "white", "18x papyrus");
          }
     else {
      canvasContext.drawImage(Images.getImage("gui_button"), canvas.width - 100, 0);
      colorText(language.exit, canvas.width - 90, 30, "white", "18x papyrus");
    }

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
