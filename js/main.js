let arrayOfAudios;
const ASPECT_RATIO = 16/9;

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

let inputX = 0;
let inputY = 0;

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
  intro = true;
  backgroundMusic.volOverride = 0.3;
  backgroundMusic.volume = masterVolume*backgroundMusic.volOverride;
  backgroundMusic.play();
  arrayOfAudios.push(backgroundMusic);

  arrowX = canvas.width - 250;
  setInterval(function() {
    if (arrowX === canvas.width - 250) {
      arrowX = canvas.width - 205;
    } else {
      arrowX = canvas.width - 250;
    }
  }, 1000);

  leftArrowX = canvas.width/4 + canvas.width/2 + 15;
  setInterval(function() {
    if (leftArrowX === canvas.width/4 + canvas.width/2 + 15) {
      leftArrowX = canvas.width - 5;
    } else {
      leftArrowX = canvas.width/4 + canvas.width/2 + 15;
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

  chooseBackground();
  introFlySwatterX = canvas.width/4;

  arrayOfAudios = [levelCompletedAudio,tryAgainAudio,backgroundMusic,targetAudio,introPhonics,correctSound,incorrectSound,ashiko,goSound,
                       toggleOn,toggleOff,missedSound];

  //should be in languages.js, avoiding hoisting/loading issues
  let profileMenuButtonList = [
    {label: language.newStudent,  x:325,y:185, onClick: generateNewProfile},
    {label: language.previous, x:450,y:350, onClick: showSettingsMenu}
  ];

  //initialize toggle circle on and off positions
  toggleOffX = canvas.width/4 + canvas.width/2 - 104;
  toggleOnX = canvas.width/4 + canvas.width/2 - 90;
  glowToggleCircleX = toggleOnX;
  customLevelsToggleCircleX = toggleOffX;
  stationaryToggleCircleX = toggleOffX;
  settingsMenuFlyX = canvas.width/4 + canvas.width/2 - 175;


  canvas.onmousemove = (evt) => {
    inputX = evt.pageX;
    inputY = evt.pageY;
  }

  canvas.addEventListener("mousedown", handleMousedown);
  canvas.addEventListener("mouseup", handleMouseup);
  canvas.addEventListener("touchstart", handleTouchstart);
  canvas.addEventListener("touchend", handleTouchend);

  canvas.onclick = (evt, inputX,inputY) => {//inputX,inputY,
    console.log("evt.pageX/Y",evt.pageX,evt.pageY);
    console.log("inputX/Y", inputX,inputY);
    handleCanvasClick(evt,inputX,inputY);// inputX,inputY,
  } //defined in Input.js, this function splats the flies

  //part of gameLoop
  updateEverything = () => {

    for (let i = 0; i < arrayOfParticles.length; i++) {
      arrayOfParticles[i].move();
    }

    //console.log("timeSinceGoSoundPlayed", timeSinceGoSoundPlayed);

    if (timeSinceGoSoundPlayed > 500) {
      beginLevelAnimation = false;
      beginLevelBackgroundTransparency = 0;
      backgroundMusic.play();
      //backgroundMusic.volume = masterVolume*backgroundMusic.volOverride;
      playTargetAudio();
      timeGoSoundPlayed = undefined;
      goSoundPlayed = false;
      transitionCounter++;
    }


    timeSinceGoSoundPlayed = currentTime - timeGoSoundPlayed;

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
    if (!stationaryMode) {
      moveFlies();
    }
    updateFlyProperties();
    updateScreenshake();

  }

  drawFlySwatter = () => {
    if (chosenBackground == 'BabyRoomBG') { // baby room with mobile
      canvasContext.drawImage(Images.getImage("BabyHand"), inputX - 50, inputY - 50);
    } else if (chosenBackground == 'tree2') { // FIXME: add other levels here in the future if they contain butterflies
      canvasContext.drawImage(Images.getImage("butterflyNet"), inputX - 50, inputY - 50);
    } else if (chosenBackground === "honeycomb") {
      canvasContext.drawImage(Images.getImage("HoneyJar"), inputX - 50, inputY - 50);
    } else {
      canvasContext.drawImage(Images.getImage("flySwatter"), inputX - 50, inputY - 50);
    }
  }

  //part of game loop, maybe have the splats disappear over with a setTimeout
  //so the canvas doesn't get too cluttered when the game has lots of flies
  drawEverything = (inputX,inputY) => {//inputX,inputY,

    if (intro) {

      drawIntro(inputX,inputY);
      return;
    } else if (isMainMenu) {
      drawMainMenu(inputX,inputY);
      return;
    } else if (isOpeningLanguageSelector) {
      drawOpeningLanguageSelector( inputX,inputY);
      return;
    } else if (isProfileMenu) {
      drawProfileMenu(inputX,inputY);
      return;
    } else if (isShowingExistingProfiles) {
      drawExistingProfilesMenu(inputX,inputY);
      return;
    } else if (isSettingsMenu) {
      drawSettingsMenu(inputX,inputY);
      stopTargetAudio();
      if (!settingsMenuInfoSeen) {
        drawSettingsMenuBlurbs(inputX,inputY);
      }
    } else if (isCreditsMenu) {
      drawCreditsMenu(inputX,inputY);
    } else if (levelCompletedAnimation) {
      drawLevelCompletedAnimation(inputX,inputY);
      stopTargetAudio();
    } else if (beginLevelAnimation) {
      drawBeginLevelAnimation(inputX,inputY);
    } else if (tryAgainAnimation) {
      drawTryAgainAnimation(inputX,inputY);
      stopTargetAudio(inputX,inputY);
    }
      else {

    canvasContext.clearRect(canvasLeftEdge,canvasTopEdge, canvasRightEdge,canvasBottomEdge);
    canvasContext.globalAlpha = 1;

    if (USE_SCREENSHAKE) {
      canvasContext.save();
      canvasContext.translate(screenshakeX, screenshakeY);
    }


    canvasContext.clearRect(canvasLeftEdge, canvasTopEdge, canvasRightEdge, canvasBottomEdge);

    canvasContext.fillText("loading", canvas.width / 2, canvas.height / 2); // FIXME: only draw when actually loading


    // drawn a bit bigger than the screen to avoid white edges during screenshakes
    canvasContext.drawImage(Images.getImage(chosenBackground), canvasLeftEdge - 16, canvasTopEdge - 16, canvasRightEdge + 16, canvasBottomEdge + 16);

    //settings button
    if ( inputPressed && ( (inputX > canvas.width - 100 && inputX < canvas.width &&
         inputY > canvas.height - 50 && inputY < canvas.height) ) ) {
            canvasContext.drawImage(Images.getImage("gui_button_settings_down"), canvas.width - 100, canvas.height - 50);
            showSettingsButtonBlurbSeen = true;
            isSettingsMenu = true;
            infoBlurbTransparency = 0.1;
            fanflap.play();
        } else {
          canvasContext.drawImage(Images.getImage("gui_button_settings"), canvas.width - 100, canvas.height - 50);
          }

    drawSwattedFlies();
    drawFlies();
    drawFlySwatter();

    for (let i = 0; i < arrayOfParticles.length; i++) {
      arrayOfParticles[i].draw();
    }

    if (tutorial) {
      drawFirstLaunchGamePlayInfoBlurb();
      drawFirstLaunchStatsInfoBlurb();
      drawSettingsButtonBlurb();
    }
    if (USE_SCREENSHAKE) { canvasContext.restore(); }
  }
}

  gameLoop = () => {
    updateEverything();
    drawEverything(inputX,inputY);
  }

  Images.loadImages();
  Sounds.loadSounds();
}

window.onresize = () => {
  let innerW = 1100;//window.innerWidth*0.8;

  //canvasBottomEdge = canvas.height = innerW * 1 / ASPECT_RATIO; //taken out for itch release
  canvasBottomEdge = 400;
  canvasRightEdge = canvas.width = innerW;

  canvasTopEdge = 0;
  canvasLeftEdge = 0;
}
