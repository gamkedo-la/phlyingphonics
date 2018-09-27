let firstLaunch;

function checkForFirstLaunch() {
  if (localStorage.getItem("firstLaunch") === null) {
    firstLaunch = true;
    localStorage.setItem("firstLaunch", firstLaunch);
  } else {
    firstLaunch = false;
  }
}

let infoBlurbTransparency = 0.1;
let infoBlurbTransparencySpeed = 0.02;
let gamePlayInfoRead = false;

function drawFirstLaunchGamePlayInfoBlurb() {
  if (!gamePlayInfoRead) {
  canvasContext.globalAlpha = infoBlurbTransparency;
  canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), 0,canvas.height - canvas.height/3, canvas.width, canvas.height/3);
  if ( ( (mousePressed || fingerPressed) && ( (mouseX >= canvas.width - buttonWidth - buttonWidth/3 && mouseX <= canvas.width - buttonWidth - buttonWidth/3 + 100)  &&
    (mouseY >= canvas.height - (canvas.height/3) + canvas.height/8) && (mouseY <= canvas.height - (canvas.height/3) + canvas.height/8) + 50) ) ||
    ( (fingerX >= canvas.width - buttonWidth - buttonWidth/3 - 300) && (fingerX <= canvas.width - buttonWidth - buttonWidth/3 + 100)  &&
      (fingerY >= canvas.height - (canvas.height/3) + canvas.height/8) && (fingerY <= canvas.height - (canvas.height/3) + canvas.height/8 + 50) ) ) {
      canvasContext.drawImage(Images.getImage("gui_button_check_down"), canvas.width - buttonWidth - buttonWidth/3,canvas.height - (canvas.height/3) + canvas.height/8, 100,50);
      fingerX = 0;
      fingerY = 0;
      fanflap.play();
      gamePlayInfoRead = true;
      console.log("showGlow", showGlow);
      console.log("stationaryMode", stationaryMode);
      console.log("customLevelsShowing", customLevelsShowing);
      console.log("toggleOffX", toggleOffX);
      console.log("customLevelsToggleCircleX", customLevelsToggleCircleX);
      console.log("stationaryToggleCircleX", stationaryToggleCircleX);
      infoBlurbTransparency = 0.1;
      settingsBlurbStartTime = new Date();
    } else {
  canvasContext.drawImage(Images.getImage("gui_button_check"), canvas.width - buttonWidth - buttonWidth/3,canvas.height - (canvas.height/3) + canvas.height/8, 100, 50);
  }
  colorText(language.gamePlayInfoLine1, canvas.width/2 - 300, canvas.height - canvas.height/3 + canvas.height/9, "#EF1300", "20px papyrus");
  colorText(language.gamePlayInfoLine2, canvas.width/2 - 325, canvas.height - canvas.height/3 + canvas.height/9 + 25, "#EF1300", "20px papyrus");
  colorText(language.gamePlayInfoLine3, canvas.width/2 - 315, canvas.height - canvas.height/3 + canvas.height/9 + 50, "#EF1300", "20px papyrus");
  colorText(language.gamePlayInfoLine4, canvas.width/2 - 50, canvas.height - canvas.height/3 + canvas.height/9 + 75, "#EF1300", "20px papyrus");
  infoBlurbTransparency += infoBlurbTransparencySpeed;
  canvasContext.globalAlpha = 1;
  }
}

let showSettingsButtonBlurbSeen = false;
let arrowX; //defined in initialize in main.js

function drawSettingsButtonBlurb() {
  if (gamePlayInfoRead) {
    settingsBlurbElapsedTime = settingsBlurbStartTime + currentTime;
    canvasContext.globalAlpha = infoBlurbTransparency;
    canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), canvas.width - 600,0, 500, 50);
    canvasContext.drawImage(Images.getImage("arrow"), arrowX, 13, 100, 25);
    colorText(language.showSettingsButtonBlurbText, canvas.width - 550, 30, "#EF1300", "20px papyrus");
    infoBlurbTransparency += infoBlurbTransparencySpeed;
    canvasContext.globalAlpha = 1;
  }
}

function drawSettingsMenuBlurbs() {

}
