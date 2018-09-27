document.getElementById("tracks").style.visibility = "hidden";
document.getElementById("smallLetters").style.visibility = "hidden";
document.getElementById("bigLetters").style.visibility = "hidden";
document.getElementById("bigAndSmallLetters").style.visibility = "hidden";

//canvas definitions
let canvas;
let canvasContext;
let canvasWidth;
let canvasHeight;
let canvasTopEdge;
let canvasRightEdge;
let canvasBottomEdge;
let canvasLeftEdge;

let startTimeOfGame = new Date();
let currentTime = new Date();
let deltaTime = currentTime - startTimeOfGame;

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
  checkForFirstLaunch();
  console.log("firstLaunch",firstLaunch);
  intro = true;
  backgroundMusic.play();

  arrowX = canvas.width - 250;
  setInterval(function() {
    if (arrowX === canvas.width - 250) {
      arrowX = canvas.width - 205;
    } else {
      arrowX = canvas.width - 250;
    }
  }, 1000);

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
  console.log("language", language);
  console.log("intro", intro);
  console.log("isMainMenu", isMainMenu);
  console.log("isOpeningLanguageSelector", isOpeningLanguageSelector);
  console.log("isProfileMenu", isProfileMenu);
  console.log("isShowingExistingProfiles", isShowingExistingProfiles);

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
  introFlySwatterX = canvas.width/4;

  //initialize toggle circle on and off positions
  toggleOffX = canvas.width/4 + canvas.width/2 - 104;
  toggleOnX = canvas.width/4 + canvas.width/2 - 90;
  glowToggleCircleX = toggleOnX;
  customLevelsToggleCircleX = toggleOffX;
  stationaryToggleCircleX = toggleOffX;
  settingsMenuFlyX = canvas.width/4 + canvas.width/2 - 175;
  console.log("customLevelsToggleCircleX", customLevelsToggleCircleX);
  console.log("toggleOffX", toggleOffX);


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

    //console.log("mouseX/Y", mouseX,mouseY);
    //console.log("canvas.width - 350", canvas.width - 350);
    //console.log("canvas.width - 50", canvas.width - 50);

  });
  canvas.addEventListener("mouseup", function(evt) {
    mousePressed = false;
  });
  canvas.addEventListener("touchstart", function(evt) {
    evt.preventDefault();
    fingerPressed = true;
    fingerX = evt.touches[0].pageX;
    fingerY = evt.touches[0].pageY;

  });
  canvas.addEventListener("touchend", handleCanvasClick);// {
    console.log("mousePressed", mousePressed);
    console.log("fingerPressed", fingerPressed);

  //part of gameLoop
  updateEverything = () => {

    //change transparency levels for target flies and settings menu if glow is selected
    if ( (glowTransparency < 0.1) || (glowTransparency > 0.8) ) {
      glowSpeed *= -1;
    }
    glowTransparency += glowSpeed;

    //toggle level selector visibility
    if (!customLevelsShowing) {
      document.getElementById("tracks").style.visibility = "hidden";
      document.getElementById("smallLetters").style.visibility = "hidden";
      document.getElementById("bigLetters").style.visibility = "hidden";
      document.getElementById("bigAndSmallLetters").style.visibility = "hidden";
    } else {
      document.getElementById("tracks").style.visibility = "visible";
      document.getElementById("smallLetters").style.visibility = "visible";
      document.getElementById("bigLetters").style.visibility = "visible";
      document.getElementById("bigAndSmallLetters").style.visibility = "visible";
    }

    //move the fly in the settings menu if not in stationary mode
    if (!stationaryMode) {
      settingsMenuFlyX += settingsMenuFlyXSpeed;
    }
    if (settingsMenuFlyX > canvas.width/4 + canvas.width/2 - 165) {
      settingsMenuFlyXSpeed *= -1;
    } else if (settingsMenuFlyX < canvas.width/4 + canvas.width/2 - 225) {
      settingsMenuFlyXSpeed *= -1;
    }

    currentTime = new Date();
    deltaTime = currentTime - startTimeOfGame;
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

    if (intro) {
      drawIntro(mouseX,mouseY);
      return;
    } else if (isMainMenu) {
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
    } else if (isSettingsMenu) {
      drawSettingsMenu();
      stopTargetAudio();
    } else {

    canvasContext.clearRect(canvasLeftEdge,canvasTopEdge, canvasRightEdge,canvasBottomEdge);
    if (USE_SCREENSHAKE) {
      canvasContext.save();
      canvasContext.translate(screenshakeX, screenshakeY);
    }

    canvasContext.clearRect(canvasLeftEdge, canvasTopEdge, canvasRightEdge, canvasBottomEdge);

    canvasContext.fillText("loading", canvas.width / 2, canvas.height / 2); // FIXME: only draw when actually loading


    // drawn a bit bigger than the screen to avoid white edges during screenshakes
    canvasContext.drawImage(Images.getImage(chosenBackground), canvasLeftEdge - 16, canvasTopEdge - 16, canvasRightEdge + 16, canvasBottomEdge + 16);

    /* old GUI button layout
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
    if ( (mousePressed || fingerPressed) && ( (mouseX > 0 && mouseX < 100 && mouseY > canvas.height - 50 && mouseY < canvas.height) ||
          (fingerX > 0 && fingerX < 100 && fingerY > canvas.height - 50 && fingerY < canvas.height) ) ) {
      canvasContext.drawImage(Images.getImage("gui_button_down"), canvas.width - 100, canvas.height - 50);
      colorText(language.videoButton, 10,canvas.height - 20, "white", "18x papyrus");
    } else {
      canvasContext.drawImage(Images.getImage("gui_button"), 0, canvas.height - 50);
      colorText(language.videoButton, 10,canvas.height - 20, "white", "18x papyrus");
    }

    //exit game button
    //colorRect(canvas.width - 100,0, 100,50, "blue");
    if ( (mousePressed || fingerPressed) && ( (mouseX > canvas.width - 100 && mouseX < canvas.width && mouseY > 0 && mouseY < 50) ||
          (fingerX > canvas.width - 100 && fingerX < canvas.width && fingerY > 0 && fingerY < 50) ) ) {
            console.log("mouseX/Y", mouseX, mouseY);

            canvasContext.drawImage(Images.getImage("gui_button_down"), canvas.width - 100, canvas.height - 50);
            colorText(language.exit, canvas.width - 90, 30, "white", "18x papyrus");
          }
     else {
      canvasContext.drawImage(Images.getImage("gui_button"), canvas.width - 100, 0);
      colorText(language.exit, canvas.width - 90, 30, "white", "18x papyrus");
    }
    end of old GUI button layout */

    //settings button
    if ( (mousePressed || fingerPressed) && ( (mouseX > canvas.width - 100 && mouseX < canvas.width && mouseY > 0 && mouseY < 50) ||
          (fingerX > canvas.width - 100 && fingerX < canvas.width && fingerY > 0 && fingerY < 50) ) ) {
            console.log("mouseX/Y", mouseX, mouseY);

            canvasContext.drawImage(Images.getImage("gui_button_settings_down"), canvas.width - 100, canvas.height - 50);
            showSettingsButtonBlurbSeen = true;
            isSettingsMenu = true;
          }
     else {
      canvasContext.drawImage(Images.getImage("gui_button_settings"), canvas.width - 100, 0);
    }
    drawSwattedFlies();
    drawFlies();
    drawFlySwatter();
    drawFirstLaunchGamePlayInfoBlurb();
    drawSettingsButtonBlurb();
    if (USE_SCREENSHAKE) { canvasContext.restore(); }
  }
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
