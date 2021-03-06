let beginLevelAnimation = false;
let beginLevelBackgroundTransparency = 0.1;
let beginLevelBackgroundTransparencySpeed = 0.00925;
let ashiko = new Audio();
ashiko.src = "audio/ashiko.mp3";
ashiko.volOverride = 0.3;
ashiko.volume = masterVolume*ashiko.volOverride;
let goSoundPlayed = false;
let goSound = new Audio();
goSound.volOverride = 0.3;
goSound.volume = masterVolume*goSound.volOverride;
goSound.src = "audio/tempobell.mp3";
let timeGoSoundPlayed;
let timeSinceGoSoundPlayed;

let readySetGoSheetX = 0
let readySetGoAnimationStartTime;
let transitionCounter = 1

function playKiseReadySetGo(readySetGoAnimationDeltaTime) {
  if (readySetGoAnimationDeltaTime < 150) {
    readySetGoSheetX = 0;
  } else if (readySetGoAnimationDeltaTime > 150 && readySetGoAnimationDeltaTime < 300) {
    readySetGoSheetX = 2200;
  }  else if (readySetGoAnimationDeltaTime > 300 && readySetGoAnimationDeltaTime < 450) {
    readySetGoSheetX = 3300;
  } else if (readySetGoAnimationDeltaTime > 450 && readySetGoAnimationDeltaTime < 600) {
    readySetGoSheetX = 4400;
  } else if (readySetGoAnimationDeltaTime > 600 && readySetGoAnimationDeltaTime < 750) {
    readySetGoSheetX = 5500;
  } else if (readySetGoAnimationDeltaTime > 750 && readySetGoAnimationDeltaTime < 900) {
    readySetGoSheetX = 6600;
  } else if (readySetGoAnimationDeltaTime > 900 && readySetGoAnimationDeltaTime < 1050) {
    readySetGoSheetX = 7700;
  } else if (readySetGoAnimationDeltaTime > 1050 && readySetGoAnimationDeltaTime < 1200) {
    readySetGoSheetX = 8800;
  } else if (readySetGoAnimationDeltaTime > 1200 && readySetGoAnimationDeltaTime < 1350) {
    readySetGoSheetX = 9900;
  } else if (readySetGoAnimationDeltaTime > 1350 && readySetGoAnimationDeltaTime < 1500) {
    readySetGoSheetX = 11000;
  } else if (readySetGoAnimationDeltaTime > 1500 && readySetGoAnimationDeltaTime < 1650) {
    readySetGoSheetX = 12100;
  } else if (readySetGoAnimationDeltaTime > 1650 && readySetGoAnimationDeltaTime < 1800) {
    readySetGoSheetX = 13200;
  } else if (readySetGoAnimationDeltaTime > 1800 && readySetGoAnimationDeltaTime < 1950) {
    readySetGoSheetX = 14300;
  } else if (readySetGoAnimationDeltaTime > 1950 && readySetGoAnimationDeltaTime < 2100) {
    readySetGoSheetX = 15400;
  } else if (readySetGoAnimationDeltaTime > 2100 && readySetGoAnimationDeltaTime < 2250) {
    readySetGoSheetX = 16500;
  } else if (readySetGoAnimationDeltaTime > 2250 && readySetGoAnimationDeltaTime < 2400) {
    readySetGoSheetX = 17600;
  } else if (readySetGoAnimationDeltaTime > 2400 && readySetGoAnimationDeltaTime < 2550) {
    readySetGoSheetX = 18700;
  } else if (readySetGoAnimationDeltaTime > 2700 && readySetGoAnimationDeltaTime < 2850) {
    readySetGoSheetX = 19800;
    if (!goSoundPlayed){
      goSound.play();
      goSoundPlayed = true;
      timeGoSoundPlayed = new Date();
    }
  }

  console.log(readySetGoAnimationDeltaTime);
  canvasContext.drawImage(Images.getImage("readysetgosheet"),readySetGoSheetX,0, 1100,400, 0,0, 1100,400);

}

function playStebsReadySetGo() {
  canvasContext.clearRect(0,0, canvas.width,canvas.height);

  //draw the background
  canvasContext.globalAlpha = beginLevelBackgroundTransparency;
  if (beginLevelBackgroundTransparency < 0.33) {
    canvasContext.drawImage(Images.getImage("settings_menu_background2"),canvas.width/4,0, canvas.width/2,canvas.height);
    canvasContext.drawImage(Images.getImage("redtrafficlight"),canvas.width/2 - 150,0, 300,400);
    canvasContext.globalAlpha = 1;
  } else if (beginLevelBackgroundTransparency > 0.33 && beginLevelBackgroundTransparency < 0.66) {
    canvasContext.drawImage(Images.getImage("settings_menu_background2"),canvas.width/4,0, canvas.width/2,canvas.height);
    canvasContext.drawImage(Images.getImage("yellowtrafficlight"),canvas.width/2 - 150,0, 300,400);
    canvasContext.globalAlpha = 1;
  } else if (beginLevelBackgroundTransparency > 0.66){
    if (!goSoundPlayed){
      goSound.play();
      goSoundPlayed = true;
      timeGoSoundPlayed = new Date();
    }
    canvasContext.drawImage(Images.getImage("settings_menu_background2"),canvas.width/4,0, canvas.width/2,canvas.height);
    canvasContext.drawImage(Images.getImage("greentrafficlight"),canvas.width/2 - 150,0, 300,400);
    canvasContext.globalAlpha = 1;
  }

  beginLevelBackgroundTransparency += beginLevelBackgroundTransparencySpeed;
}

function drawBeginLevelAnimation() {

  let readySetGoAnimationDeltaTime = currentTime - readySetGoAnimationStartTime;

  if (transitionCounter % 2 !== 1) {
    playKiseReadySetGo(readySetGoAnimationDeltaTime);
  } else {
    playStebsReadySetGo();
  }

}

let levelCompletedAnimation = false;
let levelCompletionBackgroundTransparency = 0.1;
let levelCompletionBackgroundTransparencySpeed = 0.0085;
let levelCompletedStars1X = 100;
let levelCompletedStars1Y = -200;
let levelCompletedStars2X = 350;
let levelCompletedStars2Y = -200;
let levelCompletedStars3X = 800;
let levelCompletedStars3Y = -200;

let levelCompletedAudio = new Audio();
levelCompletedAudio.src = "audio/levelcompleted.mp3";
levelCompletedAudio.volOverride = 0.3;
levelCompletedAudio.volume = masterVolume*levelCompletedAudio.volOverride;

function drawLevelCompletedAnimation() {

  canvasContext.clearRect(0,0, canvas.width,canvas.height);

  //draw the background, great job text, and play button
  canvasContext.globalAlpha = levelCompletionBackgroundTransparency;
  canvasContext.drawImage(Images.getImage("settings_menu_background2"),canvas.width/4,0, canvas.width/2,canvas.height);
  colorText("Great Job!", canvas.width/2 - 115,canvas.height/2 + 65, "#FC5800", "50px papyrus");

  //play
  if (inputPressed && inputX >= canvas.width/3 + 120 && inputX <= canvas.width/3 + 270 && inputY >= 325 && inputY <= 425) {
        canvasContext.drawImage(Images.getImage("gui_button_play_down"), canvas.width/3 + 120,290, 150,100);
        tutorial = false;
      } else {
        canvasContext.drawImage(Images.getImage("gui_button_play"), canvas.width/3 + 120,290, 150,100);
      }

  canvasContext.globalAlpha = 1;
  levelCompletionBackgroundTransparency += levelCompletionBackgroundTransparencySpeed;

  //draw stars image left side
  canvasContext.drawImage(Images.getImage("yellowstarsplat"), levelCompletedStars1X,levelCompletedStars1Y, 200,200);
  //draw stars image middle
  canvasContext.drawImage(Images.getImage("yellowstarsplat"), levelCompletedStars2X,levelCompletedStars2Y, 400,400);
  //draw stars image right side
  canvasContext.drawImage(Images.getImage("yellowstarsplat"), levelCompletedStars3X,levelCompletedStars3Y, 200,200);


  //move the stars
  if (levelCompletedStars1X < 265) {
    levelCompletedStars1X += 5;
  }
  if (levelCompletedStars3X > 635) {
    levelCompletedStars3X -= 5;
  }
  if (levelCompletedStars1Y < -40) {
    levelCompletedStars1Y += 5;
  }
  if (levelCompletedStars2Y < -75) {
    levelCompletedStars2Y += 5;
  }
  if (levelCompletedStars3Y < -40) {
    levelCompletedStars3Y += 5;
  }

}

let tryAgainAnimation = false;
let tryAgainBackgroundTransparency = 0.1;
let tryAgainBackgroundTransparencySpeed = 0.0085;
let tryAgainAudio = new Audio();
tryAgainAudio.src = "audio/tryagain.mp3";
tryAgainAudio.volOverride = 0.3;
tryAgainAudio.volume = masterVolume*tryAgainAudio.volOverride;

function drawTryAgainAnimation() {

    canvasContext.clearRect(0,0, canvas.width,canvas.height);

    //draw the background, great job text, and play button
    canvasContext.globalAlpha = tryAgainBackgroundTransparency;
    canvasContext.drawImage(Images.getImage("settings_menu_background2"),canvas.width/4,0, canvas.width/2,canvas.height);
    canvasContext.drawImage(Images.getImage("tryagainbaby"),canvas.width/4,25, canvas.width/2 - 50,canvas.height - 100);
    colorText("Almost!", canvas.width/2 - 75,canvas.height/2 + 65, "#FC5800", "50px papyrus");

    //play
    if (inputPressed && inputX >= canvas.width/3 + 120 && inputX <= canvas.width/3 + 270 && inputY >= 325 && inputY <= 425) {
          canvasContext.drawImage(Images.getImage("gui_button_play_down"), canvas.width/3 + 120,290, 150,100);
          tutorial = false;
        } else {
          canvasContext.drawImage(Images.getImage("gui_button_play"), canvas.width/3 + 120,290, 150,100);
        }

    canvasContext.globalAlpha = 1;
    tryAgainBackgroundTransparency += tryAgainBackgroundTransparencySpeed;
}

function handleLevelCompletedInput() {
  if (inputX >= canvas.width/3 + 120 && inputX <= canvas.width/3 + 270 && inputY >= 325 && inputY <= 425) {

    readySetGoAnimationStartTime = new Date();

    levelCompletedAnimation = false;
    tryAgainAnimation = false;
    beginLevelAnimation = true;

    fanflap.play();
    ashiko.play();
    levelCompletionBackgroundTransparency = 0.1;
    tryAgainBackgroundTransparency = 0.1;
    levelCompletedStars1X = 100;
    levelCompletedStars1Y = -200;
    levelCompletedStars2X = 350;
    levelCompletedStars2Y = -200;
    levelCompletedStars3X = 800;
    levelCompletedStars3Y = -200;
  }
}
